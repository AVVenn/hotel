import React from "react";

import { Typography, Grid, CardMedia, Rating } from "@mui/material";

import { ButtonOutlined } from "../../../components/common/Buttons";

import PreviewIcon from "@mui/icons-material/Preview";
import {
  BoxCenter,
  BoxSpaceAround,
} from "../../../components/common/CustomBoxes";

import { CardRoom } from "../../../components/common/CardRoom";

const Room = ({ room }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CardRoom>
        <CardMedia
          sx={{
            width: "56%",
          }}
          image={room.image}
        />
        <BoxCenter sx={{ p: 1, flex: 1, flexDirection: "column" }}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {room.title}
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
          >
            Смотреть
          </ButtonOutlined>
        </BoxCenter>
      </CardRoom>
    </Grid>
  );
};

export default Room;
