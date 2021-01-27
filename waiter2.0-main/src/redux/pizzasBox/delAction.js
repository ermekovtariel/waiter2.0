export const delFromBusket = ({price, id}) => async (dispatch) => {
    dispatch({
        type: "DEL_TOTAL_PRICE",
        payload: price,
      });
    dispatch({
        type: "DEL_BOOKED_PIZZAS",
        payload: id,
      });
  };
  