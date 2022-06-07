import React, { useState, useContext } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  InputAdornment,
} from "@mui/material";
import DateForm from "./DateForm";
import MessageForm from "./MessageForm";
import Review from "./Review";
import Context from "../../../сontext";

import { ButtonContained } from "../Buttons";

const steps = ["Выбор даты", "Контактная информация", "Проверка бронирования"];

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
  console.log(open);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Dialog onClose={handleCloseBooking} open={open}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Бронирование
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
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
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Назад
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Забронировать"
                      : "Дальше"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </Dialog>
  );
};
export default React.memo(Booking);
