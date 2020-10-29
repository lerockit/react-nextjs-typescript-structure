import { extendTheme } from '@chakra-ui/core'

const colors = {
  success: '#6BB70B',
  white: '#ffffff',
  gray: {
    100: '#363843',
    300: '#646981'
  }
}

const fonts = {
  body: 'Inter',
  heading: 'Inter'
}

const components = {
  Button: {
    variants: {
      success: {
        backgroundColor: 'success',
        color: 'white',
        fontSize: 'sm',
        _hover: {
          boxShadow: 'lg'
        }
      }
    }
  }
}

export default extendTheme({ colors, fonts, components })
