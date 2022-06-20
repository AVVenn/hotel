import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getUser = (values, closeModal) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch("http://localhost:8800/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 200 && data.status < 500) {
          dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: { error: data.message },
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: { user: data },
          });
          closeModal(); //! легально?
        }
      })
      .catch((err) => {
        "Шото пошло не так";
      });
  };
};

const logOut = () => ({
  type: actionTypes.LOGIN_OUT,
  payload: {},
});

const registrationUser = (values, closeModal, resetForm) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_USER,
      payload: { isLoadingUser: true },
    });
    fetch("http://localhost:8800/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 399) {
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
          alert(
            `пользователь успешно зарегистрирован - можете войти под вашими логином и паролем`
          );
        }
      })
      .catch((err) => {
        "Шото пошло не так";
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
          // произошла ошбика
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

export default bindActionCreators(
  { logOut, getUser, registrationUser, resetErrorFields, updateDataInProfile },
  store.dispatch
);
