import React, { useState, useEffect } from 'react'
import { SimpleGrid} from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { useQuery } from 'react-query'


const Products = () => {
  const [products,setProducts] = useState([]);
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3001/api/products').then(res =>
      res.json()
    )
  )
  useEffect(() => {
    if (data.products) {
      setProducts(data.products)
    }
  }, [data])

  return (
    <SimpleGrid minChildWidth='180px' spacing={5}>
      {products.map(product => <ProductCard name={product.name} desc={product.description} price={product.price}/>)}
    </SimpleGrid>
  )
}

export default Products
