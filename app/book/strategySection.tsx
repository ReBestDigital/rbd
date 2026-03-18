import React from 'react';

// Definiamo cosa deve ricevere il componente (lo stile della campagna)
interface StrategySectionProps {
  style: any;
}

export default function StrategySection({ style }: StrategySectionProps) {
  return (
    <section id="features-section" className="max-w-5xl mx-auto py-6 px-6 border-t border-white/10">
      <h2 className="text-white text-xl font-bold py-15 "> In the 'STOP BEING INVISIBLE!' book you will find :  </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
         
        {/* Strategy 1:  */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>01.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left"> From "Pushy Solicitor" to Strategic Real Estate Advisor</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
           In today’s hyper-competitive market, technical expertise is no longer a differentiator; it is a prerequisite. Most agents fall into the <strong>"Solicitor Trap,"</strong> relying on premature urgency and "cold" requests like "List your home with us". Our strategy flips this paradigm through <strong>Authority-Based Prospecting.</strong>
           By implementing the <strong>Principle of Reciprocity,</strong> you transition from a "House Hunter" to a <strong>Market Guide.</strong> This book provides the blueprint to stop "asking" for business and start "giving" value through educational assets. When you solve a prospect’s problem before you even meet them, you build a <strong>"Fortress of Trust,"</strong> ensuring you are the only logical choice when they are ready to sell.
          </p>
        </div>

        {/* Strategy 2:  */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Achieving Data Sovereignty: Escaping the "Portal Trap"</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
           Many practitioners operate as <strong>"Digital Tenants,"</strong> paying monthly rent to real estate portals for leads they don't truly own. This creates a state of <strong>Platform Reliance,</strong> where your business evaporates the moment you stop paying the invoice.
           The <strong>ReBest Digital Ecosystem</strong> is engineered to help you achieve <strong>Data Sovereignty.</strong> This manual teaches you how to build a <strong>Proprietary Audience</strong>—a private database of names, emails, and phone numbers that you control. By moving your leads from the "noise" of public portals into your <strong>Private Vault,</strong> you transform volatile social media interactions into <strong>Verified Business Assets.</strong> Stop subsidizing someone else's growth and start building your own digital estate.
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>03.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">The Real Estate "Marketing Conveyor Belt": Efficiency Through Automation</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Most Real Estate agents fail not due to a lack of effort, but due to <strong>"Operational Friction"</strong>—spending hundreds of hours on manual labor instead of system implementation. Our book introduces the <strong>"Marketing Conveyor Belt,"</strong> a high-precision circular process designed to transform strangers into exclusive listings automatically.
            With the included <strong>50+ Attraction Script Library</strong> and our <strong>ManyChat automation protocols,</strong> you can maintain a 24/7 digital presence that attracts, segments, and nurtures leads while you focus on high-value human interactions. This <strong>Applied Strategic Marketing Protocol</strong> allows you to manage a dominant marketing empire efficiently, moving you from a "Standard Operator" to a <strong>Strategic Professional.</strong>
          </p>
       </div>
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-s text-white italic">
              <strong>Want proof?</strong> Don't just take our word for it. Scroll back up and enter your email 
              to download <strong>The Reciprocity Engine</strong> for free. Experience the ReBest Digital quality 
              and see how this single strategic asset can change your listing game today.
            </p>
          
        </div>

      </div>
    </section>
  );
}