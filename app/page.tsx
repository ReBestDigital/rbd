"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';
import StrategySection from './homeconfig/strategySection'; 
import EcosystemDetails from './homeconfig/EcosystemDetails';
import EssentialFAQ from '@/app/homeconfig/FAQSection2';
import OperationalSEOAdvantages from './homeconfig/DetailedSEOAdvantages';
import StickyBtn from '../components/StickyButton'
import { RBDLINKS } from '@/config/rbdlinks';
 const iMieiBottoni = [
    { text: "🔥 GET THE ECOSYSTEM NOW!", href: RBDLINKS["rebest-digital"].RBDbuyEcosystemGumroad, isPrimary: true },
    { text: "📦 SEE THE 80+ ASSETS", href: RBDLINKS["rebest-digital"].RBDEcosystemDetails }
  ];


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
  
  
 /* Inserisco il testo del consent in questo modo in modo da poterlo storare fedelmente su brevo  */
const TextC = " By clicking the button you agree to subscribe to the ReBest Digital newsletter to receive marketing materials, ecosystem insights, and commercial offers. You can unsubscribe at any time. I have read and agree to the"
const consentText = TextC + " Privacy Policy [https://www.rebestdigital.com/privacy-policy/" + `${config.legal.name}`+ " ]. I understand my data will be processed according to GDPR."


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
    
    <main className={`min-h-screen ${style.bg} flex flex-col items-center justify-center overflow-x-hidden w-full p-5`}>
       <StickyBtn  buttons={iMieiBottoni}/>
      
       <div className= " max-w-4xl"><h1 className={`${style.text} text-4xl md:text-4xl font-bold text-slate-200 mb-10 mt-6 border-b-8 border-t-8 md:pb-6 pb-4 md:pt-6 pt-4 px-2 md:px-2`} style={{ borderColor: style.color || '#FFffFF' }}>
          <div className="bg-red-600 text-white text-center py-2 text-xl font-bold animate-pulse">
        ⚠️ EARLY BIRD EXPIRED-----: You got a Second Chance! Claim your 3x value now.
         </div>
        <div className= "pb-4 w-full"><img src="/ReBestEcosystem.svg" alt="Second chance Preview" className="object-cover w-full sm:w-1/2 " />
        {/* <div><img src="/ReBestEcosystem.svg" alt="Second chance Preview" className="object-cover  w-full" /> */}
        </div>        {config.title}
              </h1>       
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 ">
         
        {/* Preview Immagine Dinamica */}
       
        <div className=" relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
         
          {config.image ? (
            <img src={config.image} alt="Second chance Preview" className="object-cover w-full h-full" />
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
                Please confirm your subscription to activate your Newsletter access and receive your exclusive materials.
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
              <div className="text-lg text-slate-100 mb-4">    <p>Still undecided about the Ecosystem?
Join our newsletter! We regularly send breakdown guides, case studies, exclusive commercial offers, and actionable strategies on how to dominate your local real estate market with our ecosystem. 

Plus, as a welcome bonus, you will receive our Premium Homebuyer Checklist immediately after confirming your subscription.</p>
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
                    {TextC}{" "}
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
            <div className="mt-20">
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
            </div>
       </div>
    </main>
  );
}