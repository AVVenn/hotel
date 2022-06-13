import { actionTypes } from "./actionType";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getRooms = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch("http://localhost:8800/api/rooms")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: actionTypes.SET_ROOMS,
          payload: { rooms: data },
        })
      );
  };
};

const roomsFilterChange = (filterType) => ({
  type: actionTypes.FILTER_CHANGE_ROOMS,
  payload: { filterType },
});

const roomsQuerySearchChange = (text) => ({
  type: actionTypes.FILTER_QUERY_SEARCH_ROOMS,
  payload: { filterText: text },
});

export default bindActionCreators(
  { getRooms, roomsFilterChange, roomsQuerySearchChange },
  store.dispatch
);
