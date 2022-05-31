import React from "react";

// import { ThemeProvider } from "@mui/system";
// import { theme } from "../styles/index";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      {/* <LocalizationProvider dateAdapter={AdapterMoment}> */}
      <Container maxWidth="xl" disableGutters>
        <Header />
        <Outlet />
        <Footer />
      </Container>
      {/* </LocalizationProvider> */}
    </>
  );
};

export default Layout;
