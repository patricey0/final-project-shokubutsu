export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_URL = 'SET_URL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_FAV = 'FETCH_FAV';
export const SAVE_FAV = 'SAVE_FAV';
export const SIGNUP = 'SIGNUP';
export const DELETE_USER = 'DELETE_USER';

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  payload: {
    value,
    name,
  },
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: {
    ...user,
  },
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const saveFav = (favorites) => ({
  type: SAVE_FAV,
  payload: {
    ...favorites,
  },
});

export const signUp = () => ({
  type: SIGNUP,
});

export const setUrl = (url) => ({
  type: SET_URL,
  payload: url
});

export const deleteUser = () => ({
  type: DELETE_USER,
})
