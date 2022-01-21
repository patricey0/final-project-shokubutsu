import { SAVE_ANOUNCES, FETCH_ANOUNCES } from 'src/actions/anounces';

export const initialState = {
  list: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ANOUNCES: {
      return {
        ...state,
        loading: false,
      };
    }
    case SAVE_ANOUNCES: {
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
