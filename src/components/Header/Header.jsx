import React, { useState } from "react";
import { routes } from "../../constants/routes";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpIcon from "@mui/icons-material/Help";

const pages = [
  { name: "Главная", path: routes.HOME, icon: <HomeIcon /> },
  { name: "Комнаты", path: routes.ROOMS, icon: <MeetingRoomIcon /> },
  { name: "Новости", path: routes.NEWS, icon: <AnnouncementIcon /> },
  { name: "Контакты", path: routes.CONTACTS, icon: <PhoneIcon /> },
  { name: "Вопросы", path: routes.QUESTIONS, icon: <HelpIcon /> },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Appbar pages={pages} setOpen={setOpen} isAuth={isAuth} />
      <Sidebar pages={pages} open={open} setOpen={setOpen} isAuth={isAuth} />
    </>
  );
};

export default Header;
