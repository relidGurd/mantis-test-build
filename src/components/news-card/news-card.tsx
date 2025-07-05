"use client";

import classNames from "classnames";
import styles from "./news-card.module.css";
import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";
import { EyeIcon } from "@/icons/icons";

interface INewsCard {
  title: string;
  description: string;
  img: string;
  date: string;
}

const NewsCard: React.FC<INewsCard> = ({ title, description, img, date }) => {
  return (
    <div className={classNames(styles.news_card_container)}>
      <div className={styles.news_card_info_container}>
        <div className={styles.news_card_info}>
          <Typography variant="h3" outline="bold" register="20">
            {title}
          </Typography>
          <Typography
            className={styles.news_card_desription}
            variant="p"
            outline="regular"
            register="16">
            {description}
          </Typography>
          <div className={styles.news_card_more}>
            <Typography variant="span">{date}</Typography>
            <div className={styles.news_card_views}>
              <EyeIcon />
              <Typography>420</Typography>
            </div>
          </div>
        </div>
        <div>
          <span className={styles.news_card_tag}>Тэг</span>
        </div>
      </div>
      <div className={styles.news_card_img_container}>
        <Image
          className={styles.news_card_img}
          src={`https://cms.mantis-185.ru${img}`}
          width={1800}
          height={600}
          alt=""
        />
      </div>
    </div>
  );
};

export default NewsCard;
