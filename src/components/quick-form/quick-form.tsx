"use client";

import { Formik, Form, Field } from "formik";
import styles from "./quick-form.module.css";
import { handleForm, initialValues, validationSchema } from "./form";
import Button from "@/ui-kit/button/button";
import { IMaskInput } from "react-imask";
import classNames from "classnames";
import Typography from "@/ui-kit/typography/typography";
import { useCart } from "@/store/cart";
import { redirect } from "next/navigation";
import { useState } from "react";
const QuickForm: React.FC<any> = () => {
  const { items, getTotalPrice } = useCart((elem: any) => elem);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  if (items.length === 0) {
    redirect("/cart");
  }

  return (
    <div className={styles.form_container}>
      <Typography
        className={styles.form_title}
        variant="h3"
        outline="bold"
        register="24"
      >
        Заполните данные
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>
          handleForm(
            values,
            actions.resetForm,
            setFormMessage,
            setIsError,
            setIsSubmitting
          )
        }
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
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
              <Button
                type="submit"
                label={isSubmitting ? "Отправка..." : "Отправить"}
                color="greenButton"
                className={classNames(
                  isSubmitting ? styles.submittingButton : ""
                )}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuickForm;
