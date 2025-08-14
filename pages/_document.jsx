import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* App icons */}
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />

          {/* SEO */}
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Retro - The ultimate music & utility bot with 20+ supported platforms. Enjoy seamless music without interruptions."
          />

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Retro" />
          <meta name="twitter:creator" content="@Retro" />

          {/* Open Graph Meta */}
          <meta property="og:url" content="https://retro.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Retro" />
          <meta
            property="og:description"
            content="Retro - The ultimate music & utility bot with 20+ supported platforms. Enjoy seamless music without interruptions."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Retro" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:site_name" content="Retro" />

          {/* Theme Color (Purple) */}
          <meta name="theme-color" content="#7C3AED" />

          {/* Fonts & Styles */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
