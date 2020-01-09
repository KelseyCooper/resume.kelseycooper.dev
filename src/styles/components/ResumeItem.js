import styled from 'styled-components';
import tokens from '../tokens';

export const ResumeItem = styled.div`
  padding: ${tokens.space(5)};
  margin-bottom: ${tokens.space(4)};
  background-color: ${tokens.color('white')};
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`

export const ResumeItemTitle = styled.h2`
  position: relative;
  margin-top: 0;
  text-transform: uppercase;
  color: ${tokens.brand('primary')};

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: -${tokens.space(5)};
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid ${tokens.brand('primary')};
  }
`

export const ResumeListItemTitle = styled.h3`
  margin-top: ${tokens.space(4)};

  a {
    color: ${tokens.color('black')};
    text-decoration: none;

    &:hover {
      color: ${tokens.brand('primary')};
    }
  }
`

export const ResumeListItemSubtitle = styled.p`
  margin-top: 0;
  font-style: italic;
`

export const ResumeListColumn = styled.ul`
  padding: 0;
  margin-top: ${tokens.space(2)};
`

export const ResumeListColumnItem = styled.li`
  margin-bottom: ${tokens.space(1)};
  list-style: none;
  font-family: 'Ubuntu Mono', monospace;
`

export const ResumeListRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

export const ResumeListRowItem = styled.li`
  position: relative;
  padding: 0;
  padding-right: ${tokens.space(1)};
  padding-left: ${tokens.space(1)};
  list-style: none;
  font-family: 'Ubuntu Mono', monospace;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: 0;
    background-color: ${tokens.brand('primary')};
  }

  &:last-child {
    &&::after {
      display: none;
    }
  }

  &:first-child {
    padding-left: 0;
  }
`