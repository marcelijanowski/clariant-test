import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

import { default as componentAReducer } from './componentA/reducer'
import { default as componentAEpic } from './componentA/epic';

export const rootReducer = combineReducers({
  componentA: componentAReducer
});

export const rootEpic = combineEpics(
  componentAEpic
);

