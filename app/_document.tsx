import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preload" href="/styles/globals.css" as="style" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
