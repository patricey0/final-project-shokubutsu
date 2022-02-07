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
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { findAnnounce } from '../../../selectors/announces';

function Announce() {
  const { id } = useParams();
  const announce = useSelector((state) => findAnnounce(state.announces.list, Number(id)));

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
  } = announce;

  const myDate = new Date(creation_date);
  const formatedDate = new Intl.DateTimeFormat('fr-FR').format(myDate);

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
              borderRadius="full"
              boxSize="40px"
              src="https://100k-faces.glitch.me/random-image"
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