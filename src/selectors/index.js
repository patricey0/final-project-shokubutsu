/* eslint-disable max-len */
// export function findAnnounce(announces, searchedId) {
//   const announce = announces.find((oneAnnounce) => {
//     return oneAnnounce.id === searchedId;
//   });
//   return announce;
// }

// eslint-disable-next-line import/prefer-default-export
export function findAnnounce(announces, searchedId) {
  return announces.find((oneAnnounce) => oneAnnounce.id === searchedId);
}

export function findBookmarks(bookmark, searchedId) {
  if (typeof bookmark === 'string') {
    return;
  }
  // eslint-disable-next-line consistent-return
  return bookmark.find((el) => el.announce_id === searchedId);
}

export function fetchBookmarks(bookmarkList, announces) {
  // j'ai l'id 22 et 23 dans bookmark
  // je veux un renvoie avec les annonces
  const array = [];
  bookmarkList.forEach((arg) => announces.find((el) => el.id === arg.announce_id && array.push(el)));
  return array;
}
