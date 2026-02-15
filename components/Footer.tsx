import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-auto border-t border-white/10 bg-[#000000] text-center">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Dati Aziendali Obbligatori */}
        <div className="mb-6 text-sm text-white/60 space-y-1">
          <p className="font-bold text-white/80 tracking-widest">ReBest Digital di Busato Alessio</p>
          <p>Registered Office: Via Cappellaro 39, 13816 Sagliano Micca (BI), Italy</p>
          <p>VAT Number: IT 02837450028</p>
          <p>Contact: <a href="mailto:info@rebestdigital.com" className="hover:text-[#FF00FF]">info@rebestdigital.com</a></p>
        </div>

        {/* Link Legali e Social */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs uppercase tracking-widest font-bold">
          <Link href="/privacy-policy/standard-v1" className="text-white/40 hover:text-[#FF00FF] transition-colors underline decoration-[#FF00FF]/30">
            Privacy Policy
          </Link>
          <a 
            href="https://www.brevo.com/legal/privacypolicy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/40 hover:text-[#FF00FF] transition-colors underline decoration-[#FF00FF]/30"
          >
            Brevo Privacy
          </a>
          <p className="text-white/20">© 2026 All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}