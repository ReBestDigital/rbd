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
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left"> Stop Begging, Start Giving: The Advisor vs. The Solicitor</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
           Most agents operate as <strong>"The Solicitor"</strong>—beggars who rely on "passive hope" and generic requests like "list with us"
. This approach triggers a "Solicitor Alarm" in homeowners, built on a trust barrier of fear and financial erosion
. To dominate your district, you must transition into<strong> "The Advisor"</strong>
. By providing tangible value first—like market insights or technical checklists—you bypass these defenses and trigger a <strong>Reciprocity Trigger</strong>
. This process creates a "Psychological Debt," where prospects no longer feel they are choosing an agent, but rather confirming a relationship with an expert who has already helped them
.
          </p>
        </div>

        {/* Strategy 2: Authority over Elegance */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>02.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">From Digital Tenant to Landowner: Owning the Audience</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            Relying solely on real estate portals makes you a<strong> "Digital Tenant"</strong>
. You own the invoice, but the portals own the audience
. The Reciprocity Engine is designed to move you from this "trap" to<strong> Data Sovereignty</strong>
. By using strategic assets to capture attention and data, you build a "Fortress" around your own database
. While attention is fleeting, data is permanent. Owning your audience through a 360° ecosystem ensures that you stop renting your business and start building an asset that grows in value independently of third-party platforms
.
          </p>
        </div>

        {/* Strategy 3: The Science of the Lead Magnet */}
        <div className="flex flex-col">
          <div className={`text-2xl font-black mb-4 ${style.text}`}>03.</div>
          <h3 className="text-white text-xl font-bold mb-3 uppercase tracking-tight text-left">The 80/20 Rule: Why Expertise Without Visibility is Poverty</h3>
          <p className={`${style.mute} text-sm leading-relaxed text-left`}>
            In the modern market,<strong> expertise without visibility is poverty</strong>
. The market doesn't pay the best agent; it pays the most visible authority
. To achieve this, you must apply the<strong> 80/20 Rule of Authority</strong>: 80% of your interactions should be "deposits" of education and value, while only 20% should be "withdrawals" or commercial offers
. This strategy builds a fortress of trust so that when your commercial offer arrives, the client's resistance has already evaporated
. Don't just report the market; interpret it through hyper-localization to become the only logical choice in your area
.
          </p>
       </div>
          <div className={`p-4 rounded-xl bg-white/5 border border-dashed border-white/20 text-left`}>
            <p className="text-s text-white italic">
              <strong>Want proof?</strong> Don't just take our word for it. Scroll back up and enter your email 
              to download  <strong>The Reciprocity Engine</strong> PDF for free. Experience the ReBest quality 
              and see how this single strategic asset can change your listing game today.
            </p>
          
        </div>

      </div>
    </section>
  );
}