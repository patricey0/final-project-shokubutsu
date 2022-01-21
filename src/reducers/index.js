// ! SPE-E16 | Combiner les reducers
import { combineReducers } from 'redux';
import userReducer from './user';
import anouncesReducer from './anounces';

export default combineReducers({
  user: userReducer,
  anounces: anouncesReducer,
});
