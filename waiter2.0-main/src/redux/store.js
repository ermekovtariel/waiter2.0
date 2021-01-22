import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import { createLogger } from "redux-logger";

import thunk from "redux-thunk"; //for asynchronous actions
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "./reducer";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, createLogger()))
);

export default store;
