import { createTheme } from '@mui/material/styles'
import components from './Component'
import typography from './Typography'
import shadows from './Shadow'

const SidebarWidth = 265
const TopbarHeight = 70

const baseTheme = {
  palette: {
    background: {
      default: '#222222'
    },
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#E0E0E0'
    },
    success: {
      main: '#00c292',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff'
    },
    danger: {
      main: '#e46a76',
      light: '#fdf3f5'
    },
    info: {
      main: '#AE992F'
    },
    error: {
      main: '#e45a68'
    },
    warning: {
      main: '#fff4e5',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#fff',
      secondary: '#777e89',
      danger: '#fc4b6c'
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: 'rgba(0, 0, 0, 0.03)'
    }
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: TopbarHeight,
        padding: '0 30px'
      },
      '@media(max-width:1280px)': {
        minHeight: '64px'
      }
    }
  },
  status: {
    danger: '#e53e3e'
  },
  components,
  typography,
  shadows
}

const theme = createTheme(baseTheme)

export { TopbarHeight, SidebarWidth, theme }
