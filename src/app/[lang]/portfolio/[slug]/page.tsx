import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { i18n, type Locale } from "../../../../../i18n-config";
import type { Metadata } from 'next';

type ProjectPageProps = {
  params: {
    slug: string;
    lang: Locale;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Logonova",
    };
  }

  const description = project.description[params.lang] || project.description.fr;

  return {
    title: project.title, // The template in layout will add "| Logonova"
    description: description,
    openGraph: {
      title: `${project.title} | Logonova`,
      description: description,
    }
  };
}

export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    projects.map((project) => ({
      lang: lang,
      slug: project.slug,
    }))
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dictionary = await getDictionary(params.lang);
  const { projectPage } = dictionary;

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const description = project.description[params.lang] || project.description.fr;
  const challenge = project.challenge[params.lang] || project.challenge.fr;
  const solution = project.solution[params.lang] || project.solution.fr;

  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8">
            <Link href={`/${params.lang}/portfolio`} className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {projectPage.backToProjects}
            </Link>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">{project.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
                <span>{project.category}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="mb-12">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                {projectPage.visitSite}
                <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
               <div>
                  <h2 className="text-3xl font-headline font-bold mb-4">{projectPage.theChallenge}</h2>
                  <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p>{challenge}</p>
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-headline font-bold mb-4">{projectPage.theSolution}</h2>
                  <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p>{solution}</p>
                  </div>
               </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">{projectPage.projectInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold">{projectPage.category}</p>
                      <p className="text-muted-foreground">{project.category}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{projectPage.year}</p>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{projectPage.technologies}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech) => (
                           <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 border-t pt-8 flex justify-between items-center">
            <Link href={`/${params.lang}/portfolio`} className="text-primary hover:underline">
                {projectPage.backToProjects}
            </Link>
             <Button asChild variant="outline">
                <Link href={`/${params.lang}/portfolio/${nextProject.slug}`}>
                    {projectPage.nextProject}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}

    