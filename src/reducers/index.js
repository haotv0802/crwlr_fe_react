import {combineReducers} from 'redux';
import crawledData from './crawledDataReducer';

const rootReducer = combineReducers({
  crawledData
});
export default rootReducer;
