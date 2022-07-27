import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { ButtonTextForModals } from "../Buttons";
import { BoxCenter } from "../CustomBoxes";

import { Formik, Form } from "formik";
import Textfield from "../FormsUI/Textfield";
import ButtonWrapper from "../FormsUI/Button";
import { useSelector } from "react-redux";
import {
  selectisLoadingUser,
  selectErrorRegistration,
} from "../../../redux/user/userSelectors";
import actionCreator from "../../../redux/user/actionCreator";

import {
  INITIAL_FORM_STATE_SIGN_UP,
  FORM_VALIDATION_SIGN_UP,
} from "../../../constants/formValidation";

import { useModalHandle } from "../../../hooks/handleModalsHook";

const SignUp = () => {
  console.log("render signUp  modal");
  const { handleCloseSignUp, handleOpenSignIn, openSingUp } = useModalHandle();

  let open = openSingUp;
  const { enqueueSnackbar } = useSnackbar();
  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };
  const isLoading = useSelector(selectisLoadingUser);
  const errorText = useSelector(selectErrorRegistration);
  const { registrationUser, resetErrorFields } = actionCreator;

  const forUserName = /^1/.test(errorText) ? errorText.slice(1) : "";
  const forEmail = /^2/.test(errorText) ? errorText.slice(1) : "";
  const forPhone = /^3/.test(errorText) ? errorText.slice(1) : "";

  const crossSignIn = () => {
    handleCloseSignUp();
    handleOpenSignIn();
  };

  const closeSignUp = () => {
    handleCloseSignUp();
    resetErrorFields();
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE_SIGN_UP }}
      validationSchema={FORM_VALIDATION_SIGN_UP}
      onSubmit={(values, { resetForm }) => {
        registrationUser(values, handleCloseSignUp, resetForm, showMesssage);
        resetErrorFields();
      }}
    >
      <Form>
        <Dialog onClose={closeSignUp} open={open}>
          <Grid container spacing={2} sx={{ maxWidth: "650px" }}>
            <Grid item xs={12}>
              <DialogTitle variant="h3">Регистрация</DialogTitle>
            </Grid>
            <Grid item xs={12}>
              <DialogContent sx={{ p: "15px" }}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} ssm={7}>
                    <Textfield
                      autoFocus
                      name="username"
                      label="Придумайте логин"
                      type="login"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={5}>
                    <Typography variant="caption">
                      {`Больше 2  символов.`}.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield name="firstName" label="Ваше имя" type="text" />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      name="lastName"
                      label="Ваша фамилия"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield name="email" label="Ваш e-mail" type="email" />
                  </Grid>
                  <Grid item xs={12} ssm={6}>
                    <Textfield
                      name="phone"
                      label="Моб.тел."
                      type="phone"
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
              <Grid item xs={12} sx={{ ml: "20px", mb: 3 }}>
                <Typography variant="caption" color="error">
                  {forUserName || forPhone || forEmail}.
                </Typography>
              </Grid>
              <Grid item xs={10.5} sm={6} sx={{ ml: "15px" }}>
                {isLoading ? (
                  <BoxCenter>
                    <CircularProgress />
                  </BoxCenter>
                ) : (
                  <ButtonWrapper>Зарегистрироваться</ButtonWrapper>
                )}
                <Grid />
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
