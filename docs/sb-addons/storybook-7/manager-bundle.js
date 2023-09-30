try {
  var Qe = __STORYBOOKAPI__,
    {
      ActiveTabs: Xe,
      Consumer: Ve,
      ManagerContext: et,
      Provider: tt,
      addons: G,
      combineParameters: rt,
      controlOrMetaKey: at,
      controlOrMetaSymbol: ot,
      eventMatchesShortcut: nt,
      eventToShortcut: it,
      isMacLike: st,
      isShortcutTaken: dt,
      keyToSymbol: lt,
      merge: pt,
      mockChannel: ft,
      optionOrAltSymbol: ut,
      shortcutMatchesShortcut: ct,
      shortcutToHumanString: bt,
      types: mt,
      useAddonState: gt,
      useArgTypes: ht,
      useArgs: yt,
      useChannel: vt,
      useGlobalTypes: xt,
      useGlobals: wt,
      useParameter: kt,
      useSharedState: Ft,
      useStoryPrepared: St,
      useStorybookApi: Ct,
      useStorybookState: It
    } = __STORYBOOKAPI__
  var L = (() => {
    let e
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    )
  })()
  var zt = __STORYBOOKCLIENTLOGGER__,
    { deprecate: At, logger: Y, once: Mt, pretty: Dt } = __STORYBOOKCLIENTLOGGER__
  function v() {
    return (
      (v = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
            }
            return e
          }),
      v.apply(this, arguments)
    )
  }
  function ae(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return e
  }
  function x(e, t) {
    return (
      (x = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (r, a) {
            return (r.__proto__ = a), r
          }),
      x(e, t)
    )
  }
  function oe(e, t) {
    ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), x(e, t)
  }
  function M(e) {
    return (
      (M = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }),
      M(e)
    )
  }
  function ne(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  }
  function ie() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
    if (typeof Proxy == 'function') return !0
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
    } catch {
      return !1
    }
  }
  function S(e, t, r) {
    return (
      ie()
        ? (S = Reflect.construct.bind())
        : (S = function (a, o, n) {
            var i = [null]
            i.push.apply(i, o)
            var d = Function.bind.apply(a, i),
              l = new d()
            return n && x(l, n.prototype), l
          }),
      S.apply(null, arguments)
    )
  }
  function D(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (D = function (r) {
        if (r === null || !ne(r)) return r
        if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function')
        if (typeof t < 'u') {
          if (t.has(r)) return t.get(r)
          t.set(r, a)
        }
        function a() {
          return S(r, arguments, M(this).constructor)
        }
        return (
          (a.prototype = Object.create(r.prototype, {
            constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
          })),
          x(a, r)
        )
      }),
      D(e)
    )
  }
  var se = {
    1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
    2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
    3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
    4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
    5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
    6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
    7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
    8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
    9: `Please provide a number of steps to the modularScale helper.

`,
    10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
    11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
    12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
    13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
    14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
    15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
    16: `You must provide a template to this method.

`,
    17: `You passed an unsupported selector state to this method.

`,
    18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
    19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
    20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
    21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
    22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
    23: `fontFace expects a name of a font-family.

`,
    24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
    25: `fontFace expects localFonts to be an array.

`,
    26: `fontFace expects fileFormats to be an array.

`,
    27: `radialGradient requries at least 2 color-stops to properly render.

`,
    28: `Please supply a filename to retinaImage() as the first argument.

`,
    29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
    30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
    31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
    32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
    33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
    34: `borderRadius expects a radius value as a string or number as the second argument.

`,
    35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
    36: `Property must be a string value.

`,
    37: `Syntax Error at %s.

`,
    38: `Formula contains a function that needs parentheses at %s.

`,
    39: `Formula is missing closing parenthesis at %s.

`,
    40: `Formula has too many closing parentheses at %s.

`,
    41: `All values in a formula must have the same unit or be unitless.

`,
    42: `Please provide a number of steps to the modularScale helper.

`,
    43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
    44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
    45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
    46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
    47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
    48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
    49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
    50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
    51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
    52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
    53: `fontFace expects localFonts to be an array.

`,
    54: `fontFace expects fileFormats to be an array.

`,
    55: `fontFace expects a name of a font-family.

`,
    56: `linearGradient requries at least 2 color-stops to properly render.

`,
    57: `radialGradient requries at least 2 color-stops to properly render.

`,
    58: `Please supply a filename to retinaImage() as the first argument.

`,
    59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
    60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
    61: `Property must be a string value.

`,
    62: `borderRadius expects a radius value as a string or number as the second argument.

`,
    63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
    64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
    65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
    66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
    67: `You must provide a template to this method.

`,
    68: `You passed an unsupported selector state to this method.

`,
    69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
    70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
    71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
    72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
    73: `Please provide a valid CSS variable.

`,
    74: `CSS variable not found and no default was provided.

`,
    75: `important requires a valid style object, got a %s instead.

`,
    76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
    77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
    78: `base must be set in "px" or "%" but you set it in "%s".
`
  }
  function de() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
    var a = t[0],
      o = [],
      n
    for (n = 1; n < t.length; n += 1) o.push(t[n])
    return (
      o.forEach(function (i) {
        a = a.replace(/%[a-z]/, i)
      }),
      a
    )
  }
  var f = (function (e) {
    oe(t, e)
    function t(r) {
      for (var a, o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i]
      return (a = e.call(this, de.apply(void 0, [se[r]].concat(n))) || this), ae(a)
    }
    return t
  })(D(Error))
  function j(e) {
    return Math.round(e * 255)
  }
  function le(e, t, r) {
    return j(e) + ',' + j(t) + ',' + j(r)
  }
  function w(e, t, r, a) {
    if ((a === void 0 && (a = le), t === 0)) return a(r, r, r)
    var o = (((e % 360) + 360) % 360) / 60,
      n = (1 - Math.abs(2 * r - 1)) * t,
      i = n * (1 - Math.abs((o % 2) - 1)),
      d = 0,
      l = 0,
      p = 0
    o >= 0 && o < 1
      ? ((d = n), (l = i))
      : o >= 1 && o < 2
      ? ((d = i), (l = n))
      : o >= 2 && o < 3
      ? ((l = n), (p = i))
      : o >= 3 && o < 4
      ? ((l = i), (p = n))
      : o >= 4 && o < 5
      ? ((d = i), (p = n))
      : o >= 5 && o < 6 && ((d = n), (p = i))
    var h = r - n / 2,
      y = d + h,
      u = l + h,
      R = p + h
    return a(y, u, R)
  }
  var U = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32'
  }
  function pe(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return U[t] ? '#' + U[t] : e
  }
  var fe = /^#[a-fA-F0-9]{6}$/,
    ue = /^#[a-fA-F0-9]{8}$/,
    ce = /^#[a-fA-F0-9]{3}$/,
    be = /^#[a-fA-F0-9]{4}$/,
    _ = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    me = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    ge = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    he =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function O(e) {
    if (typeof e != 'string') throw new f(3)
    var t = pe(e)
    if (t.match(fe))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16)
      }
    if (t.match(ue)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r
      }
    }
    if (t.match(ce))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16)
      }
    if (t.match(be)) {
      var a = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: a
      }
    }
    var o = _.exec(t)
    if (o) return { red: parseInt('' + o[1], 10), green: parseInt('' + o[2], 10), blue: parseInt('' + o[3], 10) }
    var n = me.exec(t.substring(0, 50))
    if (n)
      return {
        red: parseInt('' + n[1], 10),
        green: parseInt('' + n[2], 10),
        blue: parseInt('' + n[3], 10),
        alpha: parseFloat('' + n[4]) > 1 ? parseFloat('' + n[4]) / 100 : parseFloat('' + n[4])
      }
    var i = ge.exec(t)
    if (i) {
      var d = parseInt('' + i[1], 10),
        l = parseInt('' + i[2], 10) / 100,
        p = parseInt('' + i[3], 10) / 100,
        h = 'rgb(' + w(d, l, p) + ')',
        y = _.exec(h)
      if (!y) throw new f(4, t, h)
      return { red: parseInt('' + y[1], 10), green: parseInt('' + y[2], 10), blue: parseInt('' + y[3], 10) }
    }
    var u = he.exec(t.substring(0, 50))
    if (u) {
      var R = parseInt('' + u[1], 10),
        te = parseInt('' + u[2], 10) / 100,
        re = parseInt('' + u[3], 10) / 100,
        q = 'rgb(' + w(R, te, re) + ')',
        F = _.exec(q)
      if (!F) throw new f(4, t, q)
      return {
        red: parseInt('' + F[1], 10),
        green: parseInt('' + F[2], 10),
        blue: parseInt('' + F[3], 10),
        alpha: parseFloat('' + u[4]) > 1 ? parseFloat('' + u[4]) / 100 : parseFloat('' + u[4])
      }
    }
    throw new f(5)
  }
  function ye(e) {
    var t = e.red / 255,
      r = e.green / 255,
      a = e.blue / 255,
      o = Math.max(t, r, a),
      n = Math.min(t, r, a),
      i = (o + n) / 2
    if (o === n)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i }
    var d,
      l = o - n,
      p = i > 0.5 ? l / (2 - o - n) : l / (o + n)
    switch (o) {
      case t:
        d = (r - a) / l + (r < a ? 6 : 0)
        break
      case r:
        d = (a - t) / l + 2
        break
      default:
        d = (t - r) / l + 4
        break
    }
    return (
      (d *= 60),
      e.alpha !== void 0
        ? { hue: d, saturation: p, lightness: i, alpha: e.alpha }
        : { hue: d, saturation: p, lightness: i }
    )
  }
  function J(e) {
    return ye(O(e))
  }
  var ve = function (e) {
      return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? '#' + e[1] + e[3] + e[5] : e
    },
    H = ve
  function g(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function E(e) {
    return g(Math.round(e * 255))
  }
  function xe(e, t, r) {
    return H('#' + E(e) + E(t) + E(r))
  }
  function I(e, t, r) {
    return w(e, t, r, xe)
  }
  function we(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return I(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0) return I(e.hue, e.saturation, e.lightness)
    throw new f(1)
  }
  function ke(e, t, r, a) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof a == 'number')
      return a >= 1 ? I(e, t, r) : 'rgba(' + w(e, t, r) + ',' + a + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && a === void 0)
      return e.alpha >= 1
        ? I(e.hue, e.saturation, e.lightness)
        : 'rgba(' + w(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new f(2)
  }
  function N(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return H('#' + g(e) + g(t) + g(r))
    if (typeof e == 'object' && t === void 0 && r === void 0) return H('#' + g(e.red) + g(e.green) + g(e.blue))
    throw new f(6)
  }
  function k(e, t, r, a) {
    if (typeof e == 'string' && typeof t == 'number') {
      var o = O(e)
      return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
    } else {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof a == 'number')
        return a >= 1 ? N(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + a + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && a === void 0)
        return e.alpha >= 1
          ? N(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new f(7)
  }
  var Fe = function (e) {
      return (
        typeof e.red == 'number' &&
        typeof e.green == 'number' &&
        typeof e.blue == 'number' &&
        (typeof e.alpha != 'number' || typeof e.alpha > 'u')
      )
    },
    Se = function (e) {
      return (
        typeof e.red == 'number' &&
        typeof e.green == 'number' &&
        typeof e.blue == 'number' &&
        typeof e.alpha == 'number'
      )
    },
    Ce = function (e) {
      return (
        typeof e.hue == 'number' &&
        typeof e.saturation == 'number' &&
        typeof e.lightness == 'number' &&
        (typeof e.alpha != 'number' || typeof e.alpha > 'u')
      )
    },
    Ie = function (e) {
      return (
        typeof e.hue == 'number' &&
        typeof e.saturation == 'number' &&
        typeof e.lightness == 'number' &&
        typeof e.alpha == 'number'
      )
    }
  function Z(e) {
    if (typeof e != 'object') throw new f(8)
    if (Se(e)) return k(e)
    if (Fe(e)) return N(e)
    if (Ie(e)) return ke(e)
    if (Ce(e)) return we(e)
    throw new f(8)
  }
  function Q(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments))
      return a.length >= t ? e.apply(this, a) : Q(e, t, a)
    }
  }
  function T(e) {
    return Q(e, e.length, [])
  }
  function B(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function Pe(e, t) {
    if (t === 'transparent') return t
    var r = J(t)
    return Z(v({}, r, { lightness: B(0, 1, r.lightness - parseFloat(e)) }))
  }
  var Oe = T(Pe),
    Te = Oe
  function Be(e, t) {
    if (t === 'transparent') return t
    var r = J(t)
    return Z(v({}, r, { lightness: B(0, 1, r.lightness + parseFloat(e)) }))
  }
  var Re = T(Be),
    je = Re
  function _e(e, t) {
    if (t === 'transparent') return t
    var r = O(t),
      a = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, { alpha: B(0, 1, (a * 100 + parseFloat(e) * 100) / 100) })
    return k(o)
  }
  var Yt = T(_e)
  function Ee(e, t) {
    if (t === 'transparent') return t
    var r = O(t),
      a = typeof r.alpha == 'number' ? r.alpha : 1,
      o = v({}, r, { alpha: B(0, 1, +(a * 100 - parseFloat(e) * 100).toFixed(2) / 100) })
    return k(o)
  }
  var ze = T(Ee),
    Ae = ze,
    s = {
      primary: '#FF4785',
      secondary: '#029CFD',
      tertiary: '#FAFBFC',
      ancillary: '#22a699',
      orange: '#FC521F',
      gold: '#FFAE00',
      green: '#66BF3C',
      seafoam: '#37D5D3',
      purple: '#6F2CAC',
      ultraviolet: '#2A0481',
      lightest: '#FFFFFF',
      lighter: '#F7FAFC',
      light: '#EEF3F6',
      mediumlight: '#ECF4F9',
      medium: '#D9E8F2',
      mediumdark: '#73828C',
      dark: '#5C6870',
      darker: '#454E54',
      darkest: '#2E3438',
      border: 'hsla(203, 50%, 30%, 0.15)',
      positive: '#66BF3C',
      negative: '#FF4400',
      warning: '#E69D00',
      critical: '#FFFFFF',
      defaultText: '#2E3438',
      inverseText: '#FFFFFF',
      positiveText: '#448028',
      negativeText: '#D43900',
      warningText: '#A15C20'
    },
    K = {
      app: '#F6F9FC',
      bar: s.lightest,
      content: s.lightest,
      gridCellSize: 10,
      hoverable: Ae(0.93, s.secondary),
      positive: '#E1FFD4',
      negative: '#FEDED2',
      warning: '#FFF5CF',
      critical: '#FF4400'
    },
    P = {
      fonts: {
        base: [
          '"Nunito Sans"',
          '-apple-system',
          '".SFNSText-Regular"',
          '"San Francisco"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(', '),
        mono: [
          'ui-monospace',
          'Menlo',
          'Monaco',
          '"Roboto Mono"',
          '"Oxygen Mono"',
          '"Ubuntu Monospace"',
          '"Source Code Pro"',
          '"Droid Sans Mono"',
          '"Courier New"',
          'monospace'
        ].join(', ')
      },
      weight: { regular: 400, bold: 700 },
      size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 }
    },
    Me = {
      base: 'light',
      colorPrimary: '#FF4785',
      colorSecondary: '#029CFD',
      appBg: K.app,
      appContentBg: s.lightest,
      appBorderColor: s.border,
      appBorderRadius: 4,
      fontBase: P.fonts.base,
      fontCode: P.fonts.mono,
      textColor: s.darkest,
      textInverseColor: s.lightest,
      textMutedColor: s.mediumdark,
      barTextColor: s.mediumdark,
      barSelectedColor: s.secondary,
      barBg: s.lightest,
      buttonBg: K.app,
      buttonBorder: s.medium,
      booleanBg: s.mediumlight,
      booleanSelectedBg: s.lightest,
      inputBg: s.lightest,
      inputBorder: s.border,
      inputTextColor: s.darkest,
      inputBorderRadius: 4
    },
    W = Me,
    De = {
      base: 'dark',
      colorPrimary: '#FF4785',
      colorSecondary: '#029CFD',
      appBg: '#222425',
      appContentBg: '#1B1C1D',
      appBorderColor: 'rgba(255,255,255,.1)',
      appBorderRadius: 4,
      fontBase: P.fonts.base,
      fontCode: P.fonts.mono,
      textColor: '#C9CDCF',
      textInverseColor: '#222425',
      textMutedColor: '#798186',
      barTextColor: '#798186',
      barSelectedColor: s.secondary,
      barBg: '#292C2E',
      buttonBg: '#222425',
      buttonBorder: 'rgba(255,255,255,.1)',
      booleanBg: '#222425',
      booleanSelectedBg: '#2E3438',
      inputBg: '#1B1C1D',
      inputBorder: 'rgba(255,255,255,.1)',
      inputTextColor: s.lightest,
      inputBorderRadius: 4
    },
    He = De,
    { window: z } = L
  var Ne = e =>
      typeof e != 'string'
        ? (Y.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`), !1)
        : !0,
    $e = e => !/(gradient|var|calc)/.test(e),
    qe = (e, t) => (e === 'darken' ? k(`${Te(1, t)}`, 0.95) : e === 'lighten' ? k(`${je(1, t)}`, 0.95) : t),
    X = e => t => {
      if (!Ne(t) || !$e(t)) return t
      try {
        return qe(e, t)
      } catch {
        return t
      }
    },
    Ut = X('lighten'),
    Kt = X('darken'),
    Ge = () =>
      !z || !z.matchMedia ? 'light' : z.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    C = { light: W, dark: He, normal: W },
    A = Ge(),
    $ = (e = { base: A }, t) => {
      let r = { ...C[A], ...(C[e.base] || {}), ...e, base: C[e.base] ? e.base : A }
      return { ...t, ...r, barSelectedColor: e.barSelectedColor || r.colorSecondary }
    }
  var V = {
    name: '@savosya/savosya-myuikit-root',
    version: '1.0.1',
    description: 'Root',
    license: 'ISC',
    main: 'index.js',
    module: 'build/esm/index.js',
    peerDependencies: { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
    publishConfig: { access: 'public', directory: 'build' },
    scripts: { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
    dependencies: {
      '@savosya/savosya-myuikit-accordion': '^1.0.1',
      '@savosya/savosya-myuikit-attach': '^1.0.1',
      '@savosya/savosya-myuikit-badge': '^1.0.1',
      '@savosya/savosya-myuikit-breadcrumbs': '^1.0.1',
      '@savosya/savosya-myuikit-button': '^1.0.1',
      '@savosya/savosya-myuikit-checkbox': '^1.0.1',
      '@savosya/savosya-myuikit-counter': '^1.0.1',
      '@savosya/savosya-myuikit-divider': '^1.0.1',
      '@savosya/savosya-myuikit-drawer': '^1.0.1',
      '@savosya/savosya-myuikit-dropdown': '^1.0.1',
      '@savosya/savosya-myuikit-dropzone': '^1.0.1',
      '@savosya/savosya-myuikit-indicator': '^1.0.1',
      '@savosya/savosya-myuikit-input': '^1.0.1',
      '@savosya/savosya-myuikit-loader': '^1.0.1',
      '@savosya/savosya-myuikit-modal': '^1.0.1',
      '@savosya/savosya-myuikit-radio': '^1.0.1',
      '@savosya/savosya-myuikit-radio-group': '^1.0.1',
      '@savosya/savosya-myuikit-select': '^1.0.1',
      '@savosya/savosya-myuikit-tag': '^1.0.1',
      '@savosya/savosya-myuikit-textarea': '^1.0.1',
      '@savosya/savosya-myuikit-tooltip': '^1.0.1',
      '@savosya/savosya-myuikit-typography': '^1.0.1'
    },
    gitHead: '222a3beed764b6bab4a9c8985ba06773d856cf8d'
  }
  var ee = $({
    base: 'light',
    colorPrimary: '#29313A',
    colorSecondary: '#1D3F88',
    appContentBg: '#fff',
    appBorderColor: 'rgba(11, 31, 53, 0.1)',
    fontBase: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif',
    textColor: '#29313A',
    barTextColor: '#6D7986',
    barSelectedColor: '#1D3F88',
    inputBg: '#fff',
    inputBorder: '#DBDEE1',
    inputTextColor: '#29313A',
    brandTitle: `eub-kit@${V.version}`,
    brandImage: './images/eub-logo-full.svg'
  })
  G.setConfig({
    theme: ee,
    isFullscreen: !1,
    showNav: !0,
    showPanel: !0,
    panelPosition: 'bottom',
    enableShortcuts: !0,
    showToolbar: !0,
    selectedPanel: void 0,
    initialActive: 'sidebar',
    sidebar: { showRoots: !0, collapsedRoots: ['other'] },
    toolbar: {
      title: { hidden: !1 },
      zoom: { hidden: !1 },
      eject: { hidden: !0 },
      copy: { hidden: !0 },
      fullscreen: { hidden: !1 }
    }
  })
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
