// == Import
import {
  Box,
  // chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  // VisuallyHidden,
  List,
  ListItem,
  Avatar,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useSelector } from 'react-redux';

// == Composant
const Profile = () => {
  const triggerModal = (e) => {
    console.log('hello');
  }
  const {
    mail,
    password,
    city,
    nickname,
    picture,
    isadmin,
  } = useSelector((state) => state.user);
  return (
    <Container maxW="7xl" color="black" mb={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Avatar
            rounded="md"
            alt="product image"
            bg="#badec7"
            // name={nickname}
            src={picture}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: '100%', sm: '200px', lg: '300px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Profil de {nickname}
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('green.500', 'green.300')}
              fontWeight="500"
              textTransform="uppercase"
              mb="4"
            >
              Mes infos
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon pseudo:
                </Text>{' '}
                {nickname}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Ma ville:
                </Text>{' '}
                {city}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon mail:
                </Text>{' '}
                {mail}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon role:
                </Text>{' '}
                {isadmin ? 'Admin' : 'Utilisateur'}
              </ListItem>
            </List>
          </Box>
          { /* Ici il y aura la modal pour l'update */ }
          <Button
            onClick={triggerModal}
            rounded="none"
            w="full"
            mt={8}
            size="lg"
            py="7"
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Modifier mon profil
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

// == Export
export default Profile;
