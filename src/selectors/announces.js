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
