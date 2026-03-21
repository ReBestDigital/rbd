import React from 'react';

interface SEOAdvantagesProps {
  style: any;
}

export default function DetailedSEOAdvantages({ style }: SEOAdvantagesProps) {
  const advantages = [
    {
      title: "Stop Overpaying for Marketing Agencies",
      text: "Eliminate the need for expensive external consultants. Our ecosystem provides you with a professional <strong>Real Estate marketing engine</strong> that you control 100%, saving you thousands in monthly fees."
    },
    {
      title: "Psychological Sales Copywriting",
      text: "Our newsletters and social captions are not just text; they use advanced <strong>persuasion triggers</strong> and psychological hooks designed to overcome seller objections before they even speak to you."
    },
    {
      title: "High-End Magazine Quality Layouts",
      text: "Access premium real estate magazine templates and property brochures that give you the 'luxury agent' look, instantly elevating your perceived value in the eyes of <strong>high-net-worth homeowners</strong>."
    },
    {
      title: "Seamless CRM & Automation Integration",
      text: "Designed for the modern agent. Our <strong>email marketing sequences</strong> are easily adaptable for platforms like Brevo, Mailchimp, or any professional Real Estate CRM for full workflow automation."
    },
    {
      title: "High-Impact 'Open House' Systems",
      text: "Transform a simple viewing into a lead-gen machine. Get a full suite of <strong>Open House registration tools</strong> and follow-up materials designed to capture every visitor's data for future listings."
    },
    {
      title: "Unified Visual Brand Identity",
      text: "Stop looking like an amateur with inconsistent graphics. Ensure your <strong>Real Estate branding</strong> is professional and cohesive across Instagram, Facebook, LinkedIn, and printed materials."
    },
    {
      title: "Global Strategies, Local Neighborhood Dominance",
      text: "We take world-class international marketing principles and adapt them for your specific <strong>local market farming</strong>, helping you own your zone with zero competition."
    },
    {
      title: "Automated Seller Education Systems",
      text: "Use our strategic guides to prep homeowners for the sale. By <strong>educating your prospects</strong> automatically, you drastically reduce the time needed for lengthy listing presentations."
    },
    {
      title: "No Graphic Design Skills Required",
      text: "Leverage the user-friendly power of <strong>Canva for Real Estate</strong>. Get professional-grade results without ever needing to learn complex or expensive design software like Photoshop."
    },
    {
      title: "Scalable Growth for Solo Agents and Teams",
      text: "Whether you are a solo agent or a growing team, our ecosystem provides the structured framework needed for <strong>mass market expansion</strong> and scalable lead acquisition."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl md:text-4xl font-black mb-16 text-center uppercase tracking-tighter">
        The Early Bird Real Estate Arsenal in Detail: <br/>
        <span className={style.text}>Rrbest digital ecosystem gives you Technical Superiority for Your Business</span>
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {advantages.map((adv, index) => (
          <li key={index} className="flex gap-4">
            <span className={`${style.text} font-black text-xl opacity-50`}>
              {(index + 11).toString()} {/* Parte dal numero 11 */}
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