import { Container, Heading, SimpleGrid,Box, Image, VStack, Text , Flex , Button} from '@chakra-ui/react'
import React from 'react'
import Products from '../ui/Products';
import Navbar from './../ui/Navbar';

const HomePage = () => {
  return (
    <Container maxW='3xl'>
      <Navbar/>
      <Heading size='md' my='20px'>
        Our Products
      </Heading>
      <Products/>
    </Container>
  )
}

export default HomePage
