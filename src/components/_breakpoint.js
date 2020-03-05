export const getBreakpoint = inputWidth => {
  let w = parseInputForNumber(inputWidth)

  return returnBreakpointNumber(w)
}

const parseInputForNumber = input => {
  if (isNaN(input)) {
    const regexGetNumber = /^(\d+)/.exec(input)

    if (!regexGetNumber) {
      return 0
    } else if (isNaN(+regexGetNumber[0])) {
      return 0
    } else {
      return +regexGetNumber[0]
    }
  } else {
    return input
  }
}

const returnBreakpointAbbr = width => {
  if (width < 640) {
    return 'xs'
  } else if (width < 768) {
    return 'sm'
  } else if (width < 1024) {
    return 'md'
  } else if (width < 1280) {
    return 'lg'
  } else {
    return 'xl'
  }
}

const returnBreakpointNumber = width => {
  if (width < 640) {
    return width
  } else if (width < 768) {
    return 640
  } else if (width < 1024) {
    return 768
  } else if (width < 1280) {
    return 1024
  } else {
    return 1280
  }
}
