// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// == Composant
const Footer = () => (
  <footer>
    <div>
      <ul className="navfooter">
        <li><NavLink to="/" className="navfooter__item">Home</NavLink></li>
        <li><NavLink to="/annonces" className="navfooter__item">Annonces</NavLink></li>
        <li><NavLink to="/tuto" className="navfooter__item">Tuto</NavLink></li>
        <li><NavLink to="/contact" className="navfooter__item">Contact</NavLink></li>
      </ul>
    </div>
    <div className="credential">
      <p>Mentions légales @ 2022 Shokubutsu</p>
    </div>
    <div className="social">
      <p> Vous pouvez aussi nous retrouvez sur <FontAwesomeIcon icon={faInstagram} /></p>
    </div>
  </footer>
);

// == Export
export default Footer;