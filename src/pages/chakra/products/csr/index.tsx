import React, { useEffect, useState } from 'react'

import { Flex, Spinner } from '@chakra-ui/core'
import Axios from 'axios'
import { IProduct } from '../../../../interfaces/product'
import Title from '../../../../components/chakra/Title'
import ProductList from '../../../../components/chakra/ProductList'
import SEO from '../../../../components/SEO'

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get<IProduct[]>(
        'http://localhost:3333/products'
      )
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
    >
      <SEO title="CSR Produtos" />
      <Title text="CSR" />
      <Flex>
        {products ? <ProductList products={products} /> : <Spinner size="xl" />}
      </Flex>
    </Flex>
  )
}

export default Home
