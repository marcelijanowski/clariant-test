import { combineReducers } from 'redux';

import { type } from './action';

export const reducer = {
  isFetching: (state = false, action) => {
    switch (action.type) {
      case type.GET_DATA_REQUEST:
      
        return true;
      default:
        return state;
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case type.GET_DATA_FAILURE:
        return action.payload.error;
      default:
        return state;
    }
  },
  data: (state = null, action) => {
    switch (action.type) {
      case type.GET_DATA_SUCCESS:
        return action.payload.data;
      default:
        return state;
    }
  }
}
export default combineReducers(reducer);
