import { css } from 'styled-components'
import tokens from '../tokens'

export const layoutMixin = css`
  max-width: ${tokens.get('maxWidth.base')};
  margin-right: auto;
  margin-left: auto;
`