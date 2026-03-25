import React from 'react';
import Link from 'next/link';

interface FAQProps {
  style: any;
}

export default function MarketingAgencyFAQ({ style }: FAQProps) {
  const faqs = [
   {
    question: "What is the difference between the Real Estate Agent License and the Marketing Agency License?",
    answer: "The <strong>Real Estate Agent License</strong> is for personal use (one brand, max 3 branches). The <strong>Marketing Agency License</strong> is designed for professionals who manage multiple clients. It allows you to customize and provide the assets to an <strong>unlimited number of third-party clients</strong> as part of your agency services."
  },
  {
    question: "Can I resell the Canva links or the PDF directly?",
    answer: "No. This license allows you to provide <strong>customized final products</strong> (PDFs, images, videos) to your clients. You are <strong>not authorized</strong> to resell or redistribute the raw 'Canva Template Links' or the source files. Each client should receive their branded version, not the editable master link."
  },
  {
    question: "How does the '10x ROI' work for a Marketing Agency?",
    answer: "The math is simple. A professional real estate marketing setup costs at least <strong>€3,000 to every client</strong>. Since this license costs €1,299 in early bird offer and allows unlimited clients, your <strong>investment is fully recouped with your very first client</strong>. Every client after that is pure profit, with zero research and development costs."
  },
  {
    question: "Is this a 'White-Label' system?",
    answer: "Yes. You can fully customize colors, fonts, and branding to match your client's identity. Our goal is to provide the <strong>psychological framework and high-conversion layouts</strong>, while you provide the brand-specific execution for your Realtors."
  },
  {
    question: "What are the specific bonuses for Agency Early Birds?",
    answer: "Agency Early Birds get, every early birds privilege and access to our <strong>Private Facebook Vault</strong>. You will also receive all future Residential template updates and new Residential Lead Magnets for free, ensuring your agency always stays ahead of generic competitors."
  },
  {
    question: "Can I use these templates for clients in other niches?",
    answer: "While the focus is Real Estate, the <strong>Pattern Interrupt</strong> and conversion structures are universal. You can easily adapt the layouts for consultants, local services, or high-end automotive clients by simply swapping the copy and imagery."
  }
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter border-b-2 border-t-2 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        The Marketing Agency <span className={style.text}>FAQ</span>
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