import { LIVE_COUNT } from './actions';

const initialState = {
  liveCount: null,
};

export const liveCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIVE_COUNT:
      return {
        ...state,
        liveCount: action.payload,
      };

    default:
      return state;
  }
};
