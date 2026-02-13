import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  slug: string;
  imageId: string;
  featured: boolean;
  galleryImageIds: string[];
};

export type Service = {
  id:string;
  icon: LucideIcon;
};
