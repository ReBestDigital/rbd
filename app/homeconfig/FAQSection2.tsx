import React from 'react';
import Link from 'next/link';

interface FAQProps {
  style: any;
}

export default function EssentialFAQ({ style }: FAQProps) {
  const faqs = [
    {
      question: "What is the ReBest Digital Ecosystem exactly?",
      answer: "It's a complete 'Marketing Department in a box' for Real Estate agents. 80+ assets including <strong>Canva templates, newsletters, lead magnets, and video strategies</strong> designed to bypass portals and build your direct authority."
    },
    {
      question: "Is this a one-time payment or a subscription?",
      answer: "During the <strong>Early Bird phase</strong>, it is a one-time investment. You get lifetime access to all current assets and the Private Vault. Future versions will likely move to a monthly subscription model."
    },
    {
      question: "Do I need to be a tech expert or a designer?",
      answer: "No. If you can use Canva and copy-paste text, you're ready. We provide <strong>step-by-step manuals</strong> for every single asset to ensure you can deploy them in minutes, not hours."
    },
    {
      question: "How does the 'Checklist' generate listings?",
      answer: "Portals give you 'lookers'; our <strong>Homebuyer/Seller Checklists</strong> give you 'doers'. They educate the prospect and position you as the only expert they can trust, making the listing appointment a natural next step."
    },
    {
      question: "Can I customize everything with my own brand?",
      answer: "Yes, 100%. Every layout, color, and font can be adjusted in Canva to match your <strong>personal or agency branding</strong> perfectly while maintaining the high-conversion structure we designed."
    },
    {
      question: "What are the Early Bird exclusive bonuses?",
      answer: "You get <strong>Lifetime Access to the Private Facebook Vault</strong> and our private Video Strategy Playlist. These are high-value resources that will be restricted or paid-only for future customers."
    },
    {
      question: "Is there support if I get stuck?",
      answer: "Yes. Within the Private Vault, you can interact with the community and get updates. Plus, our <strong>internal guides</strong> cover almost every question you might have during setup."
    },
    {
      question: "Why should I buy now instead of waiting?",
      answer: "Simple: <strong>The price will never be this low again</strong>. By joining the Early Bird elite, you get over $1,500 worth of strategic assets for a fraction of the cost, securing a massive competitive advantage."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter border-b-2 border-t-2 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        The Essential <span className={style.text}>FAQ</span>
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
      <div className="text-center">
        <p className={`${style.mute} text-xs mb-4 italic`}>
          Have more technical questions about licenses or specific assets?
        </p>
        <Link 
          href="/earlybird-feature" 
          className="text-white/60 hover:text-white text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 transition-all"
        >
          View Detailed Technical FAQ & Asset List →
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