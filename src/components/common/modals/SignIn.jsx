import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";

import { ButtonContained } from "../Buttons";

const SignIn = ({ handleCloseSignIn, handleOpenSignUp, open }) => {
  return (
    <Dialog onClose={handleCloseSignIn} open={open}>
      <Grid container spacing={2} sx={{ maxWidth: "500px" }} component="form">
        <Grid item xs={12}>
          <DialogTitle variant="h3">Войти</DialogTitle>
        </Grid>
        <Grid item xs={12}>
          <DialogContent sx={{ p: "15px 35px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} ssm={10} sm={8}>
                <TextField
                  autoFocus
                  id="name"
                  label="Логин"
                  type="login"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} ssm={10} sm={8}>
                <TextField
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <Grid item xs={12}>
            <DialogActions sx={{ justifyContent: "flex-start", pl: "35px" }}>
              <ButtonContained
                type="submit"
                onClick={handleCloseSignIn}
                sx={{
                  px: 8,
                  py: 1.5,
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Войти
              </ButtonContained>
            </DialogActions>
            <Grid item xs={12}>
              <Button
                variant="text"
                sx={{
                  ml: "35px",
                  mr: 1,
                  p: 1,
                  fontSize: 13,
                  color: "#000000",
                  textTransform: "none",
                }}
              >
                Забыли пароль?
              </Button>
              <Button
                variant="text"
                sx={{
                  ml: "35px",
                  p: 1,
                  fontSize: 13,
                  color: "#000000",
                  textTransform: "none",
                }}
              >
                Нет аккаунта? Зарегистрироваться.
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default React.memo(SignIn);
