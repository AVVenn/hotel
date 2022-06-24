import { actionTypes } from "./actionType";
import basicLink from "../../constants/basicLink";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getUser = (values, closeModal, showMesssage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch(basicLink + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 399 && data.status < 500) {
          dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: { error: data.message },
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: { user: data },
          });
          closeModal();
          showMesssage("Вы вошли", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logOut = () => ({
  type: actionTypes.LOGIN_OUT,
  payload: {},
});

const registrationUser = (values, closeModal, resetForm, showMesssage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch(basicLink + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 399 && data.status < 500) {
          dispatch({
            type: actionTypes.REGISTRATION_FAILURE,
            payload: { error: data.message },
          });
        } else {
          dispatch({
            type: actionTypes.REGISTRATION_SUCCESS,
            payload: {},
          });
          resetForm({
            values: {
              username: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              phone: "",
              firstName: "",
              lastName: "",
            },
          });
          closeModal();
          showMesssage(
            `пользователь успешно зарегистрирован - можете войти под вашими логином и паролем`,
            "success"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const resetErrorFields = () => ({
  type: actionTypes.RESET_ERROR_FIELDS,
});

const updateDataInProfile = (values) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch(`http://localhost:8800/api/users/${values.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status > 399) {
          // произошла ошбика модалка
        } else {
          console.log(data);
          dispatch({
            type: actionTypes.UPDATE_INFO_PROFILE,
            payload: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
            },
          });
        }
      });
  };
};

const cancelBooking = (reservationId, userId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CANCEL_BOOKING, payload: { reservationId } });
    fetch(`http://localhost:8800/api/users/booking-cancel/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ reservationId }),
    })
      .then((data) => data.json())
      .then((info) => console.log(info));
  };
};

export default bindActionCreators(
  {
    logOut,
    getUser,
    registrationUser,
    resetErrorFields,
    updateDataInProfile,
    cancelBooking,
  },
  store.dispatch
);
