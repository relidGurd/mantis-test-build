"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./prices-table.module.css";
import Popup from "@/components/popup/popup";
import Button from "@/ui-kit/button/button";
import QuickForm from "@/components/quick-form/quick-form";

interface IPricesItem {
  title: string;
  description: string;
  price: number;
}

const PricesTable = ({ prices_list }: { prices_list: IPricesItem[] }) => {
  return (
    <section className="main-container">
      <Typography variant="h2" register="32" outline="semibold">
        Цены
      </Typography>
      <ul className={styles.prices_list__container}>
        <li className={styles.prices_list__item_title}>Варианты поставки</li>

        {prices_list.map((el: any, index: number) => (
          <li key={index} className={styles.prices_list__item}>
            <div className={styles.prices_list__titles}>
              <div className={styles.prices_item__title}>{el.title}</div>
              <div className={styles.prices_item__description}>
                {el.description}
              </div>
            </div>

            <div className={styles.prices_list__prices}>
              <div className={styles.prices_item__price}>{el.price} ₽</div>
              <div>
                <Popup button={<Button label="Купить" color="greenButton" />}>
                  <QuickForm />
                </Popup>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PricesTable;
