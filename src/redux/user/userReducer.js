import { actionTypes } from "./actionType";

const initialState = {
  user: null,
  isLoadingUser: false,
  error: null,
  errorRegistration: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING_USER:
      return {
        ...state,
        isLoadingUser: action.payload.isLoadingUser,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoadingUser: false,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoadingUser: false,
      };
    case actionTypes.LOGIN_OUT:
      return {
        ...state,
        user: null,
      };
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        errorRegistration: null,
        isLoadingUser: false,
      };
    case actionTypes.REGISTRATION_FAILURE:
      return {
        ...state,
        errorRegistration: action.payload.error,
        isLoadingUser: false,
      };
    case actionTypes.RESET_ERROR_FIELDS:
      return {
        ...state,
        error: null,
        errorRegistration: null,
      };
    case actionTypes.UPDATE_AFTER_BOOKING:
      return {
        ...state,
        user: {
          ...state.user,
          details: {
            ...state.user.details,
            booking: [...state.user.details.booking, action.payload.booking],
          },
        },
        isLoadingUser: false,
      };
    case actionTypes.UPDATE_INFO_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          details: {
            ...state.user.details,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            phone: action.payload.phone,
          },
        },
        isLoadingUser: false,
      };
    case actionTypes.CANCEL_BOOKING:
      return {
        ...state,
        user: {
          ...state.user,
          details: {
            ...state.user.details,
            booking: state.user.details.booking.filter(
              (reserve) =>
                reserve.reservationId !== action.payload.reservationId
            ),
          },
        },
        isLoadingUser: false,
      };
    case actionTypes.CHANGE_PHOTO:
      return {
        ...state,
        user: {
          ...state.user,
          details: {
            ...state.user.details,
            photo: action.payload.photo,
          },
        },
      };
    default:
      return state;
  }
};
