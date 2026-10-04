export interface ServiceItem {
  id: string;
  titolo: string;
  sottotitolo: string;
  descrizione1: string;
  descrizione2: string;
  immagine: string;
  posizioneImmagine: 'sinistra' | 'destra';
  jolly: string; // Il tuo campo "conclusioni/jolly"
  link: string;
}

export const servicesData: ServiceItem[] = [
  {
  id: "1",
  titolo: "🛑 STOP BEING INVISIBLE! (Why Veteran Real Estate Agents are failing in lead generation and Losing the Digital Battle.[The Strategic Protocol to Reclaim Your Local Market.])",
  sottotitolo: "The Real Estate Strategy Book (PDF and Epub)",
  descrizione1: "Are you sick of buying leads from portals that use YOUR own money to hijack the attention that should belong to YOU? It's the ultimate industry irony: you pay a monthly subscription to a portal, and they use that capital to outbid you on Google and Social Media, capturing the homeowners in your neighborhood only to sell them back to you as 'premium leads.'",
  descrizione2: "Stop being a 'Digital Tenant' in your own territory. In this high-impact strategy book, you will learn the ReBest Strategic Protocol—the definitive blueprint to reclaim your local market, avoid the portal trap, and transition from an invisible salesperson to a recognized Local Authority. You will master pattern interrupts, data sovereignty, and get access to the 54-Script Authority Vault alongside 7 complete high-performance toolkits.",
  immagine: "/real-estate-marketing-ebook-stop-being-invisible.webp", // Sostituisci liberamente con il tuo path quando pronto
  posizioneImmagine: "sinistra", // Puoi cambiare in 'destra' se preferisci invertire l'ordine iniziale
  jolly: "⚠️ STRATEGIC DISCLAIMER: Real estate success depends on your action, refinement, and local market dynamics. We provide the high-efficiency marketing weapons and the blueprint; you provide the discipline. Stop subsidizing your own extinction.",
  link: "/book" // Sostituisci liberamente con il tuo link di vendita o checkout
},
 {
  id: "2",
  titolo: "🎧 STOP BEING INVISIBLE! (Why Veteran Real Estate Agents are Failing in Lead Generation and Losing the Digital Battle.[Audiobook Edition])",
  sottotitolo: "The Real Estate Strategy Audiobook (MP3 + PDF Companion & Script Vault)",
  descrizione1: "Turn your commute into a masterclass. This audiobook is engineered to fit seamlessly into the 'gaps' of your day—listen while driving to your next listing appointment and master the ReBest Strategic Protocol without touching a keyboard. Instantly receive the 1x Full Audiobook and the 1x Complete PDF Companion & Script Vault for immediate copy-and-paste execution.",
  descrizione2: "Production Technology Note: This audiobook is narrated by Andrew AI, a custom-engineered synthetic voice protocol. Unlike generic text-to-speech, this high-authority protocol has been iteratively refined, tested, and audited to deliver a flawless, high-velocity strategic listening experience. Learn how to build an impenetrable Fortress of Trust on autopilot while you drive.",
  immagine: "/QuadratiAudioStopBeingInvisible2.jpg", // Sostituisci liberamente con il path della copertina dell'audiolibro
  posizioneImmagine: "destra", // Impostato a destra per creare l'alternanza visiva a scacchiera con il primo
  jolly: "⚙️ DELIVERY & TECH NOTE: Instant digital download. The included PDF companion contains immediate access links to stream or download your MP3 Audiobook and open your 54-Script Vault. Due to the digital nature of this package, all sales are final.",
  link: "/audiobook" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
];