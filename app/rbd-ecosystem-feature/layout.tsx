import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sulle funzionalità e il risparmio Early Bird
  title: 'Real Estate Marketing Ecosystem, Features & Second Chance Offer | ReBest Digital',
  description: 'Explore the 80+ strategic assets of the ReBest Digital Ecosystem. From Real Estate Newsletter to Lead Generation Kits, get everything you need to dominate your local market.',
  keywords: [
    'Real Estate Marketing Features',
    'Real Estate Newsletter Calendar',
    'Realtor Lead Magnet Pack',
    'Canva Real Estate Kit',
    'Open House Marketing Tools',
    'Real Estate Social Media Strategy'
  ],
  openGraph: {
    title: 'The Full "Firepower" of ReBest Digital Ecosystm (Real Estate Canva Templates)',
    description: 'Compare plans and discover the massive scale of our 80+ strategic assets. Save over 66% with your Second Chance',
    type: 'website',
    url: 'https://www.rebestdigital.com/rbd-ecosystem-feature',
    images: [
      {
        url: 'https://www.rebestdigital.com/secondChance.jpg', 
        width: 1200,
        height: 630,
        alt: 'ReBest Digital Ecosystem Features Comparison',
      },
    ],
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      {/* Banner Urgenza: June 15th, 2026 */}
      <div className="bg-red-600 text-white text-center py-2 text-xl font-bold animate-pulse">
        ⚠️ EARLY BIRD EXPIRED: You got a Second Chance! Claim your 3x value now.
      </div>
      
      
        {children}
     

      {/* Sezione finale di rassicurazione specifica per le Features */}
      <div className=" py-10 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Still wondering if it fits your workflow?</h4>
          <p className="text-gray-600 text-sm">
            The ReBest Ecosystem is built to be "Platform Agnostic". Whether you use Brevo, Mailchimp, or just WhatsApp, our assets are engineered to adapt to your current tools without extra tech skills.
          </p>
        </div>
      </div>
    </section>
  )
}