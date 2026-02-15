// app/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
// Nota: Abbiamo bisogno di CAMPAIGNS per accedere ai dati della campagna "stop"
// Assicurati che il percorso sia corretto in base alla tua struttura
import { CAMPAIGNS } from '@/config/campaigns';

// Definiamo un ID di campagna per prendere lo stile e i dati specifici
// Questo verrà usato per la coerenza del colore e del logo se presente
const HOME_CAMPAIGN_ID = "stop"; // Usa la campagna "stop" per i colori e i dati

const generateHash = async (text: string) => {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Recupero dati dinamici dalla campagna scelta per i colori e lead magnet
  const config = CAMPAIGNS[HOME_CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      alert("Please accept the Privacy Policy to proceed.");
      return;
    }

    setLoading(true);
    setSubmissionStatus('idle'); // Reset status

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
        setSubmissionStatus('success');
        setEmail('');
        setAgreed(false); // Reset checkbox
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`min-h-screen ${style.bg} flex flex-col items-center justify-center p-6 text-white`}>
      <div className="max-w-xl w-full text-center">
        {/* LOGO Placeholder */}<img src="rebestdigital.svg" alt="ReBest Digital Logo" className="h-16 mx-auto" />
        <div className="mb-8">
          <img src="rebest.svg" alt="ReBestLogo" className="h-16 mx-auto" />
            {/* Se hai un logo SVG o un'immagine, inseriscila qui */}
            {/* <img src="/path/to/your/logo.svg" alt="ReBest Digital Logo" className="h-16 mx-auto" /> */}
           {/*  <span className={`${style.accent} text-5xl font-extrabold tracking-tight`}>ReBest Digital</span> */}
            <p className="text-xl text-slate-300 mt-2">Innovating the future, together .</p>
        </div>

        <h1 className={`${style.text} text-5xl md:text-6xl font-extrabold leading-tight mb-6`}>
          Website Launching Soon!
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10">
          Get ready for an unparalleled digital experience. We are meticulously crafting something extraordinary for you.
        </p>

        <p className="font-bold text-lg text-slate-200 mb-4">
          Be the first to know when we launch and get exclusive updates!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Enter your best email"
              required
              className={`${style.bg} ${style.text} w-full px-5 py-4 rounded-xl border border-slate-500 focus:ring-2 ${style.accent} outline-none transition-all placeholder-slate-400`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy-home" // ID unico per la homepage
              required
              checked={agreed} // Controllato dallo stato
              onChange={(e) => setAgreed(e.target.checked)}
              className={`mt-1.5 h-4 w-4 rounded ${style.check}`}
            />
            <label htmlFor="privacy-home" className={`font-bold text-xs leading-tight ${style.mute} text-left`}>
              By clicking the button you will receive the {config.leadMagnet} and you agree to receive our newsletter and marketing updates.<br/> 
              You can unsubscribe at any time. I have read and agree to the{" "}
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
            {loading ? "SENDING..." : "NOTIFY ME WHEN WE LAUNCH"}
          </button>
        </form>

        {submissionStatus === 'success' && (
            <p className="text-green-400 mt-4 text-lg font-semibold">
                Thanks! Please check your email to confirm your subscription.
            </p>
        )}
        {submissionStatus === 'error' && (
            <p className="text-red-400 mt-4 text-lg font-semibold">
                Something went wrong. Please try again later.
            </p>
        )}

        <p className={`${style.mute} font-medium text-xs text-center mt-6 italic`}>
          We value your privacy. Unsubscribe with one click at any time. Your information is secure.
        </p>
      </div>
    </main>
  );
}