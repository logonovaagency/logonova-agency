
import { CheckCircle } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function PricingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { pricingPage } = dictionary;

  return (
    <div className="bg-slate-950 text-foreground">
      <section className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{pricingPage.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {pricingPage.subtitle}
        </p>
      </section>

      {/* Part 1: Packs */}
      <section className="container mx-auto pb-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{pricingPage.packsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPage.packs.map((pack) => (
            <Card key={pack.title} className="bg-slate-900 border-slate-800 flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{pack.title}</CardTitle>
                <div className="py-4">
                  <p className="text-4xl font-bold">{pack.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">{pack.subtitle}</p>
                </div>
                <CardDescription>{pack.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90">
                    <Link href={`/${lang}/contact`}>{pricingPage.ctaButton}</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Part 2: SaaS */}
      <section className="container mx-auto pb-20 md:pb-32">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">{pricingPage.saasTitle}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPage.saasTiers.map((tier) => (
                 <div key={tier.title} className={`relative p-8 rounded-lg bg-slate-900 border-2 ${tier.isRecommended ? 'border-primary' : 'border-slate-800'}`}>
                    {tier.isRecommended && (
                        <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500">
                            {pricingPage.saasBestSeller}
                        </Badge>
                    )}
                    <h3 className="font-headline text-2xl font-bold text-center mb-4">{tier.title}</h3>
                    <p className="text-center font-semibold text-primary text-xl mb-4">{tier.budget}</p>
                    <p className="text-muted-foreground text-center text-sm">{tier.description}</p>
                 </div>
            ))}
        </div>
      </section>
    </div>
  );
}
