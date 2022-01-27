import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Link,
  Button,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/img/spider-plant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="center"
        align="center"

      >
        <Image
          boxSize="50px"
          src={logo}
          alt="logo shokubutsu"
        />
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
          <Button color="#366d4b" onClick={scrollToTop} as={NavLink} to="/" _hover={{ color: '#366d4b' }} _focus={{ boxShadow: ' 0 0 0 3px #366d4b7c' }} _active={{ backgroundColor: '#366d4b', color: 'white'}} bg="none">Home</Button>
          <Button color="#366d4b" onClick={scrollToTop} as={NavLink} to="/announces" _hover={{ color: '#366d4b' }} bg="none" _focus={{ boxShadow: ' 0 0 0 3px #366d4b7c' }} _active={{ backgroundColor: '#366d4b', color: 'white'}}>Annonces</Button>
          <Button color="#366d4b" onClick={scrollToTop} as={NavLink} to="/guide" _hover={{ color: '#366d4b' }} _focus={{ boxShadow: ' 0 0 0 3px #366d4b7c' }} bg="none" _active={{ backgroundColor: '#366d4b', color: 'white'}}>Guide</Button>
          <Button color="#366d4b" onClick={scrollToTop} as={NavLink} to="/contact" _hover={{ color: '#366d4b' }} _focus={{ boxShadow: ' 0 0 0 3px #366d4b7c' }} bg="none" _active={{ backgroundColor: '#366d4b', color: 'white'}}>Contact</Button>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Shokubutsu. All rights reserved</Text>
          <Stack direction="row" spacing={6}>
            <Media />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
const Media = () => (
  <>
    <Link href="https://instagram.com" isExternal>
      <FontAwesomeIcon icon={faInstagram} />
    </Link>
    <Link href="https://twitter.com" isExternal>
      <FontAwesomeIcon icon={faTwitter} />
    </Link>
    <Link href="https://youtube.com" isExternal>
      <FontAwesomeIcon icon={faYoutube} />
    </Link>
  </>
);
