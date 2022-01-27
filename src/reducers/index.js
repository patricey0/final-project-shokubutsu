// ! SPE-E16 | Combiner les reducers
import { combineReducers } from 'redux';
import userReducer from './user';
import announcesReducer from './announces';

const rootReducer = combineReducers({
  announces: announcesReducer,
  user: userReducer,
});

export default rootReducer;
