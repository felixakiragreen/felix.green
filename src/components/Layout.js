import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import Head from './Head'
import theme from '../common/theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  * {
    font-family: "Barlow", system-ui, sans;
  }
`

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Head />
        {children}
      </>
    </ThemeProvider>
  )
}
