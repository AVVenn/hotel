import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactsTitle = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.text.orange,
  fontWeight: "600",
  textAlign: "left",
}));
