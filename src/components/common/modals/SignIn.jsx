import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import { ButtonTextForModals } from "../Buttons";
import ButtonWrapper from "../FormsUI/Button";

import { Formik, Form } from "formik";
import Textfield from "../FormsUI/Textfield";
import * as yup from "yup";
import { useSelector } from "react-redux";
import actionCreator from "../../../redux/user/actionCreator";
import { BoxCenter } from "../../../components/common/CustomBoxes";

import {
  selectError,
  selectisLoadingUser,
} from "../../../redux/user/userSelectors";

const INITIAL_FORM_STATE = {
  username: "",
  password: "",
};
const FORM_VALIDATION = yup.object().shape({
  username: yup.string().required("Обязательно"),
  password: yup.string().required("Обязательно"),
});

const SignIn = ({ handleCloseSignIn, handleOpenSignUp, open }) => {
  const { getUser } = actionCreator;
  const errorText = useSelector(selectError);
  const isLoading = useSelector(selectisLoadingUser);
  const crossSignUp = () => {
    handleCloseSignIn();
    handleOpenSignUp();
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values, actions) => {
        actions.resetForm({
          values: {
            username: "",
            password: "",
          },
        });
        getUser(values, handleCloseSignIn);
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
                      error={errorText}
                      helperText={errorText}
                      autoFocus
                      name="username"
                      label="Логин"
                      type="login"
                      // helperText={errorText}
                    />
                  </Grid>
                  <Grid item xs={12} ssm={10}>
                    <Textfield
                      error={errorText}
                      helperText={errorText}
                      name="password"
                      label="Пароль"
                      type="password"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <Grid item xs={8.5} sx={{ ml: "35px" }}></Grid>
              <Grid item xs={8.5} sx={{ ml: "35px" }}>
                {isLoading ? (
                  <BoxCenter>
                    <CircularProgress />
                  </BoxCenter>
                ) : (
                  <ButtonWrapper>Войти</ButtonWrapper>
                )}
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
