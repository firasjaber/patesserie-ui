import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my="30px">
      <Heading fontFamily="Architects Daughter">GoBakery</Heading>
      <Flex>
        <Link ml="25px">Home</Link>
        <Link ml="25px">About</Link>
        <Link ml="25px">Menu</Link>
        <Link ml="25px">Contact</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
