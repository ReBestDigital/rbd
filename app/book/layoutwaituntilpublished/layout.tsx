import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sul libro e sulla fine dell'invisibilità dell'agente
  title: 'Stop Being Invisible | Real Estate Marketing Book & Strategy',
  description: 'Break the "Pushy Agent" cycle. Download the Reciprocity Engine and discover the complete Real Estate Marketing Protocol to attract exclusive listings.',
  keywords: [
    'Real Estate Marketing Book',
    'Stop Being Invisible Real Estate',
    'Realtor Training Course',
    'Real Estate Attraction Strategy',
    'Acquisition Script Library',
    'Marketing Workflows for Realtors'
  ],
  openGraph: {
    title: 'Stop Being a "Pushy Agent". Start Attracting with Authority.',
    description: 'Get the "Reciprocity Engine" PDF and discover the strategic protocol from the book "STOP BEING INVISIBLE!". Own your territory.',
    type: 'article',
    url: 'https://www.rebestdigital.com/book',
    images: [
      {
        url: 'https://www.rebestdigital.com/SBIfronteretro_xlinkFB.jpg', 
        width: 1200,
        height: 630,
        alt: 'Stop Being Invisible - Real Estate Marketing Book by ReBest Digital',
      },
    ],
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="book-launch-section bg-zinc-50">
      {/* Banner per il posizionamento del libro */}
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-extrabold uppercase tracking-tighter">
        🦅 Limited Early Bird Offer - Save 80% Today <br/>
        The Strategic Protocol: Stop Being Invisible
      </div>
      
      {children}
      
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-extrabold uppercase tracking-tighter">
        
        <div className="max-w-xl mx-auto px-6">
          <p className="font-serif italic opacity-80">
            "Being the best-kept secret in your neighborhood is a strategic failure."
          </p>
          <div className="mt-8 flex justify-center gap-4 opacity-50  uppercase tracking-widest">
            <span>Available on Amazon</span>
            <span>•</span>
            <span>ReBest Digital Publishing</span>
          </div>
        </div>
      </div>
    </section>
  )
}