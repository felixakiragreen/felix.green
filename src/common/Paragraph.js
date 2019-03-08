import React from 'react'
import styled from 'styled-components'
import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
} from 'styled-system'
// import { t } from '.'

const Paragraph = styled.div`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign} 
`

export default props => (
  <Paragraph
    my={4}
    color='text'
    fontSize={[3, 4, 5]}
    lineHeight={['condensed', 'standard']}
    {...props}
  />
)
