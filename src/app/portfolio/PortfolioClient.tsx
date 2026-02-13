"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PortfolioClientProps = {
  projects: Project[];
  categories: string[];
};

export function PortfolioClient({ projects, categories }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="container mx-auto pb-20 md:pb-32">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <Button
          variant="ghost"
          onClick={() => setActiveCategory("All")}
          className={cn("text-muted-foreground hover:text-primary", {
            "bg-primary/10 text-primary": activeCategory === "All",
          })}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            onClick={() => setActiveCategory(category)}
            className={cn("text-muted-foreground hover:text-primary", {
                "bg-primary/10 text-primary": activeCategory === category,
            })}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
