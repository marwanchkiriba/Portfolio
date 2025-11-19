"use client";

import { useState } from "react";
import type { BlogContentBlock } from "@/lib/data";

interface BlogContentRendererProps {
  blocks: BlogContentBlock[];
}

export function BlogContentRenderer({ blocks }: BlogContentRendererProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content || "");
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500); // reset after 1.5s
  };

  return (
    <article className="space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className={`font-medium text-foreground ${
                  block.level === 2
                    ? "text-2xl sm:text-3xl"
                    : "text-xl sm:text-2xl"
                }`}
              >
                {block.content}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {block.content}
              </p>
            );

          case "code":
            return (
              <div
                key={index}
                className="relative group rounded-lg border border-border bg-muted/30 overflow-hidden"
              >
                {/* Language badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-sm border border-border/50 rounded">
                    {block.language}
                  </span>
                </div>

                {/* Copy button */}
                <button
                  onClick={() => handleCopy(block.content || "", index)}
                  className={`
                    absolute top-2 left-2 z-10 p-2 rounded-md text-muted-foreground 
                    transition-all duration-200 transform bg-background/80 backdrop-blur-sm border border-border/50 
                    hover:text-foreground hover:border-muted-foreground/50 hover:scale-105 hover:shadow-sm
                    active:scale-95
                    ${
                      copiedIndex === index
                        ? "text-green-500 scale-110 border-green-500/50"
                        : "scale-100"
                    }
                  `}
                  title="Copy code"
                >
                  <div className="relative w-4 h-4">
                    {copiedIndex === index ? (
                      <svg
                        className="w-4 h-4 animate-in fade-in zoom-in duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Code content */}
                <pre className="p-4 pt-12 overflow-x-auto">
                  <code className="text-sm font-mono text-muted-foreground font-semibold whitespace-pre-wrap wrap-break-word">
                    {block.content}
                  </code>
                </pre>
              </div>
            );

          case "list":
            return (
              <ul key={index} className="space-y-3 list-none pl-0">
                {block.items?.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="text-foreground font-light shrink-0 mt-1">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
