import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/dictionaries";
import { Locale } from "../../i18n-config";

type ProjectCardProps = {
  project: Project & { title: string; description: string; };
  lang: Locale;
  dictionary: Dictionary;
};

export function ProjectCard({ project, lang, dictionary }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/${lang}/portfolio/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 bg-slate-800/50 border border-slate-700 hover:border-primary">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            {placeholderImage && (
               <Image
                src={placeholderImage.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={placeholderImage.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col">
          <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
          <h3 className="text-xl font-headline font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techs.map(tech => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary font-normal">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-primary font-semibold mt-auto">
            {dictionary.projects.viewProject}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
