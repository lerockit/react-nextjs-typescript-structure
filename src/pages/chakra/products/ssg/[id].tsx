import { Flex, Spinner } from '@chakra-ui/core'
import Axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import ProductDetails from '../../../../components/chakra/ProductDetails'
import Title from '../../../../components/chakra/Title'
import SEO from '../../../../components/SEO'
import { IProduct } from '../../../../interfaces/product'

interface Props {
  product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
  const router = useRouter()
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
    >
      <Title text="SSG" />
      {!router.isFallback ? (
        <>
          <ProductDetails product={product} />
          <SEO title={`CSR ${product.title}`} />
        </>
      ) : (
        <Spinner size="xl" />
      )}
    </Flex>
  )
}

export default Product

export const getStaticProps: GetStaticProps<Props> = async context => {
  const { data } = await Axios.get<IProduct>(
    `http://localhost:3333/products/${context.params.id}`
  )
  return {
    props: { product: data },
    revalidate: 20
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await Axios.get<IProduct[]>(
    'http://localhost:3333/products/'
  )
  const paths = data.map(product => ({
    params: {
      id: String(product.id)
    }
  }))
  return {
    paths,
    fallback: true
  }
}
