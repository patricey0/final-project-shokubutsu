import {
  CHANGE_FIELD,
  SAVE_USER,
  LOGOUT,
  SAVE_FAV,
} from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      // if (action.payload.name === 'email') {
      //   return {
      //     ...state,
      //     email: action.payload.value,
      //   };
      // }
      // return {
      //   ...state,
      //   password: action.payload.value,
      // };

      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        // pseudo: action.payload.pseudo,
        // logged: action.payload.logged,
        // token: action.payload.token,
        ...action.payload,
        // email: '',
        // password: '',
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
        // favorites: action.payload.favorites
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
