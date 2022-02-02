import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Input,
  Button,
  FormHelperText,
  Container,
  Box,
  Select,
  Textarea,
  Heading,
  useToast,
} from '@chakra-ui/react';
import './styles.scss';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const CreateAnnounce = () => {
  const toast = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const { id } = useSelector((state) => state.user);
  const handleSubmit = (evt) => {
    // console.log(image);
    // console.log(description);
    // console.log(category);
    evt.preventDefault();
    console.log('SUBMIT');

    // si l'un des champs est vide, on toast l'erreur
    // on envoie le toast
    if(!title || !description || !category || !image){
      console.log("il manque un champ");
      
      // let message = "Il manque le champ";
      // switch (message) {
      //   case !title:
      //     message += " Titre";
      //     break;
      //   case !description:
      //     message += " Description";
      //     break;
      //   case !category:
      //     message += " category";
      //     break;
      //   case !image:
      //     message += " image";
      //     break;
      }
      toast({
                title: "Erreur.",
                description: message,
                status: "error",
                position: "top",
                duration: 9000,
                isClosable: true,
              });
      // return 
    }
    // si tout est ok
    console.log("tous les champs sont OK")
    // const data = new FormData();
    // data.append('file', image);
    // data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    // data.append('api_key', process.env.REACT_APP_API_KEY);
    // fetch(process.env.REACT_APP_API_URL, {
    //   method: 'post',
    //   body: data,
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     axios.post('https://shokubutsu.herokuapp.com/v1/announces', {
    //       title: title, // cactus
    //       image: data.url, // lien cloudinary
    //       description: description, // qui veut mon super cactus ???
    //       category: category, // don
    //       visitor_id: id, // 32
    //     })
    //     .then((res) => {
    //       // console.log(res.data);
    //       // dispatch(saveUser(res.data));
    //       toast({
    //         title: "Annonce envoyée.",
    //         description: "L'annonce est en ligne !",
    //         status: "success",
    //         position: "top",
    //         duration: 9000,
    //         isClosable: true,
    //       });
    //       // redirection vers la page des annonces ou Mes annonces
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //       toast({
    //         title: "Erreur.",
    //         description: "Apriori, il y a eu un couac",
    //         status: "error",
    //         position: "top",
    //         duration: 9000,
    //         isClosable: true,
    //       });
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(error.message);
    //     axios.post("https://shokubutsu.herokuapp.com/v1/delete-image", {
    //       image_url: data.url,
    //     });
      // });
  // };

  return (
    <div className='div'>
      <Heading color='#366D4B' pt={10}>
        Ajouter une annonce
      </Heading>
      <Container>
        <Box padding='4' bg=''>
          <form action='' onSubmit={handleSubmit}>
            <FormControl color='black' as='fieldset' border='black'>
              <FormLabel htmlFor='category' pt={3}>
                Type d'échange
              </FormLabel>
              <Select
                id='category'
                name='category'
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value='don'>Don</option>
                <option value='echange'>Echange</option>
              </Select>
              <FormLabel htmlFor='title' pt={3}>
                Titre
              </FormLabel>
              <Input
                id='title'
                name='title'
                type='text'
                placeholder='Cactus ..'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel htmlFor='description' pt={3}>
                Description
              </FormLabel>
              {/* <Input id='description' type='text'/> */}
              <Textarea
                placeholder="Plante d'intérieur, extérieur .."
                value={description}
                onChange={(evt) => setDescription(evt.target.value)}
              />
              <FormLabel htmlFor='image' pt={3}>
                Ajouter une photo
              </FormLabel>
              <Input
                id='image'
                type='file'
                name='image'
                p={3}
                h='none'
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Button
                m={8}
                color='white'
                bgColor='#366D4B'
                type='submit'
                _hover={{ bgColor: '#366D4B' }}
                _active={{ bgColor: '#BEE0CA', color: '#366D4B' }}
              >
                Soumettre
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default CreateAnnounce;
