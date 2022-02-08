// == Import
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnounces, getMyAnnounces } from 'src/actions/announces';
import { fetchUser } from 'src/actions/user';
import { fetchBookmarks } from 'src/actions/bookmarks';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Announces from 'src/components/Announces';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';
import MyAnnounces from '../MyAnnounces';
import Loading from './Loading';
import Guide from '../Guide';
import Profile from '../Profile';
import MyFavorites from '../MyFavorites';
import Announce from '../Announces/Announce';
import { Box, useDisclosure } from '@chakra-ui/react';
import CreateAnnounce from '../CreateAnnounce';
import Dashboard from '../Dashboard';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: isSignUpClose } = useDisclosure();
  const logged = useSelector((state) => state.user.logged);
  const isAdmin = useSelector((state) => state.user.isadmin);
  console.log(logged);

  useEffect(() => {
    // console.log(process.env.REACT_APP_VERSION)
    dispatch(fetchUser()); // ici je recup l'id
    dispatch(fetchAnnounces());
    // dispatch(getMyAnnounces());
    // dispatch(fetchBookmarks()); // j'ai besoin de l'id 
    dispatch(fetchBookmarks());
  }, []);
  const loadingAnnounces = useSelector((state) => state.announces.loading);
  const loadingBookmarks = useSelector((state) => state.bookmarks.loading);
  if (loadingAnnounces && loadingBookmarks) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Header
        isSignUpOpen={isSignUpOpen}
        onSignUpOpen={onSignUpOpen}
        isSignUpClose={isSignUpClose}
      />
      <Box className="height-min">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announces" element={<Announces />} />
          <Route path="/announces/:id" element={<Announce />} />
          <Route path="/guide" element={<Guide isSignUpOpen={isSignUpOpen} onSignUpOpen={onSignUpOpen} isSignUpClose={isSignUpClose}/>} />
          <Route path="/contact" element={<Contact />} />
          {logged
            && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-announces" element={<MyAnnounces />} />
              <Route path="/my-favorites" element={<MyFavorites />} />
              <Route path="/create-announce" element={<CreateAnnounce />} />
              {isAdmin && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                </>
              )}
            </>
            )}
          <Route path="*" element={<Error />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
};

// == Export
export default App;
