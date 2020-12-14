import { urls, API } from '../../config';
export const GET_REGIONS = 'GET_REGIONS';

export const getRegions = () => async (dispatch) => {
  const token = localStorage.getItem('jwtToken');

  await API(token)
    .get(urls.REGION)
    .then((res) => {
      dispatch({
        type: GET_REGIONS,
        payload: res.data.content,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
