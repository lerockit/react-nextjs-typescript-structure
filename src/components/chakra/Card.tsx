import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/core'

interface Props extends FlexProps {
  children: React.ReactNode[]
}

const Card: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex
      direction="column"
      _hover={{ boxShadow: 'md' }}
      p="8"
      transition="ease-in-out"
      transitionProperty="all"
      transitionDuration=".3s"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Card
