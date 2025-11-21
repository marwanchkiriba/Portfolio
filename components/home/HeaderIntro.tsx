"use client";

import Link from "next/link";
import { FileText, Github, File } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export default function HeaderIntro() {
  return (
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
            Software Developer building fast and scalable digital products using{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span>,{" "}
            <span className="text-foreground">Node.js</span>,and{" "}
            <span className="text-foreground">PostgreSQL</span>.
          </p>

          <div className="flex flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"mailto:sarkar.ab07@gmail.com"}>
                    Available for work
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  sarkar.ab07@gmail.com
                </TooltipContent>
              </Tooltip>
            </div>
            <div>India</div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
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
              <TooltipContent side="top">Open resume (new tab)</TooltipContent>
            </Tooltip>

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
              <TooltipContent side="top">Browse blog posts</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
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
      </div>
    </div>
  );
}
