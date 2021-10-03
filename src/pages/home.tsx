import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  Text,
  Heading,
  Image,
  AspectRatio,
  VStack,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import linux from '../../static/linux.jpg';

const Header = () => (
  <Container as="header" maxW="container.xl">
    <Heading p="4" textAlign="center">
      Effect Free
    </Heading>
    <Text size="lg" fontWeight="semibold" textAlign="center">
      Life without side effects and more
    </Text>
    <AspectRatio maxH="lg">
      <Image fit="cover" src={linux} alt="Banner Image" />
    </AspectRatio>
  </Container>
);

const About = () => (
  <Container id="about" maxW="container.xl" centerContent>
    <Heading>About</Heading>
    <Text p="2">
      Effect Free in programming means that a function does not affect the
      overall program when it is run. It takes an input and produces an output
      and does nothing else. It has been a staple of functional programming for
      a while and is one of the key principles and concepts that enables it.
    </Text>
    <Text p="2">
      I called the website Effect Free because I really wanted to evangelise the
      functional programming agenda and get rid of the corporate overlords who
      keep pushing University aged students to learn dumb object oriented
      principles for applications programming, and planning rediculously badly
      written overplanned and illogical 'enterprise' applications. Some examples
      would be UML and whiteboard code interviews.
    </Text>
    <Text p="2">
      This is not to attack any projects unless it is written in Java, then what
      are you doing to your braincells, but rather to push people to learn
      things that actually do matter. Things like performance, state management,
      code reusability and readability and safety.{' '}
    </Text>
    <Text p="2">
      What is the point of developing software that is going to fail like we do
      in University, and not knowing how to properly write reusable code. That
      being said a lot of this is in a light hearted sense, and I have no plan
      going forward to say drop everything your doing and rewrite in Haskell or
      Rust, but more so to educate people in adapting application and state
      safety into our existing programming toolbox.
    </Text>
  </Container>
);

const Profile = () => (
  <Container id="mendoza" maxW="container.xl" centerContent>
    <Heading>Who am I?</Heading>
    <Grid
      w="100%"
      py="4"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={3} colSpan={1} justifySelf="center">
        <SkeletonCircle size="3xs" />
      </GridItem>
      <GridItem colSpan={4}>
        <Skeleton>
          <Text fontSize="md">Text</Text>
        </Skeleton>
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <SkeletonText />
      </GridItem>
    </Grid>
  </Container>
);

const Home = () => (
  <VStack spacing="4" pt="16">
    <Header />
    <About />
    <Profile />
  </VStack>
);

export default Home;
