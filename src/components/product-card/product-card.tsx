"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./product-card.module.css";
import Image from "next/image";
import classNames from "classnames";

interface IProdctCard {
  name: string;
  description: string;
  tag?: string;
  image: string;
  price?: number;
  className?: string;
}

const ProductCard: React.FC<IProdctCard> = ({
  name,
  description,
  tag,
  image,
  price,
  className,
}) => {
  return (
    <div className={classNames(styles.product_card, className)}>
      {tag && (
        <div className={styles.product_tag}>
          <Typography>Веб-разработка</Typography>
        </div>
      )}

      <div className={styles.product_cardImageContainer}>
        <Image
          className={styles.product_cardImage}
          src={`https://cms.mantis-185.ru${image}`}
          alt=""
          width={800}
          height={800}
        />
      </div>
      <div className={styles.card_info}>
        {price && (
          <Typography
            variant="span"
            outline="bold"
            register="20"
            className={styles.product_card_price}
          >
            {price} ₽
          </Typography>
        )}
        <Typography
          outline="bold"
          register="20"
          variant="p"
          className={styles.card_info__title}
        >
          {name}
        </Typography>
        <Typography outline="regular" register="16" variant="p">
          {description.slice(0, 60)}...
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
