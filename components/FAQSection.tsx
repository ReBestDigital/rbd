import React from 'react';

interface FAQSectionProps {
  style: any;
}

export default function FAQSection({ style }: FAQSectionProps) {
  const faqs = [
    {
      question: "What exactly is included in the ReBest Digital Ecosystem?",
      answer: "You get a complete marketing machine: 32+ Social Media templates (Canva), 25+ Newsletter sequences, 10+ Strategic Lead Magnets, Open House kits, and 10+ Private Video Training sessions. It's 80+ assets designed for immediate market dominance."
    },
    {
      question: "Do I need advanced graphic design or tech skills?",
      answer: "Not at all. Everything is built on <strong>Canva</strong> and compatible with standard CRMs like Brevo or Mailchimp. If you can click a mouse and copy-paste text, you can use the entire ecosystem."
    },
    {
      question: "Is this just another set of pretty templates?",
      answer: "No. Most templates on the market focus on 'monotonous elegance'. ReBest focuses on <strong>conversion psychology</strong>. Every word and layout is engineered to generate listing appointments, not just 'likes'."
    },
      {
      question: "How does the Early Bird access work?",
      answer: "During this phase, you get the entire ecosystem for a fraction of its future price. Plus, you get <strong>exclusive lifetime access</strong> to our private Facebook Vault and future updates that will later become a paid subscription."
    },
    {
      question: "Can I use these assets for my entire team?",
      answer: "Absolutely. The ReBest Ecosystem is designed to provide a <strong>standardized marketing framework</strong> for solo agents and growing teams who want to maintain a consistent, high-authority brand."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter">
        Frequently Asked <span className={style.text}>Questions</span>
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <h3 className="text-white font-bold text-lg mb-3">
              {faq.question}
            </h3>
            <p 
              className={`${style.mute} text-sm leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: faq.text || faq.answer }}
            />
          </div>
        ))}
      </div>

      {/* SEO Tip: Schema Markup (JSON-LD) invisibile per i motori di ricerca */}
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
                "text": f.answer.replace(/<\/?[^>]+(>|$)/g, "") // Rimuove i tag HTML per il JSON
              }
            }))
          })
        }}
      />
    </section>
  );
}