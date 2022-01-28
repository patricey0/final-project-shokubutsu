import axios from 'axios';
import { FETCH_ANNOUNCES, saveAnnounces } from 'src/actions/announces';

const announces = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANNOUNCES: {
      const loadData = async (url) => {
        try {
          const res = await axios.get(url);
          // une fois les data reçues, on dispatch
          // l'action pour modifier le state
          // on utilise le store mis à disposition dans les params
          // Transforme la data reçu en array. Pour faciliter sa manipulation
          const announces = Object.values(res.data);
          store.dispatch(saveAnnounces(announces));
        }
        catch (error) {
          console.log(error);
        }
      };

      loadData('https://shokubutsu.herokuapp.com/v1/announces');

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

export default announces;