import styled from '@emotion/styled'
import { theme } from './theme'

export const Button = styled('button')(() => ({
  width: '107px',
  height: '54px',
  color: theme.color.white,
  fontSize: theme.fontSize.l,
  border: 'none',
  background: theme.color.green,
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {color: theme.color.whiteGrey}
}))
