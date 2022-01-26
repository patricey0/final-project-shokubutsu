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
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// == Composant
const Announces = () => {
  const { list } = useSelector((state) => state.anounces);

  const formatData = (data) => {
    const array = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(data).map((key, value) => {
      // console.log(data[value]);
      array.push(data[value]);
    });
    return array;
  };
  // console.log();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
      {formatData(list).map((el) => (
        <Box key={el.id}>
          <ProductSimple
            title={el.title}
            image={el.image}
            description={el.description}
            category={el.category}
            auth={el.auth}
            city={el.city}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};
function ProductSimple({title, image, description, category, auth, city}) {
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
// == Export
export default Announces;

ProductSimple.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
