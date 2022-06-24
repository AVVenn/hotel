import React, { useState, useCallback, useMemo, useEffect } from "react";
import Context from "../сontext";
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

const Layout = () => {
  const chosenTheme = JSON.parse(localStorage.getItem("chosenTheme"));
  // console.log(chosenTheme);
  const { getRooms } = actionsRooms;

  useEffect(() => {
    getRooms();
  }, []);

  const [theme, setTheme] = useState(createTheme(chosenTheme) || baseTheme);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSingUp, setOpenSignUp] = useState(false);
  const [openBooking, setOpenBoking] = useState(false);
  const [openBookingAccepted, setOpenBookingAccepted] = useState(false);

  useEffect(() => {
    localStorage.setItem("chosenTheme", JSON.stringify(theme));
  }, [theme]);

  const handleCloseBooking = useCallback(() => {
    setOpenBoking(false);
  }, [setOpenBoking]);

  const handleOpenBooking = useCallback(() => {
    setOpenBoking(true);
  }, [setOpenBoking]);

  const handleSwitchTheme = (whichTheme) => {
    setTheme(createTheme(deepmerge(theme, whichTheme)));
  };

  const handleOpenSignIn = useCallback(() => {
    setOpenSignIn(true);
  }, [setOpenSignIn]);

  const handleCloseSignIn = useCallback(() => {
    setOpenSignIn(false);
  }, [setOpenSignIn]);

  const handleOpenSignUp = useCallback(() => {
    setOpenSignUp(true);
  }, [setOpenSignUp]);

  const handleCloseSignUp = useCallback(() => {
    setOpenSignUp(false);
  }, [setOpenSignUp]);

  const value = useMemo(
    () => ({
      handleOpenSignIn,
      handleCloseSignIn,
      handleOpenSignUp,
      handleCloseSignUp,
      handleCloseBooking,
      handleOpenBooking,
    }),
    [
      handleOpenSignIn,
      handleCloseSignIn,
      handleOpenSignUp,
      handleCloseSignUp,
      handleCloseBooking,
      handleOpenBooking,
    ]
  );
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Context.Provider value={value}>
          <Container maxWidth="xl" disableGutters>
            <Header handleOpenSignIn={handleOpenSignIn} />
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
            <SignIn
              handleCloseSignIn={handleCloseSignIn}
              handleOpenSignUp={handleOpenSignUp}
              open={openSignIn}
            />
            <SignUp
              handleCloseSignUp={handleCloseSignUp}
              handleOpenSignIn={handleOpenSignIn}
              open={openSingUp}
            />
            <Booking
              open={openBooking}
              handleCloseBooking={handleCloseBooking}
              setOpenBookingAccepted={setOpenBookingAccepted}
            />
            <BookingAccepted
              setOpenBookingAccepted={setOpenBookingAccepted}
              open={openBookingAccepted}
            />
          </Container>
        </Context.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Layout;
