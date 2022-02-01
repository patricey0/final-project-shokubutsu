import { SAVE_ANNOUNCES, FETCH_ANNOUNCES, SAVE_ANNOUNCE } from 'src/actions/announces';

export const initialState = {
  list: [],
  loading: true,
  newAnnounce: {
    title: "",
    description: "",
    picture: "",
    donation: null,
  }
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
    case SAVE_ANNOUNCE: {
      return {
        ...state,
        newAnnounce: {
          ...action.payload
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
