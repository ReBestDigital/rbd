import { BRAND_STYLES } from './branding';
import { PRIVACY_DOCS } from './privacy';



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
  highlight: "Your book excerpt",
  subDescription: "is on its way to your inbox.",
  ctaLabel: "VISIT WEBSITE",
  ctaLink: "https://yourwebsite.com",
  secondaryLabel: "INSTAGRAM",
  secondaryLink: "https://instagram.com/yourprofile",
  ctaLabel3: "YOUTUBE CHANNEL",
  ctaLink3: "https://youtube.com/yourchannel",
  ctaLink4: "https://wa.me/tuonumero", // Aggiungi questo
  ctaLabel4: "CONTATTACI SU WHATSAPP",   // E questo
  footerNote: "Please check your Spam or Promotions folder if you don't see it.",
},
  }
};