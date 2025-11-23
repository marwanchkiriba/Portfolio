import React from "react";
import ConnectSection from "@/components/home/ConnectSection";

export default function AboutPage() {
  const socials = [
    { name: "GitHub", handle: "@abhoy21", url: "https://github.com/abhoy21" },
    { name: "X", handle: "@kakarottwts", url: "https://x.com/kakarottwts" },
    {
      name: "WhatsApp",
      handle: "+91 85830 07404",
      url: "https://wa.me/+918583007404",
    },
    {
      name: "LinkedIn",
      handle: "abhoy-sarkar",
      url: "https://www.linkedin.com/in/abhoy-sarkar/",
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

        <header className="mb-12">
          <h1
            id="about-heading"
            className="text-4xl sm:text-5xl font-medium tracking-tight"
          >
            About me
          </h1>

          <div className="mt-4 flex flex-wrap gap-2 items-center" aria-hidden>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Software Developer — India
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Software Engineer for hire
            </span>
            <span className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg">
              Full-Stack Developer for hire
            </span>
          </div>

          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
            I'm a software developer based in India and available for hire as a
            software engineer or full‑stack developer. I build practical web
            systems, clean APIs, dependable backends, and responsive frontends,
            prioritizing accessibility, predictable performance, and
            maintainable code.
          </p>
        </header>

        <section id="intro" className="mb-12" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-semibold">
            Introduction
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I build and ship web applications that solve real problems. My work
            spans frontend and backend: user interfaces with Next.js and
            TypeScript, APIs and services in Node.js or Go, and resilient
            deployments on cloud platforms such as AWS and Azure. I focus on
            readable code, reliable tests, and automation so work can be
            released with confidence.
          </p>
        </section>

        <section
          id="what-i-do"
          className="mb-12"
          aria-labelledby="what-i-do-heading"
        >
          <h2 id="what-i-do-heading" className="text-2xl font-semibold">
            What I do
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I focus on turning ideas into reliable products. That usually means
            defining clear API contracts, modeling data, implementing features
            on the frontend and backend, and automating builds and releases so
            teams can move quickly without constant firefighting.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Full-stack development
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              API design & development
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Performance & scalability
            </li>
            <li className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Devops, monitoring & CI/CD
            </li>
          </ul>
        </section>

        <section
          id="beliefs"
          className="mb-12"
          aria-labelledby="beliefs-heading"
        >
          <h2 id="beliefs-heading" className="text-2xl font-semibold">
            What I believe in
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Build with intention: focus on clear architecture, predictable
              data flows, and code that is easy to understand and improve over
              time.
            </p>
            <p>
              Communicate early: share decisions, constraints, and progress with
              the team to keep work aligned and avoid unnecessary complexity.
            </p>
            <p>
              Improve continuously: use feedback from users, performance data,
              and real-world issues to refine systems and deliver dependable
              software.
            </p>
          </div>
        </section>

        <section
          id="who-with"
          className="mb-12"
          aria-labelledby="who-with-heading"
        >
          <h2 id="who-with-heading" className="text-2xl font-semibold">
            Who I work with
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I enjoy working with small engineering teams and product-focused
            startups where engineering discipline matters. I collaborate closely
            with product managers and engineering leads to deliver features that
            are well-instrumented, testable, and easy to maintain.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Startup teams
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Engineering teams
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Backend & infrastructure
            </div>
            <div className="p-4 bg-accent/45 backdrop-blur border border-border rounded-lg">
              Frontend teams
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="mb-12"
          aria-labelledby="approach-heading"
        >
          <h2 id="approach-heading" className="text-2xl font-semibold">
            A little about my approach
          </h2>
          <ol className="mt-4 list-decimal ml-5 space-y-3 text-muted-foreground leading-relaxed">
            <li>
              Start by understanding the people who will use the product and the
              business constraints around it, this keeps implementations
              focused.
            </li>
            <li>
              Keep interfaces and data models explicit. Predictable contracts
              reduce bugs and make future changes safe.
            </li>
            <li>
              Automate delivery: CI/CD pipelines and repeatable cloud
              deployments so teams can release reliably and frequently.
            </li>
            <li>
              Observe and iterate: use logs and metrics to find fragility and
              prioritize fixes that improve reliability for real users.
            </li>
          </ol>
        </section>

        <section id="cta" className="py-8" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-semibold">
            Available for hire
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hiring a software engineer or full‑stack developer? I'm open to
            full-time roles and short-term contracts. I prefer conversations
            that start with the problem you want to solve, reach out and we can
            schedule a quick call to see if we're a fit.
          </p>

          <div className="mt-8">
            <ConnectSection socials={socials} />
          </div>
        </section>
      </main>
    </div>
  );
}
