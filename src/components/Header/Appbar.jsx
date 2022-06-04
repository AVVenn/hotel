import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Typography,
} from "@mui/material";
import { BoxCenter, BoxSpaceAround } from "../common/CustomBoxes";
import { ButtonHeader, ButtonOutlined } from "../common/Buttons";

import MenuIcon from "@mui/icons-material/Menu";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Appbar = ({ setOpen, pages, isAuth }) => {
  return (
    <AppBar position="static">
      <BoxSpaceAround sx={{ height: "100px" }}>
        <IconButton
          onClick={() => setOpen((prevVal) => (prevVal = true))}
          color="primary"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <HomeWorkIcon sx={{ mr: 1, color: "text.orange", fontSize: 45 }} />
          <Typography noWrap sx={{ color: "text.orange", fontWeight: 500 }}>
            Общежитие ГТЭК
          </Typography>
        </Box>
        <BoxCenter sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <ButtonHeader
              component={RouterLink}
              key={page.path}
              to={page.path}
              sx={{
                px: 1,
                py: 2,
              }}
            >
              {page.name}
            </ButtonHeader>
          ))}
        </BoxCenter>
        <BoxCenter>
          {(isAuth && (
            <Tooltip title="Открыть профиль">
              <IconButton>
                <Avatar
                  sx={{ width: "50", height: "50" }}
                  alt="Profile"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          )) || (
            <>
              <ButtonOutlined sx={{ p: { xs: 1, sm: "14px 20px" }, mr: 0.5 }}>
                Войти
              </ButtonOutlined>
              <ButtonOutlined sx={{ p: { xs: 1, sm: "14px 20px" } }}>
                Зарегистрироваться
              </ButtonOutlined>
            </>
          )}
        </BoxCenter>
      </BoxSpaceAround>
    </AppBar>
  );
};
export default Appbar;
