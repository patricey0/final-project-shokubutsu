export const FETCH_ANNOUNCES = 'FETCH_ANNOUNCES';
export const SAVE_ANNOUNCES = 'SAVE_ANNOUNCES';

export const fetchAnnounces = () => ({
  type: FETCH_ANNOUNCES,
});

export const saveAnnounces = (announces) => ({
  type: SAVE_ANNOUNCES,
  payload: announces,
});
