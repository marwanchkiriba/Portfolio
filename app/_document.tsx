import { Html, Head, Main, NextScript } from "next/document";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload LCP image */}
        <link rel="preload" as="image" href="/og-image.jpg" />

        {/* Inline minimal critical CSS to render above-the-fold content quickly.
            For best results generate a production critical CSS file and inject it here. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* critical above-the-fold styles (minimal) */
          html,body{height:100%;margin:0}
          :root{color-scheme:light dark}
          body{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}
          .min-h-screen{min-height:100vh}
          .bg-background{background:var(--background)}
          .text-foreground{color:var(--foreground)}
        `,
          }}
        />

        {/* Preload stylesheet and swap to stylesheet on load (onload trick injected as raw HTML for compatibility) */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <link rel="preload" href="/styles/globals.css" as="style" onload="this.rel='stylesheet'">
          <noscript><link rel="stylesheet" href="/styles/globals.css"></noscript>
        `,
          }}
        />

        {/* Lazy-load Google Analytics after the page is idle to avoid blocking LCP */}
        {GA_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){if('requestIdleCallback' in window){requestIdleCallback(function(){var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}');});}else{window.addEventListener('load',function(){var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';s.async=true;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}');});}})();`,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
