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
  const headerList = await headers();
  
  // Recupero IP pulito e reale
  const forwarded = headerList.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'anonymous';
  
  const now = Date.now();
  const userData = ipCache.get(ip);

  // 2. Logica di blocco (Rate Limiting) - Ora stabile
  if (userData) {
    if (now - userData.lastRequest < 600000 && userData.count >= 10) { // Abbassato a 10 tentativi per sicurezza
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

    // SCUDO 1: Controllo stringente sull'email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    // SCUDO 2: Controllo di sicurezza sulle lunghezze contro attacchi Injection di testo
    if (
      (consent_text && consent_text.length > 2000) || 
      (title_campaign && title_campaign.length > 200) ||
      (source && source.length > 100)
    ) {
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

    // 4. Chiamata a Brevo
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

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Errore Brevo dettagliato:", JSON.stringify(errorData));
      return NextResponse.json({ error: errorData.message || 'Errore dal server Brevo' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error("Errore tecnico API:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}