import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getAllQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch("http://localhost:8800/api/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_QUESTIONS,
          payload: { allQuestions: data },
        })
      );
  };
};

const sendQuetions = (values) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch("http://localhost:8800/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        question: values.question,
      }),
    }).then((response) => response.json().then((obj) => console.log(obj)));
  };
};

export default bindActionCreators(
  { getAllQuestions, sendQuetions },
  store.dispatch
);
