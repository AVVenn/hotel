import React from "react";
import { format, compareAsc } from "date-fns";

import { Typography, Grid, CardContent } from "@mui/material";

import { getTotalPrice } from "../../utils/totalPrice";

import { useSnackbar } from "notistack";

import { useSelector } from "react-redux";
import { selectUser, selectUsersBooking } from "../../redux/user/userSelectors";
import { CardProfile } from "../../components/common/CardProfile";
import { TypographyForProfile } from "../../components/common/TypographyForProfile";
import { ButtonContained } from "../../components/common/Buttons";
import actionCreator from "../../redux/user/actionCreator";
import actionCreators from "../../redux/rooms/actionCreators";

const BookingInfo = () => {
  const user = useSelector(selectUser);
  const booking = useSelector(selectUsersBooking);
  const { cancelBooking } = actionCreator;
  const { cancelBookingRoom } = actionCreators;

  const { enqueueSnackbar } = useSnackbar();
  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <Grid container spacing={3}>
      {booking.length === 0 ? (
        <Grid item xs={12}>
          <Typography sx={{ mt: 2 }} variant="h2">
            Броней не найдено
          </Typography>
        </Grid>
      ) : (
        booking.map((bookingItem) => (
          <Grid item xs={12} ssm={6} md={4} key={bookingItem?.reservationId}>
            <CardProfile>
              <CardContent>
                <Grid container spacing={2.5} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    <TypographyForProfile>Бронь:</TypographyForProfile>
                  </Grid>
                  <Grid item xs={8}>
                    <TypographyForProfile>{`${
                      bookingItem.lastName + " " + bookingItem.firstName
                    }`}</TypographyForProfile>
                  </Grid>
                </Grid>
                <Grid container spacing={2.5} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    <TypographyForProfile>Даты:</TypographyForProfile>
                  </Grid>
                  <Grid item xs={8}>
                    <TypographyForProfile>
                      {`${format(
                        new Date(bookingItem?.dateStart),
                        "dd.MM.yyyy"
                      )} - ${format(
                        new Date(bookingItem?.dateEnd),
                        "dd.MM.yyyy"
                      )}`}
                    </TypographyForProfile>
                  </Grid>
                </Grid>
                <Grid container spacing={2.5} sx={{ mb: 1 }}>
                  <Grid item xs={4}>
                    <TypographyForProfile>Сутки:</TypographyForProfile>
                  </Grid>
                  <Grid item xs={8}>
                    <TypographyForProfile>{`${bookingItem.placePrice} руб.`}</TypographyForProfile>
                  </Grid>
                </Grid>
                <Grid container spacing={2.5}>
                  <Grid item xs={4}>
                    <TypographyForProfile component="h4" variant="h4">
                      Итого:
                    </TypographyForProfile>
                  </Grid>
                  <Grid item xs={8}>
                    <TypographyForProfile
                      component="h4"
                      variant="h4"
                    >{`${getTotalPrice(
                      bookingItem.placePrice,
                      bookingItem.numberOfPerson,
                      bookingItem?.dateEnd,
                      bookingItem?.dateStart
                    )} бел.руб.`}</TypographyForProfile>
                  </Grid>
                </Grid>
              </CardContent>
              {compareAsc(new Date(), new Date(bookingItem?.dateStart)) < 1 && (
                <Grid container>
                  <Grid item xs={12}>
                    <ButtonContained
                      fullWidth
                      onClick={() => {
                        cancelBookingRoom(
                          bookingItem.roomId,
                          bookingItem.reservationId
                        );
                        cancelBooking(
                          bookingItem.reservationId,
                          user.details._id,
                          showMesssage
                        );
                      }}
                      sx={{
                        borderRadius: "10px",
                        mb: 1,
                        px: 1,
                      }}
                    >
                      Отменить
                    </ButtonContained>
                  </Grid>
                </Grid>
              )}
            </CardProfile>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default BookingInfo;
