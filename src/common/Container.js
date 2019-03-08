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
  space,
} from 'styled-system'
import { t } from '.'

const Container = styled.div`
  max-width: ${t('maxContainerWidth')};
  ${alignItems}
  ${display}
  ${flex}
  ${flexDirection}
  ${justifyContent}
  ${maxWidth}
  ${minWidth}
  ${space}
`

export default props => <Container {...props} />
