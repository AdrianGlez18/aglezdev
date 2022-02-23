import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-sub-title': {
        textDecoration: 'underline',
        fontSize: 15,
        textUnderlineOffset: 4,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 2,
        marginBottom: 3
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  deepBlue: '#05386b',
  deepGreen: '#379683',
  midGreen: '#5cdb95',
  lightGreen: '#8ee4af',
  lightBg: '#edf5e1',
  customYellow50: '#fffde7',
  customYellow100: '#fff9c4',
  customYellow200: '#fff59d',
  customYellow300: '#fff176',
  customYellow400: '#ffee58',
  customYellow500: '#ffeb3b',
  customYellow600: '#fdd835',
  customYellow700: '#fbc02d',
  customYellow: {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
  }
}


const config = {
  initialColorMode: 'dark',
  //useCustomProperties: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
