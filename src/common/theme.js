// spacing
const space = [
  0,
  4,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  640,
  768,
]

const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72]

const regular = 400
const bold = 700

const fontWeights = {
  regular,
  bold,
}

const lineHeights = {
  standard: 1.6,
  condensed: 1.35,
}

const letterSpacings = {
  hero: '0.025em',
  normal: 'normal',
  caps: '0.025em',
  button: '0.1em',
}

const themedColors = {
  grey0: '#f8f9f9',
  grey1: '#ecedee',
  grey2: '#dee0e2',
  grey3: '#d0d3d6',
  grey4: '#c0c4c8',
  grey5: '#aeb3b8',
  grey6: '#9aa0a6',
  grey7: '#828991',
  grey8: '#636d76',
  grey9: '#384048',
}

export const colors = {
  ...themedColors,
  transparent: '#ffffff00',
  white: '#fff',
  black: '#000',
  text: themedColors.grey9,
  body: themedColors.grey7,
}

// boxShadow
const shadows = {
  grounded: ['0 1px 3px rgba(0, 0, 0, .12)', '0 1px 2px rgba(0, 0, 0, .24)'],
  raised: ['0 3px 6px rgba(0, 0, 0, .15)', '0 2px 4px rgba(0, 0, 0, .12)'],
  hovering: ['0 10px 20px rgba(0, 0, 0, .15)', '0 3px 6px rgba(0, 0, 0, .10)'],
  flying: ['0 15px 25px rgba(0, 0, 0, .15)', '0 5px 10px rgba(0, 0, 0, .05)'],
  soaring: ['0 20px 40px rgba(0, 0, 0, .20)'],
}

const maxContainerWidth = '1024px'

// animation duration
const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`,
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`,
}

const theme = {
  space,
  // fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  shadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays,
}

export default theme
