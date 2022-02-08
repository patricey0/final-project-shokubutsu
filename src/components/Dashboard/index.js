/* eslint-disable max-len */
// == Import
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from 'src/actions/users';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from '@chakra-ui/react';
import { EditIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons';
// == Composant

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const announces = useSelector((state) => state.announces.list.sort((a, b) => b.id - a.id));
  const users = useSelector((state) => state.users.list.sort((a, b) => b.id - a.id));

  const deleteUser = (userId) => {
    axios.delete(`https://shokubutsu.herokuapp.com/v1/users/${userId}`);
  };

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
              <Th>Éditer</Th>
              <Th icon={<CloseIcon />}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {announces.map((announce) =>
              <Tr key={announce.id}>
                <Td>{announce.title}</Td>
                <Td>{announce.description}</Td>
                <Td>{announce.author}</Td>
                <Td>
                  <EditIcon color="#366d4b" fontSize="xl" hover={{ cursor: 'pointer' }}/>
                  <DeleteIcon w={5} h={5} color="red.500" fontSize="xl" hover={{ cursor: 'pointer' }}/>
                </Td>
              </Tr>)}
          </Tbody>
        </Table>

        <Table variant='simple' size='sm' colorScheme='blackAlpha' className='dashboard__section__about__block'>
          <TableCaption className='dashboard__section__title padding' placement='top'>Gestion des utilisateurs</TableCaption>
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
                <Td>
                  <Button onClick={() => deleteUser(user.id)}>
                    Supprimer
                  </Button>
                </Td>
              </Tr>)}
          </Tbody>
        </Table>
      </section>
    </div>
  );
};

// == Export
export default Dashboard;
