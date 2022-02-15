import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from '../redux/greet';


const Greeting = () => {
  const state = useSelector((state) => state.greetReducer.messages);
  const dispatch = useDispatch();

  const messages = state.map((response) => {
    return <li>{response.message}</li>;
  });

  return (
    <div>
      Greeting: 
      <button onClick={() => dispatch(getMessagesAction())}>Get Messages</button>
      <br />
      <ul>
       { messages }
      </ul>
    </div>
  );
}

export default Greeting;