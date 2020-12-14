import { urls, API } from '../../config';
export const GRADE_HISTORY = 'GRADE_HISTORY';

export const gradeHistoryAnalytic = (
  startDate,
  endDate,
  instructorId
) => async (dispatch) => {
  const params = {
    startDate,
    endDate,
    instructorId,
  };

  const token = localStorage.getItem('jwtToken');

  API(token)
    .get(urls.GRADE_HISTORY, {
      params,
    })
    .then((res) => {
      console.log('res', res);
      // const user = JSON.stringify(res.data);
      // localStorage.setItem('user', user);
      dispatch({
        type: GRADE_HISTORY,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
      // let errorMessage;
      // if (e.status == 400) {
      //     errorMessage = 'Неверные данные';
      // }
      // dispatch({
      //     type: AUTH_ERROR_MESSAGE,
      //     payload: errorMessage,
      // });
    });
};
