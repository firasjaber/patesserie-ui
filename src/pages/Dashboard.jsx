import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import HeroImage from './../utils/wide.jpg';
import Navbar from '../ui/Navbar';
import ProductAdd from '../ui/dashboard-ui/ProductAdd';
import ProductList from '../ui/dashboard-ui/ProductList';
const Dashboard = () => {
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
                <Container maxW="container.xl">
                    <Flex>
                        <ProductAdd />
                        <ProductList />
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}

export default Dashboard
