import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sull'Arsenale tecnico e la quantità massiccia di asset
  title: 'Full Technical Inventory: 80+ Real Estate Assets | ReBest Digital Ecosystem',
  description: 'Deep dive into the ReBest Digital Arsenal. Explore 25+ Newsletters, 32+ Social Media Templates, and 10+ Strategic Lead Magnets designed for market dominance.',
  keywords: [
    'Real Estate Asset List',
    'Realtor Newsletter Sequences',
    'Real Estate Social Media Codes',
    'Listing Acquisition Scripts',
    'Open House Registration System',
    'ManyChat Real Estate Templates',
    'Canva Real Estate Inventory'
  ],
  openGraph: {
    title: 'Explore the "Firepower": Full Technical Asset List',
    description: 'Every single asset of the ReBest Digital Ecosystem revealed. See exactly what you get inside the Early Bird vault before the price increases.',
    type: 'website',
    url: 'https://www.rebestdigital.com/earlybird-details',
    images: [
      {
        url: 'https://www.rebestdigital.com/1GraficheHomeEarlybird.jpg', 
        width: 1200,
        height: 630,
        alt: 'Detailed Inventory of ReBest Digital Real Estate Assets',
      },
    ],
  },
}

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="technical-details-layout ">
      {/* Header tecnico per dare un senso di "Catalogo Professionale" */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-bold animate-pulse">
        ⚠️ EARLY BIRD EXPIRES: APRIL 30, 2026. SECURE YOUR 5X VALUE NOW.
      </div>
        {children}
     

      {/* Footer di rassicurazione sulle licenze (fondamentale in questa pagina) */}
      
        <div className="max-w-4xl mx-auto px-6 text-center m-6">
          <h4 className="text-xl font-extrabold text-gray-900 mb-4">Still wondering if it fits your workflow?</h4>
          <p className="text-gray-600 text-sm font-extrabold">
            The standard Early Bird license covers solo agents and teams up to 3 offices. 
            Marketing Agencies and large Franchises (4+ offices) require a Commercial License. 
            All assets are protected by copyright and designed for exclusive use within the ReBest Digital Ecosystem framework.
          </p>
        </div>
    
    </section>
  )
}