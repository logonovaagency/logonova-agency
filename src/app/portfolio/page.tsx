import { projects } from "@/lib/data";
import { PortfolioClient } from "./PortfolioClient";

export default function PortfolioPage() {
  const categories = [...new Set(projects.map((p) => p.category))];

  return (
    <div className="bg-background">
      <section className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Work</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We take pride in our work. Explore a selection of our projects that showcase our commitment to quality and innovation.
        </p>
      </section>

      <PortfolioClient projects={projects} categories={categories} />
    </div>
  );
}
