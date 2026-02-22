"use client";
import React from 'react';
import { CAMPAIGNS } from '@/config/campaigns';
import { PRICING_CONFIG, PLAN_PRICES } from './config/pricing';

const HOME_CAMPAIGN_ID = "stop";

export default function ComparazionePage() {
  const config = CAMPAIGNS[HOME_CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;

  return (
    <main className={`min-h-screen ${style.bg} flex flex-col items-center p-6 text-white font-sans`}>
      <div className="max-w-6xl w-full text-center mt-10">
        <img src="rebest.svg" alt="ReBest Logo" className="h-16 mx-auto mb-6" />
        
        <h1 className={`${style.text} text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight`}>
          Feature Comparison
        </h1>
        <p className="text-xl text-slate-400 mb-12">
          Everything you need to dominate the real estate market.
        </p>

        <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-left text-slate-300 font-bold uppercase text-xs tracking-widest">Product / Service</th>
                <th className={`p-6 text-center ${style.accent} font-black`}>EARLY BIRD</th>
                <th className="p-6 text-center text-slate-200 font-bold">FULL PRICE</th>
                <th className="p-6 text-center text-slate-200 font-bold text-opacity-60">START</th>
              </tr>
              <tr className="border-b border-white/5 bg-black/20">
                <td className="p-4 text-left font-bold text-slate-500 italic text-sm">Investment</td>
                <td className={`p-4 text-center font-black text-2xl ${style.accent}`}>{PLAN_PRICES.earlyBird}</td>
                <td className="p-4 text-center font-bold text-2xl text-white">{PLAN_PRICES.full}</td>
                <td className="p-4 text-center font-bold text-2xl text-white/60">{PLAN_PRICES.start}</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PRICING_CONFIG.map((item, index) => {
                if (item.isHeader) {
                  return (
                    <tr key={index} className="bg-white/5">
                      <td colSpan={4} className="p-3 pl-6 text-left font-black text-[10px] tracking-[0.2em] text-slate-500 uppercase border-y border-white/10">
                        {item.feature}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={index} className="hover:bg-white/5 transition-all group">
                    <td className="p-5 text-left flex items-center gap-2">
                      <span className={`text-sm md:text-base font-medium ${style.text}`}>{item.feature}</span>
                      
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
                      <td key={i} className="p-5 text-center">
                        {plan?.status === 'in_arrivo' ? (
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-black text-orange-400 uppercase tracking-tighter bg-orange-400/20 px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                            <span className="text-[9px] text-slate-500 mt-1">{plan.date}</span>
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
      </div>
    </main>
  );
}