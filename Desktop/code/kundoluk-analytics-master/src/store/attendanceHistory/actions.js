import { urls, API } from '../../config';
export const ATTENDANCE_HISTORY = 'ATTENDANCE_HISTORY';

export const attendanceHistoryAnalytic = (
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
    .get(urls.ATTENDANCE_HISTORY, {
      params,
    })
    .then((res) => {
      console.log('res', res);
      // const user = JSON.stringify(res.data);
      // localStorage.setItem('user', user);
      dispatch({
        type: ATTENDANCE_HISTORY,
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
