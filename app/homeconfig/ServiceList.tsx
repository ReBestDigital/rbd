// components/ServiceList.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '../../config/service';

interface ServiceListProps {
  style: any;
}

export default function ServiceList({ style }: ServiceListProps) {
  return (
    <section className="max-w-6xl mx-auto py-4 px-6 space-y-32">
      {servicesData.map((service) => {
        const isRight = service.posizioneImmagine === 'destra';

        return (
          <div 
            key={service.id} 
            className="flex flex-col md:flex-row items-center gap-12 pt-6"
          >
            {/* Contenitore Testi */}
            {/* Usiamo l'ordine condizionale basato su isRight per specchiare il layout su desktop */}
            <div className={`flex-1 ${isRight ? 'order-2 md:order-1' : 'order-2'}`}>
              <span className="text-sm font-semibold tracking-wider uppercase opacity-60 block mb-2" style={{ color: style.color || '#FF00FF' }}>
                {service.sottotitolo}
              </span>
              
              <h2 className={`${style.text} text-3xl font-black mb-6 uppercase`}>
                {service.titolo}
              </h2>
              
              <div className="border-l border-l-1 md:pl-12 pl-4 space-y-4" style={{ borderColor: style.color || '#FF00FF' }}>
                <p className= {`${style.text} leading-relaxed text-base`}>
                  {service.descrizione1}
                </p>
                <p className={`${style.text} leading-relaxed text-base`}>
                  {service.descrizione2}
                </p>
                
                {/* Campo Jolly / Conclusioni */}
                {service.jolly && (
                  <div className="p-4 bg-white/5 border border-white/10 text-white/90 rounded-xl italic text-sm mt-4">
                    {service.jolly}
                  </div>
                )}

                {/* Link / Bottone */}
                {service.link && (
                  <div className="pt-4">
                    <Link 
                      href={service.link}
                      className="inline-flex items-center justify-center px-6 py-2 border text-sm font-bold uppercase tracking-wider rounded-xl text-white bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                      style={{ borderColor: style.color ? `${style.color}40` : '#white/10' }} 
                      // Nota: "\${style.color}40" aggiunge un'opacità al bordo se vuoi richiamare il colore principale
                    >
                      Scopri di più
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Contenitore Immagine */}
            <div className={`flex-1 aspect-square rounded-2xl bg-white/5 border border-white/10 flex text-white/20 ${isRight ? 'order-1 md:order-2' : 'order-1'}`} style={{ overflow: 'hidden' }}>
              <div className="relative w-full h-full">
                <Image
                  src={service.immagine}
                  alt={service.titolo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}