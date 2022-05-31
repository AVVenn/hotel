import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WhiteDivider = styled(Divider)(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
  display: { xs: "block", sm: "none" },
}));
