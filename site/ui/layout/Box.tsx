import styled from '@emotion/styled'
import { flexbox, layout } from 'styled-system'


export const Box = styled('div')(() => ({
    display: 'flex',
  }),
  flexbox,
  layout
)
