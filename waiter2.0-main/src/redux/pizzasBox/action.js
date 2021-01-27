export const addToBusket = (item) => async (dispatch) => {
  console.log("BOOKED_PIZZAS", item);
  dispatch({
    type: "BOOKED_PIZZAS",
    payload: item,
  });
  dispatch({
    type: "SET_TOTAL_PRICE",
    payload: item.price,
  });
};
