import React, {
  useContext,
  useState,
  createContext,
  useCallback,
  useMemo,
} from "react";

export const ModalsContext = createContext();

export const useModalHandle = () => {
  return useContext(ModalsContext);
};

export const ModalsProvider = ({ children }) => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSingUp, setOpenSignUp] = useState(false);
  const [openBooking, setOpenBoking] = useState(false);
  const [openRating, setOpenRating] = useState(false);

  const [openBookingAccepted, setOpenBookingAccepted] = useState(false);

  const handleCloseBooking = useCallback(() => {
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

  const value = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
