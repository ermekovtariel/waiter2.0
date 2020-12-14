import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { teachersReducer } from './teacher/reducers';
import { schoolsReducer } from './schools/reducers';
import { regionReducer } from './region/reducers';
import { rayonReducer } from './rayon/reducers';
import { gradeHistoryReducer } from './gradeHistory/reducers';
import { attendanceHistoryReducer } from './attendanceHistory/reducers';
import { liveCountReducer } from './liveCount/reducers';

export default combineReducers({
  auth: authReducer,
  schools: schoolsReducer,
  teachers: teachersReducer,
  regions: regionReducer,
  rayons: rayonReducer,
  gradeHistory: gradeHistoryReducer,
  attendanceHistory: attendanceHistoryReducer,
  liveCount: liveCountReducer,
});
