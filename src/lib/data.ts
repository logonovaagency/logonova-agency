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
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Node.js", "KkiaPay API"],
    description: {
      fr: "Solution complète de gestion d'interventions avec paiements intégrés via KkiaPay.",
      en: "Complete intervention management solution with integrated KkiaPay payments."
    },
    demoLink: "https://taskly-pme.netlify.app",
    year: "2025",
    challenge: {
      fr: "Sécuriser les accès utilisateurs et gérer les paiements mobiles locaux.",
      en: "Secure user access and manage local mobile payments."
    },
    solution: {
      fr: "Architecture typée en TypeScript pour la robustesse, Auth via Firebase et checkout KkiaPay.",
      en: "Typed architecture with TypeScript for robustness, Firebase Auth, and KkiaPay checkout."
    }
  },
  {
    slug: "wings-shake",
    title: "Wings Shake",
    category: "Food Tech / App",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    description: {
      fr: "Application de commande rapide optimisée pour mobile.",
      en: "Fast ordering application optimized for mobile."
    },
    demoLink: "https://wingsshake.netlify.app",
    year: "2024",
    challenge: {
      fr: "Garantir une fluidité maximale sur tous les téléphones, même anciens.",
      en: "Ensure maximum fluidity on all phones, even older ones."
    },
    solution: {
      fr: "Utilisation de Vanilla JS et LocalStorage pour sauvegarder le panier sans base de données lourde.",
      en: "Using Vanilla JS and LocalStorage to save the cart without heavy databases."
    }
  },
  {
    slug: "slate-peedz",
    title: "Slate Peed'z",
    category: "E-commerce",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    description: {
      fr: "Plateforme de commande de pizzas avec gestion de panier local.",
      en: "Pizza ordering platform with local cart management."
    },
    demoLink: "https://slate-peedz.netlify.app",
    year: "2025",
    challenge: {
      fr: "Permettre la persistance du panier même si l'utilisateur ferme la page.",
      en: "Allow cart persistence even if the user closes the page."
    },
    solution: {
      fr: "Logique JavaScript personnalisée pour gérer l'état du panier via le stockage local du navigateur.",
      en: "Custom JavaScript logic to manage cart state via browser local storage."
    }
  },
  {
    slug: "cafe-paris-lome",
    title: "Café Paris Lomé",
    category: "Vitrine / Restaurant",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: {
      fr: "Site vitrine élégant pour un restaurant prestigieux.",
      en: "Elegant showcase site for a prestigious restaurant."
    },
    demoLink: "https://cafeparis-lome.site",
    year: "2024",
    challenge: {
      fr: "Présenter le menu de manière interactive et fluide.",
      en: "Present the menu in an interactive and fluid way."
    },
    solution: {
      fr: "Design responsive léger sans dépendances externes pour un chargement instantané.",
      en: "Lightweight responsive design without external dependencies for instant loading."
    }
  },
  {
    slug: "chez-le-boss",
    title: "Chez Le Boss",
    category: "Corporate",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: {
      fr: "Site professionnel rapide et efficace.",
      en: "Fast and efficient professional website."
    },
    demoLink: "https://chez-le-boss.vercel.app",
    year: "2025",
    challenge: {
      fr: "Une présence en ligne claire et accessible.",
      en: "Clear and accessible online presence."
    },
    solution: {
      fr: "Structure sémantique optimisée pour le référencement (SEO) et la rapidité.",
      en: "Semantic structure optimized for SEO and speed."
    }
  }
];
