
import HeaderIntro from "@/components/home/HeaderIntro";
import JobItem from "@/components/home/JobItem";
import ProjectsList from "@/components/home/ProjectsList";
import ConnectSection from "@/components/home/ConnectSection";
import FooterMain from "@/components/home/FooterMain";
import HomeClient from "@/components/home/HomeClient";

export default function Home() {
  const jobs = [
    {
      year: "2026",
      role: "Recherche stage développeur full stack (4-6 mois)",
      company:
        "BUT Informatique — IUT de Villetaneuse (Sorbonne Paris Nord)",
      description: [
        "Disponible dès mars 2026 pour un stage de 4 à 6 mois en développement full stack.",
        "Intérêt pour le web et le mobile : front-end, back-end, API, tests, sécurité et DevOps.",
        "Autonome, curieux et motivé pour rejoindre une équipe technique dynamique.",
      ],
      tech: ["TypeScript", "Node.js", "React", "Docker"],
    },
    {
      year: "2025",
      role: "Stagiaire informatique",
      company: "RESOBURO — stage (mars à avril 2025)",
      description: [
        "Configurations et installations de services informatiques chez les clients.",
        "Assistance technique et diagnostic : réseaux, postes de travail, serveurs.",
        "Interventions terrain pour assurer la continuité de service.",
      ],
      tech: ["Support IT", "Réseau", "Sauvegarde", "Postes de travail"],
    },
    {
      year: "2021 - Aujourd'hui",
      role: "Employé polyvalent",
      company: "Lotfi Transport",
      description: [
        "Création et gestion des factures et des e-mails de l’entreprise.",
        "Organisation des priorités et communication quotidienne avec les clients.",
        "Méthodes transposables pour la gestion de projets informatiques.",
      ],
      tech: ["Organisation", "Relation client", "Office 365"],
    },
    {
      year: "2019",
      role: "Stagiaire informatique",
      company: "Mairie de Bobigny",
      description: ["Réparation et maintenance d’ordinateurs défectueux."],
      tech: ["Maintenance PC", "Support utilisateur"],
    },
  ];

  const projects = [
    {
      name: "SaaS — Gestion de parc automobile",
      description:
        "Application SaaS full-stack pour centraliser la gestion d’un parc automobile : véhicules, suivi et organisation.",
      tech: ["TypeScript", "Prisma", "PostgreSQL", "React", "Node.js"],
      link: "https://github.com/marwanchkiriba/Saas_auto",
      year: "2025",
      slug: "saas-gestion-parc-auto",
    },
    {
      name: "Application de chat en temps réel",
      description:
        "Application de messagerie temps réel avec front HTML/CSS/JS et back-end PHP/WebSockets, base MySQL.",
      tech: ["PHP", "WebSockets", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/marwanchkiriba/AppChat",
      year: "2025",
      slug: "appchat-temps-reel",
    },
  ];

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
      name: "Call / WhatsApp",
      handle: "+33 6 62 89 56 17",
      url: "https://wa.me/33662895617",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <HomeClient />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header id="intro" className="min-h-screen flex items-center">
          <HeaderIntro />
        </header>

        <section id="work" className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-medium">Expériences</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2019 - {new Date().getFullYear()}
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job, index) => (
                <div key={index} className="space-y-8 sm:space-y-12">
                  <JobItem job={job} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ProjectsList projects={projects} />
        </section>

        <section id="connect" className="py-20 sm:py-32">
          <ConnectSection socials={socials} />
        </section>

        <FooterMain />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
