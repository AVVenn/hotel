import React from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { ButtonContainedForModals } from "../Buttons";
import { useNavigate } from "react-router-dom";

const BookingAccepted = ({ setOpenBookingAccepted, open }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      onClose={() => {
        navigate("/");
        setOpenBookingAccepted(false);
      }}
      open={open}
    >
      <DialogTitle variant="h4">
        Вы забронивали место в нашем общежитии!
      </DialogTitle>
      <DialogActions>
        <ButtonContainedForModals
          sx={{ px: 5 }}
          onClick={() => {
            navigate("/");
            setOpenBookingAccepted(false);
          }}
        >
          Ок
        </ButtonContainedForModals>
      </DialogActions>
    </Dialog>
  );
};

export default BookingAccepted;
