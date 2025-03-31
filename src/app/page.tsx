import Image from "next/image";
import styles from "./page.module.css";
import Typography from "@/ui-kit/typography/typography";
import MainPage from "@/pages/main-page/main-page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}
