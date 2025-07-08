import ReviewItem from "@/components/review-item/review-item";
import styles from "./more-reviews.module.css";
import Typography from "@/ui-kit/typography/typography";
import Button from "@/ui-kit/button/button";
import Image from "next/image";
import classNames from "classnames";

const MoreReviews = () => {
  return (
    <section className="main-container">
      <div className={styles.moreReviews_card}>
        <ReviewItem className={styles.review_card} size="big" />
        <div className={styles.moreReviews_reviewCheck}>
          <div className={styles.moreReviews_reviewCard}>
            <div className={styles.firstCard}></div>
            <div className={styles.card_contetn}>
              <div>
                <Typography outline="semibold" register="32">
                  Ещё больше отзывов о нашей компании
                </Typography>
                <div></div>
                <Typography outline="regular" register="16">
                  Читайте отзывы наших клиентов!
                </Typography>
              </div>
              <div>
                <Button color="greenButton" label="Смотреть" />
              </div>
            </div>
          </div>
          <div className={styles.moreReviews_reviewCard}>
            <div className={classNames(styles.card_contetn, styles.example)}>
              <div className={styles.demoImageCnt}>
                <Image
                  className={styles.demoImage}
                  src={"/demo.png"}
                  width={120}
                  height={120}
                  alt=""
                />
              </div>
              <Typography outline="regular" register="16">
                Читайте отзывы наших клиентов!
              </Typography>
            </div>
          </div>
          <div className={styles.moreReviews_reviewCard}></div>
          <div className={styles.moreReviews_reviewCard}></div>
        </div>
      </div>
    </section>
  );
};

export default MoreReviews;
