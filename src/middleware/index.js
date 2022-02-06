import announcesMW from 'src/middleware/announces';
import authMW from 'src/middleware/auth';
import usersMW from 'src/middleware/users';
import logMiddleware from './logMiddleware';

// on exporte un tableau avec tous les middlewares dedans
export default [
  announcesMW,
  authMW,
  logMiddleware,
  usersMW,
];
