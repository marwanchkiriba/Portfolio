import { GoogleAnalytics } from "@next/third-parties/google";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Abhoy Sarkar — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
  description:
    "Abhoy Sarkar is a Software Developer specializing in Go, Next.js, Prisma and PostgreSQL. Explore practical projects, code samples, and DevOps tips for building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "Go Developer",
    "Next.js Developer",
    "React Developer",
    "Golang",
    "Node.js",
    "DevOps Engineer",
    "PostgreSQL",
    "React Native",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Abhoy Sarkar",
      url: "https://abhoy.xyz",
    },
  ],
  creator: "Abhoy Sarkar",
  publisher: "Abhoy Sarkar",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.abhoy.xyz"),
  alternates: {
    canonical: "https://www.abhoy.xyz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhoy.xyz",
    siteName: "Abhoy Sarkar Portfolio",
    title:
      "Abhoy Sarkar — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
    description:
      "Explore projects and engineering notes by Abhoy Sarkar — Software Developer focused on Go, Next.js, Prisma and PostgreSQL.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhoy Sarkar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Abhoy Sarkar — Software Developer (Typescript, Go, Next.js, Node.js, Postgresql)",
    description:
      "Software Developer building production-ready web apps with Go, Next.js, Prisma and PostgreSQL. See projects, notes and deployment tips.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData("organization", {
    name: "Abhoy Sarkar",
    url: "https://www.abhoy.xyz",
    email: "sarkar.ab07@gmail.com",
    sameAs: [
      "https://github.com/abhoy21",
      "https://in.linkedin.com/in/abhoy-sarkar",
      "https://www.youtube.com/shorts/nNH_S0kq3Sw?si=ezWg0XDpm-THAzJa",
    ],
  });

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
