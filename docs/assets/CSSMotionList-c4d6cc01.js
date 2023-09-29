import { r as u, a as Gt } from './index-1cdf6ce0.js'
import { R as zt, r as Yt } from './index-a01a9712.js'
import { a as qt, b as Me, c as Zt, d as ze, _ as Xt } from './assertThisInitialized-bd9b18e4.js'
import { c as Jt } from './index-3ffce462.js'
function Pe(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function en(e) {
  if (Array.isArray(e)) return Pe(e)
}
function tn(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function dt(e, t) {
  if (e) {
    if (typeof e == 'string') return Pe(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set')) return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pe(e, t)
  }
}
function nn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function rn(e) {
  return en(e) || tn(e) || dt(e) || nn()
}
function W(e) {
  '@babel/helpers - typeof'
  return (
    (W =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    W(e)
  )
}
function an(e, t) {
  if (W(e) !== 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (W(r) !== 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function mt(e) {
  var t = an(e, 'string')
  return W(t) === 'symbol' ? t : String(t)
}
function O(e, t, n) {
  return (
    (t = mt(t)),
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
    e
  )
}
function Ye(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ye(Object(n), !0).forEach(function (r) {
          O(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ye(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function on(e) {
  if (Array.isArray(e)) return e
}
function un(e, t) {
  var n = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r,
      a,
      o,
      i,
      l = [],
      s = !0,
      c = !1
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return
        s = !1
      } else for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
    } catch (v) {
      ;(c = !0), (a = v)
    } finally {
      try {
        if (!s && n.return != null && ((i = n.return()), Object(i) !== i)) return
      } finally {
        if (c) throw a
      }
    }
    return l
  }
}
function cn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function N(e, t) {
  return on(e) || un(e, t) || dt(e, t) || cn()
}
function fn(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    a,
    o
  for (o = 0; o < r.length; o++) (a = r[o]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
  return n
}
function qe(e, t) {
  if (e == null) return {}
  var n = fn(e, t),
    r,
    a
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (a = 0; a < o.length; a++)
      (r = o[a]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function V() {
  return !!(typeof window < 'u' && window.document && window.document.createElement)
}
var Ze = V() ? u.useLayoutEffect : u.useEffect,
  fe = function (t, n) {
    var r = u.useRef(!0)
    Ze(function () {
      return t(r.current)
    }, n),
      Ze(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  fr = function (t, n) {
    fe(function (r) {
      if (!r) return t()
    }, n)
  }
function ce(e) {
  var t = u.useRef(!1),
    n = u.useState(e),
    r = N(n, 2),
    a = r[0],
    o = r[1]
  u.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0
      }
    )
  }, [])
  function i(l, s) {
    ;(s && t.current) || o(l)
  }
  return [a, i]
}
var Ce = {},
  sn = function (t) {}
function ln(e, t) {}
function vn(e, t) {}
function dn() {
  Ce = {}
}
function pt(e, t, n) {
  !t && !Ce[n] && (e(!1, n), (Ce[n] = !0))
}
function Fe(e, t) {
  pt(ln, e, t)
}
function mn(e, t) {
  pt(vn, e, t)
}
Fe.preMessage = sn
Fe.resetWarned = dn
Fe.noteOnce = mn
var f = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (t) {
      var n = t.keyCode
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= f.F1 && n <= f.F12)) return !1
      switch (n) {
        case f.ALT:
        case f.CAPS_LOCK:
        case f.CONTEXT_MENU:
        case f.CTRL:
        case f.DOWN:
        case f.END:
        case f.ESC:
        case f.HOME:
        case f.INSERT:
        case f.LEFT:
        case f.MAC_FF_META:
        case f.META:
        case f.NUMLOCK:
        case f.NUM_CENTER:
        case f.PAGE_DOWN:
        case f.PAGE_UP:
        case f.PAUSE:
        case f.PRINT_SCREEN:
        case f.RIGHT:
        case f.SHIFT:
        case f.UP:
        case f.WIN_KEY:
        case f.WIN_KEY_RIGHT:
          return !1
        default:
          return !0
      }
    },
    isCharacterKey: function (t) {
      if (
        (t >= f.ZERO && t <= f.NINE) ||
        (t >= f.NUM_ZERO && t <= f.NUM_MULTIPLY) ||
        (t >= f.A && t <= f.Z) ||
        (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
      )
        return !0
      switch (t) {
        case f.SPACE:
        case f.QUESTION_MARK:
        case f.NUM_PLUS:
        case f.NUM_MINUS:
        case f.NUM_PERIOD:
        case f.NUM_DIVISION:
        case f.SEMICOLON:
        case f.DASH:
        case f.EQUALS:
        case f.COMMA:
        case f.PERIOD:
        case f.SLASH:
        case f.APOSTROPHE:
        case f.SINGLE_QUOTE:
        case f.OPEN_SQUARE_BRACKET:
        case f.BACKSLASH:
        case f.CLOSE_SQUARE_BRACKET:
          return !0
        default:
          return !1
      }
    }
  },
  Et = { exports: {} },
  E = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b = typeof Symbol == 'function' && Symbol.for,
  je = b ? Symbol.for('react.element') : 60103,
  ke = b ? Symbol.for('react.portal') : 60106,
  se = b ? Symbol.for('react.fragment') : 60107,
  le = b ? Symbol.for('react.strict_mode') : 60108,
  ve = b ? Symbol.for('react.profiler') : 60114,
  de = b ? Symbol.for('react.provider') : 60109,
  me = b ? Symbol.for('react.context') : 60110,
  Ke = b ? Symbol.for('react.async_mode') : 60111,
  pe = b ? Symbol.for('react.concurrent_mode') : 60111,
  Ee = b ? Symbol.for('react.forward_ref') : 60112,
  ye = b ? Symbol.for('react.suspense') : 60113,
  pn = b ? Symbol.for('react.suspense_list') : 60120,
  Se = b ? Symbol.for('react.memo') : 60115,
  he = b ? Symbol.for('react.lazy') : 60116,
  En = b ? Symbol.for('react.block') : 60121,
  yn = b ? Symbol.for('react.fundamental') : 60117,
  Sn = b ? Symbol.for('react.responder') : 60118,
  hn = b ? Symbol.for('react.scope') : 60119
function I(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case je:
        switch (((e = e.type), e)) {
          case Ke:
          case pe:
          case se:
          case ve:
          case le:
          case ye:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case me:
              case Ee:
              case he:
              case Se:
              case de:
                return e
              default:
                return t
            }
        }
      case ke:
        return t
    }
  }
}
function yt(e) {
  return I(e) === pe
}
E.AsyncMode = Ke
E.ConcurrentMode = pe
E.ContextConsumer = me
E.ContextProvider = de
E.Element = je
E.ForwardRef = Ee
E.Fragment = se
E.Lazy = he
E.Memo = Se
E.Portal = ke
E.Profiler = ve
E.StrictMode = le
E.Suspense = ye
E.isAsyncMode = function (e) {
  return yt(e) || I(e) === Ke
}
E.isConcurrentMode = yt
E.isContextConsumer = function (e) {
  return I(e) === me
}
E.isContextProvider = function (e) {
  return I(e) === de
}
E.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === je
}
E.isForwardRef = function (e) {
  return I(e) === Ee
}
E.isFragment = function (e) {
  return I(e) === se
}
E.isLazy = function (e) {
  return I(e) === he
}
E.isMemo = function (e) {
  return I(e) === Se
}
E.isPortal = function (e) {
  return I(e) === ke
}
E.isProfiler = function (e) {
  return I(e) === ve
}
E.isStrictMode = function (e) {
  return I(e) === le
}
E.isSuspense = function (e) {
  return I(e) === ye
}
E.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === se ||
    e === pe ||
    e === ve ||
    e === le ||
    e === ye ||
    e === pn ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === he ||
        e.$$typeof === Se ||
        e.$$typeof === de ||
        e.$$typeof === me ||
        e.$$typeof === Ee ||
        e.$$typeof === yn ||
        e.$$typeof === Sn ||
        e.$$typeof === hn ||
        e.$$typeof === En))
  )
}
E.typeOf = I
Et.exports = E
var gn = Et.exports
function bn(e, t, n) {
  var r = u.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) && ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
