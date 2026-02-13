import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { i18n, type Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';

const favicon = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3clinearGradient id='waveGradient' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3e%3cstop offset='0%25' style='stop-color:%2393c5fd' /%3e%3cstop offset='100%25' style='stop-color:%2367e8f9' /%3e%3c/linearGradient%3e%3c/defs%3e%3ccircle cx='50' cy='50' r='48' fill='%23263445'/%3e%3cpath d='M 50,2 A 48,48 0 0 1 50,98 A 48,48 0 0 1 50,2 M 50,12 A 38,38 0 0 1 50,88 A 38,38 0 0 1 50,12' fill='none' stroke='white' stroke-width='1.5' stroke-dasharray='2, 4'/%3e%3cpath d='M 35 25 L 35 60 C 35 70 45 75 50 75 C 60 75 70 70 70 60 L 70 50' fill='none' stroke='white' stroke-width='7' stroke-linecap='round'/%3e%3cpath d='M 30 55 C 45 45, 60 65, 75 55' fill='none' stroke='url(%23waveGradient)' stroke-width='7' stroke-linecap='round'/%3e%3c/svg%3e`;

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  const { seo } = dictionary;
  
  return {
    title: {
      template: '%s | Logonova',
      default: seo.defaultTitle,
    },
    description: seo.description,
    keywords: ["Agence web Togo", "Développeur React Lomé", "Création site internet Afrique", "Intégration paiement KkiaPay", "Next.js developer", "Elias Apedo"],
    openGraph: {
      title: seo.defaultTitle,
      description: seo.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Logonova Agency',
        },
      ],
      siteName: 'Logonova Agency',
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.defaultTitle,
      description: seo.description,
      images: ['/og-image.jpg'],
    },
    icons: {
      icon: favicon,
    }
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header lang={params.lang} dictionary={dictionary} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={params.lang} dictionary={dictionary} />
        <Toaster />
      </body>
    </html>
  );
}
