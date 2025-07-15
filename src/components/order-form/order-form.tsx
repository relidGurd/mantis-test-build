"use client";

import { Formik, Form, Field } from "formik";
import styles from "./order-form.module.css";
import { initialValues, validationSchema } from "./form";
import Button from "@/ui-kit/button/button";
import { IMaskInput } from "react-imask";
import classNames from "classnames";
import Typography from "@/ui-kit/typography/typography";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { redirect } from "next/navigation";
const OrderForm: React.FC<any> = () => {
  const { items, getTotalPrice } = useCart((elem: any) => elem);

  if (items.length === 0) {
    redirect("/cart");
  }

  const el = items.map((el: any) => el.title).join(",");
  console.log(el);

  const handleForm = async (values: any) => {
    const contactRes = await fetch(
      "https://b24-molb85.bitrix24.ru/rest/51/7t54z9wmumsg7ruh/crm.contact.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            NAME: values.name,
            PHONE: {
              VALUE: values.phoneNumber,
              VALUE_TYPE: "MOBILE",
            },
          },
        }),
      }
    );

    const { result } = await contactRes.json();

    await fetch(
      "https://b24-molb85.bitrix24.ru/rest/51/8ais025eq7jrgmq3/crm.deal.add.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            TITLE: `${values.name} - ${values.phoneNumber}`,
            COMMENTS: items
              .map((el: any) => `Товар: ${el.title} Количество: ${el.quantity}`)
              .join("\n"),
            CONTACT_ID: result,
          },
        }),
      }
    );
  };

  return (
    <div>
      <Typography variant="h3" outline="bold" register="24">
        Заполните данные
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleForm(values)}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={styles.form_container}>
            <div className={styles.inputs_container}>
              <div>
                <Field
                  className={classNames(
                    touched.name && errors.name ? styles.test : null,
                    styles.form_input
                  )}
                  name="name"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <Field name="phoneNumber">
                  {({ field, form }: any) => (
                    <IMaskInput
                      className={classNames(
                        touched.phoneNumber && errors.phoneNumber
                          ? styles.test
                          : null,
                        styles.form_input
                      )}
                      {...field}
                      mask="+{7}(000)000-00-00"
                      placeholder="Телефон"
                      onAccept={(value) =>
                        form.setFieldValue("phoneNumber", value)
                      }
                    />
                  )}
                </Field>
              </div>
              <div>
                <Field
                  className={classNames(
                    touched.email && errors.email ? styles.test : null,
                    styles.form_input
                  )}
                  name="email"
                  placeholder="Ваш Email"
                />
              </div>
              <div>
                <Field
                  className={classNames(
                    touched.comment && errors.comment ? styles.test : null,
                    styles.form_input
                  )}
                  name="comment"
                  placeholder="Сообщение"
                />
              </div>
              <div>
                {touched.comment && errors.comment ? (
                  <div>Необходимо ваше согласие</div>
                ) : null}

                <Field
                  type="checkbox"
                  name="privacyPolicy"
                  placeholder="Сообщение"
                />
                <label>
                  Нажимая кнопку отправить вы соглашаетесь с Политикой
                  конфиденциальности
                </label>
              </div>
            </div>
            <div>
              <div className={styles.order_details}>
                <div className={styles.order_details_title_container}>
                  <Typography
                    className={styles.order_details_title}
                    variant="span"
                    outline="bold"
                    register="24"
                  >
                    Ваш заказ
                  </Typography>
                  <Link className={styles.order_details_change} href={"/cart"}>
                    Изменить
                  </Link>
                </div>
                <ul className={styles.order_details_list}>
                  {items.map((el: any, index: number) => (
                    <li key={index} className={styles.order_item}>
                      <Typography
                        variant="span"
                        outline="regular"
                        register="18"
                      >
                        {el.title}
                      </Typography>
                      <Typography
                        variant="span"
                        outline="regular"
                        register="18"
                      >
                        {el.quantity} шт.
                      </Typography>
                      <Typography
                        variant="span"
                        outline="regular"
                        register="18"
                      >
                        {el.price * el.quantity} ₽
                      </Typography>
                    </li>
                  ))}
                </ul>
                <div className={styles.order_details_title_container}>
                  <Typography
                    className={styles.order_details_title}
                    variant="span"
                    outline="bold"
                    register="24"
                  >
                    Итого
                  </Typography>
                  <Typography
                    className={styles.order_details_title}
                    variant="span"
                    outline="bold"
                    register="24"
                  >
                    {getTotalPrice()}
                  </Typography>
                </div>
                <Button type="submit" label="Отправить" color="greenButton" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
