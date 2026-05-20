import {
  extendTheme,
  ColorMode,
  ChakraTheme,
  ThemeComponentProps,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

interface IThemeMode {
  Light: ColorMode
  Dark: ColorMode
}

// Logo-based color palette
export const ThemeMode: IThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const LogoColors = {
  primary: '#23f9fe',      // Cyan - main logo color (dark mode)
  secondary: '#00d4ff',    // Electric blue
  accent: '#7B2FFF',       // Purple accent (light mode)
  dark: '#0a0a0f',         // Dark background
  light: '#ffffff',        // Light text
  muted: '#8a8a9a',        // Muted text
}

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

// Theme Config
const config = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}

const colors = {
  black: '#0a0a0f',  // Use logo dark color
  brand: {
    cyan: '#23f9fe',
    electric: '#00d4ff',
    purple: '#7B2FFF',
  },
}

const styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#0a0a0f')(props),
      fontFamily: 'Poppins, sans-serif',
    },
    '::selection': {
      backgroundColor: mode('#7B2FFF30', '#23f9fe30')(props),
      color: mode('#7B2FFF', '#23f9fe')(props),
    },
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: mode('#f1f1f1', '#121218')(props),
    },
    '::-webkit-scrollbar-thumb': {
      background: mode('#805AD5', '#23f9fe')(props),
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: mode('#7B2FFF', '#00d4ff')(props),
    },
  }),
}

const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('purple.600', LogoColors.primary)(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('gray.800', 'gray.400')(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('black.400', LogoColors.primary)(props),
  }),
  accentAlternative: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('#595959', '#A6A6A6')(props),
  }),
  glow: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode('#7B2FFF', LogoColors.primary)(props),
    textShadow: mode('0 0 10px rgba(123, 47, 255, 0.5)', '0 0 20px rgba(35, 249, 254, 0.5)')(props),
  }),
}

const theme = extendTheme({
  config,
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('purple.600', LogoColors.primary)(props),
        transition: 'all 0.3s ease',
        _hover: {
          textDecoration: 'none',
          transform: 'translateY(-2px)',
        },
      }),
      variants: {
        ...textVariants,
        description: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode('gray.800', 'gray.400')(props),
          _hover: {
            color: mode('purple.600', LogoColors.primary)(props),
            textDecoration: 'none',
          },
        }),
        social: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode('#595959', '#8a8a9a')(props),
          _hover: {
            color: mode('purple.600', LogoColors.primary)(props),
            transform: 'translateY(-4px)',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      variants: {
        outline: (props) => ({
          borderColor: mode('black.400', LogoColors.primary)(props),
          _hover: {
            bg: mode('purple.60010', 'cyan.30010')(props),
            transform: 'translateY(-2px)',
          },
        }),
        outlineAlternative: (props) => ({
          borderWidth: '1px',
          borderRadius: 0,
          borderColor: mode('#595959', 'whiteAlpha.500')(props),
          _hover: {
            backgroundColor: mode(
              'rgba(49, 151, 149, 0.06)',
              'rgba(35, 249, 254, 0.1)'
            )(props),
            borderColor: mode('purple.600', LogoColors.primary)(props),
          },
        }),
        ghost: (props) => ({
          color: mode('purple.600', LogoColors.primary)(props),
          _hover: {
            bg: mode('purple.60010', 'cyan.30010')(props),
          },
        }),
        solid: (props) => ({
          bg: mode('purple.600', LogoColors.primary)(props),
          color: mode('white', '#0a0a0f')(props),
          _hover: {
            bg: mode('purple.700', LogoColors.secondary)(props),
            transform: 'translateY(-2px)',
            boxShadow: mode('0 4px 15px rgba(128, 90, 213, 0.4)', '0 4px 20px rgba(35, 249, 254, 0.4)')(props),
          },
        }),
      },
    },
    Icon: {
      variants: {
        accent: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
        }),
      },
    },
    Divider: {
      variants: {
        solid: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
        gradient: (props) => ({
          borderColor: 'transparent',
          height: '1px',
          background: mode(
            'linear-gradient(90deg, transparent, #7B2FFF, transparent)',
            'linear-gradient(90deg, transparent, #23f9fe, transparent)'
          )(props),
        }),
      },
    },
    Box: {
      variants: {
        glass: (props) => ({
          bg: mode('whiteAlpha.800', 'whiteAlpha.100')(props),
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: mode('1px solid gray.200', '1px solid whiteAlpha.200')(props),
        }),
        glow: (props) => ({
          boxShadow: mode(
            '0 0 30px rgba(123, 47, 255, 0.3)',
            '0 0 40px rgba(35, 249, 254, 0.3)'
          )(props),
        }),
      },
    },
  },
})

export default theme