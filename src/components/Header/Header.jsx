import React, { useState } from "react";
import { routes } from "../../constants/routes";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpIcon from "@mui/icons-material/Help";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";

const pages = [
  { name: "Главная", path: routes.HOME, icon: <HomeIcon /> },
  { name: "Комнаты", path: routes.ROOMS, icon: <MeetingRoomIcon /> },
  { name: "Новости", path: routes.NEWS, icon: <AnnouncementIcon /> },
  { name: "Контакты", path: routes.CONTACTS, icon: <PhoneIcon /> },
  { name: "Вопросы", path: routes.QUESTIONS, icon: <HelpIcon /> },
];

const Header = () => {
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Appbar pages={pages} setOpen={setOpen} isAuth={user} />
      <Sidebar pages={pages} open={open} setOpen={setOpen} isAuth={user} />
    </>
  );
};

export default Header;
