import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 4rem;
  color: ${props => props.theme.colors.success};
  font-weight: bold;
`

export const ProductsContainer = styled.div`
  display: flex;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s all ease-in-out;
  padding: 2rem;
  width: 25%;
  margin: 0 1rem;

  &:hover {
    box-shadow: ${props => props.theme.shadow.md};
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

export const ProductTitle = styled.h2`
  padding-bottom: 0.5rem;
`

export const ProductDescription = styled.p`
  color: ${props => props.theme.colors.gray[300]};
  font-size: 0.75rem;
  padding-bottom: 2rem;
`

export const ProductButton = styled.button`
  color: ${props => props.theme.colors.white};
  margin-bottom: 1.5rem;
  background-color: ${props => props.theme.colors.success};
  border-radius: ${props => props.theme.rounded.md};
  padding: 0.5rem 0;
  transition: 0.3s all ease-in-out;

  &:hover {
    box-shadow: ${props => props.theme.shadow.md};
  }
`
