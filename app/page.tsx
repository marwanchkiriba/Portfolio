"use client";

import { Arrow } from "@radix-ui/react-context-menu";
import {
  ArrowUpRight,
  ChevronsDownUp,
  ChevronsUpDown,
  File,
  FileText,
  Github,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const JobItem = ({ job, index }: { job: any; index: number }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        key={index}
        className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
      >
        <div className="lg:col-span-2">
          <div className="text-xl sm:text-2xl font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">
            {job.year}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <div>
            <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
            <div className="text-muted-foreground font-medium leading-tight">
              {job.company}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {job.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="p-1 text-xs text-muted-foreground rounded-lg bg-accent/45 backdrop-blur-lg border border-dashed border-border group-hover:border-muted-foreground/50 transition-colors duration-500 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <div className="">
              <Collapsible open={open} onOpenChange={setOpen}>
                <CollapsibleTrigger asChild>
                  <button className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <span>Details</span>
                    {open ? (
                      <ChevronsDownUp className="w-4 h-4" />
                    ) : (
                      <ChevronsUpDown className="w-4 h-4" />
                    )}
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-3">
                  <ul className="text-muted-foreground font-medium text-sm leading-relaxed list-disc list-inside space-y-2">
                    {job.description.map((point: string, idx: number) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 self-start flex flex-wrap justify-start lg:justify-end gap-2" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "thoughts", "connect"].map(
            (section) => (
              <div key={section} className="relative group">
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-foreground text-background px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </div>
                  <div className="absolute right-full mr-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-foreground"></div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-2 h-8 rounded-full transition-all duration-500 ${
                    activeSection === section
                      ? "bg-foreground"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Navigate to ${section}`}
                  onMouseEnter={() => setHoveredSection(section)}
                  onMouseLeave={() => setHoveredSection(null)}
                />
              </div>
            )
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  SOFTWARE DEVELOPER / {new Date().getFullYear()}
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight">
                  Abhoy <span className="text-muted-foreground">Sarkar</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Developer building fast and scalable digital products
                  using <span className="text-foreground">Next.js</span>,{" "}
                  <span className="text-foreground">TypeScript</span>, and{" "}
                  <span className="text-foreground">Node.js</span>,{" "}
                  <span className="text-foreground">PostgreSQL</span>.
                </p>

                <div className="flex flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>India</div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {/* Resume Button */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://drive.google.com/file/d/1xWa-NjprYyaIU_TGWh_3RB2bctahn6aI/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-foreground rounded-lg hover:border-muted-foreground/50 text-sm text-background transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Resume
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Open resume (new tab)
                    </TooltipContent>
                  </Tooltip>

                  {/* Projects Button */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/projects"
                        className="flex-1 px-4 py-2 rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2 bg-accent"
                      >
                        <Github className="w-4 h-4" />
                        Projects
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">View projects</TooltipContent>
                  </Tooltip>

                  {/* Blog Button */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/blog"
                        className="max-sm:hidden flex-1 px-4 py-2 bg-foreground/5 backdrop-blur-xl border border-border rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2"
                      >
                        <File className="w-4 h-4" />
                        Read Blogs
                        <span className="sm:hidden">/ Articles</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Browse blog posts
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  {/* CURRENTLY */}
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
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
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
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32"
        >
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
              {[
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
              ].map((job, index) => (
                <div key={index} className="space-y-8 sm:space-y-12">
                  <JobItem key={index} job={job} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-medium">
                Featured Projects
              </h2>
              <div className="text-sm text-muted-foreground font-mono">
                SELECTED
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
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
                {
                  name: "Expense Tracker App — Mobile Personal Finance Manager",
                  description:
                    "Cross-platform mobile app for tracking income, expenses, and categorized transactions. Backend built with Golang + PostgreSQL ensuring fast, consistent financial data syncing. Delivered smooth UI using React Native (Expo).",
                  tech: [
                    "Golang",
                    "React Native",
                    "Expo",
                    "PostgreSQL",
                    "GORM",
                    "REST API",
                  ],
                  link: "https://youtube.com/shorts/nNH_S0kq3Sw?si=ezWg0XDpm-THAzJa",
                  year: "2025",
                  slug: "expense-tracker-mobile-app",
                },
              ].map((project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="group block p-4 sm:p-6 border-b border-border rounded-lg hover:border-muted-foreground/30 transition-all duration-700"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-700">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.year}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-700 shrink-0 mt-1 transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg text-muted-foreground group-hover:border-muted-foreground/30 transition-colors duration-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Projects Button */}
            <div className="flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/projects"
                    className="px-4 py-2 rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center gap-2 bg-accent"
                  >
                    All Projects
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">See all projects</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[3] = el;
          }}
          className="min-h-screen py-20 sm:py-32 lg:opacity-15"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-medium">
              Recent Thoughts
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Understanding Monorepo and Turborepo",
                  excerpt:
                    "A practical guide to Monorepos and how Turborepo supercharges development with caching, parallelization, and smart task scheduling.",
                  date: "Jan 2025",
                  readTime: "7 min",
                  slug: "understanding-monorepo-and-turborepo",
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
              ].map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Blog Button */}
            <div className="flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/blog"
                    className="px-4 py-2 bg-accent border border-border rounded-lg hover:border-muted-foreground/50 text-sm transition-all duration-300 hover:shadow-sm flex items-center gap-2"
                  >
                    More Blogs
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">More blog posts</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[4] = el;
          }}
          className="py-20 sm:py-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-medium">
                Let's Connect
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:sarkar.ab07@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">
                      sarkar.ab07@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@abhoy21", url: "#" },
                  {
                    name: "X (Formerly Twitter)",
                    handle: "@kakarottwts",
                    url: "https://x.com/kakarottwts",
                  },
                  {
                    name: "Call / Whatsapp",
                    handle: "@+91 8583007404",
                    url: "https://wa.me/8583007404",
                  },
                  {
                    name: "LinkedIn",
                    handle: "@abhoy-sarkar",
                    url: "https://www.linkedin.com/in/abhoy-sarkar/",
                  },
                ].map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        className="group p-4 bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                      >
                        <div className="space-y-2">
                          <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                            {social.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {social.handle}
                          </div>
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      Open {social.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Abhoy Sarkar. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 1.414zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
