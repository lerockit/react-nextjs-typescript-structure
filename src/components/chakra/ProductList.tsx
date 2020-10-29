import { Button, Flex, Image, Text } from '@chakra-ui/core'
import Link from 'next/link'
import React from 'react'
import { IProduct } from '../../interfaces/product'
import Card from './Card'

interface Props {
  products: IProduct[]
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map(product => (
        <Card key={product.id} width={1 / 4} mx="4">
          <Flex flexGrow={1} alignItems="center">
            <Image src={product.image} alt={product.title} />
          </Flex>
          <Text pb="2">{product.title}</Text>
          <Text color="gray.300" fontSize="xs" pb="8">
            {product.description}
          </Text>
          <Link href={`/chakra/products/csr/${product.id}`}>
            <Button variant="success" mb="6">
              CSR
            </Button>
          </Link>
          <Link href={`/chakra/products/ssr/${product.id}`}>
            <Button variant="success" mb="6">
              SSR
            </Button>
          </Link>
          <Link href={`/chakra/products/ssg/${product.id}`}>
            <Button variant="success" mb="6">
              SSG
            </Button>
          </Link>
        </Card>
      ))}
    </>
  )
}

export default ProductList
