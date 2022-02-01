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
} from '@chakra-ui/react';
import './styles.scss';


const CreateAnnounce = () => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("SUBMIT");
  };

  return (
    <Container >
      <Box padding='4'bg="gray.300" >
        <form action="" onSubmit={handleSubmit}>
          <FormControl color="black" as='fieldset' border="black">
            <FormLabel htmlFor='exchange'>Type d'échange</FormLabel>
            <Select id='exchange'>
              <option>Don</option>
              <option>Echange</option>
            </Select>
            <FormLabel htmlFor='title'>Titre</FormLabel>
            <Input id='title' type='text' />
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Input id='description' type='text' />
            <FormLabel htmlFor='picture'>Ajouter une photo</FormLabel>
            <Input id='picture' type='file' />
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
              >
                Soumettre
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );

};


export default CreateAnnounce;
