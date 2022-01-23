import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/SEO/apple-touch-icon.png"
          />
          <link rel="icon" type="image/x-icon" href="/SEO/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/SEO/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/SEO/favicon-16x16.png"
          />
          <link rel="manifest" href="/SEO/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#0cabeb" />
          <meta name="theme-color" content="#0cabeb" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-lg leading-snug md:text-xl font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
