import React from "react"
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { configureStore } from "../redux/configureStore";
import Greeting from './Greeting'

const store = configureStore();
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Greeting greeting="Its working fine bro" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
