import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency In-A-Box | Scale Your Real Estate Marketing Business',
  description: 'Deploy a high-conversion Real Estate Marketing Ecosystem in 24h. White-label assets, strategic frameworks, and 10x ROI for Marketing Agencies and Solopreneurs.',
  keywords: [
    'Real Estate Marketing Agency', 
    'Agency Scalability', 
    'White-label Canva Templates', 
    'Real Estate Lead Generation', 
    'Digital Product Business', 
    'Done-for-you Real Estate Marketing'
  ],
 openGraph: {
    title: 'Agency In-A-Box | Scale Your Real Estate Marketing Business',
    description: 'Deploy a high-conversion Real Estate Ecosystem in 24h. White-label assets and 10x ROI for Marketing Agencies and Solopreneurs.',
    type: 'website',
    url: 'https://rebestdigital.com/earlybird-marketing-agency', // Il tuo URL finale
    images: [
      {
        url: 'https://rebestdigital.com/1GraficheHomeEarlybird.jpg', 
        width: 1200,
        height: 630,
        alt: 'ReBest Digital Marketing Agency License - Scale Your Business',
      },
    ],
},
}

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="agency-special-section">
      {/* Qui potresti aggiungere un piccolo header specifico o un banner "Agency Limited Offer" */}
      <div className="bg-black text-white text-center py-2 text-2xl font-bold tracking-widest">
        Marketing Agency License (for web agency or opportunity seekers)
              </div>
      
      {children}
      
      {/* Footer o elementi specifici per la sezione Agency */}
    </section>
  )
}