import React, { useState } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Dialog,
  Typography,
} from "@mui/material";
import DateForm from "./DateForm";
import MessageForm from "./MessageForm";
import Review from "./Review";
import { ButtonContainedForModals } from "../Buttons";

import { addDays } from "date-fns";
import { Formik, Form } from "formik";
import * as yup from "yup";
import ButtonWrapper from "../FormsUI/Button";

const steps = ["Ваши данные", "Пожелания", "Бронирование"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DateForm />;
    case 1:
      return <MessageForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const Booking = ({ open, handleCloseBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const phoneRegExp = /^\d{8}$/;

  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    peopleNumber: "",
    dataStart: new Date(),
    dataEnd: addDays(new Date(), 1),
    message: "",
  };
  const FORM_VALIDATIOM = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Больше 2х символов")
      .max(20, "Не больше 20 символов")
      .matches(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu, "Только буквы")
      .required("Обязательно"),
    lastName: yup
      .string()
      .min(2, "Больше 2х символов")
      .max(20, "Не больше 20 символов")
      .matches(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu, "Только буквы")
      .required("Обязательно"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Некорректный номер")
      .required("Обязательно"),
    email: yup.string().email("Некорректный email").required("Обязательно"),
    peopleNumber: yup.string().required("Обязательно"),
    message: yup.string().typeError("Только строки"),
  });

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATIOM}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Dialog onClose={handleCloseBooking} open={open}>
          <Container
            component="main"
            maxWidth="sm"
            sx={{ mb: 4, minWidth: "240px" }}
          >
            <Paper
              variant="outlined"
              sx={{
                my: 2,
                p: 1,
              }}
            >
              <Typography component="h1" variant="h4">
                Бронирование
              </Typography>
              <Stepper
                activeStep={activeStep}
                sx={{
                  pt: 3,
                  pb: 3,
                  display: { xs: "block", sm: "flex" },
                }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  <>
                    <Typography variant="h5">
                      Место успешно забронировано
                    </Typography>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep)}
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      {activeStep !== 0 && (
                        <ButtonContainedForModals
                          onClick={handleBack}
                          sx={{ p: 2, fontSize: "16px" }}
                        >
                          Назад
                        </ButtonContainedForModals>
                      )}

                      {activeStep === steps.length - 1 ? (
                        <ButtonWrapper sx={{ fontSize: "16px" }}>
                          Забронировать
                        </ButtonWrapper>
                      ) : (
                        <ButtonContainedForModals
                          onClick={handleNext}
                          sx={{ p: 2, fontSize: "16px" }}
                        >
                          Дальше
                        </ButtonContainedForModals>
                      )}
                    </Box>
                  </>
                )}
              </>
            </Paper>
          </Container>
        </Dialog>
      </Form>
    </Formik>
  );
};
export default React.memo(Booking);
