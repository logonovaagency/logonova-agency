import Link from "next/link";
import { Rocket, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "../../../i18n-config";

export function Footer({ lang, dictionary }: { lang: Locale, dictionary: Dictionary }) {
  const { footer, nav } = dictionary;
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4 md:col-span-2">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Logonova</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              {footer.slogan}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">{footer.siteMap}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}/services`} className="text-muted-foreground hover:text-primary transition-colors">{nav.services}</Link></li>
              <li><Link href={`/${lang}/portfolio`} className="text-muted-foreground hover:text-primary transition-colors">{nav.portfolio}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">{nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">{footer.connect}</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
