import { pizzasReducer } from "./pizzas/reducer";
import { combineReducers } from "redux";
import { priceReducer } from "./bascket/reducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  price: priceReducer,
});

export default rootReducer;
