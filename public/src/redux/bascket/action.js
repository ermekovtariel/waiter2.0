export const getPrice = () => async (dispatch) => {
  return dispatch({
    type: "GET_PRICE",
    payload: 2,
  });
};
