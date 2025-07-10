"use client";
import classNames from "classnames";
import styles from "./delivery.module.css";
import Typography from "@/ui-kit/typography/typography";

const Delivery = () => {
  return (
    <div className={classNames("main-container")}>
      <Typography
        className={styles.page_title}
        variant="h1"
        outline="bold"
        register="40"
      >
        Доставка
      </Typography>
      <div className={styles.delivery_container}>
        <div className={styles.delivery_list}>
          <div>
            <Typography variant="h3" outline="bold" register="32">
              1. Условия доставки
            </Typography>
            <Typography className={styles.deliver_info} variant="p">
              Мы — IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования. Наша
              цель — обеспечить высокотехнологичную поддержку вашего бизнеса,
              от автоматизации процессов до создания web-решений.Мы —
              IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования.
            </Typography>
          </div>

          <div>
            <Typography variant="h3" outline="bold" register="32">
              2. Условия доставки
            </Typography>
            <Typography className={styles.deliver_info} variant="p">
              Мы — IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования. Наша
              цель — обеспечить высокотехнологичную поддержку вашего бизнеса,
              от автоматизации процессов до создания web-решений.Мы —
              IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования.
            </Typography>
          </div>

          <div>
            <Typography variant="h3" outline="bold" register="32">
              3. Условия доставки
            </Typography>
            <Typography className={styles.deliver_info} variant="p">
              Мы — IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования. Наша
              цель — обеспечить высокотехнологичную поддержку вашего бизнеса,
              от автоматизации процессов до создания web-решений.Мы —
              IT-компания, специализирующаяся на комплексных решениях
              для бизнеса и госсектора. Партнёры ведущих разработчиков
              программного обеспечения и производителей оборудования.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
