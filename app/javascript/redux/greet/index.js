const GET_MESSAGE_REQUEST = 'greet/GET_MESSAGE_REQUEST';

const initialState = {
  messages: []
};

// Actions
export const getMessagesAction = () => ({
  type: GET_MESSAGE_REQUEST,
});

export const greetReducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    default:
      return state;
  }
}