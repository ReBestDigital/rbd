import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sulla qualifica dei clienti e sulla Checklist professionale
  title: 'Free Professional Homebuyer Checklist | ReBest Digital',
  description: 'Stop chasing real estate tourists. Download our strategic Homebuyer Checklist to filter high-intent buyers and establish your authority as a Top Agent.',
  keywords: [
    'Homebuyer Checklist PDF',
    'Real Estate Lead Magnet',
    'Qualify Real Estate Buyers',
    'Realtor Marketing Tools',
    'Free Real Estate Download',
    'Homebuying Roadmap for Agents'
  ],
  openGraph: {
    title: 'Stop Chasing Real Estate Tourists: Get the Professional Homebuyer Checklist',
    description: 'The strategic roadmap to filter action-takers from window shoppers. Download your professional PDF and upgrade your Real Estate authority.',
    type: 'website',
    url: 'https://www.rebestdigital.com/homebuyerchecklist',
    images: [
      {
        url: 'https://www.rebestdigital.com/home-buyers-checklist-preview.jpg', 
        width: 1200,
        height: 630,
        alt: 'Professional Homebuyer Checklist Preview - ReBest Digital',
      },
    ],
  },
}

export default function HomebuyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="lead-magnet-section bg-white">
      {/* Banner informativo discreto ma efficace */}
      <div className="bg-[#ff00ff] text-white text-center py-2 text-xl font-extrabold uppercase tracking-tighter">
        🦅 Limited Early Bird Offer - Save 80% Today
      </div>
      
      {children}
      
      <div className="bg-[#ff00ff] py-8 text-white font-bold text-center text-xl  border-t">
        <p>This is a non-customizable PDF preview of the ReBest Digital Ecosystem.</p>
        <p className="mt-2">© {new Date().getFullYear()} ReBest Digital. All rights reserved.</p>
      </div>
    </section>
  )
}