const fineeb = '15/06/2026'
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
  /* NEWSLETTERS */
  { feature: "Section: Professional Newsletters", isHeader: true },
  { feature: "Cod: N001-N012 | 12 Month Pack", description: "Templates from January to December", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: N013 | FIRSTHOME Newsletter", description: "Audience Segmentation for first-time buyers", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: N014 | MORTGAGE SPECIAL Newsletter", description: "Audience Segmentation for financial leads", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: N015 | SELLINGSMART Newsletter", description: "Audience Segmentation for potential sellers", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N016 | OPEN HOUSE Invitation", description: "Audience Segmentation for event invites", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: N017 | FEATURED LISTINGS Newsletter", description: "Audience Segmentation for property showcase", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N018 | QUICK ALERT Newsletter", description: "The king of audience segmentation newsletters", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N019 | MEET THE NEW AGENT", description: "Personal branding intro newsletter", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N020 | SUSTAINABLE LIVING", description: "Audience Segmentation for eco-friendly focus", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N021 | FLIPPING Newsletter", description: "Audience Segmentation for investors", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N022 | CORPORATE INVESTMENT", description: "Audience Segmentation for B2B/Corporate", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N023 | SHORT-TERM RENTALS", description: "Audience Segmentation for rental market", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N024 | COMMERCIAL LISTINGS", description: "Audience Segmentation for commercial real estate", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: N025 | Partnership Opportunity Email", description: "Plain text B2B outreach strategy", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },

  /* TEMPLATES */
  { feature: "Section: Professional Templates", isHeader: true },
  { feature: "Cod: T001 | Branded Letterhead Kit (12 variants + 2 covers)", description: "Presentation kit (12 variants + 2 covers)", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: T002 | Window & Yard Signs Kit", description: "18 variants with Lead Generator and QR Strategy", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T003 | Magazine 12-Pages A5", description: "Can be used as social lead magnet", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T004 | Seller Accountability File", description: "Strategic professional reporting tool", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: T005 | Lead Gen Business Cards", description: "10 Front + 8 Back + Leads capture Strategy QR code", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* LEAD MAGNETS */
  { feature: "Section: Lead Magnets", isHeader: true },
  { feature: "Cod: LM001 | Trusted Vendor List", description: "Lead Magnet ideal for open houses", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM002 | Neighborhood Guide", description: "Lead Magnet ideal for open houses", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM003 | Homebuyer Checklist", description: "Lead Magnet for open house and social", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM004 | HomeSeller Checklist", description: "Lead Magnet for open house and social", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: LM005 | ??? Lead Magnet 5 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo',date : fineeb }, full: { active: true, status: 'in_arrivo' ,date :fineeb}, start: { active: false, status: 'completo' } },
  { feature: "Cod: LM006 | ??? Lead Magnet 6 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo',date :fineeb }, full: { active: true, status: 'in_arrivo',date :fineeb }, start: { active: false, status: 'completo' } },
  { feature: "Cod: LM007 | ??? Lead Magnet 7 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo' ,date :fineeb}, full: { active: true, status: 'in_arrivo' ,date :fineeb}, start: { active: false, status: 'completo' } },
  { feature: "Cod: LM008 | ??? Lead Magnet 8 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo' ,date :fineeb}, full: { active: true, status: 'in_arrivo' ,date :fineeb}, start: { active: false, status: 'completo' } },
  { feature: "Cod: LM009 | ??? Lead Magnet 9 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo',date :fineeb }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: LM010 | ??? Lead Magnet 10 ???", description: "You ll find out soon  :)", earlyBird: { active: true, status: 'in_arrivo' ,date :fineeb}, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } },

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
  { feature: "Cod: SM001 | FB Welcome To the group Post", description: "4:5 Informative post for groups/pages", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM002 | FB Sold Cover for page and group", description: "1640x856 safe zone optimized", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM003 | FB Clean Sold for Posts", description: "4:5 high-impact visual", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM004 | FB cover for Page group variant", description: "Focused on group growth", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM005 | FB cover for Page focus on Checklist", description: "Optimized for checklist", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM006 | FB cover for Page", description: "1640x856 safe zone branding", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM007 | FB Exclusive Group Cover", description: "VIP group cover , read the strategy behind this on our manuals", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SM008 | FB Open House Cover for Page or Group", description: "For Pages and Groups to share the next open house", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM009 | FB Event Cover", description: "1920x1005 safe zone", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM010 | Reel Epic Sync Open House", description: "6-image sync for Open House", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM011 | Open House Carousel", description: "1:1 format for IG and FB", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM012 | IG Open House Stories 1/3", description: "Dedicated Open House story set", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM013 | Essential IG Stories 1/8", description: "Essential IG story templates", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM014 | Growth Pack IG Stories 9/18 ", description: "9/18 Hook & Growth Pack - boost tricks", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM015 | Reel Homebuyer Checklist Comment to DM", description: "Happy Music Sync - 30s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM016 | Reel Homeseller Checklist Comment to DM", description: "Deep House Sync - 47s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM017 | Reel Red Signs Epic Comment to DM", description: "Epic Music Sync - 36s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM018 | Reel Buyer DeepHouse Comment to DM", description: "Deep House Sync - 30s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM019 | Carousel Comment to DM Seller Checklist CTA 5 slides", description: "1:1 format 5 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM020 | Carousel Comment to DM with Seller Checklist CTA 6 slides", description: "1:1 format 5 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM021 | Carousel Comment to DM with Buyer Checklist CTA 6 slides", description: "1:1 format 5 slides focused on house", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM022 | Carousel Comment to DM with Buyer Checklist CTA 5 slides", description: "1:1 format 5 slides focused on Think", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM023 | FB Clean New Listing", description: "4:5 optimized preview", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM024 | Reel New Listing Before and after comment to DM", description: "Epic sound Sync - 33s Before/After", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM025 | FB clean Carousel New Listing Before and after", description: "No CTA", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM026 | Carousel Premium Listing Comment to DM Call CTA 5 slides ", description: "1:1 format 5 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM027 | Carousel FixerUpper Listing Link in Bio CTA 4 slides", description: "(link in bio is not our favourite CTA but we give you this choice as well) 1:1 format 4 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM028 | Carousel Listing Comment to DM INFO CTA 5 slides ", description: "1:1 format 5 slides", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM029 | Reel New Premium Listing Comment to DM INFO", description: "Epic Music Sync - 31s", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM030 | FB_4:5_CleanNewPremiumListing", description: "For post FB", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM031 | FB clean Carousel New Premium Listing", description: "1:1 format 5 slides  NO CTA", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SM032 | Carousel New Premium Listing Comment to DM INFO CTA 5 slides", description: "1:1 format 5 slides INFO for Floor Plan", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },

  /* GUIDE SOCIAL MEDIA */
  { feature: "Section: Strategic Guides", isHeader: true },
  { feature: "Cod: SG001 | Social Media Bonus Guide", description: "Which-When-Why-How general instruction", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: true, status: 'completo' } },
  { feature: "Cod: SG002 | FB Permanent VIP Group Guide for Open House", description: "Strategic guide for Open House and VIP groups", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG003 | IG Open House General Guide ", description: "Strategic guide for Open House on instagram", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG004 | IG Stories Live Open house Templates 1/3 Guide ", description: "Strategic guide for Open House Stories on instagram", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG005 | Social Media Open house general instruction + Detailed Timeline", description: "Strategic guideline for open house on socials", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG006 | Mastering IG Stories from basic to hook master", description: "1-18 Guide for real estate agents hooks on instagram", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG007 | 1-18 From Stories to reels : Multipurpose strategy", description: "How to transform your Stories templates to reels", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG008 | Lead Magnet Mastery Checklist Edition + ManyChat advice", description: "How to turn your Social Media into a 24/7 Lead Generation Machine", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG009 | Facebook New Listing Guide", description: "Complete walkthrough for FB listings", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: SG010 | Instagram New Listing Guide", description: "Complete walkthrough for IG listings", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' } },
  /* BONUS EARLY BIRD */
  { feature: "Section: Courses and strategic content", isHeader: true },
  { feature: "Cod: YT003 | Life Time Access private LM Templates DrillDown YT channel to find out the WHY of the template ", description: "Strategical Templates drilldown generated by NBLM from our secret ReBest Digital Ecosystem Files", earlyBird: { active: true, status: 'completo' }, full: { active: true, status: 'completo' }, start: { active: false, status: 'completo' }} ,
  /* BONUS EARLY BIRD */
  { feature: "Section: Early Bird Bonuses", isHeader: true },
  { feature: "Cod: FB001 | Life Time Access to ReBest Digital Ecosystem Facebook Private Group", description: "Private Group with Strategies and new contents / new Templates/ infographics/ (for free) + extreme Discounts for new ReBest Digital tool s", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } },
  { feature: "Cod: YT001 | Life Time Access to ReBest Digital Ecosystem youtube private LM Technical and Strategical Video playlist", description: "Strategical Video generated by NBLM from our secret ReBest Digital Ecosystem Files", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' }} ,
  { feature: "Cod: YT002 | Life Time 7 days Early Access to ReBest Digital Ecosystem youtube public LM Tecnical and Strategical video", description: "You ll have the early access to the you tube videos we are going to publish, 7 days is huge time to be one of the first to use that information, You will always stay one step ahead of the competition", earlyBird: { active: true, status: 'completo' }, full: { active: false, status: 'completo' }, start: { active: false, status: 'completo' } }
];