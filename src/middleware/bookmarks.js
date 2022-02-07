import axios from 'axios';
import { FETCH_BOOKMARKS, saveBookmarks, ADD_BOOKMARKS, DELETE_BOOKMARKS} from 'src/actions/bookmarks';

const announces = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BOOKMARKS: {
    const state = store.getState();
    console.log(state)
    if(state.user.id) {
        console.log("j'ai des favoris")
        const loadData = async (url) => {
          try {
            const res = await axios.get(url);
            console.log(res.data)
            const announces = Object.values(res.data);
            store.dispatch(saveBookmarks(announces));
          }
          catch (error) {
            console.log(error);
          }
        };
        loadData(`https://shokubutsu.herokuapp.com/v1//bookmarks/${state.user.id}`);
    }
      next(action);
      break;
    }
    case ADD_BOOKMARKS: {
        const state = store.getState();
        console.log(state.user.id)
        console.log(action.payload)
        console.log("je veux être ajouté aux favoris")
        
        // if(state.user.id) {
        //     console.log("j'ai des favoris")
        //     const loadData = async (url) => {
        //       try {
        //         const res = await axios.post(url);
        //         console.log(res.data)
        //         const announces = Object.values(res.data);
        //         store.dispatch(saveBookmarks(announces));
        //       }
        //       catch (error) {
        //         console.log(error);
        //       }
        //     };
            // loadData(`https://shokubutsu.herokuapp.com/v1//bookmarks/${state.user.id}/${action.payload}`);
        // }
          next(action);
          break;
        }
        case DELETE_BOOKMARKS: {
            const state = store.getState();
            console.log(state.user.id)
            console.log(action.payload)
            console.log("je veux être supprimé des favoris")
            
            // if(state.user.id) {
            //     console.log("j'ai des favoris")
            //     const loadData = async (url) => {
            //       try {
            //         const res = await axios.delete(url);
            //         console.log(res.data)
            //         const announces = Object.values(res.data);
            //         store.dispatch(saveBookmarks(announces));
            //       }
            //       catch (error) {
            //         console.log(error);
            //       }
            //     };
                // loadData(`https://shokubutsu.herokuapp.com/v1//bookmarks/${state.user.id}/${action.payload}`);
            // }
              next(action);
              break;
            }
    default:
      next(action);
  }
};

export default announces;
