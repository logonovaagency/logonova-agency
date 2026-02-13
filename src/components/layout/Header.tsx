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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        asChild
        variant="link"
        className={cn(
          "text-foreground/70 hover:text-foreground hover:no-underline transition-colors",
          {
            "text-primary hover:text-primary font-semibold": pathname === link.href,
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
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Logonova</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                     <Link href="/" className="flex items-center space-x-2">
                      <Rocket className="h-6 w-6 text-primary" />
                      <span className="font-bold font-headline text-lg">Logonova</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {renderNavLinks(true)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
