import { Code2, Palette, Megaphone } from 'lucide-react';
import type { Service, Project } from '@/lib/types';

export const services: Omit<Service, 'icon'>[] & {icon: any}[] = [
  {
    id: 'web-dev',
    icon: Code2,
  },
  {
    id: 'branding',
    icon: Palette,
  },
  {
    id: 'marketing',
    icon: Megaphone,
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'taskly-pme',
    imageId: 'taskly-thumb',
    featured: true,
    galleryImageIds: ['taskly-gallery-1', 'taskly-gallery-2'],
    category: "SaaS / Gestion",
    techs: ["Next.js", "Node.js"]
  },
  {
    id: 'p2',
    slug: 'slate-peedz',
    imageId: 'slate-peedz-thumb',
    featured: true,
    galleryImageIds: ['slate-peedz-gallery-1', 'slate-peedz-gallery-2'],
    category: "E-commerce",
    techs: ["React", "Payment API"]
  },
  {
    id: 'p3',
    slug: 'cafe-paris-lome',
    imageId: 'cafe-paris-lome-thumb',
    featured: true,
    galleryImageIds: ['cafe-paris-lome-gallery-1', 'cafe-paris-lome-gallery-2'],
    category: "Vitrine / Food",
    techs: ["HTML/CSS/JS", "QR Menu"]
  },
  {
    id: 'p4',
    slug: 'wings-shake',
    imageId: 'wings-shake-thumb',
    featured: true,
    galleryImageIds: ['wings-shake-gallery-1', 'wings-shake-gallery-2'],
    category: "Web app App",
    techs: ["html css", "Firebase"]
  },
];
