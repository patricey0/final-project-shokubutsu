export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS';
export const SAVE_BOOKMARKS = 'SAVE_BOOKMARKS';
export const ADD_BOOKMARKS = 'ADD_BOOKMARKS';
export const DELETE_BOOKMARKS = 'DELETE_BOOKMARKS';


export const fetchBookmarks = () => ({
  type: FETCH_BOOKMARKS,
});

export const saveBookmarks = (bookmarks) => ({
  type: SAVE_BOOKMARKS,
  payload: bookmarks,
});
export const addBookmarks = (idBookmarks) => ({
  type: ADD_BOOKMARKS,
  payload: idBookmarks,

});
export const deleteBookmarks = (idBookmarks) => ({
    type: DELETE_BOOKMARKS,
    payload: idBookmarks,
});
