"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';

const CAMPAIGN_ID = "stop"; // Cambia questo per cambiare campagna
  const generateHash = async (text: string) => {
  const msgUint8 = new TextEncoder().encode(text);                           // Converte il testo in bit
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);        // Calcola l'hash SHA-256
  const hashArray = Array.from(new Uint8Array(hashBuffer));                  // Converte il buffer in array
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');       // Ritorna la stringa esadecimale
};
   
export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Recupero dati dinamici
  const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;
  
  
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      alert("Per procedere è necessario accettare la Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      const privacyHash = await generateHash("config.legal.textContent");
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: config.id, // Usa l'ID dinamico dal config
          privacy_version: config.legal.version,
          privacy_hash: privacyHash, // La prova d'integrità
          title_campaign : config.title,
          brevoListId : config.brevoListId,
          brevotemplateId: config.brevotemplateId,
        }),
      });

      if (response.ok) {
        alert("Grazie! Controlla la tua email per l'estratto.");
        setEmail('');
      } else {
        throw new Error('Errore durante l\'iscrizione');
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`min-h-screen ${style.bg} flex items-center justify-center p-6`}>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Preview Immagine Dinamica */}
        <div className="relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          {config.image ? (
            <img src={config.image} alt="Book Cover" className="object-cover w-full h-full" />
          ) : (
            <span className="text-slate-400 font-medium">BOOK PREVIEW</span>
          )}
        </div>

        {/* Contenuto Form */}
        <div className="flex flex-col">
          <h1 className={`${style.text} text-4xl md:text-4xl font-bold text-slate-200 mb-4`}>
            {config.title}
          </h1>
          <p className="font-bold text-lg text-slate-200 mb-4">
            {config.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Enter your best email"
                required
                className={`${config.style.text} w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* CHECKBOX OBBLIGATORIA */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                required
                onChange={(e) => setAgreed(e.target.checked)}
                className={`mt-1.5 h-4 w-4 rounded ${style.check}`}
              />
              <label htmlFor="privacy" className={`font-bold text-xs leading-tight ${style.mute}`}>
                
                By clicking the button you ll receive {config.leadMagnet} and you agree to receive our newsletter and marketing updates.<br/> You can unsubscribe at any time. I have read and agree to the{" "}
                <Link href={`/privacy-policy/${config.legal.name}`} target="_blank" className={`${style.accent} font-medium underline hover:opacity-80`}>
                  Privacy Policy
                </Link>.
                I understand my data will be processed according to GDPR.
             
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${style.primary} ${style.hover} text-white font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] disabled:opacity-70`}
            >
              {loading ? "SENDING..." : config.buttonLabel}
            </button>
          </form>

          <p className={`${style.mute} font-medium text-xs   text-center mt-4 italic`}>
            We value your privacy. Unsubscribe with one click at any time. Your information is secure. We only use trusted partners (like Brevo) to manage your data and we never sell it to third parties.
          </p>
        </div>
      </div>
    </main>
  );
}