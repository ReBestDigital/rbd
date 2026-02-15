'use client';

export default function CookieReset() {
  const resetCookies = () => {
    localStorage.removeItem('cookie-consent-v1');
    window.location.reload(); // Ricarica la pagina per far riapparire il banner
  };

  return (
    <button 
      onClick={resetCookies}
      className="fixed bottom-24 right-5 z-[9999] bg-gray-800 text-white text-[10px] px-3 py-1 rounded border border-white/20 opacity-50 hover:opacity-100 transition-opacity"
    >
      DEBUG: RESET COOKIES
    </button>
  );
}