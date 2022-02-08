export const FETCH_ANNOUNCES = 'FETCH_ANNOUNCES';
export const SAVE_ANNOUNCES = 'SAVE_ANNOUNCES';
export const GET_MY_ANNOUNCES = 'GET_MY_ANNOUNCES';
export const SAVE_MY_ANNOUNCES = 'SAVE_MY_ANNOUNCES';
export const DELETE_ANNOUNCE = "DELETE_ANNOUNCE";
export const DELETE_ANNOUNCE_IN_DB = "DELETE_ANNOUNCE_IN_DB"

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

export const deleteAnnounceInDb = (announceId) => ({
  type: DELETE_ANNOUNCE_IN_DB, 
  payload : {
    announceId,
  },
});

export const deleteAnnounce = (announceId) => ({
  type: DELETE_ANNOUNCE, 
  payload : {
    announceId,
  },
});
