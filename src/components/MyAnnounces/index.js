// == Import
import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  // useColorModeValue,
} from '@chakra-ui/react';
import bcgImg from 'src/assets/img/plant-8.jpg';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnnounces } from 'src/actions/announces';

// == Composant
const MyAnnounces = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // au premier rendu, j'appelle l'api pour récuperer les annonces
    dispatch(getMyAnnounces());
  }, []);
  // aller voir dans le state la liste de MES annonces
  const myList = useSelector((state) => state.announces.myList);
  console.log(myList);
  return (
    <div>
      <Flex
        w="full"
        h="100vh"
        backgroundImage={bcgImg}
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient="linear(to-r, blackAlpha.600, transparent)"
        >
          <Stack
            maxW="2xl"
            align="center"
            spacing={6}
            borderRadius="2em"
            bg="#badec7"
          >
            <Text
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              p={4}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            >
              La page des annonces de l'utilisateur est encore en cours de
              construction...
            </Text>
            <Text
              color="white"
              fontWeight={700}
              lineHeight={1.2}
              p={4}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            >
              On repasse au prochain sprint ?
              Il y a {myList.length} annonces dans ma liste
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </div>
  );
};

// == Export
export default MyAnnounces;
