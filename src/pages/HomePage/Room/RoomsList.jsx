import React from "react";
import Room from "./Room";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { BoxCenter, Container } from "../../../components/common/CustomBoxes";
import { ButtonOutlined } from "../../../components/common/Buttons";
import { CustomGrid } from "../../../components/common/CustomGrid";
import { routes } from "../../../constants/routes";

const posts = [
  {
    title: "4х местная комната",
    places: 20,
    rating: 4,
    price: 8,
    image: "https://source.unsplash.com/random",
    id: 1,
  },
  {
    title: "3х местная комната",
    places: 12,
    rating: 4.5,
    price: 11,
    id: 2,
    image: "https://source.unsplash.com/random",
  },
  {
    title: "2х местная комната",
    places: 2,
    rating: 5,
    price: 14,
    id: 3,
    image: "https://source.unsplash.com/random",
  },
];

const RoomList = () => {
  return (
    <Container>
      <BoxCenter sx={{ flexDirection: "column" }}>
        <Typography sx={{ mb: 4 }} component="h2" variant="h2">
          Комнаты
        </Typography>
        <CustomGrid container spacing={2} sx={{ mb: 5 }}>
          {posts.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </CustomGrid>
        <ButtonOutlined
          sx={{ py: 1, px: 5 }}
          component={RouterLink}
          to={routes.ROOMS}
        >
          Все комнаты
        </ButtonOutlined>
      </BoxCenter>
    </Container>
  );
};

export default RoomList;
