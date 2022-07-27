import { actionTypes } from "./actionType";
import basicLink from "../../constants/basicLink";
import { bindActionCreators } from "redux";
import { store } from "../index";

const getRooms = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch(basicLink + "rooms")
      .then((res) => res.json())
      .then((data) => {
        if (data.status > 399) {
          throw new Error(`что-то посыпалось`);
        } else {
          dispatch({
            type: actionTypes.SET_ROOMS,
            payload: { rooms: data },
          });
        }
        return data;
      })
      .catch((data) => console.log(data.message));
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

const bookingPlaces = (id, obj) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch(basicLink + `rooms/reservation/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status > 399) {
          console.log(`Не получилась бронь`);
        } else {
          dispatch({
            type: actionTypes.BOOKING_ROOM,
            payload: { id: id, booking: obj },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const cancelBookingRoom = (roomId, reservationId) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_LOADING_ROOMS,
      payload: { isLoadingRooms: true },
    });
    fetch(basicLink + `rooms/cancel-reservation/${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ reservationId: reservationId }),
    })
      .then((res) => res.json())
      .then((info) => {
        dispatch({
          type: actionTypes.CANCEL_BOOKING_ROOM,
          payload: { reservationId },
        });
      });
  };
};

const changeRatingRoom = (roomId, rating) => {
  return (dispatch) =>
    fetch(basicLink + `rooms/rating/${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ rating: rating }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status > 399 && result.status < 500) {
          console.log(result.message);
        } else {
          dispatch({
            type: actionTypes.CHANGE_RATING,
            payload: { roomId, rating },
          });
        }
      });
};

export default bindActionCreators(
  {
    getRooms,
    roomsFilterChange,
    roomsQuerySearchChange,
    changeOptionsForSearchRoom,
    bookingPlaces,
    cancelBookingRoom,
    changeRatingRoom,
  },
  store.dispatch
);
