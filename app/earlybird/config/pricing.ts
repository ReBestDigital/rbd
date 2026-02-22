export interface PlanFeature {
  feature: string;
  isHeader?: boolean; // Se true, crea una riga di interruzione colorata
  earlyBird?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
  full?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
  start?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
}

export const PLAN_PRICES = {
  earlyBird: "€49/mo",
  full: "€99/mo",
  start: "€29/mo"
};

export const PRICING_CONFIG: PlanFeature[] = [
  { feature: "Market Analysis", isHeader: true }, // INTERRUZIONE
  {
    feature: "Micro & Macro Environment Analysis",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: true, status: 'completo' },
  },
  {
    feature: "Opportunity & Risk Detection",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' },
  },
  { feature: "Advanced Tools", isHeader: true }, // INTERRUZIONE
  {
    feature: "Predictive Real Estate AI",
    earlyBird: { active: true, status: 'in_arrivo', date: 'May 2026' },
    full: { active: true, status: 'in_arrivo', date: 'June 2026' },
    start: { active: false, status: 'completo' },
  },
  {
    feature: "Lifetime YouTube Channel Access",
    earlyBird: { active: true, status: 'completo' },
    full: { active: false, status: 'completo' },
    start: { active: false, status: 'completo' },
  }
];