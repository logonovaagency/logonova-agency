import Link from "next/link";
import { services as servicesData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import { PortfolioSection } from "@/components/PortfolioSection";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { hero, services } = dictionary;

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-background">
        {/* Animated Blobs */}
        <div className="absolute inset-0 z-0 opacity-40 blur-3xl">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full animate-blob-1"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full animate-blob-2"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 
            className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight animate-fade-in-up bg-gradient-to-br from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            {hero.title}
          </h1>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
          >
            {hero.subtitle}
          </p>
          <div 
            className="flex justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}
          >
            <Button size="lg" asChild className="transition-all duration-300 hover:shadow-[0_0_25px] hover:shadow-primary/50 hover:scale-105">
              <Link href={`/${lang}/portfolio`}>{hero.buttonWork}</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="transition-all duration-300 hover:shadow-[0_0_25px] hover:shadow-secondary/50 hover:scale-105">
              <Link href={`/${lang}/services`}>{hero.buttonServices}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{services.title}</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              {services.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const serviceText = services.items.find(s => s.id === service.id);
              if (!serviceText) return null;
              return (
                <Card key={service.id} className="text-center flex flex-col">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{serviceText.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6">{serviceText.description}</p>
                    <Button asChild variant="outline">
                      <Link href={`/${lang}/services`}>{services.learnMore}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <PortfolioSection lang={lang} dictionary={dictionary} />
    </div>
  );
}
