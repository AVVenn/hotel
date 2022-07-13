import React, { useContext, useState, createContext, useCallback } from "react";

export const ModalsContext = createContext();

export const useModalHandle = () => {
  return useContext(ModalsContext);
};

export const ModalsProvider = ({ children }) => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSingUp, setOpenSignUp] = useState(false);
  const [openBooking, setOpenBoking] = useState(false);
  const [openRating, setOpenRating] = useState(true);

  const [openBookingAccepted, setOpenBookingAccepted] = useState(false);

  const handleCloseBooking = useCallback(() => {
    //подумать нужен ли он здесь
    setOpenBoking(false);
  }, [setOpenBoking]);

  const handleOpenBooking = useCallback(() => {
    setOpenBoking(true);
  }, [setOpenBoking]);

  const handleOpenSignIn = useCallback(() => {
    setOpenSignIn(true);
  }, [setOpenSignIn]);

  const handleCloseSignIn = useCallback(() => {
    setOpenSignIn(false);
  }, [setOpenSignIn]);

  const handleOpenSignUp = useCallback(() => {
    setOpenSignUp(true);
  }, [setOpenSignUp]);

  const handleCloseSignUp = useCallback(() => {
    setOpenSignUp(false);
  }, [setOpenSignUp]);

  return (
    <ModalsContext.Provider
      value={{
        handleCloseBooking,
        handleOpenBooking,
        handleOpenSignIn,
        handleCloseSignIn,
        handleOpenSignUp,
        handleCloseSignUp,
        setOpenBookingAccepted,
        setOpenRating,
        openRating,
        openBookingAccepted,
        openSignIn,
        openSingUp,
        openBooking,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
