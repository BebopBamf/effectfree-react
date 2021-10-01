import {
  Text,
  IconButton,
  Link as ChakraLink,
  LinkOverlay,
  LinkBox,
  Box,
  Flex,
  HStack,
  VStack,
  Spacer,
  Collapse,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import {
  ExternalLinkIcon,
  HamburgerIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Logo = () => (
  <LinkBox>
    <Text fontSize="lg" fontWeight="semibold">
      <LinkOverlay as={RouterLink} to="/">
        Effect Free
      </LinkOverlay>
    </Text>
  </LinkBox>
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
    <Link to="/portfolio" value="Portfolio" />
    <Link to="/blog" value="Blog" />
    <ChakraLink href="https://memsafe.effectfree.dev" isExternal>
      Memsafe <ExternalLinkIcon />
    </ChakraLink>
  </>
);

const DesktopNavLinks = () => (
  <HStack spacing="4" display={['none', 'none', 'flex']}>
    <NavLinks />
  </HStack>
);

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => (
  <Collapse in={isOpen} animateOpacity>
    <VStack spacing="4">
      <NavLinks />
    </VStack>
  </Collapse>
);

type ButtonToggle = {
  toggleButton: () => void;
};

const HamburgerButton = ({ toggleButton }: ButtonToggle) => (
  <IconButton
    aria-label="Open Navigation Menu"
    display={['inline-flex', 'inline-flex', 'none']}
    onClick={() => toggleButton()}
    icon={<HamburgerIcon />}
    isRound
  />
);

const CloseButton = ({ toggleButton }: ButtonToggle) => (
  <IconButton
    aria-label="Close Navigation Menu"
    display={['inline-flex', 'inline-flex', 'none']}
    onClick={() => toggleButton()}
    icon={<CloseIcon />}
    isRound
  />
);

type ColorModeButtonProps = {
  toggleColors: () => void;
  colorMode: string;
};

const ColorModeButton = ({ toggleColors, colorMode }: ColorModeButtonProps) => (
  <IconButton
    aria-label="Turn darkmode on"
    m="2"
    onClick={toggleColors}
    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    isRound
  />
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as="nav">
      <Flex p="4" align="center">
        <Logo />
        <Spacer />
        <DesktopNavLinks />
        <ColorModeButton toggleColors={toggleColorMode} colorMode={colorMode} />
        {isOpen ? (
          <CloseButton toggleButton={onClose} />
        ) : (
          <HamburgerButton toggleButton={onOpen} />
        )}
      </Flex>
      <MobileMenu isOpen={isOpen} />
    </Box>
  );
};

export default Navbar;
