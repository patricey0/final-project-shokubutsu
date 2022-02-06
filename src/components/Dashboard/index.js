/* eslint-disable max-len */
// == Import
import './style.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

// == Composant
const Dashboard = () => {
  const announces = useSelector((state) => state.announces.list.sort((a, b) => b.id - a.id));
  const users = useSelector((state) => state.users.list.sort((a, b) => b.id - a.id));

  return (
    <div className='dashboard'>
      <section className='dashboard__section'>
        <Table variant='simple' size='sm' colorScheme='blackAlpha' className='dashboard__section__about__block'>
          <TableCaption className='dashboard__section__title padding' placement='top'>Annonces Signalées</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Author</Th>
              <Th>Editer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {announces.map((announce) =>
              <Tr key={announce.id}>
                <Td>{announce.title}</Td>
                <Td>{announce.description}</Td>
                <Td>{announce.author}</Td>
                <Td> editer </Td>
              </Tr>)}
          </Tbody>
        </Table>

        <Table variant='simple' size='sm' colorScheme='blackAlpha' className='dashboard__section__about__block'>
          <TableCaption className='dashboard__section__title padding' placement='top'>Annonces Signalées</TableCaption>
          <Thead>
            <Tr>
              <Th>Pseudo</Th>
              <Th>Email</Th>
              <Th>Supprimer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) =>
              <Tr key={user.id}>
                <Td>{user.nickname}</Td>
                <Td>{user.mail}</Td>
                <Td> supprimer </Td>
              </Tr>)}
          </Tbody>
        </Table>
      </section>
    </div>
  );
};

// == Export
export default Dashboard;
