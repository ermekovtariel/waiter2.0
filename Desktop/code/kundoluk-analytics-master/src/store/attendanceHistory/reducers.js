import { ATTENDANCE_HISTORY } from './actions';

const initialState = {
  attendanceHistory: null,
};

export const attendanceHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTENDANCE_HISTORY:
      return {
        ...state,
        attendanceHistory: action.payload,
      };

    default:
      return state;
  }
};
