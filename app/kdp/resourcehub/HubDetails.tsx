import React from 'react';
import Image from 'next/image'
import img1 from '../../../public/GraficheHomeEarlybird.jpg'
import img2 from '../../../public/1GraficheHomeEarlybird.jpg'
import img3 from '../../../public/2GraficheHomeEarlybird.jpg'
interface HubDetailsProps {
  style: any;
}

export default function HubDetails({ style }: HubDetailsProps) {
  return (
    <section className="max-w-6xl mx-auto py-4 px-6 space-y-32">
     {/* DIVIDER HEADER */}
<h2 className={`${style.text} text-2xl mb-12 mt-20 border-b-4 border-t-4 pb-6 pt-6 uppercase font-black text-center tracking-tighter`} style={{ borderColor: style.color || '#FFffFF' }}>
  <strong>You dont need "pretty" files. You need functional business tools.</strong> <br /> Here You will also find the "how to use it"</h2>

{/* SECTION 1: THE HOME BUYER CHECKLIST (Immagine a Destra) */}
<div className="flex flex-col md:flex-row items-center gap-12 py-12 border-b border-white/10">
  <div className="flex-1 order-2 md:order-1">
    <h2 className={`${style.text} text-3xl font-black mb-6 uppercase tracking-tight`}>🏠 The Home Buyer Checklist</h2>
    <p className="text-white/80 mb-6 leading-relaxed">
      This isn't just a checklist; it's a <strong>Strategic Lead-Capture Engine</strong> designed to neutralize "First-Time Purchase Anxiety" . As part of our <strong>LM-Series Assets</strong>, this tool activates the <strong>Principle of Reciprocity</strong>, transforming you from a "pushy solicitor" into a trusted <strong>Market Guide</strong> before the first handshake ever occurs .
    </p>

    <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
      <p className="text-white/70 text-base italic mb-4">
        "Use this asset to bridge the gap between digital attention and a signed mandate. It forces the prospect to perceive your expertise as an indispensable resource, not a commodity service". <strong>Use it on social media to capture the prospect's email address.</strong>
      </p>
      
      {/* Punti di forza basati sulla psicologia del design del libro */}
      <ul className="space-y-3 text-white/60 text-sm">
        <li className="flex items-center gap-2">
          <span style={{ color: style.color || '#FF00FF' }}>✔</span> 
          <strong>Neurological Salience:</strong> Engineered with Bold Chromatic Signals to arrest the compulsive scroll .
        </li>
        <li className="flex items-center gap-2">
          <span style={{ color: style.color || '#FF00FF' }}>✔</span> 
          <strong>Psychological Trust Armor:</strong> Designed to solve latent concerns like hidden costs and suggest what to inspect around and inside the propriety.
        </li>
        <li className="flex items-center gap-2">
          <span style={{ color: style.color || '#FF00FF' }}>✔</span> 
          <strong>Data Sovereignty Ready:</strong> A frictionless bridge to move strangers into your Private Vault .
        </li>
      </ul>
    </div>
    <a href="/downloads/LM003_Homebuyer_checklist_lead_magnet156165451DfevasdfCXcvsdSDvs.pdf" download className={`inline-block ${style.primary} text-white font-extrabold py-2 px-4 rounded-xl uppercase shadow-lg transition-transform active:scale-95`}>
      Download the home buyer Checklist PDF
    </a>
  </div>
  <div className="flex-1 order-1 md:order-2  rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
    {/* Qui metterai l'immagine della checklist */}
    <img src="/home-buyers-checklist-preview.jpg" alt="Home Buyer Checklist Preview" className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
  </div>
</div>

{/* SECTION 2: THE RECIPROCITY ENGINE (Immagine a Sinistra) */}
<div className="flex flex-col md:flex-row items-center gap-12 py-12 border-b border-white/10">
  <div className="flex-1 w-full rounded-2xl border border-white/10 ">
    {/* Qui metterai l'immagine dell'infografica reciprocità */}
    <img src="/hub2.jpg" alt="Reciprocity Engine Preview" className="w-full object-cover opacity-80" />
  </div>
  <div className="flex-1">
    <h2 className={`${style.text} text-3xl font-black mb-6 uppercase tracking-tight`}>🔥 The Reciprocity Engine</h2>
    <div className="space-y-8 text-base text-white/70">
  {/* Introduzione basata sul posizionamento d'autorità */}
  <p className="leading-relaxed">
    Stop being a <strong>Digital Solicitor</strong> chasing indifferent clients. It is time to implement <strong>Authority-Based Prospecting</strong> and start attracting them by providing <strong>High-Value Upfront</strong>. This infographic decodes the <strong>Neurological Salience</strong> and the psychological core of the ReBest method, moving you from professional invisibility to <strong>Local Authority</strong> status.
  </p>

  {/* Box dell'Intento Strategico con focus sul debito psicologico */}
  <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
    <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Strategic Intent: The Reciprocity Engine</h3>
    <p className="mb-4 italic">
      "When you provide immediate, tangible value through our <strong>LM Series Assets</strong>, you activate the <strong>Principle of Reciprocity</strong>. By resolving a homeowner’s <strong>Psychological Wound</strong>—such as fear of financial loss or legal complications—before requesting a transaction, you create a <strong>Psychological Debt</strong>. In the client’s mind, you cease to be a salesperson and become their <strong>Market Guide</strong>, making you the only logical choice over the competition."
    </p>
  </div>

  {/* Nota dello Strategista per aumentare il valore percepito */}
  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
    <h4 className="text-white font-bold mb-3 text-sm uppercase">Why this works:</h4>
    <ul className="space-y-2 text-sm text-white/60">
      <li>• <strong>80/20 Rule:</strong> Delivers 80% educational value to build a <strong>Fortress of Trust</strong> before the 20% commercial ask.</li>
      <li>• <strong>Data Sovereignty:</strong> Bridges the gap between a "Curious Observer" and a <strong>Verified Asset</strong> in your private database.</li>
      <li>• <strong>Surgical Specificity:</strong> Targets the seller's visceral problems, making your expertise <strong>Irreplaceable</strong>.</li>
      <li>• <strong> it is built upon the Principle of Reciprocity, as theorized by Robert Cialdini</strong>.</li>
    </ul>
  </div>
</div>
    <a href="/downloads/RBDLM_The_Reciprocity_Engine_sdvsfs9+95+9+sdf.pdf" download className={`inline-block ${style.primary} text-white font-extrabold py-2 px-4 mt-4 rounded-xl uppercase shadow-lg transition-transform active:scale-95`}>
      Download Reciprocity Engine PDF
    </a>
  </div>
</div>

{/* SECTION 3: Business Card  (Immagine a Destra) */}
<div className="flex flex-col md:flex-row items-center gap-12 py-12">
  <div className="flex-1 order-2 md:order-1">
    <h2 className={`${style.text} text-3xl font-black mb-10 uppercase tracking-tight`}>📧 T-SERIES: The Business Card as a Lead Magnet Bridge</h2>
    <p className="text-white/80 mb-6 leading-relaxed">
      Stop treating your <strong>real estate</strong> business card as a passive identity sticker. In our <strong>Marketing</strong> protocol, your card must function as a <strong>Strategic Bridge</strong> to your digital ecosystem. Every physical handshake in your <strong>real estate agency</strong> territory is a <strong>Data Capture Opportunity</strong> that must be engineered for conversion.
    </p>
    <div className="border-l-4 md:pl-12 pl-4 mb-8" style={{ borderColor: style.color || '#FF00FF' }}>
      <ul className="space-y-4 text-base text-white/80">
        <li className="flex gap-2"><span>•</span><span><strong>QR Code Integration:</strong> Transforming a passive object into an active funnel by offering immediate <strong>Lead Magnets</strong> like specialized checklists or market reports.</span></li>
        <li className="flex gap-2"><span>•</span><span><strong>Authority Branding:</strong> Maintaining <strong>Visual Armor</strong> consistency to ensure you are the recognized <strong>Local Authority</strong> in every physical <strong>real estate</strong> encounter.</span></li>
        <li className="flex gap-2"><span>•</span><span><strong>Digital Metamorphosis:</strong> Seamlessly moving physical prospects into your <strong>Private Vault</strong> to achieve total <strong>Data Sovereignty</strong> and long-term nurturing.</span></li>
      </ul>
    </div>
    <a href="/downloads/ReBestDigitalBusinessCardPDF.pdf" download className={`inline-block ${style.primary} text-white font-extrabold py-2 px-4 rounded-xl uppercase shadow-lg transition-transform active:scale-95`}>
      Download ReBest Digital PDF B.Card
    </a>
  </div>
  <div className="flex-1 order-1 md:order-2 w-full  rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
    {/* Qui metterai l'immagine dei 5 pilastri */}
    <img src="/hub3.jpg" alt="5 Pillars Preview" className="w-full h-full object-cover opacity-80" />
  </div>
</div>

      {/* SECTION 4: DISCLAIMER & AGENCY (Full Width) */}
      <div className="pt-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-white font-bold mb-4 uppercase border-b-1 md:pb-3 pb-1" style={{ borderColor: style.color || '#FF00FF' }}>🏢 Marketing Agency?</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              If you wish to use the ReBest Ecosystem for your own clients, please select the <strong>"Extended Commercial License"</strong> at checkout.
            </p>
            <p className="text-sm text-white/90 leading-relaxed pt-4">
            Distribution: <strong>For resale license or distribution agreements, contact us at: info@rebestdigital.com</strong>
            </p>
          </div>
          <div className="bg-red-500/5 p-8 rounded-2xl border border-red-500/20">
            <h3 className="text-red-100 font-bold mb-4 uppercase  border-b-1 md:pb-3 pb-1" style={{ borderColor: style.color || '#FF00FF' }}>⚖️ Earnings Disclaimer</h3>
            <p className="text-sm text-red-100/100 leading-tight">
              Success in Real Estate depends on local market conditions, your execution, and consistency. These assets are<strong> tools, not guarantees </strong>. You are responsible for your own business decisions.Marketing is a complex ecosystem: Success in Real Estate depends on a multitude of variables beyond our control. The ReBest Digital Ecosystem provides high-quality strategic tools, templates, and frameworks based on proven marketing principles. However, <strong>we cannot and do not guarantee any specific financial results, lead generation quotas, or listings as a result of using our materials.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}