import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Введите ваше имя"),
  phoneNumber: Yup.string().required("Введите ваш телефон"),
  email: Yup.string(),
  comment: Yup.string(),
  privacyPolicy: Yup.string().required(
    "Согласиться с правилами обработки персональных данных"
  ),
});

export const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  comment: "",
  privacyPolicy: "",
};
