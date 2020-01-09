import styled from 'styled-components';
import tokens from '../tokens'
import { layoutMixin } from '../mixins/BaseLayout';

export const Header = styled.header`
  ${layoutMixin};
`

export const Title = styled.h1`
  margin-top: 0;
`

export const Subtitle = styled.code`
  margin-bottom: ${tokens.space(5)};
`