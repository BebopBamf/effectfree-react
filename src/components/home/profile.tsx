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

import { AuthorType } from '../../data/authorSlice';

type ProfileProps = {
  profile: Readonly<AuthorType>;
};

const Profile = (props: ProfileProps) => {
  /*
  const [testProfile, setTestProfile] = useState(null);

  const fetchMendoza = async () => {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "author" && slug.current == "emendoza"] {
          _id,
          slug,
          name,
          image,
          description,
          bio
        }`,
      );
      console.log(data);
      setTestProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMendoza();
  });
  */

  const { name, slug } = props.profile;

  const title = `${name} (${slug.current})`;

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
          <Skeleton isLoaded>
            <Text fontSize="lg" fontWeight="semibold">
              {title}
            </Text>
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
