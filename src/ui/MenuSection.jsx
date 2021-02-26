import React from 'react';
import {
  SimpleGrid,
  Box,
  Container,
  Heading,
  Flex,
  Image,
} from '@chakra-ui/react';
import MenuCake from './../utils/menuCake.jpg';
import MenuCake2 from './../utils/menuCake2.jpg';
import MenuCake3 from './../utils/menuCake3.jpg';
import MenuCookie from './../utils/menuCookie2.jpg';
import MenuCookie2 from './../utils/menuCookie3.jpg';

const MenuSection = () => {
  const topPicks = [
    { name: 'GOOD CAKE', price: 15, imageSrc: MenuCake },
    { name: 'PERFECT CAKE', price: 15, imageSrc: MenuCake },
    { name: 'GOOD CAKE', price: 15, imageSrc: MenuCake2 },
    { name: 'GOOD CAKE', price: 15, imageSrc: MenuCake3 },
    { name: 'BLACK COOKIE', price: 15, imageSrc: MenuCookie },
    { name: 'NEW COOKIE', price: 15, imageSrc: MenuCookie2 },
    { name: 'GOOD CAKE', price: 15, imageSrc: MenuCake2 },
    { name: 'GOOD CAKE', price: 15, imageSrc: MenuCake3 },
  ];
  return (
    <Box bgColor="gray.200" pt="100px" height="950px" id="menu">
      <Container maxW="container.md">
        <Box textAlign="center">
          <Box
            borderRadius="3px"
            h="4px"
            w="30px"
            bgColor="red.700"
            mb="5px"
            mx="auto"
          ></Box>
          <Heading size="xs" color="red.700">
            Discover
          </Heading>
          <Heading size="lg" my="20px">
            Our Top Picks
          </Heading>
          <SimpleGrid columns="4" spacing="30px" mt="40px">
            {topPicks.map((product) => (
              <Flex
                flexDirection="column"
                height="300px"
                bgColor="gray.100"
                transition="all 0.3s ease-in-out"
                _hover={{ shadow: 'base', cursor: 'pointer' }}
              >
                <Image height="200px" src={product.imageSrc}></Image>
                <Heading
                  mt="15px"
                  size="sm"
                  fontFamily="oswald"
                  fontWeight="500"
                  color="red.700"
                >
                  {product.price} DT
                </Heading>
                <Heading
                  mt="7px"
                  size="sm"
                  fontFamily="oswald"
                  fontWeight="500"
                >
                  {product.name}
                </Heading>
                <Flex
                  mt="9px"
                  mx="auto"
                  w="100px"
                  justifyContent="space-between"
                >
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

const Star = () => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

export default MenuSection;
