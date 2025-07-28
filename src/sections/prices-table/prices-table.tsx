"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./prices-table.module.css";
import Popup from "@/components/popup/popup";
import Button from "@/ui-kit/button/button";
import QuickForm from "@/components/quick-form/quick-form";
const PricesTable = () => {
  return (
    <section className="main-container">
      <Typography variant="h2" register="32" outline="semibold">
        Цены
      </Typography>
      <ul className={styles.prices_list__container}>
        <li className={styles.prices_list__item_title}>Варианты поставки</li>
        <li className={styles.prices_list__item}>
          <div className={styles.prices_list__titles}>
            <div>Наименование</div>
            <div>Автоматизируем процессы, обеспечиваем безопасность</div>
          </div>

          <div className={styles.prices_list__prices}>
            <div>150 000 ₽</div>
            <div>
              <Popup button={<Button label="Купить" color="greenButton" />}>
                <QuickForm />
              </Popup>
            </div>
          </div>
        </li>
        <li className={styles.prices_list__item}>
          <div className={styles.prices_list__titles}>
            <div>Наименование</div>
            <div>Автоматизируем процессы, обеспечиваем безопасность</div>
          </div>

          <div className={styles.prices_list__prices}>
            <div>150 000 ₽</div>
            <div>
              <Popup button={<Button label="Купить" color="greenButton" />}>
                <QuickForm />
              </Popup>
            </div>
          </div>
        </li>
        <li className={styles.prices_list__item}>
          <div className={styles.prices_list__titles}>
            <div>Наименование</div>
            <div>Автоматизируем процессы, обеспечиваем безопасность</div>
          </div>

          <div className={styles.prices_list__prices}>
            <div>150 000 ₽</div>
            <div>
              <Popup button={<Button label="Купить" color="greenButton" />}>
                <QuickForm />
              </Popup>
            </div>
          </div>
        </li>
        <li className={styles.prices_list__item}>
          <div className={styles.prices_list__titles}>
            <div>Наименование</div>
            <div>Автоматизируем процессы, обеспечиваем безопасность</div>
          </div>

          <div className={styles.prices_list__prices}>
            <div>150 000 ₽</div>
            <div>
              <Popup button={<Button label="Купить" color="greenButton" />}>
                <QuickForm />
              </Popup>
            </div>
          </div>
        </li>
        <li className={styles.prices_list__item}>
          <div className={styles.prices_list__titles}>
            <div>Наименование</div>
            <div>Автоматизируем процессы, обеспечиваем безопасность</div>
          </div>

          <div className={styles.prices_list__prices}>
            <div>150 000 ₽</div>
            <div>
              <Popup button={<Button label="Купить" color="greenButton" />}>
                <QuickForm />
              </Popup>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PricesTable;
