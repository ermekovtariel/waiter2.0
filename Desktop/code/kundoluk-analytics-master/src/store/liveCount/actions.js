import { urls, API } from '../../config';
export const LIVE_COUNT = 'LIVE_COUNT';

export const getLiveCount = (start, end) => async (dispatch) => {
  const params = {
    start,
    end,
  };

  const token = localStorage.getItem('jwtToken');

  API(token)
    .get(urls.LIVE_COUNT, {
      params,
    })
    .then((res) => {
      console.log('res', res);
      dispatch({
        type: LIVE_COUNT,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
