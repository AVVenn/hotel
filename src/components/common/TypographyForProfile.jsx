import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyForProfile = styled(Typography)(
  ({ theme: { palette } }) => ({
    color: palette.text.warning,
    fontWeight: 500,
  })
);
