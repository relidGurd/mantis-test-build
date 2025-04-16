"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./product-card.module.css";
import Image from "next/image";

interface IProdctCard {
  name: string;
  description: string;
  tag?: string;
  image: string;
  price?: number;
}

const ProductCard: React.FC<IProdctCard> = ({
  name,
  description,
  tag,
  image,
  price,
}) => {
  return (
    <div className={styles.product_card}>
      {tag && (
        <div className={styles.product_tag}>
          <Typography>Веб-разработка</Typography>
        </div>
      )}

      <div className={styles.product_cardImageContainer}>
        <Image
          className={styles.product_cardImage}
          src={image}
          alt=""
          width={150}
          height={150}
        />
      </div>
      <div className={styles.card_info}>
        {price && <div>{price} ₽</div>}
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
