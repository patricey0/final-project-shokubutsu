import { useSelector, useDispatch } from 'react-redux';
import { changeField, login, logout } from 'src/actions/user';
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
      {/* Changer avec le composant Navlink | Link de react router */}
      <nav>
        <ul className="navheader">
          <li><a href="/">Home</a></li>
          <li><a href="/annonces">annonces</a></li>
          <li><a href="/tuto">tuto</a></li>
          <li><a href="/contact">contact</a></li>
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
