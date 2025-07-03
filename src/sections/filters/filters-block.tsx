"use client";
import Button from "@/ui-kit/button/button";
import styles from "./filters.module.css";
const FIlters: React.FC<any> = ({ filter_list }) => {
  return (
    <div className={styles.filters_container}>
      {filter_list.map((el: any) => (
        <div key={el.id}>
          {el.title}
          <div>
            {el.list.map((item: any, index: number) => (
              <div key={el.index}>{item}</div>
            ))}
          </div>
        </div>
      ))}
      <Button
        className={styles.filters_btn}
        color="greenButton"
        label="Применить"
      />
    </div>
  );
};

export default FIlters;
