import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import host from './host';

const rootReducer = combineReducers({
  host,
  routing
});

export default rootReducer;
