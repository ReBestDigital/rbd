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
  link: "https://rebestdigital.gumroad.com/l/rsbojb?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
{
  id: "3",
  titolo: "⚠️ ReBest Digital Ecosystem: Your Complete Real Estate Marketing Machine (Second Chance Offer)",
  sottotitolo: "80+ High-Performance Assets, Templates, Video Tutorials & FREE 'Stop Being Invisible!' Audiobook",
  descrizione1: "The real estate market is changing. Built specifically for established professionals, the ReBest Digital Ecosystem provides a strategic, automated, and ready-to-use marketing machine designed to position you as the local leader. Includes 80+ engineered assets: 25+ Newsletter sequences, 4+ Lead Magnets, 32+ Social Media templates, Open House physical kits, 10+ Detailed Manuals, and a private Video Tutorial Playlist.",
  descrizione2: "Includes EXCLUSIVE BONUS: The full 'Stop Being Invisible!' Audiobook with 50 copy-and-paste social scripts, template mastery guides, and ecosystem optimization protocols. Also adaptable for Agencies via the Marketing Agency License to deliver Done-For-You client services.",
  immagine: "/RBDquadratoxthumbnail.webp", // Sostituisci libero con il path della copertina del prodotto
  posizioneImmagine: "sinistra", // Impostato a sinistra per continuare l'alternanza a scacchiera con il prodotto 2 (destra)
  jolly: "🎯 SPECIAL OFFER & DELIVERY NOTE: Instant digital download with lifetime access to the private FB ReBest Ecosystem Group. Includes 80+ conversion assets, video tutorials, manual frameworks, and full audiobook package. All sales are final.",
  link: "/rbd-ecosystem" // Sostituisci libero con il tuo link di vendita o checkout dedicato
},
{
  id: "4",
  titolo: "🚨 25-Piece Real Estate Newsletter Bundle | 13 Audience Segmentation + 12 Monthly Suite",
  sottotitolo: "The Ultimate All-In-One Real Estate Newsletter Ecosystem (Canva Templates + Video Strategies)",
  descrizione1: "Stop buying $20 single-purpose templates that end up in SPAM. This massive 25-piece bundle combines our 12-Month Seasonal Nurture Suite and 13 Strategic Audience Segmentation Funnels into a high-converting dual-engine marketing system. Built on a technical block architecture designed to drastically improve mobile responsiveness, deliverability, and database activation 365 days a year.",
  descrizione2: "Includes 25 templates pre-written with real high-converting real estate copy (zero 'Lorem Ipsum' filler), tactical quick alerts for CRM database tagging, and dedicated step-by-step video tutorials covering technical export setups, deliverability strategies, and anti-spam protocols.",
  immagine: "/NewsletterBundle25Piece4.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "destra", // Impostato a destra per mantenere l'alternanza visiva a scacchiera con il prodotto 3 (sinistra)
  jolly: "⚙️ DIGITAL DELIVERY & LICENSE NOTE: Instant digital download. Includes Standard Professional License for up to 3 local office branches. Due to the digital nature of this complete ecosystem, all sales are final.",
  link: "https://rebestdigital.gumroad.com/l/cqirzw?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
{
  id: "5",
  titolo: "12-Month Real Estate Newsletter Suite | Canva Templates + Video Training",
  sottotitolo: "Turnkey Annual Email Marketing Workflow for Deliverability & Nurture",
  descrizione1: "A full-year seasonal real estate email marketing system engineered for inbox deliverability, database nurture, and local market domination. Built on a 'Smart Block' hybrid architecture and single-column mobile-first designs, this suite ensures your emails bypass SPAM filters and render perfectly on every smartphone.",
  descrizione2: "Includes 12 monthly newsletters pre-written with real, high-converting real estate copy (zero 'Lorem Ipsum' filler) and exclusive step-by-step video training covering technical export setups, email software assembly, and anti-spam deliverability strategies.",
  immagine: "/NewsletterSuite12Month5.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "sinistra", // Impostato a sinistra per continuare l'alternanza a scacchiera con il prodotto 4 (destra)
  jolly: "⚙️ DIGITAL DELIVERY & LICENSE NOTE: Instant digital download. 100% compatible with free Canva accounts. Includes Standard Professional License for up to 3 local office branches. Due to the digital nature of this product, all sales are final.",
  link: "https://rebestdigital.gumroad.com/l/ggfpz?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
{
  id: "6",
  titolo: "13 Strategic Real Estate Newsletters | Audience Segmentation Canva Templates",
  sottotitolo: "Psychologically Engineered Audience Segmentation Machine for Real Estate Professionals",
  descrizione1: "Stop blasting generic emails that get ignored or trigger unsubscribes. This 13-part strategic suite delivers hyper-focused conversion funnels designed to target specific audiences: Tactical Quick Alerts for fast CRM tagging, Smart Seller Funnels, First-Time Homebuyer Funnels, Investor & Commercial Suites, Fix & Flip alerts, and B2B Partnership outreach layouts.",
  descrizione2: "Includes 13 Canva templates pre-written with real high-converting copy (zero 'Lorem Ipsum' filler), dynamic CRM database tagging strategies, and dedicated step-by-step video training covering technical export setups, deliverability rules, and anti-spam blueprints.",
  immagine: "/StrategicNewsletterSuite13Piece6.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "destra", // Impostato a destra per mantenere l'alternanza visiva a scacchiera con il prodotto 5 (sinistra)
  jolly: "⚙️ DIGITAL DELIVERY & LICENSE NOTE: Instant digital download. 100% compatible with free Canva accounts. Includes Standard Professional License for up to 3 local office branches. Due to the digital nature of this product, all sales are final.",
  link: "https://rebestdigital.gumroad.com/l/aqixvn?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
{
  id: "7",
  titolo: "Vip 4-Funnels Social Automation Bundle: 4 Lead Magnet + 4-Funnels Engine Automation for Social (Instagram & Facebook)",
  sottotitolo: "Turnkey 24/7 Social Media Client Acquisition & Automated Segmentation Engine",
  descrizione1: "Turn your Instagram and Facebook profiles into a high-precision lead acquisition engine on SendPulse without recurring monthly software fees. This complete done-for-you bundle builds and deploys 4 dedicated automation funnels (Seller Acquisition, Buyer Qualification, Investor Deals, and Contractor B2B Partnerships) to qualify contacts and capture leads directly inside direct messages.",
  descrizione2: "Includes 4 high-value lead magnets: Trusted Vendor List (LM001), Neighborhood Guide (LM002), Homebuyer Checklist (LM003), and Home Seller Checklist (LM004). Features global comment-to-DM triggers, custom profile variable segmentation, and full end-to-end testing.",
  immagine: "/Vip4FunnelsAutomation7.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "sinistra", // Impostato a sinistra per continuare l'alternanza visiva a scacchiera con il prodotto 6 (destra)
  jolly: "⚙️ DONE-FOR-YOU SETUP & TECHNICAL NOTE: Fully optimized to run on SendPulse's free tier (up to 10,000 automated messages/mo). We build, integrate, and test all backend logic and variable connections for you.",
  link: "https://rebestdigital.gumroad.com/l/pvgawi?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},
{
  id: "8",
  titolo: "Pro Dual-Funnel Authority Bundle: 2 Checklist Lead Magnet Pack + Pro Dual Engine Social Automation (Instagram & Facebook)",
  sottotitolo: "Turnkey Automated Buyer & Seller Chat Qualification Engine with Zero Monthly Software Fees",
  descrizione1: "Turn your Instagram and Facebook profiles into a high-precision lead acquisition engine on SendPulse without recurring monthly software fees. The Pro Dual-Funnel Authority Bundle builds, integrates, and deploys two dedicated chat funnels (Seller Acquisition & Buyer Qualification) to automatically segment leads, ask qualification questions, and capture contact details inside direct messages.",
  descrizione2: "Includes 2 high-value lead magnets: Homebuyer Checklist (LM003) and Home Seller Checklist (LM004). Features global comment-to-DM triggers across posts and Reels, custom SendPulse profile variable segmentation for Buyers vs. Sellers, and complete end-to-end testing.",
  immagine: "/ProDualFunnelAutomation8.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "destra", // Impostato a destra per continuare l'alternanza visiva a scacchiera con il prodotto 7 (sinistra)
  jolly: "⚙️ DONE-FOR-YOU SETUP & TECHNICAL NOTE: Fully optimized to run on SendPulse's free tier (up to 10,000 automated messages/mo). We manage all backend logic rules, visual architecture, technical connections, and variable setups for you.",
  link: "https://rebestdigital.gumroad.com/l/ldroz?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
},{
  id: "9",
  titolo: "Starter Turnkey Real Estate Lead Generation Bundle: 2 Checklist Lead Magnet Pack + Starter Social Automation Engine (Instagram & Facebook)",
  sottotitolo: "Turnkey Automated Lead Capture Chat Engine with Zero Monthly Software Fees",
  descrizione1: "Turn your Instagram and Facebook profiles into a 24/7 lead collection system without paying recurring monthly software fees. The Starter Social Automation Engine builds and deploys a streamlined, automated messaging flow on SendPulse to automatically capture and qualify buyer and seller contacts while you focus on showings and closing deals.",
  descrizione2: "Includes 2 high-value lead magnets: Homebuyer Checklist (LM003) and Home Seller Checklist (LM004). Features 2 comment-to-DM keyword triggers on posts and Reels, a 4-step interactive lead capture chat flow (Name, Email, Phone, and Resource Delivery), a cold DM Welcome Bot, and full end-to-end testing.",
  immagine: "/StarterAutomationEngine9.jpg", // Sostituisci liberamente con il path della copertina del prodotto
  posizioneImmagine: "sinistra", // Impostato a sinistra per continuare l'alternanza visiva a scacchiera con il prodotto 8 (destra)
  jolly: "⚙️ DONE-FOR-YOU SETUP & TECHNICAL NOTE: Built on SendPulse's free tier infrastructure (supporting up to 10,000 automated messages/mo). We manage the visual design, logic rules, and technical integration for you.",
  link: "https://rebestdigital.gumroad.com/l/qedzp?layout=profile" // Sostituisci liberamente con il tuo link di vendita o checkout dedicato
}
];