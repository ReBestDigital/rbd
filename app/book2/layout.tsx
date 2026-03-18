import { Metadata } from 'next'

export const metadata: Metadata = {
  // Il titolo deve contenere la parola chiave principale all'inizio
  title: 'Real Estate Marketing Toolkit: 60+ Templates & Strategy | ReBest Digital',
  
  // La descrizione deve spingere al click (CTR)
  description: 'Elevate your real estate business with the ultimate digital ecosystem. Access 25+ newsletters, 30+ reels, and 10+ lead magnets designed for top-producing agents.',
  
  // Parole chiave (Google le usa meno, ma servono per i motori interni)
  keywords: [
    'Real Estate Marketing Templates',
    'Realtor Newsletter Kit',
    'Real Estate Lead Generation',
    'Instagram Reels for Agents',
    'Property Listing Templates',
    'Open House Marketing Assets'
  ],

  // Questo serve per quando incolli il link su Facebook/WhatsApp
  openGraph: {
    title: 'Dominate your Local Market | ReBest Digital Ecosystem',
    description: 'Get the full "Firepower" of professional real estate marketing for the price of a dinner.',
    type: 'website',
    url: 'https://tuosito.com/book', // Cambia con il tuo dominio
    images: [
      {
        url: 'https://tuosito.com/og-image.jpg', // Un'immagine figa del pacchetto
        width: 1200,
        height: 630,
        alt: 'ReBest Digital Marketing Ecosystem for Real Estate',
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
    <section className="bg-slate-950 min-h-screen">
      {/* Qui potresti aggiungere una mini-nav specifica per il libro se vuoi */}
      {children}
    </section>
  )
}