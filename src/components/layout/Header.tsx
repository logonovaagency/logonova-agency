
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/dictionaries";
import { i18n, type Locale } from "../../../i18n-config";

export function Header({ lang, dictionary }: { lang: Locale, dictionary: Dictionary }) {
  const pathname = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const navLinks = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}/services`, label: dictionary.nav.services },
    { href: `/${lang}/portfolio`, label: dictionary.nav.portfolio },
    { href: `/${lang}/about`, label: dictionary.nav.about },
    { href: `/${lang}/contact`, label: dictionary.nav.contact },
  ];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        asChild
        variant="link"
        className={cn(
          "text-foreground/70 hover:text-foreground hover:no-underline transition-colors",
          {
            "text-primary hover:text-primary font-semibold": pathname === link.href || (link.href.length > 3 && pathname.startsWith(link.href)),
            "text-xl w-full justify-start py-6": isMobile,
          }
        )}
      >
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Logonova</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden flex-1 items-center space-x-1 md:flex">
          {renderNavLinks()}
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="flex items-center border rounded-md p-1">
            {i18n.locales.map((locale) => (
              <Button
                key={locale}
                asChild
                variant={lang === locale ? "secondary" : "ghost"}
                size="sm"
                className="px-2 text-xs h-7"
              >
                <Link
                  href={redirectedPathName(locale)}
                >
                  {locale.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link href={`/${lang}/contact`}>{dictionary.nav.getQuote}</Link>
          </Button>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <SheetHeader>
                  <SheetTitle>
                     <Link href={`/${lang}`} className="flex items-center space-x-2">
                      <Rocket className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline text-lg">Logonova</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-2">
                  {renderNavLinks(true)}
                </div>
                <div className="mt-auto pt-6">
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/${lang}/contact`}>{dictionary.nav.getQuote}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
