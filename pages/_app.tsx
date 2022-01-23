import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title={"Portfolio | Việt Anh Lê Hữu"}
        description="Trang portfolio cá nhân của Lê Hữu Việt Anh"
        openGraph={{
          type: "website",
          locale: "en",
          images: [
            {
              url: "https://lehuuvietanh.com/images/hero.png",
              alt: "Lê Hữu Việt Anh",
              type: "image/png",
            },
          ],
          title: "Portfolio | Việt Anh Lê Hữu",
          description: "Trang portfolio cá nhân của Lê Hữu Việt Anh",
          url: "https://lehuuvietanh.com",
          site_name: "vietanhlehuu",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
