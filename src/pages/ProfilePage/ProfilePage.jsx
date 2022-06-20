import React from "react";

import { Typography, Tabs, Tab, Box } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { BoxCenter, Container } from "../../components/common/CustomBoxes";
import BookingInfo from "./BookingInfo";
import SettingsProfile from "./SettingsPage/Settings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <BoxCenter>
        <ManageAccountsIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
          Профиль
        </Typography>
      </BoxCenter>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Ваши брони" {...a11yProps(0)} />
        <Tab label="Ваши настройки" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <BookingInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SettingsProfile />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Container>
  );
};

export default Profile;
