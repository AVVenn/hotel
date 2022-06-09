import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { contacts } from "../../constants/contacts";

export const phones = [
  {
    text: contacts.PHONE_ZAVEDYUSHIY_MOBILE,
    link: "tel:+375333655204",
  },
  {
    text: contacts.PHONE_VAHTA,
    link: "tel:+375232252483",
  },
  {
    text: contacts.PHONE_ZAVEDYUSHIY_GOROD,
    link: "tel:+375232220096",
  },
];

export const socialMedia = [
  {
    path: "https://www.instagram.com/",
    icon: <InstagramIcon sx={{ color: "#FA2E77", fontSize: "inherit" }} />,
  },
  {
    path: "https://www.facebook.com/",
    icon: <FacebookIcon sx={{ color: "#1877F2", fontSize: "inherit" }} />,
  },
  {
    path: "https://twitter.com/",
    icon: <TwitterIcon sx={{ color: "#1D9BF0", fontSize: "inherit" }} />,
  },
];
