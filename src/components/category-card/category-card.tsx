import Typography from "@/ui-kit/typography/typography";
import styles from "./category-card.module.css";
import Button from "@/ui-kit/button/button";
import Image from "next/image";

interface ICategory {
  title: string;
  description: string;
  icon?: string;
}

const CategoryCard: React.FC<ICategory> = ({ title, description, icon }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCard_info}>
        {icon && (
          <div>
            <Image src={"/Subtract.svg"} alt="" width={56} height={56} />
          </div>
        )}

        <div>
          <Typography register="20" outline="bold">
            Услуга
          </Typography>
          <Typography
            className={styles.categoryCard_description}
            register="16"
            outline="regular"
          >
            Процессы, обеспечиваем безопасность и упрощаем управление
          </Typography>
        </div>
      </div>
      <div className={styles.categoryCard_buttonContainer}>
        <Button
          className={styles.categoryCard_button}
          color="greenButton"
          label="Подробнее"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
