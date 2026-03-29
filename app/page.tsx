"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';
import StrategySection from './homeconfig/strategySection'; 
import EcosystemDetails from './homeconfig/EcosystemDetails';
import EssentialFAQ from '@/app/homeconfig/FAQSection2';
import OperationalSEOAdvantages from './homeconfig/DetailedSEOAdvantages';
const CAMPAIGN_ID = "homebird";

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
  // Stati per gestire il successo o l'errore senza alert
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;
  
  
  const consentText = "By clicking the button you will receive " + config.leadMagnet + " and you agree to receive our newsletter and marketing updates. You can unsubscribe at any time. I have read and agree to the Privacy Policy [https://www.rebestdigital.com/privacy-policy/" + `${config.legal.name}`+ " ]. I understand my data will be processed according to GDPR."


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!agreed) {
      setError("Please accept the Privacy Policy to proceed.");
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
          consent_text: consentText,
          privacy_hash: privacyHash,
          title_campaign : config.title,
          brevoListId : config.brevoListId,
          brevotemplateId: config.brevotemplateId,
        }),
      });

      if (response.ok) {
        setSubmitted(true); // Nasconde il form e mostra il successo
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`min-h-screen ${style.bg} flex items-center justify-center`}>
       
      {/* STICKY BUTTONS BAR */}
  {/*     <div className={`fixed bottom-2 left-0 right-0 z-50 flex ${style.text} justify-center`}style={{ marginBottom: 'var(--cookie-banner-height, 0px)' }}>
         
         <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
          <Link 
            href="https://rebestdigital.gumroad.com/l/ixtfn" target="_blank" rel="noopener noreferrer"
            className={`flex-1 ${style.primary} text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight shadow-lg transition-transform active:scale-95`}
          >
            🔥 Buy Early Bird (Save 80%)
          </Link>
          <Link 
            href="/earlybird-feature" target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight border border-white/20 transition-all active:scale-95"
          >
            📦 Browse Features
          </Link>
        </div>
      </div>  */}
    
       <div className= " max-w-4xl"><h1 className={`${style.text} text-4xl md:text-4xl font-bold text-slate-200 mb-10 mt-6 border-b-8 border-t-8 md:pb-6 pb-4 md:pt-6 pt-4 px-2 md:px-2`} style={{ borderColor: style.color || '#FFffFF' }}>
          <div className="bg-red-600 text-white text-center py-2 text-xl font-bold animate-pulse">
        ⚠️ EARLY BIRD EXPIRES: APRIL 30, 2026. SECURE YOUR 5X VALUE NOW.
         </div>
        <div className= "pb-4 "><img src="/ReBestEcosystem.svg" alt="Early bird Preview" className="object-cover max-w-100 " />
        {/* <div><img src="/ReBestEcosystem.svg" alt="Early bird Preview" className="object-cover  w-full" /> */}
        </div>        {config.title}
              </h1>       
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 ">
         
        {/* Preview Immagine Dinamica */}
       
        <div className=" relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
         
          {config.image ? (
            <img src={config.image} alt="Early bird Preview" className="object-cover w-full h-full" />
          ) : (
            <span className="text-slate-400 font-medium italic">BOOK PREVIEW</span>
          )}
          
        </div>
        
        {/* Contenuto Form */}
        <div className="flex flex-col">
          
          {submitted ? (
            /* --- MESSAGGIO DI SUCCESSO (Appare solo dopo l'invio) --- */
            <div className="bg-white/10 p-8 rounded-2xl border shadow-[0_0_20px_rgba(255,0,255,0.2)] animate-pulse-slow" style={{ borderColor: style.color || '#FF00FF' }}>
              <h2 className="text-3xl font-bold text-white mb-4 italic">Check your inbox! 🚀</h2>
              <p className="text-lg text-slate-200">
                We have sent a confirmation email to <strong>{email}</strong>.<br /><br />
                Please confirm your subscription to activate your early access and receive your exclusive materials.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-slate-400 underline hover:text-white transition-all"
              >
                Mistake in email? Click here to go back.
              </button>
            </div>
          ) : (
            /* --- LAYOUT ORIGINALE --- */
            <>
              
        
              <p className="font-bold text-white text-xl mb-4">
               <b> {config.subtitle}</b> 
              </p>
              {config.text1 && (
              <p className="text-lg text-slate-100 mb-4">
                 {config.text1}
              </p >
              )}
             {config.text2bold && (
              <p className="font-bold text-lg text-slate-100 mb-4">
                 <b>{config.text2bold}</b> 
              </p >
              )}
             {config.text3border && (
              <div>
               <div className="text-lg text-slate-100 mb-4 border-l-8 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
                <p className="mb-4">
                {config.text3border}
                 </p>
               </div>
              <div className="text-lg text-slate-100 mb-4">    <p>Still undecided? Enter your email and receive our Premium Homebuyer Checklist, to evaluate the strategic quality of our assets. Or, if you re ready to dominate your local market, scroll down to explore everything included in the ReBest Digital Ecosystem.</p>
             </div></div>
              )}
              {/* Box Errore (se presente) */}
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm font-bold">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your best email"
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 text-slate-100 focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    onChange={(e) => setAgreed(e.target.checked)}
                    className={`mt-1.5 h-4 w-4 rounded ${style.check}`}
                  />
                
                  <label htmlFor="privacy" className={`font-bold text-xs leading-tight ${style.mute}`}>
                    By clicking the button you will receive {config.leadMagnet} and you agree to receive our newsletter and marketing updates.<br/> 
                    You can unsubscribe at any time. I have read and agree to the{" "}
                    <Link href={`/privacy-policy/${config.legal.name}`} target="_blank" rel="noopener noreferrer" className={`${style.accent} font-medium underline hover:opacity-80`}>
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
            </>
          )}

          <p className={`${style.mute} font-medium text-xs text-center mt-4 italic`}>
            We value your privacy. Unsubscribe with one click at any time. Your information is secure. We only use trusted partners (like Brevo) to manage your data and we never sell it to third parties.
          </p>
        </div>
      </div>
            {/* <div className="mt-20">
              <EcosystemDetails style={style} />
            </div>
            <div className="mt-20">
              <StrategySection style={style} />
            </div>
            <div className="mt-20">
              <OperationalSEOAdvantages style={style} />
            </div>
            <div className="mt-20">
              <EssentialFAQ style={style} />
            </div> */}
       </div>
    </main>
  );
}