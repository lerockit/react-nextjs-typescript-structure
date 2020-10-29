import React, { useEffect, useState } from 'react'

import { Spinner } from '@chakra-ui/core'
import Axios from 'axios'
import { IProduct } from '../../interfaces/product'
import SEO from '../../components/SEO'
import {
  Container,
  ImageContainer,
  ProductButton,
  ProductCard,
  ProductDescription,
  ProductsContainer,
  ProductTitle,
  Title
} from '../../styles/styled-components/pages/Products'
import Link from 'next/link'

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
    <Container>
      <SEO title="SC Produtos" />
      <Title>Styled Components</Title>
      <ProductsContainer>
        {products ? (
          <>
            {products.map(product => (
              <ProductCard key={product.id}>
                <ImageContainer>
                  <img src={product.image} alt={product.title} />
                </ImageContainer>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <Link href={`/chakra/products/csr/${product.id}`}>
                  <ProductButton>CSR</ProductButton>
                </Link>
                <Link href={`/chakra/products/ssr/${product.id}`}>
                  <ProductButton>SSR</ProductButton>
                </Link>
                <Link href={`/chakra/products/ssg/${product.id}`}>
                  <ProductButton>SSG</ProductButton>
                </Link>
              </ProductCard>
            ))}
          </>
        ) : (
          <Spinner size="xl" />
        )}
      </ProductsContainer>
    </Container>
  )
}

export default Home
