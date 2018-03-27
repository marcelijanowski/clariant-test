import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';

import './global/css/index.css';
import App from './container/app/App';
import registerServiceWorker from './service/service-worker/registerServiceWorker';

import {rootEpic, rootReducer} from './reducers';
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
