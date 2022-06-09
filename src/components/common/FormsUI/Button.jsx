import React from "react";
import { ButtonContainedForModals } from "../Buttons";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    if (children === "Забронировать") submitForm();
  };

  const configButton = {
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <ButtonContainedForModals {...configButton}>
      {children}
    </ButtonContainedForModals>
  );
};

export default ButtonWrapper;
