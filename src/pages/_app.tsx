import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/styled-components/global'
import styledComponentsTheme from '../styles/styled-components/theme'
import { ChakraProvider } from '@chakra-ui/core'
import chakraTheme from '../styles/chakra/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={styledComponentsTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
