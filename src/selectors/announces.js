export function findAnnounce(announces, searchedId) {
  const announce = announces.find((oneAnnounce) => {
    return oneAnnounce.id === searchedId;
  });
  return announce;
}
