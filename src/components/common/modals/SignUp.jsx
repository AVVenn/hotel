import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";

import { ButtonTextForModals } from "../Buttons";

import { Formik, Form } from "formik";
import Textfield from "../FormsUI/Textfield";
import * as yup from "yup";
import ButtonWrapper from "../FormsUI/Button";

const phoneRegExp = /^\d{8}$/;

const INITIAL_FORM_STATE = {
  login: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phone: "",
};
const FORM_VALIDATIOM = yup.object().shape({
  login: yup
    .string()
    .min(3, "Больше 2 символов")
    .max(20, "Не больше 20 символов")
    .required("Обязательно"),
  email: yup.string().email("Некорректный email").required("Обязательно"),
  password: yup
    .string()
    .required("Обязательно")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{5,}$/,
      "Должен включать 5 букв, 1 Заглавная, 1 Строчную, 1 Цифру"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректный номер")
    .required("Обязательно"),
});

const SignUp = ({ handleCloseSignUp, handleOpenSignIn, open }) => {
  const crossSignIn = () => {
    handleCloseSignUp();
    handleOpenSignIn();
  };
  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATIOM}
      onSubmit={(values) => {
        console.log(values);
        handleCloseSignUp();
      }}
    >
      <Form>
        <Dialog onClose={handleCloseSignUp} open={open}>
          <Grid container spacing={2} sx={{ maxWidth: "650px" }}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Регистрация</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent sx={{ p: "15px" }}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} ssm={7}>
                    <Textfield
                      name="login"
                      label="Придумайте имя"
                      type="login"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={5}>
                    <Typography variant="caption">
                      {`Больше 2  символов.`}.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      autoFocus
                      name="email"
                      label="Ваш e-mail"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      name="phone"
                      label="Моб.тел."
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+375</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      name="password"
                      id="password"
                      label="Придумайте пароль"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      name="passwordConfirmation"
                      label="Повторите пароль"
                      type="password"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={10.5} sm={6} sx={{ ml: "15px" }}>
                <ButtonWrapper> Зарегистрироваться</ButtonWrapper>
                <Grid item xs={12}>
                  <ButtonTextForModals onClick={crossSignIn}>
                    Есть аккаунт?
                  </ButtonTextForModals>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </Form>
    </Formik>
  );
};

export default React.memo(SignUp);
