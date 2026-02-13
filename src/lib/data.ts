import { Monitor, Server, CreditCard } from 'lucide-react';
import type { Service, Project } from '@/lib/types';

export const services: Omit<Service, 'icon'>[] & {icon: any}[] = [
  {
    id: 'web-dev',
    icon: Monitor,
  },
  {
    id: 'saas',
    icon: Server,
  },
  {
    id: 'payment-integration',
    icon: CreditCard,
  },
];

export const projects: Project[] = [
  {
    slug: "taskly-pme",
    title: "Taskly PME",
    category: "SaaS / Gestion",
    tech: ["Next.js", "Node.js", "MongoDB"],
    description: {
      fr: "Solution complète de gestion d'interventions et de planning pour les PME.",
      en: "Complete intervention management and scheduling solution for SMEs."
    },
    demoLink: "https://taskly-pme.netlify.app",
    year: "2025",
    challenge: {
      fr: "Les PME perdent 20% de productivité à cause d'une mauvaise gestion des équipes terrain.",
      en: "SMEs lose 20% productivity due to poor field team management."
    },
    solution: {
      fr: "Une application web progressive (PWA) permettant le suivi en temps réel et la génération de rapports automatisés.",
      en: "A progressive web app (PWA) allowing real-time tracking and automated report generation."
    }
  },
  {
    slug: "wings-shake",
    title: "Wings Shake",
    category: "Mobile App / Food",
    tech: ["Flutter", "Firebase", "Stripe"],
    description: {
      fr: "Application de commande rapide pour fast-food avec programme de fidélité.",
      en: "Fast-food quick ordering app with loyalty program."
    },
    demoLink: "https://wingsshake.netlify.app",
    year: "2024",
    challenge: {
      fr: "Réduire le temps d'attente en caisse aux heures de pointe.",
      en: "Reduce checkout waiting time during peak hours."
    },
    solution: {
      fr: "Une interface mobile 'One-Click Order' optimisée pour la vitesse.",
      en: "A mobile 'One-Click Order' interface optimized for speed."
    }
  },
  {
    slug: "slate-peedz",
    title: "Slate Peed'z",
    category: "E-commerce",
    tech: ["React", "Redux", "Payment API"],
    description: {
      fr: "Plateforme de commande de pizzas avec personnalisation d'ingrédients.",
      en: "Pizza ordering platform with ingredient customization."
    },
    demoLink: "https://slate-peedz.netlify.app",
    year: "2025",
    challenge: {
      fr: "Permettre aux clients de composer leur pizza sans erreur de commande.",
      en: "Allow customers to build their pizza without order errors."
    },
    solution: {
      fr: "Un configurateur visuel interactif et un suivi de livraison temps réel.",
      en: "An interactive visual configurator and real-time delivery tracking."
    }
  },
  {
    slug: "cafe-paris-lome",
    title: "Café Paris Lomé",
    category: "Vitrine / Restaurant",
    tech: ["HTML5", "SCSS", "JS Animation"],
    description: {
      fr: "Site vitrine élégant avec menu numérique QR code.",
      en: "Elegant showcase site with QR code digital menu."
    },
    demoLink: "https://cafeparis-lome.site",
    year: "2024",
    challenge: {
      fr: "Refléter l'ambiance haut de gamme du lieu sur le web.",
      en: "Reflect the venue's upscale ambiance on the web."
    },
    solution: {
      fr: "Un design minimaliste avec des animations douces et une typographie soignée.",
      en: "Minimalist design with smooth animations and refined typography."
    }
  },
  {
    slug: "chez-le-boss",
    title: "Chez Le Boss",
    category: "Corporate / Vitrine",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    description: {
      fr: "Site professionnel pour une entreprise locale.",
      en: "Professional website for a local business."
    },
    demoLink: "https://chez-le-boss.vercel.app",
    year: "2025",
    challenge: {
      fr: "Moderniser une image de marque vieillissante.",
      en: "Modernize an aging brand image."
    },
    solution: {
      fr: "Refonte complète de l'identité visuelle et site ultra-rapide.",
      en: "Complete visual identity overhaul and ultra-fast website."
    }
  }
];
