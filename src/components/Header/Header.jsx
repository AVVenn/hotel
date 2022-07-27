import React, { useState, useEffect } from "react";
import { routes } from "../../constants/routes";

import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import SignIn from "../common/modals/SignIn";
import SignUp from "../common/modals/SignUp";

import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpIcon from "@mui/icons-material/Help";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";
import findSuccessfulLiving from "../../utils/findSuccessfulLive";
import { useModalHandle } from "../../hooks/handleModalsHook";

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
  const { setOpenRating } = useModalHandle();

  useEffect(() => {
    if (user && findSuccessfulLiving(user.details.booking).length > 0) {
      setOpenRating(true);
    }
  }, []);

  console.log("header render");

  return (
    <>
      <SignIn />
      <SignUp />
      <Appbar pages={pages} setOpen={setOpen} user={user} />
      <Sidebar pages={pages} open={open} setOpen={setOpen} isAuth={user} />
    </>
  );
};

export default React.memo(Header);
