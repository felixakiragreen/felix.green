import React from 'react'
import styled from 'styled-components'

import {
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system'

import { Box } from '.'

const Text = styled(Box)`
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}

  display: ${props => (props.inline ? 'initial' : 'inherit')};
`

export default props => (
  <Text color='inherit' fontSize='inherit' letterSpacing='hero' {...props} />
)
