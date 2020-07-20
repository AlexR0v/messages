import styled from '@emotion/styled'
import { flexbox, layout, space } from 'styled-system'

export const Layout = styled('section')(layout, space)

export const Column = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}), flexbox, layout, space)

export const Row = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
}), flexbox, layout, space)
