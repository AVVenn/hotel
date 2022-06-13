import { actionTypes } from "./actionType";
import FILTER_TYPE_ROOMS from "../../constants/filtersRoom";
const initialState = {
  rooms: [],
  currentFiLter: FILTER_TYPE_ROOMS.PRICE,
  filterText: "",
  isLoadingRooms: false,
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
    default:
      return state;
  }
};
