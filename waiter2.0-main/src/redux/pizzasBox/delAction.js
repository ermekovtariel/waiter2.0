export const delFromBusket = (item) => async (dispatch) => {
    dispatch({
        type: "DEL_TOTAL_PRICE",
        payload: item.price,
      });
    dispatch({
        type: "DEL_BOOKED_PIZZAS",
        payload: item.id,
      });
  };
  