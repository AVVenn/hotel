import React from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { ButtonContainedForModals } from "../Buttons";
import { useNavigate } from "react-router-dom";

import { useModalHandle } from "../../../hooks/handleModalsHook";

const BookingAccepted = () => {
  const { setOpenBookingAccepted, openBookingAccepted } = useModalHandle();

  let open = openBookingAccepted;
  console.log("render bookingacceppted modal");

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

export default React.memo(BookingAccepted);
