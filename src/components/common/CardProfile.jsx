import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardProfile = styled(Card)(({ theme: { palette } }) => ({
  minHeight: "200px",
  borderRadius: "15px",
  border: `2px solid ${palette.primary.main}`,
  "&:hover": {
    borderColor: palette.secondary.main,
  },
}));
