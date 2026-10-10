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
    <section className="max-w-4xl mx-auto py-2 px-0 space-y-32">
      {servicesData.map((service) => {
        const isRight = service.posizioneImmagine === 'destra';

        return (
          // Spostiamo il KEY sul div più esterno del ciclo per un corretto rendering di React
          <div key={service.id} className="w-full px-2">
            <div>
              <span className={`${style.text} py-4 text-4xl font-bold text-center block mb-2 px-2 border-b-8 border-t-8`} style={{ borderColor : style.color || '#FF00FF' }}>
                {service.sottotitolo}
              </span>
            </div> 
            
            <div className="flex flex-col md:flex-row items-start gap-12 pt-6">
              {/* Contenitore Testi */}
              <div className={`flex-1 w-full ${isRight ? 'order-2 md:order-1' : 'order-2'}`}>
                <h2 className={`${style.text} text-xl font-black mb-6`}>
                  {service.titolo}
                </h2>
                
                <div className="border-l border-l-1 md:pl-12 pl-4 space-y-4" style={{ borderColor: style.color || '#FF00FF' }}>
                  <p className={`${style.text} leading-relaxed text-base`}>
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
                      >
                        Scopri di più
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Contenitore Immagine FIXATO */}
              {/* Aggiungiamo w-full e un'altezza minima fissa o proporzionale per non far collassare il blocco su mobile */}
              <div 
                className={`w-full md:flex-1 aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${
                  isRight ? 'order-1 md:order-2' : 'order-1'
                }`} 
                style={{ overflow: 'hidden' }}
              >
                <div className="relative w-full h-full min-h-[300px] md:min-h-full">
                  <Image
                    src={service.immagine}
                    alt={service.titolo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={service.id === "1"}
                  />
                </div>
              </div>
            </div>
          </div> 
        );
      })}
    </section>
  );
}