import { createTheme } from "@mui/material/styles";

export let darkTheme = createTheme({
  palette: {
    primary: { main: "#7635DC" },
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
      warning: "#7635DC",
      lightWarning: "#5E32AE",
      notes: "#172E47",
    },
    divider: "#7635DC",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "third",
      },
    },
  },
});
