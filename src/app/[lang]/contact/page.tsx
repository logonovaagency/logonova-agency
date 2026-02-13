import { ContactForm } from "@/app/contact/ContactForm";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.85L2 22l5.25-1.38c1.47.79 3.1 1.25 4.85 1.25h.04c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91z"></path>
      <path d="M16.99 15.33c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.62.14-.19.27-.7.87-.86 1.04s-.32.2-.6.07c-.27-.14-1.14-.42-2.17-1.33-.8-.72-1.34-1.62-1.49-1.9s-.02-.43.12-.57c.12-.12.27-.3.4-.4s.17-.2.25-.33.04-.25-.04-.48c-.07-.22-.62-1.48-.84-2.02s-.45-.46-.62-.46h-.5c-.19 0-.48.07-.73.34-.25.27-.96.93-.96 2.27s.98 2.64 1.13 2.81c.15.17 1.96 3 4.75 4.15s.93.38 1.25.31c.32-.07.96-.39 1.1-.78s.15-.73.1-.8z"></path>
    </svg>
  );

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { contactPage } = dictionary;
  return (
    <div className="bg-background">
      <section className="container mx-auto py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{contactPage.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {contactPage.subtitle}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@logonova.site" className="text-muted-foreground hover:text-primary">contact@logonova.site</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+228 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Lomé, Togo</span>
              </div>
            </div>
            <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Linkedin className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Github className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><WhatsAppIcon className="h-5 w-5" /></Link>
                </Button>
            </div>
          </div>
          <div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-lg">
              <ContactForm dictionary={dictionary.contactPage.form} lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
