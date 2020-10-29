import { Flex, Spinner } from '@chakra-ui/core'
import Axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import ProductDetails from '../../../../components/chakra/ProductDetails'
import Title from '../../../../components/chakra/Title'
import SEO from '../../../../components/SEO'
import { IProduct } from '../../../../interfaces/product'

interface Props {
  product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
    >
      <Title text="SSR" />
      {product ? (
        <>
          <SEO title={`CSR ${product.title}`} />{' '}
          <ProductDetails product={product} />{' '}
        </>
      ) : (
        <Spinner size="xl" />
      )}
    </Flex>
  )
}

export default Product

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const { data } = await Axios.get<IProduct>(
    `http://localhost:3333/products/${context.params.id}`
  )
  return {
    props: { product: data }
  }
}
