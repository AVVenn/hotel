import React from "react";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { ButtonContained } from "../../components/common/Buttons";
import { BoxCenter, Container } from "../../components/common/CustomBoxes";
import { CustomGrid } from "../../components/common/CustomGrid";

import { Formik, Form } from "formik";
import Textfield from "../../components/common/FormsUI/Textfield";
import {
  INITIAL_FORM_STATE,
  FORM_VALIDATIOM,
} from "../../constants/formValidation";

const customQuestions = [
  {
    id: 1,
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    id: 2,
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    id: 3,
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    id: 4,
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    id: 5,
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
  },
];

const Questions = () => {
  return (
    <Container>
      <BoxCenter sx={{ mb: 4 }}>
        <MessageIcon sx={{ mr: 2 }} />
        <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
          Популярные вопросы и ответы
        </Typography>
      </BoxCenter>
      <Typography component="h3" variant="h5" sx={{ mb: 4 }}>
        Прочитав данный раздел, вы найдете ответы на большинство волнующих вас
        вопросов
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        В данном разделе мы собрали вопросы, которые наиболее часто задают наши
        клиенты, а также ответили на каждый из них, чтобы проживание было
        максимально комфортным и приносило только положительные эмоции. Если в
        данном разделе не нашлось ответа на интересующий вас вопрос, пожалуйста,
        заполните форму внизу страницы с описанием вопроса, мы обязательно на
        него ответим!
      </Typography>
      <CustomGrid container spacing={2}>
        {customQuestions.map((item, index) => (
          <Grid item xs={12} ssm={12} sm={6} md={6} key={item.id}>
            {item.request && (
              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography align="left" variant="body1">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "background.secondary",
                    fontStyle: "italic",
                  }}
                >
                  <Typography>{item.request}</Typography>
                </AccordionDetails>
              </Accordion>
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h6">
            Вы можете задать нам вопрос, выразить благодарность, или
            пожаловаться на водителя. А также внести предложение по улучшению
            нашей работы. Ваше обращение появится на сайте после нашего ответа.
          </Typography>
        </Grid>
        <Grid item sx={{ my: 2 }} xs={12} ssm={12} sm={10} md={10}>
          <BoxCenter sx={{ mb: 2 }}>
            <HelpOutlineIcon sx={{ fontSize: "30px", mr: 2 }} />
            <Typography component="h3" variant="h3">
              Задать вопрос
            </Typography>
          </BoxCenter>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATIOM}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Textfield
                    name="message"
                    label="Ваш вопрос"
                    multiline
                    rows={7}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Textfield label="Имя" name="name" />
                </Grid>
                <Grid item xs={6}>
                  <Textfield name="email" label="Email" />
                </Grid>
                <Grid item xs={6}>
                  <ButtonContained
                    type="submit"
                    sx={{ borderRadius: "15px", py: 2, px: 8 }}
                  >
                    Отправить
                  </ButtonContained>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Заданные вопросы
          </Typography>
        </Grid>
        {customQuestions.map((question) => (
          <Grid item key={question.key}>
            {question.request && (
              <Grid
                container
                sx={{ mb: 6, border: "1px solid gray", borderRadius: "15px" }}
              >
                <Grid item xs={2}>
                  <Typography sx={{ fontWeight: 600 }} variant="h6">
                    {question.name}
                  </Typography>
                  <Typography variant="body2">{question.date}</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    sx={{ mb: 2, borderBottom: "1px solid black" }}
                    variant="h6"
                  >
                    {question.title}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "background.secondary",
                      fontStyle: "italic",
                    }}
                  >
                    {question.request}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        ))}
      </CustomGrid>
    </Container>
  );
};
export default Questions;
