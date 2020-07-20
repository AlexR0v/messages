import styled from '@emotion/styled'
import { theme } from '../theme'
import { color, typography } from 'styled-system'

const TextLink = styled('span')(() => ({
    fontFamily: theme.fontFamily.text,
    color: 'inherit',
    ':hover': {
      color: theme.color.gray,
      textDecoration: 'underline'
    }
  }),
  typography, color)

export default TextLink
