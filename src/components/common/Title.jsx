import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.warning,
  fontWeight: "600",
  textAlign: "left",
}));
