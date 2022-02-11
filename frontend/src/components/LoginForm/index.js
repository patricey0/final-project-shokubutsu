import PropTypes from 'prop-types';

// import { useDisclosure } from '@chakra-ui/react';
import Field from './Field';

import './style.scss';

const LoginForm = ({
  mail,
  password,
  changeField,
  handleLogin,
  onClose,
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    onClose();
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="login-form-button"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  mail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
