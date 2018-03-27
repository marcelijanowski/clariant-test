import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

import { default as dashboardReducer } from './dashboard/reducer'
import { default as dashboardEpic } from './dashboard/epic';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export const rootEpic = combineEpics(
  dashboardEpic
);

