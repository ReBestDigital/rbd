import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';

const CAMPAIGN_ID = "homebird";
const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
const { style } = config;

export interface ButtonItem {
  text?: string;
  href?: string;
  isPrimary?: boolean;
}

interface StickyBtnProps {
  buttons?: ButtonItem[];
}

// 1. Definiamo i tuoi due bottoni di DEFAULT (quelli che usi nel 95% delle pagine)
const DEFAULT_BUTTONS: ButtonItem[] = [
  { 
    text: "🔥 Buy Early Bird (Save 80%)", 
    href: "https://gumroad.com", 
    isPrimary: true 
  },
  { 
    text: "📦 Browse Features", 
    href: "/earlybird-feature", 
    isPrimary: false 
  }
];

export default function StickyBtn({ buttons }: StickyBtnProps) {
  // 2. Se "buttons" non viene passato (è undefined), usa la lista di default
  const buttonsToRender = buttons !== undefined ? buttons : DEFAULT_BUTTONS;

  // Filtriamo per sicurezza i bottoni validi
  const validButtons = buttonsToRender.filter(btn => btn.text && btn.href);

  // Se l'array è esplicitamente vuoto (es. buttons={[]}), non renderizzare nulla
  if (validButtons.length === 0) return null;

  const totalButtons = validButtons.length;

  // 3. Gestione dinamica dello spazio: se sono 3 bottoni, allarghiamo il pannello a "max-w-3xl"
  const maxWidthClass = totalButtons >= 3 ? "max-w-3xl" : "max-w-xl";

  return (
    <div 
      className={`fixed bottom-2 left-0 right-0 z-50 flex ${style.text} justify-center px-4`}
      style={{ marginBottom: 'var(--cookie-banner-height, 0px)' }}
    >
      {/* Applichiamo il maxWidthClass dinamico e manteniamo il flex-row su desktop */}
      <div className={`flex flex-col sm:flex-row gap-3 w-full ${maxWidthClass} bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl`}>
        {validButtons.map((btn, index) => {
          const buttonStyle = btn.isPrimary
            ? `flex-1 ${style.primary} text-white text-center py-3 px-4 rounded-xl font-bold text-sm  tracking-tight shadow-lg transition-transform active:scale-95 flex items-center justify-center min-w-[150px]`
            : "flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-xl font-bold text-sm tracking-tight border border-white/20 transition-all active:scale-95 flex items-center justify-center min-w-[150px]";

          return (
            <Link 
              key={index}
              href={btn.href!} 
              target="_blank" 
              rel="noopener noreferrer"
              className={buttonStyle}
            >
              {btn.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
