export const get = (obj, ...paths) => {
  const value = paths.reduce((a, path) => {
    if (is(a)) return a
    const keys = typeof path === 'string' ? path.split('.') : [path]
    return keys.reduce((a, key) => (a && is(a[key]) ? a[key] : null), obj)
  }, null)
  return is(value) ? value : paths[paths.length - 1]
}

export const themeGet = (path, fallback = null) => props =>
  isArray(get(props.theme, path, fallback))

export const is = n => n !== undefined && n !== null

export const isArray = n => {
  return is(n) && Array.isArray(n) ? n.join(', ') : n
}
