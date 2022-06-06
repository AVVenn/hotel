import React from "react";
import FindPlaces from "./FindPlaces";
import Facilities from "./Facilities";
import RoomsList from "./Room/RoomsList";
import Gallery from "./Gallery";
import { Typography, Box, Divider } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography component="h1" variant="h1" sx={{ mb: 5 }}>
        Жильё в самом центре города
      </Typography>
      <FindPlaces />
      <Facilities />
      <Divider variant="middle" sx={{ backgroundColor: "text.lightWarning" }} />
      <RoomsList />
      <Divider variant="middle" sx={{ backgroundColor: "text.lightWarning" }} />
      <Gallery />
    </Box>
  );
};

export default HomePage;
