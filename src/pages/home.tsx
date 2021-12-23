import { VStack } from '@chakra-ui/react';

import Header from '../components/home/header';
import About from '../components/home/about';
import Profile from '../components/home/profile';

//  const profileData = useAppSelector((state) => state.authors.value[0]);
const Home = () => (
  <VStack spacing="16" pt="16">
    <Header />
    <About />
    <Profile />
  </VStack>
);

// <Profile name="Euan Mendoza" />

export default Home;
