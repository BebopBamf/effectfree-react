// import { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';

// import sanityClient from '../client';

import { useAppSelector } from '../hooks/data';

import Header from '../components/home/header';
import About from '../components/home/about';
import Profile from '../components/home/profile';

const Home = () => {
  const profileData = useAppSelector((state) => state.authors.value[0]);

  return (
    <VStack spacing="4" pt="16">
      <Header />
      <About />
      <Profile profile={profileData} />
    </VStack>
  );
};

// <Profile name="Euan Mendoza" />

export default Home;
