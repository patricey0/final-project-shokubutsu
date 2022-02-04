// eslint-disable-next-line import/prefer-default-export
export function findAnnounce(announces, searchedId) {
  return announces.find((oneAnnounce) => oneAnnounce.id === searchedId);
}
