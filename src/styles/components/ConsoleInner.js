import styled from 'styled-components';
import tokens from '../tokens';

export const ConsoleInner = styled.div`
  height: 100%;
  padding: ${tokens.space(2)};
  overflow: auto;

  p {
    margin: 0;
  }

  .highlight {
    color: ${tokens.brand('primaryLight')};
  }

  .highlight-brand {
    color: ${tokens.brand('primary')};
  }

  a {
    color: ${tokens.color('white')};
  }
`

export const ConsoleInput = styled.textarea`
  width: 100%;
  height: ${tokens.space(3)};
  padding: 0;
  background-color: transparent;
  border: 0;
  color: ${tokens.color('white')};
  outline: 0;
  resize: none;
`