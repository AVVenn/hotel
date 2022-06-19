import React, { useContext } from "react";
import Context from "../../сontext";
import { contacts } from "../../constants/contacts";
import { Box, Typography, Grid } from "@mui/material";
import { BoxCenter, Container } from "../../components/common/CustomBoxes";
import { ButtonContained } from "../../components/common/Buttons";
import { Title } from "../../components/common/Title";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { CustomGrid } from "../../components/common/CustomGrid";
import { TypographyLeft } from "../../components/common/TypographyLeft";

import { Formik, Form } from "formik";
import Textfield from "../../components/common/FormsUI/Textfield";
import {
  INITIAL_FORM_STATE,
  FORM_VALIDATIOM,
} from "../../constants/formValidation";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";

const ContactsPage = () => {
  const { handleOpenSignIn } = useContext(Context);
  const user = useSelector(selectUser);

  return (
    <Container sx={{ px: 5 }}>
      <BoxCenter sx={{ mb: 4 }}>
        <PhoneAndroidIcon sx={{ mr: 1 }} />
        <Typography component="h2" variant="h2">
          Контакты
        </Typography>
      </BoxCenter>
      <CustomGrid container spacing={6}>
        <Grid item xs={12} ssm={6} sm={6} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Вахта
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон:</Title>
            <TypographyLeft>{contacts.PHONE_VAHTA}</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>{`График работы: `}</Title>
            <TypographyLeft>Ежедневно, круглосуточно, без обеда</TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={6} sm={6} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Заведующий общежитием
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон:</Title>
            <TypographyLeft>{contacts.PHONE_ZAVEDYUSHIY_GOROD}</TypographyLeft>
            <TypographyLeft>{contacts.PHONE_ZAVEDYUSHIY_MOBILE}</TypographyLeft>
          </Box>
          <Box>
            <Title>График работы:</Title>
            <TypographyLeft>
              Понедельник-пятница, 8:00-17:00, Обед: 12:30-13:20
            </TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={12} sm={10} md={6}>
          <TypographyLeft variant="h3" sx={{ mb: 3 }}>
            Приемная директора колледжа
          </TypographyLeft>
          <Box sx={{ mb: 3 }}>
            <Title>Телефон/факс:</Title>
            <TypographyLeft>{contacts.PHONE_PRIEMNAYA}</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>Email:</Title>
            <TypographyLeft>{contacts.MAIL_PRIEMNAYA}</TypographyLeft>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Title>График работы:</Title>
            <TypographyLeft>
              Понедельник-пятница, 8:00-17:00, Обед: 12:30-13:20
            </TypographyLeft>
          </Box>
        </Grid>
        <Grid item xs={12} ssm={10} sm={10} md={6}>
          <Typography component="h3" variant="h3" sx={{ mb: 3 }}>
            Задать вопрос
          </Typography>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATIOM}
            onSubmit={(values, { resetForm }) => {
              if (!user) {
                handleOpenSignIn();
              } else {
                console.log(values);
                resetForm({
                  values: {
                    ...INITIAL_FORM_STATE,
                  },
                });
              }
            }}
          >
            <Form>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Textfield
                    name="question"
                    label="Ваш вопрос"
                    multiline
                    rows={5}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Textfield label="Имя" name="name" />
                </Grid>
                <Grid item xs={6}>
                  <Textfield label="Email" name="email" />
                </Grid>
                <Grid item xs={6}>
                  <ButtonContained
                    type="submit"
                    sx={{ borderRadius: "15px", py: 1.5, px: 4 }}
                  >
                    Отправить
                  </ButtonContained>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </CustomGrid>
    </Container>
  );
};

export default ContactsPage;
