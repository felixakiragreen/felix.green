import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  color,
  flex,
  fontSize,
  maxWidth,
  minWidth,
  order,
  space,
  width,
} from 'styled-system'

const Box = styled.div`
  ${alignSelf}
  ${color}
  ${flex}
  ${fontSize}
  ${maxWidth}
  ${minWidth}
  ${order}
  ${space}
  ${width}
`

export default props => <Box {...props} />
