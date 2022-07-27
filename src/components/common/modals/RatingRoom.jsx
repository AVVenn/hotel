import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Rating,
} from "@mui/material";
import { ButtonContainedForModals } from "../Buttons";
import actionCreatorUser from "../../../redux/user/actionCreator";
import actionCreatorsRoom from "../../../redux/rooms/actionCreators";
import { selectUser } from "../../../redux/user/userSelectors";
import { useSelector } from "react-redux";
import findSuccessfulLiving from "../../../utils/findSuccessfulLive";
import { useModalHandle } from "../../../hooks/handleModalsHook";

const RatingRoom = () => {
  const user = useSelector(selectUser);
  const [roomId, reservationId] = findSuccessfulLiving(user?.details?.booking);

  const { setOpenRating, openRating } = useModalHandle();
  const { changeRatingRoom } = actionCreatorsRoom;
  const { changeFieldIsVoted } = actionCreatorUser;
  let open = openRating;
  const [rating, setRating] = useState(5);
  console.log("render rating room modal");

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
                  value={+rating}
                  onChange={({ target: { value } }) => {
                    setRating(value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonContainedForModals
                  fullWidth
                  onClick={() => {
                    if ((roomId, reservationId)) {
                      changeRatingRoom(roomId, +rating);
                      changeFieldIsVoted(user.details._id, reservationId);
                      setOpenRating(false);
                    }
                  }}
                >
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
