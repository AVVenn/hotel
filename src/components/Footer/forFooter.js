import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const contacts = [
  {
    text: "+375 33 365 52 04",
    link: "tel:+375333655204",
  },
  {
    text: "+375 232 25 24 83",
    link: "tel:+375232252483",
  },
  {
    text: "+375 232 22 00 96",
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
