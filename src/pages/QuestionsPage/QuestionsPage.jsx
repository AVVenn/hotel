import React from "react";

import {
  TextField,
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

const customQuestions = [
  {
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
    name: "Мария",
    date: "17 октября 2019",
    title:
      "Сколько детей может ехать в сопровождении одного взрослого, а также есть ли у вас скидки на проезд детей?",
    request:
      "В сопровождении одного взрослого совершать поездку могут до 7 детей (до 16 лет), но скидка 50% предоставляется детям до 10 лет в количестве не более 3 человек.",
  },
  {
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
          <Grid item xs={12} ssm={12} sm={6} md={6}>
            {item.request && (
              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography align="left" variant="body1">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: "#F1F6FA", fontStyle: "italic" }}
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
          <form action="">
            <TextField
              variant="outlined"
              label="write something"
              multiline
              rows={5}
              rowMax={10}
              fullWidth
              sx={{ mb: 2 }}
            ></TextField>
            <BoxCenter sx={{ mb: 2 }}>
              <TextField label="Имя" fullWidth variant="outlined"></TextField>
              <TextField label="Email" fullWidth variant="outlined"></TextField>
            </BoxCenter>
            <ButtonContained sx={{ borderRadius: "15px", py: 2, px: 8 }}>
              Отправить
            </ButtonContained>
          </form>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Заданные вопросы
          </Typography>
        </Grid>
        {customQuestions.map((question) => (
          <Grid item>
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
                    sx={{ backgroundColor: "#F1F6FA", fontStyle: "italic" }}
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
