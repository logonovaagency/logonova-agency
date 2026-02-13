import Image from "next/image";
import Link from "next/link";
import { services, projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Abstract background"
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Digital Agency for the Modern Age
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 mb-8">
            We build beautiful, effective, and future-proof digital experiences that help your business thrive.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Do</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer a complete suite of services to help your business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="text-center flex flex-col">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                   <Button asChild variant="outline">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-work" className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Work</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              A glimpse into some of our favorite projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/portfolio">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
