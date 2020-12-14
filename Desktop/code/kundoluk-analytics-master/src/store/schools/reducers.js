import { GET_SCHOOLS } from './actions';

const initialState = {
  schoools: null,
};

export const schoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOLS:
      return {
        ...state,
        schools: action.payload,
      };

    default:
      return state;
  }
};
