import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholderImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <CardHeader className="p-0">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
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
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2">{project.category}</Badge>
          <h3 className="text-xl font-headline font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex items-center text-primary font-semibold">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
