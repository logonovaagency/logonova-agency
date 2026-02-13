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
    slug: 'project-alpha',
    imageId: 'project-1-thumb',
    featured: true,
    galleryImageIds: ['project-1-gallery-1', 'project-1-gallery-2'],
  },
  {
    id: 'p2',
    slug: 'project-beta',
    imageId: 'project-2-thumb',
    featured: true,
    galleryImageIds: ['project-2-gallery-1', 'project-2-gallery-2'],
  },
  {
    id: 'p3',
    slug: 'project-gamma',
    imageId: 'project-3-thumb',
    featured: false,
    galleryImageIds: ['project-3-gallery-1', 'project-3-gallery-2'],
  },
  {
    id: 'p4',
    slug: 'project-delta',
    imageId: 'project-4-thumb',
    featured: true,
    galleryImageIds: ['project-4-gallery-1', 'project-4-gallery-2'],
  },
];
