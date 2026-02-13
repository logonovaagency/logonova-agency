import { notFound } from "next/navigation";
import Image from "next/image";
import { projects as projectsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/lib/dictionaries";
import { i18n, type Locale } from "../../../../../i18n-config";

type ProjectPageProps = {
  params: {
    slug: string;
    lang: Locale;
  };
};

export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    projectsData.map((project) => ({
      lang: lang,
      slug: project.slug,
    }))
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dictionary = await getDictionary(params.lang);
  const projectData = projectsData.find((p) => p.slug === params.slug);
  const projectText = dictionary.projects.items.find((p) => p.id === projectData?.id);


  if (!projectData || !projectText) {
    notFound();
  }

  const project = {...projectData, ...projectText};

  const mainImage = PlaceHolderImages.find(p => p.id === project.imageId);
  const galleryImages = project.galleryImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <div className="bg-background">
      <section className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border mb-12 shadow-lg">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={project.title}
                fill
                priority
                className="object-cover"
                data-ai-hint={mainImage.imageHint}
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-headline font-bold mb-4">{dictionary.projectPage.caseStudy}</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>{project.longDescription}</p>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">{dictionary.projectPage.projectDetails}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.details.map((detail, index) => (
                    <div key={index}>
                      <p className="font-semibold">{detail.title}</p>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator className="my-16" />

          <div>
             <h2 className="text-3xl font-headline font-bold mb-8 text-center">{dictionary.projectPage.projectGallery}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryImages.map((image, index) => image && (
                    <div key={index} className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-md">
                        <Image
                            src={image.imageUrl}
                            alt={`${project.title} gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
