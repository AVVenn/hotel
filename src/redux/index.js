import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { roomsReducer } from "./rooms/roomsReducer";
import { newsReducer } from "./news/newsReducer";
import { allQuestionsReducer } from "./questions/questionsReducer";
import { userReducer } from "./user/userReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    apartments: roomsReducer,
    news: newsReducer,
    questions: allQuestionsReducer,
    user: userReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
