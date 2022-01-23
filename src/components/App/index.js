// == Import
import {
  Routes,
  Route,
} from 'react-router-dom';
import './styles.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Announces from 'src/components/Announces';
import Contact from 'src/components/Contact';
import Error from 'src/components/Error';
import Guide from '../Guide';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/announces" element={<Announces />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
);

// == Export
export default App;
