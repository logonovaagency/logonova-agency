import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutTemplate, ShoppingCart, Blocks, Smartphone, CircleHelp, Code, Timer, ArrowRight } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

// Mapping icon names from JSON to actual components
const iconMap: { [key: string]: LucideIcon } = {
  LayoutTemplate,
  ShoppingCart,
  Blocks,
  Smartphone,
  CircleHelp,
  Code,
  Timer
};

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const { servicesPage } = dictionary;

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{servicesPage.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {servicesPage.subtitle}
        </p>
      </section>

      {/* Detailed Services Grid */}
      <section className="container mx-auto pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesPage.cards.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} className="bg-slate-900 border-slate-800 flex flex-col p-4 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-3">{params.lang === 'fr' ? 'Technologies principales :' : 'Main technologies:'}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.stack.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href={`/${params.lang}/pricing`}>
                      {servicesPage.ctaButton}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      
      {/* Why Us Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">{servicesPage.whyUs.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicesPage.whyUs.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="text-center">
                    {Icon && <Icon className="w-10 h-10 text-primary mx-auto mb-4" />}
                    <h4 className="text-xl font-headline font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
