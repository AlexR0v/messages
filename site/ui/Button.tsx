import styled from '@emotion/styled'
import { theme } from './theme'
import { ifProp } from 'styled-tools'

export const Button = styled('button')(() => ({
  minWidth: '107px',
  height: '54px',
  color: theme.color.white,
  fontSize: theme.fontSize.l,
  border: 'none',
  background: theme.color.green,
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {color: theme.color.whiteGrey}
}), ifProp('disabled', ()=>({
  color: theme.color.whiteGrey,
  background: theme.color.gray,
  cursor: 'default'
})))
