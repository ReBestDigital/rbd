import React from 'react';

interface SEOAdvantagesProps {
  style: any;
}

export default function OperationalSEOAdvantages({ style }: SEOAdvantagesProps) {
  const advantages = [
    {
      title: "Master the 'Pre-Listing' Authority",
      text: "Stop going into listing appointments cold. Use our <strong>professional Pre-Listing kits</strong> to educate the seller 24 hours before you meet, ensuring they already see you as the only logical choice."
    },
    {
      title: "Win Over FSBOs (For Sale By Owner)",
      text: "Convert private sellers into exclusive clients. Our ecosystem includes specific <strong>objection-handling scripts</strong> and value-driven guides that show FSBOs exactly why they need your professional intervention."
    },
    {
      title: "Hyper-Local Digital 'Farming'",
      text: "Dominate a specific neighborhood or district. Use our <strong>local market lead magnet</strong> and social templates to become the 'Mayor' of your target area, making it impossible for competitors to enter."
    },
    {
      title: "Psychological Anchor Pricing Tools",
      text: "Help your sellers understand the market without the friction. Use our <strong>strategic Seller Accountability File </strong> to demonstrate the 'correct price' conversation smooth and professional."
    },
    /* {
      title: "Automated Referral Generation",
      text: "Turn your past clients into an active sales force. Our <strong>referral-focused newsletter sequences</strong> are designed to prompt satisfied customers to recommend you to their network automatically."
    }, */
    {
      title: "Automated Lead Generation",
      text: "Turn your post on socials into an active sales force. Our <strong>Comment to DM focused Strategy</strong> are designed to give to customers instead of ask, building immediate trust."
    },
    {
      title: "High-Impact 'Open House' Systems",
      text: "Transform a simple viewing into a lead-gen machine. Get a full suite of <strong>Open House registration tools</strong> and follow-up materials designed to capture every visitor's data for future listings."
    },
    {
      title: "Strategic Storytelling for Listings",
      text: "Stop selling bricks and mortar; start selling a lifestyle. Our <strong> Neighborhood Guide </strong> use hyper localisation to+ trigger emotional responses from buyers, leading to faster sales."
    },
    {
      title: "Reduced Cost-Per-Acquisition (CPA)",
      text: "Stop wasting money on 'boosted' posts that don't convert. Our <strong>high-relevance social assets</strong> improve your ad quality score, lowering the cost of every lead you generate digitally."
    },
    {
      title: "Standardized Training for Your Staff",
      text: "If you have a team, consistency is key. Use the ReBest Ecosystem as a <strong>standardized marketing manual</strong> to ensure every assistant or junior agent communicates with the same high-level authority."
    },
    {
      title: "Future-Ready AI Adaptability",
      text: "Our frameworks are built to evolve. The strategic logic behind our <strong>copywriting and lead magnets</strong> is perfectly suited to be enhanced by AI tools, keeping you at the forefront of the digital revolution."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl md:text-4xl font-black mb-16 text-center uppercase tracking-tighter border-b-4 border-t-4 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        Conversion & Results: <br/>
        <span className={style.text}>Turning Leads into Exclusive Listings</span>
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