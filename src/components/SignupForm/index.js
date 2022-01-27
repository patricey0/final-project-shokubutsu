import PropTypes from 'prop-types';

import Field from 'src/components/LoginForm/Field';
import {useState} from 'react';
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
  picture
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const uploadImage = async (evt) => {
    evt.preventDefault();
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'shokubutsu_cloud');
    data.append('api_key', '977658599574278'); // todo .env key / upload_preset / folder / url
    data.append('folder', 'upload');
    fetch(' https://api.cloudinary.com/v1_1/Skokubutsu/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(setUrl(data.url));
        handleSignup();
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
  picture: PropTypes.string.isRequired,
};

export default SignupForm;
