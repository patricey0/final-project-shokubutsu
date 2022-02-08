import { SAVE_ANNOUNCES, FETCH_ANNOUNCES, GET_MY_ANNOUNCES, SAVE_MY_ANNOUNCES, DELETE_ANNOUNCE } from 'src/actions/announces';
import { DELETE_ANNOUNCE_IN_DB } from '../actions/announces';

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
    case DELETE_ANNOUNCE_IN_DB: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_ANNOUNCE: {
      return {
        ...state,
        loading: false,
        myList: state.myList.filter(item => item.id !== action.payload.announceId)
      }
    }
    default:
      return state;
  }
};

export default reducer;
