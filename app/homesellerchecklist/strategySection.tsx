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
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left"> "Stop wasting your time"</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Stop wasting your time screaming into the void with random social media posts that get lost in the scroll within seconds
. While your competitors are busy sharing generic memes and "Happy Monday" graphics that provide zero value,<strong> you need a high-conversion weapon </strong> to actually capture the market.
          </p>
        </div>

        {/* Strategy 2: Authority over Elegance */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Real Estate filter</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            A professional checklist is not just "content"—it is a strategic filter
. While a "Free 
home Valuation" attracts curious window shoppers who just want a number, a "Professional Home Seller Checklist" <strong>identifies the real action-takers</strong> who are ready to prepare their property for a premium sale
. Providing this roadmap instantly transforms you from a generic salesperson into the only trusted authority in your area
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-s text-white italic">
              <strong>Want proof?</strong> Don't just take our word for it. Scroll back up and enter your email 
              to download the <strong>Home Seller Checklist</strong> for free. Experience the ReBest quality 
              and see how this single strategic asset can change your listing game today.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}