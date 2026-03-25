import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus su Risparmio e Dominio del Mercato locale
  title: 'Real Estate Marketing Early Bird | ReBest Digital Ecosystem',
  description: 'Get 80+ strategic marketing assets for 1/5 of the price. Stop relying on generic agencies and start dominating your local real estate market now.',
  keywords: [
    'Real Estate Marketing Tools',
    'Realtor Lead Generation',
    'Real Estate Canva Templates',
    'Property Listing Strategy',
    'Marketing for Real Estate Agents',
    'Early Bird Marketing Deal'
  ],
  openGraph: {
    title: 'Dominate Your Real Estate Market (80% Off Early Bird)',
    description: 'Secure the ReBest Digital Ecosystem. Strategic assets, lead magnets, and social systems designed for action-taking Realtors.',
    type: 'website',
    url: 'https://www.rebestdigital.com/earlybird', // Verifica il tuo slug
    images: [
      {
        url: 'https://www.rebestdigital.com/earlySellpage1.jpg', 
        width: 1200,
        height: 630,
        alt: 'ReBest Digital - Early Bird Real Estate Ecosystem',
      },
    ],
  },
}

export default function AgentEarlyBirdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="agent-earlybird-container">
      {/* Banner promozionale con un tocco di urgenza */}
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-bold uppercase tracking-tighter">
        🦅 Limited Early Bird Offer - Save 80% Today
      </div>
      
      {children}
      
      
    </section>
  )
}