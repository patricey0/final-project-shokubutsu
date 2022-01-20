// ! SPE-E16 | Combiner les reducers
import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
  user: userReducer,
});
