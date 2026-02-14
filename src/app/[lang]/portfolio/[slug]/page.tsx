import Link from 'next/link';
import type { Locale } from '@/i18n-config';
import type { Metadata } from 'next';

// This forces the page to be dynamically rendered, bypassing static generation at build time.
export const dynamic = 'force-dynamic';

// generateStaticParams is removed as it's not used in dynamic rendering mode.

export async function generateMetadata({ params }: { params: { slug: string; lang: Locale; } }): Promise<Metadata> {
  const { slug } = params;
  return {
    title: `Projet ${slug} - Logonova`,
  };
}

export default async function ProjectPage({ params }: { params: { lang: Locale, slug: string } }) {
  // In a dynamically rendered page, 'params' is a direct object.
  const { lang, slug } = params;

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${lang}/portfolio`} className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          &larr; {lang === 'fr' ? 'Retour' : 'Back'}
        </Link>
        
        <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
          <h1 className="text-4xl font-bold mb-4 capitalize">{slug}</h1>
          <p className="text-slate-300 mb-6">
            {lang === 'fr' 
              ? "Le projet est en cours de chargement..." 
              : "Project is loading..."}
          </p>
          <div className="text-xs font-mono text-slate-500 bg-black/30 p-4 rounded">
            Mode: Force Dynamic | Slug: {slug}
          </div>
        </div>
      </div>
    </main>
  );
}
