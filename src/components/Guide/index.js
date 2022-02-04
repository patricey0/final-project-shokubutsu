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
  <div>
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} align={'center'} justify={'center'}>
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
            Si vous souhaitez faire partie de la communauté et échanger ou faire don de vos plantes, il faut commencer par créer un compte.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              mx='auto'
              rounded={'full'}
              bg={'#366d4b'}
              color={'white'}
              _hover={{
                bg: '#BEE0CA',
                color: '#366d4b'
              }}>
              Créer mon compte
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/shokubutsu/image/upload/v1643970698/plant-14_kqswqq.jpg'
          }
        />
      </Flex>
    </Stack>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/shokubutsu/image/upload/v1643969562/plant-10_pkaihj.jpg'
          }
        />
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'#366d4b'} as={'span'}>
              Poursuivez en
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
              ajoutant une annonce
            </Text>
            {' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#366d4b'}>
            Ajouter une annonce directement depuis la bar de navigation en cliquant sur Ajouter une annonce, et remplissez y les informations demandées.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  </div>
);

// == Export
export default Guide;
