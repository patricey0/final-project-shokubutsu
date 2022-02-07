import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

function AnnounceCard({
  title,
  image,
  category,
  author,
  city,
}) {
  return (
    <Center py={12}>
      <Box
        role="group"
        p={6}
        maxW="330px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={0}
      >
        <Box
          rounded="lg"
          mt={-12}
          pos="relative"
          height="230px"
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `${image}`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src={image}
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {category}
          </Text>
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500} color="green">
            {title}
          </Heading>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl" color="green">
              {author}
            </Text>
            <Text color="gray.600">
              {city}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

AnnounceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default AnnounceCard;
