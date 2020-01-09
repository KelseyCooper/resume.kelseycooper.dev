import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

 *,
 *::before,
 *::after {
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%
  }

  body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.125rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Oswald', sans-serif;
  }
`;

export default GlobalStyle;