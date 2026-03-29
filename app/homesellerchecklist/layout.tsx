import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sull'acquisizione di incarichi (Listings) e autorità
  title: 'Transform your Real estate Marketing | Free Professional Home Seller Checklist | ReBest Digital',
  description: 'Stop chasing window shoppers. Download the Professional Home Seller Checklist to attract serious homeowners and secure high-quality real estate listings.',
  keywords: [
    'Home Seller Checklist PDF',
    'Real Estate Listing Tools',
    'Get More Real Estate Listings',
    'Homeowner Lead Magnet',
    'Real Estate Agent Marketing',
    'Seller Qualification Roadmap'
  ],
  openGraph: {
    title: 'Attract Serious Home Sellers (Free Professional Checklist)',
    description: 'Stop offering "Free Valuations" that lead nowhere. Use our strategic Home Seller Checklist to position yourself as the real Estate expert and win the listing.',
    type: 'website',
    url: 'https://www.rebestdigital.com/homesellerchecklist',
    images: [
      {
        url: 'https://www.rebestdigital.com/homeseller-checklist-preview.jpg', 
        width: 1200,
        height: 630,
        alt: 'Professional Marketing Home Seller Checklist Preview - ReBest Digital',
      },
    ],
  },
}

export default function HomeSellerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lead-magnet-seller-section ">
      {/* Banner con focus sull'autorità professionale */}
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-bold uppercase tracking-tighter">
        🦅 Limited Early Bird Offer - Save 80% Today
      </div>
      
      {children}
      
      <div className="bg-[#ff00ff] py-8  font-bold text-center text-xl  border-t">
        <p>This is a non-customizable PDF version of the Home Seller Checklist included in the ReBest Ecosystem.</p>
      </div>
    </section>
  )
}