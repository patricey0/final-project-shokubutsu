// == Import
import {
  SimpleGrid,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import './styles.scss';

// == Composant
const Announces = () => {
  const hello = 'hello';
  return (
    <SimpleGrid columns={{sm: 1, md: 2, xl: 3}} spacing={10} mt={4}>
    {/* maper les annonces  */}
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
      <Box> <ProductSimple /></Box>
    </SimpleGrid>
  );
};
function ProductSimple() {
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
        zIndex={0}>
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
            backgroundImage: `https://cdn.radiofrance.fr/s3/cruiser-production/2021/10/e624f156-f81a-4a70-87a7-75ac0499eb08/838_gettyimages-1279726754.jpg`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded="lg"
            height={230}
            width={282}
            objectFit="cover"
            src='https://cdn.radiofrance.fr/s3/cruiser-production/2021/10/e624f156-f81a-4a70-87a7-75ac0499eb08/838_gettyimages-1279726754.jpg'
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            Brand
          </Text>
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl" color='green'>
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
// == Export
export default Announces;
