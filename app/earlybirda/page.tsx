"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';
import StrategySection from '@/components/strategySection'; 

const CAMPAIGN_ID = "bird"; 

const generateHash = async (text: string) => {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};
   
export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the Privacy Policy to proceed.");
      return;
    }
    setLoading(true);
    try {
      const privacyHash = await generateHash(config.legal.textContent);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: config.id,
          privacy_version: config.legal.version,
          privacy_hash: privacyHash,
          title_campaign : config.title,
          brevoListId : config.brevoListId,
          brevotemplateId: config.brevotemplateId,
        }),
      });

      if (response.ok) {
        alert("Success! Please check your email for the download link.");
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Rimosso flex items-center per permettere lo scroll naturale verso il basso
    <main className={`relative min-h-screen ${style.bg} p-6 pb-32`}>
      
      {/* STICKY BUTTONS BAR */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
          <Link 
            href="/checkout-early-bird" 
            className={`flex-1 ${style.primary} text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight shadow-lg transition-transform active:scale-95`}
          >
            🔥 Buy Early Bird (Save 80%)
          </Link>
          <Link 
            href="/earlybird-feature" 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight border border-white/20 transition-all active:scale-95"
          >
            📦 Browse All 80+ Features
          </Link>
        </div>
      </div>

      {/* SEZIONE 1: HERO (Due Colonne) */}
      <div className="max-w-5xl mx-auto pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Preview Immagine */}
        <div className="relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          {config.image ? (
            <img src={config.image} alt="Ecosystem Preview" className="object-cover w-full h-full" />
          ) : (
            <span className="text-slate-400 font-medium italic">ECOSYSTEM PREVIEW</span>
          )}
        </div>

        {/* Contenuto Form */}
        <div className="flex flex-col">
          <h1 className={`${style.text} text-4xl font-bold mb-4 uppercase tracking-tighter`}>
            {config.title}
          </h1>
          <p className="font-bold text-lg text-slate-200 mb-6">
            {config.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Enter your best email"
              required
              className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                required
                onChange={(e) => setAgreed(e.target.checked)}
                className={`mt-1.5 h-4 w-4 rounded ${style.check}`}
              />
              <label htmlFor="privacy" className={`font-bold text-[10px] leading-tight ${style.mute}`}>
                By clicking, you'll receive the {config.leadMagnet} to test our quality and join the ReBest elite. <br/>
                Agree to Privacy Policy & GDPR processing.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${style.primary} ${style.hover} text-white font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] disabled:opacity-70 uppercase`}
            >
              {loading ? "PREPARING YOUR ARSENAL..." : config.buttonLabel}
            </button>
          </form>
        </div>
      </div>

      {/* SEZIONE 2: STRATEGIA (Colonna Singola fluida che contiene le sue 3 colonne) */}
      <div className="mt-20">
        <StrategySection style={style} />
      </div>
      
    </main>
  );
}