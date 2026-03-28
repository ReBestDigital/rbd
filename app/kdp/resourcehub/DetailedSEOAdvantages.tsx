import React from 'react';

interface SEOAdvantagesProps {
  style: any;
}

export default function HubSEOAdvantages({ style }: SEOAdvantagesProps) {
  const advantages = [
    { title: "Achieve Total Data Sovereignty", text: "Stop being a 'Digital Tenant' of portals. Our protocol helps you build a <strong>Proprietary Audience</strong> and your own 'Private Vault', ensuring you own your lead data forever and remain independent of platform price hikes." }, { title: "The 80/20 Golden Rule of Value", text: "Transition from a 'Solicitor' to a <strong>Strategic Advisor</strong>. By delivering 80% educational value and only 20% commercial offers, you build an impenetrable 'Fortress of Trust' before even asking for a listing." }, { title: "Deploy the Pattern Interrupt Protocol", text: "Defeat 'Monotonous Elegance' and stop the scroll. Use <strong>bold chromatic signals</strong> and high-contrast visual architecture to capture potential clients' attention within the critical first 1.5 seconds." }, { title: "Build a Marketing Conveyor Belt", text: "Automate your lead flow from stranger to exclusive listing. Our ecosystem provides a <strong>circular conversion architecture</strong> designed to attract, segment, and nurture prospects automatically, 24/7." }, { title: "Become the 'Neighborhood Sheriff'", text: "Master <strong>Hyper-Localization</strong> to dominate your specific territory. Provide the precise, millimeter-perfect local intelligence that national algorithms and global portals can never replicate." }, { title: "Strategic Lead Magnet Frameworks", text: "Move from chasing leads to attracting high-intent prospects. Use <strong>high-value digital assets</strong> like technical guides and procedural checklists to solve client problems in exchange for verified contact data." }, { title: "Leverage the VIP Private Vault", text: "Create an atmosphere of elite exclusivity. Use <strong>Architectural Scarcity</strong> to offer off-market insights and 48-hour property previews, making your agency the only logical choice for serious sellers." }, { title: "24/7 Scalability with ManyChat", text: "Reclaim your revenue-producing time through automation. Deploy <strong>automated response workflows</strong> to fulfill value-asset requests instantly and nurture prospects while you are busy closing deals." }, { title: "The 'Talking Head' Authority Asset", text: "Stop being a property catalog and start being a person. Use our <strong>54-video script library</strong> to speak directly to the visceral anxieties of buyers and sellers, establishing immediate human trust." }, { title: "Tactile Authority with the Elite Magazine", text: "Solidify your digital promise with <strong>high-impact physical assets</strong>. Use custom-printed magazines and professional kits to provide the tactile proof of excellence needed to justify a premium commission." },{
  "title": "Transition from Solicitor to Strategic Advisor",
  "text": "Stop the transactional insistence. Use our <strong>Authority-Based Prospecting</strong> to educate your market, building a psychological debt of gratitude that makes you the only logical choice for sellers."
},
{
  "title": "Eradicate 'Silent Failure' with Digital Omnipresence",
  "text": "Technical expertise is useless if invisible. Our manual helps you occupy <strong>Cognitive Space</strong> months before a homeowner sells, ensuring you aren't just another product in the 'dusty corner' of the market."
},
{
  "title": "Master Hyper-Local Contextualization",
  "text": "Don't compete with national algorithms. Use our <strong>Neighborhood Sheriff</strong> protocols to provide millimeter-perfect territorial intelligence that corporate portals can never replicate."
},
{
  "title": "The Psychology of 'Bold Chromatic Signals'",
  "text": "Stop the 1.5-second scroll. Our <strong>Pattern Interrupt Protocol</strong> uses high-contrast visual architecture to force a cognitive stop, ensuring your message actually reaches the prospect’s conscious mind."
},
{
  "title": "Build Your Proprietary 'Private Vault'",
  "text": "Escape the Portal Trap and the cycle of advertising inflation. Our system helps you move strangers from social media into a <strong>distraction-free digital space</strong> you own entirely."
},
{
  "title": "Command a 4-Hour Weekly Marketing Empire",
  "text": "Stop manual labor and embrace systemic execution. Implement our <strong>pre-coded infrastructure</strong> to manage attraction and nurturing in just four hours a week, reclaiming your revenue-producing time."
} 
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl md:text-4xl font-black mb-16 text-center  tracking-tighter border-b-4 border-t-4 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        Summary of the book for real estate agents: <br/>
        <span className="uppercase ${style.text}">Stop Being Invisible!</span>
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {advantages.map((adv, index) => (
          <li key={index} className="flex gap-4">
            <span className={`${style.text} font-black text-xl opacity-50`}>
              -{/* {(index + 21).toString()} */} {/* Parte dal numero 21 */}
            </span>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-tight">
                <strong>{adv.title}</strong>
              </h3>
              <p 
                className={`${style.mute} text-sm leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: adv.text }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}