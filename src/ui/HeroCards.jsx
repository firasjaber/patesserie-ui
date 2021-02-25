import React from 'react';
import { Container, Box, Heading, Flex, Image } from '@chakra-ui/react';
import Cake2 from './../utils/cake2.png';
import Cookies from './../utils/cookies.png';
import Bread from './../utils/bread.png';

const HeroCards = () => {
  return (
    <Box bgColor="gray.100" height="180px">
      <Container maxW="container.md">
        <Flex justifyContent="space-between">
          <Box
            bgColor="white"
            h="190px"
            w="170px"
            marginTop="-80px"
            boxShadow="base"
            transition="all 0.1s ease-in-out"
            _hover={{
              boxShadow: 'lg',
              cursor: 'pointer',
              transform: 'translateY(-1px)',
            }}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              height="150px"
              marginTop="15px"
            >
              <Image src={Cookies} h="100px" w="auto"></Image>
              <Heading
                size="md"
                fontFamily="Oswald"
                color="blackAlpha.700"
                fontWeight="500"
                marginTop="10px"
              >
                COOKIES
              </Heading>
            </Flex>
          </Box>
          <Box
            bgColor="white"
            h="190px"
            w="170px"
            marginTop="-80px"
            boxShadow="base"
            transition="all 0.1s ease-in-out"
            _hover={{
              boxShadow: 'lg',
              cursor: 'pointer',
              transform: 'translateY(-1px)',
            }}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              marginTop="10px"
              justifyContent="space-between"
              height="150px"
            >
              <Image src={Cake2} h="100px" w="auto"></Image>
              <Heading
                size="md"
                fontFamily="Oswald"
                color="blackAlpha.700"
                fontWeight="500"
                marginTop="8px"
              >
                CAKE
              </Heading>
            </Flex>
          </Box>
          <Box
            bgColor="white"
            h="190px"
            w="170px"
            marginTop="-80px"
            boxShadow="base"
            transition="all 0.1s ease-in-out"
            _hover={{
              boxShadow: 'lg',
              cursor: 'pointer',
              transform: 'translateY(-1px)',
            }}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              marginTop="10px"
              justifyContent="space-between"
              height="150px"
            >
              <Image src={Bread} h="100px" w="auto"></Image>
              <Heading
                size="md"
                fontFamily="Oswald"
                color="blackAlpha.700"
                fontWeight="500"
                marginTop="8px"
              >
                BREAD
              </Heading>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroCards;
