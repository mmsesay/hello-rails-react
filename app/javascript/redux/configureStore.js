import { createStore } from "redux"

const initialState = {
  messages: []
};

const rootReducer = (state, action) => {
  console.log(action.type);
  switch(action.type) {
    default:
      return state;
  }
}

export const configureStore = () => {
  return store = createStore(rootReducer, initialState);
}
