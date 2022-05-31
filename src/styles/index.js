import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

export let theme = createTheme({
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
    primary: {
      main: "#FF7300",
    },
    secondary: {
      main: "#FFFFFF",
    },
    gray: {
      main: "#222222",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      white: "#FFFFFF",
      orange: "#FF7300",
      lightOrange: "#f80",
      lightgray: "#999999",
      gray: "#5C5C5C",
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
    h6: {
      fontSize: "1.3em",
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

// const CustomButton = styled(Button)(({ theme }) => ({
//   variant: "contained",
//   padding: "0",
//   color: theme.palette.primary.main,
//   backgroundColor: theme.palette.secondary.main,
//   "&:hover": {
//     backgroundColor: theme.palette.secondary.light,
//     color: theme.palette.text.primary,
//   },
// }));

// MuiInputLabel: {
//   styleOverrides: {
//     root: {
//       color: "inherit",
//     },
//   },
// },
