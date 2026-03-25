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
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Stop Trading Time for Design – Scale Your Agency Fulfillment
           </h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}><strong>Focus: Time Saving & Profit Margins </strong></p>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            The biggest bottleneck for any Marketing Agency is fulfillment time. Spending hours on Canva or briefing designers for a single real estate client kills your profit margins. 
            With the <strong> Marketing Agency License</strong>, you stop building from scratch and start deploying.
           <strong> You are getting a 'Plug-and-Play' infrastructure</strong> of 80+ strategic assets that would normally take 3 months of R&D to develop. By using our White-Label templates, you can onboard a new Realtor on Monday and have their entire digital ecosystem ready by Tuesday.<strong> Save hundreds of hours,</strong> reduce your overhead, and <strong>focus on what actually matters: scaling your agency and closing more high-ticket deals</strong>.
        
          </p>
        </div>

        {/* Strategy 2: Authority over Elegance */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Become the #1 Real Estate Marketing Expert (Overnight) </h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}><strong>Focus: Authority & Niche Specialization</strong></p>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Generic agencies are a dime a dozen. To charge premium fees, you need Niche Authority. The ReBest Digital Ecosystem isn't just a collection of files;<strong> it’s a masterclass in Real Estate Psychology</strong>. 
            Our private video tutorials and Strategic Guides (Cod. SG) <strong>teach you the 'Why'</strong> behind every Template. By studying our internal frameworks, you and your team will master the techniques that top-tier Realtors crave. You won’t just be 'the person who posts on IG'; you will become the strategic partner who delivers listing appointments.<strong> We provide the expertise; you take the credit (and the premium retainer)</strong>.
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>03.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">Your Shortcut to a Profitable Online Business – Agency-in-a-Box</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}><strong>Focus: Opportunity Seekers & Digital Products</strong></p>
          <p className={`${style.mute} text-sm leading-relaxed text-left mb-4`}>
            Looking for a way to start earning online but don't have a product or a clear strategy? ReBest Digital Ecosystem Marketing Agency License is the ultimate shortcut for Solopreneurs and Opportunity Seekers.

            Instead of spending years learning market research, you can buy an high-quality product and <strong>start selling Done-For-You services immediately. </strong>
            The Real Estate niche is one of the<strong> wealthiest markets in the world</strong>, and <strong>they are desperate for better marketing.</strong> We give you the course, the strategy, and the 80+ digital assets. You simply follow our roadmap, approach agents, and provide the solution they need. It’s the fastest way to transition from 'searching for an opportunity' to <strong>'owning a high-margin digital business'</strong>.
          </p>
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-s text-white italic">
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