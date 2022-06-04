import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardRoom = styled(Card)(({ theme: { palette } }) => ({
  height: "250px",
  display: "flex",
  borderRadius: "15px",
  border: `1px solid ${palette.text.gray}`,
  "&:hover": {
    borderColor: "orange",
  },
}));
