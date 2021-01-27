import { pizzasReducer } from "./pizzas/reducer";
import { combineReducers } from "redux";
import { priceReducer } from "./bascket/reducer";
import { bookedPizzas } from "./pizzasBox/reducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  price: priceReducer,
  busket: bookedPizzas,
});

export default rootReducer;
