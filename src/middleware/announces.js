import axios from 'axios';
import { FETCH_ANNOUNCES, saveAnnounces, GET_MY_ANNOUNCES, saveMyAnnounces, DELETE_ANNOUNCE_IN_DB, deleteAnnounce } from 'src/actions/announces';

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
          console.log(res.data)
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
    case GET_MY_ANNOUNCES: {
      // on veut récup l'id
      const state = store.getState();
      console.log(state.user.id)
      const loadData = async (url) => {
        try {
          const res = await axios.get(url);
          // une fois les data reçues, on dispatch
          // l'action pour modifier le state
          // on utilise le store mis à disposition dans les params
          // Transforme la data reçu en array. Pour faciliter sa manipulation
          const announces = Object.values(res.data);
          console.log(announces)
          store.dispatch(saveMyAnnounces(announces));
        }
        catch (error) {
          console.log(error);
        }
      };

      loadData(`https://shokubutsu.herokuapp.com/v1/users/${state.user.id}/announces`);

      // axios.get('http://localhost:3001/recipes')
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));

      // si on souhaite gérer cette action dans le reducer
      // on la laisse passer
      next(action);
      break;
    }
    case DELETE_ANNOUNCE_IN_DB: {
      axios.delete(`https://shokubutsu.herokuapp.com/v1/announces/${action.payload.announceId}`)
            .then(
              (response) => {
                if(response.status === 200) {
                  store.dispatch(deleteAnnounce(action.payload.announceId))
                }
              }
            )
            .catch((error) => {console.log(error)})

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default announces;
