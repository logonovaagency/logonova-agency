import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  category: string;
  tech: string[];
  description: {
    fr: string;
    en: string;
  };
  demoLink: string;
  year: string;
  challenge: {
    fr: string;
    en: string;
  };
  solution: {
    fr: string;
    en: string;
  };
};

export type Service = {
  id:string;
  icon: LucideIcon;
};
