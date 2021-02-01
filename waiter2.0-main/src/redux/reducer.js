import { pizzasReducer } from "./pizzas/reducer";
import { combineReducers } from "redux";

import { bookedPizzas } from "./pizzasBox/reducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  busket: bookedPizzas,
});

export default rootReducer;
