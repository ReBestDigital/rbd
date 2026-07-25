import React from 'react';
import Image from 'next/image';

interface AudiobookBonusSectionProps {
  style: any;
}

export default function AudiobookBonusSection({ style }: AudiobookBonusSectionProps) {
  return (
    <section className="max-w-6xl mx-auto py-4 px-6">
      <div 
        className="bg-white/5 rounded-2xl border p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
        style={{ borderColor: style.color || '#FF00FF' }}
      >
        {/* Glow di sfondo futuristico */}
        <div 
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: style.color || '#FF00FF' }}
        />

        {/* COLONNA SINISTRA: Testi ed Elenco */}
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-block bg-red-600 text-white font-bold text-xs uppercase px-3 py-1 rounded-full animate-pulse">
            🎁 Second Chance Exclusive Bonus
          </div>

          <h2 className={`${style.text} text-3xl md:text-4xl font-black uppercase tracking-tight`}>
            FREE BONUS: &quot;Stop Being Invisible!&quot; Audiobook
          </h2>

          <p className="text-white/90 text-lg leading-relaxed">
            Get the official audiobook version created by <strong>Rebest Digital</strong>. It serves as your strategic masterclass on how to deploy and maximize every asset within the <strong>Rebest Digital Ecosystem</strong>.
          </p>

          <div 
            className="border-l-4 md:pl-8 pl-4 space-y-3" 
            style={{ borderColor: style.color || '#FF00FF' }}
          >
            <div className="text-white/80 text-base">
              <strong className="text-white">🎧 Template Masterclass:</strong> Understand the exact strategy and &quot;why&quot; behind the templates so you can close deals faster.
            </div>
            <div className="text-white/80 text-base">
              <strong className="text-white">🚀 50 Done-For-You Social Scripts:</strong> High-converting scripts ready to copy and paste directly into your channels.
            </div>
            <div className="text-white/80 text-base">
              <strong className="text-white">⚙️ Full Ecosystem Optimization:</strong> Seamlessly integrate all tools into a unified, high-performing marketing machine.
            </div>
          </div>
        </div>

        {/* COLONNA DESTRA: Anteprima Immagine / Mockup */}
        <div className="flex-1 w-full max-w-sm md:max-w-none flex justify-center z-10">
          <div 
            className="relative w-full aspect-square bg-slate-900/80 rounded-2xl border border-white/20 flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden"
          >
            {/* Se hai già un'immagine dell'audiolibro o la grafica che abbiamo generato, usala qui sotto! */}
            <Image 
              src="/AudioStopBeingInvisible.jpg" 
              alt="Stop Being Invisible Audiobook Bonus"
              width={400}
              height={400}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}