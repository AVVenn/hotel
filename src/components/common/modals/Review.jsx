import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const aboutBooking = {
  dateStart: "17.06.2022",
  dateEnd: "23.06.2022",
  lastName: "Венгура",
  firstName: "Андрей",
  room: "4",
  pricePlace: "11",
  numberPhone: "+375 33 365 52 04",
  email: "m6365813@mail.ru",
  message: "dfsdfd;lkdsaklgadsdafjkdsfasdfjklsdjklfkasdjlfjks",
  price: 66,
};

export default function Review() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Ваша бронь
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Имя:</Typography>
          <ListItemText primary={aboutBooking.firstName} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Фамилия:</Typography>
          <ListItemText primary={aboutBooking.lastName} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Мобильный телефон:</Typography>
          <ListItemText primary={aboutBooking.phoneNumber} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">E-mail:</Typography>
          <ListItemText primary={aboutBooking.email} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Дата прибытия</Typography>
          <ListItemText primary={aboutBooking.dateStart} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Дата отъезда</Typography>
          <ListItemText primary={aboutBooking.dateEnd} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Комната за:</Typography>
          <ListItemText primary={aboutBooking.pricePlace} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="body2">Пожелания</Typography>
          <ListItemText primary={aboutBooking.message} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Цена" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {aboutBooking.price}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
