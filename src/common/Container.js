import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  display,
  flex,
  flexDirection,
  justifyContent,
  maxWidth,
  minWidth,
  width,
  space,
} from 'styled-system'

const Container = styled.div`
  ${alignItems}
  ${display}
  ${flex}
  ${flexDirection}
  ${justifyContent}
  ${maxWidth}
  ${minWidth}
  ${width}
  ${space}
`

export default props => <Container {...props} />
