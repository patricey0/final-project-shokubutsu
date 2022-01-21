import axios from 'axios';
import {
  LOGIN,
  saveUser,
  FETCH_USER,
  LOGOUT,
} from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((res) => {
          // stockage du token dans le localStorage
          localStorage.setItem('token', res.data.token);
          // stockage des infos de l'api dans le state
          store.dispatch(saveUser(res.data));
        })
        .catch((err) => console.log(err));
      break;
    }
    case FETCH_USER: {
      // on va vérifier si on a un token dans le localStorage
      const token = localStorage.getItem('token');

      if (token) {
        // si oui on enverra une requête à l'api pour récupérer le username
        axios.get('http://localhost:3001/username', {
          // on passe le token dans le header Authorization de notre requête
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => store.dispatch(saveUser(res.data)))
          .catch((err) => console.log(err));
      }

      break;
    }
    case LOGOUT: {
      // suppression du token dans le localStorage
      localStorage.removeItem('token');
      // on traite cette action dans le user reducer
      // il faut donc la passer
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
