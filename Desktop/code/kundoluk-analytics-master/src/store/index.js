import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from 'redux-state-sync';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};
const stateSyncConfig = {
  // blacklist: [''],
};

let middleware = [thunk, createStateSyncMiddleware(stateSyncConfig)];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, createLogger()];
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const cStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
initStateWithPrevTab(cStore);

export const store = cStore;
export const persistor = persistStore(cStore);
