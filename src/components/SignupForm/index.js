import PropTypes from 'prop-types';

// import { useDisclosure } from '@chakra-ui/react';
import Field from 'src/components/LoginForm/Field';

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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignup();
    // todo handleSignup
    onClose();
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
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
        <Field
          name="picture"
          type="file"
          // placeholder="Pseudo"
          // onChange={changeField}
          // value={picture}
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
