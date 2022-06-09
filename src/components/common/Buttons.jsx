import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonOutlined = styled(Button)(({ theme: { palette } }) => ({
  textTransform: "none",
  fontFamily: ["Segoe UI", "sans-serif"].join(","),
  fontSize: "18px",
  fontWeight: 600,
  borderRadius: "15px",
  border: "2px solid",
  "&:hover": {
    color: palette.text.second,
    backgroundColor: palette.primary.main,
  },
  // "&:active": {
  //   color: palette.text.second,
  //   backgroundColor: palette.text.lightWarning,
  // },
  // "&:focus": {
  //   color: palette.text.second,
  //   backgroundColor: palette.text.lightWarning,
  // },
}));

export const ButtonHeader = styled(ButtonOutlined)(
  ({ theme: { palette } }) => ({
    textTransform: "uppercase",
    border: "none",
  })
);

export const ButtonContained = styled(Button)(({ theme: { palette } }) => ({
  textTransform: "uppercase",
  backgroundColor: palette.primary.main,
  color: palette.text.second,
  "&:hover": {
    color: palette.text.second,
    backgroundColor: palette.text.lightWarning,
  },
}));

export const ButtonContainedForNews = styled(ButtonContained)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  textAlign: "center",
  padding: "16px 64px",
  borderRadius: "15px",
}));

export const ButtonContainedForModals = styled(ButtonContained)(
  ({ theme: { palette } }) => ({
    padding: "12px 0",
    borderRadius: "20px",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "20px",
  })
);

export const ButtonTextForModals = styled(Button)(({ theme: { palette } }) => ({
  marginLeft: "20px",
  marginRight: 1,
  padding: "8px 16px",
  fontSize: 13,
  color: palette.text.primary,
  textTransform: "none",
}));
