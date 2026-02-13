import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageId: string;
  featured: boolean;
  details: {
    title: string;
    value: string;
  }[];
  galleryImageIds: string[];
};

export type Service = {
  id:string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  icon: LucideIcon;
};
