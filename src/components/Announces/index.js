// == Import
import {
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import AnnounceCard from 'src/components/Announces/AnnounceCard';
import './styles.scss';
import { useSelector } from 'react-redux';


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
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
      {formatData(list).map((el) => {
        return (
        
        <Box key={el.id} as={NavLink} to={`/announces/${el.id}`}>
          <AnnounceCard
            title={el.title}
            image={el.image}
            description={el.description}
            category={el.category}
            auth={el.auth}
            city={el.city}
          />
        </Box>
      )})}
    </SimpleGrid>
  );
};

// == Export
export default Announces;


