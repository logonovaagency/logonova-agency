import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Dictionary } from "@/lib/dictionaries";

type TestimonialsSectionProps = {
    dictionary: Dictionary;
};

export function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
    const { testimonials } = dictionary;

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">{testimonials.title}</h2>
                    <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                        {testimonials.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.items.map((item, index) => (
                        <Card key={index} className="bg-slate-900 border-slate-800">
                            <CardContent className="pt-6">
                                <blockquote className="text-lg text-muted-foreground italic mb-6">
                                    "{item.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={`https://picsum.photos/seed/${index+10}/40/40`} />
                                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-foreground">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">{item.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
