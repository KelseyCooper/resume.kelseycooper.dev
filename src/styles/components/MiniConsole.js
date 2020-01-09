import styled from 'styled-components';
import tokens from '../tokens';

export const MiniConsole = styled.button`
  position: ${props => props.positionFixed ? 'fixed' : 'relative'};
  top: ${tokens.space(4)};
  right: ${tokens.space(4)};
  width: 100%;
  padding: 0;
  height: ${tokens.space(8)};
  width: ${tokens.space(10)};
  background-color: ${tokens.color('white')};
  border: 0;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  background-color: ${tokens.color('console.background')};
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`

export const MiniConsoleHeader = styled.div`
  height: ${tokens.space(1)};
  width: 100%;
  background-image: linear-gradient(to bottom, ${tokens.color('console.headerTop')}, ${tokens.color('console.headerBottom')});
`

export const MiniConsoleInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${tokens.space(7)};
  color: ${tokens.color('white')};

  p {
    margin: 0;
  }
`