import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'v9scvo27',
  dataset: 'production',
  useCdn: true,
});
