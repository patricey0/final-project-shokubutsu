import {
  GET_USERS,
  SAVE_USERS,
} from '../actions/users';

export const initialState = {
  list: [],
  loading: true,
  myList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_USERS: {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
