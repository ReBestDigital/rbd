import React from 'react';

// Definiamo cosa deve ricevere il componente (lo stile della campagna)
interface StrategySectionProps {
  style: any;
}

export default function StrategySection({ style }: StrategySectionProps) {
  return (
    <section id="features-section" className="max-w-5xl mx-auto py-20 px-6 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Strategy 1: Portal Slavery */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>01.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">The "Portal Slavery" Trap</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Most agents work for the portals, not for themselves. You pay to list properties that attract leads you don't own. 
            The <strong>ReBest Digital Ecosystem</strong> flips the script: it gives you the magnets to intercept sellers 
            <em> before</em> they even think about a portal. Stop renting your visibility; start building your own digital empire.
          </p>
        </div>

        {/* Strategy 2: Authority over Elegance */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Authority vs. Elegance</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Generic "monotonous elegance" doesn't sell—authority does. Our 80+ assets aren't just "pretty" templates; 
            they are <strong>engineered conversion tools</strong>. Every newsletter and carousel is designed to position you 
            as the only expert capable of solving real client problems, leaving competitors stuck in the past.
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>03.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">The Lead Magnet Solution</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left mb-4`}>
            A "Free Valuation" attracts window shoppers. A <strong>Homebuyer Checklist</strong> attracts action-takers. 
            Inside our ecosystem, we suggest using this specific asset to educate prospects while capturing their data. 
            It builds trust <em>before</em> the first meeting, turning cold leads into exclusive listings.
          </p>
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-xs text-white italic">
              <strong>Want proof?</strong> Don't just take our word for it. Scroll back up and enter your email 
              to download the <strong>Homebuyer Checklist</strong> for free. Experience the ReBest quality 
              and see how this single strategic asset can change your listing game today.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}