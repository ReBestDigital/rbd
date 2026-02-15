import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// 1. Memoria temporanea per gli IP
const ipCache = new Map<string, { count: number; lastRequest: number }>();

export async function POST(request: Request) {
  const headerList = await headers();
  
  // RECUPERO IP UNIFICATO (fondamentale per evitare anomalie)
  //const forwarded = headerList.get('x-forwarded-for');
  //const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
  
  const ip = headerList.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const userData = ipCache.get(ip);

  // 2. Logica di blocco (Rate Limiting)
  if (userData) {
    // 600.000 ms = 10 minuti
    if (now - userData.lastRequest < 600000 && userData.count >= 3) {
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
    const { email, source, privacy_version, privacy_hash, title_campaign, brevoListId, brevotemplateId } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 3. Costruzione URL Dinamico
    const host = headerList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const redirectUrl = `${protocol}://${host}/thank-you?campaign=${source}`;

    // 4. Chiamata a Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email: email,
        templateId: Number(brevotemplateId), // Brevo vuole un numero qui
        includeListIds: [Number(brevoListId)], // Anche qui vuole numeri
        redirectionUrl: redirectUrl,
        attributes: {
          'OPT_IN': true,
          'OPT_IN_DATE': new Date().toISOString().split('T')[0],
          'IP_ADDRESS': ip,
          'SOURCE': source || 'generic_site',
          'PRIVACY_VERSION': privacy_version || 'v1.0',
          'CONSENT_TEXT': 'Accepted newsletter and commercial info',
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