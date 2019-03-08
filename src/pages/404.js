import React from 'react'
import { Layout } from 'components'
import { Container, Paragraph, Text, Fade } from 'common'

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
        <Fade>
          <Paragraph
            textAlign='center'
            fontWeight='bold'
            fontSize={[5, 7, 8]}
            my={[4, 5, 6]}
          >
            <Text>404</Text>
          </Paragraph>
        </Fade>
      </Container>
    </Container>
  </Layout>
)
