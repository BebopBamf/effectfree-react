import { useEffect } from 'react';
import {
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../hooks/data';

import {
  selectAuthorBySlug,
  selectStatus,
  selectErrors,
  fetchAuthors,
} from '../../data/authorSlice';

import type { AuthorType } from '../../data/authorSlice';

const Profile = () => {
  const dispatch = useAppDispatch();
  const userEmendoza = useAppSelector(selectAuthorBySlug('emendoza'));

  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectErrors);

  console.log(status);

  const isLoading = status === 'loading' || status === 'idle';

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAuthors());
      console.log(status);
    }
  }, [status, dispatch]);

  return (
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
          <SkeletonCircle size="3xs" isLoaded={!isLoading} />
        </GridItem>
        <GridItem colSpan={4}>
          <Skeleton isLoaded={!isLoading}>
            <Text fontSize="lg" fontWeight="semibold"></Text>
          </Skeleton>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <SkeletonText />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Profile;
