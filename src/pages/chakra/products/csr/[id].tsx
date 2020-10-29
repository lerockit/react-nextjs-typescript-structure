import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text
} from '@chakra-ui/core'
import Axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import ProductDetails from '../../../../components/chakra/ProductDetails'
import Title from '../../../../components/chakra/Title'
import SEO from '../../../../components/SEO'
import { IProduct } from '../../../../interfaces/product'

const Product: React.FC = () => {
  const [product, setProduct] = useState<IProduct>(null)

  const route = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      if (!route.query.id) return
      const { data } = await Axios.get<IProduct>(
        `http://localhost:3333/products/${route.query.id}`
      )
      setProduct(data)
    }

    fetchData()
  }, [route.query.id])

  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      align="center"
      direction="column"
    >
      <Title text="CSR" />
      {product ? (
        <>
          <SEO title={`CSR ${product.title}`} />
          <ProductDetails product={product} />
        </>
      ) : (
        <Spinner size="xl" />
      )}
    </Flex>
  )
}

export default Product
