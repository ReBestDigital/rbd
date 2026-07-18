"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';

const CAMPAIGN_ID = "getprivategrouplifetime";

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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;

  // GDPR COMPLIANT: Sostituito marketing/newsletter con notifiche e aggiornamenti prodotto
  const consentText = "By clicking the button you request your Private Facebook Group links and agree to receive product technical alerts and new template notifications. You can unsubscribe at any time. I have read and agree to the Privacy Policy [https://www.rebestdigital.com/privacy-policy/" + `${config.legal.name}`+ " ]. I understand my data will be processed according to GDPR."

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
        setSubmitted(true);
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
    <main className={`min-h-screen ${style.bg} flex items-center justify-center p-6`}>
       <div className= "max-w-5xl">
          <h1 className={`${style.text} text-4xl md:text-4xl font-bold text-slate-200 mb-10 mt-6 border-b-8 border-t-8 md:pb-6 pb-4 md:pt-6 pt-4`} style={{ borderColor: style.color || '#FFffFF' }}>
            {config.title}
          </h1>       
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 ">
         
        {/* Preview Immagine Dinamica */}
        <div className="relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          {config.image ? (
            <img src={config.image} alt="Book Cover Preview" className="object-cover w-full h-full" />
          ) : (
            <span className="text-slate-400 font-medium italic">BOOK PREVIEW</span>
          )}
        </div>
        
        {/* Contenuto Form */}
        <div className="flex flex-col">
          
          {submitted ? (
            /* --- MESSAGGIO DI SUCCESSO --- */
            <div className="bg-white/10 p-8 rounded-2xl border shadow-[0_0_20px_rgba(255,0,255,0.2)] animate-pulse-slow" style={{ borderColor: style.color || '#FF00FF' }}>
              <h2 className="text-3xl font-bold text-white mb-4 italic">Check your inbox! 🚀</h2>
              <p className="text-lg text-slate-200">
                We have sent a verification email to <strong>{email}</strong>.<br /><br />
                Please open the email and click the confirmation link. <strong>Once confirmed, you will instantly receive the secret Facebook Group invitation and validation instructions directly in your inbox.</strong>
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
              <p className="text-xl text-slate-200 mb-4">
                {config.subtitle}
              </p>

              <p className="font-bold text-lg text-slate-100 mb-4">
                <b>Even though you have already received the links to the private Youtube playlists and the dedicated Facebook Page in your delivery PDF,</b> we ask for one small additional step to unlock the Lifetime Value. 
              </p>

              <div className="text-lg text-slate-100 mb-4 border-l-8 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
                <p className="mb-4">
                  We value our clients' privacy, so we have adopted a double opt-in registration process, even though it might add a little friction.
                </p>
                
                

                <p>
                  Please enter your email address below (make sure to use the exact same email address you used for your purchase). This will subscribe you to our ReBest Digital Ecosystem Updates, allowing us to send you real-time alerts as soon as new videos are released and notify you about exclusive materials shared in the private Facebook group or uploaded to the private YouTube playlists. Our goal is to ensure you can fully leverage your competitive advantage. By signing up via this link, you will receive our updates regarding these features. You can, of course, unsubscribe at any time.
                </p>
              </div>

              {/* Box Errore */}
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-200 p-3 rounded-lg mb-4 text-sm font-bold">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your purchase email"
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
                  {/* GDPR COMPLIANT LABELLING */}
                  <label htmlFor="privacy" className={`font-bold text-xs leading-tight ${style.mute}`}>
                    By clicking the button you request to receive our Private Facebook Group link and agree to receive our technical alerts, product updates, and new template notifications. You can unsubscribe at any time. I have read and agree to the{" "}
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
          <div className="text-xm text-gray-400 mt-6 text-left border-t border-white/10 pt-4">
  <p className="font-semibold text-white mb-2">Your privacy, your choice.</p>
  <p className="mb-2">
    If you wish to join our private Facebook group without receiving our email updates about new templates and strategic videos, you can bypass this form. Simply send a direct email to{' '}
    <a 
      href="mailto:info@rebestdigital.com?subject=Manual%20Facebook%20Group%20Access%20Request" 
      className="underline text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium"
    >
      info@rebestdigital.com
    </a>.
  </p>
  <p className="mb-1 font-medium text-gray-300">To manually verify your purchase and grant you access, please include in your email:</p>
  <ul className="list-disc pl-5 space-y-1 text-gray-400">
    <li>The <strong>order receipt number</strong> (or a copy of your receipt)</li>
    <li>The <strong>email address</strong> you used to make the purchase</li>
    <li>Your <strong>Facebook profile name</strong> so we can approve your request</li>
  </ul>
</div>
          <p className={`${style.mute} text-xs mt-6 text-slate-400 font-medium`}>
            ReBest Digital Ecosystem © All rights reserved. GDPR Compliant Processing.
          </p>
        </div>







        
      </div>
     </div>
    </main>
  );
}
