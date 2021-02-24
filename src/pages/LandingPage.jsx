import React from 'react';
import Navbar from './../ui/Navbar';
import {
  Container,
  Box,
  useColorMode,
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import HeroImage from './../utils/wide.jpg';
import Cake from './../utils/cake.png';
import HeroCards from '../ui/HeroCards';
import AboutSection from './../ui/AboutSection';

const LandingPage = () => {
  const { toggleColorMode } = useColorMode();
  const currentColorMode = useColorModeValue('light', 'dark');
  if (currentColorMode === 'dark') toggleColorMode();
  return (
    <Box
      backgroundImage={`url('${HeroImage}')`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="680px"
      marginTop="-29px"
    >
      <Box height="100%" sx={{ backgroundColor: 'rgba(255,250,255,0.8)' }}>
        <Container maxW="container.lg" fontFamily="Roboto" paddingTop="40px">
          <Navbar />
        </Container>
        <Container maxW="container.md" mt="70px">
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading maxW="350px">
                Get a taste of our delicious bakeries
              </Heading>
              <Text maxW="300px" pt="15px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Button
                fontFamily="Oswald"
                mt="20px"
                rounded="none"
                color="white"
                bgColor="red.700"
              >
                DISCOVER NOW -
              </Button>
            </Box>
            <Image src={Cake} w="400px" h="350px" />
          </Flex>
        </Container>
      </Box>
      <HeroCards />
      <AboutSection />
    </Box>
  );
};

export default LandingPage;
