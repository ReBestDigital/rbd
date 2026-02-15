import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, source, privacy_version , privacy_hash,title_campaign, brevoListId, brevotemplateId} = await request.json();
   // const privacy_hash = "asasf" ;
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Recupero IP (fondamentale per GDPR)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0';
    
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email: email,
        templateId: brevotemplateId,
        includeListIds: [brevoListId],
        redirectionUrl: `http://localhost:3000/thank-you?campaign=${source}`,
        //updateEnabled: true,
        attributes: {
          'OPT_IN': true,
          'OPT_IN_DATE': new Date().toISOString().split('T')[0],
          'IP_ADDRESS': ip, // Assicurati che su Brevo sia IP_ADDRESS
          'SOURCE': source || 'generic_site',
          'PRIVACY_VERSION': privacy_version || 'v1.0', // Assicurati che su Brevo sia PRIVACY_VERSION
          'CONSENT_TEXT': 'Accepted newsletter and commercial info',
          'PRIVACY_HASH': privacy_hash,
          'INSCRIPTION_CAMPAIGN_TITLE' : title_campaign,
        },
       
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert("Errore dal server: " + errorData.error);
      return NextResponse.json({ error: errorData.message }, { status: response.status });
      
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error("Errore tecnico:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}