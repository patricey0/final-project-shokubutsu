// == Import
import {
  Form,
  Input,
  TextArea,
  Button,
  Header,
} from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import './styles.scss';
import Swal from 'sweetalert2';
// == Composant
// todo créer un dotenv
const SERVICE_ID = 'service_gvx9i0b';
const TEMPLATE_ID = 'template_pztpvjr';
const USER_ID = 'user_1CxZXkdyPo29aRI9ZkzQM';

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message bien envoyé. Shokubutsu vous répondra dès que possible!',
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, il y a une erreur quelque part!',
          text: error.text,
        });
      });
    e.target.reset();
  };
  return (
    <div className="form-contact">
      <Header as="h3" textAlign="center">Contactez Shokubutsu  </Header>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">Submit</Button>
      </Form>
    </div>
  );
};

// == Export
export default Contact;
