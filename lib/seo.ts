// SEO utilities and metadata generation
export function generateProjectMetadata(project: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.abhoy.xyz";
  const url = `${baseUrl}/projects/${project.slug}`;

  return {
    title: `${project.name} | Abhoy Sarkar Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: url,
      type: "article",
      images: [
        {
          url: project.image || "/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image || "/og-image.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogMetadata(post: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.abhoy.xyz";
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Abhoy Sarkar`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.date,
      authors: ["Abhoy Sarkar"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: url,
    },
  };
}

function toIsoDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString();
  const date = new Date(dateStr);
  // If the date string is just a year (e.g. "2025"), set it to Jan 1st
  if (/^\d{4}$/.test(dateStr)) {
    date.setMonth(0, 1);
  }
  if (isNaN(date.getTime())) {
    return new Date().toISOString();
  }
  return date.toISOString();
}

export function generateStructuredData(
  type: "project" | "blog" | "person" | "website" | "blog-list",
  data: any,
) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.abhoy.xyz";

  if (type === "project") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: data.name,
      description: data.description,
      author: {
        "@type": "Person",
        name: "Abhoy Sarkar",
      },
      datePublished: toIsoDate(data.year),
      image: data.image ? [data.image] : [`${baseUrl}/og-image.png`],
      url: `${baseUrl}/projects/${data.slug}`,
      keywords: data.tech ? data.tech.join(", ") : "",
    };
  }

  if (type === "blog") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.excerpt,
      author: {
        "@type": "Person",
        name: "Abhoy Sarkar",
        url: baseUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Abhoy Sarkar",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/og-image.png`,
        },
      },
      datePublished: toIsoDate(data.date),
      dateModified: toIsoDate(data.date),
      url: `${baseUrl}/blog/${data.slug}`,
      keywords: data.tags ? data.tags.join(", ") : "",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/blog/${data.slug}`,
      },
      image: data.image ? [data.image] : [`${baseUrl}/og-image.png`],
    };
  }

  if (type === "blog-list") {
    const itemListElement = data.posts.map((post: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${baseUrl}/blog/${post.slug}`,
      name: post.title,
      description: post.excerpt,
    }));

    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Blog - Abhoy Sarkar",
      description:
        "Articles and insights on web development, design systems, performance optimization, and modern web technologies.",
      url: `${baseUrl}/blog`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: itemListElement,
      },
    };
  }

  if (type === "person") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.name || "Abhoy Sarkar",
      url: data.url || baseUrl,
      sameAs: data.sameAs || [
        "https://github.com/abhoy21",
        "https://in.linkedin.com/in/abhoy-sarkar",
      ],
      jobTitle: data.jobTitle || "Software Developer",
      description:
        data.description ||
        "Software Developer specializing in Go, Next.js, Prisma and PostgreSQL.",
      email: data.email || "sarkar.ab07@gmail.com",
      image: data.image || `${baseUrl}/og-image.png`,
    };
  }

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: data.name || "Abhoy Sarkar Portfolio",
      url: data.url || baseUrl,
      description:
        data.description || "Portfolio of Abhoy Sarkar, a Software Developer.",
      author: {
        "@type": "Person",
        name: data.authorName || "Abhoy Sarkar",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export function generateBlogStaticParams(blogPosts: BlogPost[]) {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

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
  featured?: boolean;
}
// Generate static params for all projects
export async function generateStaticParams(project: Project[]) {
  return project.map((project) => ({
    slug: project.slug,
  }));
}

