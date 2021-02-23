import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my="30px">
      <Heading fontFamily="Architects Daughter">GoBakery</Heading>
      <Flex>
        <Link ml="2">Home</Link>
        <Link ml="2">Categories</Link>
        <Link ml="2">Dashboard</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
