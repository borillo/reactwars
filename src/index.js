import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './App';

const loggerMiddleware = createLogger();

const appReducers = combineReducers({ 
  about: require('./About/actions/reducers').default,
  films: require('./Films/actions/reducers').default,
});

const store = createStore(
  appReducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
