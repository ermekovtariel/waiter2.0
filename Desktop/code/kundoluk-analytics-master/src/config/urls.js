const BASE_URL = 'https://kundoluk.kg/api/';
// const DEV_URL = 'https://develop.kundoluk.kg/api/';
const API_PREFIX = 'v1';

export const LOGIN = `${BASE_URL}${API_PREFIX}/auth/login`;
export const SCHOOLS = `${BASE_URL}${API_PREFIX}/analytic/grade`;
export const TEACHERS = `${BASE_URL}${API_PREFIX}/analytic/instructor`;
export const GRADE_HISTORY = `${BASE_URL}${API_PREFIX}/analytic/student-grade`;
export const ATTENDANCE_HISTORY = `${BASE_URL}${API_PREFIX}/analytic/student-attendance`;
export const REGION = `${BASE_URL}${API_PREFIX}/location/region`;
export const RAYON = `${BASE_URL}${API_PREFIX}/location/rayon/list`;
export const LIVE_COUNT = `${BASE_URL}${API_PREFIX}/user-track-page/list-range-count`;
