import {
  AUTH_SUCCESS_LOGIN,
  AUTH_SUCCESS_LOGOUT,
  AUTH_ERROR_MESSAGE,
} from './actions';

const initialState = {
  user: null,
  error: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS_LOGIN:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        error: null,
      };

    case AUTH_SUCCESS_LOGOUT:
      return {
        ...state,
        user: null,
      };
    case AUTH_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
