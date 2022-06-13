import React, { useState, useCallback, useMemo, useEffect } from "react";
import Context from "../сontext";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { baseTheme } from "../styles/index";
// import { lightTheme } from "../styles/lightTheme";
import { darkThemePurple } from "../styles/darkThemePurple";
import { darkThemeGreen } from "../styles/darkThemeGreen";
import { deepmerge } from "@mui/utils";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import { CssBaseline, Button, Container } from "@mui/material";

import SignIn from "./common/modals/SignIn";
import SignUp from "./common/modals/SignUp";
import Booking from "./common/modals/Booking";
import actions from "../redux/rooms/actionCreators";

const Layout = () => {
  const chosenTheme = JSON.parse(localStorage.getItem("chosenTheme"));
  // console.log(chosenTheme);
  const { getRooms } = actions;
  useEffect(() => {
    getRooms();
  }, []);

  const [theme, setTheme] = useState(createTheme(chosenTheme) || baseTheme);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSingUp, setOpenSignUp] = useState(false);
  const [openBooking, setOpenBoking] = useState(false);

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
      <CssBaseline />
      <Context.Provider value={value}>
        <Container maxWidth="xl" disableGutters>
          <Header handleOpenSignIn={handleOpenSignIn} />
          <Button
            onClick={() => handleSwitchTheme(darkThemePurple)}
            variant="contained"
          >
            DarkPurple
          </Button>
          <Button
            onClick={() => handleSwitchTheme(darkThemeGreen)}
            variant="contained"
          >
            DarkGreen
          </Button>
          <Button
            onClick={() => handleSwitchTheme(baseTheme)}
            variant="contained"
          >
            Light
          </Button>
          <Outlet />
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
          <Booking open={openBooking} handleCloseBooking={handleCloseBooking} />
        </Container>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default Layout;
