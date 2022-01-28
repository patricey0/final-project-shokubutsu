// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
// ! bien importer les middlewares
import reducer from 'src/reducers';
import middlewares from 'src/middleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ! ajouter les middlewares ici
const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);


const store = createStore(reducer, enhancers);

// == Export
export default store;
