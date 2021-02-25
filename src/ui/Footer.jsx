import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import FooterImage from './../utils/footer.jpg';

const Footer = () => {
  return (
    <Box
      backgroundImage={`url('${FooterImage}')`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="250px"
    >
      <Box height="100%" sx={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Container maxW="container.sm" color="white">
          <Flex justifyContent="space-between" pt="50px">
            <Box>
              <Heading
                size="sm"
                fontWeight="500"
                opacity="0.9"
                color="red.700"
                fontFamily="oswald"
                mb="10px"
              >
                EMAILS
              </Heading>
              <Text opacity="0.6">contact@gobakery.com</Text>
              <Text opacity="0.6">order@gobakery.com</Text>
              <Text opacity="0.6">reach@gobakery.com</Text>
            </Box>
            <Box>
              <Heading
                size="sm"
                fontWeight="500"
                opacity="0.9"
                color="red.700"
                fontFamily="oswald"
                mb="10px"
              >
                LOCATIONS
              </Heading>
              <Text opacity="0.6" fontSize="sm">
                Mars - D1235, Some whore in the Glaxay, 6969
              </Text>
              <Text opacity="0.6" fontSize="sm">
                Earth - 15723, flat World, 6969
              </Text>
            </Box>
            <Box>
              <Heading
                size="sm"
                fontWeight="500"
                opacity="0.9"
                color="red.700"
                fontFamily="oswald"
                mb="10px"
              >
                SOCIALS
              </Heading>
              <List opacity="0.6" fontSize="sm">
                <ListItem>Facebook</ListItem>
                <ListItem>Instagram</ListItem>
                <ListItem>Twitter</ListItem>
              </List>
            </Box>
          </Flex>
          <Text mt="40px" textAlign="center" opacity="0.6" fontSize="sm">
            © 2018 - 2021 GoBakery LLC, all right reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
