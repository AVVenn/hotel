import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../constants/routes";

import { Box, Typography, IconButton, Stack } from "@mui/material";

import { BoxSpaceAround } from "../common/CustomBoxes";
import { TypographyForLink } from "../common/TypographyLink";
import { WhiteDivider } from "../common/WhiteDivider";

import { contacts, socialMedia } from "./forFooter";

const firstRowRoutes = [
  { name: "Комнаты", path: routes.ROOMS },
  { name: "Вопросы", path: routes.QUESTIONS },
  { name: "Правила оформления заказа", path: routes.RULES_BOOKING },
];
const secondRowRoutes = [
  { name: "Новости", path: routes.NEWS },
  { name: "Контакты", path: routes.CONTACTS },
  { name: "Правила", path: routes.RECIDENCE_RULES },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "gray.main", py: 3 }}>
      <BoxSpaceAround sx={{ flexDirection: { xs: "column", sm: "row" } }}>
        <BoxSpaceAround sx={{ flexDirection: "column", p: 2 }}>
          {contacts.map((contact) => (
            <TypographyForLink key={contact.link} href={contact.link}>
              {contact.text}
            </TypographyForLink>
          ))}
          <Stack spacing={2} direction="row">
            {socialMedia.map((social) => (
              <IconButton
                component="a"
                target="_blank"
                key={social.path}
                href={social.path}
                sx={{ fontSize: "35px" }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </BoxSpaceAround>
        <WhiteDivider />
        <BoxSpaceAround sx={{ flexDirection: "column", p: 2 }}>
          {firstRowRoutes.map((page) => (
            <TypographyForLink
              key={page.name}
              to={page.path}
              component={RouterLink}
            >
              {page.name}
            </TypographyForLink>
          ))}
        </BoxSpaceAround>
        <WhiteDivider />
        <BoxSpaceAround sx={{ flexDirection: "column", p: 2 }}>
          {secondRowRoutes.map((page) => (
            <TypographyForLink
              key={page.path}
              to={page.path}
              component={RouterLink}
            >
              {page.name}
            </TypographyForLink>
          ))}
        </BoxSpaceAround>
      </BoxSpaceAround>
      <WhiteDivider sx={{ display: "block" }} />
      <BoxSpaceAround
        sx={{ flexDirection: { xs: "column", sm: "row" }, pt: 3, px: 2 }}
      >
        <Typography variant="caption" color="text.white" align="center">
          УО «Гомельский торгово-экономический колледж» Белкоопсоюза
        </Typography>
        <Typography variant="caption" color="text.white" align="center">
          Разработка сайта - AvVen
        </Typography>
      </BoxSpaceAround>
    </Box>
  );
};
export default Footer;
