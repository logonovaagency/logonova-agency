import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? We'd love to hear about it. Fill out the form or use our contact details below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@logonova.agency" className="text-muted-foreground hover:text-primary">hello@logonova.agency</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">123 Digital Ave, Webville, 12345</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-card p-8 rounded-lg border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
