import React, { useEffect, useState } from "react";

import {
  Typography,
  Grid,
  Avatar,
  CircularProgress,
  Button,
  Fab,
} from "@mui/material";
import { ButtonOutlined } from "../../../components/common/Buttons";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectisLoadingUser,
  selectErrorRegistration,
} from "../../../redux/user/userSelectors";

import { useSnackbar } from "notistack";

import { Formik, Form } from "formik";
import ButtonWrapper from "../../../components/common/FormsUI/Button";
import Textfield from "../../../components/common/FormsUI/Textfield";
import { FORM_VALIDATION } from "./forFormik";
import actionCreators from "../../../redux/user/actionCreator";

const SettingsProfile = () => {
  const { updateDataInProfile } = actionCreators;
  const user = useSelector(selectUser);
  const isLoadingUser = useSelector(selectisLoadingUser);
  const error = useSelector(selectErrorRegistration);

  // const uploadImage = (files) => {
  //   setPhoto(files);
  //   const formData = new FormData();
  //   formData.append("file", files);
  //   formData.append("upload_preset", "upload");
  //  fetch("https://api.cloudinary.com/v1_1/avven/image/upload", {
  //       method: "POST",
  //       body: formData,
  //     }).then((res) => res.json()).then(data => console.log(data))
  //   }
  // };

  useEffect(() => {}, [user]);

  const INITIAL_FORM_STATE = {
    photo: user?.details.photo,
    email: user?.details.email,
    phone: user?.details.phone,
    firstName: user?.details.firstName,
    lastName: user?.details.lastName,
  };

  const { enqueueSnackbar } = useSnackbar();
  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">Контактная информация</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: 8 }}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values, { resetForm }) => {
            values = { ...values, id: user?.details._id };
            updateDataInProfile(values, showMesssage);
            resetForm({ values: { ...INITIAL_FORM_STATE } });
          }}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Avatar
                  alt={user?.details.firstName}
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <label htmlFor="photo">
                  <Textfield
                    style={{ display: "none" }}
                    id="photo"
                    name="photo"
                    type="file"
                    // onChange={({ target: { files } }) => {
                    // }}
                  />
                  <Fab
                    color="primary.main"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                  >
                    <SaveIcon /> Загрузить
                  </Fab>
                </label>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Textfield name="firstName" label="Ваше имя" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="lastName" label="Ваша фамилия" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="email" label="Ваш email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="phone" label="Ваш телефон" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", alignItems: "center" }}
              >
                {isLoadingUser ? (
                  <CircularProgress />
                ) : (
                  <>
                    <ButtonWrapper sx={{ mb: 2 }}>Сохранить</ButtonWrapper>
                    <Typography color="error">{error}</Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default SettingsProfile;
