import { Logo } from "@/icons/icons";
import styles from "./page.module.css";
import MainPage from "@/pages/main-page/main-page";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}
