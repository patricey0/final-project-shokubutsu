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
import { useLocation } from "react-router-dom";
function AnnounceCard({title, image, category, author, city, description}) {
  const sampleLocation = useLocation();
  console.log(sampleLocation.pathname)
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
        transition=".2s ease-in"
        _hover={{
          transform: "translateY(3px)",
          boxShadow: 'rgba(54, 109, 75,0.4) 0 0 0 1px, rgba(54, 109, 75,0.6) 0 5px 10px, rgba(54, 109, 75,0.8) 0 15px 40px'
        }}
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
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500} color="#366d4b">
            {title}
          </Heading>
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {description.split(' ', 20).join(" ")}
          </Text>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl" color="#366d4b">
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
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  auth: PropTypes.string,
  city: PropTypes.string.isRequired,
};


export default AnnounceCard;
