import React from 'react'
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react'

const ProductAdd = () => {
    return (
        <Box
            ml="25"
            maxW="sm"
            w="lg"
            borderWidth="1px"
            borderRadius="lg"
            shadow="5"
            p="5"
            height="500px"
            bg="tomato"
        >
            <Text color="white" fontSize="2xl">
                Add Product
            </Text>
            <Divider />
            <Box w="75%" >
                <FormControl id="dish-name" m="2" isRequired>
                    <FormLabel color="white" >Dish name</FormLabel>
                    <Input />
                </FormControl>
                <FormControl id="dish-description" m="2" isRequired>
                    <FormLabel color="white" >Description</FormLabel>
                    <Input />
                </FormControl>
                <FormControl id="dish-category" m="2" isRequired>
                    <FormLabel color="white" >Category</FormLabel>
                    <Input />
                </FormControl>
                <FormControl id="dish-price" m="2" isRequired>
                    <FormLabel color="white" >Price</FormLabel>
                    <Input type="number" />
                </FormControl>
                <Button type="submit" m="2">Add</Button>
            </Box>
        </Box>

    )
}

export default ProductAdd
