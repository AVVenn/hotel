import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyForLink = styled(Typography)(
  ({ theme: { palette } }) => ({
    cursor: "pointer",
    color: palette.text.second,
    textDecoration: "none",
    "&:hover": {
      color: palette.text.warning,
    },
  })
);
