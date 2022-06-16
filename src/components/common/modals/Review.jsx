import React from "react";
import Typography from "@mui/material/Typography";

import { BoxSpaceAround, BoxSpaceBetween } from "../CustomBoxes";
import { TypographyLeft } from "../TypographyLeft";
import { useFormikContext } from "formik";
import { format, differenceInCalendarDays } from "date-fns";

export default function Review() {
  const { values } = useFormikContext();

  const numberBookindDays = differenceInCalendarDays(
    values.dateEnd,
    values.dateStart
  );
  const priceBooking =
    numberBookindDays * values.placePrice * values.numberOfPerson;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ваша бронь
      </Typography>
      <BoxSpaceAround sx={{ flexDirection: "column", height: "350px", mb: 2 }}>
        <BoxSpaceBetween sx={{ justifyContent: "space-between" }}>
          <TypographyLeft variant="body2">Имя:</TypographyLeft>
          <Typography> {values.firstName}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Фамилия:</TypographyLeft>
          <Typography>{values.lastName}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Мобильный телефон:</TypographyLeft>
          <Typography>{values.phone}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">E-mail:</TypographyLeft>
          <Typography>{values.email}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Дата прибытия:</TypographyLeft>
          <Typography>{format(values.dateStart, "dd.MM.yyyy")}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Дата отъезда:</TypographyLeft>
          <Typography>{format(values.dateEnd, "dd.MM.yyyy")}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Количество мест:</TypographyLeft>
          <Typography>{values.numberOfPerson} </Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">
            Стоимость места в комнате:
          </TypographyLeft>
          <Typography>{values.placePrice} бел.руб./сутки </Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="h5">Итого:</TypographyLeft>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {priceBooking} бел.руб.
          </Typography>
        </BoxSpaceBetween>
      </BoxSpaceAround>
    </>
  );
}
