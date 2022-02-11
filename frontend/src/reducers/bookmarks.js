import {
  SAVE_BOOKMARKS, FETCH_BOOKMARKS, ADD_BOOKMARKS, DELETE_BOOKMARKS,
} from 'src/actions/bookmarks';

export const initialState = {
  bookmarks: [],
  loading: true,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_BOOKMARKS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_BOOKMARKS: {
      return {
        ...state,
        bookmarks: action.payload,
        loading: false,
      };
    }
    case ADD_BOOKMARKS: {
      return {
        ...state,
        bookmarks: action.payload,
      };
    }
    case DELETE_BOOKMARKS: {
      return {
        ...state,
        bookmarks: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
