import React from "react";

import { ThemeProvider } from "@mui/system";
import { theme } from "../styles/index";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

{
  /* <LocalizationProvider dateAdapter={AdapterMoment}> */
}
{
  /* </LocalizationProvider> */
}
