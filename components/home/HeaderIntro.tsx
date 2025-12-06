"use client";

import Link from "next/link";
import { FileText, Github } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export default function HeaderIntro() {
  return (
    <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
      <div className="lg:col-span-3 space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-2">
          <div className="text-sm text-muted-foreground font-mono tracking-wider">
            DÉVELOPPEUR FULL STACK / {new Date().getFullYear()}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight">
            Marwan <span className="text-muted-foreground">Chkiriba</span>
          </h1>
        </div>

        <div className="space-y-6 max-w-md">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Étudiant en 3e année de BUT Informatique (IUT de Villetaneuse). Je
            construis des applications web et mobiles full stack avec{" "}
            <span className="text-foreground">PHP</span>,{" "}
            <span className="text-foreground">JavaScript/Node.js</span>,{" "}
            <span className="text-foreground">React</span> et{" "}
            <span className="text-foreground">SQL</span>. Disponible pour un
            stage de 4 à 6 mois dès mars 2026.
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/about-me" className="underline ml-1 text-sm">
                  En savoir plus.
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                Parcours, compétences et informations de contact
              </TooltipContent>
            </Tooltip>
          </p>

          <div className="flex flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"mailto:marwanchkiriba9@gmail.com"}>
                    Stage full stack dès mars 2026
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  marwanchkiriba9@gmail.com
                </TooltipContent>
              </Tooltip>
            </div>
            <div>Le Blanc-Mesnil, France</div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/cv-marwan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-foreground rounded-lg hover:border-muted-foreground/50 text-sm text-background transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  CV
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Ouvrir le CV (nouvel onglet)</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  className="flex-1 px-4 py-2 rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2 bg-accent"
                >
                  <Github className="w-4 h-4" />
                  Projets
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">Voir les projets</TooltipContent>
            </Tooltip>

          </div>
        </div>
      </div>

      {/* <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">
            PREVIOUSLY
          </div>
          <div className="space-y-2">
            <div className="text-foreground">SDE Intern</div>
            <div className="text-muted-foreground">@ Giftlaya</div>
            <div className="text-xs text-muted-foreground">
              May 2025 — August 2025
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Node.js",
              "Go",
              "PostgreSQL",
              "Prisma",
              "Redis",
              "AWS",
              "WebSockets",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div> */}

      <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">
            CE QUE J’AIME FAIRE
          </div>
          <div className="space-y-2">
            <div className="text-foreground">Construire des produits utiles</div>
            <div className="text-muted-foreground">
              De l’idée à la mise en prod : conception, API, base de données,
              tests et déploiement.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
          <div className="flex flex-wrap gap-2">
            {[
              "PHP / JavaScript / Java",
              "Node.js & Express",
              "React / Tailwind CSS",
              "MySQL & PostgreSQL",
              "API REST & WebSockets",
              "Tests & Qualité",
              "Docker & outils DevOps",
            ].map((service) => (
              <span
                key={service}
                className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
