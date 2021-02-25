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
import HeroSection from './../ui/HeroSection';
import HeroCards from '../ui/HeroCards';
import AboutSection from './../ui/AboutSection';
import MenuSection from '../ui/MenuSection';
import ContactSection from '../ui/ContactSection';
import Footer from '../ui/Footer';

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
      <HeroSection />
      <HeroCards />
      <AboutSection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
