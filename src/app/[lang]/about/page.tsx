
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import Image from "next/image";
import Link from "next/link";
import { Code, Globe, Zap, Award, Users, Target, MoveRight } from "lucide-react";

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
);
const FirebaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M18.33 5.67L12.33 2.12c-.5-.3-.11-.53 0-.53l6 3.54c.5.3.5.87 0 1.17zM5.67 5.67L11.67 2.12c.5-.3.11-.53 0-.53L5.67 5.14c-.5.3-.5.87 0 1.17zM18.33 18.33L12.33 21.88c-.5.3-.11.53 0 .53l6-3.54c.5-.3.5-.87 0-1.17zM5.67 18.33L11.67 21.88c.5.3.11.53 0 .53l-6-3.54c-.5-.3-.5-.87 0-1.17zM12 12l6-3.5-6-3.5-6 3.5 6 3.5z"></path></svg>
);
const StripeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="M14 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"></path><path d="M3 15a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2H3Z"></path><path d="M21 8.5h-5.5"></path><path d="M21 15.5h-5.5"></path><path d="M10 20a1 1 0 0 0 1-1v-2h- физика- 2Z"></path></svg>
);

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { aboutPage } = dictionary;
  const valueIcons = { Innovation: Award, 'Local & Global': Users, Transparency: Target };

  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Hero "Vision" */}
      <section className="py-20 md:py-32 text-center container mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{aboutPage.hero.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {aboutPage.hero.subtitle}
        </p>
      </section>

      {/* Section 2: Notre Mission */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{aboutPage.mission.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {aboutPage.mission.text}
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image
              src="https://picsum.photos/seed/desk/800/600"
              alt="Modern office"
              layout="fill"
              objectFit="cover"
              data-ai-hint="modern office"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Le Fondateur */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-lg">
                <div className="relative w-40 h-40 md:w-full md:h-full mx-auto md:mx-0 rounded-full md:rounded-lg overflow-hidden">
                    <Image
                        src="https://picsum.photos/seed/founder/400/400"
                        alt={aboutPage.founder.name}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="portrait man"
                    />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <h3 className="text-2xl font-headline font-bold">{aboutPage.founder.name}</h3>
                    <p className="text-primary font-semibold mb-3">{aboutPage.founder.role}</p>
                    <p className="text-muted-foreground mb-4">
                        "{aboutPage.founder.bio}"
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <span className="text-sm font-semibold">{aboutPage.founder.stack}</span>
                        <div className="flex gap-3">
                           <ReactIcon />
                           <FirebaseIcon />
                           <StripeIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 4: Pourquoi nous choisir ? */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{aboutPage.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutPage.values.items.map((item) => {
              const Icon = valueIcons[item.title as keyof typeof valueIcons] || Code;
              return (
                <div key={item.title} className="bg-slate-900 border-slate-800 p-6 rounded-lg text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                    </div>
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
