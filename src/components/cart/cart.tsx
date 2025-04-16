"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./cart.module.css";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Button from "@/ui-kit/button/button";

const Cart = () => {
  const {
    addItem,
    removeItem,
    items,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart((elem: any) => elem);

  const elem = {
    id: 1,
    image: "string",
    title: "Материнская плата ASUS TUF Gaming Z590",
    price: 2340,
    quantity: 1,
  };

  if (items.length === 0) {
    return (
      <div className="main-container">
        <Typography
          register="40"
          outline="bold"
          className={styles.cartTitle}
          variant="h1"
        >
          Корзина
        </Typography>
        <Typography>Корзина пуста</Typography>
        <Button onClick={() => addItem(elem)} label="Добавить тестовый товар" />
      </div>
    );
  }

  return (
    <div className="main-container">
      <Typography
        register="40"
        outline="bold"
        className={styles.cartTitle}
        variant="h1"
      >
        Корзина
      </Typography>
      <Button onClick={() => addItem(elem)} label="Добавить тестовый товар" />
      <div className={styles.cartContainer}>
        <ul className={styles.cartList}>
          {items.map((el: any) => (
            <li className={styles.cartProductItem}>
              <div className={styles.cart_mainInfo}>
                <div className={styles.cart_imageContainer}>
                  <Image
                    className={styles.cartItem_imageContainer}
                    src={"/demo-prod.png"}
                    width={140}
                    height={140}
                    alt=""
                  />
                </div>
                <Typography register="18" outline="semibold">
                  {el.title}
                </Typography>
              </div>
              <div className={styles.additionalInfo}>
                <div className={styles.quantityContainer}>
                  <div className={styles.quantityCounter}>
                    <button onClick={() => decreaseQuantity(el.id)}>-</button>
                    <div>{el.quantity}</div>
                    <button onClick={() => increaseQuantity(el.id)}>+</button>
                  </div>
                </div>
                <div>
                  <Typography outline="bold" register="24" variant="span">
                    {el.price} ₽
                  </Typography>
                </div>
                <div onClick={() => removeItem(el.id)}>Удалить</div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <div className={styles.cartInfo}>
            {getTotalPrice()}
            <Button color="greenButton" label="Оформить заказ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
