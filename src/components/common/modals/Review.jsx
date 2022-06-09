import React from "react";
import Typography from "@mui/material/Typography";

import { BoxSpaceAround, BoxSpaceBetween } from "../CustomBoxes";
import { TypographyLeft } from "../TypographyLeft";
import { useFormikContext } from "formik";
import { format } from "date-fns";

export default function Review() {
  const { values } = useFormikContext();

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
          <Typography>{format(values.dataStart, "dd.MM.yyyy")}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Дата отъезда:</TypographyLeft>
          <Typography>{format(values.dataEnd, "dd.MM.yyyy")}</Typography>
        </BoxSpaceBetween>
        <BoxSpaceBetween>
          <TypographyLeft variant="body2">Количество мест:</TypographyLeft>
          <Typography>{values.peopleNumber} </Typography>
        </BoxSpaceBetween>
        {/* <BoxSpaceBetween>
          <TypographyLeft variant="body2">
            Стоимость места в комнате:
          </TypographyLeft>
          <Typography>{aboutBooking.pricePlace} </Typography>
        </BoxSpaceBetween> */}
        {/* <BoxSpaceBetween>
          <TypographyLeft variant="h5">Цена:</TypographyLeft>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {aboutBooking.price}
          </Typography>
        </BoxSpaceBetween> */}
      </BoxSpaceAround>
    </>
  );
}
