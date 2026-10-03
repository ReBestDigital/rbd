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

// data/services.ts
import { ServiceItem } from "@/types/service";

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    titolo: "Sviluppo Web Avanzato",
    sottotitolo: "Applicazioni scalabili e veloci",
    descrizione1: "Creiamo siti web performanti utilizzando le ultime tecnologie sul mercato come Next.js e React.",
    descrizione2: "Ogni riga di codice è ottimizzata per garantire la massima velocità e un posizionamento SEO impeccabile.",
    immagine: "/images/web-dev.jpg", // Sostituisci con i tuoi path
    posizioneImmagine: "sinistra",
    jolly: "Nota: Include 3 mesi di supporto tecnico gratuito.",
    link: "/servizi/sviluppo-web"
  },
  {
    id: "2",
    titolo: "Consulenza Cloud",
    sottotitolo: "Migra la tua infrastruttura in sicurezza",
    descrizione1: "Ti aiutiamo a spostare i tuoi servizi sul cloud, riducendo i costi di gestione dell'hardware locale.",
    descrizione2: "Garantiamo una transizione fluida e senza interruzioni per il tuo business quotidiano.",
    immagine: "/images/cloud.jpg",
    posizioneImmagine: "destra", // Questa immagine andrà a destra
    jolly: "Tip: Ideale per medie e grandi imprese.",
    link: "/servizi/cloud"
  }
];