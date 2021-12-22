// import { useEffect, useState } from 'react';
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  Text,
  Heading,
  VStack,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';

// import sanityClient from '../client';

import About from '../components/home/about';
import Header from '../components/home/header';

type ProfileProps = {
  name: string;
};

const Home = () => (
  <VStack spacing="4" pt="16">
    <Header />
    <About />
    <Profile name="Euan Mendoza" />
  </VStack>
);

export default Home;
