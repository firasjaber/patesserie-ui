import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
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
                                <Image height="60px" w="50px" src={MenuCake}></Image>
                                <Text m="2">
                                    {product.name}
                                </Text>
                                <Text m="2">
                                    {product.price} DT
                                </Text>
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
