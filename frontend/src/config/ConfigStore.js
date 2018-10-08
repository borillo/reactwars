import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = createLogger();

const appReducers = combineReducers({
  about: require("../About/actions/reducers").default,
  films: require("../Films/actions/reducers").default
});

let middleWares = applyMiddleware(thunkMiddleware);

if (process.env["NODE_ENV"] === "development") {
  middleWares = composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}

const store = createStore(appReducers, middleWares);

export const buildStore = app => <Provider store={store}>{app}</Provider>;
