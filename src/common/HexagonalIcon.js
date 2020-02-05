import React from 'react'
import SimpleIcons from 'simple-icons'

import Container from './Container'

const WIDTH = 48
const OFFSET = 12

export default ({ social = {}, ...props }) => {
  const { type, url, username } = social

  let icon

  if (type) {
    icon = SimpleIcons.get(type)
  }

  if (!social || !icon) {
    icon = {
      hex: 'fff',
      path: '',
    }
  }

  return (
    <a href={url}>
      <Container width={`${WIDTH}px`}>
        <SvgHex fill={`#${icon.hex}`}>
          <g transform={`translate(${OFFSET},${OFFSET}) scale(0.5)`}>
            {icon && icon.path && <path d={icon.path} fill='white' />}
          </g>
        </SvgHex>
      </Container>
    </a>
  )
}

const SvgHex = ({ fill = '#ebebeb', children, ...props }) => (
  <svg
    viewBox={`0 0 36 36`}
    fillRule='evenodd'
    clipRule='evenodd'
    strokeLinejoin='round'
    strokeMiterlimit={2}
    {...props}
  >
    <path fill='none' d='M0 0H36V36H0z' />
    <path d='M18 0l15.588 9v18L18 36 2.412 27V9L18 0z' fill={fill} />
    {children}
  </svg>
)
