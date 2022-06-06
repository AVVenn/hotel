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
  "&:active": {
    color: palette.text.second,
    backgroundColor: palette.text.lightWarning,
  },
  "&:focus": {
    color: palette.text.second,
    backgroundColor: palette.text.lightWarning,
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
  color: palette.text.second,
  "&:hover": {
    color: palette.text.second,
    backgroundColor: palette.text.lightWarning,
  },
  "&:active": {
    color: palette.text.second,
    backgroundColor: palette.text.lightWarning,
  },
}));
