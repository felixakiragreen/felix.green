import React from 'react'
import posed, { PoseGroup } from 'react-pose'
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

const PosedDiv = posed.div({
  enter: {
    opacity: 1,
    delay: ({ delay }) => delay || 0,
    transition: ({ duration }) => ({
      ease: 'linear',
      duration: duration || 900,
    }),
  },
  exit: {
    opacity: 0,
    transition: ({ duration }) => ({
      ease: 'linear',
      duration: duration || 900,
    }),
  },
})

const Fade = styled(PosedDiv)`
  opacity: 0;

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

export default props => (
  <PoseGroup animateOnMount={true}>
    <Fade {...props} key='bitch' />
  </PoseGroup>
)
