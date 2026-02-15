export const BRAND_STYLES = {
   "dark-magenta": {
    primary: "bg-[#FF00FF]",      // Il fucsia acceso della copertina
    hover: "hover:bg-[#D400D4]",   // Un fucsia leggermente più scuro per l'effetto al passaggio del mouse
    accent: "text-[#Ff00FF]",      // Testo accentato fucsia
    check:"accent-[#ff00ff] border-[#ff00ff]",
    text: "text-white",           // <--- NUOVO: Testo principale bianco
    mute: "text-slate-200",      // <--- NUOVO: Testo secondario grigio chiaro
    bg: "bg-slate-900",            // Sfondo quasi nero come la parte sinistra della copertina
    card: "rounded-2xl shadow-2xl border border-slate-800 bg-slate-900" // Card scura per far risaltare il testo bianco
 },
  "modern-blue": {
    primary: "bg-blue-600",
    hover: "hover:bg-blue-700",
    accent: "text-blue-600",
    check:"accent-[#ff00ff] border-[#ff00ff]",
    text: "text-blue",           // <--- NUOVO: Testo principale bianco
    mute: "text-slate-400",      // <--- NUOVO: Testo secondario grigio chiaro
    bg: "bg-white",
    card: "rounded-2xl shadow-lg border border-slate-100"
  },
  "dark-luxury": {
    primary: "bg-amber-500",
    hover: "hover:bg-amber-600",
    accent: "text-amber-500",
    check:"accent-[#ff00ff] border-[#ff00ff]",
    text: "text-white",           // <--- NUOVO: Testo principale bianco
    mute: "text-slate-400",      // <--- NUOVO: Testo secondario grigio chiaro
    bg: "bg-slate-900",
    card: "rounded-none shadow-2xl border border-amber-500/20 text-white"
  },
 
};