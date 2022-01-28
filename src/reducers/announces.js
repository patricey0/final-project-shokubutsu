import { SAVE_ANNOUNCES, FETCH_ANNOUNCES } from 'src/actions/announces';

export const initialState = {
  list: [],
  loading: true,
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
    }
    default:
      return state;
  }
};

export default reducer;
