import classNames from "classnames";
import styles from "./order.module.css";
import Typography from "@/ui-kit/typography/typography";
import OrderForm from "@/components/order-form/order-form";

export default async function Order() {
  return (
    <div className={classNames("main-container")}>
      <Typography outline="bold" register="40" variant="h1">
        Оформление заказа
      </Typography>

      <OrderForm />
    </div>
  );
}
