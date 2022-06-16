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
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status > 200 && data.status < 500) {
          return dispatch({
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
      .catch(
        (err) => {
          "Шото пошло не так";
        }
        // dispatch({
        //   type: actionTypes.LOGIN_FAILURE,
        //   payload: err.,
        // })
      );
  };
};

const logOut = () => ({
  type: actionTypes.LOGIN_OUT,
  payload: {},
});

// const registration = async (values) => {
//   const response = await fetch("http://localhost:8800/api/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });
//   const data = await response.json();

//   if(data.status > 200 && data.status < 500) {
// 	data.
//   }
// };

export default bindActionCreators({ logOut, getUser }, store.dispatch);
