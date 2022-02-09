/* eslint-disable max-len */
// == Import
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from 'src/actions/users';
import { fetchAnnounces } from 'src/actions/announces';
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
  Image,
} from '@chakra-ui/react';
// == Composant
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const announces = useSelector((state) => state.announces.list.sort((a, b) => b.id - a.id));
  const users = useSelector((state) => state.users.list.sort((a, b) => b.id - a.id));

  const deleteUser = async (userId) => {
    await axios.delete(`https://shokubutsu.herokuapp.com/v1/users/${userId}`);
    dispatch(getUsers());
  };
  const deleteAnnounce = async (announceId) => {
    // console.log('je suis dans la fonction delete announce');
    await axios.delete(`https://shokubutsu.herokuapp.com/v1/announces/${announceId}`);
    dispatch(fetchAnnounces());
  };

  return (
    <div className="dashboard">
      <section className="dashboard__section">
        <Table variant="simple" size="sm" colorScheme="blackAlpha" className="dashboard__section__about__block">
          <TableCaption className="dashboard__section__title padding" placement="top">Annonces Signalées</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Image</Th>
              <Th>Author</Th>
              <Th>Signalement</Th>
              <Th>Éditer</Th>
              <Th>Supprimer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {announces.map((announce) => (
              <Tr key={announce.id}>
                <Td>{announce.title}</Td>
                <Td>{announce.description}</Td>
                <Td>
                  <Image src={announce.image} />
                </Td>
                <Td>{announce.author}</Td>
                <Td>{announce.report_desc}</Td>
                <Td>
                  <Button textAlign="center">
                    Éditer
                  </Button>
                </Td>
                <Td>
                  <Button textAlign="center" onClick={() => deleteAnnounce(announce.id)}>
                    Supprimer
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Table variant="simple" size="sm" colorScheme="blackAlpha" className="dashboard__section__about__block">
          <TableCaption className="dashboard__section__title padding" placement="top">Gestion des utilisateurs</TableCaption>
          <Thead>
            <Tr>
              <Th>Pseudo</Th>
              <Th>Email</Th>
              <Th>Supprimer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.nickname}</Td>
                <Td>{user.mail}</Td>
                <Td>
                  <Button textAlign="center" onClick={() => deleteUser(user.id)}>
                    Supprimer
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </section>
    </div>
  );
};

// == Export
export default Dashboard;
