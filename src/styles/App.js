import styled from 'styled-components';
import tokens from './tokens';
import media from './media';

export const App = styled.div`
  height: 100%;
  padding: ${tokens.space(8)} ${tokens.space(3)};
  background-color: ${tokens.color('grey.lightest')};
  overflow-y: auto;

  @media ${media.laptop} {
    padding: ${tokens.space(8)};
  }
`