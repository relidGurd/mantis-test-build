import styles from "./page.module.css";
import MainPage from "@/pages/main-page/main-page";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/programs", {
    cache: "no-store",
  });
  const data = await res.json();

  console.log(data);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}
