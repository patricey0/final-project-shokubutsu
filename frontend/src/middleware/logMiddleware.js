// ! Revoir le cours SPE-E13 | E16
const logMiddleware = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log('Je laisse passer cette action: ', action);
  next(action);
};

export default logMiddleware;
