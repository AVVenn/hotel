import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { CustomDrawer } from "../common/CustomDrawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemIcon from "@mui/material/ListItemIcon";

const Sidebar = ({ open, setOpen, pages, isAuth }) => {
  return (
    <CustomDrawer
      open={open}
      onClick={() => setOpen((prevVal) => (prevVal = false))}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "flex-end", height: "200px" }}
      >
        <IconButton onClick={() => setOpen((prevVal) => (prevVal = false))}>
          <ChevronLeftIcon color="primary" />
        </IconButton>
      </Toolbar>
      <Divider sx={{ backgroundColor: "primary.main" }} />
      <List>
        {pages.map((page) => (
          <ListItem key={page.path} component={RouterLink} to={page.path}>
            <ListItemButton
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "text.warning",
                  backgroundColor: "primary.main",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{page.icon}</ListItemIcon>
              {page.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};

export default Sidebar;
