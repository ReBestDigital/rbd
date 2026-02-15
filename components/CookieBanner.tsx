'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato in passato
    const consent = localStorage.getItem('cookie-consent-v1');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-v1', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-[#FF00FF]/20 p-6 z-[9999] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <p className="text-white font-bold text-lg mb-1">Privacy & Cookies 🛡️</p>
          <p className="text-white/70 text-sm leading-relaxed">
            We use only essential technical cookies to ensure the site works correctly and to prevent spam. 
            By clicking "Accept", you agree to our <a href="/privacy-policy/books-v1" className="underline hover:text-[#FF00FF]">Privacy Policy</a>.
          </p>
        </div>
        <button 
          onClick={handleAccept}
          className="whitespace-nowrap bg-[#FF00FF] hover:bg-[#D400D4] text-white font-extrabold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,255,0.4)]"
        >
          I UNDERSTAND & ACCEPT
        </button>
      </div>
    </div>
  );
}