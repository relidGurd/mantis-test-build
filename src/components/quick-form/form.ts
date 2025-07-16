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

const checkContactExists = async (phone: string) => {
  const response = await fetch(
    "https://b24-molb85.bitrix24.ru/rest/51/9w9w8lv3yxg6neyo/crm.contact.list.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          PHONE: phone,
        },
        select: ["ID", "NAME"],
      }),
    }
  );

  const data = await response.json();
  const contacts = data.result;

  if (contacts.length > 0) {
    console.log("Контакт найден:", contacts[0]);
    return contacts[0].ID;
  } else {
    console.log("Контакт не найден");
    return null;
  }
};

const handleForm = async (
  values: any,
  resetForm: () => void,
  setFormMessage: (msg: string) => void,
  setIsError: (isError: boolean) => void,
  setIsSubmitting: (val: boolean) => void
) => {
  try {
    setIsSubmitting(true);

    // 1. Проверяем — есть ли уже такой контакт
    const contactId = await checkContactExists(values.phoneNumber);
    let finalContactId = contactId;

    // 2. Если контакта нет — создаём
    if (!finalContactId) {
      const contactRes = await fetch(
        "https://b24-molb85.bitrix24.ru/rest/51/7t54z9wmumsg7ruh/crm.contact.add.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: {
              NAME: values.name,
              PHONE: [{ VALUE: values.phoneNumber, VALUE_TYPE: "WORK" }],
            },
          }),
        }
      );

      const contactData = await contactRes.json();

      if (!contactData.result) {
        throw new Error("Ошибка при создании контакта");
      }

      finalContactId = contactData.result;
    }

    // 3. Создаём сделку
    const dealRes = await fetch(
      "https://b24-molb85.bitrix24.ru/rest/51/8ais025eq7jrgmq3/crm.deal.add.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `${values.name} - ${values.phoneNumber} - (Форма "Связаться")`,
            COMMENTS: values.comment,
            CONTACT_ID: finalContactId,
            STAGE_ID: "NEW",
          },
        }),
      }
    );

    const dealData = await dealRes.json();

    if (!dealData.result) {
      throw new Error("Ошибка при создании сделки");
    }

    // Успешно
    resetForm();
    setFormMessage("Заявка успешно отправлена!");
    setIsError(false);
    console.log("Сделка создана:", dealData.result);
  } catch (e) {
    console.error("Ошибка:", e);
    setFormMessage("Произошла ошибка при отправке. Попробуйте позже.");
    setIsError(true);
  } finally {
    setIsSubmitting(false);
  }
};
export { handleForm };
