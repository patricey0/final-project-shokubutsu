export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  payload: users,
});
