import {
  Link as ChakraLink,
  Text,
  Box,
  Flex,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Logo = () => (
  <Box>
    <Text fontSize="lg" fontWeight="semibold">
      Effect Free
    </Text>
  </Box>
);

type LinkProps = {
  to: string;
  value: string;
};

const Link = ({ to, value }: LinkProps) => (
  <ChakraLink as={RouterLink} to={to}>
    {value}
  </ChakraLink>
);

const NavLinks = () => (
  <>
    <Link to="/" value="Home" />
    <Link to="/portfolio" value="Portfolio" />
    <Link to="/blog" value="Blog" />
    <ChakraLink href="https://memsafe.effectfree.dev" isExternal>
      Memsafe <ExternalLinkIcon />
    </ChakraLink>
  </>
);

const DesktopNavLinks = () => (
  <HStack spacing="4" display={['none', 'flex']}>
    <NavLinks />
  </HStack>
);

const Navbar = () => (
  <Flex p="4" align="center" as="nav">
    <Logo />
    <Spacer />
    <DesktopNavLinks />
  </Flex>
);

export default Navbar;
