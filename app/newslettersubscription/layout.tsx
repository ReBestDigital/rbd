import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sulla sovranità dei dati e l'autorità psicologica
  title: 'The ReBest Digital Newsletter | Real Estate Marketing Strategy',
  description: 'Stop being a digital tenant of real estate portals. Join ReBest Digital Newsletter today to build your own database and become the visible authority in your area.',
  keywords: [
    'Real Estate Marketing Psychology',
    'Reciprocity Engine Infographic',
    'Real Estate Lead Generation Strategy',
    'Realtor Authority Building',
    'Data Sovereignty for Real Estate',
    'Stop depending on portals'
  ],
  openGraph: {
    title: 'Stop Asking for Listings. Start Creating Psychological Debt.',
    description: 'Join the ReBest Digital Reak Estate Marketing Newsletter . Learn how to transition from a "Solicitor" to the only "Expert Advisor" your district recognizes.',
    type: 'website',
    url: 'https://www.rebestdigital.com/newslettersubscription',
    images: [
      {
        url: 'https://www.rebestdigital.com/stopasking.jpg', 
        width: 1200,
        height: 630,
        alt: 'The Reciprocity Engine Strategy - ReBest Digital Ecosystem',
      },
    ],
  },
}

export default function ReciprocityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="strategy-blueprint-section bg-slate-50">
      {/* Banner con focus sulla mentalità imprenditoriale */}
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-extrabold">
        🦅 Subscribe To The ReBest Digital Newsletter Today<br />
      </div>
      
      {children}
      
     <div className="bg-[#ff00ff] py-8  font-bold text-center text-2xl  border-t">
        <blockquote className="max-w-2xl mx-auto italic text-slate-100 px-4">
          "The market doesn’t pay the best agent; it pays the most visible authority."
        </blockquote>
    
      </div>
    </section>
  )
}