function St(e, t) {
  typeof e == 'function' ? e(t) : W(e) === 'object' && e && 'current' in e && (e.current = t)
}
function An() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  var r = t.filter(function (a) {
    return a
  })
  return r.length <= 1
    ? r[0]
    : function (a) {
        t.forEach(function (o) {
          St(o, a)
        })
      }
}
function _n() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return bn(
    function () {
      return An.apply(void 0, t)
    },
    t,
    function (r, a) {
      return (
        r.length !== a.length ||
        r.every(function (o, i) {
          return o !== a[i]
        })
      )
    }
  )
}
function ht(e) {
  var t,
    n,
    r = gn.isMemo(e) ? e.type.type : e.type
  return !(
    (typeof r == 'function' && !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == 'function' && !((n = e.prototype) !== null && n !== void 0 && n.render))
  )
}
function Rn(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function Tn(e) {
  return Rn(e) ? e : e instanceof Gt.Component ? zt.findDOMNode(e) : null
}
function gt(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
function Xe(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, mt(r.key), r)
  }
}
function bt(e, t, n) {
  return t && Xe(e.prototype, t), n && Xe(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
}
function At(e, t) {
  if (typeof t != 'function' && t !== null) throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && qt(e, t)
}
function On(e, t) {
  if (t && (W(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
  return Me(e)
}
function _t(e) {
  var t = Zt()
  return function () {
    var r = ze(e),
      a
    if (t) {
      var o = ze(this).constructor
      a = Reflect.construct(r, arguments, o)
    } else a = r.apply(this, arguments)
    return On(this, a)
  }
}
var Rt = function (t) {
    return +setTimeout(t, 16)
  },
  Tt = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((Rt = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (Tt = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var Je = 0,
  $e = new Map()
function Ot(e) {
  $e.delete(e)
}
var we = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  Je += 1
  var r = Je
  function a(o) {
    if (o === 0) Ot(r), t()
    else {
      var i = Rt(function () {
        a(o - 1)
      })
      $e.set(r, i)
    }
  }
  return a(n), r
}
we.cancel = function (e) {
  var t = $e.get(e)
  return Ot(t), Tt(t)
}
var Nt = u.createContext(null),
  et = []
function Nn(e, t) {
  var n = u.useState(function () {
      if (!V()) return null
      var p = document.createElement('div')
      return p
    }),
    r = N(n, 1),
    a = r[0],
    o = u.useRef(!1),
    i = u.useContext(Nt),
    l = u.useState(et),
    s = N(l, 2),
    c = s[0],
    v = s[1],
    d =
      i ||
      (o.current
        ? void 0
        : function (p) {
            v(function (h) {
              var M = [p].concat(rn(h))
              return M
            })
          })
  function m() {
    a.parentElement || document.body.appendChild(a), (o.current = !0)
  }
  function y() {
    var p
    ;(p = a.parentElement) === null || p === void 0 || p.removeChild(a), (o.current = !1)
  }
  return (
    fe(
      function () {
        return e ? (i ? i(m) : m()) : y(), y
      },
      [e]
    ),
    fe(
      function () {
        c.length &&
          (c.forEach(function (p) {
            return p()
          }),
          v(et))
      },
      [c]
    ),
    [a, d]
  )
}
function Mn(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var tt = 'data-rc-order',
  nt = 'data-rc-priority',
  Pn = 'rc-util-key',
  Le = new Map()
function Mt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Pn
}
function ge(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function Cn(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function Pt(e) {
  return Array.from((Le.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function Ct(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!V()) return null
  var n = t.csp,
    r = t.prepend,
    a = t.priority,
    o = a === void 0 ? 0 : a,
    i = Cn(r),
    l = i === 'prependQueue',
    s = document.createElement('style')
  s.setAttribute(tt, i),
    l && o && s.setAttribute(nt, ''.concat(o)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e)
  var c = ge(t),
    v = c.firstChild
  if (r) {
    if (l) {
      var d = Pt(c).filter(function (m) {
        if (!['prepend', 'prependQueue'].includes(m.getAttribute(tt))) return !1
        var y = Number(m.getAttribute(nt) || 0)
        return o >= y
      })
      if (d.length) return c.insertBefore(s, d[d.length - 1].nextSibling), s
    }
    c.insertBefore(s, v)
  } else c.appendChild(s)
  return s
}
function wt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = ge(t)
  return Pt(n).find(function (r) {
    return r.getAttribute(Mt(t)) === e
  })
}
function rt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = wt(e, t)
  if (n) {
    var r = ge(t)
    r.removeChild(n)
  }
}
function wn(e, t) {
  var n = Le.get(e)
  if (!n || !Mn(document, n)) {
    var r = Ct('', t),
      a = r.parentNode
    Le.set(e, a), e.removeChild(r)
  }
}
function Ln(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = ge(n)
  wn(r, n)
  var a = wt(t, n)
  if (a) {
    var o, i
    if (
      (o = n.csp) !== null &&
      o !== void 0 &&
      o.nonce &&
      a.nonce !== ((i = n.csp) === null || i === void 0 ? void 0 : i.nonce)
    ) {
      var l
      a.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce
    }
    return a.innerHTML !== e && (a.innerHTML = e), a
  }
  var s = Ct(e, n)
  return s.setAttribute(Mt(n), t), s
}
var Oe
function In(e) {
  if (typeof document > 'u') return 0
  if (e || Oe === void 0) {
    var t = document.createElement('div')
    ;(t.style.width = '100%'), (t.style.height = '200px')
    var n = document.createElement('div'),
      r = n.style
    ;(r.position = 'absolute'),
      (r.top = '0'),
      (r.left = '0'),
      (r.pointerEvents = 'none'),
      (r.visibility = 'hidden'),
      (r.width = '200px'),
      (r.height = '150px'),
      (r.overflow = 'hidden'),
      n.appendChild(t),
      document.body.appendChild(n)
    var a = t.offsetWidth
    n.style.overflow = 'scroll'
    var o = t.offsetWidth
    a === o && (o = n.clientWidth), document.body.removeChild(n), (Oe = a - o)
  }
  return Oe
}
function at(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1])
  return Number.isNaN(n) ? In() : n
}
function Un(e) {
  if (typeof document > 'u' || !e || !(e instanceof Element)) return { width: 0, height: 0 }
  var t = getComputedStyle(e, '::-webkit-scrollbar'),
    n = t.width,
    r = t.height
  return { width: at(n), height: at(r) }
}
function Dn() {
  return (
    document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  )
}
var xn = 'rc-util-locker-'.concat(Date.now()),
  ot = 0
function Fn(e) {
  var t = !!e,
    n = u.useState(function () {
      return (ot += 1), ''.concat(xn, '_').concat(ot)
    }),
    r = N(n, 1),
    a = r[0]
  fe(
    function () {
      if (t) {
        var o = Un(document.body).width,
          i = Dn()
        Ln(
          `
html body {
  overflow-y: hidden;
  `.concat(
            i ? 'width: calc(100% - '.concat(o, 'px);') : '',
            `
}`
          ),
          a
        )
      } else rt(a)
      return function () {
        rt(a)
      }
    },
    [t, a]
  )
}
var it = !1
function jn(e) {
  return typeof e == 'boolean' && (it = e), it
}
var ut = function (t) {
    return t === !1
      ? !1
      : !V() || !t
      ? null
      : typeof t == 'string'
      ? document.querySelector(t)
      : typeof t == 'function'
      ? t()
      : t
  },
  sr = u.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      a = e.getContainer
    e.debug
    var o = e.autoDestroy,
      i = o === void 0 ? !0 : o,
      l = e.children,
      s = u.useState(n),
      c = N(s, 2),
      v = c[0],
      d = c[1],
      m = v || n
    u.useEffect(
      function () {
        ;(i || n) && d(n)
      },
      [n, i]
    )
    var y = u.useState(function () {
        return ut(a)
      }),
      p = N(y, 2),
      h = p[0],
      M = p[1]
    u.useEffect(function () {
      var T = ut(a)
      M(T ?? null)
    })
    var R = Nn(m && !h),
      F = N(R, 2),
      j = F[0],
      k = F[1],
      U = h ?? j
    Fn(r && n && V() && (U === j || U === document.body))
    var P = null
    if (l && ht(l) && t) {
      var C = l
      P = C.ref
    }
    var D = _n(P, t)
    if (!m || !V() || h === void 0) return null
    var X = U === !1 || jn(),
      K = l
    return (
      t && (K = u.cloneElement(l, { ref: D })),
      u.createElement(Nt.Provider, { value: k }, X ? K : Yt.createPortal(K, U))
    )
  }),
  kn = u.createContext({}),
  Kn = (function (e) {
    At(n, e)
    var t = _t(n)
    function n() {
      return gt(this, n), t.apply(this, arguments)
    }
    return (
      bt(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children
          }
        }
      ]),
      n
    )
  })(u.Component),
  z = 'none',
  ae = 'appear',
  oe = 'enter',
  ie = 'leave',
  ct = 'none',
  x = 'prepare',
  q = 'start',
  Z = 'active',
  He = 'end',
  Lt = 'prepared'
function ft(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  )
}
function $n(e, t) {
  var n = { animationend: ft('Animation', 'AnimationEnd'), transitionend: ft('Transition', 'TransitionEnd') }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var Hn = $n(V(), typeof window < 'u' ? window : {}),
  It = {}
if (V()) {
  var Wn = document.createElement('div')
  It = Wn.style
}
var ue = {}
function Ut(e) {
  if (ue[e]) return ue[e]
  var t = Hn[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in It) return (ue[e] = t[o]), ue[e]
    }
  return ''
}
var Dt = Ut('animationend'),
  xt = Ut('transitionend'),
  Ft = !!(Dt && xt),
  st = Dt || 'animationend',
  lt = xt || 'transitionend'
