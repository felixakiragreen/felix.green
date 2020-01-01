import React, { useState, useEffect } from 'react'

import { Text } from 'common'

const calculateTimeLeft = () => {
  const difference = +new Date('2020-03-09') - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
    }
  } else {
    timeLeft = {
      done: true,
    }
  }

  return timeLeft
}

export default () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return timeLeft && timeLeft.done ? (
    <Text>today</Text>
  ) : (
    <Text fontSize={[6, 8, 9]}>
      <Text inline>{timeLeft.d}</Text>
      <Text color='grey5' inline>
        {`d `}
      </Text>
      <Text inline>{timeLeft.h}</Text>
      <Text color='grey5' inline>
        {`h `}
      </Text>
      <Text inline>{timeLeft.m}</Text>
      <Text color='grey5' inline>
        {`m `}
      </Text>
      <Text inline>{timeLeft.s}</Text>
      <Text color='grey5' inline>
        {`s`}
      </Text>
    </Text>
  )
}
