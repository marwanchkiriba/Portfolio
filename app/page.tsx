
import HeaderIntro from "@/components/home/HeaderIntro";
import JobItem from "@/components/home/JobItem";
import ProjectsList from "@/components/home/ProjectsList";
import ThoughtsList from "@/components/home/ThoughtsList";
import ConnectSection from "@/components/home/ConnectSection";
import FooterMain from "@/components/home/FooterMain";
import HomeClient from "@/components/home/HomeClient";

export default function Home() {

  const jobs = [
    {
      year: "2025",
      role: "SDE Intern",
      company: "Giftlaya | Kolkata, India (On-Site)",
      description: [
        "Designed and optimized scalable database schemas using PostgreSQL and Prisma.",
        "Revamped the platform’s UI with Next.js and Tailwind, improving usability and responsiveness.",
        "Developed secure, high-performance REST APIs with NestJS.",
        "Enhanced system reliability and reduced load times through backend optimizations.",
        "Contributed to increased user retention through improved UX and system performance.",
      ],
      tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    },
    {
      year: "2024",
      role: "Freelance",
      company: "Full-Stack Development | India (Remote)",
      description: [
        "Developed responsive SEO restaurant site increasing visibility and engagement.",
        "Optimized course APIs with pagination and indexing boosting performance.",
        "Refactored backend logic to fix slow data processing, introducing targeted query optimization.",
        "Redesigned platform UX to address confusing user flows, that increased user retention.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Shadcn UI",
      ],
    },
  ];

  const projects = [
     {
      name: "Pixel Art Editor — Minecraft-Style Pixel Art Canvas",
      description:
        "A lightweight, browser-based pixel art editor optimized for creating Minecraft-style sprites and profile pictures. Built with a fast, keyboard-friendly canvas interface using Next.js, Tailwind, and shadcn UI, and deployed seamlessly on Vercel.",
       tech: [
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "TypeScript",
    "Vercel",
    "Canvas API"
  ],
      link: "https://pixel-art-editor-chi.vercel.app/",
      year: "2025",
      slug: "pixel-art-editor",
    },
    {
      name: "MindSketch — Real-time Collaborative Diagramming",
      description:
        "A real-time collaborative diagramming tool enabling multiple users to draw simultaneously with low-latency WebSocket sync, intuitive canvas UI, and seamless multi-user state accuracy (99%). Deployed on Azure with CI/CD pipelines.",
      tech: [
        "Next.js",
        "Node.js",
        "WebSocket",
        "Redis",
        "Canvas API",
        "Turborepo",
        "Tailwind CSS",
        "Azure",
      ],
      link: "https://mindsketch.abhoy.xyz/",
      year: "2025",
      slug: "mindsketch-collaborative-diagramming",
    },
    {
      name: "WriteX — AI-Powered Content Generation Platform",
      description:
        "AI-driven writing platform that boosted content creation efficiency by 30%. Includes 20+ specialized templates, SEO-optimized text generation using Gemini AI, Razorpay payments, and a robust content management system.",
      tech: [
        "Next.js",
        "Next-Auth",
        "Gemini AI",
        "Razorpay",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      link: "https://writex-sand.vercel.app/dashboard",
      year: "2024",
      slug: "aipowered-content-generation-platform",
    },
   
  ];

  const thoughts = [
    {
      title: "Building Intelligent RAG Pipelines with LangGraph and FastAPI: A Practical Guide for Modern AI Backends",
      excerpt:
        "Learn how Retrieval-Augmented Generation (RAG) combined with LangGraph and FastAPI helps you build reliable, production-ready AI systems with smarter reasoning, structured workflows, and blazing-fast APIs.",
      date: "july 2025",
      readTime: "10 min",
      slug: "building-rag-pipelines-with-langgraph-fastapi",
    },
    {
      title:
        "Devops for developers: Smooth deployment workflows with CI/CD using Github Actions",
      excerpt:
        "A practical guide for developers who want to build reliable CI/CD pipelines using GitHub Actions, automate deployments, and ship code to production with confidence.",
      date: "March 2025",
      readTime: "12 min",
      slug: "devops-for-developers-smooth-deployment-workflows-github-actions",
    },
    {
      title:
        "Real-Time Collaboration: Backend Communication POV & Redis Worker System Design",
      excerpt:
        "A deep dive into how real-time collaboration systems work under the hood, how Redis-backed queues reduce latency, and how worker architectures ensure fast and reliable data persistence.",
      date: "March 2025",
      readTime: "15 min",
      slug: "real-time-collaboration-backend-communication-redis-worker-design",
    },
    {
      title:
        "JavaScript Event Loop Explained: How It Really Works Under the Hood (and Why the Task Queue Matters)",
      excerpt:
        "A deep, beginner-friendly yet technically precise explanation of how JavaScript processes asynchronous operations using the event loop, task queues, microtasks, and browser APIs.",
      date: "May 2025",
      readTime: "14 min",
      slug: "javascript-event-loop-task-queue-deep-dive",
    },
  ];

  const socials = [
    { name: "GitHub", handle: "@abhoy21", url: "#" },
    {
      name: "X (Formerly Twitter)",
      handle: "@kakarottwts",
      url: "https://x.com/kakarottwts",
    },
    {
      name: "Call / Whatsapp",
      handle: "@+91 8583007404",
      url: "https://wa.me/+918583007404",
    },
    {
      name: "LinkedIn",
      handle: "@abhoy-sarkar",
      url: "https://www.linkedin.com/in/abhoy-sarkar/",
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
              <h2 className="text-3xl sm:text-4xl font-medium">
                Selected Work
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                2024 - {new Date().getFullYear()}
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

        <section
          id="thoughts"
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <ThoughtsList posts={thoughts} />
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
