import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Grid, CardMedia, Rating } from "@mui/material";
import { routes } from "../../../constants/routes";
import { ButtonOutlined } from "../../../components/common/Buttons";

import PreviewIcon from "@mui/icons-material/Preview";
import {
  BoxCenter,
  BoxSpaceAround,
} from "../../../components/common/CustomBoxes";

import { CardRoom } from "../../../components/common/CardRoom";

const Room = ({ room }) => {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
      <CardRoom>
        <CardMedia
          sx={{
            width: "56%",
          }}
          image={room.photos[0]}
        />
        <BoxCenter sx={{ p: 1, flex: 1, flexDirection: "column" }}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {room.name}
          </Typography>
          <Typography variant="h6" color="text.warning">
            {room.price} руб. к/место
          </Typography>
          <BoxSpaceAround sx={{ mb: 2 }}>
            <Rating name="read-only" value={room.rating} readOnly />
            <Typography variant="caption">{room.rating.toFixed(1)}</Typography>
          </BoxSpaceAround>
          <ButtonOutlined
            sx={{
              p: "12px 20px",
            }}
            endIcon={<PreviewIcon />}
            component={RouterLink}
            to={routes.ROOMS + `/${room._id}`}
          >
            Смотреть
          </ButtonOutlined>
        </BoxCenter>
      </CardRoom>
    </Grid>
  );
};

export default Room;
