import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { BoxCenter } from "../../components/common/CustomBoxes";

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
    <Container sx={{ pt: "60px", pb: "60px" }}>
      <Typography variant="h3" align="center" sx={{ mb: "30px" }}>
        Удобства
      </Typography>
      <BoxCenter>
        <Grid
          container
          spacing={4}
          columns={{ xs: 6, ssm: 9, sm: 12, md: 12 }}
          sx={{ justifyContent: "space-around", alignItems: "center" }}
        >
          {icons.map((icon) => (
            <Grid item xs={3} ssm={3} sm={4} md={2} key={icon.text}>
              <BoxCenter sx={{ flexDirection: "column" }}>
                {icon.icon}
                <Typography variant="h6" align="center">
                  {icon.text}
                </Typography>
              </BoxCenter>
            </Grid>
          ))}
        </Grid>
      </BoxCenter>
    </Container>
  );
};

export default Facilities;
