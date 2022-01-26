// == Import
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnounces } from 'src/actions/anounces';
import { fetchUser } from 'src/actions/user';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Announces from 'src/components/Announces';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';
import Loading from './Loading';
import Guide from '../Guide';
import Profile from '../Profile';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.anounces.loading);
  useEffect(() => {
    dispatch(fetchAnounces());
    dispatch(fetchUser());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announces" element={<Announces />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default App;
