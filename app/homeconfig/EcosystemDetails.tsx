import React from 'react';

interface EcosystemDetailsProps {
  style: any;
}

export default function EcosystemDetails({ style }: EcosystemDetailsProps) {
  return (
    <section className="max-w-6xl mx-auto py-10 px-6 space-y-32">
      <h2 className={`${style.text} text-2xl mb-6 border-b-4 border-t-4 pb-6 pt-6`}style={{ borderColor: style.color || '#FFffFF' }}><strong> We don't build "pretty" files. We build functional business tools.</strong> Every layout and headline in this ecosystem is designed to distance you from the "Digital New-Comers" and build a bridge of trust between you and the property seller.</h2>
      {/* SECTION 1: IS THIS FOR YOU? (Immagine a Destra) */}
      <div className="flex flex-col md:flex-row items-center gap-12 pt-6">
        <div className="flex-1 order-2 md:order-1">
          <h2 className={`${style.text} text-3xl font-black mb-6 uppercase`}>🎯 Is This For You?</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            This ecosystem was specifically designed for established <strong>Real Estate Professionals</strong> who:
          </p>
          <div className="border-l-1 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
          <ul className="space-y-4 text-white/70 text-base">
            <li className="flex gap-2"><span>•</span> <span><strong>Have the experience, but lack the digital engine:</strong> You know the market, but you’re tired of losing ground to "digital-first" newcomers.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Are tired of "monotonous elegance":</strong> You want a marketing system that actually converts, not just "pretty" templates.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Want to reclaim their local leadership:</strong> Stop renting growth from expensive portals and start owning your digital presence.</span></li>
            <li className="flex gap-2"><span>•</span> <span><strong>Don't have time to waste:</strong> You need a "ready-to-use" machine so you can focus on closing deals, not on learning complex graphic design.</span></li>
          </ul>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic text-white/20">
          [Image: Professional vs Digital Newcomer]
        </div>
      </div>

      {/* SECTION 2: WHAT'S INSIDE? (Immagine a Sinistra) */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic text-white/20">
          [Image: 80+ Assets Showcase]
        </div>
        <div className="flex-1">
          <h2 className={`${style.text} text-3xl font-black mb-6 uppercase`}>🏗️ What’s Inside?</h2>
          <div className="space-y-6 text-base text-white/70">
            <p>You get <strong>80+ high-performance assets</strong> engineered for conversion:</p>
            <div className="border-l-1 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
            <p><strong>The Trust Builder:</strong> 25+ Professional Newsletter sequences to nurture leads and stay top-of-mind.</p>
            <p><strong>The Inbound Machine:</strong> 10+ Strategic Lead Magnets and High-Tech Business cards to turn every contact into a lead.</p>
            <p><strong>Social Dominance Kit:</strong> 32+ optimized templates for Instagram Reels, Carousels, and Stories.</p>
            <p><strong>Physical Presence:</strong> Complete Open House kits, professional signage, and digital check-in tools.</p>
            <p><strong>The Strategic Brain: </strong> 10+ Detailed Manuals and a private Video Playlist explaining the "Why" and "How" behind every single asset and marketing strategy.</p>
          </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: EARLY BIRD PRIVILEGES (Immagine a Destra) */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 order-2 md:order-1">
          <h2 className={`${style.text} text-3xl font-black mb-6 uppercase`}>💎 Early Bird Privileges</h2>
          <div className="border-l-1 md:pl-12 pl-4" style={{ borderColor: style.color || '#FF00FF' }}>
            <ul className="space-y-4 text-base text-white/80">
              <li className="flex gap-2"><span>•</span><span><strong>Lifetime Access:</strong> Private FB ReBest Ecosystem Group with new free templates, infographics, and exclusive discounts.</span></li>
              <li className="flex gap-2"><span>•</span><span><strong>Strategic Video Vault:</strong> Access to private strategic YouTube channels and training resources that will transition to a paid subscription model in the future. These will not be included in the full ReBest Digital Ecosystem after the Early Bird offer ends.</span></li>
              <li className="flex gap-2"><span>•</span><span><strong>7-Day channel Previews:</strong> See new strategic video, tools and templates before anyone else.</span></li>
            </ul>
        </div>
        </div>
        <div className="flex-1 order-1 md:order-2 w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic text-white/20">
          [Image: Early Bird Bonus Badge]
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
              Success in Real Estate depends on local market conditions, your execution, and consistency. These assets are<strong> tools, not guarantees </strong>. You are responsible for your own business decisions.Marketing is a complex ecosystem: Success in Real Estate depends on a multitude of variables beyond our control. The ReBest Digital Ecosystem provides high-quality strategic tools, templates, and frameworks based on proven marketing principles. However, we cannot and do not guarantee any specific financial results, lead generation quotas, or listings as a result of using our materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}