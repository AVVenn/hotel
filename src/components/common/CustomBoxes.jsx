import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxCenter = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const BoxSpaceAround = styled(Box)((BoxCenter) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));
