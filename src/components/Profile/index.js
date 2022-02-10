// == Import
import {
  Box,
  // chakra,
  Container,
  Stack,
  Text,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Avatar,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Center,
  AvatarBadge,
  IconButton,
  // SmallCloseIcon,
  useToast,
} from '@chakra-ui/react';
import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import UpdateUser from 'src/components/LoginForm/UpdateUser';
import {
  changeField,
  deleteUser,
  deleteAvatar,
  saveUser,
} from 'src/actions/user';

import axios from 'axios';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

// == Composant
const Profile = () => {
  const toast = useToast();
  const [image, setImage] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: isUpdateClose,
  } = useDisclosure();
  const {
    isOpen: isAvatarOpen,
    onOpen: onAvatarOpen,
    onClose: onAvatarClose,
  } = useDisclosure();

  const {
    mail,
    password,
    city,
    nickname,
    picture,
    isadmin,
    id,
  } = useSelector(
    (state) => state.user,
  );
  const cancelRef = useRef();
  const handleDelete = () => {
    console.log(image);
    // console.log("Je veux supprimer mon profil");
    dispatch(deleteUser());
    onClose();
  };
  const uploadImage = async () => {
    // evt.preventDefault();
    if (!image) {
      toast({
        title: 'Il faut une image pour pouvoir la changer ;)',
        status: 'error',
        isClosable: true,
        position: 'top',
      });
      return;
    }
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    data.append('api_key', process.env.REACT_APP_API_KEY);
    fetch(process.env.REACT_APP_API_URL, {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((res) => {
        // lien de la photo
        // Je supprime l'ancienne photo du user
        if (picture) {
          axios.post('https://shokubutsu.herokuapp.com/v1/delete-image', {
            image_url: picture, // state
          });
        }
        // dispatch(setUrl(data.url));
        axios
          .patch('https://shokubutsu.herokuapp.com/v1/update-image', {
            userId: id,
            image_url: res.url,
          })
          .then((resu) => {
            console.log(res.data);
            dispatch(saveUser(resu.data));
            toast({
              title: 'Avatar mis a jour.',
              description: 'Nous avons changé votre Avatar',
              status: 'success',
              position: 'top',
              duration: 9000,
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log(err.message);
            axios.post('https://shokubutsu.herokuapp.com/v1/delete-image', {
              image_url: data.url,
            });
          });
        // upload
        setImage('');
        onAvatarClose();
      })
      .catch((err) => console.log(err));
  };
  const previewFile = (file) => {
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <Container maxW="7xl" color="black" mb={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Avatar
            rounded="md"
            alt="product image"
            bg={picture ? 'transparent' : '#366d4b'}
            // color='green'
            // name={nickname}
            src={picture}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: '100%', sm: '200px', lg: '300px' }}
          />
          <EditIcon
            color="#366d4b"
            onClick={onAvatarOpen}
            fontSize="xl"
            _hover={{ cursor: 'pointer' }}
          />
          <Modal
            isOpen={isAvatarOpen}
            onClose={() => {
              setImage('');
              onAvatarClose();
              setPreviewSource('');
            }}
          >
            <ModalOverlay />
            <ModalContent p={7}>
              <ModalHeader
                lineHeight={1.1}
                fontSize="xl"
                color="#366d4b"
                textTransform="uppercase"
              >
                Modification de l'avatar
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl id="userName">
                  <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                      <Avatar
                        size="xl"
                        src={previewSource || picture}
                        color="green"
                      >
                        {!image && (
                          <AvatarBadge
                            as={IconButton}
                            size="sm"
                            rounded="full"
                            top="-10px"
                            colorScheme="red"
                            aria-label="remove Image"
                            icon={<CloseIcon />}
                            onClick={() => {
                              // try {
                              dispatch(deleteAvatar());
                              //   toast({
                              //     title: "Avatar updated.",
                              //     description: "We've updated your avatar for you.",
                              //     status: "success",
                              //     duration: 9000,
                              //     isClosable: true,
                              //   });
                              // } catch (err) {
                              //   toast({
                              //     title: "Avatar can't be updated.",
                              //     description: "We can't update your account for you.",
                              //     status: "error",
                              //     duration: 9000,
                              //     isClosable: true,
                              //   });
                              // }
                            }}
                          />
                        )}
                      </Avatar>
                    </Center>
                    <Center w="full" display="flex" flexDirection="column">
                      <Button
                        as={FormLabel}
                        htmlFor="email"
                        w="full"
                        type="submit"
                        mt={5}
                        ml={3}
                        bg="#366d4b"
                        color="white"
                        _active={{ bg: '#BEE0CA', color: '#366d4b' }}
                        textTransform="uppercase"
                        _hover={{
                          transform: 'translateY(2px)',
                          boxShadow: 'lg',
                        }}
                      >
                        {image ? image.name : 'Choisir une image'}
                      </Button>
                      <input
                        id="email"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => previewFile(e.target.files[0])}
                      />
                      {image && (
                        <Button
                          w="full"
                          type="submit"
                          mt={5}
                          bg="#366d4b"
                          color="white"
                          _active={{ bg: '#BEE0CA', color: '#366d4b' }}
                          textTransform="uppercase"
                          _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                          }}
                          onClick={() => uploadImage()}
                        >
                          Valider ma photo
                        </Button>
                      )}
                    </Center>
                  </Stack>
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Profil de {nickname}
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('green.500', 'green.300')}
              fontWeight="500"
              textTransform="uppercase"
              mb="4"
            >
              Mes infos
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon pseudo:
                </Text>{' '}
                {nickname}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Ma ville:
                </Text>{' '}
                {city}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon mail:
                </Text>{' '}
                {mail}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Mon role:
                </Text>{' '}
                {isadmin ? 'Admin' : 'Utilisateur'}
              </ListItem>
            </List>
          </Box>
          {/* Ici il y aura la modal pour l'update */}
          <Button
            onClick={onUpdateOpen}
            rounded="none"
            w="full"
            mt={8}
            size="md"
            py="4"
            bg="#366d4b"
            color="white"
            _active={{ bg: '#BEE0CA', color: '#366d4b' }}
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Modifier mon profil
          </Button>
          <Modal isOpen={isUpdateOpen} onClose={isUpdateClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                lineHeight={1.1}
                fontSize="xl"
                textTransform="uppercase"
                color="#366d4b"
              >
                Modification du profil
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <UpdateUser
                    mail={mail}
                    password={password}
                    nickname={nickname}
                    city={city}
                    id={id}
                    changeField={(value, name) => dispatch(changeField(value, name))}
                    onClose={isUpdateClose}
                  />
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button
            onClick={onOpen}
            rounded="none"
            w="full"
            mt={8}
            size="md"
            py="4"
            bg="#366d4b"
            color="white"
            _active={{ bg: '#BEE0CA', color: '#366d4b' }}
            textTransform="uppercase"
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >Supprimer mon profil
          </Button>
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader
                textTransform="uppercase"
                color="#366d4b"
              >Suppression de profil
              </AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Etes-vous sur de vouloir supprimer votre profil ? Votre profil
                et vos annonces seront immédiatement supprimés
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Non
                </Button>
                <Button colorScheme="red" ml={3} onClick={handleDelete}>
                  Oui
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

// == Export
export default Profile;
