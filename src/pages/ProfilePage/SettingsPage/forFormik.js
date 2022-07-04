import * as yup from "yup";
import { phoneRegExp } from "../../../constants/regex";

export const FORM_VALIDATION = yup.object().shape({
  email: yup.string().email("Некорректный email").required("Обязательно"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректный номер")
    .required("Обязательно"),
  firstName: yup.string().required("Обязательно"),
  lastName: yup.string().required("Обязательно"),
});
