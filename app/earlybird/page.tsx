"use client";

import React from 'react';
import { CAMPAIGNS } from '@/config/campaigns';
import { PRICING_CONFIG, PLAN_PRICES } from './config/pricing';

const HOME_CAMPAIGN_ID = "stop";

export default function ComparazionePage() {
  const config = CAMPAIGNS[HOME_CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  const { style } = config;

  return (
    <main className={`min-h-screen ${style.bg} flex flex-col items-center p-6 text-white`}>
      <div className="max-w-5xl w-full text-center mt-10">
        <img src="rebest.svg" alt="ReBest Logo" className="h-16 mx-auto mb-6" />
        
        <h1 className={`${style.text} text-4xl md:text-5xl font-extrabold mb-4`}>
          Plans Comparison
        </h1>
        <p className="text-xl text-slate-300 mb-12">
          Find the perfect solution for your real estate digital strategy.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-500 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
          <table className="w-full border-collapse">
            <thead>
              {/* Riga Titoli Piani */}
              <tr className="border-b border-slate-500 bg-slate-800/50 text-xs md:text-base">
                <th className="p-6 text-left text-slate-200 font-bold uppercase tracking-wider">Features</th>
                <th className={`p-6 text-center ${style.accent} font-extrabold`}>EARLY BIRD</th>
                <th className="p-6 text-center text-slate-200 font-bold">FULL PRICE</th>
                <th className="p-6 text-center text-slate-200 font-bold">START</th>
              </tr>
              {/* RIGA PREZZI AGGIUNTA QUI */}
              <tr className="border-b border-slate-600 bg-slate-900/80">
                <td className="p-4 text-left font-bold text-slate-400 italic">Monthly Investment</td>
                <td className={`p-4 text-center font-black text-xl ${style.accent}`}>{PLAN_PRICES.earlyBird}</td>
                <td className="p-4 text-center font-bold text-xl text-white">{PLAN_PRICES.full}</td>
                <td className="p-4 text-center font-bold text-xl text-white">{PLAN_PRICES.start}</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {PRICING_CONFIG.map((item, index) => {
                // Se è un Header di categoria
                if (item.isHeader) {
                  return (
                    <tr key={index} className="bg-slate-800/30">
                      <td colSpan={4} className="p-3 pl-6 text-left font-black text-sm tracking-widest text-slate-400 uppercase border-y border-slate-700">
                        {item.feature}
                      </td>
                    </tr>
                  );
                }

                // Riga feature normale
                return (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className={`p-5 text-left font-medium text-sm md:text-base ${style.text}`}>{item.feature}</td>
                    {[item.earlyBird, item.full, item.start].map((plan, i) => (
                      <td key={i} className="p-5 text-center">
                        {plan?.status === 'in_arrivo' ? (
                          <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-orange-400 uppercase tracking-tighter bg-orange-400/10 px-2 py-0.5 rounded">
                              Coming Soon
                            </span>
                            <span className="text-[10px] text-slate-400 mt-1">{plan.date}</span>
                          </div>
                        ) : plan?.active ? (
                          <span className={`${style.accent} text-2xl`}>✦</span>
                        ) : (
                          <span className="text-slate-600 text-xl">✕</span>
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