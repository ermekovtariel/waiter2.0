const initialState = {
  totalPrice: 5,
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};
