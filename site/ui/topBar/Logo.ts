import styled from '@emotion/styled'
import { theme } from '../theme'

export const Logo = styled('span')(() => ({
  textDecoration: 'none',
  color: theme.color.green,
  fontSize: theme.fontSize.m,
  fontFamily: theme.fontFamily.text,
  textTransform: 'uppercase',
  fontWeight: 700,
}))
