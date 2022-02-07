// == Import
import {
  SimpleGrid,
  Box,
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
} from "@chakra-ui/react";
import bcgImg from "src/assets/img/plant-8.jpg";
import "./styles.scss";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnnounces } from 'src/actions/announces';
import AnnounceCard from 'src/components/Announces/AnnounceCard';

// == Composant
const MyAnnounces = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // au premier rendu, j'appelle l'api pour récuperer mes annonces
    // dispatch(getMyAnnounces());
  }, []);
  // aller voir dans le state la liste de MES annonces
  const myList = useSelector((state) => state.announces.myList);
  console.log(myList);

  return (
    <div>
       {myList.length === 0 && 
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
    }       
      {myList.length > 0 &&
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
        {myList.map((el) => 
           (
          <Box
            key={el.id}
            // to={`/announces/${el.id}`}
          >
            <AnnounceCard
              {...el}
            />
          </Box>
        ))}
      </SimpleGrid>
    } 
    </div>


      
  );
};

// == Export
export default MyAnnounces;
