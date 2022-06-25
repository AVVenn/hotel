import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "../index";
import basicLink from "../../constants/basicLink";

const getAllQuestions = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch(basicLink + "questions")
      .then((res) => res.json())
      .then((data) => {
        if (data.status > 399) {
          console.log(`Поломались вопросы`);
        } else {
          dispatch({
            type: actionTypes.SET_QUESTIONS,
            payload: { allQuestions: data },
          });
        }
      });
  };
};

const sendQuetions = (values, showMesssage) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_QUESTIONS,
      payload: { isLoadingAllQuestions: true },
    });
    fetch(basicLink + "questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) =>
      response.json().then((obj) => {
        if (obj.status > 399) {
          showMesssage("Вопрос почему-то не был отправлен", "error");
        } else {
          dispatch({
            type: actionTypes.SEND_QUESTION,
            payload: { question: obj },
          });
          showMesssage("Вопрос отправлен", "success");
        }
      })
    );
  };
};

export default bindActionCreators(
  { getAllQuestions, sendQuetions },
  store.dispatch
);
