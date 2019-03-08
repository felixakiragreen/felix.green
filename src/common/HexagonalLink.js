import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
// import { t } from '.'

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
  }
`

export default ({ ...props }) => <StyledLink {...props} />
