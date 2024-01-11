import { onDestroy } from 'svelte'

export const calculateTimeLeft = date => {
  const difference = +date - +new Date()
  let timeLeft = {
    done: false,
  }

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / 1000 / 60) % 60),
      s: Math.floor((difference / 1000) % 60),
      done: false,
    }
  } else {
    timeLeft = {
      done: true,
    }
  }

  return timeLeft
}

export const onInterval = (callback, milliseconds) => {
  const interval = setInterval(callback, milliseconds)

  onDestroy(() => {
    clearInterval(interval)
  })
}
