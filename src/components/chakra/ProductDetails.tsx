import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'
import { IProduct } from '../../interfaces/product'

interface Props {
  product: IProduct
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  return (
    <Flex pt="12" maxW="5xl">
      <Image src={product.image} alt={product.title} maxW="sm" />
      <Box pl="8">
        <Heading pb="4">{product.title}</Heading>
        <Text color="gray.300" pb="8" fontSize="sm">
          {product.description}
        </Text>
        <Text color="gray.300" pb="12">
          {product.largeDescription}
        </Text>
        <Button variant="success" size="lg">
          Comprar
        </Button>
      </Box>
    </Flex>
  )
}

export default ProductDetails
