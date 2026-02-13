import Link from "next/link";
import { Rocket, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Logonova</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building the future of the web, one project at a time. We are a digital agency specializing in modern web solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Connect</h3>
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
          <p>&copy; {new Date().getFullYear()} Logonova Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
