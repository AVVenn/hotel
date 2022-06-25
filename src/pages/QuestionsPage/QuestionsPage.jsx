import React, { useEffect } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  CircularProgress,
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
  INITIAL_FORM_STATE_CONTACTS_QESTION,
  FORM_VALIDATIOM_CONTACTS_QESTION,
} from "../../constants/formValidation";

import { format } from "date-fns";

import actionCreators from "../../redux/questions/actionCreators";
import { useSelector } from "react-redux";
import {
  selectAllQuestions,
  selectIsLoadingAllQuestions,
  selectAnsweredQuestions,
} from "../../redux/questions/questionSelectors";

import { useSnackbar } from "notistack";

const Questions = () => {
  const questions = useSelector(selectAllQuestions);
  const isLoadingQuestions = useSelector(selectIsLoadingAllQuestions);
  const answeredQuestions = useSelector(selectAnsweredQuestions);
  const { getAllQuestions, sendQuetions } = actionCreators;

  const { enqueueSnackbar } = useSnackbar();
  const showMesssage = (message, status) => {
    enqueueSnackbar(message, { variant: status });
  };

  useEffect(() => {
    if (!questions.length) {
      getAllQuestions();
    }
  }, []);

  const halfAnsweredQuestions = answeredQuestions.slice(
    0,
    Math.floor(answeredQuestions.length / 2)
  );

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
        {isLoadingQuestions ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            {halfAnsweredQuestions.map((question) => (
              <Grid item xs={12} ssm={12} sm={6} md={6} key={question._id}>
                <Accordion disableGutters>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography align="left" variant="body1">
                      {question.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "background.secondary",
                      fontStyle: "italic",
                    }}
                  >
                    <Typography>{question.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </>
        )}
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
            initialValues={{ ...INITIAL_FORM_STATE_CONTACTS_QESTION }}
            validationSchema={FORM_VALIDATIOM_CONTACTS_QESTION}
            onSubmit={(values, { resetForm }) => {
              sendQuetions(values, showMesssage);
              resetForm({
                values: {
                  ...INITIAL_FORM_STATE_CONTACTS_QESTION,
                },
              });
            }}
          >
            <Form>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Textfield
                    name="question"
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
        {isLoadingQuestions ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : (
          <>
            {answeredQuestions.map((question, index) => (
              <Grid item key={question._id + index} xs={12}>
                <Grid
                  container
                  sx={{
                    mb: 6,
                    border: "1px solid gray",
                    borderRadius: "15px",
                  }}
                >
                  <Grid item xs={3}>
                    <Typography sx={{ fontWeight: 600 }} variant="h6">
                      {question.name}
                    </Typography>
                    <Typography variant="body2">
                      {format(new Date(question.createdAt), "dd.MM.yyyy")}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      sx={{ mb: 2, borderBottom: "1px solid black" }}
                      variant="h6"
                    >
                      {question.question}
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "background.secondary",
                        fontStyle: "italic",
                      }}
                    >
                      {question.answer}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </>
        )}
      </CustomGrid>
    </Container>
  );
};
export default Questions;
