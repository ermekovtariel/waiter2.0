import { GRADE_HISTORY } from './actions';

const initialState = {
  gradeHistory: null,
};

export const gradeHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRADE_HISTORY:
      return {
        ...state,
        gradeHistory: action.payload,
      };

    default:
      return state;
  }
};
