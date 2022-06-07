import React, { useState, useCallback, useMemo } from "react";
import Context from "../сontext";
import { ThemeProvider, createTheme } from "@mui/system";
import { baseTheme } from "../styles/index";
// import { lightTheme } from "../styles/lightTheme";
import { darkTheme } from "../styles/darkTheme";
import { darkTheme2 } from "../styles/darkTheme2";
import _ from "lodash";
import { deepmerge } from "@mui/utils";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import { CssBaseline, Button, Container } from "@mui/material";

import SignIn from "./common/modals/SignIn";
import SignUp from "./common/modals/SignUp";
import Booking from "./common/modals/Booking";

const Layout = () => {
  const [theme, setTheme] = useState(baseTheme);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSingUp, setOpenSignUp] = useState(false);
  const [openBooking, setOpenBoking] = useState(false);
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
            onClick={() => handleSwitchTheme(darkTheme)}
            variant="contained"
          >
            Dark
          </Button>
          <Button
            onClick={() => handleSwitchTheme(darkTheme2)}
            variant="contained"
          >
            Dark
          </Button>
          <Button
            onClick={() => handleSwitchTheme(baseTheme)}
            variant="contained"
          >
            Default
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
