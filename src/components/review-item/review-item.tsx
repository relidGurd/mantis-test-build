import Image from "next/image";
import styles from "./review-item.module.css";
import Typography from "@/ui-kit/typography/typography";
import Link from "next/link";
import classNames from "classnames";

interface IReviewItem {
  size: "small" | "big";
}

const ReviewItem: React.FC<any> = ({ size }) => {
  const reviewItem = styles[`size-${size}`];

  return (
    <div
      className={classNames(reviewItem, styles.basic_reviewItem, classNames)}
    >
      <div className={styles.review_item__mainInfo}>
        <div className={styles.review_item__imgContainer}>
          <Image
            className={styles.review_item__imgContainer}
            src={"/demo-user.png"}
            width={150}
            alt=""
            height={150}
          />
        </div>
        <div>
          <Typography register="32" outline="semibold">
            Иван О.
          </Typography>
          <Typography register="18" outline="regular">
            Менеджер проекта
          </Typography>
        </div>
      </div>
      <Typography className={styles.reviewText} register="18" outline="regular">
        Мы — IT-компания, специализирующаяся на комплексных решениях для бизнеса
        и госсектора. Партнёры ведущих разработчиков программного обеспечения
        и производителей оборудования. Наша цель — обеспечить
        высокотехнологичную поддержку вашего бизнеса,
      </Typography>
      <Link href={"/"}>Читать весь отзыв</Link>
    </div>
  );
};

export default ReviewItem;
