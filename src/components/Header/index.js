// import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, login, logout } from 'src/actions/user';
import './style.scss';
import logo from 'src/assets/img/spider-plant.png';
import { useState } from 'react';
import LoginForm from 'src/components/LoginForm';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
} from '@chakra-ui/react';

export default function AppHeader() {
  const {
    mail,
    password,
    logged,
    nickname,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: isLoginClose } = useDisclosure();
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: isSignUpClose } = useDisclosure();
  // Permet de changer l'icone du menu au click
  const [isClosed, setIsClosed] = useState(true);
  const iconType = isClosed ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12';
  // Data for navbar
  const items = [
    {
      id: 1,
      path: '/',
      name: 'Accueil',
    },
    {
      id: 2,
      path: '/announces',
      name: 'Annonces',
    },
    {
      id: 3,
      path: '/guide',
      name: 'Guide',
    },
    {
      id: 4,
      path: '/contact',
      name: 'Contact',
    },
  ];
  const itemElementJSX = items.map(
    ({ id, path, name }) => (
      <li key={id} className="">
        <NavLink to={path} className="header__item">
          {name}
        </NavLink>
      </li>
    ),
  );

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__principal">
          {/* Handle burger menu */}
          <div onClick={() => {
            setIsClosed(!isClosed);
          }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="header__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconType} />
            </svg>
          </div>
          <img src={logo} alt="" className="header__logo" />
          <ul className="header__items">
            <div className="first">
              {itemElementJSX}
            </div>
            {logged
            && (
              <Button onClick={onLoginOpen} colorScheme="teal">
                Profil de {nickname}
              </Button>
            )}
            {!logged
            && (
            <div className="second">
              <li>
                <Button onClick={onLoginOpen} colorScheme="teal">
                  Se Connecter
                </Button>
                <Modal
                  isOpen={isLoginOpen}
                  onClose={isLoginClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Connectez vous</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <LoginForm
                          mail={mail}
                          password={password}
                          changeField={(value, name) => dispatch(changeField(value, name))}
                          handleLogin={() => dispatch(login())}
                          isLogged={logged}
                          loggedMessage={`Bonjour ${nickname}`}
                          handleLogout={() => dispatch(logout())}
                          onClose={isLoginClose}
                        />
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </li>
              <li>
                <Button onClick={onSignUpOpen} colorScheme="teal">
                  Créer un compte
                </Button>
                <Modal
                  isOpen={isSignUpOpen}
                  onClose={isSignUpClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Connectez vous</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <LoginForm
                          mail={mail}
                          password={password}
                          changeField={(value, name) => dispatch(changeField(value, name))}
                          handleLogin={() => dispatch(login())}
                          isLogged={logged}
                          loggedMessage={`Bonjour ${nickname}`}
                          handleLogout={() => dispatch(logout())}
                          onClose={isSignUpClose}
                        />
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </li>
            </div>
            )}
          </ul>
        </div>
        <ul className={`header__secondary${isClosed ? '' : '--active'}`}>
          {itemElementJSX}
        </ul>
      </nav>
    </header>
  );
}
