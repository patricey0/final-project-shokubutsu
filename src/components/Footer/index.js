import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Link,
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
  // borderRadius='full'
          boxSize="50px"
          src={logo}
          alt="logo shokubutsu"
        />
        <Stack direction="row" spacing={6}>
          <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
          <NavLink to="/annonces">Annonces</NavLink>
          <NavLink to="/guide">Guide</NavLink>
          <NavLink to="/contact" onClick={scrollToTop}>Contact</NavLink>
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
