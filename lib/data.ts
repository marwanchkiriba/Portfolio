export interface Project {
  id?: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  year: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface BlogPost {
  id?: string;
  slug?: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "saas-gestion-parc-auto",
    name: "SaaS — Gestion de parc automobile",
    description:
      "Application SaaS full-stack pour centraliser la gestion d’un parc automobile : véhicules, suivi et organisation.",
    longDescription: `
**Contexte**
- Application SaaS pour centraliser la gestion d'un parc automobile (véhicules, suivi et organisation).
- Travail en TypeScript avec une architecture front/back séparée pour faciliter le déploiement.

**Stack et rôle**
- Back-end TypeScript avec Prisma et PostgreSQL pour la modélisation et l'accès aux données.
- Interface web en TypeScript/React pour suivre les véhicules et leurs opérations.
- Versionning du code sur GitHub et documentation des modèles.

**Résultats**
- Base prête pour la création d'alertes (maintenance, échéances) et l'export des données.
- Architecture claire qui permet d'ajouter facilement de nouvelles fonctionnalités.
`,
    year: "2025",
    tech: ["TypeScript", "Prisma", "PostgreSQL", "React", "Node.js"],
    link: "https://github.com/marwanchkiriba/Saas_auto",
    github: "https://github.com/marwanchkiriba/Saas_auto",
    featured: true,
  },
  {
    slug: "appchat-temps-reel",
    name: "Application de chat en temps réel",
    description:
      "Messagerie temps réel avec PHP/WebSockets et interface HTML/CSS/JS reliée à MySQL.",
    longDescription: `
**Objectif**
- Concevoir une messagerie simple permettant aux utilisateurs d'échanger en temps réel.
- Gérer l'authentification, les salons et l'affichage instantané des messages.

**Stack et rôle**
- Back-end PHP avec WebSockets pour la communication temps réel.
- Base MySQL (administrée via PHPMyAdmin) pour stocker les messages et comptes utilisateurs.
- Front-end HTML, CSS et JavaScript pour l'UI de chat et les notifications live.

**Apprentissages**
- Compréhension des WebSockets (gestion des connexions et diffusion des messages).
- Structuration d'une base MySQL pour des flux temps réel.
- Mise en place de tests manuels et de scénarios d'erreur (déconnexions, rafraîchissement de page).
`,
    year: "2025",
    tech: ["PHP", "WebSockets", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/marwanchkiriba/AppChat",
    github: "https://github.com/marwanchkiriba/AppChat",
    featured: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "stage-fullstack-2026",
    title: "Ce que je cherche pour mon stage full stack (mars 2026)",
    excerpt:
      "Stage de 4 à 6 mois pour consolider mes compétences front/back, API, tests et DevOps.",
    content: `
# Stage full stack de mars 2026

Je prépare ma 3e année de BUT Informatique à l'IUT de Villetaneuse et je cherche un stage de 4 à 6 mois à partir de mars 2026.

## Ce que je veux pratiquer
- Développement web ou mobile (front et back).
- Conception d'API, bases de données et tests automatisés.
- Bonne hygiène de code (revues, CI/CD, documentation).

## Ce que j'apporte
- Solide base en PHP, Java, JavaScript/Node.js, SQL et React/Tailwind.
- Expériences concrètes sur un SaaS de gestion de parc auto et une app de chat temps réel.
- Envie de travailler en équipe, de documenter et de livrer régulièrement.
`,
    date: "2025-10-01",
    readTime: "4 min",
    tags: ["stage", "full stack", "BUT Informatique"],
    featured: true,
  },
  {
    slug: "stack-outils-but-info",
    title: "Stack et outils que j’utilise au quotidien",
    excerpt:
      "Panorama rapide de ma stack : PHP, Java, JavaScript/Node.js, React, SQL, Docker et outils de collaboration.",
    content: `
# Stack et outils

Voici les technos que j'utilise le plus pendant mes projets et mon BUT Informatique.

## Langages
- PHP, Java, JavaScript, Python.
- SQL (MySQL, PostgreSQL) pour la modélisation et les requêtes.

## Front
- React, Vue.js et Tailwind CSS selon les besoins.
- Intégration HTML/CSS soignée pour des interfaces réactives.

## Back
- Node.js/Express pour les API.
- WebSockets pour le temps réel.
- Tests unitaires avec JUnit côté Java.

## Base de données et outils
- MySQL, PostgreSQL, Redis, MongoDB selon les cas d'usage.
- Docker, Git/GitHub, VirtualBox, Wireshark, suite Office/365 et TeamViewer pour la collaboration.
`,
    date: "2025-09-15",
    readTime: "5 min",
    tags: ["stack", "outils", "BUT Informatique"],
    featured: true,
  },
];

export async function enqueueEvent(event: any) {
  // Placeholder for future event tracking; currently unused.
  console.debug("enqueueEvent (noop)", event);
}
