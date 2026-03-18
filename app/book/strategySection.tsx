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
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left"> Stop Chasing Real Estate Tourists: The Power of Lead Qualification</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
           In a market saturated with generic "property alerts," most real estate agencies attract what we call "Real Estate Tourists"—window shoppers who browse out of curiosity but aren't ready to commit. Sharing random social posts only adds to this noise. A Professional <strong>Homebuyer Checklist</strong> acts as a high-performance filtering tool. While a generic alert attracts the masses,<strong> a structured checklist attracts action-takers</strong>
           . When a lead downloads this resource, they are signaling a higher level of intent and a <strong>serious commitment</strong> to the purchasing process. This strategy allows you to stop wasting time on unqualified leads and focus your energy on high-conversion clients ready for a closing.
          </p>
        </div>

        {/* Strategy 2: Authority over Elegance */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Building Immediate Authority: From Generic Salesperson to Trusted Advisor</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            The biggest hurdle for modern agents is the <strong> "digital newcomer" </strong>who uses flashy but hollow marketing. To dominate your area, you must shift your positioning from a salesperson to a trusted advisor. By providing a tangible homebuyer roadmap, you solve the specific anxieties of the buyer—finances, structural integrity, and neighborhood evaluation
. This checklist isn't just a PDF;<strong> it’s a professional system that builds immediate trust</strong> before you even meet the client
. In a competitive landscape, being the only agent who offers a technical evaluation tool <strong>sets you apart as the definitive local expert</strong>.
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>03.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Objective Property Evaluation: Beyond Aesthetic Appeal</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Most buyers fall in love with a property emotionally, often overlooking critical technical details. A professional checklist <strong>forces an objective evaluation of the home’s systems, structure, and—crucially—neighborhood amenities</strong>
. By guiding your clients through a structured check of HVAC systems, plumbing, and local infrastructure,<strong> you ensure they make a sound investment rather than an emotional mistake</strong>
. This level of transparency doesn't just protect the buyer; it strengthens the agent’s reputation for integrity
. Providing a tool that evaluates property value through data and checklists <strong>ensures long-term client satisfaction and consistent referrals.</strong>
          </p>
       </div>
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-s text-white italic">
              <strong>Want proof?</strong> Don't just take our word for it. Scroll back up and enter your email 
              to download the <strong>Home Buyer Checklist</strong> for free. Experience the ReBest quality 
              and see how this single strategic asset can change your listing game today.
            </p>
          
        </div>

      </div>
    </section>
  );
}