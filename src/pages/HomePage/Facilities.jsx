import React from "react";
import { Typography, Grid } from "@mui/material";
import { BoxCenter, Container } from "../../components/common/CustomBoxes";
import { CustomGrid } from "../../components/common/CustomGrid";

import KitchenIcon from "@mui/icons-material/Kitchen";
import BlenderIcon from "@mui/icons-material/Blender";
import BedIcon from "@mui/icons-material/Bed";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ComputerIcon from "@mui/icons-material/Computer";

const icons = [
  { text: "Холодильник", icon: <KitchenIcon fontSize="large" /> },
  { text: "Электрочайник", icon: <BlenderIcon fontSize="large" /> },
  { text: "Постельное", icon: <BedIcon fontSize="large" /> },
  { text: "Парковка", icon: <LocalParkingIcon fontSize="large" /> },
  { text: "Расположение", icon: <LocationCityIcon fontSize="large" /> },
  { text: "WiFi", icon: <CellWifiIcon fontSize="large" /> },
  {
    text: "Отличная Цена",
    icon: <AccountBalanceWalletIcon fontSize="large" />,
  },
  { text: "Отзывчивый персонал", icon: <PersonOutlineIcon fontSize="large" /> },
  { text: "Онлайн бронирование", icon: <ComputerIcon fontSize="large" /> },
];

const Facilities = () => {
  return (
    <Container>
      <Typography sx={{ mb: 4 }} variant="h2" component="h2">
        Удобства
      </Typography>
      <BoxCenter>
        <CustomGrid
          container
          spacing={4}
          columns={{ xs: 6, ssm: 9, sm: 12, md: 12 }}
        >
          {icons.map((icon) => (
            <Grid item xs={3} ssm={3} sm={4} md={2} key={icon.text}>
              <BoxCenter sx={{ flexDirection: "column" }}>
                {icon.icon}
                <Typography variant="h6">{icon.text}</Typography>
              </BoxCenter>
            </Grid>
          ))}
        </CustomGrid>
      </BoxCenter>
    </Container>
  );
};

export default Facilities;
