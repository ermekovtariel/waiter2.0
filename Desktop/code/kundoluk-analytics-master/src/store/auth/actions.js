import { urls, API } from '../../config';

export const AUTH_SUCCESS_LOGIN = 'AUTH_SUCCESS_LOGIN';
export const AUTH_SUCCESS_LOGOUT = 'AUTH_SUCCESS_LOGOUT';
export const AUTH_ERROR_MESSAGE = 'AUTH_ERROR_MESSAGE';

const setToken = (token) => {
  localStorage.setItem('jwtToken', token);
};

export const login = (username, password) => async (dispatch) => {
  let data = JSON.stringify({
    username: username,
    password: password,
  });

  await API('')
    .post(urls.LOGIN, data)
    .then((res) => {
      console.log('res', res);
      setToken(res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({
        type: AUTH_SUCCESS_LOGIN,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e.message);
      let errorMessage = 'Неверные данные';
      dispatch({
        type: AUTH_ERROR_MESSAGE,
        payload: errorMessage,
      });
    });
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  await dispatch({ type: AUTH_SUCCESS_LOGOUT });
};
