import { Logo } from "@/icons/icons";
import styles from "./page.module.css";
import MainPage from "@/pages/main-page/main-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mantis - Купить 1С в Мелитополе, Бердянске, ДНР, ЛНР, и Крыму! Заказать на сайте.",
  description:
    "У нас можно купить 1С под ключ в Запорожской области, Херсонской области и Крыму.",
  openGraph: {
    images: "/Cover.jpg",
  },
};

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}
