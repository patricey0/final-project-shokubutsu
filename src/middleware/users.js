import axios from 'axios';
import {
  GET_USERS,
  saveUsers,
} from 'src/actions/users';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      const loadData = async (url) => {
        try {
          const res = await axios.get(url);
          // une fois les data reçues, on dispatch
          // l'action pour modifier le state
          // on utilise le store mis à disposition dans les params
          // Transforme la data reçu en array. Pour faciliter sa manipulation
          // const announces = Object.values(res.data);
          store.dispatch(saveUsers(Object.values(res.data)));
        }
        catch (error) {
          console.log(error);
        }
      };

      loadData('https://shokubutsu.herokuapp.com/v1/users');

      // axios.get('http://localhost:3001/recipes')
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));

      // si on souhaite gérer cette action dans le reducer
      // on la laisse passer
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default users;
