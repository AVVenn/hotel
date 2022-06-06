import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

const drawerWidth = 300;

export const CustomDrawer = styled(Drawer)(({ theme: { palette } }) => ({
  display: { xs: "block", md: "none" },
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    backgroundColor: palette.third,
  },
}));
