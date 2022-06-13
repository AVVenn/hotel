import { actionTypes } from "./actionTypes";
const initialState = {
  allQuestions: [],
  isLoadingAllQuestions: false,
};

export const allQuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        allQuestions: action.payload.allQuestions,
        isLoadingAllQuestions: false,
      };
    case actionTypes.SET_LOADING_QUESTIONS:
      return {
        ...state,
        isLoadingAllQuestions: action.payload.isLoadingAllQuestions,
      };
    case actionTypes.SEND_QUESTION:
      return {
        ...state,
        allQuestions: [...state.allQuestions, action.payload.question],
        isLoadingAllQuestions: false,
      };
    default:
      return state;
  }
};
