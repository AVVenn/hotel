import React, { useContext, useState } from "react";

import classes from "./room.module.css";

import { Container } from "../../components/common/CustomBoxes";
import { TypographyLeft } from "../../components/common/TypographyLeft";
import { ButtonContained } from "../../components/common/Buttons";

import {
  Typography,
  Box,
  Divider,
  Grid,
  Dialog,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Context from "../../сontext";

import { useSelector } from "react-redux";
import { selectRooms } from "../../redux/rooms/roomsSelectors";
import { useParams } from "react-router-dom";

const Room = () => {
  const rooms = useSelector(selectRooms);
  const { id } = useParams();
  const room = rooms.find((apartment) => apartment._id === id);

  const [openSlider, setOpenSlider] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const { handleOpenBooking } = useContext(Context);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpenSlider(true);
  };

  const closeSlider = () => setOpenSlider(false);
  const prevImage = () =>
    setSlideNumber((prevImg) =>
      prevImg === 0 ? (prevImg = room.photos.length - 1) : (prevImg -= 1)
    );

  const nextImage = () =>
    setSlideNumber((prevImg) =>
      prevImg === room.photos.length - 1 ? (prevImg = 0) : (prevImg += 1)
    );

  return (
    <Container>
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        {room.name}
      </Typography>
      <Dialog onClose={closeSlider} open={openSlider} fullWidth>
        <Box
          className={classes.image}
          sx={{ backgroundImage: `url(${room.photos[slideNumber]})` }}
        >
          <IconButton
            onClick={closeSlider}
            className={classes.closeGallery}
            color="secondary"
          >
            <CloseIcon />
          </IconButton>
          <Box className={classes.buttonContainer}>
            <IconButton
              onClick={prevImage}
              className={classes.prevImage}
              color="secondary"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={nextImage}
              className={classes.nextImage}
              color="secondary"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
      <Box className={classes.gridContainer}>
        {room.photos.map((img, index) => (
          <Box className={classes.gridItem} key={index}>
            <img
              onClick={() => handleOpen(index)}
              className={classes.galeryImg}
              src={img}
              alt={`img${index}`}
            />
          </Box>
        ))}
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8.5}>
          <TypographyLeft paragraph sx={{ mb: 2 }}>
            {room.description}
          </TypographyLeft>
          <Divider />
          <TypographyLeft
            sx={{ mb: 2 }}
          >{`В числе удобств тумбочка, шкаф, полотенце, ${room.facilities.join(
            ", "
          )}.`}</TypographyLeft>
          <Divider />
          <TypographyLeft>{`Проживающим особенно нравится расположение и низкая цена. В среднем они оценивают проживание в этой комнате на ${room.rating.toFixed(
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
            fullWidth
            sx={{ py: 5, borderRadius: "15px" }}
            onClick={handleOpenBooking}
          >
            {`Забронировать за ${room.price} руб./сут.`}
          </ButtonContained>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(Room);
