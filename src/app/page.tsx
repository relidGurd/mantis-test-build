import MainPage from "@/pages/main-page/main-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mantis - Купить 1С в Мелитополе, Бердянске, ДНР, ЛНР, и Крыму! Заказать на сайте.",
  description:
    "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
  openGraph: {
    title:
      "Mantis - Купить 1С в Мелитополе, Бердянске, ДНР, ЛНР, и Крыму! Заказать на сайте.",
    description:
      "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
    url: "https://mantis-test-build.vercel.app",
    images: [
      {
        url: "https://mantis-test-build.vercel.app/open-g.jpg", // абсолютный URL
        width: 1200,
        height: 630,
        alt: "Mantis - Купить 1С в Мелитополе",
      },
    ],
  },
};

export default async function Home() {
  return <MainPage />;
}
