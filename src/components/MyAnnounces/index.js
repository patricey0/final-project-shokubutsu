/* eslint-disable indent */
/* eslint-disable operator-linebreak */
// == Import
import {
  SimpleGrid,
  Box,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  // useColorModeValue,
} from "@chakra-ui/react";
import bcgImg from "src/assets/img/plant-8.jpg";
import "./styles.scss";
import { useSelector } from 'react-redux';
import AnnounceCard from 'src/components/Announces/AnnounceCard';

// == Composant
const MyAnnounces = () => {
  
  // aller voir dans le state la liste de MES annonces
  const myList = useSelector((state) => state.announces.myList);

  return (
    <div>
      {myList.length === 0
        && (
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
                  Vous n'avez pas encore d'annonce !
                </Text>
              </Stack>
            </VStack>
          </Flex>
        )}
      {myList.length > 0 &&
      (
        <div>
        <Text
        color="white"
        fontWeight={700}
        lineHeight={1.2}
        p={6}
        bg="#366d4b"
        fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
      >
        Vos annonces !
      </Text>
                  <SimpleGrid
          columns={{ sm: 1, md: 2, xl: 3 }}
          spacing={10}
          mt={4}
        >
          {myList.map((el) => (
            <Box
              key={el.id}
            >
              <AnnounceCard
                {...el}
              />
            </Box>
          ))}
        </SimpleGrid>
        </div>

)}
    </div>
  );
};

// == Export
export default MyAnnounces;
