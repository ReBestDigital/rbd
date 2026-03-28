"use client";

import React from 'react';
import Link from 'next/link';
import { CAMPAIGNS } from '@/config/campaigns';
import HubDetails from './HubDetails';
import HubFAQ from './FAQSectionHub';
import HubSEOAdvantages from './DetailedSEOAdvantages';
import HubDetails2 from './HubDetails2';

const CAMPAIGN_ID = "resourceHub";

export default function ResourceHubPage() {
  const config = CAMPAIGNS[CAMPAIGN_ID as keyof typeof CAMPAIGNS];
  if (!config) return null;

  const { style } = config;

  return (
    <main className={`min-h-screen ${style.bg} flex items-center justify-center p-6 pb-24`}>
        
      {/* STICKY BUTTONS BAR - Identica a prima */}
      <div className={`fixed bottom-2 left-0 right-0 z-50 flex ${style.text} justify-center`} style={{ marginBottom: 'var(--cookie-banner-height, 0px)' }}>
         <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 w-full max-w-2xl bg-black/40 backdrop-blur-xl sm:p-3 rounded-2xl border border-white/10 shadow-2xl">
          <Link 
            href="/" 
            className={`flex-1 ${style.primary} text-white text-center py-1 sm:py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight shadow-lg transition-transform active:scale-95`}
          >
            🏠 Official site
          </Link>
          <Link 
            href="/earlybird-feature" 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-1 sm:py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight border border-white/20 transition-all active:scale-95"
          >
            🔥 Havent read the the book yet?
          </Link>
          <Link 
            href="/earlybird-feature" 
            className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-1 sm:py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-tight border border-white/20 transition-all active:scale-95"
          >
            ⭐ Review the book if you liked it
          </Link>
        </div>
      </div> 
    
      <div className="max-w-5xl w-full">
        {/* TITOLO CON BORDI E ANIMAZIONE - Identico a prima */}
        <h1 className={`${style.text} text-4xl md:text-4xl font-bold text-slate-200 mb-10 mt-6 border-b-8 border-t-8 md:pb-6 pb-4 md:pt-6 pt-4 px-2 md:px-1`} style={{ borderColor: style.color || '#FFffFF' }}>
          <div className="bg-red-600 text-white text-center py-2 text-xl font-bold animate-pulse mb-6">
            ⚠️ ACCESSING YOUR TACTICAL ASSETS
          </div>
          <div className="pb-4">
            <img src="/ReBestEcosystem.svg" alt="ReBest Logo" className="object-cover max-w-100" />
          </div>        
          {config.title}
        </h1>       

        <div className="px-6 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* COLONNA SINISTRA: Preview Immagine - Identica a prima */}
          <div className="relative aspect-[3/4] bg-slate-100 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center border border-slate-200">
            {config.image ? (
              <img src={config.image} alt="Early bird Preview" className="object-cover w-full h-full" />
            ) : (
              <span className="text-slate-400 font-medium italic">RESOURCE PREVIEW</span>
            )}
          </div>
        
          {/* COLONNA DESTRA: Contenuto Testuale (Sostituisce il Form) */}
          <div className="flex flex-col">
            <p className="font-bold text-white text-xl mb-4 leading-tight">
              <b>{config.subtitle}</b> 
            </p>

            {config.text1 && (
              <p className="text-lg text-slate-100 mb-4 leading-relaxed">
                {config.text1}
              </p>
            )}

            {config.text2bold && (
              <p className="font-bold text-lg text-slate-100 mb-4">
                <b>{config.text2bold}</b> 
              </p>
            )}

            {config.text3border && (
              <div className="text-lg text-slate-100 mb-8 border-l-8 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
                <p>{config.text3border}</p>
              </div>
            )}

            

           
          </div>
        </div>

        {/* Spaziatori per le sezioni extra se vorrai riattivarle */}
        <div className="mt-20">
        <HubDetails style={style} />
        </div>
        <div className="mt-20">
        <HubDetails2 style={style} />
        </div>
        
        <div className="mt-20">
        <HubSEOAdvantages style={style} />

        </div>
        <div className="mt-20">
        <HubFAQ style={style} />
        
      </div>
      </div>
    </main>
  );
}