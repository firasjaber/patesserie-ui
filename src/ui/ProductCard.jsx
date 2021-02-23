import React from 'react';
import {
  Heading,
  Box,
  Image,
  HStack,
  Text,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';

const ProductCard = ({ name, desc, price }) => {
  const URL =
    'https://images.immediate.co.uk/production/volatile/sites/30/2021/01/Chicken-spinach-and-bacon-alfredo-pasta-bake-5619a3a.jpg';
  return (
    <Flex w="100%" bg="gray.700" borderRadius="md">
      <Box
        w="150px"
        h="150px"
        backgroundImage={`url('${URL}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="10px"
        flexGrow="0"
        flexShrink="0"
        flexBasis="150px"
      >
        <Box
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          sx={{ backgroundColor: 'rgba(0,0,0,0.0)' }}
          transition="all 0.3s ease-in-out"
          _hover={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          <Button
            w="100%"
            h="100%"
            opacity="0"
            transition="all 0.3s ease-in-out"
            _hover={{ opacity: '1' }}
          >
            View Item
          </Button>
        </Box>
      </Box>
      <Box p="15px">
        <Heading size="md" fontFamily="Raleway">
          {name}
        </Heading>
        <Text noOfLines="4" pl="5px" mt="5px">
          {desc}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard;
