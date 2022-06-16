import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getUser = (values) => {
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
      body: JSON.stringify(values),
    }).then((data) =>
      data.json().then((obj) =>
        dispatch({
          type: actionTypes.LOGIN_SUCCES,
          payload: { user: obj },
        })
      )
    );
  };
};

export default bindActionCreators({ getUser }, store.dispatch);
