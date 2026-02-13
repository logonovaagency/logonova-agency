import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { i18n, type Locale } from '../../../i18n-config';
import { getDictionary } from '@/lib/dictionaries';

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
      icon: "https://i.postimg.cc/hP0GdZZH/1770984365136.png",
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
