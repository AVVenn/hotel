import React, { useEffect, useState } from "react";

import {
  Typography,
  Grid,
  Avatar,
  CircularProgress,
  TextField,
  Fab,
} from "@mui/material";
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
  const { updateDataInProfile, changePhoto } = actionCreators;
  const user = useSelector(selectUser);
  const isLoadingUser = useSelector(selectisLoadingUser);
  const error = useSelector(selectErrorRegistration);

  const [photo, setPhoto] = useState(user.details.photo || "");

  useEffect(() => {}, [user]);

  const INITIAL_FORM_STATE = {
    email: user?.details.email,
    phone: user?.details.phone,
    firstName: user?.details.firstName,
    lastName: user?.details.lastName,
  };

  const { enqueueSnackbar } = useSnackbar();
  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  const uploadImage = (photo) => {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "upload");
    fetch("https://api.cloudinary.com/v1_1/avven/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setPhoto(data.url);
          changePhoto(data.url, user.details._id, showMesssage);
        }
      });
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
            values = { ...values, id: user?.details._id, photo: photo };
            console.log(values);
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
                  src={photo}
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <label htmlFor="photo">
                  <TextField
                    style={{ display: "none" }}
                    id="photo"
                    type="file"
                    onChange={({ target: { files } }) => {
                      setPhoto(files[0]);
                      uploadImage(files[0]);
                    }}
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
