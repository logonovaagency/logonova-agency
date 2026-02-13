import { projects } from "@/lib/data";
import { PortfolioClient } from "@/app/portfolio/PortfolioClient";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";

export default async function PortfolioPage({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const { portfolioPage } = dictionary;
  
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="bg-background">
      <section className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{portfolioPage.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {portfolioPage.subtitle}
        </p>
      </section>

      <PortfolioClient projects={projects} categories={categories} lang={params.lang} dictionary={dictionary} />
    </div>
  );
}
