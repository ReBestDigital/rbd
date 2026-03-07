import { BRAND_STYLES } from './branding';
import { PRIVACY_DOCS } from './privacy';
import { SOCIALS } from './socials';

export const CAMPAIGNS = {
  // ************************          PRODOTTI           *************************
  // Stop Being invisible , campagna del libro
  "stop": {
    id: "stop",
    title: "Own your Business, stop paying for someone else growth...",
    subtitle: "Our book explain how to do it. Download the Infographics to escape the portals slavery.",
    leadMagnet: "the Infographics",
    buttonLabel: "Get the infographics in your inbox!",
    image: "/CopertinaDefinitivaPerKindle.jpg", // Percorso della copertina
    //style: BRAND_STYLES["modern-blue"], // Collega lo stile
    style: BRAND_STYLES["dark-magenta"], // Collega lo stile
    legal: PRIVACY_DOCS["standard-v1"],  // Collega la privacy
    brevoListId: 3,
    brevotemplateId : 8 ,
    thankYou: {
  icon: "🚀",
  title: "Confirmation Received!",
  description: "Thank you for confirming your email.",
  highlight: "Your infographic",
  subDescription: "is on its way to your inbox.",
 ctaLabel: "Here you can find the roadmap",
  ctaLink: SOCIALS["rebest-digital"].site,
  secondaryLabel: "ReBest Instagram",
  secondaryLink: SOCIALS["rebest-digital"].instagram,
  ctaLabel3: "You tube secret playlist",
  ctaLink3: "https://youtube.com/yourchannel",
  ctaLink4: "https://wa.me/tuonumero", // Aggiungi questo
  ctaLabel4: "Facebook Vault",   // E questo
  footerNote: "Please check your Spam or Promotions folder if you don't see the mail with the download link.",
}
},

"bird": {
    id: "bird",
    // Focus sul dominio del mercato e sull'investimento intelligente
    title: "Dominate Your Real Estate Market for 1/5 of the Price. Timing pays off", 
    // Spieghiamo chiaramente il valore dell'operazione Early Bird
    subtitle: "Stop overpaying for generic, elegant tools. Secure the ReBest Digital Ecosystem now and start to dominate your Area with our Ecosystem. Not ready yet? Download our Professional Homebuyer Checklist to witness the quality that will set you apart from every competitor.", 
    leadMagnet: "the Homebuyer Checklist",
    buttonLabel: "Get the Checklist & Reveal the Ecosystem",
    image: "/earlySellpage1.jpg", 
    style: BRAND_STYLES["dark-magenta"], 
    legal: PRIVACY_DOCS["standard-v1"],  
    brevoListId: 9,
    brevotemplateId: 8 ,
    thankYou: {
        icon: "🦅",
        title: "The Vision of an Eagle, the Timing of an Early Bird!",
        description: "You've just taken the first step to escape the portals' slavery. Your high-end checklist is being delivered.",
        highlight: "500% Value Gain Secured",
        subDescription: "While you wait for the email, discover the full arsenal of 80+ strategic assets waiting for you in the Early Bird vault.",
        // CTA 1: Spinge forte sulla vendita/roadmap dell'ecosistema
        ctaLabel: "View the Early Bird Arsenal (5x Value)",
        ctaLink: SOCIALS["rebest-digital"].site, 
        // CTA 2: Social per l'autorità
        secondaryLabel: "Join the Revolution on IG",
        secondaryLink: SOCIALS["rebest-digital"].instagram,
        // CTA 3: Video per mostrare il "dietro le quinte"
        ctaLabel3: "Watch the Strategy in Action",
        ctaLink3: "https://youtube.com/yourchannel",
        // CTA 4: Gruppo FB per il "social proof"
        ctaLabel4: "Enter the Facebook Vault",   
        ctaLink4: "https://facebook.com/groups/tuogruppo", 
        footerNote: "Check your Spam folder if the Checklist doesn't arrive in 2 minutes. Don't let the 'Digital New-Comers' win.",
    }
},
"bird1": {
    id: "bird1",
    title: "Own your Business, stop paying for someone else growth...",
    subtitle: "Our book explain how to do it. Download the Infographics to escape the portals slavery.",
    leadMagnet: "the Infographics",
    buttonLabel: "Get the infographics in your inbox!",
    image: "/earlySellpage1.jpg", // Percorso della copertina
    style: BRAND_STYLES["dark-magenta"], // Collega lo stile
    //style: BRAND_STYLES["modern-blue"], // Collega lo stile
    legal: PRIVACY_DOCS["standard-v1"],  // Collega la privacy
    brevoListId: 3,
    brevotemplateId : 8 ,
    thankYou: {
  icon: "🦅",
  title: "The vision of an Eagle, the timing of an Early Bird!",
  description: "Thank you for confirming your email.",
  highlight: "Your infographic",
  subDescription: "is on its way to your inbox.",
 ctaLabel: "Here you can find the roadmap",
  ctaLink: SOCIALS["rebest-digital"].site,
  secondaryLabel: "ReBest Instagram",
  secondaryLink: SOCIALS["rebest-digital"].instagram,
  ctaLabel3: "You tube secret playlist",
  ctaLink3: "https://youtube.com/yourchannel",
  ctaLink4: "https://wa.me/tuonumero", // Aggiungi questo
  ctaLabel4: "Facebook Vault",   // E questo
  footerNote: "Please check your Spam or Promotions folder if you don't see the mail with the download link.",
}
},
// after purcase early bird
"birdafter": {
    id: "birdafter",
    title: "Congratulations! You ve just secured your Real Estate unfair advantage. Your PDF contains all the Templates link.",
    
    // Sottotitolo che spiega il "perché" dell'azione richiesta e il vantaggio Early Bird
    subtitle: "With this strategic move, you have armed yourself with everything you need to compete against Digital newcomers and reclaim your dominance in your local market—both on the street and in the digital landscape.",
    
    leadMagnet: "The Early Bird Activation",
    buttonLabel: "ACTIVATE MY EARLY BIRD STATUS",
    image: "/EarlyBirdGreatJob.jpg", 
    style: BRAND_STYLES["dark-magenta"], 
    
    // Testo legale per la "parte piccola" sotto il form
    legal: PRIVACY_DOCS["standard-v1"], 
    brevoListId: 7,
    brevotemplateId: 14,
    
    thankYou: {
        icon: "🦅",
        title: "Welcome to the Early Bird program.",
        description: "We value our clients privacy so we decided to adopt a double opt-in registration althought we might create some friction. Your explicit consent has been recorded. You are now officially a ReBest Early Bird member.",
        highlight: "Access the Vault",
        subDescription: "Below you will find the direct links to your PRIVATE groups! Start dominating your area.",
        ctaLabel: "YT Templates DrillDown",
        ctaLink: SOCIALS["rebest-digital"].YTdrildownTempatesPRIVATE,
        secondaryLabel: "FB ReBest Digital Ecosystem",
        secondaryLink: SOCIALS["rebest-digital"].facebookRBDecosystemPRIVATE,
        ctaLabel3: "Strategical Nblm discussions",
        ctaLink3: SOCIALS["rebest-digital"].YTStrategicalNblmPRIVATE,
        ctaLabel4: "YT 7-Days Preview P-list",
        ctaLink4: "https://www.youtube.com/playlist?list=PLVCnprZcthXp01g95LsAdtgPp0ffvyX4r",
        footerNote: "EARLY BIRD NOTICE: Our bonus channels are currently under construction, which is why you secured such a competitive advantage. We expect them to be 80% complete by April 30, 2026. If you joined at this very early stage, content may be limited at first." }
},
"birdafter1": { //obsoleto , pensavo ci fosse bisogno di un altro passaggio
    id: "birdafter",
    title: "Congratulations! You ve just secured your Real Estate unfair advantage.",
    
    // Sottotitolo che spiega il "perché" dell'azione richiesta e il vantaggio Early Bird
    subtitle: "With this strategic move, you have armed yourself with everything you need to compete against Digital New-comers and reclaim your dominance in your local market—both on the street and in the digital landscape.",
    
    leadMagnet: "The Early Bird Activation",
    buttonLabel: "ACTIVATE MY EARLY BIRD STATUS",
    image: "/earlySellpage1.jpg", 
    style: BRAND_STYLES["dark-magenta"], 
    
    legal: PRIVACY_DOCS["standard-v1"], 
    brevoListId: 7,
    brevotemplateId: 14,
    
    thankYou: {
        icon: "🦅",
        title: "Welcome to the Early Bird program. Last-Action required: check your e-mail for double opt-in. ",
        description: "We value our clients privacy so we decided to adopt a double opt-in registration. We need you to confirm by clicking the button in the very last email you received from us , to record Your explicit consent. Since You are already officially a ReBest Early Bird member we add here some buttons as shortcut for your early-bird benefits.",
        highlight: "Access the Vault",
        subDescription: "Below you will find the direct links to your PRIVATE groups! Start dominating your area.",
        ctaLabel: "YT Templates DrillDown",
        ctaLink: SOCIALS["rebest-digital"].YTdrildownTempatesPRIVATE,
        secondaryLabel: "FB ReBest Digital Ecosystem",
        secondaryLink: SOCIALS["rebest-digital"].facebookRBDecosystemPRIVATE,
        ctaLabel3: "Strategical Nblm discussions",
        ctaLink3: SOCIALS["rebest-digital"].YTStrategicalNblmPRIVATE,
        ctaLabel4: "YT 7-Days Preview P-list",
        ctaLink4: "https://www.youtube.com/playlist?list=PLVCnprZcthXp01g95LsAdtgPp0ffvyX4r",
        footerNote: "IMPORTANT: A confirmation email with the button for confirm has been sent. Check your Spam folder if you don't see it and move us to 'Primary'. If you wish you can Reply with : I m an early bird :) to decrease the possibility our mail go to Spam!",
    }
},
// ************************           LEAD MAGNETS           *************************
  "homebuyercl": { // Lead Magnet Compratori
    id: "homebuyercl",
    title: "Own your Business, stop paying for someone else growth...",
    subtitle: "Our book explain how to do it. Download the Infographics to escape the portals slavery.",
    leadMagnet: "the Infographics",
    buttonLabel: "Get the infographics in your inbox!",
    image: "/CopertinaDefinitivaPerKindle.jpg", // Percorso della copertina
    style: BRAND_STYLES["dark-magenta"], // Collega lo stile
    legal: PRIVACY_DOCS["standard-v1"],  // Collega la privacy
    brevoListId: 3,
    brevotemplateId : 8 ,
    thankYou: {
  icon: "🚀",
  title: "Confirmation Received!",
  description: "Thank you for confirming your email.",
  highlight: "Your infographic",
  subDescription: "is on its way to your inbox.",
 ctaLabel: "Here you can find the roadmap",
  ctaLink: SOCIALS["rebest-digital"].site,
  secondaryLabel: "ReBest Instagram",
  secondaryLink: SOCIALS["rebest-digital"].instagram,
  ctaLabel3: "You tube secret playlist",
  ctaLink3: "https://youtube.com/yourchannel",
  ctaLink4: "https://wa.me/tuonumero", // Aggiungi questo
  ctaLabel4: "Facebook Vault",   // E questo
  footerNote: "Please check your Spam or Promotions folder if you don't see the mail with the download link.",
}
},
// ************************           FUNZIONAMENTO SITO            *************************
   // home , è nella home ma non prende i testi da qui per ora 
  "home": {
    id: "home",
    title: "Own your Business, stop paying for someone else growth...",
    subtitle: "Our book explain how to do it. Download the Infographics to escape the portals slavery.",
    leadMagnet: "the Infographics",
    buttonLabel: "Get the infographics in your inbox!",
    image: "/CopertinaDefinitivaPerKindle.jpg", // Percorso della copertina
    //style: BRAND_STYLES["modern-blue"], // Collega lo stile
    style: BRAND_STYLES["dark-magenta"], // Collega lo stile
    legal: PRIVACY_DOCS["standard-v1"],  // Collega la privacy
    brevoListId: 3,
    brevotemplateId : 8 ,
    thankYou: {
  icon: "🚀",
  title: "Confirmation Received!",
  description: "Thank you for subscribe to our Newsletter.",
  highlight: "Our white paper",
  subDescription: "is on its way to your inbox.",
  ctaLabel: "Here you can find the roadmap",
  ctaLink: SOCIALS["rebest-digital"].site,
  secondaryLabel: "ReBest Instagram",
  secondaryLink: SOCIALS["rebest-digital"].instagram,
  ctaLabel3: "You tube secret playlist",
  ctaLink3: "https://youtube.com/yourchannel",
  ctaLink4: "https://wa.me/tuonumero", // Aggiungi questo
  ctaLabel4: "Facebook Vault",   // E questo
  footerNote: "Please check your Spam or Promotions folder if you don't see the mail with the download link.",
},
},
};
