import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from '../redux/greet';


const Greeting = ({ greeting }) => {
  const dispatch = useDispatch();

  return (
    <div>
      Greeting: {greeting}
      <button onClick={() => dispatch(getMessagesAction())}>Get Messages</button>
    </div>
  );
}

export default Greeting;