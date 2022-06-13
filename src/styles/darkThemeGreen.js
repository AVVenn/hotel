import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let darkThemeGreen = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ssm: 420,
      sm: 640,
      md: 1024,
      lg: 1366,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: "#00AB55" },
    secondary: { main: "#FFFFFF" },
    third: { main: "#161C24" },
    background: {
      default: "#161C24",
      paper: "#212B36",
      secondary: "#161C24",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      second: "#FFFFFF",
      warning: "#00AB55",
      lightWarning: "#09874C",
      notes: "#F5D05E",
    },
    divider: "#00AB55",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "third",
      },
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontSize: "3em",
      lineHeight: 1.2,
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5em",
      fontWeight: 400,
    },
    h3: {
      fontSize: "2em",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.6em",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.3em",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
  },
});
darkThemeGreen = responsiveFontSizes(darkThemeGreen);
