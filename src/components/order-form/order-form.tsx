"use client";

import { Formik, Form, Field } from "formik";
import styles from "./order-form.module.css";
import { handleForm, initialValues, validationSchema } from "./form";
import Button from "@/ui-kit/button/button";
import { IMaskInput } from "react-imask";
import classNames from "classnames";
import Typography from "@/ui-kit/typography/typography";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { redirect } from "next/navigation";
import { useState } from "react";
const OrderForm: React.FC<any> = () => {
  const { items, getTotalPrice } = useCart((elem: any) => elem);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  if (items.length === 0) {
    redirect("/cart");
  }

  return (
    <div>
      <Typography
        className={styles.order_form_title}
        variant="h3"
        outline="bold"
        register="24"
      >
        Проверьте и заполните данные
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>
          handleForm(
            values,
            items,
            getTotalPrice(),
            actions.resetForm,
            setFormMessage,
            setIsError,
            setIsSubmitting
          )
        }
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
                <Button
                  type="submit"
                  label={isSubmitting ? "Отправка..." : "Отправить"}
                  color="greenButton"
                  className={classNames(
                    isSubmitting ? styles.submittingButton : "",
                    styles.order_btn
                  )}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
