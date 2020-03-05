// 60° degress
var α = Math.PI / 3
var hexPropsFromInside = function hexPropsFromInside(_ref) {
  var height = _ref.height,
    width = _ref.width,
    _ref$offsetX = _ref.offsetX,
    offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
    _ref$offsetY = _ref.offsetY,
    offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
    aTip = _ref.aTip,
    bBodyTip = _ref.bBodyTip
  var w,
    h,
    insideWidthFromHeight,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip
  insideWidthFromHeight = height * Math.sin(α)

  if (width < insideWidthFromHeight) {
    w = width
    h = w / Math.sin(α)
  } else {
    h = height
    w = h * Math.sin(α)
  }

  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }

  if (!b) {
    b = a + s
  }

  return {
    x: x,
    y: y,
    w: w,
    h: h,
    s: s,
    m: m,
    a: a,
    b: b,
  }
}
var hexPropsFromWidth = function hexPropsFromWidth(_ref2) {
  var width = _ref2.width,
    _ref2$offsetX = _ref2.offsetX,
    offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX,
    _ref2$offsetY = _ref2.offsetY,
    offsetY = _ref2$offsetY === void 0 ? 0 : _ref2$offsetY,
    aTip = _ref2.aTip,
    bBodyTip = _ref2.bBodyTip
  var w = width,
    h,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip
  h = w / Math.sin(α)
  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }

  if (!b) {
    b = a + s
  }

  return {
    x: x,
    y: y,
    w: w,
    h: h,
    s: s,
    m: m,
    a: a,
    b: b,
  }
}
var hexPropsFromHeight = function hexPropsFromHeight(_ref3) {
  var height = _ref3.height,
    _ref3$offsetX = _ref3.offsetX,
    offsetX = _ref3$offsetX === void 0 ? 0 : _ref3$offsetX,
    _ref3$offsetY = _ref3.offsetY,
    offsetY = _ref3$offsetY === void 0 ? 0 : _ref3$offsetY,
    aTip = _ref3.aTip,
    bBodyTip = _ref3.bBodyTip
  var w,
    h = height,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip
  w = h * Math.sin(α)
  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }

  if (!b) {
    b = a + s
  }

  return {
    x: x,
    y: y,
    w: w,
    h: h,
    s: s,
    m: m,
    a: a,
    b: b,
  }
}
var createPath_hexFull = function createPath_hexFull(_ref4) {
  var x = _ref4.x,
    y = _ref4.y,
    m = _ref4.m,
    a = _ref4.a,
    b = _ref4.b
  return (
    '\n  M ' +
    (x + m) +
    ' ' +
    y +
    '\n  L ' +
    (x + m * 2) +
    ' ' +
    (y + a) +
    '\n  L ' +
    (x + m * 2) +
    ' ' +
    (y + b) +
    '\n  L ' +
    (x + m) +
    ' ' +
    (y + a + b) +
    '\n  L ' +
    x +
    ' ' +
    (y + b) +
    '\n  L ' +
    x +
    ' ' +
    (y + a) +
    '\n  Z\n'
  )
}
var createPath_hexATip = function createPath_hexATip(_ref5) {
  var x = _ref5.x,
    y = _ref5.y,
    m = _ref5.m,
    a = _ref5.a
  return (
    '\n  M ' +
    x +
    ' ' +
    (y + a) +
    '\n  L ' +
    (x + m) +
    ' ' +
    y +
    '\n  L ' +
    (x + m * 2) +
    ' ' +
    (y + a) +
    '\n  Z\n'
  )
}
var createPath_hexBTip = function createPath_hexBTip(_ref6) {
  var x = _ref6.x,
    y = _ref6.y,
    m = _ref6.m,
    a = _ref6.a
  return (
    '\n  M ' +
    x +
    ' ' +
    y +
    '\n  L ' +
    (x + m * 2) +
    ' ' +
    y +
    '\n  L ' +
    (x + m) +
    ' ' +
    (y + a) +
    '\n  Z\n'
  )
}

export {
  createPath_hexATip,
  createPath_hexBTip,
  createPath_hexFull,
  hexPropsFromHeight,
  hexPropsFromInside,
  hexPropsFromWidth,
}
