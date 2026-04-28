import React from 'react';

interface AuthorCardProps {
  style: any;
}
const AuthorCard = ({ style }: AuthorCardProps) => {
  const authorPageUrl = "https://www.amazon.com/author/rebestdigital"; // Sostituisci con il tuo URL
  const authorPageUrlIta = "https://www.amazon.it/stores/ReBest-Digital/author/B0GVZTG2K9?ref=ap_rdr&shoppingPortalEnabled=true"; // Sostituisci con il tuo URL
  const author = "ReBest Digital"

  return (
    <div className="max-w-md mx-auto bg-black border p-6 pt-2 rounded-2xl shadow-xl mt-8"  style={{ borderColor: style.color || '#FF00FF' }}>
      <p className={`${style.text}  text-base font-bold p-4 text-center `} style={{ color: style.color}}>FOLLOW THE AUTHOR ON AMAZON</p>
      <div className="flex items-center gap-4">
        {/* Avatar - Sostituisci 'src' con la tua foto ufficiale */}
        <div className="h-20 w-20 rounded-full border-2 overflow-hidden bg-zinc-800" style={{ borderColor: style.color || '#FF00FF' }}>
           <img src="/LogoQuadRBD.jpg" alt="Author" className="h-full w-full object-cover" />
        </div>
        
        <div className="flex-1">
          <h3 className={`${style.text} font-bold text-lg`}>{`${author}`}</h3>
          <p className={`${style.text} text-base italic`}>Building Real Estate Ecosystems.</p>
        </div>
      </div>

      <div className={`mt-4 ${style.text} text-base leading-relaxed`}>
        Helping real estate agencies break the cycle of digital invisibility. 
        Follow my official Amazon Author page for updates on new releases and exclusive content.
      </div>

      <div className="mt-6 flex gap-3">
        <a 
          href={authorPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-base font-bold py-3 rounded-xl transition-all shadow-lg shadow-fuchsia-600/20"
        >
          
          Follow Me on Amazon
        </a>
        
        <a 
          href={authorPageUrlIta}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-fuchsia-600 text-white text-base font-bold py-3 rounded-xl transition-all"
        >
          
          Italian Profile
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;