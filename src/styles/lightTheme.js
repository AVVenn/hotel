import { createTheme } from "@mui/material/styles";

export let lightTheme = createTheme({
  palette: {
    primary: { main: "#FF7300" },
    secondary: { main: "#ffffff" },
    third: { main: "#222222" },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
      secondary: "#f1f6fa",
    },
    text: {
      primary: "#333333",
      secondary: "rgba(0, 0, 0, 0.5)",
      second: "#ffffff",
      warning: "#FF7300",
      lightWarning: "#f80",
      notes: "#5C5C5C",
    },
    divider: "#FF7300",
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "secondary",
      },
    },
  },
});
