import axios from 'axios';
import { FETCH_ANOUNCES, saveAnounces } from 'src/actions/anounces';

const anounces = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANOUNCES: {
      const loadData = async (url) => {
        try {
          const res = await axios.get(url);
          // une fois les data reçues, on dispatch
          // l'action pour modifier le state
          // on utilise le store mis à disposition dans les params
          store.dispatch(saveAnounces(res.data));
        }
        catch (error) {
          console.log(error);
        }
      };

      loadData('http://localhost:3001/recipes');

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

export default anounces;
