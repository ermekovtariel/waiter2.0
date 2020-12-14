import { urls, API } from '../../config';
export const GET_RAYONS = 'GET_RAYONS';

export const getRayons = () => async (dispatch) => {
  const token = localStorage.getItem('jwtToken');

  await API(token)
    .get(urls.RAYON)
    .then((res) => {
      dispatch({
        type: GET_RAYONS,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
