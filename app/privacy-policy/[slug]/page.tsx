import { PRIVACY_DOCS } from '@/config/privacy';
import { notFound } from 'next/navigation';
export const runtime = 'edge';
// Definiamo correttamente il tipo per Next.js 15
interface PrivacyProps {
  params: Promise<{ slug: string }>;
}

export default async function PrivacyPage({ params }: PrivacyProps) {
  // 1. "Sballiamo" i parametri in modo asincrono
  const { slug } = await params;
  
  // 2. Cerchiamo i dati nel config
  const privacyData = PRIVACY_DOCS[slug as keyof typeof PRIVACY_DOCS];

  // 3. Se non esiste, 404
  if (!privacyData) {
    return notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-10 font-sans">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <pre className="whitespace-pre-wrap text-slate-700 font-sans leading-relaxed">
        {privacyData.textContent}
      </pre>
    </main>
  );
}