import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.crawledData, action) {
  switch(action.type) {
    case types.SAVE_AND_LOAD_CRAWLED_DATA:
      return action.crawledData;
    default:
      return state;
  }
}