"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./cart.module.css";
import { useCart } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
const Cart = () => {
  const {
    removeItem,
    items,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useCart((elem: any) => elem);

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
      <div className={styles.cartContainer}>
        <div>
          <ul className={styles.cartList}>
            {items.map((el: any) => (
              <li key={el.id} className={styles.cartProductItem}>
                <div className={styles.cart_mainInfo}>
                  <div className={styles.cart_imageContainer}>
                    {el.image ? (
                      <Image
                        className={styles.cartItem_imageContainer}
                        src={`https://cms.mantis-185.ru${el.image}`}
                        width={140}
                        height={140}
                        alt=""
                      />
                    ) : (
                      <Image
                        className={styles.cartItem_imageContainer}
                        src={`/demo.png`}
                        width={140}
                        height={140}
                        alt=""
                      />
                    )}
                  </div>
                  <Typography register="18" outline="semibold">
                    {el.title}
                  </Typography>
                  <div
                    className={styles.mobileRemove}
                    onClick={() => removeItem(el.id)}
                  >
                    <Image
                      src={"/remove-icon.svg"}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.additionalInfo}>
                  <div className={styles.quantityContainer}>
                    <div>
                      <Typography variant="span" register="14">
                        Количество
                      </Typography>
                      <div className={styles.quantityCounter}>
                        <button onClick={() => decreaseQuantity(el.id)}>
                          -
                        </button>
                        <div>{el.quantity}</div>
                        <button onClick={() => increaseQuantity(el.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography outline="bold" register="24" variant="span">
                      {el.price} ₽
                    </Typography>
                  </div>
                  <div
                    className={styles.desktopRemove}
                    onClick={() => removeItem(el.id)}
                  >
                    <Image
                      src={"/remove-icon.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.cartInfo}>
            <Typography variant="span" outline="bold" register="24">
              Ваш заказ
            </Typography>
            <div className={styles.cartInfo_titlesContainer}>
              <div className={styles.cartInfo_titles}>
                <Typography register="18" outline="regular">
                  Скидка
                </Typography>
                <div className={styles.salePrice}>10000 ₽</div>
              </div>
              <div className={styles.cartInfo_titles}>
                <Typography register="24" outline="semibold">
                  Итого
                </Typography>
                <div className={styles.totalPrice}> {getTotalPrice()} ₽</div>
              </div>
            </div>

            <Link className={styles.saleBtn} href={"/order"}>
              Оформить заказ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
