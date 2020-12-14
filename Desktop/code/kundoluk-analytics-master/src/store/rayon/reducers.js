import { GET_RAYONS } from './actions';

const initialState = {
  rayons: [],
};

export const rayonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RAYONS:
      return {
        ...state,
        rayons: action.payload,
      };

    default:
      return state;
  }
};
