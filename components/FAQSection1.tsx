import React from 'react';

interface FAQSectionProps {
  style: any;
}

export default function DetailedFAQSection({ style }: FAQSectionProps) {
  const faqs = [
    {
      question: "What exclusive bonuses do I get with the Early Bird access?",
      answer: "By joining now, you secure <strong>exclusive lifetime access</strong> to our Private Facebook Vault and private YouTube training channels. Please note: in the near future, these resources will transition to a <strong>paid monthly subscription</strong>. Early Bird members are 'grandfathered' in and will never pay extra."
    },
    {
      question: "Are there step-by-step instructions for the assets?",
      answer: "Yes. Every single template and strategy comes with its own <strong>dedicated manual</strong>. We don't just give you the 'what', we give you the 'how' and 'why' through 10+ detailed guides and a private video playlist included in the Early Bird package."
    },
    {
      question: "I have a real estate group with multiple offices. Can we all use it?",
      answer: "The standard Early Bird license covers small groups of up to <strong>3 offices/locations</strong>. For larger organizations, franchises, or groups with 4+ offices, a <strong>Commercial License</strong> is required to ensure compliance and support for your entire team."
    },
    {
      question: "I am a Marketing Agency serving real estate clients. Can I use this?",
      answer: "If you want to use the ReBest Ecosystem to provide services to your clients, you must purchase the <strong>Commercial Agency License</strong>. This allows you to deploy our high-conversion assets across multiple client accounts legally."
    },
    {
      question: "Will I get new updates and future templates?",
      answer: "Early Bird members get <strong>7-day early access</strong> to all new tools, infographics, and templates we add to the ecosystem. You will always stay one step ahead of the competition who will have to wait—and eventually pay—for these updates."
    },
    {
      question: "Can I fully customize the branding and colors?",
      answer: "Absolutely. All 80+ assets are designed to be <strong>100% customizable via Canva</strong>. You can inject your own brand colors, logos, and personal style in minutes, maintaining a high-authority visual identity."
    },
    {
      question: "How does the 'Checklist' strategy help with listings?",
      answer: "Unlike generic valuation offers, our <strong>Homebuyer and Seller Checklists</strong> educate your prospects. By the time you meet them, they already trust your process, making the listing appointment a formality rather than a struggle."
    },
    {
      question: "What happens if I miss the Early Bird window?",
      answer: "Once the Early Bird phase ends, the price will increase significantly to reflect the full market value ($1,500+), and the <strong>Facebook Vault and Video Training</strong> will likely move to a recurring monthly fee model."
    },
    {
      question: "Is this suitable for solo agents or only large teams?",
      answer: "It’s perfect for both. For <strong>solo agents</strong>, it acts as a 'marketing department in a box'. For <strong>teams</strong>, it provides a standardized framework so every agent communicates with the same level of authority."
    },
    {
      question: "What makes ReBest different from cheap template bundles?",
      answer: "Cheap bundles offer 'pretty' designs. ReBest offers <strong>Conversion Engineering</strong>. Every asset is based on real-world real estate psychology designed to defeat 'Digital New-Comers' and reclaim your local market dominance."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-24 px-6 border-t border-white/10">
      <h2 className="text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter">
        Deep Dive: <span className={style.text}>Technical & License FAQ</span>
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
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        ))}
      </div>

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