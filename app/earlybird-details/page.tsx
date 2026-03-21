"use client";
import React from 'react';
import { CAMPAIGNS } from '@/config/campaigns';
import { PRICING_CONFIG, PLAN_PRICES } from './config/pricing';
import Link from 'next/link';
import { RBDLINKS } from '@/config/rbdlinks';
import SEOAdvantages from './DetailedSEOAdvantages'; 
import FAQSection1 from '@/components/FAQSection1';
const HOME_CAMPAIGN_ID = "stop";

export default function ComparazionePage() {
  const config = CAMPAIGNS[HOME_CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;

  return (
    <main className={`min-h-screen ${style.bg} flex flex-col items-center p-1 md:p-6 text-white font-sans`}>

 {/* STICKY BUTTONS BAR */}
      <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center px-6">
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
          <Link 
             href={RBDLINKS["rebest-digital"].earlybirdBuyGumroad} target="_blank" rel="noopener noreferrer"
            className={`flex-1 ${style.primary} text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight shadow-lg transition-transform active:scale-95`}
          >
            🔥 Buy Early Bird
          </Link>
          <Link 
            href={RBDLINKS["rebest-digital"].earlybirdFeature} 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight border border-white/20 transition-all active:scale-95"
          >
            📦 Grouped Features
          </Link>
        </div>
      </div>

     <div className="max-w-5xl w-full text-center mt-10">
        <img src="ReBestEcosystem.svg" alt="ReBest Logo" className="h-30 mx-auto mb-6" />
        <p className="p-2 md:p-4 text-5xl text-slate-100 font-extrabold mb-4 border-b-8 border-t-8 border-[#ff00ff]">
          Everything you need to dominate the real estate market.
        </p>
        <h1 className={`${style.text} text-xl md:text-xl font-extrabold mb-8  tracking-tight mb-6`}>
         Stop overpaying for generic, elegant marketing tools. <br />Stop relying on generic web agency.
        </h1>
        
  <div className="max-w-4xl mx-auto text-center mb-6 px-4">
  
   <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
    Don't just buy templates.<br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-violet-600">
      Build a Real Estate Marketing Empire.
    </span>
  </h1>

 <h2 className="text-2xl md:text-3xl text-[#ffffff] font-extrabold uppercase tracking-widest mb-4">
    Early Bird Access — Limited Time Offer <br /> Expires April 30, 2026
  </h2>
 {/* 3. THE OFFER BOX - Design compatto e tecnico per la conversione */}
  <div className="max-w-3xl mx-auto mb-12 bg-slate-900/80 p-6 md:p-8 rounded-3xl border border-fuchsia-500/30 backdrop-blur-sm shadow-[0_0_40px_rgba(255,0,255,0.1)]">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Prezzi */}
      <div className="text-center md:text-left">
        <span className="text-[#ff00ff] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
          Limited Early Bird Access
        </span>
        <div className="flex items-baseline justify-center md:justify-start gap-3">
          <span className="text-white text-5xl font-black">€399</span>
          <span className="text-slate-500 line-through text-lg">€1,490+</span>
        </div>
      </div>

      {/* Divisore */}
      <div className="hidden md:block h-16 w-px bg-slate-700/50"></div>

      {/* Vantaggi rapidi */}
      <div className="text-center md:text-left flex-1">
        <ul className="text-slate-300 text-sm space-y-1 inline-block text-left">
          <li className="flex items-center gap-2">✅ Lifetime Access</li>
          <li className="flex items-center gap-2">✅ Exclusive Bonuses</li>
          <li className="flex items-center gap-2">✅ All Future Updates</li>
        </ul>
      </div>
    </div>
  </div>
  <p className="text-xl text-slate-100 mb-10 leading-relaxed border-l-8  border-[#ff00ff] pl-8">
    We analyzed every single step of Top Real estate Agent's workflow and built a full-scale 
    solution. From the first touchpoint to the final closing, we’ve got you covered.
    <br/><br/>
    <span className="text-white font-bold italic">Scroll down to witness the full "Firepower" of the ReBest Digital Ecosystem. </span> <br />
     We listed every single asset because we want you to see the massive scale of what you’re 
    getting for <strong>less than 10% of a your single small commission.</strong>
  </p>

 </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-2  md:p-6 text-left text-slate-300 font-bold uppercase text-sm md:text-base  tracking-widest">Product / Service</th>
                <th className={`p-2  md:p-6 text-center ${style.accent} font-black text-sm md:text-base `}>EARLY BIRD</th>
                <th className="p-2  md:p-6 text-center text-slate-200 font-bold text-sm md:text-base ">FULL PRICE <br></br>after 2025/03/23</th>
                <th className="p-2  md:p-6 text-center text-slate-200 font-bold text-opacity-60 text-sm md:text-base ">START Pack</th>
              </tr>
              <tr className="border-b border-white/5 bg-black/20">
                <td className="p-2  md:p-4 text-left font-bold text-slate-500 italic text-lg">Investment</td>
                <td className={`p-2  md:p-4 text-center font-black text-2xl ${style.accent} text-sm md:text-2xl`}>{PLAN_PRICES.earlyBird}</td>
                <td className="p-2  md:p-4 text-center font-bold text-2xl text-white text-sm md:text-xl">{PLAN_PRICES.full}</td>
                <td className="p-2  md:p-4 text-center font-bold text-2xl text-white/60 text-sm md:text-xl">{PLAN_PRICES.start}</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PRICING_CONFIG.map((item, index) => {
                if (item.isHeader) {
                  return (
                    <tr key={index} className="bg-white/5">
                      <td colSpan={4} className="p-3 md:p-4 pl-2 md:pl-6 text-left font-black text-lg tracking-[0.1em] md:tracking-[0.2em] text-slate-400 uppercase border-y border-white/10">
                        {item.feature}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={index} className="hover:bg-white/5 transition-all group">
                   <td className="p-3 pl-3 md:pl-8  text-left flex items-center gap-2">
                      <span className={`text-sm md:text-lg font-medium ${style.text}`}>{item.feature}</span>
                      
                      {/* TOOLTIP LOGIC */}
                      {item.description && (
                        <div className="relative flex items-center group/tooltip">
                          <span className="cursor-help bg-slate-700 text-slate-300 w-4 h-4 flex items-center justify-center rounded-full text-[10px] font-bold hover:bg-slate-500 transition-colors">?</span>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/tooltip:block w-64 p-3 bg-slate-800 border border-white/20 text-white text-xs rounded-xl shadow-2xl z-50">
                            {item.description}
                            <div className="absolute top-full left-2 border-8 border-transparent border-t-slate-800"></div>
                          </div>
                        </div>
                      )}
                    </td>
                    
                    {[item.earlyBird, item.full, item.start].map((plan, i) => (
                      <td key={i} className="text-center">
                        {plan?.status === 'in_arrivo' ? (
                          <div className="flex flex-col items-center">
                            <span className="text-[10px]  font-black text-orange-400 uppercase tracking-tighter bg-orange-400/20 px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                            <span className="text-[10px] text-slate-400 mt-1">{plan.date}</span>
                          </div>
                        ) : plan?.active ? (
                          <span className={`${style.accent} text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>✦</span>
                        ) : (
                          <span className="text-white/10 text-xl">✕</span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
                            <div className="mt-20">
                              <SEOAdvantages style={style} />
                            </div>
                            <div className="mt-20">
                                    <FAQSection1 style={style} />
                             </div>
      </div>
    </main>
  );
}