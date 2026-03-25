import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import CookieReset from '../components/CookieReset';
import CookieBanner from '../components/CookieBanner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Titolo pulito e professionale per il brand
  title: 'ReBest Digital Ecosystem | The Ultimate Real Estate Marketing Machine',
  description: 'Stop renting your growth from portals. Own your market with a strategic, automated, and ready-to-use marketing engine for Real Estate Professionals.',
  keywords: [
    'Real Estate Marketing Ecosystem',
    'Real Estate Lead Generation',
    'Realtor Authority Strategy',
    'Automated Marketing for Real Estate',
    'Real Estate Content Strategy',
    'Digital Transformation Real Estate'
  ],
  openGraph: {
    title: 'ReBest Digital | Engineering Real Estate Growth',
    description: 'Transform your agency from passive hope to a dominant, strategic authority.',
    url: 'https://www.rebestdigital.com',
    siteName: 'ReBest Digital',
    images: [
      {
        url: 'https://www.rebestdigital.com/earlySellpage1.jpg', // Questa la cambierai quando finirà l'early bird
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Componenti universali */}
        <Footer />
       {/*  <CookieReset />  */}
       <CookieBanner />
      
      </body>
    </html>
  );
}