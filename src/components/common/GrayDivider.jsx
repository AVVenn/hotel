import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GrayDivider = styled(Divider)(({ theme: { palette } }) => ({
  backgroundColor: palette.text.lightgray,
}));
