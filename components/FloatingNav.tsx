'use client';

import Link from 'next/link';
interface FloatingNavProps {
  text: string;    // Il testo che appare al passaggio del mouse
  targetUrl: string; // Dove deve andare l'utente al click
}
export default function FloatingNav({ text, targetUrl }: FloatingNavProps) {
  return (
    <div className="fixed top-24 right-0 z-[9998] flex flex-col items-end">
      <Link 
         href={targetUrl} 
        className="group flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-[#FF00FF]/30 text-white py-2 px-3 rounded-l-full shadow-lg hover:border-[#FF00FF] transition-all duration-300"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-m font-bold tracking-tighter">
          {text}
        </span>
        <div className="bg-[#FF00FF] p-2 rounded-full text-white">
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org">
  <rect width="30" height="4" rx="2" fill="white"/>
  <rect y="8" width="30" height="4" rx="2" fill="white"/>
  <rect y="16" width="30" height="4" rx="2" fill="white"/>
</svg>
          {/* <span className="text-lg">🗺️</span> */}
        </div>
      </Link>
    </div>
  );
}