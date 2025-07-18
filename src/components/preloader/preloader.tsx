import { PreloaderGear } from "@/icons/icons";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.test_loading}>
      <div className={styles.test_loading__visual}>
        <PreloaderGear />
      </div>
    </div>
  );
};

export default Preloader;
