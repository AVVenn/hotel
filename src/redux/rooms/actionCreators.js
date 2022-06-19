import { actionTypes } from "./actionType";
import { actionTypes as actionTypesUsers } from ".././user/actionType";
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

const changeOptionsForSearchRoom = (obj) => ({
  type: actionTypes.SET_SEARCH_PARAMS_ROOMS,
  payload: { optionsForSearchRoom: obj },
});

const bookingPlaces = (id, obj, setOpenBookingAccepted) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch(`http://localhost:8800/api/rooms/reservation/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.BOOKING_ROOM,
          payload: { id: id, booking: obj },
        });
        dispatch({
          type: actionTypesUsers.SET_LOADING_USER,
          payload: { isLoadingUser: true },
        });
        fetch(`http://localhost:8800/api/users/booking/${obj.userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((res) => res.json())
          .then((info) => {
            dispatch({
              type: actionTypesUsers.UPDATE_AFTER_BOOKING,
              payload: { booking: obj },
            });
          });
        setOpenBookingAccepted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default bindActionCreators(
  {
    getRooms,
    roomsFilterChange,
    roomsQuerySearchChange,
    changeOptionsForSearchRoom,
    bookingPlaces,
  },
  store.dispatch
);
