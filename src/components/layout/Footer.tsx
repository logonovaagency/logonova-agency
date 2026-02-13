import Link from "next/link";
import { Twitter, Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";
import LogonovaIcon from "@/components/LogonovaIcon";

export function Footer({ lang, dictionary }: { lang: Locale, dictionary: Dictionary }) {
  const { footer, nav } = dictionary;
  return (
    <footer className="border-t border-slate-800 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <LogonovaIcon className="h-10 w-10 text-primary" />
              <span className="font-bold font-headline text-2xl">Logo<span className="text-primary">nova</span></span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {footer.slogan}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">{footer.siteMap}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}`} className="text-muted-foreground hover:text-primary transition-colors">{nav.home}</Link></li>
              <li><Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">{nav.services}</Link></li>
              <li><Link href={`/${lang}/portfolio`} className="text-muted-foreground hover:text-primary transition-colors">{nav.portfolio}</Link></li>
              <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary transition-colors">{nav.about}</Link></li>
              <li><Link href={`/${lang}/pricing`} className="text-muted-foreground hover:text-primary transition-colors">{nav.pricing}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">{nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">{footer.connect}</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/LogonovaAgency" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/logonovaagency" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/logonova-agency" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href="https://wa.me/22872229856" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-6 space-y-3 text-sm">
                <a href="mailto:contact.logonovaagency@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                    contact.logonovaagency@gmail.com
                </a>
                <a href="tel:+22872229856" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                    <Phone className="h-4 w-4" />
                    +228 72 22 98 56
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Lomé, Togo
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">{footer.founder}</p>
          <p>{footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
