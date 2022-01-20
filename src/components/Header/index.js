import { useSelector, useDispatch } from 'react-redux';
import { changeField, login, logout } from 'src/actions/user';
import { NavLink } from 'react-router-dom';
import './style.scss';
// import logo from 'src/assets/logo.png';
import LoginForm from 'src/components/LoginForm';

export default function AppHeader() {
  const {
    email,
    password,
    logged,
    pseudo,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <header className="header">
      {/* <img src={logo} className="header-logo" alt="Logo oRecipes" /> */}
      <nav>
        <ul className="navheader">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/annonces">Annonces</NavLink></li>
          <li><NavLink to="/tuto">Tuto</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <LoginForm
            email={email}
            password={password}
            changeField={(value, name) => dispatch(changeField(value, name))}
            handleLogin={() => dispatch(login())}
            isLogged={logged}
            loggedMessage={`Bonjour ${pseudo}`}
            handleLogout={() => dispatch(logout())}
          />
        </ul>
      </nav>

    </header>
  );
}
