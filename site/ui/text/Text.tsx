import styled from '@emotion/styled'
import { theme } from '../theme'
import { color, typography } from 'styled-system'

const Text = styled('span')(() => ({
    fontFamily: theme.fontFamily.text,
  }),
  typography, color)

export default Text
