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
  title: "Real Estate Market, start to own your business! ", // Puoi personalizzarlo qui
  description: "Find out why real estate Agents are Digital Tenant",
};

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