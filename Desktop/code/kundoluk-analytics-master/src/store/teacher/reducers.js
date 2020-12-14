import { GET_TEACHERS } from './actions';

const initialState = {
  teachers: null,
};

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };

    default:
      return state;
  }
};
