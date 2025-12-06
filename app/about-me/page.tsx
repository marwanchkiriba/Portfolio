"use client";
import React from "react";
import ConnectSection from "@/components/home/ConnectSection";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
  const socials = [
    {
      name: "GitHub",
      handle: "@marwanchkiriba",
      url: "https://github.com/marwanchkiriba",
    },
    {
      name: "E-mail",
      handle: "marwanchkiriba9@gmail.com",
      url: "mailto:marwanchkiriba9@gmail.com",
    },
    {
      name: "WhatsApp",
      handle: "+33 6 62 89 56 17",
      url: "https://wa.me/33662895617",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main
        className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-12"
        aria-labelledby="about-heading"
      >
        <a className="sr-only sr-only-focusable" href="#main-content">
          Skip to content
        </a>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Retour"
        >
          <ChevronLeft className="h-5 w-5" />
          Retour
        </button>

        <header className="mb-12">
          <h1
            id="about-heading"
            className="text-4xl sm:text-5xl font-medium tracking-tight"
          >
            À propos
          </h1>

          <div className="mt-4 flex flex-wrap gap-2 items-center" aria-hidden>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Développeur full stack — Le Blanc-Mesnil
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              BUT Informatique (IUT de Villetaneuse)
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Stage 4-6 mois dès mars 2026
            </span>
          </div>

          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            Étudiant en 3e année de BUT Informatique à l’IUT de Villetaneuse
            (Sorbonne Paris Nord). Je développe des applications web full stack
            (PHP, JavaScript/Node.js, React, SQL) et je cherche un stage de 4 à
            6 mois à partir de mars 2026 pour progresser sur le front, le back,
            les API, les bases de données et les tests.
          </p>
        </header>

        <section id="intro" className="mb-12" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-semibold">
            Introduction
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            J’aime travailler sur l’ensemble de la chaîne : interfaces
            réactives, API robustes, modèles de données clairs et déploiements
            fiables. Mon objectif est d’intégrer une équipe qui me permette de
            consolider mes bases en développement web/mobile, QA et DevOps tout
            en livrant des fonctionnalités utiles.
          </p>
        </section>

        <section
          id="what-i-do"
          className="mb-12"
          aria-labelledby="what-i-do-heading"
        >
          <h2 id="what-i-do-heading" className="text-2xl font-semibold">
            Compétences clés
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Les technos que je pratique le plus pendant mon BUT et mes projets
            personnels.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Front-end : React, Tailwind CSS, Astro, Vue.js
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Back-end : Node.js/Express, PHP, Java, WebSockets
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Bases de données : MySQL, PostgreSQL, Redis, MongoDB
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Outils : Docker, Git/GitHub, tests (JUnit), Wireshark
            </li>
          </ul>
        </section>

        <section
          id="who-with"
          className="mb-12"
          aria-labelledby="who-with-heading"
        >
          <h2 id="who-with-heading" className="text-2xl font-semibold">
            Environnement recherché
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Une équipe qui combine bonnes pratiques et accompagnement pour un
            stagiaire : revues de code, échanges techniques et mise en production
            régulière.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Produits web ou mobiles
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              API, bases de données, temps réel
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Qualité, tests, sécurité
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Déploiement et CI/CD
            </div>
          </div>
        </section>

        <section id="cta" className="py-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-semibold">
            Disponible pour un stage
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Je recherche un stage de 4 à 6 mois à partir de mars 2026 en
            développement full stack. Si vous avez des besoins sur du front/back,
            des API ou du temps réel, je serai ravi d’en discuter.
          </p>

          <div className="mt-8">
            <ConnectSection socials={socials} />
          </div>
        </section>
      </main>
    </div>
  );
}
