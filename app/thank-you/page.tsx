'use client';
import { useSearchParams } from 'next/navigation';
import { CAMPAIGNS } from '@/config/campaigns';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const campaignKey = searchParams.get('campaign') || 'stop';
  
  const defaultCampaign = CAMPAIGNS["stop"];
  const config = (campaignKey && CAMPAIGNS[campaignKey as keyof typeof CAMPAIGNS]) 
                 ? CAMPAIGNS[campaignKey as keyof typeof CAMPAIGNS] 
                 : defaultCampaign;

  const { style, thankYou } = config;

  return (
    <div className={`${style.bg} min-h-screen flex flex-col items-center justify-center p-6 text-center`}>
      
      {/* Icona o Elemento Visivo */}
      <div className={`${style.primary} w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,0,255,0.4)] animate-bounce`}>
        <span className="text-white text-4xl">{thankYou.icon || "🚀"}</span>
      </div>

      <h1 className={`${style.text} text-5xl font-extrabold mb-6 tracking-tight`}>
        {thankYou.title}
      </h1>
      
      <div className={`${style.card} p-8 max-w-lg mb-10`}>
        <p className={`${style.text} ${style.muted} text-xl leading-relaxed`}>
          {thankYou.description} <br />
          <span className={`${style.accent} font-bold`}>{thankYou.highlight}</span> {thankYou.subDescription}
        </p>
      </div>

      {/* GRIGLIA PULSANTI - Gestisce da 1 a 4 bottoni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
        
        {/* Bottone 1: Primario (Pieno) */}
        <a href={thankYou.ctaLink} className={`${style.primary} ${style.hover} text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg text-center`}>
          {thankYou.ctaLabel}
        </a>

        {/* Bottone 2: Secondario (Trasparente) */}
        <a href={thankYou.secondaryLink} target="_blank" rel="noopener" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl border border-white/20 transition-all text-center">
          {thankYou.secondaryLabel}
        </a>

        {/* Bottone 3: Extra (Opzionale) */}
        {thankYou.ctaLink3 && (
          <a href={thankYou.ctaLink3} className="bg-white/5 hover:bg-white/10 text-white/80 font-bold py-4 px-6 rounded-xl border border-white/10 transition-all text-center">
             {thankYou.ctaLabel3 || "SCOPRI DI PIÙ"}
          </a>
        )}

        {/* Bottone 4: Extra (Opzionale) */}
        {thankYou.ctaLink4 && (
          <a href={thankYou.ctaLink4} className="bg-white/5 hover:bg-white/10 text-white/80 font-bold py-4 px-6 rounded-xl border border-white/10 transition-all text-center">
             {thankYou.ctaLabel4 || "CONTATTACI"}
          </a>
        )}
      </div>

      <div className="mt-12">
        <p className={`${style.text} ${style.muted} text-sm uppercase tracking-widest font-bold opacity-60`}>
          {thankYou.footerNote}
        </p>
      </div>
      
    </div>
  );
}