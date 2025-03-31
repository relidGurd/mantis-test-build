import styles from "./page.module.css";
import MainPage from "@/pages/main-page/main-page";
import "swiper/css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}
