
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { i18n, type Locale } from "@/i18n-config";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { CodeXml, Database, Smartphone, Wallet, MoveRight, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  const { aboutPage } = dictionary;
  return {
    title: aboutPage.hero.title,
    description: aboutPage.hero.subtitle,
  };
}

const stackIcons = {
  frontend: CodeXml,
  backend: Database,
  mobile: Smartphone,
  payment: Wallet,
};

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { aboutPage } = dictionary;

  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Hero "Vision" */}
      <section className="relative py-20 md:py-32 text-center container mx-auto overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 blur-3xl">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full animate-blob-1"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full animate-blob-2"></div>
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{aboutPage.hero.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {aboutPage.hero.subtitle}
            </p>
        </div>
      </section>

      {/* Section 2: Le Fondateur */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
                <div className="relative w-48 h-48 md:w-full md:h-full mx-auto md:mx-0">
                    <Image
                        src="https://i.postimg.cc/26bH4mXk/image-(7).webp"
                        alt={aboutPage.founder.name}
                        width={400}
                        height={400}
                        className="rounded-full object-cover border-4 border-slate-700 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                    />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <h3 className="text-3xl font-headline font-bold">{aboutPage.founder.name}</h3>
                    <p className="text-primary font-semibold mb-4">{aboutPage.founder.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                        "{aboutPage.founder.bio}"
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 3: Notre Arsenal Technique */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{aboutPage.stack.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutPage.stack.categories.map((category) => {
              const Icon = stackIcons[category.icon as keyof typeof stackIcons] || CodeXml;
              return (
                <Card key={category.title} className="bg-slate-900 border-slate-800 p-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                        {category.items.map((item) => (
                           <li key={item} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 mt-1 text-green-500 shrink-0"/>
                                <span className="text-muted-foreground">{item}</span>
                           </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Nos Valeurs */}
       <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{aboutPage.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutPage.values.items.map((item) => {
              return (
                <div key={item.title} className="bg-slate-900 border-slate-800 p-6 rounded-lg text-center">
                    <h4 className="text-xl font-headline font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Section 5: CTA Final */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">{aboutPage.cta.title}</h2>
          <Button size="lg" asChild>
            <Link href={`/${lang}/contact`}>
                {aboutPage.cta.button}
                <MoveRight className="ml-2"/>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
