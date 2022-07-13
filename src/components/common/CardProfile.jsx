import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardProfile = styled(Card)(({ theme: { palette } }) => ({
  minHeight: "200px",
  borderRadius: "15px",
  border: `1px solid ${palette.primary.main}`,
  "&:hover": {
    cursor: "pointer",
    borderColor: palette.secondary.main,
    boxShadow: `6px 6px 8px 5px rgba(0, 0, 0, 0.24)`,
  },
}));
