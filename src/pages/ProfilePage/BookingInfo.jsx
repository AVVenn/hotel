import React from "react";
import { format, compareAsc } from "date-fns";

import { Typography, Grid, CardContent } from "@mui/material";

import { getTotalPrice } from "../../utils/totalPrice";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";
import { CardProfile } from "../../components/common/CardProfile";
import { TypographyForProfile } from "../../components/common/TypographyForProfile";
import { ButtonContained } from "../../components/common/Buttons";
import actionCreator from "../../redux/user/actionCreator";
import actionCreators from "../../redux/rooms/actionCreators";

const BookingInfo = () => {
  const user = useSelector(selectUser);
  const { cancelBooking } = actionCreator;
  const { cancelBookingRoom } = actionCreators;
  return (
    <Grid container spacing={3}>
      {user?.details.booking.length === 0 ? (
        <Grid item xs={12}>
          <Typography sx={{ mt: 2 }} variant="h2">
            Броней не найдено
          </Typography>
        </Grid>
      ) : (
        user?.details.booking.map((bookingItem) => (
          <Grid
            item
            xs={12}
            ssm={6}
            sm={6}
            md={4}
            key={bookingItem?.reservationId}
          >
            <CardProfile>
              <CardContent>
                <TypographyForProfile>
                  {`Бронь на:
                    ${bookingItem.lastName + " " + bookingItem.firstName}`}
                </TypographyForProfile>
                <TypographyForProfile>
                  {`${format(
                    new Date(bookingItem.dateStart),
                    "dd.MM.yyyy"
                  )} - ${format(new Date(bookingItem.dateEnd), "dd.MM.yyyy")}`}
                </TypographyForProfile>
                <TypographyForProfile>{`Места за ${bookingItem.placePrice} руб./сутки.`}</TypographyForProfile>
                <TypographyForProfile>{`Количество человек: ${bookingItem.numberOfPerson}`}</TypographyForProfile>
                <TypographyForProfile
                  component="h4"
                  variant="h4"
                  sx={{ mt: 2 }}
                >{`Итого: ${getTotalPrice(
                  bookingItem.placePrice,
                  bookingItem.numberOfPerson,
                  bookingItem.dateEnd,
                  bookingItem.dateStart
                )} бел.руб.`}</TypographyForProfile>
              </CardContent>
              {compareAsc(new Date(bookingItem.dateStart), new Date()) < 2 && (
                <ButtonContained
                  onClick={() => {
                    console.log(bookingItem.roomId);
                    cancelBookingRoom(
                      bookingItem.roomId,
                      bookingItem.reservationId
                    );
                    cancelBooking(bookingItem.reservationId, user.details._id);
                  }}
                  sx={{ borderRadius: "10px" }}
                >
                  Отменить
                </ButtonContained>
              )}
            </CardProfile>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default BookingInfo;
