import { actionTypes } from "./actionType";
import basicLink from "../../constants/basicLink";
import { bindActionCreators } from "redux";
import { store } from "../index";
import { INITIAL_FORM_STATE_SIGN_UP } from "../../constants/formValidation";

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
              ...INITIAL_FORM_STATE_SIGN_UP,
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

const updateDataInProfile = (values, showMesssage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });

    fetch(basicLink + `users/${values.id}`, {
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
          showMesssage(data.message, "error");
        } else {
          dispatch({
            type: actionTypes.UPDATE_INFO_PROFILE,
            payload: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
            },
          });
          showMesssage("Данные успешно обновлены", "success");
        }
      });
  };
};

const cancelBooking = (reservationId, userId, showMesssage) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CANCEL_BOOKING, payload: { reservationId } });
    fetch(basicLink + `users/booking-cancel/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ reservationId }),
    })
      .then((data) => data.json())
      .then((info) => {
        if (info.status > 399) {
          showMesssage(info.message, "error");
        } else {
          showMesssage(info, "success");
        }
      });
  };
};

const addInfoAboutBooking = (obj, setOpenBookingAccepted) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch(basicLink + `users/booking/${obj.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((info) => {
        dispatch({
          type: actionTypes.UPDATE_AFTER_BOOKING,
          payload: { booking: info },
        });
      });
    setOpenBookingAccepted(true);
  };
};

const changePhoto = (photo, id, showMesssage) => {
  return (dispatch) => {
    fetch(basicLink + `users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ photo }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.CHANGE_PHOTO,
          payload: {
            photo: data.photo,
          },
        });
      });
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
    addInfoAboutBooking,
    changePhoto,
  },
  store.dispatch
);
