import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

//export const runtime = 'edge'; // <--- RIMETTI QUESTA RIGA QUI!


// 1. Memoria temporanea per gli IP (Funziona correttamente su Node.js standard)
const ipCache = new Map<string, { count: number; lastRequest: number }>();

// Semplice funzione Regex per verificare la validità dell'email lato server
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length < 150;
};

export async function POST(request: Request) {
  console.log("=== [INIZIO CHIAMATA API SUBSCRIBE] ===");
  const headerList = await headers();
  
  // Recupero IP pulito e reale
  const forwarded = headerList.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'anonymous';
  
  const now = Date.now();
  const userData = ipCache.get(ip);

  // 2. Logica di blocco (Rate Limiting) - Ora stabile
  if (userData) {
    if (now - userData.lastRequest < 600000 && userData.count >= 10) { 
      console.log(`[RATE LIMIT] Bloccato IP: ${ip}`);
      return NextResponse.json(
        { error: 'Troppi tentativi. Riprova tra 10 minuti.' }, 
        { status: 429 }
      );
    }
    ipCache.set(ip, { count: userData.count + 1, lastRequest: now });
  } else {
    ipCache.set(ip, { count: 1, lastRequest: now });
  }

  try {
    const body = await request.json();
    const { email, source, privacy_version, consent_text, privacy_hash, title_campaign, brevoListId, brevotemplateId } = body;

    console.log(`[DATI RICEVUTI LATO SERVER] Email: ${email} | Source: ${source} | Target List ID: ${brevoListId}`);

    // SCUDO 1: Controllo stringente sull'email
    if (!email || !isValidEmail(email)) {
      console.log(`[VALIDAZIONE ERROR] Email non valida o mancante: ${email}`);
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    // SCUDO 2: Controllo di sicurezza sulle lunghezze contro attacchi Injection di testo
    if (
      (consent_text && consent_text.length > 2000) || 
      (title_campaign && title_campaign.length > 200) ||
      (source && source.length > 100)
    ) {
      console.log("[VALIDAZIONE ERROR] Stringhe in input troppo lunghe.");
      return NextResponse.json({ error: 'Invalid input data length' }, { status: 400 });
    }

    // 3. Costruzione URL Dinamico
    const host = headerList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    let redirectUrl;

    if (source === "getprivategrouplifetime") {
      redirectUrl = `${protocol}://${host}/thank-you-rbde?campaign=${source}`;
    } else {
      redirectUrl = `${protocol}://${host}/thank-you?campaign=${source}`;
    }
    console.log(`[REDIRECTION URL GENERATO] ${redirectUrl}`);

    // 4. Chiamata a Brevo con Controllo Esistenza
    const cleanEmail = email.trim();
    const checkUrl = 'https://api.brevo.com/v3/contacts/' + encodeURIComponent(cleanEmail);
 
    
    console.log("[BREVO STEP 1] Controllo esistenza su URL:", checkUrl);

    // Verifichiamo se l'utente esiste già su Brevo
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
    });

    console.log(`[BREVO STEP 1 RISPOSTA] Status Code: ${checkResponse.status}`);

    const dataOggi = new Date().toISOString().split('T')[0];

    if (checkResponse.ok) {
          
      console.log("[BREVO STEP 2 - CASO A] Il contatto ESISTE GIÀ. Avvio inserimento forzato in lista.");
      // 1. Leggiamo i dati dell'utente che Brevo ci ha appena dato
      const contactData = await checkResponse.json();
      // 2. Estraiamo le sue liste attive (se non ne ha, creiamo una lista vuota)
      const userLists = contactData.listIds || [];
      console.log(userLists);
      // 3. Verifichiamo se l'utente ha già dentro l'ID della lista del gruppo Facebook
      const targetListIdNumber = Number(brevoListId);
      if (userLists.includes(targetListIdNumber)) {
        console.log("User Already in List "+ targetListIdNumber +"! ." );
        return NextResponse.json({ error: 'Already in List , reach us at info@rebelsdigital.com' },
        { status: 400 });
      } // In sospeso , trovare come passsarlo nella main page anche se puo capitare rarissime volte


      // URL CORRETTO PER L'AGGIORNAMENTO: Punta direttamente al contatto specifico tramite la sua email
      const updateUrl = 'https://api.brevo.com/v3/contacts/' + encodeURIComponent(cleanEmail);
     
      const updateResponse = await fetch(updateUrl, {
        method: 'PUT', // Usiamo PUT come richiesto dalle specifiche di Brevo per aggiornare un contatto esistente
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': process.env.BREVO_API_KEY as string,
        },
        body: JSON.stringify({
          listIds: [Number(brevoListId)], // Aggiunge l'utente alla nuova lista del gruppo Facebook
          attributes: {
            'IP_ADDRESS': ip,
            'SOURCE': source ? source.substring(0, 50) : 'biella_network',
            'PRIVACY_VERSION': privacy_version ? privacy_version.substring(0, 10) : 'v1.0',
            'CONSENT_TEXT': consent_text,
            'CONSENT_DATE': dataOggi[0], // Usiamo solo la parte della data senza array
            'PRIVACY_HASH': privacy_hash,
            'INSCRIPTION_CAMPAIGN_TITLE': title_campaign,
          },
        }),
      });

      console.log(`[BREVO STEP 2 - CASO A RISPOSTA] Status Code Aggiornamento: ${updateResponse.status}`);

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        console.error("[BREVO ERROR DETTAGLIATO AGGIORNAMENTO]:", JSON.stringify(errorData));
        return NextResponse.json({ error: errorData.message || 'Errore aggiornamento utente' }, { status: updateResponse.status });
      }
      
      console.log("[BREVO SUCCESS - CASO A] Contatto esistente aggiunto alla lista con successo.");


    } else {
      console.log("[BREVO STEP 2 - CASO B] Il contatto NON esiste. Avvio procedura Double Opt-In.");
      
      const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email: email.trim(),
        templateId: Number(brevotemplateId), 
        includeListIds: [Number(brevoListId)], 
        redirectionUrl: redirectUrl,
        attributes: {
          'OPT_IN': true,
          'OPT_IN_DATE': new Date().toISOString().split('T')[0],
          'IP_ADDRESS': ip,
          'SOURCE': source ? source.substring(0, 50) : 'biella_network',
          'PRIVACY_VERSION': privacy_version ? privacy_version.substring(0, 10) : 'v1.0',
          'CONSENT_TEXT': consent_text,
          'CONSENT_DATE': new Date().toISOString().split('T')[0],
          'PRIVACY_HASH': privacy_hash,
          'INSCRIPTION_CAMPAIGN_TITLE': title_campaign,
        },
      }),
    });

      console.log(`[BREVO STEP 2 - CASO B RISPOSTA] Status Code Double Opt-In: ${response.status}`);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("[BREVO ERROR DETTAGLIATO DOUBLE OPT-IN]:", JSON.stringify(errorData));
        return NextResponse.json({ error: errorData.message || 'Errore dal server Brevo' }, { status: response.status });
      }
      
      console.log("[BREVO SUCCESS - CASO B] Email di Double Opt-In inviata con successo al nuovo utente.");
    }

    console.log("=== [FINE CHIAMATA API SUBSCRIBE - COMPLETATA CON SUCCESSO] ===");
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error("[ERRORE TECNICO CRITICO EXCEPTION]:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
