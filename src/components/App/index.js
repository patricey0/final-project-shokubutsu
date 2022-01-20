// == Import
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Announces from 'src/components/Announces';
import Tuto from 'src/components/Tuto';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <p>Nos composants</p>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/annonces" element={<Announces />} />
      <Route path="/tuto" element={<Tuto />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

// == Export
export default App;
