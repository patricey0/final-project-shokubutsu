// == Import
import {
  SimpleGrid,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import AnnounceCard from 'src/components/Announces/AnnounceCard';
import './styles.scss';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// == Composant
const Announces = () => {
  const announces = useSelector((state) => state.announces.list.sort((a, b) => b.id - a.id));
  return (
    <div>
      <Text
        color="white"
        fontWeight={700}
        lineHeight={1.2}
        p={6}
        bg="#366d4b"
        fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
      >
        Les dernieres annonces !
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={10} mt={4}>
        {announces.length > 0 && announces.map((el) => (
          <Box
            key={el.id}
            as={Link}
            to={`/announces/${el.id}`}
          >
            <AnnounceCard
              {...el}
            />
          </Box>
        ))}
      </SimpleGrid>
    </div>

  );
};

// == Export
export default Announces;
