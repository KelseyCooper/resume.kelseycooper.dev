import styled from 'styled-components';
import tokens from '../tokens';

export const ConsoleHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${tokens.space(4)};
  background-image: linear-gradient(to bottom, ${tokens.color('console.headerTop')}, ${tokens.color('console.headerBottom')});
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ConsoleHeaderActions = styled.div`
  display: flex;
  align-items: center;
`

const ConsoleActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${tokens.space(2)};
  height: ${tokens.space(2)};
  padding: 0;
  margin-right: ${tokens.space(1)};
  margin-left: ${tokens.space(1)};
  border-radius: 50%;
  border: 1px solid;
  outline: 0;
  cursor: pointer;

  img {
    width: ${tokens.space(1)};
    height: ${tokens.space(1)};
  }
`

export const ConsoleClose = styled(ConsoleActionButton)`
  background-color: ${tokens.color('console.closeBackground')};
  border-color: ${tokens.color('console.closeOutline')}
`

export const ConsoleMinimize = styled(ConsoleActionButton)`
  background-color: ${tokens.color('console.minimizeBackground')};
  border-color: ${tokens.color('console.minimizeOutline')}
`

export const ConsoleExpand = styled(ConsoleActionButton)`
  background-color: ${tokens.color('console.expandBackground')};
  border-color: ${tokens.color('console.expandOutline')}
`
