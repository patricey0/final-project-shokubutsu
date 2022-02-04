import { SAVE_ANNOUNCES, FETCH_ANNOUNCES, GET_MY_ANNOUNCES, SAVE_MY_ANNOUNCES } from 'src/actions/announces';

export const initialState = {
  list: [],
  loading: true,
  myList: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ANNOUNCES: {
      return {
        ...state,
        loading: true,
      };
    }
    case SAVE_ANNOUNCES: {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    };
    case GET_MY_ANNOUNCES: {
      return {
        ...state,
        loading: true,
      };
    };
    case SAVE_MY_ANNOUNCES: {
      return {
        ...state,
        loading: false,
        myList: action.payload,
      };
    };
    default:
      return state;
  }
};

export default reducer;
