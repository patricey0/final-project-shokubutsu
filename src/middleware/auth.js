import axios from 'axios';
import {
  LOGIN,
  saveUser,
  FETCH_USER,
  LOGOUT,
  SIGNUP,
} from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios.post('https://shokubutsu.herokuapp.com/v1/login', {
        mail: state.user.mail,
        password: state.user.password,
      })
        .then((res) => {
          // stockage du token dans le localStorage
          localStorage.setItem('token', res.data.jwt);
          // stockage des infos de l'api dans le state
          store.dispatch(saveUser(res.data));
        })
        .catch((err) => {
          console.log(err.message);
        });
      break;
    }
    case FETCH_USER: {
      // au rendu de l'app
      // on va vérifier si on a un token dans le localStorage
      const token = localStorage.getItem('token');
      if (token) {
        // si oui on enverra une requête à l'api pour récupérer le username
        axios.get('https://shokubutsu.herokuapp.com/v1/login/reconnect', {
          // on passe le token dans le header Authorization de notre requête
          headers: {
            authorization: token,
          },
        })
          .then((res) => store.dispatch(saveUser(res.data)))
          .catch((err) => console.log(err));
      }

      break;
    }
    case SIGNUP: {
      const state = store.getState();
      console.log(state);
      axios.post('https://shokubutsu.herokuapp.com/v1/users', {
        nickname: state.user.nickname,
        mail: state.user.mail,
        password: state.user.password,
        city: state.user.city,
        picture: state.user.picture,
        isAdmin: false,
      })
        .then((res) => {
          // stockage du token dans le localStorage
          // stockage des infos de l'api dans le state
          // todo controler le retour de bdd
          // si erreur : delete la photo de cloudinary

          // sinon dispatch la réponse
          console.log('result // signup :', res.data);
          localStorage.setItem('token', res.data.jwt);
          store.dispatch(saveUser(res.data));
        })
        .catch((err) => {
          axios.delete('https://shokubutsu.herokuapp.com/v1/delete-image', {
            image_url: state.user.picture,
          });
          console.log(err.message);
        });
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
