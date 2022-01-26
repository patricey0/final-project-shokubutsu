// == Import
import { SimpleGrid, Box } from '@chakra-ui/react'
import './styles.scss';

// == Composant
const Announces = () => (
  <SimpleGrid columns={{sm: 1, md: 2}} spacing={10}>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
);

// == Export
export default Announces;
