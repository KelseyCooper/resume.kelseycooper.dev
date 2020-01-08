import styled from 'styled-components';
import tokens from '../tokens';
import { layoutMixin } from '../mixins/BaseLayout'

export const Console = styled.section`
  ${layoutMixin}
  ${props => props.consoleExpanded ? (
    `
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      max-width: unset;
      margin-right: 0;
      margin-left: 0;
    `
  ) : (
    `
      min-height: 70vh;
      height: 32rem;
    `
  )};
  border-radius: 10px;
  ${props => props.consoleMinimized && (
    `
      height: ${tokens.space(3)};
      min-height: unset;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `
  )};
  padding-bottom: ${tokens.space(4)} ;
  font-family: 'Ubuntu Mono', monospace;
  color: ${tokens.color('white')};
  overflow: hidden;
  background-color: ${tokens.color('console.background')};
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

export const ConsoleClosed = styled.div`
  ${layoutMixin}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  height: 500px;
`