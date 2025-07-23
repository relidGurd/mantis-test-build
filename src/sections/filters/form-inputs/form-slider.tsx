"use client";
import { useField, Field } from "formik";
import styles from "./form-slider.module.css";
const FormInput = () => {
  const [field] = useField("price");
  return (
    <div className={styles.form_slider_container}>
      <strong className={styles.input_label}>
        Стоимость: {`${field.value}`} ₽
      </strong>
      <div>
        <label>
          <Field
            className={styles.form_slider}
            name="price"
            type="range"
            min={0}
            step="10"
            max={1000000}
          />
        </label>
      </div>
    </div>
  );
};

export default FormInput;
