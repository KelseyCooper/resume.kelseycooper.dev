import styled from 'styled-components';
import tokens from '../tokens';
import media from '../media';

export const App = styled.div`
  height: 100%;
  padding: ${tokens.space(8)} ${tokens.space(3)};

  @media ${media.laptop} {
    padding: ${tokens.space(8)};
  }
`