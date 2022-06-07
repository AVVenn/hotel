import React, { useContext } from "react";
import classes from "./room.module.css";
import { Link as RouterLink } from "react-router-dom";
import { Container } from "../../components/common/CustomBoxes";
import { Typography, Box, Divider, Button, Grid } from "@mui/material";
import { TypographyLeft } from "../../components/common/TypographyLeft";
import { ButtonContained } from "../../components/common/Buttons";
import Context from "../../сontext";
const room = {
  id: 4,
  title: "2х местная комната",
  price: 15,
  places: 2,
  rating: 5,
  image: [
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ],
  facility: [
    "Чайник",
    "Постельное",
    "Холодильник",
    "Телевизор",
    "Wi-fi",
    "Блочный тип",
  ],
  body: "Общежитие расположено в самом центре Гомеля: 200 метров до Гомельского дворцово-паркового ансамбля, 50 метров до кинотеатра им.Калинина, 500 метров до цирка, 300 метров до центрального рынка. К услугам гостей бесплатный WiFi и фортепиано.",
};

const Room = () => {
  const { handleOpenBooking } = useContext(Context);
  return (
    <Container sx={{ px: 2 }}>
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        {room.title}
      </Typography>
      <Box className={classes.gridContainer}>
        {room.image.map((img, index) => (
          <Box
            sx={{ backgroundImage: `url(${img})` }}
            key={index}
            className={classes.gridItem}
          />
        ))}
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8.5}>
          <TypographyLeft paragraph sx={{ mb: 2 }}>
            {room.body}
          </TypographyLeft>
          <Divider />
          <TypographyLeft
            pargaraph
            sx={{ mb: 2 }}
          >{`В числе удобств тумбочка, шкаф, постельное белье, полотенце, ${room.facility.join(
            ", "
          )}.`}</TypographyLeft>
          <Divider />
          <TypographyLeft
            paragraph
          >{`Проживающим особенно нравится расположение и низкая цена. В среднем они оценивают проживание в этой комнате на ${room.rating.toFixed(
            1
          )} из 5.`}</TypographyLeft>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3.5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ButtonContained
            sx={{ px: 8, py: 5, borderRadius: "15px" }}
            variant="contained"
            onClick={handleOpenBooking}
          >
            Забронировать
          </ButtonContained>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Room;
