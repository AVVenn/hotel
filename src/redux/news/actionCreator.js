import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";
import basicLink from "../../constants/basicLink";

const getNews = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_NEWS,
      payload: {
        isLoadingNews: true,
      },
    });
    try {
      fetch(basicLink + "news")
        .then((res) => res.json())
        .then((data) => {
          if (data.status > 399) {
            console.log(`Новости не пришли`);
          } else {
            dispatch({
              type: actionTypes.SET_NEWS,
              payload: { news: data },
            });
          }
        });
    } catch {
      console.log(`Что-то пошло не так в новостях`);
    }
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
