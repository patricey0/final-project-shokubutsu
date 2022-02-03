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
import bcgImg from 'src/assets/img/plant-8.jpg';
import './styles.scss';

// == Composant
const Guide = () => (
  // <div>
  //   <Flex
  //     w="full"
  //     h="100vh"
  //     backgroundImage={
  //       bcgImg
  //     }
  //     backgroundSize="cover"
  //     backgroundPosition="center center"
  //   >
  //     <VStack
  //       w="full"
  //       justify="center"
  //       px={useBreakpointValue({ base: 4, md: 8 })}
  //       bgGradient="linear(to-r, blackAlpha.600, transparent)"
  //     >
  //       <Stack
  //         maxW="2xl"
  //         align="center"
  //         spacing={6}
  //         borderRadius="2em"
  //         bg="#badec7"
  //       >
  //         <Text
  //           color="white"
  //           fontWeight={700}
  //           lineHeight={1.2}
  //           p={4}
  //           fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
  //         >
  //           Le guide est encore en cours de construction...
  //         </Text>
  //         <Text
  //           color="white"
  //           fontWeight={700}
  //           lineHeight={1.2}
  //           p={4}
  //           fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
  //         >
  //           On repasse au prochain sprint ?
  //         </Text>
  //       </Stack>
  //     </VStack>
  //   </Flex>
  // </div>

  <div>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'#366d4b'} as={'span'}>
              Débutez avec 
            </Text>
            <br />{' '}
            <Text
              as={'span'}
              position={'relative'}
              color='#366d4b'
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#BEE0CA',
                zIndex: -1,
              }}>
              Shokubutsu
            </Text>
            {' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#366d4b'}>
            Si vous souhaitez faire partie de la communauté et échanger ou faire don de vos plantes, il faut commencer par crée un compte.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'#366d4b'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'} bg={'#366d4b'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  </div>
);

// == Export
export default Guide;
