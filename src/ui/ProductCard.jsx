import React from 'react';
import {
  Heading,
  Box,
  Image,
  VStack,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';

const ProductCard = ({ name, desc, price }) => {
  return (
    <Box bg="gray.700" height="350px" borderRadius="md">
      <VStack>
        <Image
          borderTopRadius="md"
          boxSize="100%"
          objectFit="cover"
          src="https://images.immediate.co.uk/production/volatile/sites/30/2021/01/Chicken-spinach-and-bacon-alfredo-pasta-bake-5619a3a.jpg"
          alt="Segun Adebayo"
        />
        <Heading size="md">{name}</Heading>
        <Text>{desc}</Text>
        <Flex
          w="100%"
          px="30px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{price + ' '} DT</Text>
          <Button>Buy</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProductCard;
