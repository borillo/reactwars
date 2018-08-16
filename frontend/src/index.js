import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

const loggerMiddleware = createLogger();

const appReducers = combineReducers({
  about: require("./About/actions/reducers").default,
  films: require("./Films/actions/reducers").default
});

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
