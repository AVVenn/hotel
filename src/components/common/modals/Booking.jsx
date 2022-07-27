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

import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form } from "formik";
import ButtonWrapper from "../FormsUI/Button";

import { useSelector } from "react-redux";
import {
  selectOptionsForSearchRoom,
  selectRoomsWithFreePlaces,
} from "../../../redux/rooms/roomsSelectors";
import { selectUser } from "../../../redux/user/userSelectors";
import actionCreators from "../../../redux/rooms/actionCreators";
import actionCreatorsUser from "../../../redux/user/actionCreator";
import { useNavigate } from "react-router-dom";

import { FORM_VALIDATIOM_BOOKING } from "../../../constants/formValidation";

import { useModalHandle } from "../../../hooks/handleModalsHook";

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

const Booking = () => {
  const { handleCloseBooking, setOpenBookingAccepted, openBooking } =
    useModalHandle();
  const open = openBooking;

  const navigate = useNavigate();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const options = useSelector(selectOptionsForSearchRoom);
  const freePlacesInRoom = useSelector(selectRoomsWithFreePlaces);
  const pricePlace = freePlacesInRoom.find((rooms) => rooms._id === id)?.price;

  const { bookingPlaces } = actionCreators;
  const { addInfoAboutBooking } = actionCreatorsUser;

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const INITIAL_FORM_STATE = {
    firstName: user?.details?.firstName,
    lastName: user?.details?.lastName,
    phone: user?.details?.phone,
    email: user?.details?.email,
    numberOfPerson: +options.numberOfPerson,
    dateStart: options.dateStart,
    dateEnd: options.dateEnd,
    placePrice: pricePlace,
    message: "",
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATIOM_BOOKING}
      enableReinitialize={true}
      onSubmit={(values, { resetForm }) => {
        values = {
          ...values,
          userId: user?.details._id,
          roomId: id,
          reservationId: uuidv4(),
          isVotedRating: false,
        };
        bookingPlaces(id, values);
        addInfoAboutBooking(values, setOpenBookingAccepted);
        handleCloseBooking();
        resetForm({
          values: { ...INITIAL_FORM_STATE },
        });
        setActiveStep(0);
        navigate("/");
      }}
    >
      <Form>
        <Dialog onClose={handleCloseBooking} open={open} fullWidth>
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
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  {activeStep !== 0 && (
                    <ButtonContainedForModals
                      onClick={handleBack}
                      sx={{ p: 2, fontSize: "20px" }}
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
                      sx={{ p: 2, fontSize: "20px" }}
                    >
                      Дальше
                    </ButtonContainedForModals>
                  )}
                </Box>
              </>
            </Paper>
          </Container>
        </Dialog>
      </Form>
    </Formik>
  );
};
export default React.memo(Booking);
