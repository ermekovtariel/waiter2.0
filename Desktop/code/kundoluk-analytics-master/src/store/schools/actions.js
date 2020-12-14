import { urls, API } from '../../config';
export const GET_SCHOOLS = 'GET_SCHOOLS';

export const getSchools = (startDate, endDate) => async (dispatch) => {
  const token = localStorage.getItem('jwtToken');
  const params = {
    startDate,
    endDate,
  };
  API(token)
    .get(urls.SCHOOLS, {
      params,
    })
    .then((res) => {
      console.log('res', res);
      dispatch({
        type: GET_SCHOOLS,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
