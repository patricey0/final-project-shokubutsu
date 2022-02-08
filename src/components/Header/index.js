// import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  login,
  logout,
  signUp,
} from 'src/actions/user';
import './style.scss';
import logo from 'src/assets/img/plant-clipart-17.png';
import { useState } from 'react';
import LoginForm from 'src/components/LoginForm';
import SignupForm from 'src/components/SignupForm';

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
  Wrap,
  Center,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types';
export default function AppHeader({isSignUpOpen, onSignUpOpen, isSignUpClose}) {
  const {
    mail,
    password,
    logged,
    city,
    nickname,
    picture,
    isadmin,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: isLoginClose } = useDisclosure();
  // const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: isSignUpClose } = useDisclosure();

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
        <NavLink
          onClick={() => {
            if (window.innerWidth <= 968) setIsClosed(!isClosed);
          }}
          to={path}
          className="header__item"
        >
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
          <NavLink to="/" className="header__name">植物 Shokubutsu</NavLink>
          <ul className="header__items">
            <div className="first">
              {itemElementJSX}
            </div>
            {logged
            && (
              <Wrap>
                <Menu>
                  <Button
                    as={NavLink}
                    to="/create-announce"
                    rightIcon={<ArrowForwardIcon />}
                    className="header__button"
                    bgColor="#DFF0E5"
                    h="none"
                  >
                    Ajouter une annonce
                  </Button>
                  <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                  >
                    <Avatar
                      size="md"
                      bg="#badec7"
                      // name={nickname}
                      src={picture} // ''
                    />
                  </MenuButton>
                  <MenuList alignItems="center" border="1px solid #366d4b" p={10}>
                    <br />
                    <Center>
                      <Avatar
                        size="2xl"
                        bg="#badec7"
                        name={nickname}
                        src={picture}
                      />
                    </Center>
                    <br />
                    <Center color="#366d4b">
                      <p>{nickname}</p>
                    </Center>
                    <br />
                    <MenuItem color="#366d4b" as={NavLink} to="/profile" _hover={{ color: 'white', backgroundColor: '#366d4b' }}>Mon profil</MenuItem>
                    <MenuItem color="#366d4b" as={NavLink} to="/my-announces" _hover={{ color: 'white', backgroundColor: '#366d4b' }}>Mes Annonces</MenuItem>
                    <MenuItem color="#366d4b" as={NavLink} to="/my-favorites" _hover={{ color: 'white', backgroundColor: '#366d4b' }}>Mes favoris</MenuItem>
                    <MenuItem color="#366d4b" as="button" onClick={() => dispatch(logout())}>Déconnexion</MenuItem>
                    {isadmin &&
                      <MenuItem color="#366d4b" as={NavLink} to="/dashboard">Dashboard</MenuItem>}
                  </MenuList>
                </Menu>
              </Wrap>
            )}
            {!logged
            && (
            <div className="second">
              <li>
                <button type="button" onClick={onLoginOpen} className="header__button">
                  Connexion
                </button>
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
                          // handleLogout={() => dispatch(logout())}
                          onClose={isLoginClose}
                        />
                      </FormControl>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </li>
              <li>
                <button type="button" onClick={onSignUpOpen} className="header__button">
                  Créer un compte
                </button>
                {/* <ModalSignUp /> */}
                <Modal
                  isOpen={isSignUpOpen}
                  onClose={isSignUpClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Inscrivez vous</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <SignupForm
                          mail={mail}
                          password={password}
                          nickname={nickname}
                          city={city}
                          changeField={(value, name) => dispatch(changeField(value, name))}
                          handleSignup={() => dispatch(signUp())}
                          isLogged={logged}
                          // loggedMessage={`Bonjour ${nickname}`}
                          // handleLogout={() => dispatch(logout())}
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
AppHeader.propTypes = {
  isSignUpOpen: PropTypes.bool.isRequired,
  onSignUpOpen: PropTypes.func.isRequired,
  isSignUpClose: PropTypes.func.isRequired,

};
