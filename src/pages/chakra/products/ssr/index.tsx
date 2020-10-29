import React from 'react'

import { Flex } from '@chakra-ui/core'
import Axios from 'axios'
import { GetServerSideProps } from 'next'
import { IProduct } from '../../../../interfaces/product'
import Title from '../../../../components/chakra/Title'
import ProductList from '../../../../components/chakra/ProductList'
import SEO from '../../../../components/SEO'

interface Props {
  products: IProduct[]
}

const Home: React.FC<Props> = ({ products }) => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
    >
      <Title text="SSR" />
      <SEO title="SSR Produtos" />
      <Flex>
        <ProductList products={products} />
      </Flex>
    </Flex>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data: products } = await Axios.get<IProduct[]>(
    'http://localhost:3333/products'
  )
  return {
    props: { products }
  }
}
