import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Link } from '@reach/router'

import { Container, Text, HexagonalIcon } from 'common'

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            type
            url
            username
          }
        }
      }
    }
  `)

  const socials = {}

  if (
    data &&
    data.site &&
    data.site.siteMetadata &&
    data.site.siteMetadata.socials
  ) {
    data.site.siteMetadata.socials.map(
      social => (socials[social.type] = social)
    )
  }

  return (
    <Container
      my={[7, 8, 9]}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Container
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <HexagonalIcon key={'tw'} social={socials['twitter']} />
        <HexagonalIcon key={'in'} social={socials['instagram']} />
      </Container>
      <Container
        my={'-10px'}
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <HexagonalIcon key={'tl'} social={socials['telegram']} />
        <HexagonalIcon key={'tt'} social={socials['tiktok']} />
        <HexagonalIcon key={'rd'} social={socials['reddit']} />
      </Container>
      <Container
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
      >
        <HexagonalIcon key={'fb'} social={socials['facebook']} />
        <HexagonalIcon key={'yt'} social={socials['youtube']} />
      </Container>
    </Container>
  )
}
