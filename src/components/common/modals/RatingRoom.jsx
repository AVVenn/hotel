import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Rating,
  Button,
} from "@mui/material";
import { ButtonContainedForModals } from "../Buttons";
import ButtonWrapper from "../FormsUI/Button";
import actionCreator from "../../../redux/user/actionCreator";

import { useModalHandle } from "../../../hooks/handleModalsHook";

const RatingRoom = () => {
  const { setOpenRating, openRating } = useModalHandle();
  let open = openRating;
  const [rating, setRating] = useState(null);

  return (
    <Dialog
      onClose={() => {
        setOpenRating(false);
      }}
      open={open}
    >
      <Grid container sx={{ maxWidth: "450px" }}>
        <Grid item xs={12}>
          <DialogTitle variant="h3">Оцените проживание</DialogTitle>
        </Grid>
        <Grid item xs={12}>
          <DialogContent sx={{ p: "10px 3px" }}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{ mb: 3, display: "flex", justifyContent: "center" }}
              >
                <Rating
                  sx={{ fontSize: "50px" }}
                  value={rating}
                  onChange={({ target: { value } }) => {
                    setRating(value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonContainedForModals fullWidth>
                  Ок
                </ButtonContainedForModals>
              </Grid>
            </Grid>
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default React.memo(RatingRoom);
