import { createTheme } from "@mui/material/styles";

export let darkTheme2 = createTheme({
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
});
