import { actionTypes } from "./actionType";
import FILTER_TYPE_ROOMS from "../../constants/filtersRoom";
import { addDays } from "date-fns";
const initialState = {
  rooms: [],
  currentFiLter: FILTER_TYPE_ROOMS.PRICE,
  filterText: "",
  isLoadingRooms: false,
  optionsForSearchRoom: {
    dateStart: new Date(),
    dateEnd: addDays(new Date(), 1),
    numberOfPerson: 1,
  },
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms,
        isLoadingRooms: false,
      };
    case actionTypes.FILTER_CHANGE_ROOMS:
      return {
        ...state,
        currentFiLter: action.payload.filterType,
      };
    case actionTypes.FILTER_QUERY_SEARCH_ROOMS:
      return {
        ...state,
        filterText: action.payload.filterText,
      };

    case actionTypes.SET_LOADING_ROOMS:
      return {
        ...state,
        isLoadingRooms: action.payload.isLoadingRooms,
      };
    case actionTypes.SET_SEARCH_PARAMS_ROOMS:
      return {
        ...state,
        optionsForSearchRoom: action.payload.optionsForSearchRoom,
      };
    case actionTypes.BOOKING_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((room) => ({
          ...room,
          booked:
            room._id === action.payload.id
              ? [...room.booked, action.payload.booking]
              : room.booked,
        })),
        isLoadingRooms: false,
      };

    case actionTypes.CANCEL_BOOKING_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((room) => ({
          ...room,
          booked: room.booked.filter(
            (reservation) =>
              reservation.reservationId !== action.payload.reservationId
          ),
        })),
        isLoadingRooms: false,
      };
    case actionTypes.CHANGE_RATING:
      return {
        ...state,
        rooms: state.rooms.map((room) => ({
          ...room,
          rating:
            room._id === action.payload.roomId
              ? [...room.rating, action.payload.rating]
              : room.rating,
        })),
      };
    default:
      return state;
  }
};
