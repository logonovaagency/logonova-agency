import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/dictionaries";
import { Locale } from "../../i18n-config";

type ProjectCardProps = {
  project: Project;
  lang: Locale;
  dictionary: Dictionary;
};

export function ProjectCard({ project, lang, dictionary }: ProjectCardProps) {

  const description = project.description[lang] || project.description.fr;

  return (
    <Link href={`/${lang}/portfolio/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 bg-slate-800/50 border border-slate-700 hover:border-primary flex flex-col">
        <CardContent className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
          <h3 className="text-xl font-headline font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tech => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary font-normal">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-primary font-semibold mt-auto">
            {dictionary.portfolio.viewProject}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
