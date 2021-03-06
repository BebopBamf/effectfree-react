import { Container, Heading, Text, AspectRatio, Image } from '@chakra-ui/react';

import linux from '../../../static/linux.jpg';

const Header = () => (
  <Container as="header" maxW="container.xl">
    <Heading p="4" textAlign="center">
      Effect Free
    </Heading>
    <Text fontSize="xl" fontWeight="semibold" textAlign="center" pb="2">
      Life without side effects and more
    </Text>
    <AspectRatio maxH="lg">
      <Image fit="cover" src={linux} alt="Banner Image" />
    </AspectRatio>
  </Container>
);

export default Header;
