import { Container, Heading, Text } from '@chakra-ui/react';

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
      All through University we are tought that Object Oriented Programming is
      the be all and end all of programming. While I have no problem with Object
      Oriented Programming, I am tired of the misconceptions that are delivered
      and wanted to make a website that represented me and what I know and do as
      a programmer.
    </Text>

    <Text p="2">
      I think where I want to take this website is to provide interesting
      insights into programming languages, frameworks, libraries and concepts.
      As well as discuss Linux and recommend applications and tools. As I walk
      the line of functional programming I see a clearer picture of certain
      misconceptions and false facts.
    </Text>

    <Text p="2">
      I think just to give a taste, I very rarely use recursion except in
      haskell, but even then it is still rare. Functional Programming very
      rarely involves recursion. I think I am more looking forward to discussing
      state management, and how to replicate the flexibility of other styles of
      programming, but in a side effect free manner. Did you know that most
      functional programming languages have classes/objects/polymorphism. This
      isn't a weak attempt at replicating object oriented programming in
      functional programming as they are used for very different things.
    </Text>

    <Text p="2">
      Lastly I don't plan to stay on the functional programming side of things.
      I plan to discuss music, mechanical keyboards, movies, tv shows and more.
      Generally speaking the plan for the blog is to be well rounded and focus
      on functional programming but branch off into everything that would
      represent me as an individual.
    </Text>
  </Container>
);

export default About;
