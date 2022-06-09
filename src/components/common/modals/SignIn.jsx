import React from "react";
import { Dialog, DialogTitle, DialogContent, Grid } from "@mui/material";
import { ButtonTextForModals } from "../Buttons";
import ButtonWrapper from "../FormsUI/Button";

import { Formik, Form } from "formik";
import Textfield from "../FormsUI/Textfield";
import * as yup from "yup";

const INITIAL_FORM_STATE = {
  login: "",
  password: "",
};
const FORM_VALIDATIOM = yup.object().shape({
  login: yup.string().required("Обязательно"),
  password: yup.string().required("Обязательно"),
});

const SignIn = ({ handleCloseSignIn, handleOpenSignUp, open }) => {
  const crossSignUp = () => {
    handleCloseSignIn();
    handleOpenSignUp();
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATIOM}
      onSubmit={(values) => {
        console.log(values);
        handleCloseSignIn();
      }}
    >
      <Form>
        <Dialog onClose={handleCloseSignIn} open={open}>
          <Grid container spacing={2} sx={{ maxWidth: "450px" }}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Войти</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent sx={{ p: "15px 35px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} ssm={10}>
                    <Textfield
                      autoFocus
                      name="login"
                      label="Логин"
                      type="login"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={10}>
                    <Textfield name="password" label="Пароль" type="password" />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={8.5} sx={{ ml: "35px" }}>
                <ButtonWrapper>Войти</ButtonWrapper>
              </Grid>
              <Grid item xs={12}></Grid>
              <ButtonTextForModals onClick={() => {}}>
                Забыли пароль?
              </ButtonTextForModals>
              <ButtonTextForModals onClick={crossSignUp}>
                Нет аккаунта? Зарегистрироваться.
              </ButtonTextForModals>
            </Grid>
          </Grid>
        </Dialog>
      </Form>
    </Formik>
  );
};

export default React.memo(SignIn);
