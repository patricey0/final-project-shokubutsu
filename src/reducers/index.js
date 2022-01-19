// ! SPE-E16 | Combiner les reducers
import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
  counter,
});
