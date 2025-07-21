import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/normalize.css";
import Footer from "@/layouts/footer/footer";
import Header from "@/layouts/header/header";
import "swiper/css";
import { getSiteMenu } from "@/api/site-menu/site-menu";
import qs from "qs";
import ScrollManager from "@/components/scroll-to-top/scroll-to-top";
export const metadata: Metadata = {
  title: "Mantis",
  description:
    "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
  openGraph: {
    title: "Mantis",
    description:
      "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
    url: "https://mantis-test-build.vercel.app",
    images: [
      {
        url: "https://mantis-test-build.vercel.app/open-g.jpg", // абсолютный URL
        width: 1200,
        height: 630,
        alt: "Mantis | Условия доставки",
      },
    ],
  },
};

const jura = Jura({ subsets: ["cyrillic"], weight: ["700", "400", "600"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteMenuQwery = qs.stringify({
    populate: {
      MenuBLocks: {
        populate: "*",
      },
    },
  });

  const { data } = await getSiteMenu(siteMenuQwery);

  return (
    <html lang="ru">
      <body className={jura.className}>
        <Header menu_list={data.MenuBLocks} />
        <ScrollManager />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
