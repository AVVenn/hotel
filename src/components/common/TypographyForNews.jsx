import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypographyForNews = styled(Typography)(
  ({ theme: { palette } }) => ({
    color: palette.text.second,
    marginBottom: 3,
    width: "130px",
    backgroundColor: palette.third.main,
    borderRadius: "15px",
  })
);
