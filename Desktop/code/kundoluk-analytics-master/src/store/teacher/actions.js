import { urls, API } from '../../config';
export const GET_TEACHERS = 'GET_TEACHERS';

export const getTeachers = (startDate, endDate, schoolId) => async (
  dispatch
) => {
  const token = localStorage.getItem('jwtToken');
  const params = {
    startDate,
    endDate,
    schoolId,
  };
  API(token)
    .get(urls.TEACHERS, {
      params,
    })
    .then((res) => {
      console.log('res', res);
      dispatch({
        type: GET_TEACHERS,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
