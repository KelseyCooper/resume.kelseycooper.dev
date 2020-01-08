import styled from 'styled-components';
import tokens from '../tokens';
import { layoutMixin } from '../mixins/BaseLayout';

export const Footer = styled.footer`
  ${layoutMixin};
  padding-bottom: ${tokens.space(3)};
  margin-top: ${tokens.space(10)};
`

export const FooterLinkList = styled.ul`
  display: flex;
  padding: 0;
`

export const FooterLink = styled.li`
  list-style: none;
  margin-right: ${tokens.space(6)};

  a {
    color: ${tokens.color('black')};

    &:hover {
      color: ${tokens.brand('primary')};
    }
  }
`