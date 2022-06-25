import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { baseTheme } from "../styles/index";

import { SnackbarProvider } from "notistack";

import { darkThemePurple } from "../styles/darkThemePurple";
import { darkThemeGreen } from "../styles/darkThemeGreen";
import { deepmerge } from "@mui/utils";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import { CssBaseline, Button, Container, Divider } from "@mui/material";

import SignIn from "./common/modals/SignIn";
import SignUp from "./common/modals/SignUp";
import Booking from "./common/modals/Booking";
import BookingAccepted from "./common/modals/BookingAccepted";
import actionsRooms from "../redux/rooms/actionCreators";
import { BoxCenter } from "./common/CustomBoxes";

import { ModalsProvider } from "../hooks/handleModalsHook";

const Layout = () => {
  const chosenTheme = JSON.parse(localStorage.getItem("chosenTheme"));
  // console.log(chosenTheme);
  const { getRooms } = actionsRooms;

  useEffect(() => {
    getRooms();
    console.log(`did mount`);
  }, []);

  const [theme, setTheme] = useState(createTheme(chosenTheme) || baseTheme);

  useEffect(() => {
    localStorage.setItem("chosenTheme", JSON.stringify(theme));
    console.log(`did mount`);
  }, [theme]);

  const handleSwitchTheme = (whichTheme) => {
    setTheme(createTheme(deepmerge(theme, whichTheme)));
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <ModalsProvider>
          <Container maxWidth="xl" disableGutters>
            <Header />
            <BoxCenter>
              <Button
                onClick={() => handleSwitchTheme(darkThemePurple)}
                variant="contained"
              >
                Темно-фиолетовая
              </Button>
              <Button
                onClick={() => handleSwitchTheme(darkThemeGreen)}
                variant="contained"
              >
                Темно-зеленая
              </Button>
              <Button
                onClick={() => handleSwitchTheme(baseTheme)}
                variant="contained"
              >
                Светлая (базовая)
              </Button>
            </BoxCenter>
            <Outlet />
            <Divider
              variant="middle"
              sx={{ backgroundColor: "text.lightWarning" }}
            />
            <Footer />
            <SignIn />
            <SignUp />
            <Booking />
            <BookingAccepted />
          </Container>
        </ModalsProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Layout;
