import React from 'react'

// import { Router } from '@reach/router'
/* <Router /> */

import { Layout } from 'components'
import { Container, Paragraph, Text, HexagonalLink, Fade } from 'common'

import Crest from './images/crest.svg'

const S = 1000
const delays = {
  a: S * 1.5,
  b: S * 2.4,
  c: S * 3.2,
  d: S * 3.9,
  e: S * 4.5,
}

export default props => (
  <Layout>
    <Container
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      mx={[5, 6, 8]}
    >
      <Container maxWidth={[360, 480, 600]}>
        <Fade
          delay={delays.a}
          duration={S * 4}
          maxWidth={[80, 160, 200]}
          mx='auto'
          my={[3, 4, 5]}
        >
          <Crest />
        </Fade>
        <Paragraph
          textAlign='center'
          fontWeight='bold'
          fontSize={[5, 7, 8]}
          my={[4, 5, 6]}
        >
          <Fade delay={100} duration={500}>
            <Text>What do you live for?</Text>
          </Fade>
          <Fade delay={delays.a}>
            <Text>
              I live for the <HexagonalLink to='#future'>future</HexagonalLink>.
            </Text>
          </Fade>
        </Paragraph>
        <Paragraph color='body'>
          <Fade delay={delays.b}>
            <Text>
              A future that is <HexagonalLink to='#open'>open</HexagonalLink>,{' '}
              <HexagonalLink to='#sustainable'>sustainable</HexagonalLink>, and{' '}
              <HexagonalLink to='#egalitarian'>egalitarian</HexagonalLink>.
            </Text>
          </Fade>
        </Paragraph>
        <Fade delay={delays.c}>
          <Paragraph color='body'>
            <Text>
              I'm a child of the{' '}
              <HexagonalLink to='#world'>world</HexagonalLink> and a{' '}
              <HexagonalLink to='#xenophile'>xenophile</HexagonalLink>.
            </Text>
          </Paragraph>
        </Fade>
        <Fade delay={delays.d}>
          <Paragraph color='body'>
            <Text>
              I love creating and building{' '}
              <HexagonalLink to='#things'>things</HexagonalLink> but I'm still
              learning how to <HexagonalLink to='#finish'>finish</HexagonalLink>{' '}
              them.
            </Text>
          </Paragraph>
        </Fade>
        <Fade delay={delays.e}>
          <Paragraph color='body'>
            <Text>
              I'm on a <HexagonalLink to='#team'>team</HexagonalLink> working to
              remove single use plastics from the Indianapolis waste stream.
            </Text>
          </Paragraph>
        </Fade>
      </Container>
    </Container>
  </Layout>
)
