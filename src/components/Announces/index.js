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
  const mystate = useSelector(state => state);
  console.log("my state",mystate)
  let announces = useSelector((state) => state.announces.list.sort(function (a, b) {
    return b.id - a.id;
  }));
  
  return (
    
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
      {announces.length > 0 && announces.map((el) => {
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


