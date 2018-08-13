import React from "react";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { render, wait } from "react-testing-library";

import About from "../index";
import AboutPageObject from "../pageobjects/AboutPageObject";

import aboutReducers from "../actions/reducers";

jest.mock("../repositories/AboutRepository", () => {
  return {
    retrieveTeachers() {
      return Promise.resolve(["Ricardo Borillo", "Jaime Perera"]);
    }
  };
});

const configureStore = () => {
  return createStore(
    combineReducers({
      about: aboutReducers
    }),
    applyMiddleware(thunkMiddleware)
  );
};

describe("About", () => {
  let pageObject;

  beforeEach(() => {
    const store = configureStore();

    const componentDom = render(
      <Provider store={store}>
        <About />
      </Provider>
    );

    pageObject = new AboutPageObject(componentDom);
  });

  test("should present wellcome information", async () => {
    await wait(() => expect(pageObject.obtainTitle()).toBeDefined());
  });

  test("should show associated teachers", async () => {
    await wait(() => expect(pageObject.obtainTeachers()).toHaveLength(2));
  });
});
