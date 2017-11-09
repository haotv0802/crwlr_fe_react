import {combineReducers} from 'redux';
import crawledData from './crawledDataReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  crawledData,
  courses
});
export default rootReducer;
