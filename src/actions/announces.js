export const FETCH_ANNOUNCES = 'FETCH_ANNOUNCES';
export const SAVE_ANNOUNCES = 'SAVE_ANNOUNCES';
export const GET_MY_ANNOUNCES = 'GET_MY_ANNOUNCES';
export const SAVE_MY_ANNOUNCES = 'SAVE_MY_ANNOUNCES';


export const fetchAnnounces = () => ({
  type: FETCH_ANNOUNCES,
});

export const saveAnnounces = (announces) => ({
  type: SAVE_ANNOUNCES,
  payload: announces,
});

// appel a l'api
export const getMyAnnounces = () => ({
  type: GET_MY_ANNOUNCES,
});

export const saveMyAnnounces = (announces) => ({
  type: SAVE_MY_ANNOUNCES,
  payload: announces,
});
