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
// import './styles.scss';

// == Composant
const Error = () => (
  <div>
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
            Cette page n'est pas accesible !
          </Text>
        </Stack>
      </VStack>
    </Flex>
  </div>
);

// == Export
export default Error;
