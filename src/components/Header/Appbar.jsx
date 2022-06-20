import React, { useContext } from "react";
import Context from "../../сontext";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
import { TypographyForAppBar } from "../common/TypographyForAppBar";

import actionCreator from "../../redux/user/actionCreator";

import MenuIcon from "@mui/icons-material/Menu";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { routes } from "../../constants/routes";

const Appbar = ({ setOpen, pages, user }) => {
  const { handleOpenSignIn, handleOpenSignUp } = useContext(Context);
  const navigate = useNavigate();
  const { logOut } = actionCreator;
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
          <HomeWorkIcon sx={{ mr: 1, color: "text.warning", fontSize: 45 }} />
          <Typography noWrap sx={{ color: "text.warning", fontWeight: 500 }}>
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
          {(user && (
            <>
              <Tooltip title="Открыть профиль">
                <IconButton component={RouterLink} to={routes.PROFILE}>
                  <Avatar
                    sx={{ width: "70", height: "70", mr: 1 }}
                    alt={user.details.firstName}
                    src="/static/images/avatar/2.jpg"
                  />
                  <TypographyForAppBar>
                    {user?.details.firstName}
                  </TypographyForAppBar>
                </IconButton>
              </Tooltip>
              <ButtonOutlined
                onClick={() => {
                  logOut();
                  navigate("/");
                }}
                sx={{ p: { xs: 1, sm: "14px 20px" }, ml: 1.5 }}
              >
                Выйти
              </ButtonOutlined>
            </>
          )) || (
            <>
              <ButtonOutlined
                onClick={handleOpenSignIn}
                sx={{ p: { xs: 1, sm: "14px 20px" }, mr: 0.5 }}
              >
                Войти
              </ButtonOutlined>
              <ButtonOutlined
                sx={{ p: { xs: 1, sm: "14px 20px" } }}
                onClick={handleOpenSignUp}
              >
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
