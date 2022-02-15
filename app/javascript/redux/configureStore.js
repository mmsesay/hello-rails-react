import { createStore, combineReducers } from "redux"
import { greetReducer } from './greet';

const reducers = combineReducers({
  greetReducer
});

const store = createStore(
  reducers,
  // applyMiddleware(logger, thunk),
);

export default store;
