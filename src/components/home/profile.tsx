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

const ProfileLoading = () => (
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
        <Skeleton />
      </GridItem>
      <GridItem rowSpan={2} colSpan={4}>
        <SkeletonText />
      </GridItem>
    </Grid>
  </Container>
);

type ProfileDisplayProps = { user: AuthorType };

const ProfileDisplay = (props: ProfileDisplayProps) => {
  const { name, slug } = props.user;

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
          <SkeletonCircle size="3xs" />
        </GridItem>
        <GridItem colSpan={4}>
          <Text fontSize="lg" fontWeight="semibold">
            {name}
          </Text>
          <Text fontSize="md" fontWeight="semibold">
            {`@${slug.current}`}
          </Text>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <SkeletonText />
        </GridItem>
      </Grid>
    </Container>
  );
};

const Profile = () => {
  const dispatch = useAppDispatch();
  const userEmendoza = useAppSelector(selectAuthorBySlug('emendoza'));

  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectErrors);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAuthors());
    }
  }, [status, dispatch]);

  if (status === 'success' && userEmendoza) {
    return <ProfileDisplay user={userEmendoza} />;
  }

  return <ProfileLoading />;
};

export default Profile;
