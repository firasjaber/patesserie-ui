import React from 'react';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import About from './../utils/about.png';

const AboutSection = () => {
  return (
    <Box bgColor="gray.100" height="390px" id="about">
      <Container maxW="container.md">
        <Flex justifyContent="center" alignItems="center">
          <Image src={About} h="300px" w="auto" mr="30px" />
          <Box mt="30px">
            <Box
              borderRadius="3px"
              h="4px"
              w="30px"
              bgColor="red.700"
              mb="5px"
            ></Box>
            <Heading size="xs" color="red.700">
              Story Time
            </Heading>
            <Heading size="lg" my="10px">
              About GoBakery
            </Heading>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
