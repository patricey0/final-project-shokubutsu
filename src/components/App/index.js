// == Import
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnounces } from 'src/actions/announces';
import { fetchUser } from 'src/actions/user';
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
import { Box } from '@chakra-ui/react';
import CreateAnnounce from '../CreateAnnounce';
import { useState } from 'react';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.announces.loading);
  const logged = useSelector((state) => state.user.logged);
  console.log(logged);


  useEffect(() => {
    // console.log(process.env.REACT_APP_VERSION)
    dispatch(fetchAnnounces());
    dispatch(fetchUser());
  }, []);
  // if (loading) {
  //   return <Loading />;
  // }


  return (
    <div className="app">
      <Header />
      <Box className="height-min">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announces" element={<Announces />} />
          <Route path="/announces/:id" element={<Announce />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          {logged && 
          <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-announces" element={<MyAnnounces />} />
          <Route path="/my-favorites" element={<MyFavorites />} />
          <Route path="/create-announce" element={<CreateAnnounce />} />
          </> 
          }

          <Route path="*" element={<Error />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
};

// == Export
export default App;
