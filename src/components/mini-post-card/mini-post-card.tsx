"use client";
import styles from "./mini-post-card.module.css";
import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";

interface IPostItem {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const MiniPostCard: React.FC<IPostItem> = ({
  title,
  description,
  image,
  tag,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <Image
          className={styles.cardImage}
          src={`https://cms.mantis-185.ru${image}`}
          width={300}
          height={152}
          alt=""
        />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.postTag}>{tag}</span>
        <Typography className={styles.cardTitle}>{title}</Typography>
        <Typography className={styles.cardDescription}>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default MiniPostCard;
