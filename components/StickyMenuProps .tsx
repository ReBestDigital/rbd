// components/StickyMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';

const CAMPAIGN_ID = "homebird";
const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
const { style } = config;

export interface MenuLinkItem {
  label: string;
  url: string;
}

interface StickyMenuProps {
  links?: MenuLinkItem[]; // Accetta link personalizzati, altrimenti usa il default
}

// Menu di DEFAULT globale utilizzabile in tutto il sito
const DEFAULT_LINKS: MenuLinkItem[] = [
  { label: '🏠 Home', url: '/' },
  { label: '👥 Who we are', url: '/who-we-are' },
  { label: '📬 Newsletter', url: '/newsletter' },
  { label: '📖 Book', url: '/book' },
  { label: '📞 Contacts', url: '/contacts' },
];

export default function StickyMenu({ links  }: StickyMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fallback automatico ai link di default se la prop non è passata
  const linksToRender = links !== undefined ? links : DEFAULT_LINKS;

  // Chiude il menu se l'utente clicca fuori dalla tendina
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (linksToRender.length === 0) return null;

  return (
    <div 
      ref={menuRef}
      className={`fixed top-4 left-4 z-50 ${style.text}`}
    >
      <div className="relative">
        {/* Pulsante minimale solo con icona, coordinato con il tuo ecosistema */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" w-11 h-11 flex items-center justify-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 active:scale-95 transition-all text-2xl"
          aria-label="Toggle Menu"
        >
          <p className="text-red">☰</p>
        </button>

        {/* Tendina dei Link a comparsa */}
        {isOpen && (
          <div 
            className="absolute left-0 mt-2 w-52 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10 p-2 shadow-2xl space-y-1 animate-fadeIn"
          >
            {linksToRender.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="block px-4 py-2.5 text-sm rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors font-bold tracking-tight"
                onClick={() => setIsOpen(false)} // Chiude la tendina al click
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
