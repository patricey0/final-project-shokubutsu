// == Import
import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Button,
  Heading,
  Image,
  // useColorModeValue,
} from '@chakra-ui/react';
import ReactPageScroller from 'react-page-scroller';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const Guide = ({ isSignUpOpen, onSignUpOpen, isSignUpClose }) => {
  const [currentPage, setcurrentPage] = useState(null);
  const handlePageChange = (number) => {
    setcurrentPage(number);
  };
  const { logged } = useSelector((state) => state.user);
  return (
    <div>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} align="center" justify="center">
            <Stack spacing={6} w="full" maxW="lg">
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="#366d4b" as="span">
                  Débutez avec
                </Text>
                <br />{' '}
                <Text
                  as="span"
                  position="relative"
                  color="#366d4b"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#BEE0CA',
                    zIndex: -1,
                  }}
                >
                  Shokubutsu
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color="#366d4b">
                Si vous souhaitez faire partie de la communauté et échanger ou
                faire don de vos plantes, il faut commencer par créer un compte.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  onClick={onSignUpOpen}
                  mx="auto"
                  rounded="full"
                  bg="#366d4b"
                  color="white"
                  _hover={{
                    bg: '#BEE0CA',
                    color: '#366d4b',
                  }}
                >
                  {logged ? 'Vous avez déjà un compte' : ' Créer mon compte'}
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt="Login Image"
              objectFit="cover"
              src="https://res.cloudinary.com/shokubutsu/image/upload/v1643969557/plant-16_ginbsv.jpg"
            />
          </Flex>
        </Stack>
        <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1}>
            <Image
              alt="Login Image"
              objectFit="cover"
              src="https://res.cloudinary.com/shokubutsu/image/upload/v1643969562/plant-10_pkaihj.jpg"
            />
          </Flex>
          <Flex flex={1} align="center" justify="center">
            <Stack spacing={6} w="full" maxW="lg">
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="#366d4b" as="span">
                  Poursuivez en
                </Text>
                <br />{' '}
                <Text
                  as="span"
                  position="relative"
                  color="#366d4b"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#BEE0CA',
                    zIndex: -1,
                  }}
                >
                  ajoutant une annonce
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color="#366d4b">
                Ajouter une annonce directement depuis la bar de navigation en
                cliquant sur Ajouter une annonce, et remplissez y les
                informations demandées.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  onClick={onSignUpOpen}
                  mx="auto"
                  rounded="full"
                  as={Link}
                  to='/create-announce'
                  bg="#366d4b"
                  color="white"
                  _hover={{
                    bg: '#BEE0CA',
                    color: '#366d4b',
                  }}
                >
                  Créer une annonce
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
        <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} align="center" justify="center">
            <Stack spacing={6} w="full" maxW="lg">
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="#366d4b" as="span">
                  Consultez
                </Text>
                <br />{' '}
                <Text
                  as="span"
                  position="relative"
                  color="#366d4b"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: '#BEE0CA',
                    zIndex: -1,
                    whitespace: "no-wrap",
                  }}
                >
                  les annonces
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color="#366d4b">
                En consultant les annonces, les détails de celle ci seront accesibles.
                Vous pourrez contacter l'auteur de l'annonce, ou l'ajouter a vos favoris.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  onClick={onSignUpOpen}
                  mx="auto"
                  rounded="full"
                  bg="#366d4b"
                  color="white"
                  _hover={{
                    bg: '#BEE0CA',
                    color: '#366d4b',
                  }}
                >
                  Les annonces
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt="Login Image"
              objectFit="cover"
              src="https://res.cloudinary.com/shokubutsu/image/upload/v1643969572/plant-6_brny8a.jpg"
            />
          </Flex>
        </Stack>
      </ReactPageScroller>
    </div>
  );
};

// == Export
export default Guide;

Guide.propTypes = {
  isSignUpOpen: PropTypes.bool.isRequired,
  onSignUpOpen: PropTypes.func.isRequired,
  isSignUpClose: PropTypes.func.isRequired,
};
