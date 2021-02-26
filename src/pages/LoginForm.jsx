import React from 'react';
import { Link as ReachLink } from 'react-router-dom'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Link
} from '@chakra-ui/react';
import HeroImage from './../utils/wide.jpg';

const LoginForm = () => {
    return (
        <Box
            backgroundImage={`url('${HeroImage}')`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="680px"
            marginTop="-29px"
        >
            <Box height="100%" sx={{ backgroundColor: 'rgba(255,250,255,0.8)' }}>
                <Container pt="20">

                    <Flex width="full" align="center" justifyContent="center">
                        <Box bgGradient={[
                            "linear(to-tr, teal.300,yellow.400)",
                            "linear(to-t, blue.200, teal.500)",
                            "linear(to-b, orange.100, purple.300)",
                        ]}
                            p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                            <Box textAlign="center">
                                <Heading>Login</Heading>
                            </Box>
                            <Box my={4} textAlign="left">
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <Input type="text" placeholder="test@test.com" />
                                </FormControl>
                                <FormControl mt={6}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" placeholder="*******" />
                                </FormControl>
                                <Button as={ReachLink} to="/admin" width="full" my={4} bg="#000" color="white" _hover="none" borderRadius="none">
                                    Sign In
                                </Button>
                                <Link as={ReachLink} to="/" >&larr;Back home</Link>
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box>

    )
}

export default LoginForm
