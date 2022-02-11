/* eslint-disable camelcase */
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  useToast,
  Avatar,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { addBookmarks, deleteBookmarks, fetchBookmarks } from 'src/actions/bookmarks';
import { findAnnounce, findBookmarks } from '../../../selectors';

function Announce() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {id: idUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchBookmarks(idUser)); // j'ai besoin de l'id 
  }, []);
  // console.log(mystate)
  const announce = useSelector((state) => findAnnounce(state.announces.list, Number(id)));
  const match = useSelector((state) => findBookmarks(state.bookmarks.bookmarks, Number(id)));
  // const announce = useSelector((state) => findAnnounce(state.announces.list, Number(id)));
  if (!announce) {
    return <Navigate to="/error" replace />;
  }
  const {
    title,
    image,
    category,
    description,
    author,
    city,
    creation_date,
    author_picture,
  } = announce;
  const myDate = new Date(creation_date);
  const formatedDate = new Intl.DateTimeFormat('fr-FR').format(myDate);
  const toast = useToast();
  return (
    <Container maxW="7xl" p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  image
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <HStack spacing={2} m={4} justifyContent="flex-end">
            <Text color="#366d4b" fontWeight={700}>{match ? 'Retirer des favoris' : 'Ajouter aux favoris'}</Text>
            <StarIcon
              color="#366d4b"
              w={6}
              h={6}
              _hover={{
                cursor: 'pointer',
              }}
              onClick={ async () => match ? dispatch(deleteBookmarks(id)) : dispatch(addBookmarks(id))}
            />
          </HStack>
          <HStack spacing={2} m={4} justifyContent="center">
            <Tag size="md" variant="solid" colorScheme="orange">
              {category}
            </Tag>
          </HStack>
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }} color="black">
              {title}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            {description}
          </Text>
          <HStack
            mt={4}
            spacing="2"
            display="flex"
            alignItems="center"
            color="black"
            justifyContent="center"
            flexDirection={{ base: 'column', sm: 'row' }}
          >
            <Image
              as={Avatar}
              borderRadius="full"
              boxSize="40px"
              src={author_picture}
              alt={`Avatar of ${author}`}
            />
            <Box display="flex">
              <Text fontWeight="medium">{author} — {city} — {formatedDate}</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
}

export default Announce;