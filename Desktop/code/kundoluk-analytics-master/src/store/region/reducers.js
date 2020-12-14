import { GET_REGIONS } from './actions';

const initialState = {
  regions: [],
};

export const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        regions: action.payload,
      };

    default:
      return state;
  }
};
