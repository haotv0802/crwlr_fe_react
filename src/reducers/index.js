import {combineReducers} from 'redux';
import crawledDataReducer from './crawledDataReducers';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses,
  crawledDataReducer
});
export default rootReducer;
