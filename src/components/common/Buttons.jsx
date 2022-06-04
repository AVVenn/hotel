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
    color: palette.text.white,
    backgroundColor: palette.primary.main,
  },
  "&:active": {
    color: palette.text.white,
    backgroundColor: palette.text.lightOrange,
  },
  "&:focus": {
    color: palette.text.white,
    backgroundColor: palette.text.lightOrange,
  },
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
  color: palette.text.white,
  "&:hover": {
    color: palette.text.white,
    backgroundColor: palette.text.lightOrange,
  },
  "&:active": {
    color: palette.text.white,
    backgroundColor: palette.text.lightOrange,
  },
}));
