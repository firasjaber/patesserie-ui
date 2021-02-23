import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Image,
  VStack,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Hero from '../ui/Hero';
import Products from '../ui/Products';
import Navbar from './../ui/Navbar';

const HomePage = () => {
  return (
    <Container maxW="3xl">
      <Navbar />
      <Hero />
      <Heading size="lg" my="30px" fontFamily="Dancing Script">
        Our Products
      </Heading>
      <Products />
    </Container>
  );
};

export default HomePage;
