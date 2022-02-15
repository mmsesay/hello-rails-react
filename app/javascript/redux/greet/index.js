// types
const GET_MESSAGE_REQUEST = 'greet/GET_MESSAGE_REQUEST';

// initial state
const initialState = {
  messages: [{
    message: "Yeah it works"
  }]
};

// Actions
export const getMessagesAction = () => ({
  type: GET_MESSAGE_REQUEST,
});

// reducer
export const greetReducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    default:
      return state;
  }
}