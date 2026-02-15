'use client';
import { useSearchParams } from 'next/navigation';
import { CAMPAIGNS } from '@/config/campaigns';



export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const campaignKey = searchParams.get('campaign') || 'stop'; // Default se manca
  const defaultCampaign = CAMPAIGNS["stop"];
  // Recuperiamo lo stile della tua campagna principale
  const config = (campaignKey && CAMPAIGNS[campaignKey as keyof typeof CAMPAIGNS]) 
                 ? CAMPAIGNS[campaignKey as keyof typeof CAMPAIGNS] 
                 : defaultCampaign;
  const {style,thankYou} = config;

  return (
    <div className={`${style.bg} min-h-screen flex flex-col items-center justify-center p-6 text-center`}>
      {/* Icona o Elemento Visivo */}
      <div className={`${style.primary} w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,0,255,0.4)]`}>
        <span className="text-white text-4xl">🚀</span>
      </div>

      <h1 className={`${style.text} text-5xl font-extrabold mb-6 tracking-tight`}>
        {thankYou.title}
      </h1>
      
      <div className={`${style.card} p-8 max-w-lg`}>
        <p className={`${style.text} ${style.muted} text-xl leading-relaxed `}>
          {thankYou.description} <br />
          <span className={`${style.accent} font-bold`}>{thankYou.highlight}</span> {thankYou.subDescription}
        </p>
      </div>

      <div className="mt-12">
        <p className={`${style.text} ${style.muted} text-sm uppercase tracking-widest font-bold`}>
          {thankYou.footerNote}
        </p>
      </div>
      
    </div>
    
  );
}