import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';
const CAMPAIGN_ID = "bird"; 
const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
    const { style } = config;

export default function Navbar() {
  return (
    
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo o Brand Name */}
    <div className={`font-black text-xl tracking-tighter ${style.text}`}>
      REBEST<span className="text-white/50 text-sm ml-1 font-light tracking-normal italic italic">ecosystem</span>
    </div>

    {/* Bottoni d'azione */}
    <div className="flex gap-4">
      <Link 
        href="/earlybird-feature" 
        className="hidden md:block text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-all py-2"
      >
        Explore Arsenal
      </Link>
      <Link 
        href="/checkout-early-bird" 
        className={`${style.primary} text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transform transition-all hover:scale-105 active:scale-95`}
      >
        Buy Early Bird
      </Link>
    </div>
  </div>
 </nav>
  );
}