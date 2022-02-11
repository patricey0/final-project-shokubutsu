// ! SPE-E16 | Combiner les reducers
import { combineReducers } from 'redux';
import userReducer from './user';
import announcesReducer from './announces';
import bookmarksReducer from './bookmarks';
import usersReducer from './users';

const rootReducer = combineReducers({
  announces: announcesReducer,
  user: userReducer,
  users: usersReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;