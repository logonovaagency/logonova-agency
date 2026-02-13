import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          From concept to launch, we provide the expertise to bring your digital vision to life.
        </p>
      </section>

      <section className="container mx-auto pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col h-full border-2 hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg font-semibold text-primary">{service.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 flex-grow">{service.longDescription}</p>
                 <Button asChild className="w-full mt-auto">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
