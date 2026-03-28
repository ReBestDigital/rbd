import React from 'react';
import Link from 'next/link';

interface FAQProps {
  style: any;
}

export default function HubFAQ({ style }: FAQProps) {
  const faqs = [
    { question: "Why is my real estate agency invisible online?", answer: "Because you are likely trapped in 'Monotonous Elegance.' To be seen, you must use Pattern Interrupt protocols—bold chromatic signals and high-impact hooks—to break the user's scrolling trance in 1.5 seconds." }, { question: "How to get listings without cold calling?", answer: "Implement the Principle of Reciprocity. Offer high-value Lead Magnets (checklists or reports) that solve a homeowner's problem upfront. This attracts qualified leads to your database without the need for invasive 'pushy' solicitation." }, { question: "What should I put in my real estate Instagram bio?", answer: "Follow the Problem + Solution Formula. State exactly who you help, the specific result you deliver (e.g., selling at peak valuation), and include a direct Call to Action to download a valuable resource." }, { question: "How can I stop paying portals for real estate leads?", answer: "Achieve Data Sovereignty. Build a Proprietary Audience using social media to drive traffic to your private 'Vault' (email lists or VIP groups). When you own the data, portals become optional megaphones rather than vital lifelines." }, { question: "Why do sellers keep asking me for lower commissions?", answer: "When you look like every other agent, you are perceived as a Commodity. By building a strong Local Authority through educational content and expert positioning, you remove yourself from the price-comparison game." }, { question: "How to build trust with home buyers and sellers fast?", answer: "Shift from 'Solicitor' to Strategic Advisor. Use the 80/20 Rule: provide 80% educational value (market insights, secrets) and only 20% commercial offers. Education is the ultimate tool for building a Fortress of Trust." }, { question: "What is the best marketing strategy for real estate in 2026?", answer: "A Circular Marketing Process. It’s an integrated ecosystem where Social Media captures attention, Lead Magnets capture data, and Automation (Nurturing) builds the bridge to the final listing appointment." }, { question: "How to make real estate videos that actually convert?", answer: "Stop making 'property tours' and start using 'Talking Head' Assets. Use our 54 Script Library in the 'Stop Being Invisible' book, to address the visceral anxieties of your target audience (Rookies, Investors, Sellers) and always include a frictionless CTA." }, { question: "What is a real estate lead magnet?", answer: "It's a Value Asset (like a Homebuyer Checklist or a Neighborhood Report) offered for free in exchange for a prospect's contact data. It's the 'strategic hook' that moves a lead from social media into your private database." }, { question: "How to save time on social media marketing as an agent?", answer: "Follow the 4-Hour Weekly Routine. Use pre-engineered templates and schedule your content in batches. Delegate the repetitive 'copy-and-paste' tasks to automation tools like ManyChat to reclaim your revenue-producing time." }, { question: "How can I become the top agent in my neighborhood?", answer: "Practice Hyper-Localization. Cease being a generalist and become the Neighborhood Sheriff. Provide millimeter-perfect territorial intelligence that national portals and global algorithms can never replicate." }, { question: "Is a physical business card still necessary for realtors?", answer: "Yes, but only as a Lead Magnet Bridge. It must feature a specialized QR Code that offers immediate digital value (e.g., a seller's guide), ensuring the physical encounter instantly transforms into a verified digital lead." }
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter border-b-2 border-t-2 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        Stop Being Invisible <span className={style.text}>FAQ</span>
      </h2>

      <div className="space-y-4 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white font-bold text-lg mb-2">{faq.question}</h3>
            <p className={`${style.mute} text-sm leading-relaxed`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        ))}
      </div>
        
      {/* Link strategico alle altre FAQ/Dettagli */}
      <div className="text-center mt-4">
        <p className={`${style.mute} text-xs mb-4 italic`}>
          Have more questions about the assets?
        </p>
        <Link 
          href="/earlybird-feature" 
          className="text-white/60 hover:text-white text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 transition-all"
        >
          View Other FAQ & Feature List →
        </Link>
      </div>

      {/* Schema Markup per Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer.replace(/<\/?[^>]+(>|$)/g, "")
              }
            }))
          })
        }}
      />
    </section>
  );
}