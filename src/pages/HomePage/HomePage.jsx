import React from "react";
import FindPlaces from "./FindPlaces";
import Facilities from "./Facilities";
import RoomsList from "./Room/RoomsList";
import Gallery from "./Gallery";
import { Typography, Box } from "@mui/material";
import { GrayDivider } from "../../components/common/GrayDivider";

const HomePage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography component="h1" variant="h1" align="center" sx={{ mb: 5 }}>
        Жильё в самом центре города
      </Typography>
      <FindPlaces />
      <Facilities />
      <GrayDivider middle />
      <RoomsList />
      <GrayDivider middle />
      <Gallery />
    </Box>
  );
};

export default HomePage;
