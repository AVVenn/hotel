import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyForLink = styled(Typography)(
  ({ theme: { palette } }) => ({
    component: "a",
    color: palette.text.white,
    textDecoration: "none",
    "&:hover": {
      color: palette.text.orange,
    },
  })
);
