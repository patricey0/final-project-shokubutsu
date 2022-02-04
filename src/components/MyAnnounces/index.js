// == Import
import {
  SimpleGrid,
  Box,
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
    // au premier rendu, j'appelle l'api pour récuperer les annonces
    dispatch(getMyAnnounces());
  }, []);
  // aller voir dans le state la liste de MES annonces
  const myList = useSelector((state) => state.announces.myList);
  console.log(myList);

  const listElementJSX = myList.map(
    ({id, title, image}) =>{
      return (
        <p key={id} >
        {title} {image}
        </p>
      )
    }
  )
  return (
    // <div>
    //   {listElementJSX}
    // </div>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
        {myList.length > 0 && myList.map((el) => {
          return (
          <Box
            key={el.id}
            to={`/announces/${el.id}`}
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
export default MyAnnounces;
