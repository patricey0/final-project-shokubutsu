// == Import
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  // useColorModeValue,
} from '@chakra-ui/react';
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
      <Flex
        minH="100vh"
        align="center"
        justify="center"
      // bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={4}
          w="full"
          maxW="md"
          // bg={useColorModeValue('white', 'gray.700')}
          rounded="xl"
          boxShadow="lg"
          p={6}
          my={12}
          bg="grey"
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Contactez Shokubutsu
          </Heading>
          <form onSubmit={handleOnSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="your-email@example.com"
                // _placeholder={{ color: 'gray.500' }}
                name="user_email"
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Votre nom</FormLabel>
              <Input
                type="text"
                placeholder="Jean-Louis David"
                name="user_name"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Votre message</FormLabel>
              <Textarea
                placeholder="Here is a sample placeholder"
                name="user_message"
              />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg="tomato"
                color="white"
                type="submit"
                mt={2}
                _hover={{
                  bg: 'green',
                }}
              >
                Envoyer
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </div>
  );
};

// == Export
export default Contact;
