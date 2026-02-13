import Link from 'next/link';
import { projects as projectsData } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import type { Locale } from '../../i18n-config';
import type { Dictionary } from '@/lib/dictionaries';

type PortfolioSectionProps = {
    lang: Locale;
    dictionary: Dictionary;
}

export function PortfolioSection({ lang, dictionary }: PortfolioSectionProps) {
    const { portfolio } = dictionary;
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">{portfolio.title}</h2>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                        {portfolio.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} lang={lang} dictionary={dictionary} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button size="lg" asChild>
                        <Link href={`/${lang}/portfolio`}>{portfolio.exploreAll}</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
