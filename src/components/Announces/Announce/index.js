import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { findAnnounce } from '../../../selectors/announces';

function Announce() {

  const { id } = useParams();
  
  const announce = useSelector((state) => findAnnounce(state.announces.list, Number(id)));
  
  if (!announce) {
    return <Navigate to="/error" replace />;
  }

  const {title, image, category } = announce;
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
              $57
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Announce;
