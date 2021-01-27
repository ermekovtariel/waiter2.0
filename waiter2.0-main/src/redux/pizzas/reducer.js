const initialState = {
  items: [],
  isLoaded: false,
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PIZZAS":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
