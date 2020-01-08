import tokens from './tokens'

const media = {
  mobileS: `(min-width: ${tokens.bp('mobileS')})`,
  mobileM: `(min-width: ${tokens.bp('mobileM')})`,
  mobileL: `(min-width: ${tokens.bp('mobileL')})`,
  tablet: `(min-width: ${tokens.bp('tablet')})`,
  laptop: `(min-width: ${tokens.bp('laptop')})`,
  laptopL: `(min-width: ${tokens.bp('laptopL')})`,
  desktop: `(min-width: ${tokens.bp('desktop')})`,
  desktopL: `(min-width: ${tokens.bp('desktop')})`
};

export default media