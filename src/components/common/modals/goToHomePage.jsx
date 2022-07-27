import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TypographyLeft } from "../TypographyLeft";
import { ButtonContainedForModals } from "../Buttons";
import { useNavigate } from "react-router-dom";
const GoToHomePage = ({ setOpenGoToHome, open }) => {
  const navigate = useNavigate();
  console.log("render goToHomePage");
  return (
    <Dialog
      onClose={() => {
        setOpenGoToHome(false);
        navigate("/");
      }}
      open={open}
    >
      <DialogTitle variant="h4">
        Для бронирования места вам необходимо:
      </DialogTitle>
      <DialogContent>
        <TypographyLeft>1. Зарегистрироваться и войти.</TypographyLeft>
        <TypographyLeft>
          2. На главной странице выбрать интересующие вас даты и количество
          человек.
        </TypographyLeft>
        <TypographyLeft>
          3. Выбрать одну из комнат , где есть свободные места.
        </TypographyLeft>
        <TypographyLeft> 4. Нажать забронировать.</TypographyLeft>
      </DialogContent>
      <DialogActions>
        <ButtonContainedForModals
          sx={{ px: 5 }}
          onClick={() => {
            setOpenGoToHome(false);
            navigate("/");
          }}
        >
          Ок
        </ButtonContainedForModals>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(GoToHomePage);
