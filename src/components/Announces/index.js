// == Import
import {
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import AnnounceCard from 'src/components/Announces/AnnounceCard';
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// == Composant
const Announces = () => {
  let announces = useSelector((state) => state.announces.list);
  return (
    
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
      {announces.length && announces.map((el) => {
        return (
        <Box
          key={el.id}
          as={Link} to={`/announces/${el.id}`}
        >
          <AnnounceCard
            {...el}
          />
        </Box>
      )})}
    </SimpleGrid>
  );
};

// == Export
export default Announces;


