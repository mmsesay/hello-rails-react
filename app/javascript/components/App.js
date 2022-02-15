import React from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Greeting from './Greeting';


// const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" >
            <Greeting greeting={"Its working fine bro"} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
