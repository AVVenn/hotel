import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";

import { ButtonContained } from "../Buttons";

const SignUp = ({ handleCloseSignUp, handleOpenSignIn, open }) => {
  return (
    <Dialog onClose={handleCloseSignUp} open={open}>
      <Grid container spacing={2} sx={{ maxWidth: "650px" }} component="form">
        <Grid item xs={12}>
          <DialogTitle variant="h3">Регистрация</DialogTitle>
        </Grid>
        <Grid item xs={12}>
          <DialogContent sx={{ p: "15px" }}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} ssm={7} sm={7}>
                <TextField
                  id="login"
                  label="Придумайте логин"
                  type="login"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} ssm={5} sm={5}>
                <Typography variant="caption">
                  {`Больше 3 латинских символов. [Aa-Zz]`}.
                </Typography>
              </Grid>
              <Grid item xs={12} ssm={6} sm={6}>
                <TextField
                  autoFocus
                  id="email"
                  label="Ваш e-mail"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} ssm={6} sm={6}>
                <TextField
                  id="phone"
                  label="Моб.тел."
                  type="number"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+375 </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} ssm={6} sm={6}>
                <TextField
                  id="password"
                  label="Придумайте пароль"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} ssm={6} sm={6}>
                <TextField
                  id="confirmPassword"
                  label="Повторите пароль"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>
          <Grid item xs={12}>
            <DialogActions sx={{ justifyContent: "flex-start", pl: "15px" }}>
              <ButtonContained
                type="submit"
                onClick={handleCloseSignUp}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Зарегистрироваться
              </ButtonContained>
            </DialogActions>
            <Grid item xs={12}>
              <Button
                variant="text"
                sx={{
                  m: 2,
                  p: 1,
                  fontSize: 13,
                  color: "#000000",
                  textTransform: "none",
                }}
              >
                Есть аккаунт?
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default React.memo(SignUp);
