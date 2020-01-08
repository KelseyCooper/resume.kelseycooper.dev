import DesignSystem from 'design-system-utils'

const designTokens = {
  type: {
    baseFontSize: '16px',

    sizes: {
      xs: '16px',
      s: '20px',
      sl: '25px',
      base: '30px',
      m: '36px',
      l: '42px',
      xl: '50px',
      xxl: '58px',
    },

    fontFamily: {
      base: 'Play',
      heading: 'Questrial',
    },

    lineHeight: {
      headings: 1.1,
    },

    letterSpacing: {
      base: 'normal',
      small: '0.0375em',
      medium: '0.0625em',
      large: '0.125em',
    },
  },

  colors: {
    colorPalette: {
      white: {
        base: '#FFFFFF',
      },

      black: {
        base: '#000',
      },

      console: {
        headerTop: "#e4e4e4",
        headerBottom: "#d2d2d2",
        background: "#282c34",
        closeBackground: '#ff6058',
        closeOutline: '#f0554e',
        minimizeBackground: '#ffbd2e',
        minimizeOutline: '#e5ac30',
        expandBackground: '#29cd42',
        expandOutline: '#0cb625'
      }
    },

    brand: {
      primary: '#ffac1c',
      primaryLight: '#f0d6ab',
      secondary: '#F9A01B'
    },
  },

  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  },

  spacing: {
    scale: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160],
  },

  zIndex: {
    under: -1,
    base: 0,
    content: 1,
    aboveContent: 2,
    flyout: 50,
    header: 35,
    cover: 100,
  },

  maxWidth: {
    base: '50rem'
  }
}

export default new DesignSystem(designTokens)