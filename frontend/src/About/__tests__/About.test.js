jest.mock("../AboutRepository");

import React from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { render, wait } from "react-testing-library";

import About from "../index";
import AboutPageObject from "../AboutPageObject";
import aboutReducers from "../actions/reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      about: aboutReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

describe("About", () => {
  let page;

  beforeEach(() => {
    const store = configureStore();

    const componentDom = render(
      <Provider store={store}>
        <About />
      </Provider>
    );

    page = new AboutPageObject(componentDom);
  });

  test("should present wellcome information", () => {
    const title = page.obtainTitle();

    expect(title).toBeDefined();
  });

  test("should show associated teachers", () => {
    const teachers = page.obtainTeachers();

    expect(teachers).toHaveLength(2);
  });
});
