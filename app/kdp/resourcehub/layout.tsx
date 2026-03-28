import { Metadata } from 'next'

export const metadata: Metadata = {
  // SEO Titolo: Focus sulla trasformazione da "Agente Invisibile" a "Autorità Locale"
  title: 'Stop Being Invisible: High-Value Home Seller Checklist | ReBest Digital Protocol',
  description: 'Transition from a pushy solicitor to a Strategic Advisor. Download the Home Seller Reciprocity Engine to build a Fortress of Trust and secure exclusive real estate listings.',
  keywords: [
    'Real Estate Local Authority',
    'Home Seller Checklist PDF',
    'Data Sovereignty for Realtors',
    'Pattern Interrupt Marketing',
    'Neighborhood Sheriff Strategy',
    'Real Estate Reciprocity Engine',
    'Get Exclusive Listings 2026'
  ],
  openGraph: {
    title: 'Break the "Pushy Agent" Cycle: Free Home Seller Value Asset',
    description: 'Stop being a "Digital Tenant" of the portals. Use our strategic Home Seller Checklist to command attention, capture data, and dominate your local real estate market.',
    type: 'website',
    url: 'https://www.rebestdigital.com/kdp/resourcehub',
    images: [
      {
        url: 'https://www.rebestdigital.com/1GraficheHomeEarlybird.jpg', 
        width: 1200,
        height: 630,
        alt: 'Professional Reciprocity Engine: Home Seller Checklist - ReBest Digital',
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
    <section>
      
      
      {children}
      
      
    </section>
  )
}