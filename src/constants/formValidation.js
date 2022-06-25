import * as yup from "yup";
import { phoneRegExp, passwordRegExp, nameRegExp } from "./regex";

export const INITIAL_FORM_STATE_CONTACTS_QESTION = {
  name: "",
  email: "",
  question: "",
};

export const FORM_VALIDATIOM_CONTACTS_QESTION = yup.object().shape({
  name: yup
    .string()
    .max(15, "Не больше 15 символов")
    .min(2, "Не меньше 2х символов")
    .required("Обязательно"),
  email: yup.string().email("Некорректный email").required("Обязательно"),
  question: yup.string().required("Обязательно"),
});

export const INITIAL_FORM_STATE_SIGN_UP = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phone: "",
  firstName: "",
  lastName: "",
};

export const FORM_VALIDATION_SIGN_UP = yup.object().shape({
  username: yup
    .string()
    .min(3, "Больше 2 символов")
    .max(20, "Не больше 20 символов")
    .required("Обязательно"),
  email: yup.string().email("Некорректный email").required("Обязательно"),
  password: yup
    .string()
    .required("Обязательно")
    .matches(
      passwordRegExp,
      "Должен включать 5 символов, 1 буква(латиница), 1 цифра"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректный номер")
    .required("Обязательно"),
  firstName: yup.string().required("Обязательно"),
  lastName: yup.string().required("Обязательно"),
});

export const INITIAL_FORM_STATE_SIGN_IN = {
  username: "",
  password: "",
};
export const FORM_VALIDATION_SIGN_IN = yup.object().shape({
  username: yup.string().required("Обязательно"),
  password: yup.string().required("Обязательно"),
});

export const FORM_VALIDATIOM_BOOKING = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Больше 2х символов")
    .max(20, "Не больше 20 символов")
    .matches(nameRegExp, "Только буквы")
    .required("Обязательно"),
  lastName: yup
    .string()
    .min(2, "Больше 2х символов")
    .max(20, "Не больше 20 символов")
    .matches(nameRegExp, "Только буквы")
    .required("Обязательно"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректный номер")
    .required("Обязательно"),
  email: yup.string().email("Некорректный email").required("Обязательно"),
  numberOfPerson: yup.number().required("Обязательно"),
  placePrice: yup.number(),
  message: yup.string().typeError("Только строки"),
});
