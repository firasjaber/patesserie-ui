import React from 'react';
import { Flex, Link, Heading } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"
const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" my="30px">
      <Heading fontFamily="Architects Daughter">GoBakery</Heading>
      <Flex>
        <Link ml="25px"  as={ReachLink} to="/">Home</Link>
        <Link ml="25px" href="#about">About</Link>
        <Link ml="25px" href="#menu">Menu</Link>
        <Link ml="25px" href="#contact">Contact</Link>
        <Link ml="25px" as={ReachLink} to="/admin">admin</Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
