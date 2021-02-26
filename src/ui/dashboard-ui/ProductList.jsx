import { Box, Button, Divider, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MenuCake from '../../utils/menuCake.jpg';
import Scroll from './../Scroll';
const ProductList = () => {

    const [products, setProducts] = useState([
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
        { name: 'GOOD CAKE', price: 15 },
    ])

    return (
        <Box ml="5" p="5" borderRadius="lg" w="75%" bg="white">
            <Text fontSize="3xl" mb="1.5">
                Baked Already
            </Text>
            <Divider />
            <Scroll>
                {products.map(product => {
                    return (
                        <>
                            <Flex>
                                <Image p="1.25" m="2" height="60px" w="50px" src={MenuCake}></Image>
                                <Text m="2" alignSelf="center">
                                    {product.name}
                                </Text>
                                <Spacer />
                                <Text m="2" alignSelf="center">
                                    {product.price} DT
                                </Text>
                                <Spacer />
                                <Button m="2" alignSelf="center">Edit</Button>
                                <Button 
                                    m="2" 
                                    alignSelf="center"
                                    bg="red" 
                                    borderRadius="3xl" 
                                    color="white"
                                    fontWeight="bold"
                                >
                                    X
                                </Button>
                            </Flex>
                            <Divider />
                        </>
                    )
                })}
            </Scroll>
        </Box>
    )
}

export default ProductList
