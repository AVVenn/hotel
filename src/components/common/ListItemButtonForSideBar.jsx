import { ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ListItemButtonForSideBar = styled(ListItemButton)(
  ({ theme: { palette } }) => ({
    color: palette.primary.main,
    "&:hover": {
      color: palette.text.warning,
      backgroundColor: palette.primary.main,
    },
  })
);
