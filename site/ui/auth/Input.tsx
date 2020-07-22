import styled from '@emotion/styled'
import { theme } from '../theme'

export const Input = styled('input')(() => ({
  width: '540px',
  height: '50px',
  border: `1px solid ${theme.color.whiteGrey}`,
  borderRadius: '5px',
  color: theme.color.gray,
  fontSize: theme.fontSize.l,
  paddingLeft: '25px'
}))
