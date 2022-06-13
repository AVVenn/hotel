import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getNews = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: {
        isLoadingNews: true,
      },
    });
    fetch("http://localhost:8800/api/news")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_NEWS,
          payload: { news: data },
        })
      );
  };
};

const newsQuerySearchChange = (text) => ({
  type: actionTypes.FILTER_QUERY_SEARCH_NEWS,
  payload: { filterText: text },
});

export default bindActionCreators(
  { getNews, newsQuerySearchChange },
  store.dispatch
);
