"use client";

import styles from "./main-form.module.css";
import { IMaskInput } from "react-imask";
import { useFormik } from "formik";
import { validationSchema, initialValues } from "./validation";
import Typography from "@/ui-kit/typography/typography";
import Button from "@/ui-kit/button/button";
import classNames from "classnames";
const MainForm = ({ className }: { className?: string }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <section className={classNames("main-container", className)}>
      <div className={styles.formContainer}>
        <div className={styles.formContainer_inform}>
          <Typography variant="p" outline="bold" register="48">
            Свяжитесь с нами
          </Typography>
          <Typography variant="p" outline="regular" register="20">
            Мы всегда рады ответить на ваши вопросы и помочь вам с выбором
            подходящих <br /> услуг. Мы гарантируем оперативный ответ!
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.mainForm}>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.mainForm_Input}
                  placeholder="Ваше имя"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className={styles.input_phoneContainer}>
                <IMaskInput
                  id="phoneNumber"
                  name="phoneNumber"
                  mask={"+7 000-000-00-00"}
                  unmask={true}
                  className={styles.mainForm_Input}
                  value={formik.values.phoneNumber}
                  onAccept={(value) =>
                    formik.setFieldValue("phoneNumber", value)
                  }
                  onBlur={() => formik.setFieldTouched("phoneNumber", true)}
                  placeholder="+7"
                />
              </div>

              <button type="submit" color="greenButton">
                Связаться
              </button>
            </div>
            <div className={styles.mainform_checkbox}>
              <input className={styles.mainform_checkboxItem} type="checkbox" />
              <Typography
                className={styles.mainform_checkboxText}
                variant="span"
                register="16"
                outline="regular"
              >
                Я даю согласие на обработку моих персональных данных
                и на получение информационно-рекламных рассылок.
              </Typography>
            </div>
          </form>
        </div>
        <div className={styles.abstractRound}></div>
      </div>
    </section>
  );
};

export default MainForm;
