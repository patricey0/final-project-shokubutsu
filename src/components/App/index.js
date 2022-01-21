// == Import
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnounces } from 'src/actions/anounces';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Announces from 'src/components/Announces';
import Tuto from 'src/components/Tuto';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';
import Loading from './Loading';
// == Composant
const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.anounces.loading);
  useEffect(() => {
    dispatch(fetchAnounces());
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonces" element={<Announces />} />
        <Route path="/tuto" element={<Tuto />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default App;
