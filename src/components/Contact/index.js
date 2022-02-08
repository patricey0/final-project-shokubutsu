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
  Text,
  VStack,
  useBreakpointValue,
  // useColorModeValue,
} from '@chakra-ui/react';
import bcgImg from 'src/assets/img/plant-8.jpg';
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
        w="full"
        h="100vh"
        backgroundImage={
        bcgImg
      }
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.600, transparent)"
        >
          <Stack maxW="2xl" align="center" spacing={6}>
            <Text
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              p={8}
              borderRadius="2em"
              bg="#badec7"
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            >
              Vous avez une question ? Une recommandation ?
              Trop de mauvaises herbes dans votre jardin ?
              L'équipe Shokubutsu est là pour vous répondre
            </Text>
          </Stack>
        </VStack>
      </Flex>
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
          bg="#366d4b"
        >
          <Heading lineHeight={1.1} m={5} fontSize={{ base: '2xl', md: '3xl' }}>
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
                bg="#badec7"
                color="#366d4b"
                type="submit"
                mt={2}
                _hover={{
                  bg: '#badec7',
                  // color: 'green',
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
