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
  full: "€999",
  start: "€149"
};

export const PRICING_CONFIG: PlanFeature[] = [
  /* NEWSLETTERS */
  { feature: "Section: Professional Newsletters", isHeader: true },
  { feature: "Cod: N001-N012 | 12 Month Calendar Pack", description: "Templates from January to December", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: N013 | FIRSTHOME Newsletter", description: "Audience Segmentation for first-time buyers", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N014 | MORTGAGE SPECIAL Newsletter", description: "Audience Segmentation for financial leads", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N015 | SELLINGSMART Newsletter", description: "Audience Segmentation for potential sellers", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N016 | OPEN HOUSE Invitation", description: "Audience Segmentation for event invites", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N017 | FEATURED LISTINGS Newsletter", description: "Audience Segmentation for property showcase", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N018 | QUICK ALERT Newsletter", description: "The king of audience segmentation newsletters", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N019 | MEET THE NEW AGENT", description: "Personal branding intro newsletter", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N020 | SUSTAINABLE LIVING", description: "Audience Segmentation for eco-friendly focus", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N021 | FLIPPING Newsletter", description: "Audience Segmentation for investors", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N022 | CORPORATE INVESTMENT", description: "Audience Segmentation for B2B/Corporate", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N023 | SHORT-TERM RENTALS", description: "Audience Segmentation for rental market", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N024 | COMMERCIAL LISTINGS", description: "Audience Segmentation for commercial real estate", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N025 | Partnership Opportunity Email", description: "Plain text B2B outreach strategy", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* TEMPLATES */
  { feature: "Section: Professional Templates", isHeader: true },
  { feature: "Cod: T001 | Branded Letterhead Kit", description: "Presentation kit (12 variants + 2 covers)", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: T002 | Window & Yard Signs Kit", description: "18 variants with Lead Generator and QR Strategy", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T003 | Magazine 12-Pages A5", description: "Can be used as social lead magnet", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T004 | Seller Accountability File", description: "Strategic professional reporting tool", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T005 | Lead Gen Business Cards", description: "10 Front + 8 Back + Strategy QR code", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* LEAD MAGNETS */
  { feature: "Section: Lead Magnets", isHeader: true },
  { feature: "Cod: LM001 | Trusted Vendor List", description: "Lead Magnet ideal for open houses", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM002 | Neighborhood Guide", description: "Lead Magnet ideal for open houses", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM003 | Homebuyer Checklist", description: "Lead Magnet for open house and social", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM004 | HomeSeller Checklist", description: "Lead Magnet for open house and social", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },

  /* OPEN HOUSE */
  { feature: "Section: Open House Assets", isHeader: true },
  { feature: "Cod: OH001 | Digital Check-In Print", description: "A5 Vertical professional print", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: OH002 | Sign-in Paper", description: "Classic physical sign-in form", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: OH003 | Anonymous Feedback Card", description: "A6 professional feedback system", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: OH004 | Postcard Invitation", description: "A6 professional invitation cards", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: OH005 | Invitation A5", description: "High-end A5 invitations", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: OH006 | Open House Sign Kit", description: "Complete window/yard kit with QR and arrows", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* SOCIAL MEDIA */
  { feature: "Section: Social Media Assets", isHeader: true },
  { feature: "Cod: SM001 | FB Welcome Post", description: "4:5 Informative post for groups/pages", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM002 | FB Sold Cover", description: "1640x856 safe zone optimized", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM003 | FB Clean Sold Post", description: "4:5 high-impact visual", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM004 | FB Group Promo Cover", description: "Focused on group growth", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM005 | FB Checklist Cover", description: "Optimized for safe zones", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM006 | FB Generic Cover A", description: "1640x856 safe zone branding", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM007 | FB Exclusive Group Cover", description: "Premium group branding", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM008 | FB Open House Cover", description: "For Pages and Groups", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM009 | FB Event Cover", description: "1920x1005 safe zone", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM010 | Reel Epic Sync OH", description: "6-image sync for Open House", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM011 | Open House Carousel", description: "1:1 format for IG and FB", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM012 | IG OH Stories 1/3", description: "Dedicated Open House story set", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM013 | Essential Stories 1/7", description: "Essential IG story templates", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM014 | Growth Pack Stories", description: "9/18 Hook & Growth Pack - boost tricks", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM015 | Reel Homebuyer Checklist", description: "Happy Music Sync - 30s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM016 | Reel Homeseller Checklist", description: "Deep House Sync - 47s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM017 | Reel Red Signs Epic", description: "Epic Music Sync - 36s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM018 | Reel Buyer DeepHouse", description: "Deep House Sync - 30s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM019 | Seller Checklist Carousel", description: "1:1 format 5 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM023 | FB Clean New Listing", description: "4:5 optimized preview", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM024 | Reel New Listing B&A", description: "Epic Sync - 33s Before/After", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM029 | Reel New Premium Listing", description: "Epic Music Sync - 31s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* GUIDE SOCIAL MEDIA */
  { feature: "Section: Strategic Guides", isHeader: true },
  { feature: "Cod: SG001 | Social Media Bonus", description: "Which-When-Why-How general instruction", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SG002 | FB Permanent VIP Guide", description: "Strategic guide for OH and VIP groups", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG006 | Mastering IG Stories", description: "1-18 Guide for real estate agents", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG008 | Lead Magnet Mastery", description: "Checklist Edition + ManyChat advice", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG009 | Facebook Listing Guide", description: "Complete walkthrough for FB listings", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG010 | Instagram Listing Guide", description: "Complete walkthrough for IG listings", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* BONUS EARLY BIRD */
  { feature: "Section: Early Bird Bonuses", isHeader: true },
  { feature: "Cod: FB001 | Lifetime Ecosystem Access", description: "Private Group, free content and discounts", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: YT001 | Private Masterclass Playlist", description: "Technical and strategic video guides", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } }
];