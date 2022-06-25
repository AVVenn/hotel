import React, { useContext, useState, useCallback } from "react";

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

import GoToHomePage from "../../components/common/modals/goToHomePage";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Context from "../../сontext";

import { useSelector } from "react-redux";
import { selectRooms } from "../../redux/rooms/roomsSelectors";
import { selectUser } from "../../redux/user/userSelectors";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Room = () => {
  const [openGoToHome, setOpenGoToHome] = useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const rooms = useSelector(selectRooms);
  const room = rooms.find((apartment) => apartment._id === id);
  const { state } = useLocation();
  const [openSlider, setOpenSlider] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const { handleOpenBooking, handleOpenSignIn } = useContext(Context);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpenSlider(true);
  };

  const closeSlider = () => setOpenSlider(false);
  const prevImage = () =>
    setSlideNumber((prevImg) => {
      if (prevImg === 0) {
        return room.photos.length - 1;
      } else {
        return prevImg - 1;
      }
    });

  const nextImage = () =>
    setSlideNumber((prevImg) => {
      if (prevImg === room.photos.length - 1) {
        return 0;
      } else {
        return prevImg + 1;
      }
    });

  const handleClick = () => {
    if (!state) {
      setOpenGoToHome(true);
    } else if (user) {
      handleOpenBooking();
    } else {
      handleOpenSignIn();
    }
  };

  return (
    <Container>
      <GoToHomePage setOpenGoToHome={setOpenGoToHome} open={openGoToHome} />
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        {room.name}
      </Typography>
      <Dialog onClose={closeSlider} open={openSlider} fullWidth>
        <Box
          className={classes.image}
          sx={{
            backgroundImage: `url(${room.photos[slideNumber]})`,
            backgroundPosition: "center top",
          }}
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
          <TypographyLeft sx={{ mb: 2 }}>
            {`В числе удобств тумбочка, шкаф, полотенце, ${room.facilities.join(
              ", "
            )}.`}
          </TypographyLeft>
          <Divider />
          <TypographyLeft>{`Проживающим особенно нравится расположение и низкая цена. В среднем они оценивают проживание в этой комнате на ${room.rating.toFixed(
            1
          )} из 5.`}</TypographyLeft>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3.5}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ButtonContained
            fullWidth
            sx={{ py: 3, borderRadius: "15px" }}
            onClick={handleClick}
          >
            {`Забронировать за ${room.price} руб./сут.`}
          </ButtonContained>
          <ButtonContained
            fullWidth
            sx={{ py: 3, borderRadius: "15px", mt: 3 }}
            onClick={() => navigate(-1)}
          >
            Назад
          </ButtonContained>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(Room);