function vt(e, t) {
  if (!e) return null
  if (W(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const Vn = function (e) {
  var t = u.useRef(),
    n = u.useRef(e)
  n.current = e
  var r = u.useCallback(function (i) {
    n.current(i)
  }, [])
  function a(i) {
    i && (i.removeEventListener(lt, r), i.removeEventListener(st, r))
  }
  function o(i) {
    t.current && t.current !== i && a(t.current),
      i && i !== t.current && (i.addEventListener(lt, r), i.addEventListener(st, r), (t.current = i))
  }
  return (
    u.useEffect(function () {
      return function () {
        a(t.current)
      }
    }, []),
    [o, a]
  )
}
var jt = V() ? u.useLayoutEffect : u.useEffect
const Qn = function () {
  var e = u.useRef(null)
  function t() {
    we.cancel(e.current)
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
    t()
    var o = we(function () {
      a <= 1
        ? r({
            isCanceled: function () {
              return o !== e.current
            }
          })
        : n(r, a - 1)
    })
    e.current = o
  }
  return (
    u.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var Bn = [x, q, Z, He],
  Gn = [x, Lt],
  kt = !1,
  zn = !0
function Kt(e) {
  return e === Z || e === He
}
const Yn = function (e, t, n) {
  var r = ce(ct),
    a = N(r, 2),
    o = a[0],
    i = a[1],
    l = Qn(),
    s = N(l, 2),
    c = s[0],
    v = s[1]
  function d() {
    i(x, !0)
  }
  var m = t ? Gn : Bn
  return (
    jt(
      function () {
        if (o !== ct && o !== He) {
          var y = m.indexOf(o),
            p = m[y + 1],
            h = n(o)
          h === kt
            ? i(p, !0)
            : p &&
              c(function (M) {
                function R() {
                  M.isCanceled() || i(p, !0)
                }
                h === !0 ? R() : Promise.resolve(h).then(R)
              })
        }
      },
      [e, o]
    ),
    u.useEffect(function () {
      return function () {
        v()
      }
    }, []),
    [d, o]
  )
}
function qn(e, t, n, r) {
  var a = r.motionEnter,
    o = a === void 0 ? !0 : a,
    i = r.motionAppear,
    l = i === void 0 ? !0 : i,
    s = r.motionLeave,
    c = s === void 0 ? !0 : s,
    v = r.motionDeadline,
    d = r.motionLeaveImmediately,
    m = r.onAppearPrepare,
    y = r.onEnterPrepare,
    p = r.onLeavePrepare,
    h = r.onAppearStart,
    M = r.onEnterStart,
    R = r.onLeaveStart,
    F = r.onAppearActive,
    j = r.onEnterActive,
    k = r.onLeaveActive,
    U = r.onAppearEnd,
    P = r.onEnterEnd,
    C = r.onLeaveEnd,
    D = r.onVisibleChanged,
    X = ce(),
    K = N(X, 2),
    T = K[0],
    Q = K[1],
    w = ce(z),
    B = N(w, 2),
    g = B[0],
    $ = B[1],
    te = ce(null),
    ne = N(te, 2),
    be = ne[0],
    Y = ne[1],
    Ae = u.useRef(!1),
    _e = u.useRef(null)
  function re() {
    return n()
  }
  var We = u.useRef(!1)
  function Ve() {
    $(z, !0), Y(null, !0)
  }
  function Qe(L) {
    var A = re()
    if (!(L && !L.deadline && L.target !== A)) {
      var _ = We.current,
        H
      g === ae && _
        ? (H = U == null ? void 0 : U(A, L))
        : g === oe && _
        ? (H = P == null ? void 0 : P(A, L))
        : g === ie && _ && (H = C == null ? void 0 : C(A, L)),
        g !== z && _ && H !== !1 && Ve()
    }
  }
  var $t = Vn(Qe),
    Ht = N($t, 1),
    Wt = Ht[0],
    Be = function (A) {
      var _, H, ee
      switch (A) {
        case ae:
          return (_ = {}), O(_, x, m), O(_, q, h), O(_, Z, F), _
        case oe:
          return (H = {}), O(H, x, y), O(H, q, M), O(H, Z, j), H
        case ie:
          return (ee = {}), O(ee, x, p), O(ee, q, R), O(ee, Z, k), ee
        default:
          return {}
      }
    },
    J = u.useMemo(
      function () {
        return Be(g)
      },
      [g]
    ),
    Vt = Yn(g, !e, function (L) {
      if (L === x) {
        var A = J[x]
        return A ? A(re()) : kt
      }
      if (G in J) {
        var _
        Y(((_ = J[G]) === null || _ === void 0 ? void 0 : _.call(J, re(), null)) || null)
      }
      return (
        G === Z &&
          (Wt(re()),
          v > 0 &&
            (clearTimeout(_e.current),
            (_e.current = setTimeout(function () {
              Qe({ deadline: !0 })
            }, v)))),
        G === Lt && Ve(),
        zn
      )
    }),
    Ge = N(Vt, 2),
    Qt = Ge[0],
    G = Ge[1],
    Bt = Kt(G)
  ;(We.current = Bt),
    jt(
      function () {
        Q(t)
        var L = Ae.current
        Ae.current = !0
        var A
        !L && t && l && (A = ae), L && t && o && (A = oe), ((L && !t && c) || (!L && d && !t && c)) && (A = ie)
        var _ = Be(A)
        A && (e || _[x]) ? ($(A), Qt()) : $(z)
      },
      [t]
    ),
    u.useEffect(
      function () {
        ;((g === ae && !l) || (g === oe && !o) || (g === ie && !c)) && $(z)
      },
      [l, o, c]
    ),
    u.useEffect(function () {
      return function () {
        ;(Ae.current = !1), clearTimeout(_e.current)
      }
    }, [])
  var Re = u.useRef(!1)
  u.useEffect(
    function () {
      T && (Re.current = !0), T !== void 0 && g === z && ((Re.current || T) && (D == null || D(T)), (Re.current = !0))
    },
    [T, g]
  )
  var Te = be
  return J[x] && G === q && (Te = S({ transition: 'none' }, Te)), [g, G, Te, T ?? t]
}
function Zn(e) {
  var t = e
  W(e) === 'object' && (t = e.transitionSupport)
  function n(a, o) {
    return !!(a.motionName && t && o !== !1)
  }
  var r = u.forwardRef(function (a, o) {
    var i = a.visible,
      l = i === void 0 ? !0 : i,
      s = a.removeOnLeave,
      c = s === void 0 ? !0 : s,
      v = a.forceRender,
      d = a.children,
      m = a.motionName,
      y = a.leavedClassName,
      p = a.eventProps,
      h = u.useContext(kn),
      M = h.motion,
      R = n(a, M),
      F = u.useRef(),
      j = u.useRef()
    function k() {
      try {
        return F.current instanceof HTMLElement ? F.current : Tn(j.current)
      } catch {
        return null
      }
    }
    var U = qn(R, l, k, a),
      P = N(U, 4),
      C = P[0],
      D = P[1],
      X = P[2],
      K = P[3],
      T = u.useRef(K)
    K && (T.current = !0)
    var Q = u.useCallback(
        function (Y) {
          ;(F.current = Y), St(o, Y)
        },
        [o]
      ),
      w,
      B = S(S({}, p), {}, { visible: l })
    if (!d) w = null
    else if (C === z)
      K
        ? (w = d(S({}, B), Q))
        : !c && T.current && y
        ? (w = d(S(S({}, B), {}, { className: y }), Q))
        : v || (!c && !y)
        ? (w = d(S(S({}, B), {}, { style: { display: 'none' } }), Q))
        : (w = null)
    else {
      var g, $
      D === x ? ($ = 'prepare') : Kt(D) ? ($ = 'active') : D === q && ($ = 'start')
      var te = vt(m, ''.concat(C, '-').concat($))
      w = d(
        S(
          S({}, B),
          {},
          { className: Jt(vt(m, C), ((g = {}), O(g, te, te && $), O(g, m, typeof m == 'string'), g)), style: X }
        ),
        Q
      )
    }
    if (u.isValidElement(w) && ht(w)) {
      var ne = w,
        be = ne.ref
      be || (w = u.cloneElement(w, { ref: Q }))
    }
    return u.createElement(Kn, { ref: j }, w)
  })
  return (r.displayName = 'CSSMotion'), r
}
const Xn = Zn(Ft)
var Ie = 'add',
  Ue = 'keep',
  De = 'remove',
  Ne = 'removed'
function Jn(e) {
  var t
  return e && W(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), S(S({}, t), {}, { key: String(t.key) })
}
function xe() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(Jn)
}
function er() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    a = t.length,
    o = xe(e),
    i = xe(t)
  o.forEach(function (c) {
    for (var v = !1, d = r; d < a; d += 1) {
      var m = i[d]
      if (m.key === c.key) {
        r < d &&
          ((n = n.concat(
            i.slice(r, d).map(function (y) {
              return S(S({}, y), {}, { status: Ie })
            })
          )),
          (r = d)),
          n.push(S(S({}, m), {}, { status: Ue })),
          (r += 1),
          (v = !0)
        break
      }
    }
    v || n.push(S(S({}, c), {}, { status: De }))
  }),
    r < a &&
      (n = n.concat(
        i.slice(r).map(function (c) {
          return S(S({}, c), {}, { status: Ie })
        })
      ))
  var l = {}
  n.forEach(function (c) {
    var v = c.key
    l[v] = (l[v] || 0) + 1
  })
  var s = Object.keys(l).filter(function (c) {
    return l[c] > 1
  })
  return (
    s.forEach(function (c) {
      ;(n = n.filter(function (v) {
        var d = v.key,
          m = v.status
        return d !== c || m !== De
      })),
        n.forEach(function (v) {
          v.key === c && (v.status = Ue)
        })
    }),
    n
  )
}
var tr = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  nr = ['status'],
  rr = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd'
  ]
function ar(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xn,
    n = (function (r) {
      At(o, r)
      var a = _t(o)
      function o() {
        var i
        gt(this, o)
        for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++) s[c] = arguments[c]
        return (
          (i = a.call.apply(a, [this].concat(s))),
          O(Me(i), 'state', { keyEntities: [] }),
          O(Me(i), 'removeKey', function (v) {
            var d = i.state.keyEntities,
              m = d.map(function (y) {
                return y.key !== v ? y : S(S({}, y), {}, { status: Ne })
              })
            return (
              i.setState({ keyEntities: m }),
              m.filter(function (y) {
                var p = y.status
                return p !== Ne
              }).length
            )
          }),
          i
        )
      }
      return (
        bt(
          o,
          [
            {
              key: 'render',
              value: function () {
                var l = this,
                  s = this.state.keyEntities,
                  c = this.props,
                  v = c.component,
                  d = c.children,
                  m = c.onVisibleChanged,
                  y = c.onAllRemoved,
                  p = qe(c, tr),
                  h = v || u.Fragment,
                  M = {}
                return (
                  rr.forEach(function (R) {
                    ;(M[R] = p[R]), delete p[R]
                  }),
                  delete p.keys,
                  u.createElement(
                    h,
                    p,
                    s.map(function (R, F) {
                      var j = R.status,
                        k = qe(R, nr),
                        U = j === Ie || j === Ue
                      return u.createElement(
                        t,
                        Xt({}, M, {
                          key: k.key,
                          visible: U,
                          eventProps: k,
                          onVisibleChanged: function (C) {
                            if ((m == null || m(C, { key: k.key }), !C)) {
                              var D = l.removeKey(k.key)
                              D === 0 && y && y()
                            }
                          }
                        }),
                        function (P, C) {
                          return d(S(S({}, P), {}, { index: F }), C)
                        }
                      )
                    })
                  )
                )
              }
            }
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (l, s) {
                var c = l.keys,
                  v = s.keyEntities,
                  d = xe(c),
                  m = er(v, d)
                return {
                  keyEntities: m.filter(function (y) {
                    var p = v.find(function (h) {
                      var M = h.key
                      return y.key === M
                    })
                    return !(p && p.status === Ne && y.status === De)
                  })
                }
              }
            }
          ]
        ),
        o
      )
    })(u.Component)
  return O(n, 'defaultProps', { component: 'div' }), n
}
ar(Ft)
export {
  cn as A,
  V as B,
  Xn as C,
  bn as D,
  f as K,
  sr as P,
  S as _,
  N as a,
  qe as b,
  An as c,
  O as d,
  Mn as e,
  Fe as f,
  fe as g,
  At as h,
  _t as i,
  gt as j,
  bt as k,
  Tn as l,
  Rn as m,
  rn as n,
  St as o,
  ce as p,
  fr as q,
  gn as r,
  ht as s,
  W as t,
  _n as u,
  ln as v,
  we as w,
  on as x,
  tn as y,
  dt as z
}
//# sourceMappingURL=CSSMotionList-c4d6cc01.js.map
