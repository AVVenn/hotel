import React from "react";
import Room from "./Room";

import Grid from "@mui/material/Grid";
import {
  BoxCenter,
  BoxSpaceAround,
} from "../../../components/common/CustomBoxes";
import { ButtonOutlined } from "../../../components/common/Buttons";

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
    id: 2,
    image: "https://source.unsplash.com/random",
  },
];

const RoomList = () => {
  return (
    <BoxCenter sx={{ pt: "60px", pb: "60px", flexDirection: "column" }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-around", alignItems: "center", mb: 5 }}
      >
        {posts.map((post) => (
          <Room key={post.id} post={post} />
        ))}
      </Grid>
      <ButtonOutlined sx={{ py: 1, px: 5 }}>Все комнаты</ButtonOutlined>
    </BoxCenter>
  );
};

export default RoomList;
