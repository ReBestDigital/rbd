export interface PlanFeature {
  feature: string;
  description?: string;
  isHeader?: boolean;
  earlyBird?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
  full?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
  start?: { active: boolean; status: 'completo' | 'in_arrivo'; date?: string };
}

export const PLAN_PRICES = {
  earlyBird: "€399",
  full: "€599",
  start: "€149"
};

export const PRICING_CONFIG: PlanFeature[] = [
   { feature: "Professional Newsletters", isHeader: true },
  {
    feature: "12 Month Calendar Pack",
    description: "Cod: N001 to N012 => Complete set of Newsletter Templates from January to December.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' , date : "15/09/2026" },
    start: { active: true, status: 'completo' }
  },
  {
    feature: "Audience Segmentation Essentials",
    description: "Cod: N013 to N017 => Specialized newsletters for First Home, Mortgage, Selling Smart, Open House, and Featured Listings.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Strategic Engagement Pack",
    description: "Cod: N018 to N025 => Quick Alerts, New Agent Intro, Sustainable Living, Flipping, Corporate Investment, Short-term Rentals, Commercial, and Partnership Opportunity.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },

  /* CATEGORIA: TEMPLATES */
  { feature: "Brand & Marketing Templates", isHeader: true },
  {
    feature: "Branded Presentation Kit",
    description: "Cod: T001 => Branded Letterhead & Presentation kit (12 variants + 2 covers).",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: true, status: 'completo' }
  },
  {
    feature: "Window & Yard Signage System",
    description: "Cod: T002 => 18 variants for Sale, Rent, Sold, Under Offer, and Open House with QR Strategy.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Premium Marketing Tools",
    description: "Cod: T003 to T005 => 12-Page A5 Magazine, Seller Accountability File, and Lead Gen Business Cards.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },

  /* CATEGORIA: LEAD MAGNETS & OPEN HOUSE */
  { feature: "Lead Generation & Open House", isHeader: true },
  {
    feature: "Expert Lead Magnet Pack",
    description: "Cod: LM001 to LM004 => Trusted Vendor List, Neighborhood Guide, Homebuyer & HomeSeller Checklists.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: true, status: 'completo' }
  },
  {
    feature: "Expansion Lead Magnet Pack",
    description: "Cod: LM005 to LM008 =>???? ",
    earlyBird: { active: true, status: 'in_arrivo',date :'25/03/2026' },
    full: { active: true, status: 'in_arrivo',date :'25/03/2026' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Early Bird Lead Magnet Pack",
    description: "Cod: LM009 to LM010 =>???? ",
    earlyBird: { active: true, status: 'in_arrivo',date :'25/03/2026' },
    full: { active: false, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Digital Open House Kit",
    description: "Cod: OH001 to OH006 => Digital Check-in, Feedback Cards, Postcard Invitations, and full Signage Kit.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },

  /* CATEGORIA: SOCIAL MEDIA */
  { feature: "Social Media Assets", isHeader: true },
  {
    feature: "Facebook Page & Group Branding",
    description: "Cod: SM001 to SM007 => Welcome Posts, Sold Covers, Group Promotion variants, and Exclusive Group assets.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: true, status: 'completo' }
  },
  {
    feature: "Instagram & Reel Strategy",
    description: "Cod: SM008 to SM014 => Open House Covers, Sync Audio Reels, Carousel IG/FB, and Growth Pack Stories.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Social Reels , Stories and carousels with CTA to convert viewers into leads",
    description: "Cod: SM015 to SM032 => Sync Audio Reels (Happy/DeepHouse/Epic), Carousels for Homebuyer/Seller checklist, and Clean/Premium New Listing previews.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },

  /* CATEGORIA: GUIDES */
  { feature: "Strategic Marketing Guides & Tutorials", isHeader: true },
  {
    feature: "Mastering Social Media Guides using our templates",
    description: "Cod: SG001 to SG010 => Detailed timelines, ManyChat advice, Mastering IG Stories, and specific FB/IG Guides for Listings.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: true, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  { feature: "Life Time Access private to Templates DrillDown in a private YT channel to find out the WHY of the template ", description: "Strategical Templates drilldown generated from our secret ReBest Digital Ecosystem Files", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' }} ,
 
  /* CATEGORIA: EARLY BIRD BONUSES */
  { feature: "Exclusive Early Bird Benefits", isHeader: true },
  {
    feature: "Private Facebook Community Access Free Templates and Discout for new products",
    description: "Cod: FB001 => Lifetime Access to ReBest Digital Ecosystem Private Facebook Group + Extreme Discounts.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: false, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  {
    feature: "Strategic Masterclass and tecnical video in a Private Playlist",
    description: "Cod: YT001 => Lifetime Access to private YouTube playlist with technical and strategic guides.",
    earlyBird: { active: true, status: 'completo' },
    full: { active: false, status: 'completo' },
    start: { active: false, status: 'completo' }
  },
  { feature: "Life Time 48h Early Access to ReBest Digital Ecosystem youtube public Tecnical and Strategical video", description: "Early access to the you tube videos we are going to publish", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } }
];