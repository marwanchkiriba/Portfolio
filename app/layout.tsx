import Script from "next/script";
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
    "Marwan Chkiriba — Développeur Full Stack (BUT Informatique)",
  description:
    "Étudiant en 3e année de BUT Informatique à l’IUT de Villetaneuse. Développement full stack (PHP, JavaScript/Node.js, React, SQL) et disponible pour un stage de 4 à 6 mois dès mars 2026.",
  keywords: [
    "Développeur full stack",
    "BUT Informatique",
    "Stage développement",
    "Node.js",
    "PHP",
    "React",
    "PostgreSQL",
    "MySQL",
    "Java",
    "JavaScript",
  ],
  authors: [
    {
      name: "Marwan Chkiriba",
      url: "https://marwanchkiriba.dev",
    },
  ],
  creator: "Marwan Chkiriba",
  publisher: "Marwan Chkiriba",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://marwanchkiriba.dev"),
  alternates: {
    canonical: "https://marwanchkiriba.dev",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://marwanchkiriba.dev",
    siteName: "Portfolio Marwan Chkiriba",
    title:
      "Marwan Chkiriba — Développeur Full Stack (BUT Informatique)",
    description:
      "Portfolio de Marwan Chkiriba, développeur full stack (PHP, JavaScript/Node.js, React, SQL) en 3e année de BUT Informatique.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Marwan Chkiriba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marwan Chkiriba — Développeur Full Stack (BUT Informatique)",
    description:
      "Développement full stack (PHP, JavaScript/Node.js, React, SQL) et recherche de stage dès mars 2026.",
    images: ["/og-image.png"],
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
  const personSchema = generateStructuredData("person", {
    name: "Marwan Chkiriba",
    url: "https://marwanchkiriba.dev",
    email: "marwanchkiriba9@gmail.com",
    sameAs: [
      "https://github.com/marwanchkiriba",
      "https://marwanchkiriba.dev",
    ],
  });

  const websiteSchema = generateStructuredData("website", {
    name: "Portfolio Marwan Chkiriba",
    url: "https://marwanchkiriba.dev",
    description:
      "Portfolio de Marwan Chkiriba, développeur full stack (BUT Informatique).",
    authorName: "Marwan Chkiriba",
  });

  return (
    <html lang="fr" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* <AdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID!} /> */}
        {/* <AdSense pId={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID!} /> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
