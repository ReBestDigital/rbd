import React from 'react';

interface SEOAdvantagesProps {
  style: any;
}

export default function SEOAdvantages({ style }: SEOAdvantagesProps) {
  // Ho preparato i dati in un array per rendere il codice più pulito e facile da gestire
  const advantages = [
    {
      title: "Escape Real Estate Portal Slavery",
      text: "Take full control of your business by generating your own qualified leads. Our system empowers you to break free from expensive third-party platforms, building a direct and proprietary acquisition channel."
    },
    {
      title: "Establish Local Market Authority",
      text: "Move beyond 'monotonous elegance'. With 80+ strategic assets, you will be the recognized expert in your area, building massive trust with sellers before the first meeting."
    },
    {
      title: "Optimize Your Time with Ready-to-Use Templates",
      text: "Save hundreds of hours on content creation. Access a full arsenal of <strong>Canva Real Estate templates</strong>, newsletters, and Open House kits engineered to be customized in clicks."
    },
    {
      title: "High-Conversion Social Media Strategy",
      text: "Dominate Instagram and Facebook with 32+ templates optimized for engagement. Turn followers into actual listing appointments, leaving ineffective, generic posts in the past."
    },
    {
      title: "Strategic Lead Generation",
      text: "Leverage marketing psychology with <strong>Homebuyer and Seller Checklists</strong>. These educational tools convert at a much higher rate than standard 'Free Valuations'."
    },
    {
      title: "Consistent Nurturing & Follow-ups",
      text: "Take command of your database. With 25+ <strong>Real Estate newsletter sequences</strong>, you can automate your follow-ups and stay 'top-of-mind' until prospects are ready to sign."
    },
    {
      title: "Why-Behind-the-How Strategies",
      text: "We provide more than just files; we provide a proven method. Every component is backed by strategic manuals and private video tutorials to elevate your digital marketing expertise."
    },
    {
      title: "Differentiate from Digital New-Comers",
      text: "Outperform tech giants with advanced communication tools. The ReBest Digital Ecosystem provides the strategic edge needed to win at the highest level in today’s modern market."
    },
    {
      title: "Unbeatable Marketing ROI",
      text: "Secure your <strong>Second Chance access</strong> to gain a professional marketing suite with a market value over 5 times the price paid. It pays for itself with 1/10 of the first commission generated."
    },
    {
      title: "Lifetime Community & Updates",
      text: "Join the private Facebook Vault for ongoing support. Receive new infographics, bonus templates, and exclusive previews to stay ahead of the competition at all times."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 border-t border-white/10">
      {/* Titolo H2: Fondamentale per la SEO */}
      <h2 className="text-white text-3xl md:text-4xl font-black mb-16 text-center  tracking-tighter  border-b-4 border-t-4 pb-6 pt-6" style={{ borderColor: style.color || '#FFffFF' }}>
        <span className="uppercase" >  Why Choose the ReBest Digital Ecosystem:</span> <br/>
        <span className={style.text}>The Competitive Edge for Modern Real Estate Agents</span>
      </h2>

      {/* Utilizziamo <ul> per segnalare ai motori di ricerca che questa è una lista di benefici */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {advantages.map((adv, index) => (
          <li key={index} className="flex gap-4">
            {/* Numero o Icona */}
            <span className={`${style.text} font-black text-xl opacity-50`}>
             {/*  {(index + 1).toString().padStart(2, '0')} */}*
            </span>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-2 uppercase tracking-tight">
                <strong>{adv.title}</strong>
              </h3>
              <p 
                className={`${style.mute} text-sm leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: adv.text }} // Questo serve per renderizzare i tag <strong> dentro l'array
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}