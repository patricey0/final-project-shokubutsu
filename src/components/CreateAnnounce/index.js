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
} from '@chakra-ui/react';
import './styles.scss';


const CreateAnnounce = () => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("SUBMIT");
  };

  return (
    <div className="div">
      <Heading color="#366D4B" pt={10}>Ajouter une annonce</Heading>
      <Container>
        <Box padding='4'bg="" >
          <form action="" onSubmit={handleSubmit}>
            <FormControl color="black" as='fieldset' border="black">
              <FormLabel htmlFor='exchange' pt={3}>Type d'échange</FormLabel>
              <Select id='exchange'>
                <option>Don</option>
                <option>Echange</option>
              </Select>
              <FormLabel htmlFor='title' pt={3}>Titre</FormLabel>
              <Input id='title' type='text' placeholder="Cactus .."/>
              <FormLabel htmlFor='description' pt={3}>Description</FormLabel>
              {/* <Input id='description' type='text'/> */}
              <Textarea placeholder="Plante d'intérieur, extérieur .." />
              <FormLabel htmlFor='picture' pt={3}>Ajouter une photo</FormLabel>
              <Input id='picture' type='file' p={3} h="none"/>
              <Button
                  m={8}
                  color="white"
                  bgColor="#366D4B"
                  type='submit'
                  _hover={{bgColor:"#366D4B"}}
                  _active={{bgColor:"#BEE0CA", color:"#366D4B"}}
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
