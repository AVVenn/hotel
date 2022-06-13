import * as yup from "yup";

export const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  question: "",
};

export const FORM_VALIDATIOM = yup.object().shape({
  name: yup
    .string()
    .max(15, "Не больше 15 символов")
    .min(2, "Не меньше 2х символов")
    .required("Обязательно"),
  email: yup.string().email("Некорректный email").required("Обязательно"),
  question: yup.string().required("Обязательно"),
});
