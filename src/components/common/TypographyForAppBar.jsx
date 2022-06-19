import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyForAppBar = styled(Typography)(
  ({ theme: { palette } }) => ({
    color: palette.text.primary,
    textDecoration: "underline",
    "&:hover": {
      color: palette.text.warning,
    },
  })
);
