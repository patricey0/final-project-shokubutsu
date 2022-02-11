import {
  CHANGE_FIELD,
  SAVE_USER,
  LOGOUT,
  SAVE_FAV,
  SET_URL,
} from 'src/actions/user';

export const initialState = {
  logged: false,
  mail: '',
  password: '',
  city: '',
  nickname: '',
  picture: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGOUT: {
      // on vient faire un reset du state
      // en déversant le state initial dans un nouvel objet
      return {
        ...initialState,
      };
    }
    case SAVE_FAV: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_URL: {
      return {
        ...state,
        picture: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
