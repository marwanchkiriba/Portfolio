// SEO utilities and metadata generation
export function generateProjectMetadata(project: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://felixmacaspac.com";
  const url = `${baseUrl}/projects/${project.slug}`;

  return {
    title: `${project.name} | Felix Macaspac Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: url,
      type: "article",
      images: [
        {
          url: project.image || "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.image || "/og-image.jpg"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateBlogMetadata(post: any) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://felixmacaspac.com";
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Felix Macaspac`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.date,
      authors: ["Felix Macaspac"],
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

export function generateStructuredData(
  type: "project" | "blog" | "organization",
  data: any,
) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://felixmacaspac.com";

  if (type === "project") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: data.name,
      description: data.description,
      author: {
        "@type": "Person",
        name: "Felix Macaspac",
      },
      datePublished: data.year,
      image: data.image,
      url: `${baseUrl}/projects/${data.slug}`,
      keywords: data.tech.join(", "),
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
        name: "Felix Macaspac",
      },
      datePublished: data.date,
      url: `${baseUrl}/blog/${data.slug}`,
      keywords: data.tags.join(", "),
    };
  }

  if (type === "organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Felix Macaspac",
      url: baseUrl,
      sameAs: [
        "https://github.com/felixmacaspac",
        "https://linkedin.com/in/felixmacaspac",
      ],
      jobTitle: "Frontend Developer",
      description: "HubSpot CMS Developer from Philippines",
    };
  }
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: any[];
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
