import { BRAND_STYLES } from './branding';
import { PRIVACY_DOCS } from './privacy';
import { SOCIALS } from './socials';

export const CAMPAIGNS = {
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
