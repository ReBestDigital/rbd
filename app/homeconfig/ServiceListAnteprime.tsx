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
    <section className="max-w-4xl mx-auto py-8 px-4 space-y-8 bg-slate-800">
      
      {/* INTRODUZIONE IN CIMA ALLA LISTA */}
      <div className="text-center mb-12 border-b-2 pb-6 border-t-8" style={{ borderColor : style.color || '#FF00FF' }}>
        <h1 className={`${style.text} text-3xl md:text-4xl font-black mb-4 mt-4`}>
          This is the list of services by rebestdigital.com. You can either click to go directly to the sales page, or scroll further down for more details.
        </h1>
      </div>

      {/* LISTA DEI SERVIZI */}
      <div className="space-y-6">
        {servicesData.map((service) => {
          return (
            <div 
              key={service.id} 
              className="w-full flex gap-4 md:gap-6 items-center pb-6 border-b items-start"
              style={{ borderColor: style.color ? `${style.color}20` : 'rgba(255,255,255,0.1)' }}
            >
              
              {/* CONTENITORE IMMAGINE (Cliccabile nativamente se c'è un link) */}
              {service.link ? (
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-34 h-34 md:w-32 md:h-32 relative flex-shrink-0 bg-white/5 border rounded-xl " /* overflow-hidden block */
                  style={{ borderColor: style.color ? `${style.color}30` : 'rgba(255,255,255,0.1)' }}
                >
                  <Image
                    src={service.immagine}
                    alt={service.titolo}
                    fill
                    className="object-cover transition-transform duration-300 ease-out hover:scale-300 hover:z-30"
                    sizes="(max-width: 768px) 96px, 128px"
                    priority={service.id === "1"}
                  />
                </a>
              ) : (
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 bg-white/5 border rounded-xl " /*  overflow-hidden */
                  style={{ borderColor: style.color ? `${style.color}30` : 'rgba(255,255,255,0.1)' }}
                >
                  <Image
                    src={service.immagine}
                    alt={service.titolo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 96px, 128px"
                    priority={service.id === "1"}
                  />
                </div>
              )}

              {/* CONTENUTO A FIANCO */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                
                {/* Titolo grande con tag standard per sicurezza */}
                <h2 className={`${style.text} text-xl md:text-2xl font-black leading-tight`}>
                  {service.link ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {service.titolo}
                    </a>
                  ) : (
                    service.titolo
                  )}
                </h2>
                
                {/* Sottotitolo piccolo */}
                {service.sottotitolo && (
                  <span className="mt-2 text-base md:text-base uppercase tracking-wider font-bold opacity-100 mt-0.5" style={{ color: style.color2 }}>
                    {service.sottotitolo}
                  </span>
                )}
                
                {/* Testo sotto tagliato a 2 righe */}
                <p className={`${style.text} text-sm md:text-base opacity-80 mt-2 leading-relaxed line-clamp-2`}>
                  {service.descrizione1}{' '}
                  {service.link && (
                    <a 
                      href={service.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-black underline ml-1 inline-block hover:opacity-80"
                      style={{ color: style.color || '#FF00FF' }}
                    >
                      more...
                    </a>
                  )}
                </p>

              </div>

            </div> 
          );
        })}
      </div>
    </section>
  );
}
