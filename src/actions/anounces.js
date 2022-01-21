export const FETCH_ANOUNCES = 'FETCH_ANOUNCES';
export const SAVE_ANOUNCES = 'SAVE_ANOUNCES';

export const fetchAnounces = () => ({
  type: FETCH_ANOUNCES,
});

export const saveAnounces = (anounces) => ({
  type: SAVE_ANOUNCES,
  payload: anounces,
});
