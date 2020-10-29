import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/core'

interface Props extends HeadingProps {
  text: string
}

const Title: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Heading mb="4" p="2" color="success" fontSize="6xl" {...rest}>
      {text}
    </Heading>
  )
}

export default Title
