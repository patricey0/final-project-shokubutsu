/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import axios from 'axios';
// import { useDisclosure } from '@chakra-ui/react';
import { fetchUser } from 'src/actions/user';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './style.scss';
import {
  Text,
  useToast,
  Input,
} from '@chakra-ui/react';
import Field from '../Field';

const UpdateUser = ({
  mail,
  nickname,
  city,
  changeField,
  id,
  onClose,
}) => {
  // const state = store.getState();
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    picture,
  } = useSelector((state) => state.user);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuth, setIsAuth] = useState(false);
  const [checkPassword, setPassword] = useState('');
  const handleVerifPassword = (evt) => {
    console.log(checkPassword);
    evt.preventDefault();
    axios.post('https://shokubutsu.herokuapp.com/v1/users/check', {
      id: id,
      password: checkPassword,
    })
      .then((res) => {
        console.log(res);
        setIsAuth(!isAuth);
        console.log('ça marche');
      })
      .catch((err) => {
        console.log(err.message);
        toast({
          title: 'Mot de passe incorrect.',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      });
  };
  const handleDispatchUser = (evt) => {
    evt.preventDefault();
    console.log(id);
    // fonction redux pour patch les infos
    axios.patch(`https://shokubutsu.herokuapp.com/v1/users/${id}`, {
      mail: mail,
      password: checkPassword,
      city: city,
      nickname: nickname,
      picture: picture,
    })
      .then((res) => {
        setIsAuth(!isAuth);
        console.log(res.data);
        dispatch(fetchUser(res.data));
        console.log('ça marche user a bien changé');
        toast({
          title: 'Profil à jour',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
        onClose();
      })
      .catch((error) => {
        toast({
          title: error.response.data,
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      });
    // onClose();
    // check password
    // handleLogin();
  };
  return (
    <div className="login-form">
      {!isAuth && (
      <form autoComplete="off" className="login-form-element" onSubmit={handleVerifPassword}>
        <Text>Vérifier votre mot de passe pour modifier votre profil</Text>
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          className="field-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="login-form-button"
          style={{ marginTop: '10px' }}
        >
          Vérifier le mot de passe
        </button>
      </form>
      )}
      {isAuth && (
        <form autoComplete="off" className="login-form-element" onSubmit={handleDispatchUser}>
          <Field
            name="mail"
            placeholder="mail"
            onChange={changeField}
            value={mail}
          />
          <Field
            name="nickname"
            placeholder="Pseudo"
            onChange={changeField}
            value={nickname}
          />
          <div className="field field--has-content">
            <Input
              name="password"
              type="password"
              id="field-password"
              placeholder="Mot de passe"
              className="field-input"
              onChange={(e) => setPassword(e.target.value)}
              value={checkPassword}
            />
            <label
              htmlFor="field-password"
              className="field-label"
            >
              Mot de passe
            </label>
          </div>

          <Field
            name="city"
            placeholder="Ville"
            onChange={changeField}
            value={city}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Modifier mon compte
          </button>
        </form>
      )}
    </div>
  );
};

UpdateUser.propTypes = {
  nickname: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateUser;
