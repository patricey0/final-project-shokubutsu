import PropTypes from 'prop-types';

import Field from 'src/components/LoginForm/Field';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUrl } from 'src/actions/user';
// import { useDisclosure } from '@chakra-ui/react';

import './style.scss';

const SignupForm = ({
  mail,
  password,
  changeField,
  nickname,
  city,
  handleSignup,
  onClose,
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const uploadImage = async (evt) => {
    evt.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    data.append('api_key', process.env.REACT_APP_API_KEY);
    fetch(process.env.REACT_APP_API_URL, {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((datas) => {
        // l'user a pour photo de profil http
        dispatch(setUrl(datas.url));
        // upload
        handleSignup(); // => si mon form passe || si le form passe pas
        onClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form-element" onSubmit={uploadImage}>
        <Field
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
        />
        <Field
          name="mail"
          placeholder="Adresse Email"
          onChange={changeField}
          value={mail}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="city"
          placeholder="Ville"
          onChange={changeField}
          value={city}
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  mail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupForm;
