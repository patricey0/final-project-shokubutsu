// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
// ! bien importer les middlewares
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import authMiddleware from '../middleware/auth';
import anouncesMiddleware from '../middleware/anounces';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// ! ajouter les middlewares ici
const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    anouncesMiddleware,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
