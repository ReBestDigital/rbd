import React from 'react';
import Image from 'next/image'
import img1 from '../../../public/seohub1.jpg'
import img2 from '../../../public/seohub2.jpg'
import img3 from '../../../public/seohub3.jpg'
import img4 from '../../../public/seohub4.jpg'
import img5 from '../../../public/seohub5.jpg'
interface HubDetails2Props {
  style: any;
}

export default function HubDetails2({ style }: HubDetails2Props) {
  return (
    <section className="max-w-6xl mx-auto py-4 px-6 space-y-32">
     {/* DIVIDER HEADER */}
<h2 className={`${style.text} text-2xl mb-12 mt-20 border-b-4 border-t-4 pb-6 pt-6 uppercase font-black text-center tracking-tighter`} style={{ borderColor: style.color || '#FFffFF' }}>
  <strong>In the book we promised to help you build your ecosystem.</strong> <br />These are the principles you need to follow to build all the assets.</h2>

{/* SECTION 1: THE HOME BUYER CHECKLIST (Immagine a Destra) */}
<div className="flex flex-col md:flex-col items-center gap-12 py-4 border-b border-white/10">
  <div className="flex-1 order-2 md:order-1">
    <h2 className={`${style.text} text-3xl font-black mb-6`}>📍 Establishing Local Authority and Territory Dominance</h2>
    <p className="text-white/80 mb-6 leading-relaxed">
    Professional success in the digital era requires more than technical expertise; it demands a transition from an invisible generalist to a recognized <strong>Local Authority</strong>. Many practitioners experience "Silent Failure" due to <strong>Professional Invisibility</strong>, operating without a clear digital presence while business goes to more visible competitors. By implementing our strategic protocol, you move from <strong>"passive hope"</strong> to engineering your own <strong>lead flow</strong>.  </p>

    <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
      <p className="text-white/70 text-base italic mb-4">
      Occupying <strong>Cognitive Space</strong> in the minds of potential sellers months before they act ensures you are the only logical choice, elevating your status from a mere service provider to an indispensable <strong>Strategic Advisor</strong>.   </p>
    </div>
    
  </div>
  <div className="flex-1 order-1 md:order-2  rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
    <Image src={img1} alt="Local Authority Preview" className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
  </div>
</div>

{/* SECTION 2: THE RECIPROCITY ENGINE (Immagine a Sinistra) */}
<div className="flex flex-col md:flex-col items-center gap-12 py-4 border-b border-white/10">
  
  <div className="flex-1">
    <h2 className={`${style.text} text-3xl font-black mb-6 `}>🧠 The Principle of Reciprocity: From Solicitor to Ally</h2>
    <div className="space-y-8 text-base text-white/70">
  {/* Introduzione basata sul posizionamento d'autorità */}
  <p className="leading-relaxed">
   The key to modern lead generation is the <strong>Principle of Reciprocity</strong>, shifting from "pushy solicitation" to providing <strong>High-Value Upfront</strong>. Instead of prematurely asking for listings, you offer immediate, tangible value through <strong>Lead Magnets</strong> such as technical guides or market reports. </p>

  {/* Box dell'Intento Strategico con focus sul debito psicologico */}
  <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
    <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Strategic Intent: The Reciprocity Engine</h3>
    <p className="mb-4 italic">
     This act of professional generosity creates a <strong>psychological debt</strong>, breaking down the seller's natural defenses.  </p>
  </div>

  {/* Nota dello Strategista per aumentare il valore percepito */}
  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
    <h4 className="text-white font-bold mb-3 text-sm uppercase">Why this works:</h4>
    <ul className="space-y-2 text-sm text-white/60">
      By following the <strong>80/20 Rule</strong>—delivering 80% educational value—you position yourself as a <strong>Market Guide</strong>, ensuring the eventual transaction feels like a natural evolution of a trusted relationship.
    </ul>
  </div>
  <div className="flex-1 w-full rounded-2xl border border-white/10 ">
    {/* Qui metterai l'immagine dell'infografica reciprocità */}
    <Image src={img2} alt="Reciprocity Engine Preview" className="w-full object-cover opacity-80" />
  </div>
</div>

  </div>
</div>

{/* SECTION 3 */}
<div className="flex flex-col md:flex-col items-center gap-12 py-4">
  <div className="flex-1 order-2 md:order-1">
    <h2 className={`${style.text} text-3xl font-black mb-10`}>⚡ Pattern Interrupt: Defeating Monotonous Elegance</h2>
    <p className="text-white/80 mb-6 leading-relaxed">
     In a sea of identical real estate content, <strong>"Monotonous Elegance"</strong> leads to invisibility and being treated as a commodity. To command attention, you must utilize the <strong>Pattern Interrupt Protocol</strong>, using bold chromatic signals and high-contrast visuals to arrest the hypnotic <strong>1.5-second scroll</strong>.</p>
    <div className={`${style.text} border-l-4 md:pl-12 pl-4 mb-8`} style={{ borderColor: style.color || '#FF00FF' }}>
      This <strong>Neurological Strategy</strong> forces the prospect’s brain to prioritize your message over the familiar and predictable graphics of competitors. Effective visual identity is not about decoration; it is a <strong>Positioning Statement</strong> that signals innovation and inherent authority, allowing your expert voice to reach the prospect's conscious mind.
    </div>
    
  </div>
  <div className="flex-1 order-1 md:order-2 w-full  rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
  
    <Image src={img3} alt="Pattern interrupt Preview" className="w-full object-cover opacity-80" />
  </div>
</div>
{/* SECTION 4 */}
<div className="flex flex-col md:flex-col items-center gap-12 py-4 border-b border-white/10">
  
  <div className="flex-1">
    <h2 className={`${style.text} text-3xl font-black mb-6 `}>🛠️The Marketing Conveyor Belt: Efficiency and Scale</h2>
    <div className="space-y-8 text-base text-white/70">
  {/* Introduzione basata sul posizionamento d'autorità */}
  <p className="leading-relaxed">
  Maintaining a constant digital presence can lead to intense <strong>operational friction</strong>, but the <strong>"Marketing Conveyor Belt"</strong> provides a systemic solution. This circular process automates lead attraction and nurturing, allowing you to build authority even while focusing on <strong>high-level negotiations</strong>.
  </p>

  {/* Box dell'Intento Strategico con focus sul debito psicologico */}
  <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
    <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Build a system:</h3>
    <p className="mb-4 italic">
  By delegating manual labor to a <strong>Private Framework</strong> of automated touchpoints, you transform your agency into a data-driven enterprise. This efficiency allows you to manage a dominant marketing empire, reclaiming your most valuable asset: your <strong>Revenue-Producing Time</strong>.
    </p>
  </div>
 <div className="flex-1 w-full rounded-2xl border border-white/10 ">
   
    <Image src={img4} alt="The Marketing Conveyor Belt Preview" className="w-full object-cover opacity-80" />
  </div>
</div>

  </div>
</div>

{/* SECTION 5*/}
<div className="flex flex-col md:flex-col items-center gap-12 py-4">
  <div className="flex-1 order-2 md:order-1">
    <h2 className={`${style.text} text-3xl font-black mb-10`}>💰 Data Sovereignty: Escaping the Digital Tenant Trap</h2>
    <p className="text-white/80 mb-6 leading-relaxed">
    Relying solely on real estate portals transforms the professional into a <strong>"Digital Tenant,"</strong> subsidizing a platform that prioritizes its own growth over yours. True <strong>Data Sovereignty</strong> is achieved by building a <strong>Proprietary Audience</strong> and moving leads from public noise into your <strong>Private Vault</strong>. 
     </p>
    <div className={`${style.text} border-l-4 md:pl-12 pl-4 mb-8`} style={{ borderColor: style.color || '#FF00FF' }}>
  This strategic framework allows you to communicate directly with your market through newsletters and automated workflows without the interference of competitor ads. By owning your <strong>private database</strong> (names, emails, and phone numbers), you secure a sustainable business asset that remains independent of platform price hikes or account terminations.   </div>
    
  </div>
  <div className="flex-1 order-1 md:order-2 w-full  rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
    {/* Qui metterai l'immagine dei 5 pilastri */}
    <Image src={img5} alt="Data Sovereignty Preview" className="w-full h-full object-cover opacity-80" />
  </div>
</div>
           <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-white font-bold mb-4 uppercase border-b-1 md:pb-3 pb-1" style={{ borderColor: style.color || '#FF00FF' }}>💎 YouTube basic social videos</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              <strong>"Basic courses on how to set up social media will be available soon."</strong>
            </p>
            <p className="text-sm text-white/90 leading-relaxed pt-4">
           <strong> The videos are in the making:</strong> We still decided to publish the book because in it you will find every single technique you need to start truly owning your business.
            </p>
          </div>
      
    </section>
  );
}