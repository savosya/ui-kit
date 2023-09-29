import { _ as ut } from './iframe-aa443103.js'
import {
  _ as Fi,
  a as $a,
  b as Di,
  d as It,
  t as Nt,
  e as Nc,
  f as ca,
  g as Zc,
  h as Y,
  l as Wo,
  m as Pc,
  i as pr
} from './chunk-6P7RB4HF-36fee097.js'
import { r as C, R as Go, g as ln, a, c as Bn } from './index-1cdf6ce0.js'
import { R as Vc, r as qc } from './index-a01a9712.js'
import { a as Ia, c as zc, d as Uc, b as Wc, _ as sn } from './assertThisInitialized-bd9b18e4.js'
import {
  q as Li,
  r as Gc,
  s as Mi,
  t as Yc,
  i as un,
  v as Kc,
  w as Jc,
  x as Xc,
  c as Bi,
  y as $i,
  z as Qc,
  A as Ii,
  B as e0,
  C as t0,
  D as r0,
  E as n0,
  F as a0,
  G as o0,
  H as ji,
  I as l0,
  J as i0,
  K as Hi,
  _ as s0,
  L as u0,
  M as c0,
  N as ja,
  d as Ni,
  O as Zi,
  P as Pi,
  Q as d0,
  R as p0,
  U as f0,
  e as m0,
  S as Yo,
  k as $n,
  V as da
} from './index-c8f542d6.js'
import { d as xe } from './index-356e4a49.js'
var Ne = e => `control-${e.replace(/\s+/g, '-')}`,
  cn = e => `set-${e.replace(/\s+/g, '-')}`,
  g0 = function (t) {
    return t()
  },
  Vi = Go['useInsertionEffect'] ? Go['useInsertionEffect'] : !1,
  Ha = Vi || g0,
  Ko = Vi || C.useLayoutEffect
function Br(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  )
}
var qi = { exports: {} }
;(function (e, t) {
  ;(function (r) {
    e.exports = r()
  })(function () {
    return (function r(n, o, l) {
      function i(c, d) {
        if (!o[c]) {
          if (!n[c]) {
            var g = typeof Br == 'function' && Br
            if (!d && g) return g(c, !0)
            if (u) return u(c, !0)
            var h = new Error("Cannot find module '" + c + "'")
            throw ((h.code = 'MODULE_NOT_FOUND'), h)
          }
          var p = (o[c] = { exports: {} })
          n[c][0].call(
            p.exports,
            function (m) {
              var f = n[c][1][m]
              return i(f || m)
            },
            p,
            p.exports,
            r,
            n,
            o,
            l
          )
        }
        return o[c].exports
      }
      for (var u = typeof Br == 'function' && Br, s = 0; s < l.length; s++) i(l[s])
      return i
    })(
      {
        1: [
          function (r, n, o) {
            n.exports = function (l) {
              if (typeof Map != 'function' || l) {
                var i = r('./similar')
                return new i()
              } else return new Map()
            }
          },
          { './similar': 2 }
        ],
        2: [
          function (r, n, o) {
            function l() {
              return (this.list = []), (this.lastItem = void 0), (this.size = 0), this
            }
            ;(l.prototype.get = function (i) {
              var u
              if (this.lastItem && this.isEqual(this.lastItem.key, i)) return this.lastItem.val
              if (((u = this.indexOf(i)), u >= 0)) return (this.lastItem = this.list[u]), this.list[u].val
            }),
              (l.prototype.set = function (i, u) {
                var s
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? ((this.lastItem.val = u), this)
                  : ((s = this.indexOf(i)),
                    s >= 0
                      ? ((this.lastItem = this.list[s]), (this.list[s].val = u), this)
                      : ((this.lastItem = { key: i, val: u }), this.list.push(this.lastItem), this.size++, this))
              }),
              (l.prototype.delete = function (i) {
                var u
                if (
                  (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0),
                  (u = this.indexOf(i)),
                  u >= 0)
                )
                  return this.size--, this.list.splice(u, 1)[0]
              }),
              (l.prototype.has = function (i) {
                var u
                return this.lastItem && this.isEqual(this.lastItem.key, i)
                  ? !0
                  : ((u = this.indexOf(i)), u >= 0 ? ((this.lastItem = this.list[u]), !0) : !1)
              }),
              (l.prototype.forEach = function (i, u) {
                var s
                for (s = 0; s < this.size; s++) i.call(u || this, this.list[s].val, this.list[s].key, this)
              }),
              (l.prototype.indexOf = function (i) {
                var u
                for (u = 0; u < this.size; u++) if (this.isEqual(this.list[u].key, i)) return u
                return -1
              }),
              (l.prototype.isEqual = function (i, u) {
                return i === u || (i !== i && u !== u)
              }),
              (n.exports = l)
          },
          {}
        ],
        3: [
          function (r, n, o) {
            var l = r('map-or-similar')
            n.exports = function (c) {
              var d = new l(!1),
                g = []
              return function (h) {
                var p = function () {
                  var m = d,
                    f,
                    E,
                    b = arguments.length - 1,
                    x = Array(b + 1),
                    y = !0,
                    v
                  if ((p.numArgs || p.numArgs === 0) && p.numArgs !== b + 1)
                    throw new Error('Memoizerific functions should always be called with the same number of arguments')
                  for (v = 0; v < b; v++) {
                    if (((x[v] = { cacheItem: m, arg: arguments[v] }), m.has(arguments[v]))) {
                      m = m.get(arguments[v])
                      continue
                    }
                    ;(y = !1), (f = new l(!1)), m.set(arguments[v], f), (m = f)
                  }
                  return (
                    y && (m.has(arguments[b]) ? (E = m.get(arguments[b])) : (y = !1)),
                    y || ((E = h.apply(null, arguments)), m.set(arguments[b], E)),
                    c > 0 &&
                      ((x[b] = { cacheItem: m, arg: arguments[b] }),
                      y ? i(g, x) : g.push(x),
                      g.length > c && u(g.shift())),
                    (p.wasMemoized = y),
                    (p.numArgs = b + 1),
                    E
                  )
                }
                return (p.limit = c), (p.wasMemoized = !1), (p.cache = d), (p.lru = g), p
              }
            }
            function i(c, d) {
              var g = c.length,
                h = d.length,
                p,
                m,
                f
              for (m = 0; m < g; m++) {
                for (p = !0, f = 0; f < h; f++)
                  if (!s(c[m][f].arg, d[f].arg)) {
                    p = !1
                    break
                  }
                if (p) break
              }
              c.push(c.splice(m, 1)[0])
            }
            function u(c) {
              var d = c.length,
                g = c[d - 1],
                h,
                p
              for (
                g.cacheItem.delete(g.arg), p = d - 2;
                p >= 0 && ((g = c[p]), (h = g.cacheItem.get(g.arg)), !h || !h.size);
                p--
              )
                g.cacheItem.delete(g.arg)
            }
            function s(c, d) {
              return c === d || (c !== c && d !== d)
            }
          },
          { 'map-or-similar': 1 }
        ]
      },
      {},
      [3]
    )(3)
  })
})(qi)
var h0 = qi.exports
const Dt = ln(h0),
  { logger: y0 } = __STORYBOOK_MODULE_CLIENT_LOGGER__
var b0 = $a({
    '../../node_modules/react-is/cjs/react-is.development.js'(e) {
      ;(function () {
        var t = typeof Symbol == 'function' && Symbol.for,
          r = t ? Symbol.for('react.element') : 60103,
          n = t ? Symbol.for('react.portal') : 60106,
          o = t ? Symbol.for('react.fragment') : 60107,
          l = t ? Symbol.for('react.strict_mode') : 60108,
          i = t ? Symbol.for('react.profiler') : 60114,
          u = t ? Symbol.for('react.provider') : 60109,
          s = t ? Symbol.for('react.context') : 60110,
          c = t ? Symbol.for('react.async_mode') : 60111,
          d = t ? Symbol.for('react.concurrent_mode') : 60111,
          g = t ? Symbol.for('react.forward_ref') : 60112,
          h = t ? Symbol.for('react.suspense') : 60113,
          p = t ? Symbol.for('react.suspense_list') : 60120,
          m = t ? Symbol.for('react.memo') : 60115,
          f = t ? Symbol.for('react.lazy') : 60116,
          E = t ? Symbol.for('react.block') : 60121,
          b = t ? Symbol.for('react.fundamental') : 60117,
          x = t ? Symbol.for('react.responder') : 60118,
          y = t ? Symbol.for('react.scope') : 60119
        function v(B) {
          return (
            typeof B == 'string' ||
            typeof B == 'function' ||
            B === o ||
            B === d ||
            B === i ||
            B === l ||
            B === h ||
            B === p ||
            (typeof B == 'object' &&
              B !== null &&
              (B.$$typeof === f ||
                B.$$typeof === m ||
                B.$$typeof === u ||
                B.$$typeof === s ||
                B.$$typeof === g ||
                B.$$typeof === b ||
                B.$$typeof === x ||
                B.$$typeof === y ||
                B.$$typeof === E))
          )
        }
        function A(B) {
          if (typeof B == 'object' && B !== null) {
            var Ie = B.$$typeof
            switch (Ie) {
              case r:
                var Pe = B.type
                switch (Pe) {
                  case c:
                  case d:
                  case o:
                  case i:
                  case l:
                  case h:
                    return Pe
                  default:
                    var Et = Pe && Pe.$$typeof
                    switch (Et) {
                      case s:
                      case g:
                      case f:
                      case m:
                      case u:
                        return Et
                      default:
                        return Ie
                    }
                }
              case n:
                return Ie
            }
          }
        }
        var w = c,
          k = d,
          S = s,
          O = u,
          T = r,
          R = g,
          D = o,
          F = f,
          j = m,
          L = n,
          M = i,
          H = l,
          P = h,
          $ = !1
        function N(B) {
          return (
            $ ||
              (($ = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )),
            K(B) || A(B) === c
          )
        }
        function K(B) {
          return A(B) === d
        }
        function re(B) {
          return A(B) === s
        }
        function G(B) {
          return A(B) === u
        }
        function J(B) {
          return typeof B == 'object' && B !== null && B.$$typeof === r
        }
        function I(B) {
          return A(B) === g
        }
        function V(B) {
          return A(B) === o
        }
        function z(B) {
          return A(B) === f
        }
        function ie(B) {
          return A(B) === m
        }
        function he(B) {
          return A(B) === n
        }
        function at(B) {
          return A(B) === i
        }
        function Re(B) {
          return A(B) === l
        }
        function Ze(B) {
          return A(B) === h
        }
        ;(e.AsyncMode = w),
          (e.ConcurrentMode = k),
          (e.ContextConsumer = S),
          (e.ContextProvider = O),
          (e.Element = T),
          (e.ForwardRef = R),
          (e.Fragment = D),
          (e.Lazy = F),
          (e.Memo = j),
          (e.Portal = L),
          (e.Profiler = M),
          (e.StrictMode = H),
          (e.Suspense = P),
          (e.isAsyncMode = N),
          (e.isConcurrentMode = K),
          (e.isContextConsumer = re),
          (e.isContextProvider = G),
          (e.isElement = J),
          (e.isForwardRef = I),
          (e.isFragment = V),
          (e.isLazy = z),
          (e.isMemo = ie),
          (e.isPortal = he),
          (e.isProfiler = at),
          (e.isStrictMode = Re),
          (e.isSuspense = Ze),
          (e.isValidElementType = v),
          (e.typeOf = A)
      })()
    }
  }),
  v0 = $a({
    '../../node_modules/react-is/index.js'(e, t) {
      t.exports = b0()
    }
  }),
  zi = $a({
    '../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(e, t) {
      var r = v0(),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
        i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        u = {}
      ;(u[r.ForwardRef] = l), (u[r.Memo] = i)
      function s(E) {
        return r.isMemo(E) ? i : u[E.$$typeof] || n
      }
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        g = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype
      function f(E, b, x) {
        if (typeof b != 'string') {
          if (m) {
            var y = p(b)
            y && y !== m && f(E, y, x)
          }
          var v = d(b)
          g && (v = v.concat(g(b)))
          for (var A = s(E), w = s(b), k = 0; k < v.length; ++k) {
            var S = v[k]
            if (!o[S] && !(x && x[S]) && !(w && w[S]) && !(A && A[S])) {
              var O = h(b, S)
              try {
                c(E, S, O)
              } catch {}
            }
          }
        }
        return E
      }
      t.exports = f
    }
  })
function Ui(e) {
  var t = Object.create(null)
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r]
  }
}
var E0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Na = Ui(function (e) {
    return E0.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  })
function x0(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function A0(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var w0 = (function () {
    function e(r) {
      var n = this
      ;(this._insertTag = function (o) {
        var l
        n.tags.length === 0
          ? n.insertionPoint
            ? (l = n.insertionPoint.nextSibling)
            : n.prepend
            ? (l = n.container.firstChild)
            : (l = n.before)
          : (l = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, l),
          n.tags.push(o)
      }),
        (this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(A0(this))
        var n = this.tags[this.tags.length - 1],
          o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105
        if (
          (o &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                r +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            ),
          (this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o),
          this.isSpeedy)
        ) {
          var l = x0(n)
          try {
            l.insertRule(r, l.cssRules.length)
          } catch (i) {
            ;/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              r
            ) || console.error('There was a problem inserting the following rule: "' + r + '"', i)
          }
        } else n.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1)
      }),
      e
    )
  })(),
  ge = '-ms-',
  en = '-moz-',
  U = '-webkit-',
  Za = 'comm',
  Pa = 'rule',
  Va = 'decl',
  C0 = '@import',
  Wi = '@keyframes',
  S0 = '@layer',
  k0 = Math.abs,
  dn = String.fromCharCode,
  _0 = Object.assign
function O0(e, t) {
  return ce(e, 0) ^ 45 ? (((((((t << 2) ^ ce(e, 0)) << 2) ^ ce(e, 1)) << 2) ^ ce(e, 2)) << 2) ^ ce(e, 3) : 0
}
function Gi(e) {
  return e.trim()
}
function T0(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function W(e, t, r) {
  return e.replace(t, r)
}
function pa(e, t) {
  return e.indexOf(t)
}
function ce(e, t) {
  return e.charCodeAt(t) | 0
}
function gr(e, t, r) {
  return e.slice(t, r)
}
function Ke(e) {
  return e.length
}
function qa(e) {
  return e.length
}
function $r(e, t) {
  return t.push(e), e
}
function R0(e, t) {
  return e.map(t).join('')
}
var pn = 1,
  qt = 1,
  Yi = 0,
  Ce = 0,
  ae = 0,
  Xt = ''
function fn(e, t, r, n, o, l, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: l, line: pn, column: qt, length: i, return: '' }
}
function ir(e, t) {
  return _0(fn('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function F0() {
  return ae
}
function D0() {
  return (ae = Ce > 0 ? ce(Xt, --Ce) : 0), qt--, ae === 10 && ((qt = 1), pn--), ae
}
function ke() {
  return (ae = Ce < Yi ? ce(Xt, Ce++) : 0), qt++, ae === 10 && ((qt = 1), pn++), ae
}
function tt() {
  return ce(Xt, Ce)
}
function Vr() {
  return Ce
}
function kr(e, t) {
  return gr(Xt, e, t)
}
function hr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Ki(e) {
  return (pn = qt = 1), (Yi = Ke((Xt = e))), (Ce = 0), []
}
function Ji(e) {
  return (Xt = ''), e
}
function qr(e) {
  return Gi(kr(Ce - 1, fa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function L0(e) {
  for (; (ae = tt()) && ae < 33; ) ke()
  return hr(e) > 2 || hr(ae) > 3 ? '' : ' '
}
function M0(e, t) {
  for (; --t && ke() && !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97)); );
  return kr(e, Vr() + (t < 6 && tt() == 32 && ke() == 32))
}
function fa(e) {
  for (; ke(); )
    switch (ae) {
      case e:
        return Ce
      case 34:
      case 39:
        e !== 34 && e !== 39 && fa(ae)
        break
      case 40:
        e === 41 && fa(e)
        break
      case 92:
        ke()
        break
    }
  return Ce
}
function B0(e, t) {
  for (; ke() && e + ae !== 47 + 10 && !(e + ae === 42 + 42 && tt() === 47); );
  return '/*' + kr(t, Ce - 1) + '*' + dn(e === 47 ? e : ke())
}
function $0(e) {
  for (; !hr(tt()); ) ke()
  return kr(e, Ce)
}
function I0(e) {
  return Ji(zr('', null, null, null, [''], (e = Ki(e)), 0, [0], e))
}
function zr(e, t, r, n, o, l, i, u, s) {
  for (
    var c = 0, d = 0, g = i, h = 0, p = 0, m = 0, f = 1, E = 1, b = 1, x = 0, y = '', v = o, A = l, w = n, k = y;
    E;

  )
    switch (((m = x), (x = ke()))) {
      case 40:
        if (m != 108 && ce(k, g - 1) == 58) {
          pa((k += W(qr(x), '&', '&\f')), '&\f') != -1 && (b = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        k += qr(x)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        k += L0(m)
        break
      case 92:
        k += M0(Vr() - 1, 7)
        continue
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            $r(j0(B0(ke(), Vr()), t, r), s)
            break
          default:
            k += '/'
        }
        break
      case 123 * f:
        u[c++] = Ke(k) * b
      case 125 * f:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            E = 0
          case 59 + d:
            b == -1 && (k = W(k, /\f/g, '')),
              p > 0 && Ke(k) - g && $r(p > 32 ? Xo(k + ';', n, r, g - 1) : Xo(W(k, ' ', '') + ';', n, r, g - 2), s)
            break
          case 59:
            k += ';'
          default:
            if (($r((w = Jo(k, t, r, c, d, o, u, y, (v = []), (A = []), g)), l), x === 123))
              if (d === 0) zr(k, t, w, w, v, l, g, u, A)
              else
                switch (h === 99 && ce(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zr(e, w, w, n && $r(Jo(e, w, w, 0, 0, o, u, y, o, (v = []), g), A), o, A, g, u, n ? v : A)
                    break
                  default:
                    zr(k, w, w, w, [''], A, 0, u, A)
                }
        }
        ;(c = d = p = 0), (f = b = 1), (y = k = ''), (g = i)
        break
      case 58:
        ;(g = 1 + Ke(k)), (p = m)
      default:
        if (f < 1) {
          if (x == 123) --f
          else if (x == 125 && f++ == 0 && D0() == 125) continue
        }
        switch (((k += dn(x)), x * f)) {
          case 38:
            b = d > 0 ? 1 : ((k += '\f'), -1)
            break
          case 44:
            ;(u[c++] = (Ke(k) - 1) * b), (b = 1)
            break
          case 64:
            tt() === 45 && (k += qr(ke())), (h = tt()), (d = g = Ke((y = k += $0(Vr())))), x++
            break
          case 45:
            m === 45 && Ke(k) == 2 && (f = 0)
        }
    }
  return l
}
function Jo(e, t, r, n, o, l, i, u, s, c, d) {
  for (var g = o - 1, h = o === 0 ? l : [''], p = qa(h), m = 0, f = 0, E = 0; m < n; ++m)
    for (var b = 0, x = gr(e, g + 1, (g = k0((f = i[m])))), y = e; b < p; ++b)
      (y = Gi(f > 0 ? h[b] + ' ' + x : W(x, /&\f/g, h[b]))) && (s[E++] = y)
  return fn(e, t, r, o === 0 ? Pa : u, s, c, d)
}
function j0(e, t, r) {
  return fn(e, t, r, Za, dn(F0()), gr(e, 2, -2), 0)
}
function Xo(e, t, r, n) {
  return fn(e, t, r, Va, gr(e, 0, n), gr(e, n + 1, -1), n)
}
function Vt(e, t) {
  for (var r = '', n = qa(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || ''
  return r
}
function H0(e, t, r, n) {
  switch (e.type) {
    case S0:
      if (e.children.length) break
    case C0:
    case Va:
      return (e.return = e.return || e.value)
    case Za:
      return ''
    case Wi:
      return (e.return = e.value + '{' + Vt(e.children, n) + '}')
    case Pa:
      e.value = e.props.join(',')
  }
  return Ke((r = Vt(e.children, n))) ? (e.return = e.value + '{' + r + '}') : ''
}
function N0(e) {
  var t = qa(e)
  return function (r, n, o, l) {
    for (var i = '', u = 0; u < t; u++) i += e[u](r, n, o, l) || ''
    return i
  }
}
var Qo = function (e) {
    var t = new WeakMap()
    return function (r) {
      if (t.has(r)) return t.get(r)
      var n = e(r)
      return t.set(r, n), n
    }
  },
  Z0 = function (e, t, r) {
    for (var n = 0, o = 0; (n = o), (o = tt()), n === 38 && o === 12 && (t[r] = 1), !hr(o); ) ke()
    return kr(e, Ce)
  },
  P0 = function (e, t) {
    var r = -1,
      n = 44
    do
      switch (hr(n)) {
        case 0:
          n === 38 && tt() === 12 && (t[r] = 1), (e[r] += Z0(Ce - 1, t, r))
          break
        case 2:
          e[r] += qr(n)
          break
        case 4:
          if (n === 44) {
            ;(e[++r] = tt() === 58 ? '&\f' : ''), (t[r] = e[r].length)
            break
          }
        default:
          e[r] += dn(n)
      }
    while ((n = ke()))
    return e
  },
  V0 = function (e, t) {
    return Ji(P0(Ki(e), t))
  },
  el = new WeakMap(),
  q0 = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== 'rule'; )
        if (((r = r.parent), !r)) return
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !el.get(r)) && !n) {
        el.set(e, !0)
        for (var o = [], l = V0(t, o), i = r.props, u = 0, s = 0; u < l.length; u++)
          for (var c = 0; c < i.length; c++, s++) e.props[s] = o[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + ' ' + l[u]
      }
    }
  },
  z0 = function (e) {
    if (e.type === 'decl') {
      var t = e.value
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && ((e.return = ''), (e.value = ''))
    }
  },
  U0 =
    'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
  W0 = function (e) {
    return e.type === 'comm' && e.children.indexOf(U0) > -1
  },
  G0 = function (e) {
    return function (t, r, n) {
      if (!(t.type !== 'rule' || e.compat)) {
        var o = t.value.match(/(:first|:nth|:nth-last)-child/g)
        if (o) {
          for (var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1; u >= 0; u--) {
            var s = i[u]
            if (s.line < t.line) break
            if (s.column < t.column) {
              if (W0(s)) return
              break
            }
          }
          o.forEach(function (c) {
            console.error(
              'The pseudo class "' +
                c +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                c.split('-child')[0] +
                '-of-type".'
            )
          })
        }
      }
    }
  },
  Xi = function (e) {
    return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64
  },
  Y0 = function (e, t) {
    for (var r = e - 1; r >= 0; r--) if (!Xi(t[r])) return !0
    return !1
  },
  tl = function (e) {
    ;(e.type = ''), (e.value = ''), (e.return = ''), (e.children = ''), (e.props = '')
  },
  K0 = function (e, t, r) {
    Xi(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          tl(e))
        : Y0(t, r) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          tl(e)))
  }
function Qi(e, t) {
  switch (O0(e, t)) {
    case 5103:
      return U + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + en + e + ge + e + e
    case 6828:
    case 4268:
      return U + e + ge + e + e
    case 6165:
      return U + e + ge + 'flex-' + e + e
    case 5187:
      return U + e + W(e, /(\w+).+(:[^]+)/, U + 'box-$1$2' + ge + 'flex-$1$2') + e
    case 5443:
      return U + e + ge + 'flex-item-' + W(e, /flex-|-self/, '') + e
    case 4675:
      return U + e + ge + 'flex-line-pack' + W(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return U + e + ge + W(e, 'shrink', 'negative') + e
    case 5292:
      return U + e + ge + W(e, 'basis', 'preferred-size') + e
    case 6060:
      return U + 'box-' + W(e, '-grow', '') + U + e + ge + W(e, 'grow', 'positive') + e
    case 4554:
      return U + W(e, /([^-])(transform)/g, '$1' + U + '$2') + e
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, U + '$1'), /(image-set)/, U + '$1'), e, '') + e
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, U + '$1$`$1')
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, U + 'box-pack:$3' + ge + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + U + e + e
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, U + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ke(e) - 1 - t > 6)
        switch (ce(e, t + 1)) {
          case 109:
            if (ce(e, t + 4) !== 45) break
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, '$1' + U + '$2-$3$1' + en + (ce(e, t + 3) == 108 ? '$3' : '$2-$3')) + e
          case 115:
            return ~pa(e, 'stretch') ? Qi(W(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (ce(e, t + 1) !== 115) break
    case 6444:
      switch (ce(e, Ke(e) - 3 - (~pa(e, '!important') && 10))) {
        case 107:
          return W(e, ':', ':' + U) + e
        case 101:
          return (
            W(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + U + (ce(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + U + '$2$3$1' + ge + '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (ce(e, t + 11)) {
        case 114:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return U + e + ge + W(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return U + e + ge + e + e
  }
  return e
}
var J0 = function (e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Va:
          e.return = Qi(e.value, e.length)
          break
        case Wi:
          return Vt([ir(e, { value: W(e.value, '@', '@' + U) })], n)
        case Pa:
          if (e.length)
            return R0(e.props, function (o) {
              switch (T0(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Vt([ir(e, { props: [W(o, /:(read-\w+)/, ':' + en + '$1')] })], n)
                case '::placeholder':
                  return Vt(
                    [
                      ir(e, { props: [W(o, /:(plac\w+)/, ':' + U + 'input-$1')] }),
                      ir(e, { props: [W(o, /:(plac\w+)/, ':' + en + '$1')] }),
                      ir(e, { props: [W(o, /:(plac\w+)/, ge + 'input-$1')] })
                    ],
                    n
                  )
              }
              return ''
            })
      }
  },
  X0 = [J0],
  Q0 = function (e) {
    var t = e.key
    if (!t)
      throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`)
    if (t === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (m) {
        var f = m.getAttribute('data-emotion')
        f.indexOf(' ') !== -1 && (document.head.appendChild(m), m.setAttribute('data-s', ''))
      })
    }
    var n = e.stylisPlugins || X0
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed'
      )
    var o = {},
      l,
      i = []
    ;(l = e.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (m) {
        for (var f = m.getAttribute('data-emotion').split(' '), E = 1; E < f.length; E++) o[f[E]] = !0
        i.push(m)
      })
    var u,
      s = [q0, z0]
    s.push(
      G0({
        get compat() {
          return p.compat
        }
      }),
      K0
    )
    {
      var c,
        d = [
          H0,
          function (m) {
            m.root || (m.return ? c.insert(m.return) : m.value && m.type !== Za && c.insert(m.value + '{}'))
          }
        ],
        g = N0(s.concat(n, d)),
        h = function (m) {
          return Vt(I0(m), g)
        }
      u = function (m, f, E, b) {
        ;(c = E),
          f.map !== void 0 &&
            (c = {
              insert: function (x) {
                E.insert(x + f.map)
              }
            }),
          h(m ? m + '{' + f.styles + '}' : f.styles),
          b && (p.inserted[f.name] = !0)
      }
    }
    var p = {
      key: t,
      sheet: new w0({
        key: t,
        container: l,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: u
    }
    return p.sheet.hydrate(i), p
  }
Fi(zi())
var e1 = !0
function za(e, t, r) {
  var n = ''
  return (
    r.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (n += o + ' ')
    }),
    n
  )
}
var mn = function (e, t, r) {
    var n = e.key + '-' + t.name
    ;(r === !1 || e1 === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles)
  },
  gn = function (e, t, r) {
    mn(e, t, r)
    var n = e.key + '-' + t.name
    if (e.inserted[t.name] === void 0) {
      var o = t
      do e.insert(t === o ? '.' + n : '', o, e.sheet, !0), (o = o.next)
      while (o !== void 0)
    }
  }
function t1(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var r1 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  rl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  n1 =
    "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
  a1 = /[A-Z]|^ms/g,
  es = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ua = function (e) {
    return e.charCodeAt(1) === 45
  },
  nl = function (e) {
    return e != null && typeof e != 'boolean'
  },
  In = Ui(function (e) {
    return Ua(e) ? e : e.replace(a1, '-$&').toLowerCase()
  }),
  tn = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(es, function (r, n, o) {
            return (Je = { name: n, styles: o, next: Je }), n
          })
    }
    return r1[e] !== 1 && !Ua(e) && typeof t == 'number' && t !== 0 ? t + 'px' : t
  }
;(al = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
  (ol = ['normal', 'none', 'initial', 'inherit', 'unset']),
  (ll = tn),
  (il = /^-ms-/),
  (sl = /-(.)/g),
  (jn = {}),
  (tn = function (e, t) {
    if (
      e === 'content' &&
      (typeof t != 'string' ||
        (ol.indexOf(t) === -1 &&
          !al.test(t) &&
          (t.charAt(0) !== t.charAt(t.length - 1) || (t.charAt(0) !== '"' && t.charAt(0) !== "'"))))
    )
      throw new Error(
        "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + '"\'`'
      )
    var r = ll(e, t)
    return (
      r !== '' &&
        !Ua(e) &&
        e.indexOf('-') !== -1 &&
        jn[e] === void 0 &&
        ((jn[e] = !0),
        console.error(
          'Using kebab-case for css properties in objects is not supported. Did you mean ' +
            e.replace(il, 'ms-').replace(sl, function (n, o) {
              return o.toUpperCase()
            }) +
            '?'
        )),
      r
    )
  })
var al,
  ol,
  ll,
  il,
  sl,
  jn,
  ts =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.'
function yr(e, t, r) {
  if (r == null) return ''
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === 'NO_COMPONENT_SELECTOR') throw new Error(ts)
    return r
  }
  switch (typeof r) {
    case 'boolean':
      return ''
    case 'object': {
      if (r.anim === 1) return (Je = { name: r.name, styles: r.styles, next: Je }), r.name
      if (r.styles !== void 0) {
        var n = r.next
        if (n !== void 0) for (; n !== void 0; ) (Je = { name: n.name, styles: n.styles, next: Je }), (n = n.next)
        var o = r.styles + ';'
        return r.map !== void 0 && (o += r.map), o
      }
      return o1(e, t, r)
    }
    case 'function': {
      if (e !== void 0) {
        var l = Je,
          i = r(e)
        return (Je = l), yr(e, t, i)
      } else
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        )
      break
    }
    case 'string':
      var u = [],
        s = r.replace(es, function (d, g, h) {
          var p = 'animation' + u.length
          return (
            u.push('const ' + p + ' = keyframes`' + h.replace(/^@keyframes animation-\w+/, '') + '`'), '${' + p + '}'
          )
        })
      u.length &&
        console.error(
          '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
            [].concat(u, ['`' + s + '`']).join(`
`) +
            `

You should wrap it with \`css\` like this:

` +
            ('css`' + s + '`')
        )
      break
  }
  if (t == null) return r
  var c = t[r]
  return c !== void 0 ? c : r
}
function o1(e, t, r) {
  var n = ''
  if (Array.isArray(r)) for (var o = 0; o < r.length; o++) n += yr(e, t, r[o]) + ';'
  else
    for (var l in r) {
      var i = r[l]
      if (typeof i != 'object')
        t != null && t[i] !== void 0 ? (n += l + '{' + t[i] + '}') : nl(i) && (n += In(l) + ':' + tn(l, i) + ';')
      else {
        if (l === 'NO_COMPONENT_SELECTOR') throw new Error(ts)
        if (Array.isArray(i) && typeof i[0] == 'string' && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++) nl(i[u]) && (n += In(l) + ':' + tn(l, i[u]) + ';')
        else {
          var s = yr(e, t, i)
          switch (l) {
            case 'animation':
            case 'animationName': {
              n += In(l) + ':' + s + ';'
              break
            }
            default:
              l === 'undefined' && console.error(n1), (n += l + '{' + s + '}')
          }
        }
      }
    }
  return n
}
var ul = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  rs
rs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g
var Je,
  zt = function (e, t, r) {
    if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0) return e[0]
    var n = !0,
      o = ''
    Je = void 0
    var l = e[0]
    l == null || l.raw === void 0 ? ((n = !1), (o += yr(r, t, l))) : (l[0] === void 0 && console.error(rl), (o += l[0]))
    for (var i = 1; i < e.length; i++) (o += yr(r, t, e[i])), n && (l[i] === void 0 && console.error(rl), (o += l[i]))
    var u
    ;(o = o.replace(rs, function (g) {
      return (u = g), ''
    })),
      (ul.lastIndex = 0)
    for (var s = '', c; (c = ul.exec(o)) !== null; ) s += '-' + c[1]
    var d = t1(o) + s
    return {
      name: d,
      styles: o,
      map: u,
      next: Je,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."
      }
    }
  },
  l1 = {}.hasOwnProperty,
  Wa = C.createContext(typeof HTMLElement < 'u' ? Q0({ key: 'css' }) : null)
Wa.displayName = 'EmotionCacheContext'
Wa.Provider
var hn = function (e) {
    return C.forwardRef(function (t, r) {
      var n = C.useContext(Wa)
      return e(t, n, r)
    })
  },
  bt = C.createContext({})
bt.displayName = 'EmotionThemeContext'
var i1 = function () {
    return C.useContext(bt)
  },
  s1 = function (e, t) {
    if (typeof t == 'function') {
      var r = t(e)
      if (r == null || typeof r != 'object' || Array.isArray(r))
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!')
      return r
    }
    if (t == null || typeof t != 'object' || Array.isArray(t))
      throw new Error('[ThemeProvider] Please make your theme prop a plain object')
    return Di({}, e, t)
  },
  u1 = Qo(function (e) {
    return Qo(function (t) {
      return s1(e, t)
    })
  }),
  ns = function (e) {
    var t = C.useContext(bt)
    return e.theme !== t && (t = u1(t)(e.theme)), C.createElement(bt.Provider, { value: t }, e.children)
  },
  cl = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  dl = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  c1 = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag
    return (
      mn(t, r, n),
      Ha(function () {
        return gn(t, r, n)
      }),
      null
    )
  },
  d1 = hn(function (e, t, r) {
    var n = e.css
    typeof n == 'string' && t.registered[n] !== void 0 && (n = t.registered[n])
    var o = e[cl],
      l = [n],
      i = ''
    typeof e.className == 'string'
      ? (i = za(t.registered, l, e.className))
      : e.className != null && (i = e.className + ' ')
    var u = zt(l, void 0, C.useContext(bt))
    if (u.name.indexOf('-') === -1) {
      var s = e[dl]
      s && (u = zt([u, 'label:' + s + ';']))
    }
    i += t.key + '-' + u.name
    var c = {}
    for (var d in e) l1.call(e, d) && d !== 'css' && d !== cl && d !== dl && (c[d] = e[d])
    return (
      (c.ref = r),
      (c.className = i),
      C.createElement(
        C.Fragment,
        null,
        C.createElement(c1, { cache: t, serialized: u, isStringTag: typeof o == 'string' }),
        C.createElement(o, c)
      )
    )
  })
d1.displayName = 'EmotionCssPropInternal'
Fi(zi())
var p1 = {
    name: '@emotion/react',
    version: '11.11.1',
    main: 'dist/emotion-react.cjs.js',
    module: 'dist/emotion-react.esm.js',
    browser: { './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js' },
    exports: {
      '.': {
        module: {
          worker: './dist/emotion-react.worker.esm.js',
          browser: './dist/emotion-react.browser.esm.js',
          default: './dist/emotion-react.esm.js'
        },
        import: './dist/emotion-react.cjs.mjs',
        default: './dist/emotion-react.cjs.js'
      },
      './jsx-runtime': {
        module: {
          worker: './jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js',
          browser: './jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js',
          default: './jsx-runtime/dist/emotion-react-jsx-runtime.esm.js'
        },
        import: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs',
        default: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js'
      },
      './_isolated-hnrs': {
        module: {
          worker: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js',
          browser: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js',
          default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js'
        },
        import: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs',
        default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js'
      },
      './jsx-dev-runtime': {
        module: {
          worker: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js',
          browser: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js',
          default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js'
        },
        import: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs',
        default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js'
      },
      './package.json': './package.json',
      './types/css-prop': './types/css-prop.d.ts',
      './macro': { types: { import: './macro.d.mts', default: './macro.d.ts' }, default: './macro.js' }
    },
    types: 'types/index.d.ts',
    files: ['src', 'dist', 'jsx-runtime', 'jsx-dev-runtime', '_isolated-hnrs', 'types/*.d.ts', 'macro.*'],
    sideEffects: !1,
    author: 'Emotion Contributors',
    license: 'MIT',
    scripts: { 'test:typescript': 'dtslint types' },
    dependencies: {
      '@babel/runtime': '^7.18.3',
      '@emotion/babel-plugin': '^11.11.0',
      '@emotion/cache': '^11.11.0',
      '@emotion/serialize': '^1.1.2',
      '@emotion/use-insertion-effect-with-fallbacks': '^1.0.1',
      '@emotion/utils': '^1.2.1',
      '@emotion/weak-memoize': '^0.3.1',
      'hoist-non-react-statics': '^3.3.1'
    },
    peerDependencies: { react: '>=16.8.0' },
    peerDependenciesMeta: { '@types/react': { optional: !0 } },
    devDependencies: {
      '@definitelytyped/dtslint': '0.0.112',
      '@emotion/css': '11.11.0',
      '@emotion/css-prettifier': '1.1.3',
      '@emotion/server': '11.11.0',
      '@emotion/styled': '11.11.0',
      'html-tag-names': '^1.1.2',
      react: '16.14.0',
      'svg-tag-names': '^1.1.1',
      typescript: '^4.5.5'
    },
    repository: 'https://github.com/emotion-js/emotion/tree/main/packages/react',
    publishConfig: { access: 'public' },
    'umd:main': 'dist/emotion-react.umd.min.js',
    preconstruct: {
      entrypoints: ['./index.js', './jsx-runtime.js', './jsx-dev-runtime.js', './_isolated-hnrs.js'],
      umdName: 'emotionReact',
      exports: {
        envConditions: ['browser', 'worker'],
        extra: {
          './types/css-prop': './types/css-prop.d.ts',
          './macro': { types: { import: './macro.d.mts', default: './macro.d.ts' }, default: './macro.js' }
        }
      }
    }
  },
  pl = !1,
  f1 = hn(function (e, t) {
    !pl &&
      (e.className || e.css) &&
      (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),
      (pl = !0))
    var r = e.styles,
      n = zt([r], void 0, C.useContext(bt)),
      o = C.useRef()
    return (
      Ko(
        function () {
          var l = t.key + '-global',
            i = new t.sheet.constructor({
              key: l,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy
            }),
            u = !1,
            s = document.querySelector('style[data-emotion="' + l + ' ' + n.name + '"]')
          return (
            t.sheet.tags.length && (i.before = t.sheet.tags[0]),
            s !== null && ((u = !0), s.setAttribute('data-emotion', l), i.hydrate([s])),
            (o.current = [i, u]),
            function () {
              i.flush()
            }
          )
        },
        [t]
      ),
      Ko(
        function () {
          var l = o.current,
            i = l[0],
            u = l[1]
          if (u) {
            l[1] = !1
            return
          }
          if ((n.next !== void 0 && gn(t, n.next, !0), i.tags.length)) {
            var s = i.tags[i.tags.length - 1].nextElementSibling
            ;(i.before = s), i.flush()
          }
          t.insert('', n, i, !1)
        },
        [t, n.name]
      ),
      null
    )
  })
f1.displayName = 'EmotionGlobal'
function Ga() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return zt(t)
}
var Qt = function () {
    var e = Ga.apply(void 0, arguments),
      t = 'animation-' + e.name
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      }
    }
  },
  m1 = function e(t) {
    for (var r = t.length, n = 0, o = ''; n < r; n++) {
      var l = t[n]
      if (l != null) {
        var i = void 0
        switch (typeof l) {
          case 'boolean':
            break
          case 'object': {
            if (Array.isArray(l)) i = e(l)
            else {
              l.styles !== void 0 &&
                l.name !== void 0 &&
                console.error(
                  'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
                ),
                (i = '')
              for (var u in l) l[u] && u && (i && (i += ' '), (i += u))
            }
            break
          }
          default:
            i = l
        }
        i && (o && (o += ' '), (o += i))
      }
    }
    return o
  }
function g1(e, t, r) {
  var n = [],
    o = za(e, n, r)
  return n.length < 2 ? r : o + t(n)
}
var h1 = function (e) {
    var t = e.cache,
      r = e.serializedArr
    return (
      Ha(function () {
        for (var n = 0; n < r.length; n++) gn(t, r[n], !1)
      }),
      null
    )
  },
  y1 = hn(function (e, t) {
    var r = !1,
      n = [],
      o = function () {
        if (r) throw new Error('css can only be used during render')
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++) c[d] = arguments[d]
        var g = zt(c, t.registered)
        return n.push(g), mn(t, g, !1), t.key + '-' + g.name
      },
      l = function () {
        if (r) throw new Error('cx can only be used during render')
        for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++) c[d] = arguments[d]
        return g1(t.registered, o, m1(c))
      },
      i = { css: o, cx: l, theme: C.useContext(bt) },
      u = e.children(i)
    return (r = !0), C.createElement(C.Fragment, null, C.createElement(h1, { cache: t, serializedArr: n }), u)
  })
y1.displayName = 'EmotionClassNames'
;(Hn = !0),
  (fl = typeof jest < 'u' || typeof vi < 'u'),
  Hn &&
    !fl &&
    ((Nn = typeof globalThis < 'u' ? globalThis : Hn ? window : global),
    (Zn = '__EMOTION_REACT_' + p1.version.split('.')[0] + '__'),
    Nn[Zn] &&
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
      ),
    (Nn[Zn] = !0))
var Hn,
  fl,
  Nn,
  Zn,
  b1 = Na,
  v1 = function (e) {
    return e !== 'theme'
  },
  ml = function (e) {
    return typeof e == 'string' && e.charCodeAt(0) > 96 ? b1 : v1
  },
  gl = function (e, t, r) {
    var n
    if (t) {
      var o = t.shouldForwardProp
      n =
        e.__emotion_forwardProp && o
          ? function (l) {
              return e.__emotion_forwardProp(l) && o(l)
            }
          : o
    }
    return typeof n != 'function' && r && (n = e.__emotion_forwardProp), n
  },
  hl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
  E1 = function (e) {
    var t = e.cache,
      r = e.serialized,
      n = e.isStringTag
    return (
      mn(t, r, n),
      Ha(function () {
        return gn(t, r, n)
      }),
      null
    )
  },
  x1 = function e(t, r) {
    if (t === void 0)
      throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`)
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      l,
      i
    r !== void 0 && ((l = r.label), (i = r.target))
    var u = gl(t, r, n),
      s = u || ml(o),
      c = !s('as')
    return function () {
      var d = arguments,
        g = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if ((l !== void 0 && g.push('label:' + l + ';'), d[0] == null || d[0].raw === void 0)) g.push.apply(g, d)
      else {
        d[0][0] === void 0 && console.error(hl), g.push(d[0][0])
        for (var h = d.length, p = 1; p < h; p++) d[0][p] === void 0 && console.error(hl), g.push(d[p], d[0][p])
      }
      var m = hn(function (f, E, b) {
        var x = (c && f.as) || o,
          y = '',
          v = [],
          A = f
        if (f.theme == null) {
          A = {}
          for (var w in f) A[w] = f[w]
          A.theme = C.useContext(bt)
        }
        typeof f.className == 'string'
          ? (y = za(E.registered, v, f.className))
          : f.className != null && (y = f.className + ' ')
        var k = zt(g.concat(v), E.registered, A)
        ;(y += E.key + '-' + k.name), i !== void 0 && (y += ' ' + i)
        var S = c && u === void 0 ? ml(x) : s,
          O = {}
        for (var T in f) (c && T === 'as') || (S(T) && (O[T] = f[T]))
        return (
          (O.className = y),
          (O.ref = b),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(E1, { cache: E, serialized: k, isStringTag: typeof x == 'string' }),
            C.createElement(x, O)
          )
        )
      })
      return (
        (m.displayName =
          l !== void 0 ? l : 'Styled(' + (typeof o == 'string' ? o : o.displayName || o.name || 'Component') + ')'),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = g),
        (m.__emotion_forwardProp = u),
        Object.defineProperty(m, 'toString', {
          value: function () {
            return i === void 0 ? 'NO_COMPONENT_SELECTOR' : '.' + i
          }
        }),
        (m.withComponent = function (f, E) {
          return e(f, Di({}, r, E, { shouldForwardProp: gl(m, E, !0) })).apply(void 0, g)
        }),
        m
      )
    }
  },
  A1 = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  _ = x1.bind()
A1.forEach(function (e) {
  _[e] = _(e)
})
var w1 = Dt(1)(({ typography: e }) => ({
  body: {
    fontFamily: e.fonts.base,
    fontSize: e.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch'
  },
  '*': { boxSizing: 'border-box' },
  'h1, h2, h3, h4, h5, h6': { fontWeight: e.weight.regular, margin: 0, padding: 0 },
  'button, input, textarea, select': { fontFamily: 'inherit', fontSize: 'inherit', boxSizing: 'border-box' },
  sub: { fontSize: '0.8em', bottom: '-0.2em' },
  sup: { fontSize: '0.8em', top: '-0.2em' },
  'b, strong': { fontWeight: e.weight.bold },
  hr: { border: 'none', borderTop: '1px solid silver', clear: 'both', marginBottom: '1.25rem' },
  code: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'inline-block',
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: 'baseline',
    color: 'inherit'
  },
  pre: {
    fontFamily: e.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0'
  }
}))
Dt(1)(({ color: e, background: t, typography: r }) => {
  let n = w1({ typography: r })
  return {
    ...n,
    body: { ...n.body, color: e.defaultText, background: t.app, overflow: 'hidden' },
    hr: { ...n.hr, borderTop: `1px solid ${e.border}` }
  }
})
var C1 = { rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)' },
  S1 = Qt`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  as = Qt`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
  k1 = Qt`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
  _1 = Qt`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
  O1 = Ga`
  animation: ${as} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
  T1 = Ga`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
  R1 = { rotate360: S1, glow: as, float: k1, jiggle: _1, inlineGlow: O1, hoverable: T1 },
  F1 = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
  },
  D1 = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
  },
  L1 = e => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: Pc(n) }), {}),
  M1 = ({ colors: e, mono: t }) => {
    let r = L1(e)
    return {
      token: {
        fontFamily: t,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': r.red3,
        '&.comment': { ...r.green1, fontStyle: 'italic' },
        '&.prolog': { ...r.green1, fontStyle: 'italic' },
        '&.doctype': { ...r.green1, fontStyle: 'italic' },
        '&.cdata': { ...r.green1, fontStyle: 'italic' },
        '&.string': r.red1,
        '&.url': r.cyan1,
        '&.symbol': r.cyan1,
        '&.number': r.cyan1,
        '&.boolean': r.cyan1,
        '&.variable': r.cyan1,
        '&.constant': r.cyan1,
        '&.inserted': r.cyan1,
        '&.atrule': r.blue1,
        '&.keyword': r.blue1,
        '&.attr-value': r.blue1,
        '&.punctuation': r.gray1,
        '&.operator': r.gray1,
        '&.function': r.gray1,
        '&.deleted': r.red2,
        '&.important': { fontWeight: 'bold' },
        '&.bold': { fontWeight: 'bold' },
        '&.italic': { fontStyle: 'italic' },
        '&.class-name': r.cyan2,
        '&.selector': r.red3,
        '&.attr-name': r.red4,
        '&.property': r.red4,
        '&.regex': r.red4,
        '&.entity': r.red4,
        '&.directive.tag .tag': { background: '#ffff00', ...r.gray1 }
      },
      'language-json .token.boolean': r.blue1,
      'language-json .token.number': r.blue1,
      'language-json .token.property': r.cyan2,
      namespace: { opacity: 0.7 }
    }
  },
  B1 = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f'
  },
  $1 = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f'
  },
  I1 = e => ({
    primary: e.colorPrimary,
    secondary: e.colorSecondary,
    tertiary: Y.tertiary,
    ancillary: Y.ancillary,
    orange: Y.orange,
    gold: Y.gold,
    green: Y.green,
    seafoam: Y.seafoam,
    purple: Y.purple,
    ultraviolet: Y.ultraviolet,
    lightest: Y.lightest,
    lighter: Y.lighter,
    light: Y.light,
    mediumlight: Y.mediumlight,
    medium: Y.medium,
    mediumdark: Y.mediumdark,
    dark: Y.dark,
    darker: Y.darker,
    darkest: Y.darkest,
    border: Y.border,
    positive: Y.positive,
    negative: Y.negative,
    warning: Y.warning,
    critical: Y.critical,
    defaultText: e.textColor || Y.darkest,
    inverseText: e.textInverseColor || Y.lightest,
    positiveText: Y.positiveText,
    negativeText: Y.negativeText,
    warningText: Y.warningText
  }),
  ma = (e = ca[Zc()]) => {
    let {
      base: t,
      colorPrimary: r,
      colorSecondary: n,
      appBg: o,
      appContentBg: l,
      appBorderColor: i,
      appBorderRadius: u,
      fontBase: s,
      fontCode: c,
      textColor: d,
      textInverseColor: g,
      barTextColor: h,
      barSelectedColor: p,
      barBg: m,
      buttonBg: f,
      buttonBorder: E,
      booleanBg: b,
      booleanSelectedBg: x,
      inputBg: y,
      inputBorder: v,
      inputTextColor: A,
      inputBorderRadius: w,
      brandTitle: k,
      brandUrl: S,
      brandImage: O,
      brandTarget: T,
      gridCellSize: R,
      ...D
    } = e
    return {
      ...D,
      base: t,
      color: I1(e),
      background: {
        app: o,
        bar: m,
        content: l,
        gridCellSize: R || It.gridCellSize,
        hoverable: It.hoverable,
        positive: It.positive,
        negative: It.negative,
        warning: It.warning,
        critical: It.critical
      },
      typography: { fonts: { base: s, mono: c }, weight: Nt.weight, size: Nt.size },
      animation: R1,
      easing: C1,
      input: { background: y, border: v, borderRadius: w, color: A },
      button: { background: f || y, border: E || v },
      boolean: { background: b || v, selectedBackground: x || y },
      layoutMargin: 10,
      appBorderColor: i,
      appBorderRadius: u,
      barTextColor: h,
      barSelectedColor: p || n,
      barBg: m,
      brand: { title: k, url: S, image: O || (k ? null : void 0), target: T },
      code: M1({ colors: t === 'light' ? B1 : $1, mono: c }),
      addonActionsTheme: {
        ...(t === 'light' ? D1 : F1),
        BASE_FONT_FAMILY: c,
        BASE_FONT_SIZE: Nt.size.s2 - 1,
        BASE_LINE_HEIGHT: '18px',
        BASE_BACKGROUND_COLOR: 'transparent',
        BASE_COLOR: d,
        ARROW_COLOR: Nc(0.2, i),
        ARROW_MARGIN_RIGHT: 4,
        ARROW_FONT_SIZE: 8,
        TREENODE_FONT_FAMILY: c,
        TREENODE_FONT_SIZE: Nt.size.s2 - 1,
        TREENODE_LINE_HEIGHT: '18px',
        TREENODE_PADDING_LEFT: 12
      }
    }
  },
  j1 = e => Object.keys(e).length === 0,
  Pn = e => e != null && typeof e == 'object',
  H1 = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t),
  N1 = () => Object.create(null),
  os = (e, t) =>
    e === t || !Pn(e) || !Pn(t)
      ? {}
      : Object.keys(e).reduce((r, n) => {
          if (H1(t, n)) {
            let o = os(e[n], t[n])
            return (Pn(o) && j1(o)) || (r[n] = o), r
          }
          return (r[n] = void 0), r
        }, N1()),
  Z1 = os
function P1(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
  var n = Array.from(typeof e == 'string' ? [e] : e)
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
  var o = n.reduce(function (u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g)
    return c
      ? u.concat(
          c.map(function (d) {
            var g, h
            return (h = (g = d.match(/[\t ]/g)) === null || g === void 0 ? void 0 : g.length) !== null && h !== void 0
              ? h
              : 0
          })
        )
      : u
  }, [])
  if (o.length) {
    var l = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        '}',
      'g'
    )
    n = n.map(function (u) {
      return u.replace(
        l,
        `
`
      )
    })
  }
  n[0] = n[0].replace(/^\r?\n/, '')
  var i = n[0]
  return (
    t.forEach(function (u, s) {
      var c = i.match(/(?:^|\n)( *)$/),
        d = c ? c[1] : '',
        g = u
      typeof u == 'string' &&
        u.includes(`
`) &&
        (g = String(u)
          .split(
            `
`
          )
          .map(function (h, p) {
            return p === 0 ? h : '' + d + h
          }).join(`
`)),
        (i += g + n[s + 1])
    }),
    i
  )
}
var V1 = e => {
    if (!e) return ma(Wo)
    let t = Z1(Wo, e)
    return (
      Object.keys(t).length &&
        y0.warn(
          P1`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
          t
        ),
      ma(e)
    )
  },
  ga =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */'
function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    ve.apply(this, arguments)
  )
}
function Ya(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    l
  for (l = 0; l < n.length; l++) (o = n[l]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
var q1 = Object.create,
  ls = Object.defineProperty,
  z1 = Object.getOwnPropertyDescriptor,
  is = Object.getOwnPropertyNames,
  U1 = Object.getPrototypeOf,
  W1 = Object.prototype.hasOwnProperty,
  Z = (e, t) =>
    function () {
      return t || (0, e[is(e)[0]])((t = { exports: {} }).exports, t), t.exports
    },
  G1 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of is(t))
        !W1.call(e, o) && o !== r && ls(e, o, { get: () => t[o], enumerable: !(n = z1(t, o)) || n.enumerable })
    return e
  },
  Oe = (e, t, r) => (
    (r = e != null ? q1(U1(e)) : {}),
    G1(t || !e || !e.__esModule ? ls(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  Y1 = Z({
    '../../node_modules/refractor/lang/markdown.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'markdown'), (r.aliases = ['md'])
      function r(n) {
        ;(function (o) {
          var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source
          function i(m) {
            return (
              (m = m.replace(/<inner>/g, function () {
                return l
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + m + ')')
            )
          }
          var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
              return u
            }),
            c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source
          ;(o.languages.markdown = o.languages.extend('markup', {})),
            o.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: o.languages.yaml
                  }
                }
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + s + c + '(?:' + s + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + s + c + ')(?:' + s + ')*$'),
                    lookbehind: !0,
                    inside: { 'table-data': { pattern: RegExp(u), inside: o.languages.markdown }, punctuation: /\|/ }
                  },
                  'table-line': {
                    pattern: RegExp('^(' + s + ')' + c + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ }
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + s + '$'),
                    inside: {
                      'table-header': { pattern: RegExp(u), alias: 'important', inside: o.languages.markdown },
                      punctuation: /\|/
                    }
                  }
                }
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword'
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/
                  }
                }
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ }
                },
                { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: 'important', inside: { punctuation: /^#+|#+$/ } }
              ],
              hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation' },
              list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/
                },
                alias: 'url'
              },
              bold: {
                pattern: i(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                  punctuation: /\*\*|__/
                }
              },
              italic: {
                pattern: i(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ }
              },
              strike: {
                pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ }
              },
              'code-snippet': {
                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword']
              },
              url: {
                pattern: i(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                  variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 }
                }
              }
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (m) {
              ;['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (f) {
                m !== f && (o.languages.markdown[m].inside.content.inside[f] = o.languages.markdown[f])
              })
            }),
            o.hooks.add('after-tokenize', function (m) {
              if (m.language !== 'markdown' && m.language !== 'md') return
              function f(E) {
                if (!(!E || typeof E == 'string'))
                  for (var b = 0, x = E.length; b < x; b++) {
                    var y = E[b]
                    if (y.type !== 'code') {
                      f(y.content)
                      continue
                    }
                    var v = y.content[1],
                      A = y.content[3]
                    if (
                      v &&
                      A &&
                      v.type === 'code-language' &&
                      A.type === 'code-block' &&
                      typeof v.content == 'string'
                    ) {
                      var w = v.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp')
                      w = (/[a-z][\w-]*/i.exec(w) || [''])[0].toLowerCase()
                      var k = 'language-' + w
                      A.alias
                        ? typeof A.alias == 'string'
                          ? (A.alias = [A.alias, k])
                          : A.alias.push(k)
                        : (A.alias = [k])
                    }
                  }
              }
              f(m.tokens)
            }),
            o.hooks.add('wrap', function (m) {
              if (m.type === 'code-block') {
                for (var f = '', E = 0, b = m.classes.length; E < b; E++) {
                  var x = m.classes[E],
                    y = /language-(.+)/.exec(x)
                  if (y) {
                    f = y[1]
                    break
                  }
                }
                var v = o.languages[f]
                if (v) m.content = o.highlight(p(m.content.value), v, f)
                else if (f && f !== 'none' && o.plugins.autoloader) {
                  var A = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16)
                  ;(m.attributes.id = A),
                    o.plugins.autoloader.loadLanguages(f, function () {
                      var w = document.getElementById(A)
                      w && (w.innerHTML = o.highlight(w.textContent, o.languages[f], f))
                    })
                }
              }
            })
          var d = RegExp(o.languages.markup.tag.pattern.source, 'gi'),
            g = { amp: '&', lt: '<', gt: '>', quot: '"' },
            h = String.fromCodePoint || String.fromCharCode
          function p(m) {
            var f = m.replace(d, '')
            return (
              (f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (E, b) {
                if (((b = b.toLowerCase()), b[0] === '#')) {
                  var x
                  return b[1] === 'x' ? (x = parseInt(b.slice(2), 16)) : (x = Number(b.slice(1))), h(x)
                } else {
                  var y = g[b]
                  return y || E
                }
              })),
              f
            )
          }
          o.languages.md = o.languages.markdown
        })(n)
      }
    }
  }),
  K1 = Z({
    '../../node_modules/refractor/lang/yaml.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'yaml'), (r.aliases = ['yml'])
      function r(n) {
        ;(function (o) {
          var l = /[*&][^\s[\]{},]+/,
            i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            u = '(?:' + i.source + '(?:[ 	]+' + l.source + ')?|' + l.source + '(?:[ 	]+' + i.source + ')?)',
            s =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                }
              ),
            c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source
          function d(g, h) {
            h = (h || '').replace(/m/g, '') + 'm'
            var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return u
              })
              .replace(/<<value>>/g, function () {
                return g
              })
            return RegExp(p, h)
          }
          ;(o.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return u
                  }
                )
              ),
              lookbehind: !0,
              alias: 'string'
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return u
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + s + '|' + c + ')'
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule'
            },
            directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
            datetime: {
              pattern: d(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number'
            },
            boolean: { pattern: d(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
            null: { pattern: d(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
            string: { pattern: d(c), lookbehind: !0, greedy: !0 },
            number: {
              pattern: d(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
              lookbehind: !0
            },
            tag: i,
            important: l,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
          }),
            (o.languages.yml = o.languages.yaml)
        })(n)
      }
    }
  }),
  ss = Z({
    '../../node_modules/refractor/lang/typescript.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'typescript'), (r.aliases = ['ts'])
      function r(n) {
        ;(function (o) {
          ;(o.languages.typescript = o.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
          })),
            o.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete o.languages.typescript.parameter,
            delete o.languages.typescript['literal-property']
          var l = o.languages.extend('typescript', {})
          delete l['class-name'],
            (o.languages.typescript['class-name'].inside = l),
            o.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ }
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: l }
                }
              }
            }),
            (o.languages.ts = o.languages.typescript)
        })(n)
      }
    }
  }),
  us = Z({
    '../../node_modules/refractor/lang/jsx.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'jsx'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          var l = o.util.clone(o.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source
          function c(h, p) {
            return (
              (h = h
                .replace(/<S>/g, function () {
                  return i
                })
                .replace(/<BRACES>/g, function () {
                  return u
                })
                .replace(/<SPREAD>/g, function () {
                  return s
                })),
              RegExp(h, p)
            )
          }
          ;(s = c(s).source),
            (o.languages.jsx = o.languages.extend('markup', l)),
            (o.languages.jsx.tag.pattern = c(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (o.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (o.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (o.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (o.languages.jsx.tag.inside.comment = l.comment),
            o.languages.insertBefore(
              'inside',
              'attr-name',
              { spread: { pattern: c(/<SPREAD>/.source), inside: o.languages.jsx } },
              o.languages.jsx.tag
            ),
            o.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: c(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: { 'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' }, rest: o.languages.jsx }
                }
              },
              o.languages.jsx.tag
            )
          var d = function (h) {
              return h
                ? typeof h == 'string'
                  ? h
                  : typeof h.content == 'string'
                  ? h.content
                  : h.content.map(d).join('')
                : ''
            },
            g = function (h) {
              for (var p = [], m = 0; m < h.length; m++) {
                var f = h[m],
                  E = !1
                if (
                  (typeof f != 'string' &&
                    (f.type === 'tag' && f.content[0] && f.content[0].type === 'tag'
                      ? f.content[0].content[0].content === '</'
                        ? p.length > 0 && p[p.length - 1].tagName === d(f.content[0].content[1]) && p.pop()
                        : f.content[f.content.length - 1].content === '/>' ||
                          p.push({ tagName: d(f.content[0].content[1]), openedBraces: 0 })
                      : p.length > 0 && f.type === 'punctuation' && f.content === '{'
                      ? p[p.length - 1].openedBraces++
                      : p.length > 0 &&
                        p[p.length - 1].openedBraces > 0 &&
                        f.type === 'punctuation' &&
                        f.content === '}'
                      ? p[p.length - 1].openedBraces--
                      : (E = !0)),
                  (E || typeof f == 'string') && p.length > 0 && p[p.length - 1].openedBraces === 0)
                ) {
                  var b = d(f)
                  m < h.length - 1 &&
                    (typeof h[m + 1] == 'string' || h[m + 1].type === 'plain-text') &&
                    ((b += d(h[m + 1])), h.splice(m + 1, 1)),
                    m > 0 &&
                      (typeof h[m - 1] == 'string' || h[m - 1].type === 'plain-text') &&
                      ((b = d(h[m - 1]) + b), h.splice(m - 1, 1), m--),
                    (h[m] = new o.Token('plain-text', b, null, b))
                }
                f.content && typeof f.content != 'string' && g(f.content)
              }
            }
          o.hooks.add('after-tokenize', function (h) {
            ;(h.language !== 'jsx' && h.language !== 'tsx') || g(h.tokens)
          })
        })(n)
      }
    }
  }),
  J1 = Z({
    '../../node_modules/refractor/lang/tsx.js'(e, t) {
      var r = us(),
        n = ss()
      ;(t.exports = o), (o.displayName = 'tsx'), (o.aliases = [])
      function o(l) {
        l.register(r),
          l.register(n),
          (function (i) {
            var u = i.util.clone(i.languages.typescript)
            ;(i.languages.tsx = i.languages.extend('jsx', u)),
              delete i.languages.tsx.parameter,
              delete i.languages.tsx['literal-property']
            var s = i.languages.tsx.tag
            ;(s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + s.pattern.source + ')', s.pattern.flags)),
              (s.lookbehind = !0)
          })(l)
      }
    }
  }),
  X1 = Z({
    '../../node_modules/refractor/lang/clike.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'clike'), (r.aliases = [])
      function r(n) {
        n.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/
        }
      }
    }
  }),
  Q1 = Z({
    '../../node_modules/refractor/lang/javascript.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'javascript'), (r.aliases = ['js'])
      function r(n) {
        ;(n.languages.javascript = n.languages.extend('clike', {
          'class-name': [
            n.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0
            }
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0
            }
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                (/NaN|Infinity/.source +
                  '|' +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  '|' +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  '|' +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  '|' +
                  /\d+(?:_\d+)*n/.source +
                  '|' +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        })),
          (n.languages.javascript['class-name'][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          n.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'regex-source': {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: 'language-regex',
                  inside: n.languages.regex
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/
              }
            },
            'function-variable': {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: 'function'
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: n.languages.javascript
              },
              {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: n.languages.javascript
              },
              {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: n.languages.javascript
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: n.languages.javascript
              }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
          }),
          n.languages.insertBefore('javascript', 'string', {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
            'template-string': {
              pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                  pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                    rest: n.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            },
            'string-property': {
              pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: 'property'
            }
          }),
          n.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
              pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: 'property'
            }
          }),
          n.languages.markup &&
            (n.languages.markup.tag.addInlined('script', 'javascript'),
            n.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              'javascript'
            )),
          (n.languages.js = n.languages.javascript)
      }
    }
  }),
  cs = Z({
    '../../node_modules/refractor/lang/css.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'css'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
          ;(o.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector'
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
              }
            },
            url: {
              pattern: RegExp('\\burl\\((?:' + l.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + l.source + '$'), alias: 'url' }
              }
            },
            selector: {
              pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ')*(?=\\s*\\{)'),
              lookbehind: !0
            },
            string: { pattern: l, greedy: !0 },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/
          }),
            (o.languages.css.atrule.inside.rest = o.languages.css)
          var i = o.languages.markup
          i && (i.tag.addInlined('style', 'css'), i.tag.addAttribute('style', 'css'))
        })(n)
      }
    }
  }),
  ds = Z({
    '../../node_modules/refractor/lang/markup.js'(e, t) {
      ;(t.exports = r),
        (r.displayName = 'markup'),
        (r.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'])
      function r(n) {
        ;(n.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/
            }
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] }
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
            }
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
        }),
          (n.languages.markup.tag.inside['attr-value'].inside.entity = n.languages.markup.entity),
          (n.languages.markup.doctype.inside['internal-subset'].inside = n.languages.markup),
          n.hooks.add('wrap', function (o) {
            o.type === 'entity' && (o.attributes.title = o.content.value.replace(/&amp;/, '&'))
          }),
          Object.defineProperty(n.languages.markup.tag, 'addInlined', {
            value: function (o, l) {
              var i = {}
              ;(i['language-' + l] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: n.languages[l]
              }),
                (i.cdata = /^<!\[CDATA\[|\]\]>$/i)
              var u = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i } }
              u['language-' + l] = { pattern: /[\s\S]+/, inside: n.languages[l] }
              var s = {}
              ;(s[o] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return o
                    }
                  ),
                  'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: u
              }),
                n.languages.insertBefore('markup', 'cdata', s)
            }
          }),
          Object.defineProperty(n.languages.markup.tag, 'addAttribute', {
            value: function (o, l) {
              n.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                  /(^|["'\s])/.source + '(?:' + o + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  'i'
                ),
                lookbehind: !0,
                inside: {
                  'attr-name': /^[^\s=]+/,
                  'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [l, 'language-' + l],
                        inside: n.languages[l]
                      },
                      punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
                    }
                  }
                }
              })
            }
          }),
          (n.languages.html = n.languages.markup),
          (n.languages.mathml = n.languages.markup),
          (n.languages.svg = n.languages.markup),
          (n.languages.xml = n.languages.extend('markup', {})),
          (n.languages.ssml = n.languages.xml),
          (n.languages.atom = n.languages.xml),
          (n.languages.rss = n.languages.xml)
      }
    }
  }),
  ed = Z({
    '../../node_modules/xtend/immutable.js'(e, t) {
      t.exports = n
      var r = Object.prototype.hasOwnProperty
      function n() {
        for (var o = {}, l = 0; l < arguments.length; l++) {
          var i = arguments[l]
          for (var u in i) r.call(i, u) && (o[u] = i[u])
        }
        return o
      }
    }
  }),
  ps = Z({
    '../../node_modules/property-information/lib/util/schema.js'(e, t) {
      t.exports = n
      var r = n.prototype
      ;(r.space = null), (r.normal = {}), (r.property = {})
      function n(o, l, i) {
        ;(this.property = o), (this.normal = l), i && (this.space = i)
      }
    }
  }),
  td = Z({
    '../../node_modules/property-information/lib/util/merge.js'(e, t) {
      var r = ed(),
        n = ps()
      t.exports = o
      function o(l) {
        for (var i = l.length, u = [], s = [], c = -1, d, g; ++c < i; )
          (d = l[c]), u.push(d.property), s.push(d.normal), (g = d.space)
        return new n(r.apply(null, u), r.apply(null, s), g)
      }
    }
  }),
  Ka = Z({
    '../../node_modules/property-information/normalize.js'(e, t) {
      t.exports = r
      function r(n) {
        return n.toLowerCase()
      }
    }
  }),
  fs = Z({
    '../../node_modules/property-information/lib/util/info.js'(e, t) {
      t.exports = n
      var r = n.prototype
      ;(r.space = null),
        (r.attribute = null),
        (r.property = null),
        (r.boolean = !1),
        (r.booleanish = !1),
        (r.overloadedBoolean = !1),
        (r.number = !1),
        (r.commaSeparated = !1),
        (r.spaceSeparated = !1),
        (r.commaOrSpaceSeparated = !1),
        (r.mustUseProperty = !1),
        (r.defined = !1)
      function n(o, l) {
        ;(this.property = o), (this.attribute = l)
      }
    }
  }),
  Ja = Z({
    '../../node_modules/property-information/lib/util/types.js'(e) {
      var t = 0
      ;(e.boolean = r()),
        (e.booleanish = r()),
        (e.overloadedBoolean = r()),
        (e.number = r()),
        (e.spaceSeparated = r()),
        (e.commaSeparated = r()),
        (e.commaOrSpaceSeparated = r())
      function r() {
        return Math.pow(2, ++t)
      }
    }
  }),
  ms = Z({
    '../../node_modules/property-information/lib/util/defined-info.js'(e, t) {
      var r = fs(),
        n = Ja()
      ;(t.exports = i), (i.prototype = new r()), (i.prototype.defined = !0)
      var o = [
          'boolean',
          'booleanish',
          'overloadedBoolean',
          'number',
          'commaSeparated',
          'spaceSeparated',
          'commaOrSpaceSeparated'
        ],
        l = o.length
      function i(s, c, d, g) {
        var h = -1,
          p
        for (u(this, 'space', g), r.call(this, s, c); ++h < l; ) (p = o[h]), u(this, p, (d & n[p]) === n[p])
      }
      function u(s, c, d) {
        d && (s[c] = d)
      }
    }
  }),
  _r = Z({
    '../../node_modules/property-information/lib/util/create.js'(e, t) {
      var r = Ka(),
        n = ps(),
        o = ms()
      t.exports = l
      function l(i) {
        var u = i.space,
          s = i.mustUseProperty || [],
          c = i.attributes || {},
          d = i.properties,
          g = i.transform,
          h = {},
          p = {},
          m,
          f
        for (m in d)
          (f = new o(m, g(c, m), d[m], u)),
            s.indexOf(m) !== -1 && (f.mustUseProperty = !0),
            (h[m] = f),
            (p[r(m)] = m),
            (p[r(f.attribute)] = m)
        return new n(h, p, u)
      }
    }
  }),
  rd = Z({
    '../../node_modules/property-information/lib/xlink.js'(e, t) {
      var r = _r()
      t.exports = r({
        space: 'xlink',
        transform: n,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null
        }
      })
      function n(o, l) {
        return 'xlink:' + l.slice(5).toLowerCase()
      }
    }
  }),
  nd = Z({
    '../../node_modules/property-information/lib/xml.js'(e, t) {
      var r = _r()
      t.exports = r({ space: 'xml', transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } })
      function n(o, l) {
        return 'xml:' + l.slice(3).toLowerCase()
      }
    }
  }),
  ad = Z({
    '../../node_modules/property-information/lib/util/case-sensitive-transform.js'(e, t) {
      t.exports = r
      function r(n, o) {
        return o in n ? n[o] : o
      }
    }
  }),
  gs = Z({
    '../../node_modules/property-information/lib/util/case-insensitive-transform.js'(e, t) {
      var r = ad()
      t.exports = n
      function n(o, l) {
        return r(o, l.toLowerCase())
      }
    }
  }),
  od = Z({
    '../../node_modules/property-information/lib/xmlns.js'(e, t) {
      var r = _r(),
        n = gs()
      t.exports = r({
        space: 'xmlns',
        attributes: { xmlnsxlink: 'xmlns:xlink' },
        transform: n,
        properties: { xmlns: null, xmlnsXLink: null }
      })
    }
  }),
  ld = Z({
    '../../node_modules/property-information/lib/aria.js'(e, t) {
      var r = Ja(),
        n = _r(),
        o = r.booleanish,
        l = r.number,
        i = r.spaceSeparated
      t.exports = n({
        transform: u,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: o,
          ariaAutoComplete: null,
          ariaBusy: o,
          ariaChecked: o,
          ariaColCount: l,
          ariaColIndex: l,
          ariaColSpan: l,
          ariaControls: i,
          ariaCurrent: null,
          ariaDescribedBy: i,
          ariaDetails: null,
          ariaDisabled: o,
          ariaDropEffect: i,
          ariaErrorMessage: null,
          ariaExpanded: o,
          ariaFlowTo: i,
          ariaGrabbed: o,
          ariaHasPopup: null,
          ariaHidden: o,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: i,
          ariaLevel: l,
          ariaLive: null,
          ariaModal: o,
          ariaMultiLine: o,
          ariaMultiSelectable: o,
          ariaOrientation: null,
          ariaOwns: i,
          ariaPlaceholder: null,
          ariaPosInSet: l,
          ariaPressed: o,
          ariaReadOnly: o,
          ariaRelevant: null,
          ariaRequired: o,
          ariaRoleDescription: i,
          ariaRowCount: l,
          ariaRowIndex: l,
          ariaRowSpan: l,
          ariaSelected: o,
          ariaSetSize: l,
          ariaSort: null,
          ariaValueMax: l,
          ariaValueMin: l,
          ariaValueNow: l,
          ariaValueText: null,
          role: null
        }
      })
      function u(s, c) {
        return c === 'role' ? c : 'aria-' + c.slice(4).toLowerCase()
      }
    }
  }),
  id = Z({
    '../../node_modules/property-information/lib/html.js'(e, t) {
      var r = Ja(),
        n = _r(),
        o = gs(),
        l = r.boolean,
        i = r.overloadedBoolean,
        u = r.booleanish,
        s = r.number,
        c = r.spaceSeparated,
        d = r.commaSeparated
      t.exports = n({
        space: 'html',
        attributes: { acceptcharset: 'accept-charset', classname: 'class', htmlfor: 'for', httpequiv: 'http-equiv' },
        transform: o,
        mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
        properties: {
          abbr: null,
          accept: d,
          acceptCharset: c,
          accessKey: c,
          action: null,
          allow: null,
          allowFullScreen: l,
          allowPaymentRequest: l,
          allowUserMedia: l,
          alt: null,
          as: null,
          async: l,
          autoCapitalize: null,
          autoComplete: c,
          autoFocus: l,
          autoPlay: l,
          capture: l,
          charSet: null,
          checked: l,
          cite: null,
          className: c,
          cols: s,
          colSpan: null,
          content: null,
          contentEditable: u,
          controls: l,
          controlsList: c,
          coords: s | d,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: l,
          defer: l,
          dir: null,
          dirName: null,
          disabled: l,
          download: i,
          draggable: u,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: l,
          formTarget: null,
          headers: c,
          height: s,
          hidden: l,
          high: s,
          href: null,
          hrefLang: null,
          htmlFor: c,
          httpEquiv: c,
          id: null,
          imageSizes: null,
          imageSrcSet: d,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: l,
          itemId: null,
          itemProp: c,
          itemRef: c,
          itemScope: l,
          itemType: c,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: l,
          low: s,
          manifest: null,
          max: null,
          maxLength: s,
          media: null,
          method: null,
          min: null,
          minLength: s,
          multiple: l,
          muted: l,
          name: null,
          nonce: null,
          noModule: l,
          noValidate: l,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: l,
          optimum: s,
          pattern: null,
          ping: c,
          placeholder: null,
          playsInline: l,
          poster: null,
          preload: null,
          readOnly: l,
          referrerPolicy: null,
          rel: c,
          required: l,
          reversed: l,
          rows: s,
          rowSpan: s,
          sandbox: c,
          scope: null,
          scoped: l,
          seamless: l,
          selected: l,
          shape: null,
          size: s,
          sizes: null,
          slot: null,
          span: s,
          spellCheck: u,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: d,
          start: s,
          step: null,
          style: null,
          tabIndex: s,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: l,
          useMap: null,
          value: u,
          width: s,
          wrap: null,
          align: null,
          aLink: null,
          archive: c,
          axis: null,
          background: null,
          bgColor: null,
          border: s,
          borderColor: null,
          bottomMargin: s,
          cellPadding: null,
          cellSpacing: null,
          char: null,
          charOff: null,
          classId: null,
          clear: null,
          code: null,
          codeBase: null,
          codeType: null,
          color: null,
          compact: l,
          declare: l,
          event: null,
          face: null,
          frame: null,
          frameBorder: null,
          hSpace: s,
          leftMargin: s,
          link: null,
          longDesc: null,
          lowSrc: null,
          marginHeight: s,
          marginWidth: s,
          noResize: l,
          noHref: l,
          noShade: l,
          noWrap: l,
          object: null,
          profile: null,
          prompt: null,
          rev: null,
          rightMargin: s,
          rules: null,
          scheme: null,
          scrolling: u,
          standby: null,
          summary: null,
          text: null,
          topMargin: s,
          valueType: null,
          version: null,
          vAlign: null,
          vLink: null,
          vSpace: s,
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: l,
          disableRemotePlayback: l,
          prefix: null,
          property: null,
          results: s,
          security: null,
          unselectable: null
        }
      })
    }
  }),
  sd = Z({
    '../../node_modules/property-information/html.js'(e, t) {
      var r = td(),
        n = rd(),
        o = nd(),
        l = od(),
        i = ld(),
        u = id()
      t.exports = r([o, n, l, i, u])
    }
  }),
  ud = Z({
    '../../node_modules/property-information/find.js'(e, t) {
      var r = Ka(),
        n = ms(),
        o = fs(),
        l = 'data'
      t.exports = c
      var i = /^data[-\w.:]+$/i,
        u = /-[a-z]/g,
        s = /[A-Z]/g
      function c(m, f) {
        var E = r(f),
          b = f,
          x = o
        return E in m.normal
          ? m.property[m.normal[E]]
          : (E.length > 4 &&
              E.slice(0, 4) === l &&
              i.test(f) &&
              (f.charAt(4) === '-' ? (b = d(f)) : (f = g(f)), (x = n)),
            new x(b, f))
      }
      function d(m) {
        var f = m.slice(5).replace(u, p)
        return l + f.charAt(0).toUpperCase() + f.slice(1)
      }
      function g(m) {
        var f = m.slice(4)
        return u.test(f) ? m : ((f = f.replace(s, h)), f.charAt(0) !== '-' && (f = '-' + f), l + f)
      }
      function h(m) {
        return '-' + m.toLowerCase()
      }
      function p(m) {
        return m.charAt(1).toUpperCase()
      }
    }
  }),
  cd = Z({
    '../../node_modules/hast-util-parse-selector/index.js'(e, t) {
      t.exports = n
      var r = /[#.]/g
      function n(o, l) {
        for (var i = o || '', u = l || 'div', s = {}, c = 0, d, g, h; c < i.length; )
          (r.lastIndex = c),
            (h = r.exec(i)),
            (d = i.slice(c, h ? h.index : i.length)),
            d &&
              (g ? (g === '#' ? (s.id = d) : s.className ? s.className.push(d) : (s.className = [d])) : (u = d),
              (c += d.length)),
            h && ((g = h[0]), c++)
        return { type: 'element', tagName: u, properties: s, children: [] }
      }
    }
  }),
  dd = Z({
    '../../node_modules/space-separated-tokens/index.js'(e) {
      ;(e.parse = o), (e.stringify = l)
      var t = '',
        r = ' ',
        n = /[ \t\n\r\f]+/g
      function o(i) {
        var u = String(i || t).trim()
        return u === t ? [] : u.split(n)
      }
      function l(i) {
        return i.join(r).trim()
      }
    }
  }),
  pd = Z({
    '../../node_modules/comma-separated-tokens/index.js'(e) {
      ;(e.parse = o), (e.stringify = l)
      var t = ',',
        r = ' ',
        n = ''
      function o(i) {
        for (var u = [], s = String(i || n), c = s.indexOf(t), d = 0, g = !1, h; !g; )
          c === -1 && ((c = s.length), (g = !0)),
            (h = s.slice(d, c).trim()),
            (h || !g) && u.push(h),
            (d = c + 1),
            (c = s.indexOf(t, d))
        return u
      }
      function l(i, u) {
        var s = u || {},
          c = s.padLeft === !1 ? n : r,
          d = s.padRight ? r : n
        return i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim()
      }
    }
  }),
  fd = Z({
    '../../node_modules/hastscript/factory.js'(e, t) {
      var r = ud(),
        n = Ka(),
        o = cd(),
        l = dd().parse,
        i = pd().parse
      t.exports = s
      var u = {}.hasOwnProperty
      function s(E, b, x) {
        var y = x ? f(x) : null
        return v
        function v(w, k) {
          var S = o(w, b),
            O = Array.prototype.slice.call(arguments, 2),
            T = S.tagName.toLowerCase(),
            R
          if (((S.tagName = y && u.call(y, T) ? y[T] : T), k && c(k, S) && (O.unshift(k), (k = null)), k))
            for (R in k) A(S.properties, R, k[R])
          return (
            g(S.children, O),
            S.tagName === 'template' && ((S.content = { type: 'root', children: S.children }), (S.children = [])),
            S
          )
        }
        function A(w, k, S) {
          var O, T, R
          S == null ||
            S !== S ||
            ((O = r(E, k)),
            (T = O.property),
            (R = S),
            typeof R == 'string' &&
              (O.spaceSeparated
                ? (R = l(R))
                : O.commaSeparated
                ? (R = i(R))
                : O.commaOrSpaceSeparated && (R = l(i(R).join(' ')))),
            T === 'style' && typeof S != 'string' && (R = m(R)),
            T === 'className' && w.className && (R = w.className.concat(R)),
            (w[T] = h(O, T, R)))
        }
      }
      function c(E, b) {
        return typeof E == 'string' || 'length' in E || d(b.tagName, E)
      }
      function d(E, b) {
        var x = b.type
        return E === 'input' || !x || typeof x != 'string'
          ? !1
          : typeof b.children == 'object' && 'length' in b.children
          ? !0
          : ((x = x.toLowerCase()),
            E === 'button' ? x !== 'menu' && x !== 'submit' && x !== 'reset' && x !== 'button' : 'value' in b)
      }
      function g(E, b) {
        var x, y
        if (typeof b == 'string' || typeof b == 'number') {
          E.push({ type: 'text', value: String(b) })
          return
        }
        if (typeof b == 'object' && 'length' in b) {
          for (x = -1, y = b.length; ++x < y; ) g(E, b[x])
          return
        }
        if (typeof b != 'object' || !('type' in b)) throw new Error('Expected node, nodes, or string, got `' + b + '`')
        E.push(b)
      }
      function h(E, b, x) {
        var y, v, A
        if (typeof x != 'object' || !('length' in x)) return p(E, b, x)
        for (v = x.length, y = -1, A = []; ++y < v; ) A[y] = p(E, b, x[y])
        return A
      }
      function p(E, b, x) {
        var y = x
        return (
          E.number || E.positiveNumber
            ? !isNaN(y) && y !== '' && (y = Number(y))
            : (E.boolean || E.overloadedBoolean) && typeof y == 'string' && (y === '' || n(x) === n(b)) && (y = !0),
          y
        )
      }
      function m(E) {
        var b = [],
          x
        for (x in E) b.push([x, E[x]].join(': '))
        return b.join('; ')
      }
      function f(E) {
        for (var b = E.length, x = -1, y = {}, v; ++x < b; ) (v = E[x]), (y[v.toLowerCase()] = v)
        return y
      }
    }
  }),
  md = Z({
    '../../node_modules/hastscript/html.js'(e, t) {
      var r = sd(),
        n = fd(),
        o = n(r, 'div')
      ;(o.displayName = 'html'), (t.exports = o)
    }
  }),
  gd = Z({
    '../../node_modules/hastscript/index.js'(e, t) {
      t.exports = md()
    }
  }),
  hd = Z({
    '../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json'(e, t) {
      t.exports = {
        AElig: 'Æ',
        AMP: '&',
        Aacute: 'Á',
        Acirc: 'Â',
        Agrave: 'À',
        Aring: 'Å',
        Atilde: 'Ã',
        Auml: 'Ä',
        COPY: '©',
        Ccedil: 'Ç',
        ETH: 'Ð',
        Eacute: 'É',
        Ecirc: 'Ê',
        Egrave: 'È',
        Euml: 'Ë',
        GT: '>',
        Iacute: 'Í',
        Icirc: 'Î',
        Igrave: 'Ì',
        Iuml: 'Ï',
        LT: '<',
        Ntilde: 'Ñ',
        Oacute: 'Ó',
        Ocirc: 'Ô',
        Ograve: 'Ò',
        Oslash: 'Ø',
        Otilde: 'Õ',
        Ouml: 'Ö',
        QUOT: '"',
        REG: '®',
        THORN: 'Þ',
        Uacute: 'Ú',
        Ucirc: 'Û',
        Ugrave: 'Ù',
        Uuml: 'Ü',
        Yacute: 'Ý',
        aacute: 'á',
        acirc: 'â',
        acute: '´',
        aelig: 'æ',
        agrave: 'à',
        amp: '&',
        aring: 'å',
        atilde: 'ã',
        auml: 'ä',
        brvbar: '¦',
        ccedil: 'ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        ecirc: 'ê',
        egrave: 'è',
        eth: 'ð',
        euml: 'ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        iacute: 'í',
        icirc: 'î',
        iexcl: '¡',
        igrave: 'ì',
        iquest: '¿',
        iuml: 'ï',
        laquo: '«',
        lt: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        oacute: 'ó',
        ocirc: 'ô',
        ograve: 'ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        otilde: 'õ',
        ouml: 'ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        raquo: '»',
        reg: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        times: '×',
        uacute: 'ú',
        ucirc: 'û',
        ugrave: 'ù',
        uml: '¨',
        uuml: 'ü',
        yacute: 'ý',
        yen: '¥',
        yuml: 'ÿ'
      }
    }
  }),
  yd = Z({
    '../../node_modules/character-reference-invalid/index.json'(e, t) {
      t.exports = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ'
      }
    }
  }),
  hs = Z({
    '../../node_modules/is-decimal/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return o >= 48 && o <= 57
      }
    }
  }),
  bd = Z({
    '../../node_modules/is-hexadecimal/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return (o >= 97 && o <= 102) || (o >= 65 && o <= 70) || (o >= 48 && o <= 57)
      }
    }
  }),
  vd = Z({
    '../../node_modules/is-alphabetical/index.js'(e, t) {
      t.exports = r
      function r(n) {
        var o = typeof n == 'string' ? n.charCodeAt(0) : n
        return (o >= 97 && o <= 122) || (o >= 65 && o <= 90)
      }
    }
  }),
  Ed = Z({
    '../../node_modules/is-alphanumerical/index.js'(e, t) {
      var r = vd(),
        n = hs()
      t.exports = o
      function o(l) {
        return r(l) || n(l)
      }
    }
  }),
  xd = Z({
    '../../node_modules/parse-entities/node_modules/character-entities/index.json'(e, t) {
      t.exports = {
        AEli: 'Æ',
        AElig: 'Æ',
        AM: '&',
        AMP: '&',
        Aacut: 'Á',
        Aacute: 'Á',
        Abreve: 'Ă',
        Acir: 'Â',
        Acirc: 'Â',
        Acy: 'А',
        Afr: '𝔄',
        Agrav: 'À',
        Agrave: 'À',
        Alpha: 'Α',
        Amacr: 'Ā',
        And: '⩓',
        Aogon: 'Ą',
        Aopf: '𝔸',
        ApplyFunction: '⁡',
        Arin: 'Å',
        Aring: 'Å',
        Ascr: '𝒜',
        Assign: '≔',
        Atild: 'Ã',
        Atilde: 'Ã',
        Aum: 'Ä',
        Auml: 'Ä',
        Backslash: '∖',
        Barv: '⫧',
        Barwed: '⌆',
        Bcy: 'Б',
        Because: '∵',
        Bernoullis: 'ℬ',
        Beta: 'Β',
        Bfr: '𝔅',
        Bopf: '𝔹',
        Breve: '˘',
        Bscr: 'ℬ',
        Bumpeq: '≎',
        CHcy: 'Ч',
        COP: '©',
        COPY: '©',
        Cacute: 'Ć',
        Cap: '⋒',
        CapitalDifferentialD: 'ⅅ',
        Cayleys: 'ℭ',
        Ccaron: 'Č',
        Ccedi: 'Ç',
        Ccedil: 'Ç',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        Cdot: 'Ċ',
        Cedilla: '¸',
        CenterDot: '·',
        Cfr: 'ℭ',
        Chi: 'Χ',
        CircleDot: '⊙',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        Colon: '∷',
        Colone: '⩴',
        Congruent: '≡',
        Conint: '∯',
        ContourIntegral: '∮',
        Copf: 'ℂ',
        Coproduct: '∐',
        CounterClockwiseContourIntegral: '∳',
        Cross: '⨯',
        Cscr: '𝒞',
        Cup: '⋓',
        CupCap: '≍',
        DD: 'ⅅ',
        DDotrahd: '⤑',
        DJcy: 'Ђ',
        DScy: 'Ѕ',
        DZcy: 'Џ',
        Dagger: '‡',
        Darr: '↡',
        Dashv: '⫤',
        Dcaron: 'Ď',
        Dcy: 'Д',
        Del: '∇',
        Delta: 'Δ',
        Dfr: '𝔇',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        Diamond: '⋄',
        DifferentialD: 'ⅆ',
        Dopf: '𝔻',
        Dot: '¨',
        DotDot: '⃜',
        DotEqual: '≐',
        DoubleContourIntegral: '∯',
        DoubleDot: '¨',
        DoubleDownArrow: '⇓',
        DoubleLeftArrow: '⇐',
        DoubleLeftRightArrow: '⇔',
        DoubleLeftTee: '⫤',
        DoubleLongLeftArrow: '⟸',
        DoubleLongLeftRightArrow: '⟺',
        DoubleLongRightArrow: '⟹',
        DoubleRightArrow: '⇒',
        DoubleRightTee: '⊨',
        DoubleUpArrow: '⇑',
        DoubleUpDownArrow: '⇕',
        DoubleVerticalBar: '∥',
        DownArrow: '↓',
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        Downarrow: '⇓',
        Dscr: '𝒟',
        Dstrok: 'Đ',
        ENG: 'Ŋ',
        ET: 'Ð',
        ETH: 'Ð',
        Eacut: 'É',
        Eacute: 'É',
        Ecaron: 'Ě',
        Ecir: 'Ê',
        Ecirc: 'Ê',
        Ecy: 'Э',
        Edot: 'Ė',
        Efr: '𝔈',
        Egrav: 'È',
        Egrave: 'È',
        Element: '∈',
        Emacr: 'Ē',
        EmptySmallSquare: '◻',
        EmptyVerySmallSquare: '▫',
        Eogon: 'Ę',
        Eopf: '𝔼',
        Epsilon: 'Ε',
        Equal: '⩵',
        EqualTilde: '≂',
        Equilibrium: '⇌',
        Escr: 'ℰ',
        Esim: '⩳',
        Eta: 'Η',
        Eum: 'Ë',
        Euml: 'Ë',
        Exists: '∃',
        ExponentialE: 'ⅇ',
        Fcy: 'Ф',
        Ffr: '𝔉',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        Fopf: '𝔽',
        ForAll: '∀',
        Fouriertrf: 'ℱ',
        Fscr: 'ℱ',
        GJcy: 'Ѓ',
        G: '>',
        GT: '>',
        Gamma: 'Γ',
        Gammad: 'Ϝ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        Gcirc: 'Ĝ',
        Gcy: 'Г',
        Gdot: 'Ġ',
        Gfr: '𝔊',
        Gg: '⋙',
        Gopf: '𝔾',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        Gscr: '𝒢',
        Gt: '≫',
        HARDcy: 'Ъ',
        Hacek: 'ˇ',
        Hat: '^',
        Hcirc: 'Ĥ',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        Hopf: 'ℍ',
        HorizontalLine: '─',
        Hscr: 'ℋ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        IEcy: 'Е',
        IJlig: 'Ĳ',
        IOcy: 'Ё',
        Iacut: 'Í',
        Iacute: 'Í',
        Icir: 'Î',
        Icirc: 'Î',
        Icy: 'И',
        Idot: 'İ',
        Ifr: 'ℑ',
        Igrav: 'Ì',
        Igrave: 'Ì',
        Im: 'ℑ',
        Imacr: 'Ī',
        ImaginaryI: 'ⅈ',
        Implies: '⇒',
        Int: '∬',
        Integral: '∫',
        Intersection: '⋂',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        Iogon: 'Į',
        Iopf: '𝕀',
        Iota: 'Ι',
        Iscr: 'ℐ',
        Itilde: 'Ĩ',
        Iukcy: 'І',
        Ium: 'Ï',
        Iuml: 'Ï',
        Jcirc: 'Ĵ',
        Jcy: 'Й',
        Jfr: '𝔍',
        Jopf: '𝕁',
        Jscr: '𝒥',
        Jsercy: 'Ј',
        Jukcy: 'Є',
        KHcy: 'Х',
        KJcy: 'Ќ',
        Kappa: 'Κ',
        Kcedil: 'Ķ',
        Kcy: 'К',
        Kfr: '𝔎',
        Kopf: '𝕂',
        Kscr: '𝒦',
        LJcy: 'Љ',
        L: '<',
        LT: '<',
        Lacute: 'Ĺ',
        Lambda: 'Λ',
        Lang: '⟪',
        Laplacetrf: 'ℒ',
        Larr: '↞',
        Lcaron: 'Ľ',
        Lcedil: 'Ļ',
        Lcy: 'Л',
        LeftAngleBracket: '⟨',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        LeftRightArrow: '↔',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        Leftarrow: '⇐',
        Leftrightarrow: '⇔',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        LessLess: '⪡',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        Lfr: '𝔏',
        Ll: '⋘',
        Lleftarrow: '⇚',
        Lmidot: 'Ŀ',
        LongLeftArrow: '⟵',
        LongLeftRightArrow: '⟷',
        LongRightArrow: '⟶',
        Longleftarrow: '⟸',
        Longleftrightarrow: '⟺',
        Longrightarrow: '⟹',
        Lopf: '𝕃',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        Lscr: 'ℒ',
        Lsh: '↰',
        Lstrok: 'Ł',
        Lt: '≪',
        Map: '⤅',
        Mcy: 'М',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        Mfr: '𝔐',
        MinusPlus: '∓',
        Mopf: '𝕄',
        Mscr: 'ℳ',
        Mu: 'Μ',
        NJcy: 'Њ',
        Nacute: 'Ń',
        Ncaron: 'Ň',
        Ncedil: 'Ņ',
        Ncy: 'Н',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: `
`,
        Nfr: '𝔑',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        Nopf: 'ℕ',
        Not: '⫬',
        NotCongruent: '≢',
        NotCupCap: '≭',
        NotDoubleVerticalBar: '∦',
        NotElement: '∉',
        NotEqual: '≠',
        NotEqualTilde: '≂̸',
        NotExists: '∄',
        NotGreater: '≯',
        NotGreaterEqual: '≱',
        NotGreaterFullEqual: '≧̸',
        NotGreaterGreater: '≫̸',
        NotGreaterLess: '≹',
        NotGreaterSlantEqual: '⩾̸',
        NotGreaterTilde: '≵',
        NotHumpDownHump: '≎̸',
        NotHumpEqual: '≏̸',
        NotLeftTriangle: '⋪',
        NotLeftTriangleBar: '⧏̸',
        NotLeftTriangleEqual: '⋬',
        NotLess: '≮',
        NotLessEqual: '≰',
        NotLessGreater: '≸',
        NotLessLess: '≪̸',
        NotLessSlantEqual: '⩽̸',
        NotLessTilde: '≴',
        NotNestedGreaterGreater: '⪢̸',
        NotNestedLessLess: '⪡̸',
        NotPrecedes: '⊀',
        NotPrecedesEqual: '⪯̸',
        NotPrecedesSlantEqual: '⋠',
        NotReverseElement: '∌',
        NotRightTriangle: '⋫',
        NotRightTriangleBar: '⧐̸',
        NotRightTriangleEqual: '⋭',
        NotSquareSubset: '⊏̸',
        NotSquareSubsetEqual: '⋢',
        NotSquareSuperset: '⊐̸',
        NotSquareSupersetEqual: '⋣',
        NotSubset: '⊂⃒',
        NotSubsetEqual: '⊈',
        NotSucceeds: '⊁',
        NotSucceedsEqual: '⪰̸',
        NotSucceedsSlantEqual: '⋡',
        NotSucceedsTilde: '≿̸',
        NotSuperset: '⊃⃒',
        NotSupersetEqual: '⊉',
        NotTilde: '≁',
        NotTildeEqual: '≄',
        NotTildeFullEqual: '≇',
        NotTildeTilde: '≉',
        NotVerticalBar: '∤',
        Nscr: '𝒩',
        Ntild: 'Ñ',
        Ntilde: 'Ñ',
        Nu: 'Ν',
        OElig: 'Œ',
        Oacut: 'Ó',
        Oacute: 'Ó',
        Ocir: 'Ô',
        Ocirc: 'Ô',
        Ocy: 'О',
        Odblac: 'Ő',
        Ofr: '𝔒',
        Ograv: 'Ò',
        Ograve: 'Ò',
        Omacr: 'Ō',
        Omega: 'Ω',
        Omicron: 'Ο',
        Oopf: '𝕆',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        Or: '⩔',
        Oscr: '𝒪',
        Oslas: 'Ø',
        Oslash: 'Ø',
        Otild: 'Õ',
        Otilde: 'Õ',
        Otimes: '⨷',
        Oum: 'Ö',
        Ouml: 'Ö',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        PartialD: '∂',
        Pcy: 'П',
        Pfr: '𝔓',
        Phi: 'Φ',
        Pi: 'Π',
        PlusMinus: '±',
        Poincareplane: 'ℌ',
        Popf: 'ℙ',
        Pr: '⪻',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        Prime: '″',
        Product: '∏',
        Proportion: '∷',
        Proportional: '∝',
        Pscr: '𝒫',
        Psi: 'Ψ',
        QUO: '"',
        QUOT: '"',
        Qfr: '𝔔',
        Qopf: 'ℚ',
        Qscr: '𝒬',
        RBarr: '⤐',
        RE: '®',
        REG: '®',
        Racute: 'Ŕ',
        Rang: '⟫',
        Rarr: '↠',
        Rarrtl: '⤖',
        Rcaron: 'Ř',
        Rcedil: 'Ŗ',
        Rcy: 'Р',
        Re: 'ℜ',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        Rfr: 'ℜ',
        Rho: 'Ρ',
        RightAngleBracket: '⟩',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        Rightarrow: '⇒',
        Ropf: 'ℝ',
        RoundImplies: '⥰',
        Rrightarrow: '⇛',
        Rscr: 'ℛ',
        Rsh: '↱',
        RuleDelayed: '⧴',
        SHCHcy: 'Щ',
        SHcy: 'Ш',
        SOFTcy: 'Ь',
        Sacute: 'Ś',
        Sc: '⪼',
        Scaron: 'Š',
        Scedil: 'Ş',
        Scirc: 'Ŝ',
        Scy: 'С',
        Sfr: '𝔖',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        Sigma: 'Σ',
        SmallCircle: '∘',
        Sopf: '𝕊',
        Sqrt: '√',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        Sscr: '𝒮',
        Star: '⋆',
        Sub: '⋐',
        Subset: '⋐',
        SubsetEqual: '⊆',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        SuchThat: '∋',
        Sum: '∑',
        Sup: '⋑',
        Superset: '⊃',
        SupersetEqual: '⊇',
        Supset: '⋑',
        THOR: 'Þ',
        THORN: 'Þ',
        TRADE: '™',
        TSHcy: 'Ћ',
        TScy: 'Ц',
        Tab: '	',
        Tau: 'Τ',
        Tcaron: 'Ť',
        Tcedil: 'Ţ',
        Tcy: 'Т',
        Tfr: '𝔗',
        Therefore: '∴',
        Theta: 'Θ',
        ThickSpace: '  ',
        ThinSpace: ' ',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        Topf: '𝕋',
        TripleDot: '⃛',
        Tscr: '𝒯',
        Tstrok: 'Ŧ',
        Uacut: 'Ú',
        Uacute: 'Ú',
        Uarr: '↟',
        Uarrocir: '⥉',
        Ubrcy: 'Ў',
        Ubreve: 'Ŭ',
        Ucir: 'Û',
        Ucirc: 'Û',
        Ucy: 'У',
        Udblac: 'Ű',
        Ufr: '𝔘',
        Ugrav: 'Ù',
        Ugrave: 'Ù',
        Umacr: 'Ū',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        Uogon: 'Ų',
        Uopf: '𝕌',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        Uparrow: '⇑',
        Updownarrow: '⇕',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        Upsi: 'ϒ',
        Upsilon: 'Υ',
        Uring: 'Ů',
        Uscr: '𝒰',
        Utilde: 'Ũ',
        Uum: 'Ü',
        Uuml: 'Ü',
        VDash: '⊫',
        Vbar: '⫫',
        Vcy: 'В',
        Vdash: '⊩',
        Vdashl: '⫦',
        Vee: '⋁',
        Verbar: '‖',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        Vfr: '𝔙',
        Vopf: '𝕍',
        Vscr: '𝒱',
        Vvdash: '⊪',
        Wcirc: 'Ŵ',
        Wedge: '⋀',
        Wfr: '𝔚',
        Wopf: '𝕎',
        Wscr: '𝒲',
        Xfr: '𝔛',
        Xi: 'Ξ',
        Xopf: '𝕏',
        Xscr: '𝒳',
        YAcy: 'Я',
        YIcy: 'Ї',
        YUcy: 'Ю',
        Yacut: 'Ý',
        Yacute: 'Ý',
        Ycirc: 'Ŷ',
        Ycy: 'Ы',
        Yfr: '𝔜',
        Yopf: '𝕐',
        Yscr: '𝒴',
        Yuml: 'Ÿ',
        ZHcy: 'Ж',
        Zacute: 'Ź',
        Zcaron: 'Ž',
        Zcy: 'З',
        Zdot: 'Ż',
        ZeroWidthSpace: '​',
        Zeta: 'Ζ',
        Zfr: 'ℨ',
        Zopf: 'ℤ',
        Zscr: '𝒵',
        aacut: 'á',
        aacute: 'á',
        abreve: 'ă',
        ac: '∾',
        acE: '∾̳',
        acd: '∿',
        acir: 'â',
        acirc: 'â',
        acut: '´',
        acute: '´',
        acy: 'а',
        aeli: 'æ',
        aelig: 'æ',
        af: '⁡',
        afr: '𝔞',
        agrav: 'à',
        agrave: 'à',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        amacr: 'ā',
        amalg: '⨿',
        am: '&',
        amp: '&',
        and: '∧',
        andand: '⩕',
        andd: '⩜',
        andslope: '⩘',
        andv: '⩚',
        ang: '∠',
        ange: '⦤',
        angle: '∠',
        angmsd: '∡',
        angmsdaa: '⦨',
        angmsdab: '⦩',
        angmsdac: '⦪',
        angmsdad: '⦫',
        angmsdae: '⦬',
        angmsdaf: '⦭',
        angmsdag: '⦮',
        angmsdah: '⦯',
        angrt: '∟',
        angrtvb: '⊾',
        angrtvbd: '⦝',
        angsph: '∢',
        angst: 'Å',
        angzarr: '⍼',
        aogon: 'ą',
        aopf: '𝕒',
        ap: '≈',
        apE: '⩰',
        apacir: '⩯',
        ape: '≊',
        apid: '≋',
        apos: "'",
        approx: '≈',
        approxeq: '≊',
        arin: 'å',
        aring: 'å',
        ascr: '𝒶',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atild: 'ã',
        atilde: 'ã',
        aum: 'ä',
        auml: 'ä',
        awconint: '∳',
        awint: '⨑',
        bNot: '⫭',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        barvee: '⊽',
        barwed: '⌅',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        beta: 'β',
        beth: 'ℶ',
        between: '≬',
        bfr: '𝔟',
        bigcap: '⋂',
        bigcirc: '◯',
        bigcup: '⋃',
        bigodot: '⨀',
        bigoplus: '⨁',
        bigotimes: '⨂',
        bigsqcup: '⨆',
        bigstar: '★',
        bigtriangledown: '▽',
        bigtriangleup: '△',
        biguplus: '⨄',
        bigvee: '⋁',
        bigwedge: '⋀',
        bkarow: '⤍',
        blacklozenge: '⧫',
        blacksquare: '▪',
        blacktriangle: '▴',
        blacktriangledown: '▾',
        blacktriangleleft: '◂',
        blacktriangleright: '▸',
        blank: '␣',
        blk12: '▒',
        blk14: '░',
        blk34: '▓',
        block: '█',
        bne: '=⃥',
        bnequiv: '≡⃥',
        bnot: '⌐',
        bopf: '𝕓',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxDL: '╗',
        boxDR: '╔',
        boxDl: '╖',
        boxDr: '╓',
        boxH: '═',
        boxHD: '╦',
        boxHU: '╩',
        boxHd: '╤',
        boxHu: '╧',
        boxUL: '╝',
        boxUR: '╚',
        boxUl: '╜',
        boxUr: '╙',
        boxV: '║',
        boxVH: '╬',
        boxVL: '╣',
        boxVR: '╠',
        boxVh: '╫',
        boxVl: '╢',
        boxVr: '╟',
        boxbox: '⧉',
        boxdL: '╕',
        boxdR: '╒',
        boxdl: '┐',
        boxdr: '┌',
        boxh: '─',
        boxhD: '╥',
        boxhU: '╨',
        boxhd: '┬',
        boxhu: '┴',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxuL: '╛',
        boxuR: '╘',
        boxul: '┘',
        boxur: '└',
        boxv: '│',
        boxvH: '╪',
        boxvL: '╡',
        boxvR: '╞',
        boxvh: '┼',
        boxvl: '┤',
        boxvr: '├',
        bprime: '‵',
        breve: '˘',
        brvba: '¦',
        brvbar: '¦',
        bscr: '𝒷',
        bsemi: '⁏',
        bsim: '∽',
        bsime: '⋍',
        bsol: '\\',
        bsolb: '⧅',
        bsolhsub: '⟈',
        bull: '•',
        bullet: '•',
        bump: '≎',
        bumpE: '⪮',
        bumpe: '≏',
        bumpeq: '≏',
        cacute: 'ć',
        cap: '∩',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        ccaps: '⩍',
        ccaron: 'č',
        ccedi: 'ç',
        ccedil: 'ç',
        ccirc: 'ĉ',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        cedi: '¸',
        cedil: '¸',
        cemptyv: '⦲',
        cen: '¢',
        cent: '¢',
        centerdot: '·',
        cfr: '𝔠',
        chcy: 'ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        cir: '○',
        cirE: '⧃',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledR: '®',
        circledS: 'Ⓢ',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        cire: '≗',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
        colone: '≔',
        coloneq: '≔',
        comma: ',',
        commat: '@',
        comp: '∁',
        compfn: '∘',
        complement: '∁',
        complexes: 'ℂ',
        cong: '≅',
        congdot: '⩭',
        conint: '∮',
        copf: '𝕔',
        coprod: '∐',
        cop: '©',
        copy: '©',
        copysr: '℗',
        crarr: '↵',
        cross: '✗',
        cscr: '𝒸',
        csub: '⫏',
        csube: '⫑',
        csup: '⫐',
        csupe: '⫒',
        ctdot: '⋯',
        cudarrl: '⤸',
        cudarrr: '⤵',
        cuepr: '⋞',
        cuesc: '⋟',
        cularr: '↶',
        cularrp: '⤽',
        cup: '∪',
        cupbrcap: '⩈',
        cupcap: '⩆',
        cupcup: '⩊',
        cupdot: '⊍',
        cupor: '⩅',
        cups: '∪︀',
        curarr: '↷',
        curarrm: '⤼',
        curlyeqprec: '⋞',
        curlyeqsucc: '⋟',
        curlyvee: '⋎',
        curlywedge: '⋏',
        curre: '¤',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dArr: '⇓',
        dHar: '⥥',
        dagger: '†',
        daleth: 'ℸ',
        darr: '↓',
        dash: '‐',
        dashv: '⊣',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        dcy: 'д',
        dd: 'ⅆ',
        ddagger: '‡',
        ddarr: '⇊',
        ddotseq: '⩷',
        de: '°',
        deg: '°',
        delta: 'δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        dharl: '⇃',
        dharr: '⇂',
        diam: '⋄',
        diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divid: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        dot: '˙',
        doteq: '≐',
        doteqdot: '≑',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        downarrow: '↓',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        dscy: 'ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        dzigrarr: '⟿',
        eDDot: '⩷',
        eDot: '≑',
        eacut: 'é',
        eacute: 'é',
        easter: '⩮',
        ecaron: 'ě',
        ecir: 'ê',
        ecirc: 'ê',
        ecolon: '≕',
        ecy: 'э',
        edot: 'ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        eg: '⪚',
        egrav: 'è',
        egrave: 'è',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        empty: '∅',
        emptyset: '∅',
        emptyv: '∅',
        emsp13: ' ',
        emsp14: ' ',
        emsp: ' ',
        eng: 'ŋ',
        ensp: ' ',
        eogon: 'ę',
        eopf: '𝕖',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        equals: '=',
        equest: '≟',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erDot: '≓',
        erarr: '⥱',
        escr: 'ℯ',
        esdot: '≐',
        esim: '≂',
        eta: 'η',
        et: 'ð',
        eth: 'ð',
        eum: 'ë',
        euml: 'ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        filig: 'ﬁ',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        forall: '∀',
        fork: '⋔',
        forkv: '⫙',
        fpartint: '⨍',
        frac1: '¼',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac3: '¾',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        gE: '≧',
        gEl: '⪌',
        gacute: 'ǵ',
        gamma: 'γ',
        gammad: 'ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        gcirc: 'ĝ',
        gcy: 'г',
        gdot: 'ġ',
        ge: '≥',
        gel: '⋛',
        geq: '≥',
        geqq: '≧',
        geqslant: '⩾',
        ges: '⩾',
        gescc: '⪩',
        gesdot: '⪀',
        gesdoto: '⪂',
        gesdotol: '⪄',
        gesl: '⋛︀',
        gesles: '⪔',
        gfr: '𝔤',
        gg: '≫',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        gl: '≷',
        glE: '⪒',
        gla: '⪥',
        glj: '⪤',
        gnE: '≩',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        grave: '`',
        gscr: 'ℊ',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        g: '>',
        gt: '>',
        gtcc: '⪧',
        gtcir: '⩺',
        gtdot: '⋗',
        gtlPar: '⦕',
        gtquest: '⩼',
        gtrapprox: '⪆',
        gtrarr: '⥸',
        gtrdot: '⋗',
        gtreqless: '⋛',
        gtreqqless: '⪌',
        gtrless: '≷',
        gtrsim: '≳',
        gvertneqq: '≩︀',
        gvnE: '≩︀',
        hArr: '⇔',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        harr: '↔',
        harrcir: '⥈',
        harrw: '↭',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        horbar: '―',
        hscr: '𝒽',
        hslash: 'ℏ',
        hstrok: 'ħ',
        hybull: '⁃',
        hyphen: '‐',
        iacut: 'í',
        iacute: 'í',
        ic: '⁣',
        icir: 'î',
        icirc: 'î',
        icy: 'и',
        iecy: 'е',
        iexc: '¡',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        igrav: 'ì',
        igrave: 'ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        imacr: 'ī',
        image: 'ℑ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        intcal: '⊺',
        integers: 'ℤ',
        intercal: '⊺',
        intlarhk: '⨗',
        intprod: '⨼',
        iocy: 'ё',
        iogon: 'į',
        iopf: '𝕚',
        iota: 'ι',
        iprod: '⨼',
        iques: '¿',
        iquest: '¿',
        iscr: '𝒾',
        isin: '∈',
        isinE: '⋹',
        isindot: '⋵',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        iukcy: 'і',
        ium: 'ï',
        iuml: 'ï',
        jcirc: 'ĵ',
        jcy: 'й',
        jfr: '𝔧',
        jmath: 'ȷ',
        jopf: '𝕛',
        jscr: '𝒿',
        jsercy: 'ј',
        jukcy: 'є',
        kappa: 'κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        kcy: 'к',
        kfr: '𝔨',
        kgreen: 'ĸ',
        khcy: 'х',
        kjcy: 'ќ',
        kopf: '𝕜',
        kscr: '𝓀',
        lAarr: '⇚',
        lArr: '⇐',
        lAtail: '⤛',
        lBarr: '⤎',
        lE: '≦',
        lEg: '⪋',
        lHar: '⥢',
        lacute: 'ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        lang: '⟨',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        laqu: '«',
        laquo: '«',
        larr: '←',
        larrb: '⇤',
        larrbfs: '⤟',
        larrfs: '⤝',
        larrhk: '↩',
        larrlp: '↫',
        larrpl: '⤹',
        larrsim: '⥳',
        larrtl: '↢',
        lat: '⪫',
        latail: '⤙',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        lcedil: 'ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        leftarrow: '←',
        leftarrowtail: '↢',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        leftthreetimes: '⋋',
        leg: '⋚',
        leq: '≤',
        leqq: '≦',
        leqslant: '⩽',
        les: '⩽',
        lescc: '⪨',
        lesdot: '⩿',
        lesdoto: '⪁',
        lesdotor: '⪃',
        lesg: '⋚︀',
        lesges: '⪓',
        lessapprox: '⪅',
        lessdot: '⋖',
        lesseqgtr: '⋚',
        lesseqqgtr: '⪋',
        lessgtr: '≶',
        lesssim: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        lg: '≶',
        lgE: '⪑',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        ll: '≪',
        llarr: '⇇',
        llcorner: '⌞',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnE: '≨',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        longleftrightarrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
        loz: '◊',
        lozenge: '◊',
        lozf: '⧫',
        lpar: '(',
        lparlt: '⦓',
        lrarr: '⇆',
        lrcorner: '⌟',
        lrhar: '⇋',
        lrhard: '⥭',
        lrm: '‎',
        lrtri: '⊿',
        lsaquo: '‹',
        lscr: '𝓁',
        lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        l: '<',
        lt: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltrPar: '⦖',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        mDDot: '∺',
        mac: '¯',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        mdash: '—',
        measuredangle: '∡',
        mfr: '𝔪',
        mho: '℧',
        micr: 'µ',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middo: '·',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        mp: '∓',
        mscr: '𝓂',
        mstpos: '∾',
        mu: 'μ',
        multimap: '⊸',
        mumap: '⊸',
        nGg: '⋙̸',
        nGt: '≫⃒',
        nGtv: '≫̸',
        nLeftarrow: '⇍',
        nLeftrightarrow: '⇎',
        nLl: '⋘̸',
        nLt: '≪⃒',
        nLtv: '≪̸',
        nRightarrow: '⇏',
        nVDash: '⊯',
        nVdash: '⊮',
        nabla: '∇',
        nacute: 'ń',
        nang: '∠⃒',
        nap: '≉',
        napE: '⩰̸',
        napid: '≋̸',
        napos: 'ŉ',
        napprox: '≉',
        natur: '♮',
        natural: '♮',
        naturals: 'ℕ',
        nbs: ' ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        ncedil: 'ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        ndash: '–',
        ne: '≠',
        neArr: '⇗',
        nearhk: '⤤',
        nearr: '↗',
        nearrow: '↗',
        nedot: '≐̸',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        ngE: '≧̸',
        nge: '≱',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        ngsim: '≵',
        ngt: '≯',
        ngtr: '≯',
        nhArr: '⇎',
        nharr: '↮',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        nlArr: '⇍',
        nlE: '≦̸',
        nlarr: '↚',
        nldr: '‥',
        nle: '≰',
        nleftarrow: '↚',
        nleftrightarrow: '↮',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nlsim: '≴',
        nlt: '≮',
        nltri: '⋪',
        nltrie: '⋬',
        nmid: '∤',
        nopf: '𝕟',
        no: '¬',
        not: '¬',
        notin: '∉',
        notinE: '⋹̸',
        notindot: '⋵̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
        npar: '∦',
        nparallel: '∦',
        nparsl: '⫽⃥',
        npart: '∂̸',
        npolint: '⨔',
        npr: '⊀',
        nprcue: '⋠',
        npre: '⪯̸',
        nprec: '⊀',
        npreceq: '⪯̸',
        nrArr: '⇏',
        nrarr: '↛',
        nrarrc: '⤳̸',
        nrarrw: '↝̸',
        nrightarrow: '↛',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
        nscr: '𝓃',
        nshortmid: '∤',
        nshortparallel: '∦',
        nsim: '≁',
        nsime: '≄',
        nsimeq: '≄',
        nsmid: '∤',
        nspar: '∦',
        nsqsube: '⋢',
        nsqsupe: '⋣',
        nsub: '⊄',
        nsubE: '⫅̸',
        nsube: '⊈',
        nsubset: '⊂⃒',
        nsubseteq: '⊈',
        nsubseteqq: '⫅̸',
        nsucc: '⊁',
        nsucceq: '⪰̸',
        nsup: '⊅',
        nsupE: '⫆̸',
        nsupe: '⊉',
        nsupset: '⊃⃒',
        nsupseteq: '⊉',
        nsupseteqq: '⫆̸',
        ntgl: '≹',
        ntild: 'ñ',
        ntilde: 'ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvDash: '⊭',
        nvHarr: '⤄',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwArr: '⇖',
        nwarhk: '⤣',
        nwarr: '↖',
        nwarrow: '↖',
        nwnear: '⤧',
        oS: 'Ⓢ',
        oacut: 'ó',
        oacute: 'ó',
        oast: '⊛',
        ocir: 'ô',
        ocirc: 'ô',
        ocy: 'о',
        odash: '⊝',
        odblac: 'ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        ofcir: '⦿',
        ofr: '𝔬',
        ogon: '˛',
        ograv: 'ò',
        ograve: 'ò',
        ogt: '⧁',
        ohbar: '⦵',
        ohm: 'Ω',
        oint: '∮',
        olarr: '↺',
        olcir: '⦾',
        olcross: '⦻',
        oline: '‾',
        olt: '⧀',
        omacr: 'ō',
        omega: 'ω',
        omicron: 'ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        opar: '⦷',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        orarr: '↻',
        ord: 'º',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oscr: 'ℴ',
        oslas: 'ø',
        oslash: 'ø',
        osol: '⊘',
        otild: 'õ',
        otilde: 'õ',
        otimes: '⊗',
        otimesas: '⨶',
        oum: 'ö',
        ouml: 'ö',
        ovbar: '⌽',
        par: '¶',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        pcy: 'п',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        phi: 'φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
        pi: 'π',
        pitchfork: '⋔',
        piv: 'ϖ',
        planck: 'ℏ',
        planckh: 'ℎ',
        plankv: 'ℏ',
        plus: '+',
        plusacir: '⨣',
        plusb: '⊞',
        pluscir: '⨢',
        plusdo: '∔',
        plusdu: '⨥',
        pluse: '⩲',
        plusm: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        pointint: '⨕',
        popf: '𝕡',
        poun: '£',
        pound: '£',
        pr: '≺',
        prE: '⪳',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        primes: 'ℙ',
        prnE: '⪵',
        prnap: '⪹',
        prnsim: '⋨',
        prod: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        psi: 'ψ',
        puncsp: ' ',
        qfr: '𝔮',
        qint: '⨌',
        qopf: '𝕢',
        qprime: '⁗',
        qscr: '𝓆',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quo: '"',
        quot: '"',
        rAarr: '⇛',
        rArr: '⇒',
        rAtail: '⤜',
        rBarr: '⤏',
        rHar: '⥤',
        race: '∽̱',
        racute: 'ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raqu: '»',
        raquo: '»',
        rarr: '→',
        rarrap: '⥵',
        rarrb: '⇥',
        rarrbfs: '⤠',
        rarrc: '⤳',
        rarrfs: '⤞',
        rarrhk: '↪',
        rarrlp: '↬',
        rarrpl: '⥅',
        rarrsim: '⥴',
        rarrtl: '↣',
        rarrw: '↝',
        ratail: '⤚',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        rcedil: 'ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        re: '®',
        reg: '®',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        rhov: 'ϱ',
        rightarrow: '→',
        rightarrowtail: '↣',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        rightthreetimes: '⋌',
        ring: '˚',
        risingdotseq: '≓',
        rlarr: '⇄',
        rlhar: '⇌',
        rlm: '‏',
        rmoust: '⎱',
        rmoustache: '⎱',
        rnmid: '⫮',
        roang: '⟭',
        roarr: '⇾',
        robrk: '⟧',
        ropar: '⦆',
        ropf: '𝕣',
        roplus: '⨮',
        rotimes: '⨵',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        rsaquo: '›',
        rscr: '𝓇',
        rsh: '↱',
        rsqb: ']',
        rsquo: '’',
        rsquor: '’',
        rthree: '⋌',
        rtimes: '⋊',
        rtri: '▹',
        rtrie: '⊵',
        rtrif: '▸',
        rtriltri: '⧎',
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        sbquo: '‚',
        sc: '≻',
        scE: '⪴',
        scap: '⪸',
        scaron: 'š',
        sccue: '≽',
        sce: '⪰',
        scedil: 'ş',
        scirc: 'ŝ',
        scnE: '⪶',
        scnap: '⪺',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        seArr: '⇘',
        searhk: '⤥',
        searr: '↘',
        searrow: '↘',
        sec: '§',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        shcy: 'ш',
        shortmid: '∣',
        shortparallel: '∥',
        sh: '­',
        shy: '­',
        sigma: 'σ',
        sigmaf: 'ς',
        sigmav: 'ς',
        sim: '∼',
        simdot: '⩪',
        sime: '≃',
        simeq: '≃',
        simg: '⪞',
        simgE: '⪠',
        siml: '⪝',
        simlE: '⪟',
        simne: '≆',
        simplus: '⨤',
        simrarr: '⥲',
        slarr: '←',
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        subE: '⫅',
        subdot: '⪽',
        sube: '⊆',
        subedot: '⫃',
        submult: '⫁',
        subnE: '⫋',
        subne: '⊊',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        subseteq: '⊆',
        subseteqq: '⫅',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        sum: '∑',
        sung: '♪',
        sup: '⊃',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supE: '⫆',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supedot: '⫄',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supnE: '⫌',
        supne: '⊋',
        supplus: '⫀',
        supset: '⊃',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swArr: '⇙',
        swarhk: '⤦',
        swarr: '↙',
        swarrow: '↙',
        swnwar: '⤪',
        szli: 'ß',
        szlig: 'ß',
        target: '⌖',
        tau: 'τ',
        tbrk: '⎴',
        tcaron: 'ť',
        tcedil: 'ţ',
        tcy: 'т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        there4: '∴',
        therefore: '∴',
        theta: 'θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        thinsp: ' ',
        thkap: '≈',
        thksim: '∼',
        thor: 'þ',
        thorn: 'þ',
        tilde: '˜',
        time: '×',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
        trade: '™',
        triangle: '▵',
        triangledown: '▿',
        triangleleft: '◃',
        trianglelefteq: '⊴',
        triangleq: '≜',
        triangleright: '▹',
        trianglerighteq: '⊵',
        tridot: '◬',
        trie: '≜',
        triminus: '⨺',
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        tscy: 'ц',
        tshcy: 'ћ',
        tstrok: 'ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uArr: '⇑',
        uHar: '⥣',
        uacut: 'ú',
        uacute: 'ú',
        uarr: '↑',
        ubrcy: 'ў',
        ubreve: 'ŭ',
        ucir: 'û',
        ucirc: 'û',
        ucy: 'у',
        udarr: '⇅',
        udblac: 'ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        ugrav: 'ù',
        ugrave: 'ù',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        um: '¨',
        uml: '¨',
        uogon: 'ų',
        uopf: '𝕦',
        uparrow: '↑',
        updownarrow: '↕',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        upsi: 'υ',
        upsih: 'ϒ',
        upsilon: 'υ',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        urtri: '◹',
        uscr: '𝓊',
        utdot: '⋰',
        utilde: 'ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uum: 'ü',
        uuml: 'ü',
        uwangle: '⦧',
        vArr: '⇕',
        vBar: '⫨',
        vBarv: '⫩',
        vDash: '⊨',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
        varr: '↕',
        varrho: 'ϱ',
        varsigma: 'ς',
        varsubsetneq: '⊊︀',
        varsubsetneqq: '⫋︀',
        varsupsetneq: '⊋︀',
        varsupsetneqq: '⫌︀',
        vartheta: 'ϑ',
        vartriangleleft: '⊲',
        vartriangleright: '⊳',
        vcy: 'в',
        vdash: '⊢',
        vee: '∨',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        vert: '|',
        vfr: '𝔳',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        vsubnE: '⫋︀',
        vsubne: '⊊︀',
        vsupnE: '⫌︀',
        vsupne: '⊋︀',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        wedbar: '⩟',
        wedge: '∧',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        wopf: '𝕨',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        xhArr: '⟺',
        xharr: '⟷',
        xi: 'ξ',
        xlArr: '⟸',
        xlarr: '⟵',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        xoplus: '⨁',
        xotime: '⨂',
        xrArr: '⟹',
        xrarr: '⟶',
        xscr: '𝓍',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacut: 'ý',
        yacute: 'ý',
        yacy: 'я',
        ycirc: 'ŷ',
        ycy: 'ы',
        ye: '¥',
        yen: '¥',
        yfr: '𝔶',
        yicy: 'ї',
        yopf: '𝕪',
        yscr: '𝓎',
        yucy: 'ю',
        yum: 'ÿ',
        yuml: 'ÿ',
        zacute: 'ź',
        zcaron: 'ž',
        zcy: 'з',
        zdot: 'ż',
        zeetrf: 'ℨ',
        zeta: 'ζ',
        zfr: '𝔷',
        zhcy: 'ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        zscr: '𝓏',
        zwj: '‍',
        zwnj: '‌'
      }
    }
  }),
  Ad = Z({
    '../../node_modules/parse-entities/decode-entity.js'(e, t) {
      var r = xd()
      t.exports = o
      var n = {}.hasOwnProperty
      function o(l) {
        return n.call(r, l) ? r[l] : !1
      }
    }
  }),
  wd = Z({
    '../../node_modules/parse-entities/index.js'(e, t) {
      var r = hd(),
        n = yd(),
        o = hs(),
        l = bd(),
        i = Ed(),
        u = Ad()
      t.exports = K
      var s = {}.hasOwnProperty,
        c = String.fromCharCode,
        d = Function.prototype,
        g = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0
        },
        h = 9,
        p = 10,
        m = 12,
        f = 32,
        E = 38,
        b = 59,
        x = 60,
        y = 61,
        v = 35,
        A = 88,
        w = 120,
        k = 65533,
        S = 'named',
        O = 'hexadecimal',
        T = 'decimal',
        R = {}
      ;(R[O] = 16), (R[T] = 10)
      var D = {}
      ;(D[S] = i), (D[T] = o), (D[O] = l)
      var F = 1,
        j = 2,
        L = 3,
        M = 4,
        H = 5,
        P = 6,
        $ = 7,
        N = {}
      ;(N[F] = 'Named character references must be terminated by a semicolon'),
        (N[j] = 'Numeric character references must be terminated by a semicolon'),
        (N[L] = 'Named character references cannot be empty'),
        (N[M] = 'Numeric character references cannot be empty'),
        (N[H] = 'Named character references must be known'),
        (N[P] = 'Numeric character references cannot be disallowed'),
        (N[$] = 'Numeric character references cannot be outside the permissible Unicode range')
      function K(I, V) {
        var z = {},
          ie,
          he
        V || (V = {})
        for (he in g) (ie = V[he]), (z[he] = ie ?? g[he])
        return (
          (z.position.indent || z.position.start) &&
            ((z.indent = z.position.indent || []), (z.position = z.position.start)),
          re(I, z)
        )
      }
      function re(I, V) {
        var z = V.additional,
          ie = V.nonTerminated,
          he = V.text,
          at = V.reference,
          Re = V.warning,
          Ze = V.textContext,
          B = V.referenceContext,
          Ie = V.warningContext,
          Pe = V.position,
          Et = V.indent || [],
          Mt = I.length,
          Ve = 0,
          Dr = -1,
          ye = Pe.column || 1,
          xt = Pe.line || 1,
          qe = '',
          Bt = [],
          ze,
          $t,
          Ue,
          pe,
          je,
          se,
          ne,
          We,
          Lr,
          Ln,
          At,
          ar,
          wt,
          ot,
          Vo,
          or,
          Mr,
          Ge,
          ue
        for (typeof z == 'string' && (z = z.charCodeAt(0)), or = lr(), We = Re ? Hc : d, Ve--, Mt++; ++Ve < Mt; )
          if ((je === p && (ye = Et[Dr] || 1), (je = I.charCodeAt(Ve)), je === E)) {
            if (
              ((ne = I.charCodeAt(Ve + 1)),
              ne === h || ne === p || ne === m || ne === f || ne === E || ne === x || ne !== ne || (z && ne === z))
            ) {
              ;(qe += c(je)), ye++
              continue
            }
            for (
              wt = Ve + 1,
                ar = wt,
                ue = wt,
                ne === v
                  ? ((ue = ++ar), (ne = I.charCodeAt(ue)), ne === A || ne === w ? ((ot = O), (ue = ++ar)) : (ot = T))
                  : (ot = S),
                ze = '',
                At = '',
                pe = '',
                Vo = D[ot],
                ue--;
              ++ue < Mt && ((ne = I.charCodeAt(ue)), !!Vo(ne));

            )
              (pe += c(ne)), ot === S && s.call(r, pe) && ((ze = pe), (At = r[pe]))
            ;(Ue = I.charCodeAt(ue) === b),
              Ue && (ue++, ($t = ot === S ? u(pe) : !1), $t && ((ze = pe), (At = $t))),
              (Ge = 1 + ue - wt),
              (!Ue && !ie) ||
                (pe
                  ? ot === S
                    ? (Ue && !At
                        ? We(H, 1)
                        : (ze !== pe && ((ue = ar + ze.length), (Ge = 1 + ue - ar), (Ue = !1)),
                          Ue ||
                            ((Lr = ze ? F : L),
                            V.attribute
                              ? ((ne = I.charCodeAt(ue)),
                                ne === y ? (We(Lr, Ge), (At = null)) : i(ne) ? (At = null) : We(Lr, Ge))
                              : We(Lr, Ge))),
                      (se = At))
                    : (Ue || We(j, Ge),
                      (se = parseInt(pe, R[ot])),
                      G(se)
                        ? (We($, Ge), (se = c(k)))
                        : se in n
                        ? (We(P, Ge), (se = n[se]))
                        : ((Ln = ''),
                          J(se) && We(P, Ge),
                          se > 65535 && ((se -= 65536), (Ln += c((se >>> 10) | 55296)), (se = 56320 | (se & 1023))),
                          (se = Ln + c(se))))
                  : ot !== S && We(M, Ge)),
              se
                ? (qo(),
                  (or = lr()),
                  (Ve = ue - 1),
                  (ye += ue - wt + 1),
                  Bt.push(se),
                  (Mr = lr()),
                  Mr.offset++,
                  at && at.call(B, se, { start: or, end: Mr }, I.slice(wt - 1, ue)),
                  (or = Mr))
                : ((pe = I.slice(wt - 1, ue)), (qe += pe), (ye += pe.length), (Ve = ue - 1))
          } else je === 10 && (xt++, Dr++, (ye = 0)), je === je ? ((qe += c(je)), ye++) : qo()
        return Bt.join('')
        function lr() {
          return { line: xt, column: ye, offset: Ve + (Pe.offset || 0) }
        }
        function Hc(zo, Uo) {
          var Mn = lr()
          ;(Mn.column += Uo), (Mn.offset += Uo), Re.call(Ie, N[zo], Mn, zo)
        }
        function qo() {
          qe && (Bt.push(qe), he && he.call(Ze, qe, { start: or, end: lr() }), (qe = ''))
        }
      }
      function G(I) {
        return (I >= 55296 && I <= 57343) || I > 1114111
      }
      function J(I) {
        return (
          (I >= 1 && I <= 8) ||
          I === 11 ||
          (I >= 13 && I <= 31) ||
          (I >= 127 && I <= 159) ||
          (I >= 64976 && I <= 65007) ||
          (I & 65535) === 65535 ||
          (I & 65535) === 65534
        )
      }
    }
  }),
  Cd = Z({
    '../../node_modules/refractor/node_modules/prismjs/components/prism-core.js'(e, t) {
      var r =
          typeof window < 'u'
            ? window
            : typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
            ? self
            : {},
        n = (function (o) {
          var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            i = 0,
            u = {},
            s = {
              manual: o.Prism && o.Prism.manual,
              disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler,
              util: {
                encode: function y(v) {
                  return v instanceof c
                    ? new c(v.type, y(v.content), v.alias)
                    : Array.isArray(v)
                    ? v.map(y)
                    : v
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ')
                },
                type: function (y) {
                  return Object.prototype.toString.call(y).slice(8, -1)
                },
                objId: function (y) {
                  return y.__id || Object.defineProperty(y, '__id', { value: ++i }), y.__id
                },
                clone: function y(v, A) {
                  A = A || {}
                  var w, k
                  switch (s.util.type(v)) {
                    case 'Object':
                      if (((k = s.util.objId(v)), A[k])) return A[k]
                      ;(w = {}), (A[k] = w)
                      for (var S in v) v.hasOwnProperty(S) && (w[S] = y(v[S], A))
                      return w
                    case 'Array':
                      return (
                        (k = s.util.objId(v)),
                        A[k]
                          ? A[k]
                          : ((w = []),
                            (A[k] = w),
                            v.forEach(function (O, T) {
                              w[T] = y(O, A)
                            }),
                            w)
                      )
                    default:
                      return v
                  }
                },
                getLanguage: function (y) {
                  for (; y; ) {
                    var v = l.exec(y.className)
                    if (v) return v[1].toLowerCase()
                    y = y.parentElement
                  }
                  return 'none'
                },
                setLanguage: function (y, v) {
                  ;(y.className = y.className.replace(RegExp(l, 'gi'), '')), y.classList.add('language-' + v)
                },
                currentScript: function () {
                  if (typeof document > 'u') return null
                  if ('currentScript' in document && 1 < 2) return document.currentScript
                  try {
                    throw new Error()
                  } catch (w) {
                    var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1]
                    if (y) {
                      var v = document.getElementsByTagName('script')
                      for (var A in v) if (v[A].src == y) return v[A]
                    }
                    return null
                  }
                },
                isActive: function (y, v, A) {
                  for (var w = 'no-' + v; y; ) {
                    var k = y.classList
                    if (k.contains(v)) return !0
                    if (k.contains(w)) return !1
                    y = y.parentElement
                  }
                  return !!A
                }
              },
              languages: {
                plain: u,
                plaintext: u,
                text: u,
                txt: u,
                extend: function (y, v) {
                  var A = s.util.clone(s.languages[y])
                  for (var w in v) A[w] = v[w]
                  return A
                },
                insertBefore: function (y, v, A, w) {
                  w = w || s.languages
                  var k = w[y],
                    S = {}
                  for (var O in k)
                    if (k.hasOwnProperty(O)) {
                      if (O == v) for (var T in A) A.hasOwnProperty(T) && (S[T] = A[T])
                      A.hasOwnProperty(O) || (S[O] = k[O])
                    }
                  var R = w[y]
                  return (
                    (w[y] = S),
                    s.languages.DFS(s.languages, function (D, F) {
                      F === R && D != y && (this[D] = S)
                    }),
                    S
                  )
                },
                DFS: function y(v, A, w, k) {
                  k = k || {}
                  var S = s.util.objId
                  for (var O in v)
                    if (v.hasOwnProperty(O)) {
                      A.call(v, O, v[O], w || O)
                      var T = v[O],
                        R = s.util.type(T)
                      R === 'Object' && !k[S(T)]
                        ? ((k[S(T)] = !0), y(T, A, null, k))
                        : R === 'Array' && !k[S(T)] && ((k[S(T)] = !0), y(T, A, O, k))
                    }
                }
              },
              plugins: {},
              highlightAll: function (y, v) {
                s.highlightAllUnder(document, y, v)
              },
              highlightAllUnder: function (y, v, A) {
                var w = {
                  callback: A,
                  container: y,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                }
                s.hooks.run('before-highlightall', w),
                  (w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector))),
                  s.hooks.run('before-all-elements-highlight', w)
                for (var k = 0, S; (S = w.elements[k++]); ) s.highlightElement(S, v === !0, w.callback)
              },
              highlightElement: function (y, v, A) {
                var w = s.util.getLanguage(y),
                  k = s.languages[w]
                s.util.setLanguage(y, w)
                var S = y.parentElement
                S && S.nodeName.toLowerCase() === 'pre' && s.util.setLanguage(S, w)
                var O = y.textContent,
                  T = { element: y, language: w, grammar: k, code: O }
                function R(F) {
                  ;(T.highlightedCode = F),
                    s.hooks.run('before-insert', T),
                    (T.element.innerHTML = T.highlightedCode),
                    s.hooks.run('after-highlight', T),
                    s.hooks.run('complete', T),
                    A && A.call(T.element)
                }
                if (
                  (s.hooks.run('before-sanity-check', T),
                  (S = T.element.parentElement),
                  S &&
                    S.nodeName.toLowerCase() === 'pre' &&
                    !S.hasAttribute('tabindex') &&
                    S.setAttribute('tabindex', '0'),
                  !T.code)
                ) {
                  s.hooks.run('complete', T), A && A.call(T.element)
                  return
                }
                if ((s.hooks.run('before-highlight', T), !T.grammar)) {
                  R(s.util.encode(T.code))
                  return
                }
                if (v && o.Worker) {
                  var D = new Worker(s.filename)
                  ;(D.onmessage = function (F) {
                    R(F.data)
                  }),
                    D.postMessage(JSON.stringify({ language: T.language, code: T.code, immediateClose: !0 }))
                } else R(s.highlight(T.code, T.grammar, T.language))
              },
              highlight: function (y, v, A) {
                var w = { code: y, grammar: v, language: A }
                if ((s.hooks.run('before-tokenize', w), !w.grammar))
                  throw new Error('The language "' + w.language + '" has no grammar.')
                return (
                  (w.tokens = s.tokenize(w.code, w.grammar)),
                  s.hooks.run('after-tokenize', w),
                  c.stringify(s.util.encode(w.tokens), w.language)
                )
              },
              tokenize: function (y, v) {
                var A = v.rest
                if (A) {
                  for (var w in A) v[w] = A[w]
                  delete v.rest
                }
                var k = new h()
                return p(k, k.head, y), g(y, k, v, k.head, 0), f(k)
              },
              hooks: {
                all: {},
                add: function (y, v) {
                  var A = s.hooks.all
                  ;(A[y] = A[y] || []), A[y].push(v)
                },
                run: function (y, v) {
                  var A = s.hooks.all[y]
                  if (!(!A || !A.length)) for (var w = 0, k; (k = A[w++]); ) k(v)
                }
              },
              Token: c
            }
          o.Prism = s
          function c(y, v, A, w) {
            ;(this.type = y), (this.content = v), (this.alias = A), (this.length = (w || '').length | 0)
          }
          c.stringify = function y(v, A) {
            if (typeof v == 'string') return v
            if (Array.isArray(v)) {
              var w = ''
              return (
                v.forEach(function (R) {
                  w += y(R, A)
                }),
                w
              )
            }
            var k = {
                type: v.type,
                content: y(v.content, A),
                tag: 'span',
                classes: ['token', v.type],
                attributes: {},
                language: A
              },
              S = v.alias
            S && (Array.isArray(S) ? Array.prototype.push.apply(k.classes, S) : k.classes.push(S)),
              s.hooks.run('wrap', k)
            var O = ''
            for (var T in k.attributes) O += ' ' + T + '="' + (k.attributes[T] || '').replace(/"/g, '&quot;') + '"'
            return '<' + k.tag + ' class="' + k.classes.join(' ') + '"' + O + '>' + k.content + '</' + k.tag + '>'
          }
          function d(y, v, A, w) {
            y.lastIndex = v
            var k = y.exec(A)
            if (k && w && k[1]) {
              var S = k[1].length
              ;(k.index += S), (k[0] = k[0].slice(S))
            }
            return k
          }
          function g(y, v, A, w, k, S) {
            for (var O in A)
              if (!(!A.hasOwnProperty(O) || !A[O])) {
                var T = A[O]
                T = Array.isArray(T) ? T : [T]
                for (var R = 0; R < T.length; ++R) {
                  if (S && S.cause == O + ',' + R) return
                  var D = T[R],
                    F = D.inside,
                    j = !!D.lookbehind,
                    L = !!D.greedy,
                    M = D.alias
                  if (L && !D.pattern.global) {
                    var H = D.pattern.toString().match(/[imsuy]*$/)[0]
                    D.pattern = RegExp(D.pattern.source, H + 'g')
                  }
                  for (
                    var P = D.pattern || D, $ = w.next, N = k;
                    $ !== v.tail && !(S && N >= S.reach);
                    N += $.value.length, $ = $.next
                  ) {
                    var K = $.value
                    if (v.length > y.length) return
                    if (!(K instanceof c)) {
                      var re = 1,
                        G
                      if (L) {
                        if (((G = d(P, N, y, j)), !G || G.index >= y.length)) break
                        var z = G.index,
                          J = G.index + G[0].length,
                          I = N
                        for (I += $.value.length; z >= I; ) ($ = $.next), (I += $.value.length)
                        if (((I -= $.value.length), (N = I), $.value instanceof c)) continue
                        for (var V = $; V !== v.tail && (I < J || typeof V.value == 'string'); V = V.next)
                          re++, (I += V.value.length)
                        re--, (K = y.slice(N, I)), (G.index -= N)
                      } else if (((G = d(P, 0, K, j)), !G)) continue
                      var z = G.index,
                        ie = G[0],
                        he = K.slice(0, z),
                        at = K.slice(z + ie.length),
                        Re = N + K.length
                      S && Re > S.reach && (S.reach = Re)
                      var Ze = $.prev
                      he && ((Ze = p(v, Ze, he)), (N += he.length)), m(v, Ze, re)
                      var B = new c(O, F ? s.tokenize(ie, F) : ie, M, ie)
                      if ((($ = p(v, Ze, B)), at && p(v, $, at), re > 1)) {
                        var Ie = { cause: O + ',' + R, reach: Re }
                        g(y, v, A, $.prev, N, Ie), S && Ie.reach > S.reach && (S.reach = Ie.reach)
                      }
                    }
                  }
                }
              }
          }
          function h() {
            var y = { value: null, prev: null, next: null },
              v = { value: null, prev: y, next: null }
            ;(y.next = v), (this.head = y), (this.tail = v), (this.length = 0)
          }
          function p(y, v, A) {
            var w = v.next,
              k = { value: A, prev: v, next: w }
            return (v.next = k), (w.prev = k), y.length++, k
          }
          function m(y, v, A) {
            for (var w = v.next, k = 0; k < A && w !== y.tail; k++) w = w.next
            ;(v.next = w), (w.prev = v), (y.length -= k)
          }
          function f(y) {
            for (var v = [], A = y.head.next; A !== y.tail; ) v.push(A.value), (A = A.next)
            return v
          }
          if (!o.document)
            return (
              o.addEventListener &&
                (s.disableWorkerMessageHandler ||
                  o.addEventListener(
                    'message',
                    function (y) {
                      var v = JSON.parse(y.data),
                        A = v.language,
                        w = v.code,
                        k = v.immediateClose
                      o.postMessage(s.highlight(w, s.languages[A], A)), k && o.close()
                    },
                    !1
                  )),
              s
            )
          var E = s.util.currentScript()
          E && ((s.filename = E.src), E.hasAttribute('data-manual') && (s.manual = !0))
          function b() {
            s.manual || s.highlightAll()
          }
          if (!s.manual) {
            var x = document.readyState
            x === 'loading' || (x === 'interactive' && E && E.defer)
              ? document.addEventListener('DOMContentLoaded', b)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(b)
              : window.setTimeout(b, 16)
          }
          return s
        })(r)
      typeof t < 'u' && t.exports && (t.exports = n), typeof global < 'u' && (global.Prism = n)
    }
  }),
  Sd = Z({
    '../../node_modules/refractor/core.js'(e, t) {
      var r =
          typeof globalThis == 'object'
            ? globalThis
            : typeof self == 'object'
            ? self
            : typeof window == 'object'
            ? window
            : typeof global == 'object'
            ? global
            : {},
        n = k()
      r.Prism = { manual: !0, disableWorkerMessageHandler: !0 }
      var o = gd(),
        l = wd(),
        i = Cd(),
        u = ds(),
        s = cs(),
        c = X1(),
        d = Q1()
      n()
      var g = {}.hasOwnProperty
      function h() {}
      h.prototype = i
      var p = new h()
      ;(t.exports = p),
        (p.highlight = E),
        (p.register = m),
        (p.alias = f),
        (p.registered = b),
        (p.listLanguages = x),
        m(u),
        m(s),
        m(c),
        m(d),
        (p.util.encode = A),
        (p.Token.stringify = y)
      function m(S) {
        if (typeof S != 'function' || !S.displayName)
          throw new Error('Expected `function` for `grammar`, got `' + S + '`')
        p.languages[S.displayName] === void 0 && S(p)
      }
      function f(S, O) {
        var T = p.languages,
          R = S,
          D,
          F,
          j,
          L
        O && ((R = {}), (R[S] = O))
        for (D in R) for (F = R[D], F = typeof F == 'string' ? [F] : F, j = F.length, L = -1; ++L < j; ) T[F[L]] = T[D]
      }
      function E(S, O) {
        var T = i.highlight,
          R
        if (typeof S != 'string') throw new Error('Expected `string` for `value`, got `' + S + '`')
        if (p.util.type(O) === 'Object') (R = O), (O = null)
        else {
          if (typeof O != 'string') throw new Error('Expected `string` for `name`, got `' + O + '`')
          if (g.call(p.languages, O)) R = p.languages[O]
          else throw new Error('Unknown language: `' + O + '` is not registered')
        }
        return T.call(this, S, R, O)
      }
      function b(S) {
        if (typeof S != 'string') throw new Error('Expected `string` for `language`, got `' + S + '`')
        return g.call(p.languages, S)
      }
      function x() {
        var S = p.languages,
          O = [],
          T
        for (T in S) g.call(S, T) && typeof S[T] == 'object' && O.push(T)
        return O
      }
      function y(S, O, T) {
        var R
        return typeof S == 'string'
          ? { type: 'text', value: S }
          : p.util.type(S) === 'Array'
          ? v(S, O)
          : ((R = {
              type: S.type,
              content: p.Token.stringify(S.content, O, T),
              tag: 'span',
              classes: ['token', S.type],
              attributes: {},
              language: O,
              parent: T
            }),
            S.alias && (R.classes = R.classes.concat(S.alias)),
            p.hooks.run('wrap', R),
            o(R.tag + '.' + R.classes.join('.'), w(R.attributes), R.content))
      }
      function v(S, O) {
        for (var T = [], R = S.length, D = -1, F; ++D < R; )
          (F = S[D]), F !== '' && F !== null && F !== void 0 && T.push(F)
        for (D = -1, R = T.length; ++D < R; ) (F = T[D]), (T[D] = p.Token.stringify(F, O, T))
        return T
      }
      function A(S) {
        return S
      }
      function w(S) {
        var O
        for (O in S) S[O] = l(S[O])
        return S
      }
      function k() {
        var S = 'Prism' in r,
          O = S ? r.Prism : void 0
        return T
        function T() {
          S ? (r.Prism = O) : delete r.Prism, (S = void 0), (O = void 0)
        }
      }
    }
  }),
  kd = Z({
    '../../node_modules/refractor/lang/bash.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'bash'), (r.aliases = ['shell'])
      function r(n) {
        ;(function (o) {
          var l =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            i = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: 'punctuation', inside: null },
            u = {
              bash: i,
              environment: { pattern: RegExp('\\$' + l), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/
                  }
                },
                { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: { pattern: RegExp('(\\{)' + l), lookbehind: !0, alias: 'constant' }
                  }
                },
                /\$(?:\w+|[#?*!@$])/
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
            }
          ;(o.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: 'function' },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' }
            ],
            'for-or-select': { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: 'variable', lookbehind: !0 },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: { pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + l), lookbehind: !0, alias: 'constant' }
              },
              alias: 'variable',
              lookbehind: !0
            },
            string: [
              { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: u },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: i }
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: u
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: u.entity } }
            ],
            environment: { pattern: RegExp('\\$?' + l), alias: 'constant' },
            variable: u.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name'
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } }
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 }
          }),
            (i.inside = o.languages.bash)
          for (
            var s = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number'
              ],
              c = u.variable[1].inside,
              d = 0;
            d < s.length;
            d++
          )
            c[s[d]] = o.languages.bash[s[d]]
          o.languages.shell = o.languages.bash
        })(n)
      }
    }
  }),
  _d = Z({
    '../../node_modules/refractor/lang/js-extras.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'jsExtras'), (r.aliases = [])
      function r(n) {
        ;(function (o) {
          o.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp('(\\.\\s*)' + o.languages.javascript['function-variable'].pattern.source),
              lookbehind: !0,
              alias: ['function-variable', 'method', 'function', 'property-access']
            }
          }),
            o.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp('(\\.\\s*)' + o.languages.javascript.function.source),
                lookbehind: !0,
                alias: ['function', 'property-access']
              }
            }),
            o.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name'
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' }
              ]
            })
          function l(g, h) {
            return RegExp(
              g.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
              }),
              h
            )
          }
          o.languages.insertBefore('javascript', 'keyword', {
            imports: {
              pattern: l(
                /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                  .source
              ),
              lookbehind: !0,
              inside: o.languages.javascript
            },
            exports: {
              pattern: l(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
              lookbehind: !0,
              inside: o.languages.javascript
            }
          }),
            o.languages.javascript.keyword.unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow'
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' }
            ),
            o.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' }
            }),
            o.languages.insertBefore('javascript', 'punctuation', {
              'property-access': { pattern: l(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
              'maybe-class-name': { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 },
              dom: {
                pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable'
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' }
            })
          for (
            var i = ['function', 'function-variable', 'method', 'method-variable', 'property-access'], u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u],
              c = o.languages.javascript[s]
            o.util.type(c) === 'RegExp' && (c = o.languages.javascript[s] = { pattern: c })
            var d = c.inside || {}
            ;(c.inside = d), (d['maybe-class-name'] = /^[A-Z][\s\S]*/)
          }
        })(n)
      }
    }
  }),
  Od = Z({
    '../../node_modules/refractor/lang/json.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'json'), (r.aliases = ['webmanifest'])
      function r(n) {
        ;(n.languages.json = {
          property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
          string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' }
        }),
          (n.languages.webmanifest = n.languages.json)
      }
    }
  }),
  Td = Z({
    '../../node_modules/refractor/lang/graphql.js'(e, t) {
      ;(t.exports = r), (r.displayName = 'graphql'), (r.aliases = [])
      function r(n) {
        ;(n.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: n.languages.markdown
              }
            }
          },
          string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0
          },
          fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-mutation': { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/
        }),
          n.hooks.add('after-tokenize', function (o) {
            if (o.language !== 'graphql') return
            var l = o.tokens.filter(function (x) {
                return typeof x != 'string' && x.type !== 'comment' && x.type !== 'scalar'
              }),
              i = 0
            function u(x) {
              return l[i + x]
            }
            function s(x, y) {
              y = y || 0
              for (var v = 0; v < x.length; v++) {
                var A = u(v + y)
                if (!A || A.type !== x[v]) return !1
              }
              return !0
            }
            function c(x, y) {
              for (var v = 1, A = i; A < l.length; A++) {
                var w = l[A],
                  k = w.content
                if (w.type === 'punctuation' && typeof k == 'string') {
                  if (x.test(k)) v++
                  else if (y.test(k) && (v--, v === 0)) return A
                }
              }
              return -1
            }
            function d(x, y) {
              var v = x.alias
              v ? Array.isArray(v) || (x.alias = v = [v]) : (x.alias = v = []), v.push(y)
            }
            for (; i < l.length; ) {
              var g = l[i++]
              if (g.type === 'keyword' && g.content === 'mutation') {
                var h = []
                if (s(['definition-mutation', 'punctuation']) && u(1).content === '(') {
                  i += 2
                  var p = c(/^\($/, /^\)$/)
                  if (p === -1) continue
                  for (; i < p; i++) {
                    var m = u(0)
                    m.type === 'variable' && (d(m, 'variable-input'), h.push(m.content))
                  }
                  i = p + 1
                }
                if (
                  s(['punctuation', 'property-query']) &&
                  u(0).content === '{' &&
                  (i++, d(u(0), 'property-mutation'), h.length > 0)
                ) {
                  var f = c(/^\{$/, /^\}$/)
                  if (f === -1) continue
                  for (var E = i; E < f; E++) {
                    var b = l[E]
                    b.type === 'variable' && h.indexOf(b.content) >= 0 && d(b, 'variable-input')
                  }
                }
              }
            }
          })
      }
    }
  })
const { logger: Rd } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { global: Fd } = __STORYBOOK_MODULE_GLOBAL__
var Dd = Oe(us()),
  Ld = Dd.default,
  Md = Oe(kd()),
  Bd = Md.default,
  $d = Oe(cs()),
  Id = $d.default,
  jd = Oe(_d()),
  Hd = jd.default,
  Nd = Oe(Od()),
  Zd = Nd.default,
  Pd = Oe(Td()),
  Vd = Pd.default,
  qd = Oe(ds()),
  zd = qd.default,
  Ud = Oe(Y1()),
  Wd = Ud.default,
  Gd = Oe(K1()),
  Yd = Gd.default,
  Kd = Oe(J1()),
  Jd = Kd.default,
  Xd = Oe(ss()),
  Qd = Xd.default
function ep(e, t) {
  if (e == null) return {}
  var r = Ya(e, t),
    n,
    o
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e)
    for (o = 0; o < l.length; o++)
      (n = l[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
function ha(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function tp(e) {
  if (Array.isArray(e)) return ha(e)
}
function rp(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null) return Array.from(e)
}
function np(e, t) {
  if (e) {
    if (typeof e == 'string') return ha(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set')) return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ha(e, t)
  }
}
function ap() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function op(e) {
  return tp(e) || rp(e) || np(e) || ap()
}
function br(e) {
  '@babel/helpers - typeof'
  return (
    (br =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    br(e)
  )
}
function lp(e, t) {
  if (br(e) !== 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (br(n) !== 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function ip(e) {
  var t = lp(e, 'string')
  return br(t) === 'symbol' ? t : String(t)
}
function ys(e, t, r) {
  return (
    (t = ip(t)),
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
    e
  )
}
function yl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? yl(Object(r), !0).forEach(function (n) {
          ys(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : yl(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
  }
  return e
}
function sp(e) {
  var t = e.length
  if (t === 0 || t === 1) return e
  if (t === 2) return [e[0], e[1], ''.concat(e[0], '.').concat(e[1]), ''.concat(e[1], '.').concat(e[0])]
  if (t === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ]
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ]
}
var Vn = {}
function up(e) {
  if (e.length === 0 || e.length === 1) return e
  var t = e.join('.')
  return Vn[t] || (Vn[t] = sp(e)), Vn[t]
}
function cp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = e.filter(function (l) {
      return l !== 'token'
    }),
    o = up(n)
  return o.reduce(function (l, i) {
    return Zt(Zt({}, l), r[i])
  }, t)
}
function bl(e) {
  return e.join(' ')
}
function dp(e, t) {
  var r = 0
  return function (n) {
    return (
      (r += 1),
      n.map(function (o, l) {
        return Xa({ node: o, stylesheet: e, useInlineStyles: t, key: 'code-segment-'.concat(r, '-').concat(l) })
      })
    )
  }
}
function Xa(e) {
  var t = e.node,
    r = e.stylesheet,
    n = e.style,
    o = n === void 0 ? {} : n,
    l = e.useInlineStyles,
    i = e.key,
    u = t.properties,
    s = t.type,
    c = t.tagName,
    d = t.value
  if (s === 'text') return d
  if (c) {
    var g = dp(r, l),
      h
    if (!l) h = Zt(Zt({}, u), {}, { className: bl(u.className) })
    else {
      var p = Object.keys(r).reduce(function (b, x) {
          return (
            x.split('.').forEach(function (y) {
              b.includes(y) || b.push(y)
            }),
            b
          )
        }, []),
        m = u.className && u.className.includes('token') ? ['token'] : [],
        f =
          u.className &&
          m.concat(
            u.className.filter(function (b) {
              return !p.includes(b)
            })
          )
      h = Zt(Zt({}, u), {}, { className: bl(f) || void 0, style: cp(u.className, Object.assign({}, u.style, o), r) })
    }
    var E = g(t.children)
    return a.createElement(c, ve({ key: i }, h), E)
  }
}
var pp = function (e, t) {
    var r = e.listLanguages()
    return r.indexOf(t) !== -1
  },
  fp = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator'
  ]
function vl(e, t) {
  var r = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e)
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      r.push.apply(r, n)
  }
  return r
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? vl(Object(r), !0).forEach(function (n) {
          ys(e, n, r[n])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vl(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
  }
  return e
}
var mp = /\n/g
function gp(e) {
  return e.match(mp)
}
function hp(e) {
  var t = e.lines,
    r = e.startingLineNumber,
    n = e.style
  return t.map(function (o, l) {
    var i = l + r
    return a.createElement(
      'span',
      {
        key: 'line-'.concat(l),
        className: 'react-syntax-highlighter-line-number',
        style: typeof n == 'function' ? n(i) : n
      },
      ''.concat(
        i,
        `
`
      )
    )
  })
}
function yp(e) {
  var t = e.codeString,
    r = e.codeStyle,
    n = e.containerStyle,
    o = n === void 0 ? { float: 'left', paddingRight: '10px' } : n,
    l = e.numberStyle,
    i = l === void 0 ? {} : l,
    u = e.startingLineNumber
  return a.createElement(
    'code',
    { style: Object.assign({}, r, o) },
    hp({
      lines: t.replace(/\n$/, '').split(`
`),
      style: i,
      startingLineNumber: u
    })
  )
}
function bp(e) {
  return ''.concat(e.toString().length, '.25em')
}
function bs(e, t) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: t
    },
    children: [{ type: 'text', value: e }]
  }
}
function vs(e, t, r) {
  var n = { display: 'inline-block', minWidth: bp(r), paddingRight: '1em', textAlign: 'right', userSelect: 'none' },
    o = typeof e == 'function' ? e(t) : e,
    l = Xe(Xe({}, n), o)
  return l
}
function Ur(e) {
  var t = e.children,
    r = e.lineNumber,
    n = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    i = e.lineProps,
    u = i === void 0 ? {} : i,
    s = e.className,
    c = s === void 0 ? [] : s,
    d = e.showLineNumbers,
    g = e.wrapLongLines,
    h = typeof u == 'function' ? u(r) : u
  if (((h.className = c), r && l)) {
    var p = vs(n, r, o)
    t.unshift(bs(r, p))
  }
  return (
    g & d && (h.style = Xe(Xe({}, h.style), {}, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: h, children: t }
  )
}
function Es(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      n = 0;
    n < e.length;
    n++
  ) {
    var o = e[n]
    if (o.type === 'text') r.push(Ur({ children: [o], className: op(new Set(t)) }))
    else if (o.children) {
      var l = t.concat(o.properties.className)
      Es(o.children, l).forEach(function (i) {
        return r.push(i)
      })
    }
  }
  return r
}
function vp(e, t, r, n, o, l, i, u, s) {
  var c,
    d = Es(e.value),
    g = [],
    h = -1,
    p = 0
  function m(A, w) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return Ur({
      children: A,
      lineNumber: w,
      lineNumberStyle: u,
      largestLineNumber: i,
      showInlineLineNumbers: o,
      lineProps: r,
      className: k,
      showLineNumbers: n,
      wrapLongLines: s
    })
  }
  function f(A, w) {
    if (n && w && o) {
      var k = vs(u, w, i)
      A.unshift(bs(w, k))
    }
    return A
  }
  function E(A, w) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
    return t || k.length > 0 ? m(A, w, k) : f(A, w)
  }
  for (
    var b = function () {
      var A = d[p],
        w = A.children[0].value,
        k = gp(w)
      if (k) {
        var S = w.split(`
`)
        S.forEach(function (O, T) {
          var R = n && g.length + l,
            D = {
              type: 'text',
              value: ''.concat(
                O,
                `
`
              )
            }
          if (T === 0) {
            var F = d.slice(h + 1, p).concat(Ur({ children: [D], className: A.properties.className })),
              j = E(F, R)
            g.push(j)
          } else if (T === S.length - 1) {
            var L = d[p + 1] && d[p + 1].children && d[p + 1].children[0],
              M = { type: 'text', value: ''.concat(O) }
            if (L) {
              var H = Ur({ children: [M], className: A.properties.className })
              d.splice(p + 1, 0, H)
            } else {
              var P = [M],
                $ = E(P, R, A.properties.className)
              g.push($)
            }
          } else {
            var N = [D],
              K = E(N, R, A.properties.className)
            g.push(K)
          }
        }),
          (h = p)
      }
      p++
    };
    p < d.length;

  )
    b()
  if (h !== d.length - 1) {
    var x = d.slice(h + 1, d.length)
    if (x && x.length) {
      var y = n && g.length + l,
        v = E(x, y)
      g.push(v)
    }
  }
  return t ? g : (c = []).concat.apply(c, g)
}
function Ep(e) {
  var t = e.rows,
    r = e.stylesheet,
    n = e.useInlineStyles
  return t.map(function (o, l) {
    return Xa({ node: o, stylesheet: r, useInlineStyles: n, key: 'code-segement'.concat(l) })
  })
}
function xs(e) {
  return e && typeof e.highlightAuto < 'u'
}
function xp(e) {
  var t = e.astGenerator,
    r = e.language,
    n = e.code,
    o = e.defaultCodeValue
  if (xs(t)) {
    var l = pp(t, r)
    return r === 'text' ? { value: o, language: 'text' } : l ? t.highlight(r, n) : t.highlightAuto(n)
  }
  try {
    return r && r !== 'text' ? { value: t.highlight(n, r) } : { value: o }
  } catch {
    return { value: o }
  }
}
function Ap(e, t) {
  return function (r) {
    var n = r.language,
      o = r.children,
      l = r.style,
      i = l === void 0 ? t : l,
      u = r.customStyle,
      s = u === void 0 ? {} : u,
      c = r.codeTagProps,
      d =
        c === void 0
          ? {
              className: n ? 'language-'.concat(n) : void 0,
              style: Xe(Xe({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')])
            }
          : c,
      g = r.useInlineStyles,
      h = g === void 0 ? !0 : g,
      p = r.showLineNumbers,
      m = p === void 0 ? !1 : p,
      f = r.showInlineLineNumbers,
      E = f === void 0 ? !0 : f,
      b = r.startingLineNumber,
      x = b === void 0 ? 1 : b,
      y = r.lineNumberContainerStyle,
      v = r.lineNumberStyle,
      A = v === void 0 ? {} : v,
      w = r.wrapLines,
      k = r.wrapLongLines,
      S = k === void 0 ? !1 : k,
      O = r.lineProps,
      T = O === void 0 ? {} : O,
      R = r.renderer,
      D = r.PreTag,
      F = D === void 0 ? 'pre' : D,
      j = r.CodeTag,
      L = j === void 0 ? 'code' : j,
      M = r.code,
      H = M === void 0 ? (Array.isArray(o) ? o[0] : o) || '' : M,
      P = r.astGenerator,
      $ = ep(r, fp)
    P = P || e
    var N = m
        ? a.createElement(yp, {
            containerStyle: y,
            codeStyle: d.style || {},
            numberStyle: A,
            startingLineNumber: x,
            codeString: H
          })
        : null,
      K = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      re = xs(P) ? 'hljs' : 'prismjs',
      G = h
        ? Object.assign({}, $, { style: Object.assign({}, K, s) })
        : Object.assign({}, $, {
            className: $.className ? ''.concat(re, ' ').concat($.className) : re,
            style: Object.assign({}, s)
          })
    if (
      (S
        ? (d.style = Xe(Xe({}, d.style), {}, { whiteSpace: 'pre-wrap' }))
        : (d.style = Xe(Xe({}, d.style), {}, { whiteSpace: 'pre' })),
      !P)
    )
      return a.createElement(F, G, N, a.createElement(L, d, H))
    ;((w === void 0 && R) || S) && (w = !0), (R = R || Ep)
    var J = [{ type: 'text', value: H }],
      I = xp({ astGenerator: P, language: n, code: H, defaultCodeValue: J })
    I.language === null && (I.value = J)
    var V = I.value.length + x,
      z = vp(I, w, T, m, E, x, V, A, S)
    return a.createElement(F, G, a.createElement(L, d, !E && N, R({ rows: z, stylesheet: i, useInlineStyles: h })))
  }
}
var Qa = Oe(Sd()),
  eo = Ap(Qa.default, {})
eo.registerLanguage = function (e, t) {
  return Qa.default.register(t)
}
eo.alias = function (e, t) {
  return Qa.default.alias(e, t)
}
var Te = eo,
  wp = _.div(({ theme: e }) => ({
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxWidth: '100%',
    display: 'flex',
    background: e.background.content,
    zIndex: 1
  })),
  As = _.button(
    ({ theme: e }) => ({
      margin: 0,
      border: '0 none',
      padding: '4px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: '4px 0 0 0',
      '&:not(:last-child)': { borderRight: `1px solid ${e.appBorderColor}` },
      '& + *': { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 },
      '&:focus': { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: '0 none' }
    }),
    ({ disabled: e }) => e && { cursor: 'not-allowed', opacity: 0.5 }
  )
As.displayName = 'ActionButton'
var to = ({ actionItems: e, ...t }) =>
    a.createElement(
      wp,
      { ...t },
      e.map(({ title: r, className: n, onClick: o, disabled: l }, i) =>
        a.createElement(As, { key: i, className: n, onClick: o, disabled: l }, r)
      )
    ),
  Cp = C.lazy(() =>
    ut(
      () => import('./GlobalScrollAreaStyles-UY5SB7EJ-93836119.js'),
      [
        './GlobalScrollAreaStyles-UY5SB7EJ-93836119.js',
        './index-1cdf6ce0.js',
        './iframe-aa443103.js',
        './chunk-6P7RB4HF-36fee097.js',
        './index-a01a9712.js',
        './assertThisInitialized-bd9b18e4.js',
        './index-c8f542d6.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  Sp = C.lazy(() =>
    ut(
      () => import('./OverlayScrollbars-GZGLA7DL-9bc5555d.js'),
      ['./OverlayScrollbars-GZGLA7DL-9bc5555d.js', './index-1cdf6ce0.js'],
      import.meta.url
    )
  ),
  kp = ({ horizontal: e, vertical: t, ...r }) =>
    a.createElement(
      C.Suspense,
      { fallback: a.createElement('div', { ...r }) },
      a.createElement(Cp, null),
      a.createElement(Sp, { defer: !0, options: { scrollbars: { autoHide: 'leave', visibility: 'auto' } }, ...r })
    ),
  yn = _(kp)(
    ({ vertical: e }) => (e ? { overflowY: 'auto', height: '100%' } : { overflowY: 'hidden' }),
    ({ horizontal: e }) => (e ? { overflowX: 'auto', width: '100%' } : { overflowX: 'hidden' })
  )
yn.defaultProps = { horizontal: !1, vertical: !1 }
var { navigator: Ir, document: sr, window: _p } = Fd
Te.registerLanguage('jsextra', Hd)
Te.registerLanguage('jsx', Ld)
Te.registerLanguage('json', Zd)
Te.registerLanguage('yml', Yd)
Te.registerLanguage('md', Wd)
Te.registerLanguage('bash', Bd)
Te.registerLanguage('css', Id)
Te.registerLanguage('html', zd)
Te.registerLanguage('tsx', Jd)
Te.registerLanguage('typescript', Qd)
Te.registerLanguage('graphql', Vd)
var Op = Dt(2)(e => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})),
  Tp = ws()
function ws() {
  return Ir != null && Ir.clipboard
    ? e => Ir.clipboard.writeText(e)
    : async e => {
        let t = sr.createElement('TEXTAREA'),
          r = sr.activeElement
        ;(t.value = e), sr.body.appendChild(t), t.select(), sr.execCommand('copy'), sr.body.removeChild(t), r.focus()
      }
}
var Rp = _.div(
    ({ theme: e }) => ({ position: 'relative', overflow: 'hidden', color: e.color.defaultText }),
    ({ theme: e, bordered: t }) =>
      t
        ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content }
        : {},
    ({ showLineNumbers: e }) =>
      e ? { '.react-syntax-highlighter-line-number::before': { content: 'attr(data-line-number)' } } : {}
  ),
  Fp = ({ children: e, className: t }) => a.createElement(yn, { horizontal: !0, vertical: !0, className: t }, e),
  Dp = _(Fp)({ position: 'relative' }, ({ theme: e }) => Op(e)),
  Lp = _.pre(({ theme: e, padded: t }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: t ? e.layoutMargin : 0
  })),
  Mp = _.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })),
  Cs = e => {
    let t = [...e.children],
      r = t[0],
      n = r.children[0].value,
      o = {
        ...r,
        children: [],
        properties: { ...r.properties, 'data-line-number': n, style: { ...r.properties.style, userSelect: 'auto' } }
      }
    return (t[0] = o), { ...e, children: t }
  },
  Bp = ({ rows: e, stylesheet: t, useInlineStyles: r }) =>
    e.map((n, o) => Xa({ node: Cs(n), stylesheet: t, useInlineStyles: r, key: `code-segement${o}` })),
  $p = (e, t) => (t ? (e ? ({ rows: r, ...n }) => e({ rows: r.map(o => Cs(o)), ...n }) : Bp) : e),
  ro = ({
    children: e,
    language: t = 'jsx',
    copyable: r = !1,
    bordered: n = !1,
    padded: o = !1,
    format: l = !0,
    formatter: i = null,
    className: u = null,
    showLineNumbers: s = !1,
    ...c
  }) => {
    if (typeof e != 'string' || !e.trim()) return null
    let d = i ? i(l, e) : e.trim(),
      [g, h] = C.useState(!1),
      p = C.useCallback(
        f => {
          f.preventDefault(),
            Tp(d)
              .then(() => {
                h(!0), _p.setTimeout(() => h(!1), 1500)
              })
              .catch(Rd.error)
        },
        [d]
      ),
      m = $p(c.renderer, s)
    return a.createElement(
      Rp,
      { bordered: n, padded: o, showLineNumbers: s, className: u },
      a.createElement(
        Dp,
        null,
        a.createElement(
          Te,
          {
            padded: o || n,
            language: t,
            showLineNumbers: s,
            showInlineLineNumbers: s,
            useInlineStyles: !1,
            PreTag: Lp,
            CodeTag: Mp,
            lineNumberContainerStyle: {},
            ...c,
            renderer: m
          },
          d
        )
      ),
      r ? a.createElement(to, { actionItems: [{ title: g ? 'Copied' : 'Copy', onClick: p }] }) : null
    )
  }
ro.registerLanguage = (...e) => Te.registerLanguage(...e)
var hx = ro
const { global: Ip } = __STORYBOOK_MODULE_GLOBAL__
var jp = Z({
    '../../node_modules/react-fast-compare/index.js'(e, t) {
      var r = typeof Element < 'u',
        n = typeof Map == 'function',
        o = typeof Set == 'function',
        l = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
      function i(u, s) {
        if (u === s) return !0
        if (u && s && typeof u == 'object' && typeof s == 'object') {
          if (u.constructor !== s.constructor) return !1
          var c, d, g
          if (Array.isArray(u)) {
            if (((c = u.length), c != s.length)) return !1
            for (d = c; d-- !== 0; ) if (!i(u[d], s[d])) return !1
            return !0
          }
          var h
          if (n && u instanceof Map && s instanceof Map) {
            if (u.size !== s.size) return !1
            for (h = u.entries(); !(d = h.next()).done; ) if (!s.has(d.value[0])) return !1
            for (h = u.entries(); !(d = h.next()).done; ) if (!i(d.value[1], s.get(d.value[0]))) return !1
            return !0
          }
          if (o && u instanceof Set && s instanceof Set) {
            if (u.size !== s.size) return !1
            for (h = u.entries(); !(d = h.next()).done; ) if (!s.has(d.value[0])) return !1
            return !0
          }
          if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
            if (((c = u.length), c != s.length)) return !1
            for (d = c; d-- !== 0; ) if (u[d] !== s[d]) return !1
            return !0
          }
          if (u.constructor === RegExp) return u.source === s.source && u.flags === s.flags
          if (
            u.valueOf !== Object.prototype.valueOf &&
            typeof u.valueOf == 'function' &&
            typeof s.valueOf == 'function'
          )
            return u.valueOf() === s.valueOf()
          if (
            u.toString !== Object.prototype.toString &&
            typeof u.toString == 'function' &&
            typeof s.toString == 'function'
          )
            return u.toString() === s.toString()
          if (((g = Object.keys(u)), (c = g.length), c !== Object.keys(s).length)) return !1
          for (d = c; d-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(s, g[d])) return !1
          if (r && u instanceof Element) return !1
          for (d = c; d-- !== 0; )
            if (!((g[d] === '_owner' || g[d] === '__v' || g[d] === '__o') && u.$$typeof) && !i(u[g[d]], s[g[d]]))
              return !1
          return !0
        }
        return u !== u && s !== s
      }
      t.exports = function (u, s) {
        try {
          return i(u, s)
        } catch (c) {
          if ((c.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1
          throw c
        }
      }
    }
  }),
  El = function (e) {
    return e.reduce(function (t, r) {
      var n = r[0],
        o = r[1]
      return (t[n] = o), t
    }, {})
  },
  xl = typeof window < 'u' && window.document && window.document.createElement ? C.useLayoutEffect : C.useEffect,
  Ae = 'top',
  Me = 'bottom',
  Be = 'right',
  we = 'left',
  bn = 'auto',
  Or = [Ae, Me, Be, we],
  Ut = 'start',
  vr = 'end',
  Hp = 'clippingParents',
  Ss = 'viewport',
  ur = 'popper',
  Np = 'reference',
  Al = Or.reduce(function (e, t) {
    return e.concat([t + '-' + Ut, t + '-' + vr])
  }, []),
  ks = [].concat(Or, [bn]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Ut, t + '-' + vr])
  }, []),
  Zp = 'beforeRead',
  Pp = 'read',
  Vp = 'afterRead',
  qp = 'beforeMain',
  zp = 'main',
  Up = 'afterMain',
  Wp = 'beforeWrite',
  Gp = 'write',
  Yp = 'afterWrite',
  Kp = [Zp, Pp, Vp, qp, zp, Up, Wp, Gp, Yp]
function nt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function _e(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function Ft(e) {
  var t = _e(e).Element
  return e instanceof t || e instanceof Element
}
function Le(e) {
  var t = _e(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function no(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = _e(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function Jp(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      l = t.elements[r]
    !Le(l) ||
      !nt(l) ||
      (Object.assign(l.style, n),
      Object.keys(o).forEach(function (i) {
        var u = o[i]
        u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? '' : u)
      }))
  })
}
function Xp(e) {
  var t = e.state,
    r = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          l = t.attributes[n] || {},
          i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          u = i.reduce(function (s, c) {
            return (s[c] = ''), s
          }, {})
        !Le(o) ||
          !nt(o) ||
          (Object.assign(o.style, u),
          Object.keys(l).forEach(function (s) {
            o.removeAttribute(s)
          }))
      })
    }
  )
}
var Qp = { name: 'applyStyles', enabled: !0, phase: 'write', fn: Jp, effect: Xp, requires: ['computeStyles'] }
function rt(e) {
  return e.split('-')[0]
}
var Ot = Math.max,
  rn = Math.min,
  Wt = Math.round
function ya() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function _s() {
  return !/^((?!chrome|android).)*safari/i.test(ya())
}
function Gt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    l = 1
  t &&
    Le(e) &&
    ((o = (e.offsetWidth > 0 && Wt(n.width) / e.offsetWidth) || 1),
    (l = (e.offsetHeight > 0 && Wt(n.height) / e.offsetHeight) || 1))
  var i = Ft(e) ? _e(e) : window,
    u = i.visualViewport,
    s = !_s() && r,
    c = (n.left + (s && u ? u.offsetLeft : 0)) / o,
    d = (n.top + (s && u ? u.offsetTop : 0)) / l,
    g = n.width / o,
    h = n.height / l
  return { width: g, height: h, top: d, right: c + g, bottom: d + h, left: c, x: c, y: d }
}
function ao(e) {
  var t = Gt(e),
    r = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  )
}
function Os(e, t) {
  var r = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (r && no(r)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function ct(e) {
  return _e(e).getComputedStyle(e)
}
function e2(e) {
  return ['table', 'td', 'th'].indexOf(nt(e)) >= 0
}
function vt(e) {
  return ((Ft(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function vn(e) {
  return nt(e) === 'html' ? e : e.assignedSlot || e.parentNode || (no(e) ? e.host : null) || vt(e)
}
function wl(e) {
  return !Le(e) || ct(e).position === 'fixed' ? null : e.offsetParent
}
function t2(e) {
  var t = /firefox/i.test(ya()),
    r = /Trident/i.test(ya())
  if (r && Le(e)) {
    var n = ct(e)
    if (n.position === 'fixed') return null
  }
  var o = vn(e)
  for (no(o) && (o = o.host); Le(o) && ['html', 'body'].indexOf(nt(o)) < 0; ) {
    var l = ct(o)
    if (
      l.transform !== 'none' ||
      l.perspective !== 'none' ||
      l.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
      (t && l.willChange === 'filter') ||
      (t && l.filter && l.filter !== 'none')
    )
      return o
    o = o.parentNode
  }
  return null
}
function Tr(e) {
  for (var t = _e(e), r = wl(e); r && e2(r) && ct(r).position === 'static'; ) r = wl(r)
  return r && (nt(r) === 'html' || (nt(r) === 'body' && ct(r).position === 'static')) ? t : r || t2(e) || t
}
function oo(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function fr(e, t, r) {
  return Ot(e, rn(t, r))
}
function r2(e, t, r) {
  var n = fr(e, t, r)
  return n > r ? r : n
}
function Ts() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function Rs(e) {
  return Object.assign({}, Ts(), e)
}
function Fs(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r
  }, {})
}
var n2 = function (e, t) {
  return (
    (e = typeof e == 'function' ? e(Object.assign({}, t.rects, { placement: t.placement })) : e),
    Rs(typeof e != 'number' ? e : Fs(e, Or))
  )
}
function a2(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    l = r.elements.arrow,
    i = r.modifiersData.popperOffsets,
    u = rt(r.placement),
    s = oo(u),
    c = [we, Be].indexOf(u) >= 0,
    d = c ? 'height' : 'width'
  if (!(!l || !i)) {
    var g = n2(o.padding, r),
      h = ao(l),
      p = s === 'y' ? Ae : we,
      m = s === 'y' ? Me : Be,
      f = r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d],
      E = i[s] - r.rects.reference[s],
      b = Tr(l),
      x = b ? (s === 'y' ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      y = f / 2 - E / 2,
      v = g[p],
      A = x - h[d] - g[m],
      w = x / 2 - h[d] / 2 + y,
      k = fr(v, w, A),
      S = s
    r.modifiersData[n] = ((t = {}), (t[S] = k), (t.centerOffset = k - w), t)
  }
}
function o2(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Os(t.elements.popper, o) && (t.elements.arrow = o)))
}
var l2 = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: a2,
  effect: o2,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function Yt(e) {
  return e.split('-')[1]
}
var i2 = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function s2(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1
  return { x: Wt(r * o) / o || 0, y: Wt(n * o) / o || 0 }
}
function Cl(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    l = e.variation,
    i = e.offsets,
    u = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    g = e.isFixed,
    h = i.x,
    p = h === void 0 ? 0 : h,
    m = i.y,
    f = m === void 0 ? 0 : m,
    E = typeof d == 'function' ? d({ x: p, y: f }) : { x: p, y: f }
  ;(p = E.x), (f = E.y)
  var b = i.hasOwnProperty('x'),
    x = i.hasOwnProperty('y'),
    y = we,
    v = Ae,
    A = window
  if (c) {
    var w = Tr(r),
      k = 'clientHeight',
      S = 'clientWidth'
    if (
      (w === _e(r) &&
        ((w = vt(r)), ct(w).position !== 'static' && u === 'absolute' && ((k = 'scrollHeight'), (S = 'scrollWidth'))),
      (w = w),
      o === Ae || ((o === we || o === Be) && l === vr))
    ) {
      v = Me
      var O = g && w === A && A.visualViewport ? A.visualViewport.height : w[k]
      ;(f -= O - n.height), (f *= s ? 1 : -1)
    }
    if (o === we || ((o === Ae || o === Me) && l === vr)) {
      y = Be
      var T = g && w === A && A.visualViewport ? A.visualViewport.width : w[S]
      ;(p -= T - n.width), (p *= s ? 1 : -1)
    }
  }
  var R = Object.assign({ position: u }, c && i2),
    D = d === !0 ? s2({ x: p, y: f }, _e(r)) : { x: p, y: f }
  if (((p = D.x), (f = D.y), s)) {
    var F
    return Object.assign(
      {},
      R,
      ((F = {}),
      (F[v] = x ? '0' : ''),
      (F[y] = b ? '0' : ''),
      (F.transform =
        (A.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + f + 'px)'
          : 'translate3d(' + p + 'px, ' + f + 'px, 0)'),
      F)
    )
  }
  return Object.assign({}, R, ((t = {}), (t[v] = x ? f + 'px' : ''), (t[y] = b ? p + 'px' : ''), (t.transform = ''), t))
}
function u2(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    l = r.adaptive,
    i = l === void 0 ? !0 : l,
    u = r.roundOffsets,
    s = u === void 0 ? !0 : u,
    c = {
      placement: rt(t.placement),
      variation: Yt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed'
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Cl(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Cl(
          Object.assign({}, c, { offsets: t.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: s })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, { 'data-popper-placement': t.placement }))
}
var c2 = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: u2, data: {} },
  jr = { passive: !0 }
function d2(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    l = o === void 0 ? !0 : o,
    i = n.resize,
    u = i === void 0 ? !0 : i,
    s = _e(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    l &&
      c.forEach(function (d) {
        d.addEventListener('scroll', r.update, jr)
      }),
    u && s.addEventListener('resize', r.update, jr),
    function () {
      l &&
        c.forEach(function (d) {
          d.removeEventListener('scroll', r.update, jr)
        }),
        u && s.removeEventListener('resize', r.update, jr)
    }
  )
}
var p2 = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: d2, data: {} },
  f2 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function Wr(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return f2[t]
  })
}
var m2 = { start: 'end', end: 'start' }
function Sl(e) {
  return e.replace(/start|end/g, function (t) {
    return m2[t]
  })
}
function lo(e) {
  var t = _e(e),
    r = t.pageXOffset,
    n = t.pageYOffset
  return { scrollLeft: r, scrollTop: n }
}
function io(e) {
  return Gt(vt(e)).left + lo(e).scrollLeft
}
function g2(e, t) {
  var r = _e(e),
    n = vt(e),
    o = r.visualViewport,
    l = n.clientWidth,
    i = n.clientHeight,
    u = 0,
    s = 0
  if (o) {
    ;(l = o.width), (i = o.height)
    var c = _s()
    ;(c || (!c && t === 'fixed')) && ((u = o.offsetLeft), (s = o.offsetTop))
  }
  return { width: l, height: i, x: u + io(e), y: s }
}
function h2(e) {
  var t,
    r = vt(e),
    n = lo(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    l = Ot(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    i = Ot(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    u = -n.scrollLeft + io(e),
    s = -n.scrollTop
  return (
    ct(o || r).direction === 'rtl' && (u += Ot(r.clientWidth, o ? o.clientWidth : 0) - l),
    { width: l, height: i, x: u, y: s }
  )
}
function so(e) {
  var t = ct(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY
  return /auto|scroll|overlay|hidden/.test(r + o + n)
}
function Ds(e) {
  return ['html', 'body', '#document'].indexOf(nt(e)) >= 0 ? e.ownerDocument.body : Le(e) && so(e) ? e : Ds(vn(e))
}
function mr(e, t) {
  var r
  t === void 0 && (t = [])
  var n = Ds(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = _e(n),
    i = o ? [l].concat(l.visualViewport || [], so(n) ? n : []) : n,
    u = t.concat(i)
  return o ? u : u.concat(mr(vn(i)))
}
function ba(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function y2(e, t) {
  var r = Gt(e, !1, t === 'fixed')
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  )
}
function kl(e, t, r) {
  return t === Ss ? ba(g2(e, r)) : Ft(t) ? y2(t, r) : ba(h2(vt(e)))
}
function b2(e) {
  var t = mr(vn(e)),
    r = ['absolute', 'fixed'].indexOf(ct(e).position) >= 0,
    n = r && Le(e) ? Tr(e) : e
  return Ft(n)
    ? t.filter(function (o) {
        return Ft(o) && Os(o, n) && nt(o) !== 'body'
      })
    : []
}
function v2(e, t, r, n) {
  var o = t === 'clippingParents' ? b2(e) : [].concat(t),
    l = [].concat(o, [r]),
    i = l[0],
    u = l.reduce(
      function (s, c) {
        var d = kl(e, c, n)
        return (
          (s.top = Ot(d.top, s.top)),
          (s.right = rn(d.right, s.right)),
          (s.bottom = rn(d.bottom, s.bottom)),
          (s.left = Ot(d.left, s.left)),
          s
        )
      },
      kl(e, i, n)
    )
  return (u.width = u.right - u.left), (u.height = u.bottom - u.top), (u.x = u.left), (u.y = u.top), u
}
function Ls(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? rt(n) : null,
    l = n ? Yt(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    u = t.y + t.height / 2 - r.height / 2,
    s
  switch (o) {
    case Ae:
      s = { x: i, y: t.y - r.height }
      break
    case Me:
      s = { x: i, y: t.y + t.height }
      break
    case Be:
      s = { x: t.x + t.width, y: u }
      break
    case we:
      s = { x: t.x - r.width, y: u }
      break
    default:
      s = { x: t.x, y: t.y }
  }
  var c = o ? oo(o) : null
  if (c != null) {
    var d = c === 'y' ? 'height' : 'width'
    switch (l) {
      case Ut:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2)
        break
      case vr:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2)
        break
    }
  }
  return s
}
function Er(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    l = r.strategy,
    i = l === void 0 ? e.strategy : l,
    u = r.boundary,
    s = u === void 0 ? Hp : u,
    c = r.rootBoundary,
    d = c === void 0 ? Ss : c,
    g = r.elementContext,
    h = g === void 0 ? ur : g,
    p = r.altBoundary,
    m = p === void 0 ? !1 : p,
    f = r.padding,
    E = f === void 0 ? 0 : f,
    b = Rs(typeof E != 'number' ? E : Fs(E, Or)),
    x = h === ur ? Np : ur,
    y = e.rects.popper,
    v = e.elements[m ? x : h],
    A = v2(Ft(v) ? v : v.contextElement || vt(e.elements.popper), s, d, i),
    w = Gt(e.elements.reference),
    k = Ls({ reference: w, element: y, strategy: 'absolute', placement: o }),
    S = ba(Object.assign({}, y, k)),
    O = h === ur ? S : w,
    T = {
      top: A.top - O.top + b.top,
      bottom: O.bottom - A.bottom + b.bottom,
      left: A.left - O.left + b.left,
      right: O.right - A.right + b.right
    },
    R = e.modifiersData.offset
  if (h === ur && R) {
    var D = R[o]
    Object.keys(T).forEach(function (F) {
      var j = [Be, Me].indexOf(F) >= 0 ? 1 : -1,
        L = [Ae, Me].indexOf(F) >= 0 ? 'y' : 'x'
      T[F] += D[L] * j
    })
  }
  return T
}
function E2(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = r.boundary,
    l = r.rootBoundary,
    i = r.padding,
    u = r.flipVariations,
    s = r.allowedAutoPlacements,
    c = s === void 0 ? ks : s,
    d = Yt(n),
    g = d
      ? u
        ? Al
        : Al.filter(function (m) {
            return Yt(m) === d
          })
      : Or,
    h = g.filter(function (m) {
      return c.indexOf(m) >= 0
    })
  h.length === 0 && (h = g)
  var p = h.reduce(function (m, f) {
    return (m[f] = Er(e, { placement: f, boundary: o, rootBoundary: l, padding: i })[rt(f)]), m
  }, {})
  return Object.keys(p).sort(function (m, f) {
    return p[m] - p[f]
  })
}
function x2(e) {
  if (rt(e) === bn) return []
  var t = Wr(e)
  return [Sl(e), t, Sl(t)]
}
function A2(e) {
  var t = e.state,
    r = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        l = o === void 0 ? !0 : o,
        i = r.altAxis,
        u = i === void 0 ? !0 : i,
        s = r.fallbackPlacements,
        c = r.padding,
        d = r.boundary,
        g = r.rootBoundary,
        h = r.altBoundary,
        p = r.flipVariations,
        m = p === void 0 ? !0 : p,
        f = r.allowedAutoPlacements,
        E = t.options.placement,
        b = rt(E),
        x = b === E,
        y = s || (x || !m ? [Wr(E)] : x2(E)),
        v = [E].concat(y).reduce(function (J, I) {
          return J.concat(
            rt(I) === bn
              ? E2(t, {
                  placement: I,
                  boundary: d,
                  rootBoundary: g,
                  padding: c,
                  flipVariations: m,
                  allowedAutoPlacements: f
                })
              : I
          )
        }, []),
        A = t.rects.reference,
        w = t.rects.popper,
        k = new Map(),
        S = !0,
        O = v[0],
        T = 0;
      T < v.length;
      T++
    ) {
      var R = v[T],
        D = rt(R),
        F = Yt(R) === Ut,
        j = [Ae, Me].indexOf(D) >= 0,
        L = j ? 'width' : 'height',
        M = Er(t, { placement: R, boundary: d, rootBoundary: g, altBoundary: h, padding: c }),
        H = j ? (F ? Be : we) : F ? Me : Ae
      A[L] > w[L] && (H = Wr(H))
      var P = Wr(H),
        $ = []
      if (
        (l && $.push(M[D] <= 0),
        u && $.push(M[H] <= 0, M[P] <= 0),
        $.every(function (J) {
          return J
        }))
      ) {
        ;(O = R), (S = !1)
        break
      }
      k.set(R, $)
    }
    if (S)
      for (
        var N = m ? 3 : 1,
          K = function (J) {
            var I = v.find(function (V) {
              var z = k.get(V)
              if (z)
                return z.slice(0, J).every(function (ie) {
                  return ie
                })
            })
            if (I) return (O = I), 'break'
          },
          re = N;
        re > 0;
        re--
      ) {
        var G = K(re)
        if (G === 'break') break
      }
    t.placement !== O && ((t.modifiersData[n]._skip = !0), (t.placement = O), (t.reset = !0))
  }
}
var w2 = { name: 'flip', enabled: !0, phase: 'main', fn: A2, requiresIfExists: ['offset'], data: { _skip: !1 } }
function _l(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x
    }
  )
}
function Ol(e) {
  return [Ae, Be, Me, we].some(function (t) {
    return e[t] >= 0
  })
}
function C2(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    l = t.modifiersData.preventOverflow,
    i = Er(t, { elementContext: 'reference' }),
    u = Er(t, { altBoundary: !0 }),
    s = _l(i, n),
    c = _l(u, o, l),
    d = Ol(s),
    g = Ol(c)
  ;(t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: g
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': d,
      'data-popper-escaped': g
    }))
}
var S2 = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: C2 }
function k2(e, t, r) {
  var n = rt(e),
    o = [we, Ae].indexOf(n) >= 0 ? -1 : 1,
    l = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    i = l[0],
    u = l[1]
  return (i = i || 0), (u = (u || 0) * o), [we, Be].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u }
}
function _2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    l = o === void 0 ? [0, 0] : o,
    i = ks.reduce(function (d, g) {
      return (d[g] = k2(g, t.rects, l)), d
    }, {}),
    u = i[t.placement],
    s = u.x,
    c = u.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s), (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = i)
}
var O2 = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: _2 }
function T2(e) {
  var t = e.state,
    r = e.name
  t.modifiersData[r] = Ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  })
}
var R2 = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: T2, data: {} }
function F2(e) {
  return e === 'x' ? 'y' : 'x'
}
function D2(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    l = o === void 0 ? !0 : o,
    i = r.altAxis,
    u = i === void 0 ? !1 : i,
    s = r.boundary,
    c = r.rootBoundary,
    d = r.altBoundary,
    g = r.padding,
    h = r.tether,
    p = h === void 0 ? !0 : h,
    m = r.tetherOffset,
    f = m === void 0 ? 0 : m,
    E = Er(t, { boundary: s, rootBoundary: c, padding: g, altBoundary: d }),
    b = rt(t.placement),
    x = Yt(t.placement),
    y = !x,
    v = oo(b),
    A = F2(v),
    w = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    S = t.rects.popper,
    O = typeof f == 'function' ? f(Object.assign({}, t.rects, { placement: t.placement })) : f,
    T = typeof O == 'number' ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    D = { x: 0, y: 0 }
  if (w) {
    if (l) {
      var F,
        j = v === 'y' ? Ae : we,
        L = v === 'y' ? Me : Be,
        M = v === 'y' ? 'height' : 'width',
        H = w[v],
        P = H + E[j],
        $ = H - E[L],
        N = p ? -S[M] / 2 : 0,
        K = x === Ut ? k[M] : S[M],
        re = x === Ut ? -S[M] : -k[M],
        G = t.elements.arrow,
        J = p && G ? ao(G) : { width: 0, height: 0 },
        I = t.modifiersData['arrow#persistent'] ? t.modifiersData['arrow#persistent'].padding : Ts(),
        V = I[j],
        z = I[L],
        ie = fr(0, k[M], J[M]),
        he = y ? k[M] / 2 - N - ie - V - T.mainAxis : K - ie - V - T.mainAxis,
        at = y ? -k[M] / 2 + N + ie + z + T.mainAxis : re + ie + z + T.mainAxis,
        Re = t.elements.arrow && Tr(t.elements.arrow),
        Ze = Re ? (v === 'y' ? Re.clientTop || 0 : Re.clientLeft || 0) : 0,
        B = (F = R == null ? void 0 : R[v]) != null ? F : 0,
        Ie = H + he - B - Ze,
        Pe = H + at - B,
        Et = fr(p ? rn(P, Ie) : P, H, p ? Ot($, Pe) : $)
      ;(w[v] = Et), (D[v] = Et - H)
    }
    if (u) {
      var Mt,
        Ve = v === 'x' ? Ae : we,
        Dr = v === 'x' ? Me : Be,
        ye = w[A],
        xt = A === 'y' ? 'height' : 'width',
        qe = ye + E[Ve],
        Bt = ye - E[Dr],
        ze = [Ae, we].indexOf(b) !== -1,
        $t = (Mt = R == null ? void 0 : R[A]) != null ? Mt : 0,
        Ue = ze ? qe : ye - k[xt] - S[xt] - $t + T.altAxis,
        pe = ze ? ye + k[xt] + S[xt] - $t - T.altAxis : Bt,
        je = p && ze ? r2(Ue, ye, pe) : fr(p ? Ue : qe, ye, p ? pe : Bt)
      ;(w[A] = je), (D[A] = je - ye)
    }
    t.modifiersData[n] = D
  }
}
var L2 = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: D2, requiresIfExists: ['offset'] }
function M2(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function B2(e) {
  return e === _e(e) || !Le(e) ? lo(e) : M2(e)
}
function $2(e) {
  var t = e.getBoundingClientRect(),
    r = Wt(t.width) / e.offsetWidth || 1,
    n = Wt(t.height) / e.offsetHeight || 1
  return r !== 1 || n !== 1
}
function I2(e, t, r) {
  r === void 0 && (r = !1)
  var n = Le(t),
    o = Le(t) && $2(t),
    l = vt(t),
    i = Gt(e, o, r),
    u = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 }
  return (
    (n || (!n && !r)) &&
      ((nt(t) !== 'body' || so(l)) && (u = B2(t)),
      Le(t) ? ((s = Gt(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop)) : l && (s.x = io(l))),
    { x: i.left + u.scrollLeft - s.x, y: i.top + u.scrollTop - s.y, width: i.width, height: i.height }
  )
}
function j2(e) {
  var t = new Map(),
    r = new Set(),
    n = []
  e.forEach(function (l) {
    t.set(l.name, l)
  })
  function o(l) {
    r.add(l.name)
    var i = [].concat(l.requires || [], l.requiresIfExists || [])
    i.forEach(function (u) {
      if (!r.has(u)) {
        var s = t.get(u)
        s && o(s)
      }
    }),
      n.push(l)
  }
  return (
    e.forEach(function (l) {
      r.has(l.name) || o(l)
    }),
    n
  )
}
function H2(e) {
  var t = j2(e)
  return Kp.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n
      })
    )
  }, [])
}
function N2(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ;(t = void 0), r(e())
          })
        })),
      t
    )
  }
}
function Z2(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name]
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data)
          })
        : n),
      r
    )
  }, {})
  return Object.keys(t).map(function (r) {
    return t[r]
  })
}
var Tl = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function Rl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function P2(e) {
  e === void 0 && (e = {})
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    l = o === void 0 ? Tl : o
  return function (i, u, s) {
    s === void 0 && (s = l)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Tl, l),
        modifiersData: {},
        elements: { reference: i, popper: u },
        attributes: {},
        styles: {}
      },
      d = [],
      g = !1,
      h = {
        state: c,
        setOptions: function (f) {
          var E = typeof f == 'function' ? f(c.options) : f
          m(),
            (c.options = Object.assign({}, l, c.options, E)),
            (c.scrollParents = {
              reference: Ft(i) ? mr(i) : i.contextElement ? mr(i.contextElement) : [],
              popper: mr(u)
            })
          var b = H2(Z2([].concat(n, c.options.modifiers)))
          return (
            (c.orderedModifiers = b.filter(function (x) {
              return x.enabled
            })),
            p(),
            h.update()
          )
        },
        forceUpdate: function () {
          if (!g) {
            var f = c.elements,
              E = f.reference,
              b = f.popper
            if (Rl(E, b)) {
              ;(c.rects = { reference: I2(E, Tr(b), c.options.strategy === 'fixed'), popper: ao(b) }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (S) {
                  return (c.modifiersData[S.name] = Object.assign({}, S.data))
                })
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (x = -1)
                  continue
                }
                var y = c.orderedModifiers[x],
                  v = y.fn,
                  A = y.options,
                  w = A === void 0 ? {} : A,
                  k = y.name
                typeof v == 'function' && (c = v({ state: c, options: w, name: k, instance: h }) || c)
              }
            }
          }
        },
        update: N2(function () {
          return new Promise(function (f) {
            h.forceUpdate(), f(c)
          })
        }),
        destroy: function () {
          m(), (g = !0)
        }
      }
    if (!Rl(i, u)) return h
    h.setOptions(s).then(function (f) {
      !g && s.onFirstUpdate && s.onFirstUpdate(f)
    })
    function p() {
      c.orderedModifiers.forEach(function (f) {
        var E = f.name,
          b = f.options,
          x = b === void 0 ? {} : b,
          y = f.effect
        if (typeof y == 'function') {
          var v = y({ state: c, name: E, instance: h, options: x }),
            A = function () {}
          d.push(v || A)
        }
      })
    }
    function m() {
      d.forEach(function (f) {
        return f()
      }),
        (d = [])
    }
    return h
  }
}
var V2 = [p2, R2, c2, Qp, O2, w2, L2, l2, S2],
  q2 = P2({ defaultModifiers: V2 }),
  z2 = Oe(jp()),
  U2 = [],
  W2 = function (e, t, r) {
    r === void 0 && (r = {})
    var n = C.useRef(null),
      o = {
        onFirstUpdate: r.onFirstUpdate,
        placement: r.placement || 'bottom',
        strategy: r.strategy || 'absolute',
        modifiers: r.modifiers || U2
      },
      l = C.useState({
        styles: { popper: { position: o.strategy, left: '0', top: '0' }, arrow: { position: 'absolute' } },
        attributes: {}
      }),
      i = l[0],
      u = l[1],
      s = C.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (g) {
            var h = g.state,
              p = Object.keys(h.elements)
            qc.flushSync(function () {
              u({
                styles: El(
                  p.map(function (m) {
                    return [m, h.styles[m] || {}]
                  })
                ),
                attributes: El(
                  p.map(function (m) {
                    return [m, h.attributes[m]]
                  })
                )
              })
            })
          },
          requires: ['computeStyles']
        }
      }, []),
      c = C.useMemo(
        function () {
          var g = {
            onFirstUpdate: o.onFirstUpdate,
            placement: o.placement,
            strategy: o.strategy,
            modifiers: [].concat(o.modifiers, [s, { name: 'applyStyles', enabled: !1 }])
          }
          return (0, z2.default)(n.current, g) ? n.current || g : ((n.current = g), g)
        },
        [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, s]
      ),
      d = C.useRef()
    return (
      xl(
        function () {
          d.current && d.current.setOptions(c)
        },
        [c]
      ),
      xl(
        function () {
          if (!(e == null || t == null)) {
            var g = r.createPopper || q2,
              h = g(e, t, c)
            return (
              (d.current = h),
              function () {
                h.destroy(), (d.current = null)
              }
            )
          }
        },
        [e, t, r.createPopper]
      ),
      {
        state: d.current ? d.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null
      }
    )
  }
function Ms(e) {
  var t = C.useRef(e)
  return (
    (t.current = e),
    C.useCallback(function () {
      return t.current
    }, [])
  )
}
var G2 = function () {}
function Y2(e) {
  var t = e.initial,
    r = e.value,
    n = e.onChange,
    o = n === void 0 ? G2 : n
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined')
  var l = C.useState(t),
    i = l[0],
    u = l[1],
    s = Ms(i),
    c = C.useCallback(
      function (g) {
        var h = s(),
          p = typeof g == 'function' ? g(h) : g
        typeof p.persist == 'function' && p.persist(), u(p), typeof o == 'function' && o(p)
      },
      [s, o]
    ),
    d = r !== void 0
  return [d ? r : i, d ? o : c]
}
function Bs(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    function () {
      return {
        width: 0,
        height: 0,
        top: t,
        right: e,
        bottom: t,
        left: e,
        x: 0,
        y: 0,
        toJSON: function () {
          return null
        }
      }
    }
  )
}
var K2 = ['styles', 'attributes'],
  Fl = { getBoundingClientRect: Bs() },
  Dl = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 },
    offset: [0, 6],
    trigger: 'hover'
  }
function J2(e, t) {
  var r, n, o
  e === void 0 && (e = {}), t === void 0 && (t = {})
  var l = Object.keys(Dl).reduce(function (L, M) {
      var H
      return ve({}, L, ((H = {}), (H[M] = L[M] !== void 0 ? L[M] : Dl[M]), H))
    }, e),
    i = C.useMemo(
      function () {
        return [{ name: 'offset', options: { offset: l.offset } }]
      },
      Array.isArray(l.offset) ? l.offset : []
    ),
    u = ve({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }),
    s = C.useState(null),
    c = s[0],
    d = s[1],
    g = C.useState(null),
    h = g[0],
    p = g[1],
    m = Y2({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }),
    f = m[0],
    E = m[1],
    b = C.useRef()
  C.useEffect(function () {
    return function () {
      return clearTimeout(b.current)
    }
  }, [])
  var x = W2(l.followCursor ? Fl : c, h, u),
    y = x.styles,
    v = x.attributes,
    A = Ya(x, K2),
    w = A.update,
    k = Ms({ visible: f, triggerRef: c, tooltipRef: h, finalConfig: l }),
    S = C.useCallback(
      function (L) {
        return Array.isArray(l.trigger) ? l.trigger.includes(L) : l.trigger === L
      },
      Array.isArray(l.trigger) ? l.trigger : [l.trigger]
    ),
    O = C.useCallback(
      function () {
        clearTimeout(b.current),
          (b.current = window.setTimeout(function () {
            return E(!1)
          }, l.delayHide))
      },
      [l.delayHide, E]
    ),
    T = C.useCallback(
      function () {
        clearTimeout(b.current),
          (b.current = window.setTimeout(function () {
            return E(!0)
          }, l.delayShow))
      },
      [l.delayShow, E]
    ),
    R = C.useCallback(
      function () {
        k().visible ? O() : T()
      },
      [k, O, T]
    )
  C.useEffect(
    function () {
      if (k().finalConfig.closeOnOutsideClick) {
        var L = function (M) {
          var H,
            P = k(),
            $ = P.tooltipRef,
            N = P.triggerRef,
            K = (M.composedPath == null || (H = M.composedPath()) == null ? void 0 : H[0]) || M.target
          K instanceof Node && $ != null && N != null && !$.contains(K) && !N.contains(K) && O()
        }
        return (
          document.addEventListener('mousedown', L),
          function () {
            return document.removeEventListener('mousedown', L)
          }
        )
      }
    },
    [k, O]
  ),
    C.useEffect(
      function () {
        if (!(c == null || !S('click')))
          return (
            c.addEventListener('click', R),
            function () {
              return c.removeEventListener('click', R)
            }
          )
      },
      [c, S, R]
    ),
    C.useEffect(
      function () {
        if (!(c == null || !S('double-click')))
          return (
            c.addEventListener('dblclick', R),
            function () {
              return c.removeEventListener('dblclick', R)
            }
          )
      },
      [c, S, R]
    ),
    C.useEffect(
      function () {
        if (!(c == null || !S('right-click'))) {
          var L = function (M) {
            M.preventDefault(), R()
          }
          return (
            c.addEventListener('contextmenu', L),
            function () {
              return c.removeEventListener('contextmenu', L)
            }
          )
        }
      },
      [c, S, R]
    ),
    C.useEffect(
      function () {
        if (!(c == null || !S('focus')))
          return (
            c.addEventListener('focus', T),
            c.addEventListener('blur', O),
            function () {
              c.removeEventListener('focus', T), c.removeEventListener('blur', O)
            }
          )
      },
      [c, S, T, O]
    ),
    C.useEffect(
      function () {
        if (!(c == null || !S('hover')))
          return (
            c.addEventListener('mouseenter', T),
            c.addEventListener('mouseleave', O),
            function () {
              c.removeEventListener('mouseenter', T), c.removeEventListener('mouseleave', O)
            }
          )
      },
      [c, S, T, O]
    ),
    C.useEffect(
      function () {
        if (!(h == null || !S('hover') || !k().finalConfig.interactive))
          return (
            h.addEventListener('mouseenter', T),
            h.addEventListener('mouseleave', O),
            function () {
              h.removeEventListener('mouseenter', T), h.removeEventListener('mouseleave', O)
            }
          )
      },
      [h, S, T, O, k]
    )
  var D =
    A == null || (r = A.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null
      ? void 0
      : o.isReferenceHidden
  C.useEffect(
    function () {
      l.closeOnTriggerHidden && D && O()
    },
    [l.closeOnTriggerHidden, O, D]
  ),
    C.useEffect(
      function () {
        if (!l.followCursor || c == null) return
        function L(M) {
          var H = M.clientX,
            P = M.clientY
          ;(Fl.getBoundingClientRect = Bs(H, P)), w == null || w()
        }
        return (
          c.addEventListener('mousemove', L),
          function () {
            return c.removeEventListener('mousemove', L)
          }
        )
      },
      [l.followCursor, c, w]
    ),
    C.useEffect(
      function () {
        if (!(h == null || w == null || l.mutationObserverOptions == null)) {
          var L = new MutationObserver(w)
          return (
            L.observe(h, l.mutationObserverOptions),
            function () {
              return L.disconnect()
            }
          )
        }
      },
      [l.mutationObserverOptions, h, w]
    )
  var F = function (L) {
      return (
        L === void 0 && (L = {}),
        ve({}, L, { style: ve({}, L.style, y.popper) }, v.popper, { 'data-popper-interactive': l.interactive })
      )
    },
    j = function (L) {
      return L === void 0 && (L = {}), ve({}, L, v.arrow, { style: ve({}, L.style, y.arrow), 'data-popper-arrow': !0 })
    }
  return ve(
    {
      getArrowProps: j,
      getTooltipProps: F,
      setTooltipRef: p,
      setTriggerRef: d,
      tooltipRef: h,
      triggerRef: c,
      visible: f
    },
    A
  )
}
var Fe = Dt(1e3)((e, t, r, n = 0) => (t.split('-')[0] === e ? r : n)),
  pt = 8,
  X2 = _.div(
    { position: 'absolute', borderStyle: 'solid' },
    ({ placement: e }) => {
      let t = 0,
        r = 0
      switch (!0) {
        case e.startsWith('left') || e.startsWith('right'): {
          r = 8
          break
        }
        case e.startsWith('top') || e.startsWith('bottom'): {
          t = 8
          break
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` }
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${Fe('top', r, `${pt * -1}px`, 'auto')}`,
      top: `${Fe('bottom', r, `${pt * -1}px`, 'auto')}`,
      right: `${Fe('left', r, `${pt * -1}px`, 'auto')}`,
      left: `${Fe('right', r, `${pt * -1}px`, 'auto')}`,
      borderBottomWidth: `${Fe('top', r, '0', pt)}px`,
      borderTopWidth: `${Fe('bottom', r, '0', pt)}px`,
      borderRightWidth: `${Fe('left', r, '0', pt)}px`,
      borderLeftWidth: `${Fe('right', r, '0', pt)}px`,
      borderTopColor: Fe(
        'top',
        r,
        e.color[t] || t || e.base === 'light' ? pr(e.background.app) : e.background.app,
        'transparent'
      ),
      borderBottomColor: Fe(
        'bottom',
        r,
        e.color[t] || t || e.base === 'light' ? pr(e.background.app) : e.background.app,
        'transparent'
      ),
      borderLeftColor: Fe(
        'left',
        r,
        e.color[t] || t || e.base === 'light' ? pr(e.background.app) : e.background.app,
        'transparent'
      ),
      borderRightColor: Fe(
        'right',
        r,
        e.color[t] || t || e.base === 'light' ? pr(e.background.app) : e.background.app,
        'transparent'
      )
    })
  ),
  Q2 = _.div(
    ({ hidden: e }) => ({ display: e ? 'none' : 'inline-block', zIndex: 2147483647 }),
    ({ theme: e, color: t, hasChrome: r }) =>
      r
        ? {
            background: e.color[t] || t || e.base === 'light' ? pr(e.background.app) : e.background.app,
            filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
            borderRadius: e.appBorderRadius,
            fontSize: e.typography.size.s1
          }
        : {}
  ),
  uo = a.forwardRef(
    ({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: o, color: l, withArrows: i, ...u }, s) =>
      a.createElement(
        Q2,
        { 'data-testid': 'tooltip', hasChrome: t, ref: s, ...u, color: l },
        t && i && a.createElement(X2, { placement: e, ...n, color: l }),
        r
      )
  )
uo.displayName = 'Tooltip'
uo.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: 'top', arrowProps: {} }
var { document: Gr } = Ip,
  e5 = _.div`
  display: inline-block;
  cursor: ${e => (e.trigger === 'hover' || e.trigger.includes('hover') ? 'default' : 'pointer')};
`,
  t5 = _.g`
  cursor: ${e => (e.trigger === 'hover' || e.trigger.includes('hover') ? 'default' : 'pointer')};
`,
  $s = ({
    svg: e,
    trigger: t,
    closeOnOutsideClick: r,
    placement: n,
    hasChrome: o,
    withArrows: l,
    offset: i,
    tooltip: u,
    children: s,
    closeOnTriggerHidden: c,
    mutationObserverOptions: d,
    closeOnClick: g,
    tooltipShown: h,
    onVisibilityChange: p,
    defaultVisible: m,
    delayHide: f,
    visible: E,
    interactive: b,
    delayShow: x,
    modifiers: y,
    strategy: v,
    followCursor: A,
    onVisibleChange: w,
    ...k
  }) => {
    let S = e ? t5 : e5,
      {
        getArrowProps: O,
        getTooltipProps: T,
        setTooltipRef: R,
        setTriggerRef: D,
        visible: F,
        state: j
      } = J2(
        {
          trigger: t,
          placement: n,
          defaultVisible: m ?? h,
          delayHide: f,
          interactive: b,
          closeOnOutsideClick: r ?? g,
          closeOnTriggerHidden: c,
          onVisibleChange: M => {
            p == null || p(M), w == null || w(M)
          },
          delayShow: x,
          followCursor: A,
          mutationObserverOptions: d,
          visible: E,
          offset: i
        },
        { modifiers: y, strategy: v }
      ),
      L = a.createElement(
        uo,
        { placement: j == null ? void 0 : j.placement, ref: R, hasChrome: o, arrowProps: O(), withArrows: l, ...T() },
        typeof u == 'function' ? u({ onHide: () => w(!1) }) : u
      )
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(S, { trigger: t, ref: D, ...k }, s),
      F && Vc.createPortal(L, Gr.body)
    )
  }
$s.defaultProps = {
  svg: !1,
  trigger: 'click',
  closeOnOutsideClick: !1,
  placement: 'top',
  modifiers: [
    { name: 'preventOverflow', options: { padding: 8 } },
    { name: 'offset', options: { offset: [8, 8] } },
    { name: 'arrow', options: { padding: 8 } }
  ],
  hasChrome: !0,
  defaultVisible: !1
}
var r5 = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, o] = C.useState(e),
    l = C.useCallback(
      i => {
        ;(t && t(i) === !1) || o(i)
      },
      [t]
    )
  return (
    C.useEffect(() => {
      let i = () => l(!1)
      Gr.addEventListener('keydown', i, !1)
      let u = Array.from(Gr.getElementsByTagName('iframe')),
        s = []
      return (
        u.forEach(c => {
          let d = () => {
            try {
              c.contentWindow.document &&
                (c.contentWindow.document.addEventListener('click', i),
                s.push(() => {
                  try {
                    c.contentWindow.document.removeEventListener('click', i)
                  } catch {}
                }))
            } catch {}
          }
          d(),
            c.addEventListener('load', d),
            s.push(() => {
              c.removeEventListener('load', d)
            })
        }),
        () => {
          Gr.removeEventListener('keydown', i),
            s.forEach(c => {
              c()
            })
        }
      )
    }),
    a.createElement($s, { ...r, visible: n, onVisibleChange: l })
  )
}
function n5(e, t) {
  var r = C.useRef(null),
    n = C.useRef(null)
  n.current = t
  var o = C.useRef(null)
  C.useEffect(function () {
    l()
  })
  var l = C.useCallback(
    function () {
      var i = o.current,
        u = n.current,
        s = i || (u ? (u instanceof Element ? u : u.current) : null)
      ;(r.current && r.current.element === s && r.current.subscriber === e) ||
        (r.current && r.current.cleanup && r.current.cleanup(),
        (r.current = { element: s, subscriber: e, cleanup: s ? e(s) : void 0 }))
    },
    [e]
  )
  return (
    C.useEffect(function () {
      return function () {
        r.current && r.current.cleanup && (r.current.cleanup(), (r.current = null))
      }
    }, []),
    C.useCallback(
      function (i) {
        ;(o.current = i), l()
      },
      [l]
    )
  )
}
function Ll(e, t, r) {
  return e[t]
    ? e[t][0]
      ? e[t][0][r]
      : e[t][r]
    : t === 'contentBoxSize'
    ? e.contentRect[r === 'inlineSize' ? 'width' : 'height']
    : void 0
}
function Is(e) {
  e === void 0 && (e = {})
  var t = e.onResize,
    r = C.useRef(void 0)
  r.current = t
  var n = e.round || Math.round,
    o = C.useRef(),
    l = C.useState({ width: void 0, height: void 0 }),
    i = l[0],
    u = l[1],
    s = C.useRef(!1)
  C.useEffect(function () {
    return (
      (s.current = !1),
      function () {
        s.current = !0
      }
    )
  }, [])
  var c = C.useRef({ width: void 0, height: void 0 }),
    d = n5(
      C.useCallback(
        function (g) {
          return (
            (!o.current || o.current.box !== e.box || o.current.round !== n) &&
              (o.current = {
                box: e.box,
                round: n,
                instance: new ResizeObserver(function (h) {
                  var p = h[0],
                    m =
                      e.box === 'border-box'
                        ? 'borderBoxSize'
                        : e.box === 'device-pixel-content-box'
                        ? 'devicePixelContentBoxSize'
                        : 'contentBoxSize',
                    f = Ll(p, m, 'inlineSize'),
                    E = Ll(p, m, 'blockSize'),
                    b = f ? n(f) : void 0,
                    x = E ? n(E) : void 0
                  if (c.current.width !== b || c.current.height !== x) {
                    var y = { width: b, height: x }
                    ;(c.current.width = b), (c.current.height = x), r.current ? r.current(y) : s.current || u(y)
                  }
                })
              }),
            o.current.instance.observe(g, { box: e.box }),
            function () {
              o.current && o.current.instance.unobserve(g)
            }
          )
        },
        [e.box, n]
      ),
      e.ref
    )
  return C.useMemo(
    function () {
      return { ref: d, width: i.width, height: i.height }
    },
    [d, i.width, i.height]
  )
}
var a5 = Object.create,
  js = Object.defineProperty,
  o5 = Object.getOwnPropertyDescriptor,
  l5 = Object.getOwnPropertyNames,
  i5 = Object.getPrototypeOf,
  s5 = Object.prototype.hasOwnProperty,
  u5 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  c5 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of l5(t))
        !s5.call(e, o) && o !== r && js(e, o, { get: () => t[o], enumerable: !(n = o5(t, o)) || n.enumerable })
    return e
  },
  d5 = (e, t, r) => (
    (r = e != null ? a5(i5(e)) : {}),
    c5(t || !e || !e.__esModule ? js(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  p5 = u5(e => {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isEqual = (function () {
        var t = Object.prototype.toString,
          r = Object.getPrototypeOf,
          n = Object.getOwnPropertySymbols
            ? function (o) {
                return Object.keys(o).concat(Object.getOwnPropertySymbols(o))
              }
            : Object.keys
        return function (o, l) {
          return (function i(u, s, c) {
            var d,
              g,
              h,
              p = t.call(u),
              m = t.call(s)
            if (u === s) return !0
            if (u == null || s == null) return !1
            if (c.indexOf(u) > -1 && c.indexOf(s) > -1) return !0
            if (
              (c.push(u, s),
              p != m ||
                ((d = n(u)),
                (g = n(s)),
                d.length != g.length ||
                  d.some(function (f) {
                    return !i(u[f], s[f], c)
                  })))
            )
              return !1
            switch (p.slice(8, -1)) {
              case 'Symbol':
                return u.valueOf() == s.valueOf()
              case 'Date':
              case 'Number':
                return +u == +s || (+u != +u && +s != +s)
              case 'RegExp':
              case 'Function':
              case 'String':
              case 'Boolean':
                return '' + u == '' + s
              case 'Set':
              case 'Map':
                ;(d = u.entries()), (g = s.entries())
                do if (!i((h = d.next()).value, g.next().value, c)) return !1
                while (!h.done)
                return !0
              case 'ArrayBuffer':
                ;(u = new Uint8Array(u)), (s = new Uint8Array(s))
              case 'DataView':
                ;(u = new Uint8Array(u.buffer)), (s = new Uint8Array(s.buffer))
              case 'Float32Array':
              case 'Float64Array':
              case 'Int8Array':
              case 'Int16Array':
              case 'Int32Array':
              case 'Uint8Array':
              case 'Uint16Array':
              case 'Uint32Array':
              case 'Uint8ClampedArray':
              case 'Arguments':
              case 'Array':
                if (u.length != s.length) return !1
                for (h = 0; h < u.length; h++)
                  if ((h in u || h in s) && (h in u != h in s || !i(u[h], s[h], c))) return !1
                return !0
              case 'Object':
                return i(r(u), r(s), c)
              default:
                return !1
            }
          })(o, l, [])
        }
      })())
  }),
  Ml = d5(p5()),
  Hs = e => e.map(t => typeof t < 'u').filter(Boolean).length,
  f5 = (e, t) => {
    let { exists: r, eq: n, neq: o, truthy: l } = e
    if (Hs([r, n, o, l]) > 1)
      throw new Error(`Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`)
    if (typeof n < 'u') return (0, Ml.isEqual)(t, n)
    if (typeof o < 'u') return !(0, Ml.isEqual)(t, o)
    if (typeof r < 'u') {
      let i = typeof t < 'u'
      return r ? i : !i
    }
    return typeof l > 'u' || l ? !!t : !t
  },
  m5 = (e, t, r) => {
    if (!e.if) return !0
    let { arg: n, global: o } = e.if
    if (Hs([n, o]) !== 1) throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`)
    let l = n ? t[n] : r[o]
    return f5(e.if, l)
  },
  Ns = e =>
    e
      .toLowerCase()
      .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
const { global: g5 } = __STORYBOOK_MODULE_GLOBAL__
var Q = ({ ...e }, t) => {
  let r = [e.class, e.className]
  return delete e.class, (e.className = ['sbdocs', `sbdocs-${t}`, ...r].filter(Boolean).join(' ')), e
}
function h5(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function xr(e, t) {
  return (
    (xr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r
        }),
    xr(e, t)
  )
}
function y5(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), xr(e, t)
}
function va(e) {
  return (
    (va = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    va(e)
  )
}
function b5(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1
}
function v5() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
  if (typeof Proxy == 'function') return !0
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
  } catch {
    return !1
  }
}
function Yr(e, t, r) {
  return (
    v5()
      ? (Yr = Reflect.construct.bind())
      : (Yr = function (n, o, l) {
          var i = [null]
          i.push.apply(i, o)
          var u = Function.bind.apply(n, i),
            s = new u()
          return l && xr(s, l.prototype), s
        }),
    Yr.apply(null, arguments)
  )
}
function Ea(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (Ea = function (r) {
      if (r === null || !b5(r)) return r
      if (typeof r != 'function') throw new TypeError('Super expression must either be null or a function')
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r)
        t.set(r, n)
      }
      function n() {
        return Yr(r, arguments, va(this).constructor)
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
        })),
        xr(n, r)
      )
    }),
    Ea(e)
  )
}
var Qe = (function (e) {
  y5(t, e)
  function t(r) {
    var n
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      h5(n)
    )
  }
  return t
})(Ea(Error))
function qn(e) {
  return Math.round(e * 255)
}
function E5(e, t, r) {
  return qn(e) + ',' + qn(t) + ',' + qn(r)
}
function Ar(e, t, r, n) {
  if ((n === void 0 && (n = E5), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i))
  var d = r - l / 2,
    g = u + d,
    h = s + d,
    p = c + d
  return n(g, h, p)
}
var Bl = {
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
function x5(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return Bl[t] ? '#' + Bl[t] : e
}
var A5 = /^#[a-fA-F0-9]{6}$/,
  w5 = /^#[a-fA-F0-9]{8}$/,
  C5 = /^#[a-fA-F0-9]{3}$/,
  S5 = /^#[a-fA-F0-9]{4}$/,
  zn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  k5 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  _5 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  O5 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function co(e) {
  if (typeof e != 'string') throw new Qe(3)
  var t = x5(e)
  if (t.match(A5))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16)
    }
  if (t.match(w5)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r
    }
  }
  if (t.match(C5))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16)
    }
  if (t.match(S5)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n
    }
  }
  var o = zn.exec(t)
  if (o) return { red: parseInt('' + o[1], 10), green: parseInt('' + o[2], 10), blue: parseInt('' + o[3], 10) }
  var l = k5.exec(t.substring(0, 50))
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha: parseFloat('' + l[4]) > 1 ? parseFloat('' + l[4]) / 100 : parseFloat('' + l[4])
    }
  var i = _5.exec(t)
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Ar(u, s, c) + ')',
      g = zn.exec(d)
    if (!g) throw new Qe(4, t, d)
    return { red: parseInt('' + g[1], 10), green: parseInt('' + g[2], 10), blue: parseInt('' + g[3], 10) }
  }
  var h = O5.exec(t.substring(0, 50))
  if (h) {
    var p = parseInt('' + h[1], 10),
      m = parseInt('' + h[2], 10) / 100,
      f = parseInt('' + h[3], 10) / 100,
      E = 'rgb(' + Ar(p, m, f) + ')',
      b = zn.exec(E)
    if (!b) throw new Qe(4, t, E)
    return {
      red: parseInt('' + b[1], 10),
      green: parseInt('' + b[2], 10),
      blue: parseInt('' + b[3], 10),
      alpha: parseFloat('' + h[4]) > 1 ? parseFloat('' + h[4]) / 100 : parseFloat('' + h[4])
    }
  }
  throw new Qe(5)
}
function T5(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i }
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l)
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0)
      break
    case r:
      u = (n - t) / s + 2
      break
    default:
      u = (t - r) / s + 4
      break
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  )
}
function Zs(e) {
  return T5(co(e))
}
var R5 = function (e) {
    return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? '#' + e[1] + e[3] + e[5] : e
  },
  xa = R5
function Ct(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function Un(e) {
  return Ct(Math.round(e * 255))
}
function F5(e, t, r) {
  return xa('#' + Un(e) + Un(t) + Un(r))
}
function nn(e, t, r) {
  return Ar(e, t, r, F5)
}
function D5(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return nn(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0) return nn(e.hue, e.saturation, e.lightness)
  throw new Qe(1)
}
function L5(e, t, r, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
    return n >= 1 ? nn(e, t, r) : 'rgba(' + Ar(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? nn(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Ar(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new Qe(2)
}
function Aa(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return xa('#' + Ct(e) + Ct(t) + Ct(r))
  if (typeof e == 'object' && t === void 0 && r === void 0) return xa('#' + Ct(e.red) + Ct(e.green) + Ct(e.blue))
  throw new Qe(6)
}
function it(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = co(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
      return n >= 1 ? Aa(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Aa(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new Qe(7)
}
var M5 = function (e) {
    return (
      typeof e.red == 'number' &&
      typeof e.green == 'number' &&
      typeof e.blue == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  B5 = function (e) {
    return (
      typeof e.red == 'number' && typeof e.green == 'number' && typeof e.blue == 'number' && typeof e.alpha == 'number'
    )
  },
  $5 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      (typeof e.alpha != 'number' || typeof e.alpha > 'u')
    )
  },
  I5 = function (e) {
    return (
      typeof e.hue == 'number' &&
      typeof e.saturation == 'number' &&
      typeof e.lightness == 'number' &&
      typeof e.alpha == 'number'
    )
  }
function Ps(e) {
  if (typeof e != 'object') throw new Qe(8)
  if (B5(e)) return it(e)
  if (M5(e)) return Aa(e)
  if (I5(e)) return L5(e)
  if ($5(e)) return D5(e)
  throw new Qe(8)
}
function Vs(e, t, r) {
  return function () {
    var n = r.concat(Array.prototype.slice.call(arguments))
    return n.length >= t ? e.apply(this, n) : Vs(e, t, n)
  }
}
function po(e) {
  return Vs(e, e.length, [])
}
function fo(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function j5(e, t) {
  if (t === 'transparent') return t
  var r = Zs(t)
  return Ps(ve({}, r, { lightness: fo(0, 1, r.lightness - parseFloat(e)) }))
}
var H5 = po(j5),
  Pt = H5
function N5(e, t) {
  if (t === 'transparent') return t
  var r = Zs(t)
  return Ps(ve({}, r, { lightness: fo(0, 1, r.lightness + parseFloat(e)) }))
}
var Z5 = po(N5),
  P5 = Z5
function V5(e, t) {
  if (t === 'transparent') return t
  var r = co(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = ve({}, r, { alpha: fo(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) })
  return it(o)
}
var q5 = po(V5),
  Ee = q5,
  er = ({ theme: e }) => ({
    margin: '20px 0 8px',
    padding: 0,
    cursor: 'text',
    position: 'relative',
    color: e.color.defaultText,
    '&:first-of-type': { marginTop: 0, paddingTop: 0 },
    '&:hover a.anchor': { textDecoration: 'none' },
    '& tt, & code': { fontSize: 'inherit' }
  }),
  dt = ({ theme: e }) => ({
    lineHeight: 1,
    margin: '0 2px',
    padding: '3px 5px',
    whiteSpace: 'nowrap',
    borderRadius: 3,
    fontSize: e.typography.size.s2 - 1,
    border: e.base === 'light' ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
    color: e.base === 'light' ? Ee(0.1, e.color.defaultText) : Ee(0.3, e.color.defaultText),
    backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border
  }),
  te = ({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s3,
    margin: 0,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch'
  }),
  Lt = { margin: '16px 0' },
  z5 = ({ href: e, children: t, ...r }) => {
    let n = /^\//.test(e),
      o = /^#.*/.test(e),
      l = n ? `./?path=${e}` : e
    return a.createElement('a', { href: l, target: o ? '_self' : '_top', ...r }, t)
  },
  qs = _(z5)(te, ({ theme: e }) => ({
    fontSize: 'inherit',
    lineHeight: '24px',
    color: e.color.secondary,
    textDecoration: 'none',
    '&.absent': { color: '#cc0000' },
    '&.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0
    }
  })),
  zs = _.blockquote(te, Lt, ({ theme: e }) => ({
    borderLeft: `4px solid ${e.color.medium}`,
    padding: '0 15px',
    color: e.color.dark,
    '& > :first-of-type': { marginTop: 0 },
    '& > :last-child': { marginBottom: 0 }
  })),
  U5 = e => typeof e == 'string',
  W5 = /[\n\r]/g,
  G5 = _.code(
    ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit'
    }),
    dt
  ),
  Y5 = _(ro)(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow: e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' }
  })),
  mo = ({ className: e, children: t, ...r }) => {
    let n = (e || '').match(/lang-(\S+)/),
      o = C.Children.toArray(t)
    return o.filter(U5).some(l => l.match(W5))
      ? a.createElement(
          Y5,
          { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? 'plaintext', format: !1, ...r },
          t
        )
      : a.createElement(G5, { ...r, className: e }, o)
  },
  Us = _.div(te),
  Ws = _.dl(te, {
    ...Lt,
    padding: 0,
    '& dt': { fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic', padding: 0, margin: '16px 0 4px' },
    '& dt:first-of-type': { padding: 0 },
    '& dt > :first-of-type': { marginTop: 0 },
    '& dt > :last-child': { marginBottom: 0 },
    '& dd': { margin: '0 0 16px', padding: '0 15px' },
    '& dd > :first-of-type': { marginTop: 0 },
    '& dd > :last-child': { marginBottom: 0 }
  }),
  Gs = _.h1(te, er, ({ theme: e }) => ({
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold
  })),
  go = _.h2(te, er, ({ theme: e }) => ({
    fontSize: `${e.typography.size.m2}px`,
    paddingBottom: 4,
    borderBottom: `1px solid ${e.appBorderColor}`
  })),
  ho = _.h3(te, er, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })),
  Ys = _.h4(te, er, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })),
  Ks = _.h5(te, er, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })),
  Js = _.h6(te, er, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })),
  Xs = _.hr(({ theme: e }) => ({
    border: '0 none',
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0
  })),
  Qs = _.img({ maxWidth: '100%' }),
  eu = _.li(te, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    lineHeight: '24px',
    '& + li': { marginTop: '.25em' },
    '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
    '& code': dt({ theme: e })
  })),
  K5 = { paddingLeft: 30, '& :first-of-type': { marginTop: 0 }, '& :last-child': { marginBottom: 0 } },
  tu = _.ol(te, Lt, { ...K5, listStyle: 'decimal' }),
  ru = _.p(te, Lt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    color: e.color.defaultText,
    '& code': dt({ theme: e })
  })),
  nu = _.pre(te, Lt, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '18px',
    padding: '11px 1rem',
    whiteSpace: 'pre-wrap',
    color: 'inherit',
    borderRadius: 3,
    margin: '1rem 0',
    '&:not(.prismjs)': { background: 'transparent', border: 'none', borderRadius: 0, padding: 0, margin: 0 },
    '& pre, &.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
      code: { color: 'inherit', fontSize: 'inherit' }
    },
    '& code': { whiteSpace: 'pre' },
    '& code, & tt': { border: 'none' }
  })),
  au = _.span(te, ({ theme: e }) => ({
    '&.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto'
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': { clear: 'both', color: e.color.darkest, display: 'block', padding: '5px 0 0' }
    },
    '&.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'center' },
      '& span img': { margin: '0 auto', textAlign: 'center' }
    },
    '&.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right' },
      '& span img': { margin: 0, textAlign: 'right' }
    },
    '&.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' }
    },
    '&.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'right' }
    }
  })),
  ou = _.table(te, Lt, ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '24px',
    padding: 0,
    borderCollapse: 'collapse',
    '& tr': { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 },
    '& tr:nth-of-type(2n)': { backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter },
    '& tr th': {
      fontWeight: 'bold',
      color: e.color.defaultText,
      border: `1px solid ${e.appBorderColor}`,
      margin: 0,
      padding: '6px 13px'
    },
    '& tr td': { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: '6px 13px' },
    '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
    '& tr th :last-child, & tr td :last-child': { marginBottom: 0 }
  })),
  lu = _.title(dt),
  J5 = { paddingLeft: 30, '& :first-of-type': { marginTop: 0 }, '& :last-child': { marginBottom: 0 } },
  iu = _.ul(te, Lt, { ...J5, listStyle: 'disc' }),
  yo = _.div(te),
  su = {
    h1: e => a.createElement(Gs, { ...Q(e, 'h1') }),
    h2: e => a.createElement(go, { ...Q(e, 'h2') }),
    h3: e => a.createElement(ho, { ...Q(e, 'h3') }),
    h4: e => a.createElement(Ys, { ...Q(e, 'h4') }),
    h5: e => a.createElement(Ks, { ...Q(e, 'h5') }),
    h6: e => a.createElement(Js, { ...Q(e, 'h6') }),
    pre: e => a.createElement(nu, { ...Q(e, 'pre') }),
    a: e => a.createElement(qs, { ...Q(e, 'a') }),
    hr: e => a.createElement(Xs, { ...Q(e, 'hr') }),
    dl: e => a.createElement(Ws, { ...Q(e, 'dl') }),
    blockquote: e => a.createElement(zs, { ...Q(e, 'blockquote') }),
    table: e => a.createElement(ou, { ...Q(e, 'table') }),
    img: e => a.createElement(Qs, { ...Q(e, 'img') }),
    div: e => a.createElement(Us, { ...Q(e, 'div') }),
    span: e => a.createElement(au, { ...Q(e, 'span') }),
    li: e => a.createElement(eu, { ...Q(e, 'li') }),
    ul: e => a.createElement(iu, { ...Q(e, 'ul') }),
    ol: e => a.createElement(tu, { ...Q(e, 'ol') }),
    p: e => a.createElement(ru, { ...Q(e, 'p') }),
    code: e => a.createElement(mo, { ...Q(e, 'code') }),
    tt: e => a.createElement(lu, { ...Q(e, 'tt') }),
    resetwrapper: e => a.createElement(yo, { ...Q(e, 'resetwrapper') })
  },
  X5 = _.div(
    ({ theme: e }) => ({
      display: 'inline-block',
      fontSize: 11,
      lineHeight: '12px',
      alignSelf: 'center',
      padding: '4px 12px',
      borderRadius: '3em',
      fontWeight: e.typography.weight.bold
    }),
    { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: 'currentColor' } } },
    ({ theme: e, status: t }) => {
      switch (t) {
        case 'critical':
          return { color: e.color.critical, background: e.background.critical }
        case 'negative':
          return {
            color: e.color.negativeText,
            background: e.background.negative,
            boxShadow: e.base === 'light' ? `inset 0 0 0 1px ${Ee(0.9, e.color.negativeText)}` : 'none'
          }
        case 'warning':
          return {
            color: e.color.warningText,
            background: e.background.warning,
            boxShadow: e.base === 'light' ? `inset 0 0 0 1px ${Ee(0.9, e.color.warningText)}` : 'none'
          }
        case 'neutral':
          return {
            color: e.color.dark,
            background: e.color.mediumlight,
            boxShadow: e.base === 'light' ? `inset 0 0 0 1px ${Ee(0.9, e.color.dark)}` : 'none'
          }
        case 'positive':
          return {
            color: e.color.positiveText,
            background: e.background.positive,
            boxShadow: e.base === 'light' ? `inset 0 0 0 1px ${Ee(0.9, e.color.positiveText)}` : 'none'
          }
        default:
          return {}
      }
    }
  ),
  Q5 = ({ ...e }) => a.createElement(X5, { ...e }),
  wr = {
    user: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z'
      })
    ),
    useralt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z'
      })
    ),
    useradd: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z'
      })
    ),
    users: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z'
      }),
      a.createElement('path', {
        d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z'
      })
    ),
    profile: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z'
      })
    ),
    facehappy: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    faceneutral: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    facesad: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    accessibility: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z'
      }),
      a.createElement('path', { d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    accessibilityalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z'
      })
    ),
    arrowup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z'
      })
    ),
    arrowdown: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z'
      })
    ),
    arrowleft: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z'
      })
    ),
    arrowright: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z'
      })
    ),
    arrowupalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z'
      })
    ),
    arrowdownalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z'
      })
    ),
    arrowleftalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z'
      })
    ),
    arrowrightalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    expandalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z'
      })
    ),
    collapse: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z'
      })
    ),
    expand: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z'
      })
    ),
    unfold: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z'
      }),
      a.createElement('path', {
        d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z'
      }),
      a.createElement('path', {
        d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z'
      })
    ),
    transfer: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z'
      })
    ),
    redirect: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z'
      })
    ),
    undo: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z'
      })
    ),
    reply: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z'
      })
    ),
    sync: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z'
      })
    ),
    upload: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    download: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z'
      })
    ),
    back: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z'
      })
    ),
    proceed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z'
      })
    ),
    refresh: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z'
      })
    ),
    globe: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z'
      })
    ),
    compass: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    location: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z'
      })
    ),
    pin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z'
      })
    ),
    time: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    dashboard: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z'
      })
    ),
    timer: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z'
      })
    ),
    home: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z'
      })
    ),
    admin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z'
      }),
      a.createElement('path', {
        d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z'
      })
    ),
    info: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    question: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    support: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      })
    ),
    alert: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z'
      })
    ),
    email: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z'
      })
    ),
    phone: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z'
      })
    ),
    link: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z'
      }),
      a.createElement('path', {
        d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z'
      })
    ),
    unlink: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    bell: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z'
      })
    ),
    rss: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
      })
    ),
    sharealt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z'
      }),
      a.createElement('path', {
        d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z'
      })
    ),
    share: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z'
      }),
      a.createElement('path', {
        d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z'
      })
    ),
    circlehollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z'
      })
    ),
    circle: a.createElement('path', { d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z' }),
    bookmarkhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z'
      })
    ),
    bookmark: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z'
      })
    ),
    hearthollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2'
      })
    ),
    heart: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z'
      })
    ),
    starhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z'
      })
    ),
    star: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z'
      })
    ),
    certificate: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z'
      })
    ),
    verified: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z'
      })
    ),
    thumbsup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    shield: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z'
      })
    ),
    basket: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z' }),
      a.createElement('path', {
        d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z'
      }),
      a.createElement('path', {
        d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z'
      })
    ),
    beaker: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z'
      })
    ),
    hourglass: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z'
      })
    ),
    flag: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    cloudhollow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z'
      })
    ),
    cloud: a.createElement('path', { d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z' }),
    edit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z'
      })
    ),
    cog: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
        fill: '#333'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z'
      })
    ),
    nut: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z'
      })
    ),
    wrench: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    ellipsis: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      })
    ),
    check: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z'
      })
    ),
    form: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z'
      }),
      a.createElement('path', {
        d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z'
      })
    ),
    batchdeny: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z'
      })
    ),
    batchaccept: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z'
      })
    ),
    controls: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z'
      })
    ),
    plus: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z'
      })
    ),
    closeAlt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z'
      })
    ),
    cross: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z'
      })
    ),
    trash: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z'
      })
    ),
    pinalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z'
      })
    ),
    unpin: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    add: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    subtract: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    close: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z'
      })
    ),
    delete: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z'
      })
    ),
    passed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z'
      })
    ),
    changed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z'
      })
    ),
    failed: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z'
      })
    ),
    clear: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z'
      })
    ),
    comment: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z'
      })
    ),
    commentadd: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z'
      })
    ),
    requestchange: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z'
      })
    ),
    comments: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z'
      })
    ),
    lock: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z'
      })
    ),
    unlock: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z'
      })
    ),
    key: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z'
      })
    ),
    outbox: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z'
      }),
      a.createElement('path', {
        d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z'
      })
    ),
    credit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z'
      })
    ),
    button: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z'
      }),
      a.createElement('path', {
        d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z'
      })
    ),
    type: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z'
      })
    ),
    pointerdefault: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z'
      })
    ),
    pointerhand: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z'
      })
    ),
    browser: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    tablet: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z'
      })
    ),
    mobile: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z'
      })
    ),
    watch: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        key: 'watch',
        fillRule: 'evenodd',
        d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z'
      })
    ),
    sidebar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z'
      })
    ),
    sidebaralt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z'
      })
    ),
    sidebaralttoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z'
      })
    ),
    sidebartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z'
      })
    ),
    bottombar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z'
      })
    ),
    bottombartoggle: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z'
      })
    ),
    cpu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z'
      })
    ),
    database: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z'
      })
    ),
    memory: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z'
      })
    ),
    structure: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z'
      })
    ),
    box: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z'
      })
    ),
    power: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z' }),
      a.createElement('path', {
        d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z'
      })
    ),
    photo: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z'
      })
    ),
    component: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z'
      })
    ),
    grid: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z'
      })
    ),
    outline: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      })
    ),
    photodrag: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z'
      }),
      a.createElement('path', { d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z' })
    ),
    search: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      })
    ),
    zoom: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
      })
    ),
    zoomout: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z'
      })
    ),
    zoomreset: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z'
      })
    ),
    eye: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z'
      })
    ),
    eyeclose: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z'
      }),
      a.createElement('path', {
        d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z'
      })
    ),
    lightning: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z'
      })
    ),
    lightningoff: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z'
      })
    ),
    contrast: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z'
      })
    ),
    switchalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z'
      })
    ),
    mirror: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z'
      })
    ),
    grow: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z' }),
      a.createElement('path', {
        d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z'
      })
    ),
    paintbrush: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z'
      })
    ),
    ruler: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z'
      })
    ),
    stop: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z'
      })
    ),
    camera: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z'
      })
    ),
    video: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z'
      })
    ),
    speaker: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z'
      }),
      a.createElement('path', {
        d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z'
      }),
      a.createElement('path', {
        d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z'
      })
    ),
    play: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z'
      })
    ),
    playback: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z'
      })
    ),
    playnext: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z'
      })
    ),
    rewind: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z'
      })
    ),
    fastforward: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z'
      })
    ),
    stopalt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z'
      })
    ),
    sidebyside: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z'
      })
    ),
    stacked: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z'
      })
    ),
    sun: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', { d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z' }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      }),
      a.createElement('path', {
        d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z'
      })
    ),
    moon: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z'
      })
    ),
    book: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z'
      })
    ),
    document: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z'
      })
    ),
    copy: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z'
      })
    ),
    category: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z'
      })
    ),
    folder: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z'
      })
    ),
    print: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z'
      })
    ),
    graphline: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z'
      })
    ),
    calendar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z'
      })
    ),
    graphbar: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z'
      })
    ),
    menu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z'
      })
    ),
    menualt: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z'
      })
    ),
    filter: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z'
      })
    ),
    docchart: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z'
      })
    ),
    doclist: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z'
      })
    ),
    markup: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z'
      })
    ),
    bold: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z'
      })
    ),
    italic: a.createElement('path', { d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z' }),
    paperclip: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z'
      })
    ),
    listordered: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z'
      })
    ),
    listunordered: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
      })
    ),
    paragraph: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z'
      })
    ),
    markdown: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z'
      })
    ),
    repository: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z'
      }),
      a.createElement('path', {
        d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z'
      }),
      a.createElement('path', {
        d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z'
      }),
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z'
      })
    ),
    commit: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
      })
    ),
    branch: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    pullrequest: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'
      })
    ),
    merge: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      })
    ),
    apple: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z'
      })
    ),
    linux: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z'
      })
    ),
    ubuntu: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z'
      })
    ),
    windows: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z'
      })
    ),
    storybook: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z'
      })
    ),
    azuredevops: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z'
      })
    ),
    bitbucket: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z'
      })
    ),
    chrome: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z'
      })
    ),
    chromatic: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z'
      })
    ),
    componentdriven: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z'
      })
    ),
    discord: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z'
      })
    ),
    facebook: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z'
      })
    ),
    figma: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        fillRule: 'evenodd',
        d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z'
      })
    ),
    gdrive: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z'
      })
    ),
    github: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z'
      })
    ),
    gitlab: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z'
      })
    ),
    google: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z'
      })
    ),
    graphql: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z'
      })
    ),
    medium: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z'
      })
    ),
    redux: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z'
      })
    ),
    twitter: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z'
      })
    ),
    youtube: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z'
      })
    ),
    vscode: a.createElement(
      a.Fragment,
      null,
      a.createElement('path', {
        d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z'
      })
    )
  },
  uu = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`,
  be = ({ icon: e, useSymbol: t, ...r }) =>
    a.createElement(
      uu,
      { viewBox: '0 0 14 14', width: '14px', height: '14px', ...r },
      t ? a.createElement('use', { xlinkHref: `#icon--${e}` }) : wr[e]
    ),
  ef = C.memo(function ({ icons: e = Object.keys(wr) }) {
    return a.createElement(
      uu,
      { viewBox: '0 0 14 14', style: { position: 'absolute', width: 0, height: 0 }, 'data-chromatic': 'ignore' },
      e.map(t => a.createElement('symbol', { id: `icon--${t}`, key: t }, wr[t]))
    )
  }),
  tf = 0,
  rf = e => e.button === tf && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
  nf = (e, t) => {
    rf(e) && (e.preventDefault(), t(e))
  },
  af = _.span(
    ({ withArrow: e }) =>
      e
        ? {
            '> svg:last-of-type': {
              height: '0.7em',
              width: '0.7em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit'
            }
          }
        : {},
    ({ containsIcon: e }) =>
      e
        ? {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0
            }
          }
        : {}
  ),
  of = _.a(
    ({ theme: e }) => ({
      display: 'inline-block',
      transition: 'all 150ms ease-out',
      textDecoration: 'none',
      color: e.color.secondary,
      '&:hover, &:focus': {
        cursor: 'pointer',
        color: Pt(0.07, e.color.secondary),
        'svg path:not([fill])': { fill: Pt(0.07, e.color.secondary) }
      },
      '&:active': { color: Pt(0.1, e.color.secondary), 'svg path:not([fill])': { fill: Pt(0.1, e.color.secondary) } },
      svg: {
        display: 'inline-block',
        height: '1em',
        width: '1em',
        verticalAlign: 'text-top',
        position: 'relative',
        bottom: '-0.125em',
        marginRight: '0.4em',
        '& path': { fill: e.color.secondary }
      }
    }),
    ({ theme: e, secondary: t, tertiary: r }) => {
      let n
      return (
        t && (n = [e.textMutedColor, e.color.dark, e.color.darker]),
        r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]),
        n
          ? {
              color: n[0],
              'svg path:not([fill])': { fill: n[0] },
              '&:hover': { color: n[1], 'svg path:not([fill])': { fill: n[1] } },
              '&:active': { color: n[2], 'svg path:not([fill])': { fill: n[2] } }
            }
          : {}
      )
    },
    ({ nochrome: e }) =>
      e ? { color: 'inherit', '&:hover, &:active': { color: 'inherit', textDecoration: 'underline' } } : {},
    ({ theme: e, inverse: t }) =>
      t
        ? {
            color: e.color.lightest,
            ':not([fill])': { fill: e.color.lightest },
            '&:hover': { color: e.color.lighter, 'svg path:not([fill])': { fill: e.color.lighter } },
            '&:active': { color: e.color.light, 'svg path:not([fill])': { fill: e.color.light } }
          }
        : {},
    ({ isButton: e }) => (e ? { border: 0, borderRadius: 0, background: 'none', padding: 0, fontSize: 'inherit' } : {})
  ),
  yt = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: o, className: l, ...i }) =>
    a.createElement(
      of,
      { ...i, onClick: r && e ? u => nf(u, r) : r, className: l },
      a.createElement(af, { withArrow: n, containsIcon: o }, t, n && a.createElement(be, { icon: 'arrowright' }))
    )
yt.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 }
var lf = _.div(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2}px`,
    lineHeight: '1.6',
    h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold },
    h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` },
    h3: { fontSize: `${e.typography.size.m1}px` },
    h4: { fontSize: `${e.typography.size.s3}px` },
    h5: { fontSize: `${e.typography.size.s2}px` },
    h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
    'pre:not(.prismjs)': { background: 'transparent', border: 'none', borderRadius: 0, padding: 0, margin: 0 },
    'pre pre, pre.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px'
    },
    'pre pre code, pre.prismjs code': { color: 'inherit', fontSize: 'inherit' },
    'pre code': { margin: 0, padding: 0, whiteSpace: 'pre', border: 'none', background: 'transparent' },
    'pre code, pre tt': { backgroundColor: 'transparent', border: 'none' },
    'body > *:first-of-type': { marginTop: '0 !important' },
    'body > *:last-child': { marginBottom: '0 !important' },
    a: { color: e.color.secondary, textDecoration: 'none' },
    'a.absent': { color: '#cc0000' },
    'a.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '20px 0 10px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& tt, & code': { fontSize: 'inherit' }
    },
    'h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'p, blockquote, ul, ol, dl, li, table, pre': { margin: '15px 0' },
    hr: { border: '0 none', borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 },
    'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type':
      { marginTop: 0, paddingTop: 0 },
    'body > h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6':
      { marginTop: 0, paddingTop: 0 },
    'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': { marginTop: 0 },
    'li p.first': { display: 'inline-block' },
    'ul, ol': { paddingLeft: 30, '& :first-of-type': { marginTop: 0 }, '& :last-child': { marginBottom: 0 } },
    dl: { padding: 0 },
    'dl dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: '0 0 15px',
      padding: '0 15px',
      '&:first-of-type': { padding: 0 },
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 }
    },
    blockquote: {
      borderLeft: `4px solid ${e.color.medium}`,
      padding: '0 15px',
      color: e.color.dark,
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 }
    },
    table: {
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: `1px solid ${e.appBorderColor}`,
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        '& th': {
          fontWeight: 'bold',
          border: `1px solid ${e.appBorderColor}`,
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px'
        },
        '& td': { border: `1px solid ${e.appBorderColor}`, textAlign: 'left', margin: 0, padding: '6px 13px' },
        '&:nth-of-type(2n)': { backgroundColor: e.color.lighter },
        '& th :first-of-type, & td :first-of-type': { marginTop: 0 },
        '& th :last-child, & td :last-child': { marginBottom: 0 }
      }
    },
    img: { maxWidth: '100%' },
    'span.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: `1px solid ${e.color.medium}`,
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto'
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': { clear: 'both', color: e.color.darkest, display: 'block', padding: '5px 0 0' }
    },
    'span.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'center' },
      '& span img': { margin: '0 auto', textAlign: 'center' }
    },
    'span.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right' },
      '& span img': { margin: 0, textAlign: 'right' }
    },
    'span.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' }
    },
    'span.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'right' }
    },
    'code, tt': {
      margin: '0 2px',
      padding: '0 5px',
      whiteSpace: 'nowrap',
      border: `1px solid ${e.color.mediumlight}`,
      backgroundColor: e.color.lighter,
      borderRadius: 3,
      color: e.base === 'dark' && e.color.darkest
    }
  })),
  Tt = [],
  Kt = null,
  sf = C.lazy(async () => {
    let { SyntaxHighlighter: e } = await ut(
      () => import('./syntaxhighlighter-PONEFOSF-dbf6aa64.js'),
      [
        './syntaxhighlighter-PONEFOSF-dbf6aa64.js',
        './iframe-aa443103.js',
        './chunk-6P7RB4HF-36fee097.js',
        './index-1cdf6ce0.js',
        './index-a01a9712.js',
        './assertThisInitialized-bd9b18e4.js',
        './index-c8f542d6.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
    return (
      Tt.length > 0 &&
        (Tt.forEach(t => {
          e.registerLanguage(...t)
        }),
        (Tt = [])),
      Kt === null && (Kt = e),
      { default: t => a.createElement(e, { ...t }) }
    )
  }),
  uf = C.lazy(async () => {
    let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
      ut(
        () => import('./syntaxhighlighter-PONEFOSF-dbf6aa64.js'),
        [
          './syntaxhighlighter-PONEFOSF-dbf6aa64.js',
          './iframe-aa443103.js',
          './chunk-6P7RB4HF-36fee097.js',
          './index-1cdf6ce0.js',
          './index-a01a9712.js',
          './assertThisInitialized-bd9b18e4.js',
          './index-c8f542d6.js',
          './index-356e4a49.js'
        ],
        import.meta.url
      ),
      ut(
        () => import('./formatter-SWP5E3XI-6f38c76f.js'),
        [
          './formatter-SWP5E3XI-6f38c76f.js',
          './iframe-aa443103.js',
          './chunk-6P7RB4HF-36fee097.js',
          './index-1cdf6ce0.js',
          './index-a01a9712.js',
          './assertThisInitialized-bd9b18e4.js',
          './index-c8f542d6.js',
          './index-356e4a49.js'
        ],
        import.meta.url
      )
    ])
    return (
      Tt.length > 0 &&
        (Tt.forEach(r => {
          e.registerLanguage(...r)
        }),
        (Tt = [])),
      Kt === null && (Kt = e),
      { default: r => a.createElement(e, { ...r, formatter: t }) }
    )
  }),
  En = e =>
    a.createElement(
      C.Suspense,
      { fallback: a.createElement('div', null) },
      e.format !== !1 ? a.createElement(uf, { ...e }) : a.createElement(sf, { ...e })
    )
En.registerLanguage = (...e) => {
  if (Kt !== null) {
    Kt.registerLanguage(...e)
    return
  }
  Tt.push(e)
}
var cf = e => (typeof e == 'number' ? e : Number(e)),
  df = _.div(
    ({ theme: e, col: t, row: r = 1 }) =>
      t
        ? {
            display: 'inline-block',
            verticalAlign: 'inherit',
            '& > *': { marginLeft: t * e.layoutMargin, verticalAlign: 'inherit' },
            [`& > *:first-child${ga}`]: { marginLeft: 0 }
          }
        : { '& > *': { marginTop: r * e.layoutMargin }, [`& > *:first-child${ga}`]: { marginTop: 0 } },
    ({ theme: e, outer: t, col: r, row: n }) => {
      switch (!0) {
        case !!(t && r):
          return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin }
        case !!(t && n):
          return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin }
        default:
          return {}
      }
    }
  ),
  pf = ({ col: e, row: t, outer: r, children: n, ...o }) => {
    let l = cf(typeof r == 'number' || !r ? r : e || t)
    return a.createElement(df, { col: e, row: t, outer: l, ...o }, n)
  },
  ff = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  mf = _.div(),
  gf = _.div(({ theme: e }) => ({
    padding: 30,
    textAlign: 'center',
    color: e.color.defaultText,
    fontSize: e.typography.size.s2 - 1
  })),
  cu = ({ children: e, ...t }) => {
    let [r, n] = C.Children.toArray(e)
    return a.createElement(gf, { ...t }, a.createElement(ff, null, r), n && a.createElement(mf, null, n))
  },
  hf = _.div(({ scale: e = 1, elementHeight: t }) => ({
    height: t || 'auto',
    transformOrigin: 'top left',
    transform: `scale(${1 / e})`
  }))
function yf({ scale: e, children: t }) {
  let r = C.useRef(null),
    [n, o] = C.useState(0),
    l = C.useCallback(
      ({ height: i }) => {
        i && o(i / e)
      },
      [e]
    )
  return (
    C.useEffect(() => {
      r.current && o(r.current.getBoundingClientRect().height)
    }, [e]),
    Is({ ref: r, onResize: l }),
    a.createElement(
      hf,
      { scale: e, elementHeight: n },
      a.createElement('div', { ref: r, className: 'innerZoomElementWrapper' }, t)
    )
  )
}
var bf = class extends C.Component {
    constructor() {
      super(...arguments), (this.iframe = null)
    }
    componentDidMount() {
      let { iFrameRef: e } = this.props
      this.iframe = e.current
    }
    shouldComponentUpdate(e) {
      let { scale: t, active: r } = this.props
      return (
        t !== e.scale && this.setIframeInnerZoom(e.scale),
        r !== e.active && this.iframe.setAttribute('data-is-storybook', e.active ? 'true' : 'false'),
        e.children.props.src !== this.props.children.props.src
      )
    }
    setIframeInnerZoom(e) {
      try {
        Object.assign(this.iframe.contentDocument.body.style, {
          width: `${e * 100}%`,
          height: `${e * 100}%`,
          transform: `scale(${1 / e})`,
          transformOrigin: 'top left'
        })
      } catch {
        this.setIframeZoom(e)
      }
    }
    setIframeZoom(e) {
      Object.assign(this.iframe.style, {
        width: `${e * 100}%`,
        height: `${e * 100}%`,
        transform: `scale(${1 / e})`,
        transformOrigin: 'top left'
      })
    }
    render() {
      let { children: e } = this.props
      return e
    }
  },
  du = { Element: yf, IFrame: bf },
  { document: vf } = g5,
  Ef = _.strong(({ theme: e }) => ({ color: e.color.orange })),
  xf = _.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: 'underline' })),
  $l = _.em(({ theme: e }) => ({ color: e.textMutedColor })),
  Af = /(Error): (.*)\n/,
  wf = /at (?:(.*) )?\(?(.+)\)?/,
  Cf = /([^@]+)?(?:\/<)?@(.+)?/,
  Sf = /([^@]+)?@(.+)?/,
  pu = ({ error: e }) => {
    if (!e) return a.createElement(C.Fragment, null, 'This error has no stack or message')
    if (!e.stack) return a.createElement(C.Fragment, null, e.message || 'This error has no stack or message')
    let t = e.stack.toString()
    t &&
      e.message &&
      !t.includes(e.message) &&
      (t = `Error: ${e.message}

${t}`)
    let r = t.match(Af)
    if (!r) return a.createElement(C.Fragment, null, t)
    let [, n, o] = r,
      l = t.split(/\n/).slice(1),
      [, ...i] = l
        .map(u => {
          let s = u.match(wf) || u.match(Cf) || u.match(Sf)
          return s ? { name: (s[1] || '').replace('/<', ''), location: s[2].replace(vf.location.origin, '') } : null
        })
        .filter(Boolean)
    return a.createElement(
      C.Fragment,
      null,
      a.createElement('span', null, n),
      ': ',
      a.createElement(Ef, null, o),
      a.createElement('br', null),
      i.map((u, s) =>
        u.name
          ? a.createElement(
              C.Fragment,
              { key: s },
              '  ',
              'at ',
              a.createElement(xf, null, u.name),
              ' (',
              a.createElement($l, null, u.location),
              ')',
              a.createElement('br', null)
            )
          : a.createElement(
              C.Fragment,
              { key: s },
              '  ',
              'at ',
              a.createElement($l, null, u.location),
              a.createElement('br', null)
            )
      )
    )
  },
  fu = _.button(
    ({ small: e, theme: t }) => ({
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: e ? '8px 16px' : '13px 20px',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      transitionProperty: 'background, box-shadow',
      transitionDuration: '150ms',
      transitionTimingFunction: 'ease-out',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      opacity: 1,
      margin: 0,
      background: 'transparent',
      fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`,
      fontWeight: t.typography.weight.bold,
      lineHeight: '1',
      svg: {
        display: 'inline-block',
        height: e ? 12 : 14,
        width: e ? 12 : 14,
        verticalAlign: 'top',
        marginRight: e ? 4 : 6,
        marginTop: e ? 0 : -1,
        marginBottom: e ? 0 : -1,
        pointerEvents: 'none',
        path: { fill: 'currentColor' }
      }
    }),
    ({ disabled: e }) =>
      e ? { cursor: 'not-allowed !important', opacity: 0.5, '&:hover': { transform: 'none' } } : {},
    ({ containsIcon: e, small: t }) =>
      e ? { svg: { display: 'block', margin: 0 }, ...(t ? { padding: 10 } : { padding: 13 }) } : {},
    ({ theme: e, primary: t, secondary: r, gray: n }) => {
      let o
      return (
        n ? (o = e.color.mediumlight) : r ? (o = e.color.secondary) : t && (o = e.color.primary),
        o
          ? {
              background: o,
              color: n ? e.color.darkest : e.color.lightest,
              '&:hover': { background: Pt(0.05, o) },
              '&:active': { boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset' },
              '&:focus': { boxShadow: `${it(o, 1)} 0 1px 9px 2px`, outline: 'none' },
              '&:focus:hover': { boxShadow: `${it(o, 0.2)} 0 8px 18px 0px` }
            }
          : {}
      )
    },
    ({ theme: e, tertiary: t, inForm: r, small: n }) =>
      t
        ? {
            background: e.button.background,
            color: e.input.color,
            boxShadow: `${e.button.border} 0 0 0 1px inset`,
            borderRadius: e.input.borderRadius,
            ...(r && n ? { padding: '10px 16px' } : {}),
            '&:hover': {
              background: e.base === 'light' ? Pt(0.02, e.button.background) : P5(0.03, e.button.background),
              ...(r ? {} : { boxShadow: 'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset' })
            },
            '&:active': { background: e.button.background },
            '&:focus': { boxShadow: `${it(e.color.secondary, 1)} 0 0 0 1px inset`, outline: 'none' }
          }
        : {},
    ({ theme: e, outline: t }) =>
      t
        ? {
            boxShadow: `${Ee(0.8, e.color.defaultText)} 0 0 0 1px inset`,
            color: Ee(0.3, e.color.defaultText),
            background: 'transparent',
            '&:hover, &:focus': { boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: 'none' },
            '&:active': {
              boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 2px inset`,
              color: Ee(0, e.color.defaultText)
            }
          }
        : {},
    ({ theme: e, outline: t, primary: r }) => {
      let n = e.color.primary
      return t && r
        ? {
            boxShadow: `${n} 0 0 0 1px inset`,
            color: n,
            'svg path:not([fill])': { fill: n },
            '&:hover': { boxShadow: `${n} 0 0 0 1px inset`, background: 'transparent' },
            '&:active': { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary },
            '&:focus': { boxShadow: `${n} 0 0 0 1px inset, ${it(n, 0.4)} 0 1px 9px 2px`, outline: 'none' },
            '&:focus:hover': { boxShadow: `${n} 0 0 0 1px inset, ${it(n, 0.2)} 0 8px 18px 0px` }
          }
        : {}
    },
    ({ theme: e, outline: t, primary: r, secondary: n }) => {
      let o
      return (
        n ? (o = e.color.secondary) : r && (o = e.color.primary),
        t && o
          ? {
              boxShadow: `${o} 0 0 0 1px inset`,
              color: o,
              'svg path:not([fill])': { fill: o },
              '&:hover': { boxShadow: `${o} 0 0 0 1px inset`, background: 'transparent' },
              '&:active': { background: o, boxShadow: `${o} 0 0 0 1px inset`, color: e.color.tertiary },
              '&:focus': { boxShadow: `${o} 0 0 0 1px inset, ${it(o, 0.4)} 0 1px 9px 2px`, outline: 'none' },
              '&:focus:hover': { boxShadow: `${o} 0 0 0 1px inset, ${it(o, 0.2)} 0 8px 18px 0px` }
            }
          : {}
      )
    }
  ),
  kf = fu.withComponent('a'),
  mu = Object.assign(
    C.forwardRef(function ({ isLink: e, children: t, ...r }, n) {
      return e ? a.createElement(kf, { ...r, ref: n }, t) : a.createElement(fu, { ...r, ref: n }, t)
    }),
    { defaultProps: { isLink: !1 } }
  ),
  _f = _.label(({ theme: e }) => ({
    display: 'flex',
    borderBottom: `1px solid ${e.appBorderColor}`,
    margin: '0 15px',
    padding: '8px 0',
    '&:last-child': { marginBottom: '3rem' }
  })),
  Of = _.span(({ theme: e }) => ({
    minWidth: 100,
    fontWeight: e.typography.weight.bold,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    lineHeight: '16px'
  })),
  gu = ({ label: e, children: t, ...r }) =>
    a.createElement(_f, { ...r }, e ? a.createElement(Of, null, a.createElement('span', null, e)) : null, t)
gu.defaultProps = { label: void 0 }
var Il = function (e, t) {
    if (typeof e == 'function') {
      e(t)
      return
    }
    e.current = t
  },
  Tf = function (e, t) {
    var r = C.useRef()
    return C.useCallback(
      function (n) {
        ;(e.current = n), r.current && Il(r.current, null), (r.current = t), t && Il(t, n)
      },
      [t]
    )
  },
  Rf = Tf,
  Ff = function () {},
  Df = ['cacheMeasurements', 'maxRows', 'minRows', 'onChange', 'onHeightChange'],
  Lf = function (e, t) {
    e.cacheMeasurements, e.maxRows, e.minRows
    var r = e.onChange,
      n = r === void 0 ? Ff : r
    e.onHeightChange
    var o = Ya(e, Df)
    o.value
    var l = C.useRef(null),
      i = Rf(l, t)
    return C.useRef(0), C.useRef(), C.createElement('textarea', ve({}, o, { onChange: n, ref: i }))
  },
  Mf = C.forwardRef(Lf),
  Bf = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative'
  },
  bo = ({ theme: e }) => ({
    ...Bf,
    transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
    color: e.input.color || 'inherit',
    background: e.input.background,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    borderRadius: e.input.borderRadius,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    padding: '6px 10px',
    boxSizing: 'border-box',
    height: 32,
    '&[type="file"]': { height: 'auto' },
    '&:focus': { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: 'none' },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '&:-webkit-autofill': { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` },
    '&::placeholder': { color: e.textMutedColor, opacity: 1 }
  }),
  xn = ({ size: e }) => {
    switch (e) {
      case '100%':
        return { width: '100%' }
      case 'flex':
        return { flex: 1 }
      case 'auto':
      default:
        return { display: 'inline' }
    }
  },
  hu = ({ align: e }) => {
    switch (e) {
      case 'end':
        return { textAlign: 'right' }
      case 'center':
        return { textAlign: 'center' }
      case 'start':
      default:
        return { textAlign: 'left' }
    }
  },
  An = ({ valid: e, theme: t }) => {
    switch (e) {
      case 'valid':
        return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` }
      case 'error':
        return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` }
      case 'warn':
        return { boxShadow: `${t.color.warning} 0 0 0 1px inset` }
      case void 0:
      case null:
      default:
        return {}
    }
  },
  $f = Object.assign(
    _(
      C.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement('input', { ...n, ref: o })
      })
    )(bo, xn, hu, An, { minHeight: 32 }),
    { displayName: 'Input' }
  ),
  If = Object.assign(
    _(
      C.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement('select', { ...n, ref: o })
      })
    )(bo, xn, An, { height: 32, userSelect: 'none', paddingRight: 20, appearance: 'menulist' }),
    { displayName: 'Select' }
  ),
  jf = Object.assign(
    _(
      C.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
        return a.createElement(Mf, { ...n, ref: o })
      })
    )(bo, xn, hu, An, ({ height: e = 400 }) => ({ overflow: 'visible', maxHeight: e })),
    { displayName: 'Textarea' }
  ),
  Hf = _(
    C.forwardRef(function ({ size: e, valid: t, align: r, ...n }, o) {
      return a.createElement(mu, { ...n, ref: o })
    })
  )(xn, An, { userSelect: 'none', overflow: 'visible', zIndex: 2, '&:hover': { transform: 'none' } }),
  Nf = Object.assign(
    C.forwardRef(function (e, t) {
      return a.createElement(Hf, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t })
    }),
    { displayName: 'Button' }
  ),
  He = Object.assign(_.form({ boxSizing: 'border-box', width: '100%' }), {
    Field: gu,
    Input: $f,
    Select: If,
    Textarea: jf,
    Button: Nf
  }),
  Zf = C.lazy(() =>
    ut(
      () => import('./WithTooltip-J57HCPYA-26855ea8.js'),
      [
        './WithTooltip-J57HCPYA-26855ea8.js',
        './iframe-aa443103.js',
        './chunk-6P7RB4HF-36fee097.js',
        './index-1cdf6ce0.js',
        './index-a01a9712.js',
        './assertThisInitialized-bd9b18e4.js',
        './index-c8f542d6.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    ).then(e => ({ default: e.WithTooltip }))
  ),
  Pf = e => a.createElement(C.Suspense, { fallback: a.createElement('div', null) }, a.createElement(Zf, { ...e })),
  Vf = C.lazy(() =>
    ut(
      () => import('./WithTooltip-J57HCPYA-26855ea8.js'),
      [
        './WithTooltip-J57HCPYA-26855ea8.js',
        './iframe-aa443103.js',
        './chunk-6P7RB4HF-36fee097.js',
        './index-1cdf6ce0.js',
        './index-a01a9712.js',
        './assertThisInitialized-bd9b18e4.js',
        './index-c8f542d6.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    ).then(e => ({ default: e.WithTooltipPure }))
  ),
  yu = e => a.createElement(C.Suspense, { fallback: a.createElement('div', null) }, a.createElement(Vf, { ...e })),
  qf = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })),
  zf = _.span(),
  Uf = _.div(({ theme: e }) => ({
    marginTop: 8,
    textAlign: 'center',
    '> *': { margin: '0 8px', fontWeight: e.typography.weight.bold }
  })),
  Wf = _.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: '18px' })),
  Gf = _.div({ padding: 15, width: 280, boxSizing: 'border-box' }),
  bu = ({ title: e, desc: t, links: r }) =>
    a.createElement(
      Gf,
      null,
      a.createElement(Wf, null, e && a.createElement(qf, null, e), t && a.createElement(zf, null, t)),
      r &&
        a.createElement(
          Uf,
          null,
          r.map(({ title: n, ...o }) => a.createElement(yt, { ...o, key: n }, n))
        )
    )
bu.defaultProps = { title: null, desc: null, links: null }
var Yf = _.div(({ theme: e }) => ({
    padding: '2px 6px',
    lineHeight: '16px',
    fontSize: 10,
    fontWeight: e.typography.weight.bold,
    color: e.color.lightest,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: -1,
    background: e.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(0, 0, 0, 0.95)',
    margin: 6
  })),
  Kf = ({ note: e, ...t }) => a.createElement(Yf, { ...t }, e),
  Jf = _(({ active: e, loading: t, disabled: r, ...n }) => a.createElement('span', { ...n }))(
    ({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}),
    ({ loading: e, theme: t }) => (e ? { display: 'inline-block', flex: 'none', ...t.animation.inlineGlow } : {}),
    ({ disabled: e, theme: t }) => (e ? { color: Ee(0.7, t.color.defaultText) } : {})
  ),
  Xf = _.span({
    display: 'flex',
    '& svg': { height: 12, width: 12, margin: '3px 0', verticalAlign: 'top' },
    '& path': { fill: 'inherit' }
  }),
  Qf = _.span({ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column' }, ({ isIndented: e }) =>
    e ? { marginLeft: 24 } : {}
  ),
  em = _.span(
    ({ theme: e }) => ({ fontSize: '11px', lineHeight: '14px' }),
    ({ active: e, theme: t }) => (e ? { color: t.color.secondary } : {}),
    ({ theme: e, disabled: t }) => (t ? { color: e.textMutedColor } : {})
  ),
  jl = _.span(
    ({ active: e, theme: t }) =>
      e ? { '& svg': { opacity: 1 }, '& svg path:not([fill])': { fill: t.color.secondary } } : {},
    () => ({ display: 'flex', maxWidth: 14 })
  ),
  tm = _.a(
    ({ theme: e }) => ({
      fontSize: e.typography.size.s1,
      transition: 'all 150ms ease-out',
      color: e.color.dark,
      textDecoration: 'none',
      cursor: 'pointer',
      justifyContent: 'space-between',
      lineHeight: '18px',
      padding: '7px 10px',
      display: 'flex',
      alignItems: 'center',
      '& > * + *': { paddingLeft: 10 },
      '&:hover': { background: e.background.hoverable },
      '&:hover svg': { opacity: 1 }
    }),
    ({ disabled: e }) => (e ? { cursor: 'not-allowed' } : {})
  ),
  rm = Dt(100)((e, t, r) => {
    let n = {}
    return (
      e && Object.assign(n, { onClick: e }),
      t && Object.assign(n, { href: t }),
      r && t && Object.assign(n, { to: t, as: r }),
      n
    )
  }),
  vu = ({
    loading: e,
    left: t,
    title: r,
    center: n,
    right: o,
    icon: l,
    active: i,
    disabled: u,
    isIndented: s,
    href: c,
    onClick: d,
    LinkWrapper: g,
    ...h
  }) => {
    let p = rm(d, c, g),
      m = { active: i, disabled: u },
      f = typeof l == 'string' && wr[l]
    return a.createElement(
      tm,
      { ...m, ...h, ...p },
      l
        ? a.createElement(jl, { ...m }, f ? a.createElement(be, { icon: l }) : l)
        : t && a.createElement(jl, { ...m }, t),
      r || n
        ? a.createElement(
            Qf,
            { isIndented: !t && !l && s },
            r && a.createElement(Jf, { ...m, loading: e }, r),
            n && a.createElement(em, { ...m }, n)
          )
        : null,
      o && a.createElement(Xf, { ...m }, o)
    )
  }
vu.defaultProps = {
  loading: !1,
  left: null,
  title: a.createElement('span', null, 'Loading state'),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null
}
var vo = vu,
  nm = _.div({ minWidth: 180, overflow: 'hidden', overflowY: 'auto', maxHeight: 15.5 * 32 }, ({ theme: e }) => ({
    borderRadius: e.appBorderRadius
  })),
  am = e => {
    let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...l } = e,
      { title: i, href: u, active: s } = l,
      c = C.useCallback(
        g => {
          r(g, l)
        },
        [r]
      ),
      d = !!r
    return a.createElement(vo, {
      title: i,
      active: s,
      href: u,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: o,
      ...l,
      ...(d ? { onClick: c } : {})
    })
  },
  Eo = ({ links: e, LinkWrapper: t }) => {
    let r = e.some(n => n.left || n.icon)
    return a.createElement(
      nm,
      null,
      e.map(({ isGatsby: n, ...o }) =>
        a.createElement(am, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })
      )
    )
  }
Eo.defaultProps = { LinkWrapper: vo.defaultProps.LinkWrapper }
var xo = a.forwardRef(({ children: e, ...t }, r) =>
  t.href != null
    ? a.createElement('a', { ref: r, ...t }, e)
    : a.createElement('button', { ref: r, type: 'button', ...t }, e)
)
xo.displayName = 'ButtonOrLink'
var Rr = _(xo, { shouldForwardProp: Na })(
  {
    whiteSpace: 'normal',
    display: 'inline-flex',
    overflow: 'hidden',
    verticalAlign: 'top',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    '&:empty': { display: 'none' }
  },
  ({ theme: e }) => ({
    padding: '0 15px',
    transition: 'color 0.2s linear, border-bottom-color 0.2s linear',
    height: 40,
    lineHeight: '12px',
    cursor: 'pointer',
    background: 'transparent',
    border: '0 solid transparent',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    fontWeight: 'bold',
    fontSize: 13,
    '&:focus': { outline: '0 none', borderBottomColor: e.color.secondary }
  }),
  ({ active: e, textColor: t, theme: r }) =>
    e
      ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor }
      : { color: t || r.barTextColor, borderBottomColor: 'transparent' }
)
Rr.displayName = 'TabButton'
var Rt = _(xo, { shouldForwardProp: Na })(
  () => ({
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: 4,
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 'bold',
    height: 28,
    justifyContent: 'center',
    marginTop: 6,
    padding: '8px 7px',
    '& > svg': { width: 14 }
  }),
  ({ active: e, theme: t }) => (e ? { backgroundColor: t.background.hoverable, color: t.color.secondary } : {}),
  ({ disabled: e, theme: t }) =>
    e
      ? { opacity: 0.5, cursor: 'not-allowed' }
      : {
          '&:hover, &:focus-visible': { background: Ee(0.88, t.color.secondary), color: t.color.secondary },
          '&:focus-visible': { outline: bn },
          '&:focus:not(:focus-visible)': { outline: 'none' }
        }
)
Rt.displayName = 'IconButton'
var om = _.div(({ theme: e }) => ({
    width: 14,
    height: 14,
    backgroundColor: e.appBorderColor,
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`
  })),
  lm = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })),
  Eu = () => a.createElement(lm, null, a.createElement(om, null)),
  wa = _.div(
    { display: 'flex', whiteSpace: 'nowrap', flexBasis: 'auto', marginLeft: 3, marginRight: 3 },
    ({ scrollable: e }) => (e ? { flexShrink: 0 } : {}),
    ({ left: e }) => (e ? { '& > *': { marginLeft: 4 } } : {}),
    ({ right: e }) => (e ? { marginLeft: 30, '& > *': { marginRight: 4 } } : {})
  )
wa.displayName = 'Side'
var im = ({ children: e, className: t, scrollable: r }) =>
    r ? a.createElement(yn, { vertical: !1, className: t }, e) : a.createElement('div', { className: t }, e),
  Ao = _(im)(
    ({ theme: e, scrollable: t = !0 }) => ({
      color: e.barTextColor,
      width: '100%',
      height: 40,
      flexShrink: 0,
      overflow: t ? 'auto' : 'hidden',
      overflowY: 'hidden'
    }),
    ({ theme: e, border: t = !1 }) =>
      t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {}
  )
Ao.displayName = 'Bar'
var sm = _.div(({ bgColor: e }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    flexWrap: 'nowrap',
    flexShrink: 0,
    height: 40,
    backgroundColor: e || ''
  })),
  wn = ({ children: e, backgroundColor: t, ...r }) => {
    let [n, o] = C.Children.toArray(e)
    return a.createElement(
      Ao,
      { ...r },
      a.createElement(
        sm,
        { bgColor: t },
        a.createElement(wa, { scrollable: r.scrollable, left: !0 }, n),
        o ? a.createElement(wa, { right: !0 }, o) : null
      )
    )
  }
wn.displayName = 'FlexBar'
var xu = _.div(({ active: e }) => (e ? { display: 'block' } : { display: 'none' })),
  Hl = e =>
    C.Children.toArray(e).map(({ props: { title: t, id: r, color: n, children: o } }) => {
      let l = Array.isArray(o) ? o[0] : o
      return {
        title: t,
        id: r,
        ...(n ? { color: n } : {}),
        render: typeof l == 'function' ? l : ({ active: i }) => a.createElement(xu, { active: i, role: 'tabpanel' }, l)
      }
    }),
  um = _.span(({ theme: e, isActive: t }) => ({
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: 8,
    color: t ? e.color.secondary : e.color.mediumdark,
    borderRight: '3px solid transparent',
    borderLeft: '3px solid transparent',
    borderTop: '3px solid',
    transition: 'transform .1s ease-out'
  })),
  cm = _(Rr)(
    ({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `
  )
function dm(e) {
  let t = C.useRef(),
    r = C.useRef(),
    n = C.useRef(new Map()),
    { width: o = 1 } = Is({ ref: t }),
    [l, i] = C.useState(e),
    [u, s] = C.useState([]),
    c = C.useRef(e),
    d = C.useCallback(
      ({ menuName: h, actions: p }) => {
        let m = u.some(({ active: b }) => b),
          [f, E] = C.useState(!1)
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            r5,
            {
              interactive: !0,
              visible: f,
              onVisibleChange: E,
              placement: 'bottom',
              delayHide: 100,
              tooltip: a.createElement(Eo, {
                links: u.map(({ title: b, id: x, color: y, active: v }) => ({
                  id: x,
                  title: b,
                  color: y,
                  active: v,
                  onClick: A => {
                    A.preventDefault(), p.onSelect(x)
                  }
                }))
              })
            },
            a.createElement(
              cm,
              {
                ref: r,
                active: m,
                preActive: f,
                style: { visibility: u.length ? 'visible' : 'hidden' },
                'aria-hidden': !u.length,
                className: 'tabbutton',
                type: 'button',
                role: 'tab'
              },
              h,
              a.createElement(um, { className: 'addon-collapsible-icon', isActive: m || f })
            )
          ),
          u.map(({ title: b, id: x, color: y }, v) => {
            let A = `index-${v}`
            return a.createElement(
              Rr,
              {
                id: `tabbutton-${Ns(x) ?? A}`,
                style: { visibility: 'hidden' },
                'aria-hidden': !0,
                tabIndex: -1,
                ref: w => {
                  n.current.set(x, w)
                },
                className: 'tabbutton',
                type: 'button',
                key: x,
                textColor: y,
                role: 'tab'
              },
              b
            )
          })
        )
      },
      [u]
    ),
    g = C.useCallback(() => {
      if (!t.current || !r.current) return
      let { x: h, width: p } = t.current.getBoundingClientRect(),
        { width: m } = r.current.getBoundingClientRect(),
        f = u.length ? h + p - m : h + p,
        E = [],
        b = 0,
        x = e.filter(y => {
          let { id: v } = y,
            A = n.current.get(v),
            { width: w = 0 } = (A == null ? void 0 : A.getBoundingClientRect()) || {},
            k = h + b + w > f
          return (!k || !A) && E.push(y), (b += w), k
        })
      ;(E.length !== l.length || c.current !== e) && (i(E), s(x), (c.current = e))
    }, [u.length, e, l])
  return (
    C.useLayoutEffect(g, [g, o]),
    { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: u, AddonTab: d }
  )
}
var pm =
    '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */',
  fm = _.div(
    ({ theme: e, bordered: t }) =>
      t
        ? {
            backgroundClip: 'padding-box',
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: e.appBorderRadius,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }
        : {},
    ({ absolute: e }) =>
      e
        ? { width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }
        : { display: 'block' }
  ),
  wo = _.div({ overflow: 'hidden', '&:first-of-type': { marginLeft: -3 }, whiteSpace: 'nowrap', flexGrow: 1 })
wo.displayName = 'TabBar'
var mm = _.div(
    { display: 'block', position: 'relative' },
    ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }),
    ({ bordered: e, theme: t }) =>
      e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {},
    ({ absolute: e, bordered: t }) =>
      e
        ? {
            height: `calc(100% - ${t ? 42 : 40}px)`,
            position: 'absolute',
            left: 0 + (t ? 1 : 0),
            right: 0 + (t ? 1 : 0),
            bottom: 0 + (t ? 1 : 0),
            top: 40 + (t ? 1 : 0),
            overflow: 'auto',
            [`& > *:first-child${pm}`]: {
              position: 'absolute',
              left: 0 + (t ? 1 : 0),
              right: 0 + (t ? 1 : 0),
              bottom: 0 + (t ? 1 : 0),
              top: 0 + (t ? 1 : 0),
              height: `calc(100% - ${t ? 2 : 0}px)`,
              overflow: 'auto'
            }
          }
        : {}
  ),
  gm = ({ active: e, render: t, children: r }) => a.createElement(xu, { active: e }, t ? t() : r),
  Cn = C.memo(
    ({
      children: e,
      selected: t,
      actions: r,
      absolute: n,
      bordered: o,
      tools: l,
      backgroundColor: i,
      id: u,
      menuName: s
    }) => {
      let c = Hl(e).map(f => f.id),
        d = C.useMemo(() => Hl(e).map((f, E) => ({ ...f, active: t ? f.id === t : E === 0 })), [t, ...c]),
        { visibleList: g, tabBarRef: h, tabRefs: p, AddonTab: m } = dm(d)
      return d.length
        ? a.createElement(
            fm,
            { absolute: n, bordered: o, id: u },
            a.createElement(
              wn,
              { scrollable: !1, border: !0, backgroundColor: i },
              a.createElement(
                wo,
                { style: { whiteSpace: 'normal' }, ref: h, role: 'tablist' },
                g.map(({ title: f, id: E, active: b, color: x }, y) => {
                  let v = `index-${y}`
                  return a.createElement(
                    Rr,
                    {
                      id: `tabbutton-${Ns(E) ?? v}`,
                      ref: A => {
                        p.current.set(E, A)
                      },
                      className: `tabbutton ${b ? 'tabbutton-active' : ''}`,
                      type: 'button',
                      key: E,
                      active: b,
                      textColor: x,
                      onClick: A => {
                        A.preventDefault(), r.onSelect(E)
                      },
                      role: 'tab'
                    },
                    typeof f == 'function' ? a.createElement('title', null) : f
                  )
                }),
                a.createElement(m, { menuName: s, actions: r })
              ),
              l
            ),
            a.createElement(
              mm,
              { id: 'panel-tab-content', bordered: o, absolute: n },
              d.map(({ id: f, active: E, render: b }) => a.createElement(b, { key: f, active: E }, null))
            )
          )
        : a.createElement(cu, null, a.createElement(C.Fragment, { key: 'title' }, 'Nothing found'))
    }
  )
Cn.displayName = 'Tabs'
Cn.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
  menuName: 'Tabs'
}
var Au = class extends C.Component {
  constructor(e) {
    super(e),
      (this.handlers = { onSelect: t => this.setState({ selected: t }) }),
      (this.state = { selected: e.initial })
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: o } = this.props,
      { selected: l } = this.state
    return a.createElement(
      Cn,
      { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: o, actions: this.handlers },
      r
    )
  }
}
Au.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: '', menuName: void 0 }
var Co = _.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginTop: 10,
    marginLeft: 6,
    marginRight: 2
  }),
  ({ force: e }) => (e ? {} : { '& + &': { display: 'none' } })
)
Co.displayName = 'Separator'
var hm = e =>
    e.reduce(
      (t, r, n) =>
        r
          ? a.createElement(
              C.Fragment,
              { key: r.id || r.key || `f-${n}` },
              t,
              n > 0 ? a.createElement(Co, { key: `s-${n}` }) : null,
              r.render() || r
            )
          : t,
      null
    ),
  ym = e => {
    let t = C.useRef()
    return (
      C.useEffect(() => {
        t.current = e
      }, [e]),
      t.current
    )
  },
  bm = (e, t) => {
    let r = ym(t)
    return e ? t : r
  },
  vm = ({ active: e, children: t }) => a.createElement('div', { hidden: !e }, bm(e, t)),
  Em = ({ alt: e, ...t }) =>
    a.createElement(
      'svg',
      { width: '200px', height: '40px', viewBox: '0 0 200 40', ...t, role: 'img' },
      e ? a.createElement('title', null, e) : null,
      a.createElement(
        'defs',
        null,
        a.createElement('path', {
          d: 'M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z',
          id: 'a'
        })
      ),
      a.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        a.createElement('path', {
          d: 'M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z',
          fill: 'currentColor'
        }),
        a.createElement('mask', { id: 'b', fill: '#fff' }, a.createElement('use', { xlinkHref: '#a' })),
        a.createElement('use', { fill: '#FF4785', fillRule: 'nonzero', xlinkHref: '#a' }),
        a.createElement('path', {
          d: 'M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z',
          fill: '#FFF',
          fillRule: 'nonzero',
          mask: 'url(#b)'
        })
      )
    ),
  xm = ({ ...e }) =>
    a.createElement(
      'svg',
      { viewBox: '0 0 64 64', ...e },
      a.createElement('title', null, 'Storybook icon'),
      a.createElement(
        'g',
        { id: 'Artboard', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        a.createElement('path', {
          d: 'M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z',
          id: 'path-1',
          fill: '#FF4785',
          fillRule: 'nonzero'
        }),
        a.createElement('path', {
          d: 'M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z',
          id: 'path9_fill-path',
          fill: '#FFFFFF',
          fillRule: 'nonzero'
        }),
        a.createElement('path', {
          d: 'M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z',
          id: 'Path',
          fill: '#FFFFFF'
        })
      )
    ),
  Am = Qt`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
  wm = _.div(({ size: e = 32 }) => ({
    borderRadius: '50%',
    cursor: 'progress',
    display: 'inline-block',
    overflow: 'hidden',
    position: 'absolute',
    transition: 'all 200ms ease-out',
    verticalAlign: 'top',
    top: '50%',
    left: '50%',
    marginTop: -(e / 2),
    marginLeft: -(e / 2),
    height: e,
    width: e,
    zIndex: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(97, 97, 97, 0.29)',
    borderTopColor: 'rgb(100,100,100)',
    animation: `${Am} 0.7s linear infinite`,
    mixBlendMode: 'difference'
  })),
  Nl = _.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }),
  Cm = _.div(({ theme: e }) => ({
    position: 'relative',
    width: '80%',
    marginBottom: '0.75rem',
    maxWidth: 300,
    height: 5,
    borderRadius: 5,
    background: Ee(0.8, e.color.secondary),
    overflow: 'hidden',
    cursor: 'progress'
  })),
  Sm = _.div(({ theme: e }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: e.color.secondary
  })),
  Zl = _.div(({ theme: e }) => ({ minHeight: '2em', fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })),
  km = _(be)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: '0.5rem', color: e.textMutedColor })),
  _m = Qt`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
  Om = _.span({
    '&::after': {
      content: "'...'",
      animation: `${_m} 1s linear infinite`,
      animationDelay: '1s',
      display: 'inline-block',
      width: '1em',
      height: 'auto'
    }
  }),
  wu = ({ progress: e, error: t, size: r, ...n }) => {
    if (t)
      return a.createElement(
        Nl,
        { 'aria-label': t.toString(), 'aria-live': 'polite', role: 'status', ...n },
        a.createElement(km, { icon: 'lightningoff' }),
        a.createElement(Zl, null, t.message)
      )
    if (e) {
      let { value: o, modules: l } = e,
        { message: i } = e
      return (
        l && (i += ` ${l.complete} / ${l.total} modules`),
        a.createElement(
          Nl,
          {
            'aria-label': 'Content is loading...',
            'aria-live': 'polite',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': o * 100,
            'aria-valuetext': i,
            role: 'progressbar',
            ...n
          },
          a.createElement(Cm, null, a.createElement(Sm, { style: { width: `${o * 100}%` } })),
          a.createElement(Zl, null, i, o < 1 && a.createElement(Om, { key: i }))
        )
      )
    }
    return a.createElement(wm, {
      'aria-label': 'Content is loading...',
      'aria-live': 'polite',
      role: 'status',
      size: r,
      ...n
    })
  }
function Tm(e) {
  let t = {},
    r = e.split('&')
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split('=')
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || '')
  }
  return t
}
var Cu = (e, t, r = {}) => {
    let [n, o] = e.split('?'),
      l = o ? { ...Tm(o), ...r, id: t } : { ...r, id: t }
    return `${n}?${Object.entries(l)
      .map(i => `${i[0]}=${i[1]}`)
      .join('&')}`
  },
  Rm = _.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${Y.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${Nt.fonts.mono};
  font-size: ${Nt.size.s2 - 1}px;
`,
  Fm = ({ code: e, ...t }) => a.createElement(Rm, { id: 'clipboard-code', ...t }, e),
  Su = su,
  ku = {}
Object.keys(su).forEach(e => {
  ku[e] = C.forwardRef((t, r) => C.createElement(e, { ...t, ref: r }))
})
const Dm = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      A: qs,
      ActionBar: to,
      AddonPanel: vm,
      Badge: Q5,
      Bar: Ao,
      Blockquote: zs,
      Button: mu,
      ClipboardCode: Fm,
      Code: mo,
      DL: Ws,
      Div: Us,
      DocumentWrapper: lf,
      ErrorFormatter: pu,
      FlexBar: wn,
      Form: He,
      H1: Gs,
      H2: go,
      H3: ho,
      H4: Ys,
      H5: Ks,
      H6: Js,
      HR: Xs,
      IconButton: Rt,
      IconButtonSkeleton: Eu,
      Icons: be,
      Img: Qs,
      LI: eu,
      Link: yt,
      ListItem: vo,
      Loader: wu,
      OL: tu,
      P: ru,
      Placeholder: cu,
      Pre: nu,
      ResetWrapper: yo,
      ScrollArea: yn,
      Separator: Co,
      Spaced: pf,
      Span: au,
      StorybookIcon: xm,
      StorybookLogo: Em,
      Symbols: ef,
      SyntaxHighlighter: En,
      TT: lu,
      TabBar: wo,
      TabButton: Rr,
      TabWrapper: gm,
      Table: ou,
      Tabs: Cn,
      TabsState: Au,
      TooltipLinkList: Eo,
      TooltipMessage: bu,
      TooltipNote: Kf,
      UL: iu,
      WithTooltip: Pf,
      WithTooltipPure: yu,
      Zoom: du,
      codeCommon: dt,
      components: Su,
      createCopyToClipboardFunction: ws,
      getStoryHref: Cu,
      icons: wr,
      interleaveSeparators: hm,
      nameSpaceClassNames: Q,
      resetComponents: ku,
      withReset: te
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function Lm(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ia(e, t)
}
function Mm(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1
}
function Kr(e, t, r) {
  return (
    zc()
      ? (Kr = Reflect.construct.bind())
      : (Kr = function (o, l, i) {
          var u = [null]
          u.push.apply(u, l)
          var s = Function.bind.apply(o, u),
            c = new s()
          return i && Ia(c, i.prototype), c
        }),
    Kr.apply(null, arguments)
  )
}
function Ca(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (Ca = function (n) {
      if (n === null || !Mm(n)) return n
      if (typeof n != 'function') throw new TypeError('Super expression must either be null or a function')
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n)
        t.set(n, o)
      }
      function o() {
        return Kr(n, arguments, Uc(this).constructor)
      }
      return (
        (o.prototype = Object.create(n.prototype, {
          constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 }
        })),
        Ia(o, n)
      )
    }),
    Ca(e)
  )
}
var et = (function (e) {
  Lm(t, e)
  function t(r) {
    var n
    return (
      (n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this),
      Wc(n)
    )
  }
  return t
})(Ca(Error))
function Wn(e) {
  return Math.round(e * 255)
}
function Bm(e, t, r) {
  return Wn(e) + ',' + Wn(t) + ',' + Wn(r)
}
function Cr(e, t, r, n) {
  if ((n === void 0 && (n = Bm), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    l = (1 - Math.abs(2 * r - 1)) * t,
    i = l * (1 - Math.abs((o % 2) - 1)),
    u = 0,
    s = 0,
    c = 0
  o >= 0 && o < 1
    ? ((u = l), (s = i))
    : o >= 1 && o < 2
    ? ((u = i), (s = l))
    : o >= 2 && o < 3
    ? ((s = l), (c = i))
    : o >= 3 && o < 4
    ? ((s = i), (c = l))
    : o >= 4 && o < 5
    ? ((u = i), (c = l))
    : o >= 5 && o < 6 && ((u = l), (c = i))
  var d = r - l / 2,
    g = u + d,
    h = s + d,
    p = c + d
  return n(g, h, p)
}
var Pl = {
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
function $m(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return Pl[t] ? '#' + Pl[t] : e
}
var Im = /^#[a-fA-F0-9]{6}$/,
  jm = /^#[a-fA-F0-9]{8}$/,
  Hm = /^#[a-fA-F0-9]{3}$/,
  Nm = /^#[a-fA-F0-9]{4}$/,
  Gn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Zm = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Pm = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Vm =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function Sn(e) {
  if (typeof e != 'string') throw new et(3)
  var t = $m(e)
  if (t.match(Im))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16)
    }
  if (t.match(jm)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r
    }
  }
  if (t.match(Hm))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16)
    }
  if (t.match(Nm)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n
    }
  }
  var o = Gn.exec(t)
  if (o) return { red: parseInt('' + o[1], 10), green: parseInt('' + o[2], 10), blue: parseInt('' + o[3], 10) }
  var l = Zm.exec(t.substring(0, 50))
  if (l)
    return {
      red: parseInt('' + l[1], 10),
      green: parseInt('' + l[2], 10),
      blue: parseInt('' + l[3], 10),
      alpha: parseFloat('' + l[4]) > 1 ? parseFloat('' + l[4]) / 100 : parseFloat('' + l[4])
    }
  var i = Pm.exec(t)
  if (i) {
    var u = parseInt('' + i[1], 10),
      s = parseInt('' + i[2], 10) / 100,
      c = parseInt('' + i[3], 10) / 100,
      d = 'rgb(' + Cr(u, s, c) + ')',
      g = Gn.exec(d)
    if (!g) throw new et(4, t, d)
    return { red: parseInt('' + g[1], 10), green: parseInt('' + g[2], 10), blue: parseInt('' + g[3], 10) }
  }
  var h = Vm.exec(t.substring(0, 50))
  if (h) {
    var p = parseInt('' + h[1], 10),
      m = parseInt('' + h[2], 10) / 100,
      f = parseInt('' + h[3], 10) / 100,
      E = 'rgb(' + Cr(p, m, f) + ')',
      b = Gn.exec(E)
    if (!b) throw new et(4, t, E)
    return {
      red: parseInt('' + b[1], 10),
      green: parseInt('' + b[2], 10),
      blue: parseInt('' + b[3], 10),
      alpha: parseFloat('' + h[4]) > 1 ? parseFloat('' + h[4]) / 100 : parseFloat('' + h[4])
    }
  }
  throw new et(5)
}
function qm(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    l = Math.min(t, r, n),
    i = (o + l) / 2
  if (o === l)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: i }
  var u,
    s = o - l,
    c = i > 0.5 ? s / (2 - o - l) : s / (o + l)
  switch (o) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0)
      break
    case r:
      u = (n - t) / s + 2
      break
    default:
      u = (t - r) / s + 4
      break
  }
  return (
    (u *= 60),
    e.alpha !== void 0
      ? { hue: u, saturation: c, lightness: i, alpha: e.alpha }
      : { hue: u, saturation: c, lightness: i }
  )
}
function _u(e) {
  return qm(Sn(e))
}
var zm = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? '#' + t[1] + t[3] + t[5] : t
  },
  Sa = zm
function St(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function Yn(e) {
  return St(Math.round(e * 255))
}
function Um(e, t, r) {
  return Sa('#' + Yn(e) + Yn(t) + Yn(r))
}
function an(e, t, r) {
  return Cr(e, t, r, Um)
}
function Wm(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return an(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0) return an(e.hue, e.saturation, e.lightness)
  throw new et(1)
}
function Gm(e, t, r, n) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
    return n >= 1 ? an(e, t, r) : 'rgba(' + Cr(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? an(e.hue, e.saturation, e.lightness)
      : 'rgba(' + Cr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new et(2)
}
function ka(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return Sa('#' + St(e) + St(t) + St(r))
  if (typeof e == 'object' && t === void 0 && r === void 0) return Sa('#' + St(e.red) + St(e.green) + St(e.blue))
  throw new et(6)
}
function st(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = Sn(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number' && typeof n == 'number')
      return n >= 1 ? ka(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? ka(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new et(7)
}
var Ym = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  Km = function (t) {
    return (
      typeof t.red == 'number' && typeof t.green == 'number' && typeof t.blue == 'number' && typeof t.alpha == 'number'
    )
  },
  Jm = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  Xm = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      typeof t.alpha == 'number'
    )
  }
function Ou(e) {
  if (typeof e != 'object') throw new et(8)
  if (Km(e)) return st(e)
  if (Ym(e)) return ka(e)
  if (Xm(e)) return Gm(e)
  if (Jm(e)) return Wm(e)
  throw new et(8)
}
function Tu(e, t, r) {
  return function () {
    var o = r.concat(Array.prototype.slice.call(arguments))
    return o.length >= t ? e.apply(this, o) : Tu(e, t, o)
  }
}
function kn(e) {
  return Tu(e, e.length, [])
}
function _n(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function Qm(e, t) {
  if (t === 'transparent') return t
  var r = _u(t)
  return Ou(sn({}, r, { lightness: _n(0, 1, r.lightness - parseFloat(e)) }))
}
var eg = kn(Qm),
  Ye = eg
function tg(e, t) {
  if (t === 'transparent') return t
  var r = _u(t)
  return Ou(sn({}, r, { lightness: _n(0, 1, r.lightness + parseFloat(e)) }))
}
var rg = kn(tg),
  kt = rg
function ng(e, t) {
  if (t === 'transparent') return t
  var r = Sn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = sn({}, r, { alpha: _n(0, 1, (n * 100 + parseFloat(e) * 100) / 100) })
  return st(o)
}
var ag = kn(ng),
  Hr = ag
function og(e, t) {
  if (t === 'transparent') return t
  var r = Sn(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = sn({}, r, { alpha: _n(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) })
  return st(o)
}
var lg = kn(og),
  ee = lg,
  ig = Li,
  sg = Gc,
  ug = Object.prototype,
  cg = ug.hasOwnProperty
function dg(e, t, r) {
  var n = e[t]
  ;(!(cg.call(e, t) && sg(n, r)) || (r === void 0 && !(t in e))) && ig(e, t, r)
}
var So = dg,
  pg = So,
  fg = Mi,
  mg = Yc,
  Vl = un,
  gg = Kc
function hg(e, t, r, n) {
  if (!Vl(e)) return e
  t = fg(t, e)
  for (var o = -1, l = t.length, i = l - 1, u = e; u != null && ++o < l; ) {
    var s = gg(t[o]),
      c = r
    if (s === '__proto__' || s === 'constructor' || s === 'prototype') return e
    if (o != i) {
      var d = u[s]
      ;(c = n ? n(d, s, u) : void 0), c === void 0 && (c = Vl(d) ? d : mg(t[o + 1]) ? [] : {})
    }
    pg(u, s, c), (u = u[s])
  }
  return e
}
var yg = hg,
  bg = Jc,
  vg = yg,
  Eg = Mi
function xg(e, t, r) {
  for (var n = -1, o = t.length, l = {}; ++n < o; ) {
    var i = t[n],
      u = bg(e, i)
    r(u, i) && vg(l, Eg(i, e), u)
  }
  return l
}
var Ag = xg,
  wg = Xc,
  Cg = Bi,
  Sg = $i,
  kg = Qc,
  _g = Object.getOwnPropertySymbols,
  Og = _g
    ? function (e) {
        for (var t = []; e; ) wg(t, Sg(e)), (e = Cg(e))
        return t
      }
    : kg,
  Ru = Og
function Tg(e) {
  var t = []
  if (e != null) for (var r in Object(e)) t.push(r)
  return t
}
var Rg = Tg,
  Fg = un,
  Dg = Ii,
  Lg = Rg,
  Mg = Object.prototype,
  Bg = Mg.hasOwnProperty
function $g(e) {
  if (!Fg(e)) return Lg(e)
  var t = Dg(e),
    r = []
  for (var n in e) (n == 'constructor' && (t || !Bg.call(e, n))) || r.push(n)
  return r
}
var Ig = $g,
  jg = e0,
  Hg = Ig,
  Ng = t0
function Zg(e) {
  return Ng(e) ? jg(e, !0) : Hg(e)
}
var ko = Zg,
  Pg = r0,
  Vg = Ru,
  qg = ko
function zg(e) {
  return Pg(e, qg, Vg)
}
var Fu = zg,
  Ug = n0,
  Wg = a0,
  Gg = Ag,
  Yg = Fu
function Kg(e, t) {
  if (e == null) return {}
  var r = Ug(Yg(e), function (n) {
    return [n]
  })
  return (
    (t = Wg(t)),
    Gg(e, r, function (n, o) {
      return t(n, o[0])
    })
  )
}
var Jg = Kg
const Xg = ln(Jg)
function _t() {
  return (
    (_t = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    _t.apply(this, arguments)
  )
}
const Qg = ['children', 'options'],
  ql = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap'
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
  zl = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '“' },
  eh = ['style', 'script'],
  th = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  rh = /mailto:/i,
  nh = /\n{2,}$/,
  Du = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  ah = /^ *> ?/gm,
  oh = /^ {2,}\n/,
  lh = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
  Lu = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
  Mu = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  ih = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  sh = /^(?:\n *)*\n/,
  uh = /\r\n?/g,
  ch = /^\[\^([^\]]+)](:.*)\n/,
  dh = /^\[\^([^\]]+)]/,
  ph = /\f/g,
  fh = /^\s*?\[(x|\s)\]/,
  Bu = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  $u = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  Iu = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  _a =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  mh = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  ju = /^<!--[\s\S]*?(?:-->)/,
  gh = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  Oa = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  hh = /^\{.*\}$/,
  yh = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  bh = /^<([^ >]+@[^ >]+)>/,
  vh = /^<([^ >]+:\/[^ >]+)>/,
  Eh = /-([a-z])?/gi,
  Hu = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  xh = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  Ah = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  wh = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  Ch = /(\[|\])/g,
  Sh = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  kh = /\t/g,
  _h = /^ *\| */,
  Oh = /(^ *\||\| *$)/g,
  Th = / *$/,
  Rh = /^ *:-+: *$/,
  Fh = /^ *:-+ *$/,
  Dh = /^ *-+: *$/,
  Lh = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  Mh = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  Bh = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
  $h = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Ih = /^\\([^0-9A-Za-z\s])/,
  jh = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  Hh = /^\n+/,
  Nh = /^([ \t]*)/,
  Zh = /\\([^\\])/g,
  Ul = / *\n+$/,
  Ph = /(?:^|\n)( *)$/,
  _o = '(?:\\d+\\.)',
  Oo = '(?:[*+-])'
function Nu(e) {
  return '( *)(' + (e === 1 ? _o : Oo) + ') +'
}
const Zu = Nu(1),
  Pu = Nu(2)
function Vu(e) {
  return new RegExp('^' + (e === 1 ? Zu : Pu))
}
const Vh = Vu(1),
  qh = Vu(2)
function qu(e) {
  return new RegExp(
    '^' + (e === 1 ? Zu : Pu) + '[^\\n]*(?:\\n(?!\\1' + (e === 1 ? _o : Oo) + ' )[^\\n]*)*(\\n|$)',
    'gm'
  )
}
const zu = qu(1),
  Uu = qu(2)
function Wu(e) {
  const t = e === 1 ? _o : Oo
  return new RegExp('^( *)(' + t + ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' + t + ' (?!' + t + ' ))\\n*|\\s*\\n*$)')
}
const Gu = Wu(1),
  Yu = Wu(2)
function Wl(e, t) {
  const r = t === 1,
    n = r ? Gu : Yu,
    o = r ? zu : Uu,
    l = r ? Vh : qh
  return {
    t(i, u, s) {
      const c = Ph.exec(s)
      return c && (u.o || (!u._ && !u.u)) ? n.exec((i = c[1] + i)) : null
    },
    i: q.HIGH,
    l(i, u, s) {
      const c = r ? +i[2] : void 0,
        d = i[0]
          .replace(
            nh,
            `
`
          )
          .match(o)
      let g = !1
      return {
        p: d.map(function (h, p) {
          const m = l.exec(h)[0].length,
            f = new RegExp('^ {1,' + m + '}', 'gm'),
            E = h.replace(f, '').replace(l, ''),
            b = p === d.length - 1,
            x =
              E.indexOf(`

`) !== -1 ||
              (b && g)
          g = x
          const y = s._,
            v = s.o
          let A
          ;(s.o = !0),
            x
              ? ((s._ = !1),
                (A = E.replace(
                  Ul,
                  `

`
                )))
              : ((s._ = !0), (A = E.replace(Ul, '')))
          const w = u(A, s)
          return (s._ = y), (s.o = v), w
        }),
        m: r,
        g: c
      }
    },
    h: (i, u, s) =>
      e(
        i.m ? 'ol' : 'ul',
        { key: s.k, start: i.g },
        i.p.map(function (c, d) {
          return e('li', { key: d }, u(c, s))
        })
      )
  }
}
const zh = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Uh = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
  Ku = [Du, Lu, Mu, Bu, Iu, $u, ju, Hu, zu, Gu, Uu, Yu],
  Wh = [...Ku, /^[^\n]+(?:  \n|\n{2,})/, _a, Oa]
function Gh(e) {
  return e
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase()
}
function Yh(e) {
  return Dh.test(e) ? 'right' : Rh.test(e) ? 'center' : Fh.test(e) ? 'left' : null
}
function Gl(e, t, r) {
  const n = r.$
  r.$ = !0
  const o = t(e.trim(), r)
  r.$ = n
  let l = [[]]
  return (
    o.forEach(function (i, u) {
      i.type === 'tableSeparator'
        ? u !== 0 && u !== o.length - 1 && l.push([])
        : (i.type !== 'text' || (o[u + 1] != null && o[u + 1].type !== 'tableSeparator') || (i.v = i.v.replace(Th, '')),
          l[l.length - 1].push(i))
    }),
    l
  )
}
function Kh(e, t, r) {
  r._ = !0
  const n = Gl(e[1], t, r),
    o = e[2].replace(Oh, '').split('|').map(Yh),
    l = (function (i, u, s) {
      return i
        .trim()
        .split(
          `
`
        )
        .map(function (c) {
          return Gl(c, u, s)
        })
    })(e[3], t, r)
  return (r._ = !1), { S: o, A: l, L: n, type: 'table' }
}
function Yl(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] }
}
function ft(e) {
  return function (t, r) {
    return r._ ? e.exec(t) : null
  }
}
function mt(e) {
  return function (t, r) {
    return r._ || r.u ? e.exec(t) : null
  }
}
function lt(e) {
  return function (t, r) {
    return r._ || r.u ? null : e.exec(t)
  }
}
function cr(e) {
  return function (t) {
    return e.exec(t)
  }
}
function Jh(e, t, r) {
  if (
    t._ ||
    t.u ||
    (r &&
      !r.endsWith(`
`))
  )
    return null
  let n = ''
  e.split(
    `
`
  ).every(
    l =>
      !Ku.some(i => i.test(l)) &&
      ((n +=
        l +
        `
`),
      l.trim())
  )
  const o = n.trimEnd()
  return o == '' ? null : [n, o]
}
function jt(e) {
  try {
    if (
      decodeURIComponent(e)
        .replace(/[^A-Za-z0-9/:]/g, '')
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return
  } catch {
    return null
  }
  return e
}
function Kl(e) {
  return e.replace(Zh, '$1')
}
function Jr(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1
  ;(r._ = !0), (r.u = !0)
  const l = e(t, r)
  return (r._ = n), (r.u = o), l
}
function Xh(e, t, r) {
  const n = r._ || !1,
    o = r.u || !1
  ;(r._ = !1), (r.u = !0)
  const l = e(t, r)
  return (r._ = n), (r.u = o), l
}
function Qh(e, t, r) {
  return (r._ = !1), e(t, r)
}
const Kn = (e, t, r) => ({ v: Jr(t, e[1], r) })
function Jn() {
  return {}
}
function Xn() {
  return null
}
function ey(...e) {
  return e.filter(Boolean).join(' ')
}
function Qn(e, t, r) {
  let n = e
  const o = t.split('.')
  for (; o.length && ((n = n[o[0]]), n !== void 0); ) o.shift()
  return n || r
}
var q
function ty(e, t = {}) {
  ;(t.overrides = t.overrides || {}),
    (t.slugify = t.slugify || Gh),
    (t.namedCodesToUnicode = t.namedCodesToUnicode ? _t({}, zl, t.namedCodesToUnicode) : zl)
  const r = t.createElement || C.createElement
  function n(p, m, ...f) {
    const E = Qn(t.overrides, `${p}.props`, {})
    return r(
      (function (b, x) {
        const y = Qn(x, b)
        return y
          ? typeof y == 'function' || (typeof y == 'object' && 'render' in y)
            ? y
            : Qn(x, `${b}.component`, b)
          : b
      })(p, t.overrides),
      _t({}, m, E, { className: ey(m == null ? void 0 : m.className, E.className) || void 0 }),
      ...f
    )
  }
  function o(p) {
    let m = !1
    t.forceInline ? (m = !0) : t.forceBlock || (m = Sh.test(p) === !1)
    const f = d(
      c(
        m
          ? p
          : `${p.trimEnd().replace(Hh, '')}

`,
        { _: m }
      )
    )
    for (; typeof f[f.length - 1] == 'string' && !f[f.length - 1].trim(); ) f.pop()
    if (t.wrapper === null) return f
    const E = t.wrapper || (m ? 'span' : 'div')
    let b
    if (f.length > 1 || t.forceWrapper) b = f
    else {
      if (f.length === 1) return (b = f[0]), typeof b == 'string' ? n('span', { key: 'outer' }, b) : b
      b = null
    }
    return C.createElement(E, { key: 'outer' }, b)
  }
  function l(p) {
    const m = p.match(th)
    return m
      ? m.reduce(function (f, E, b) {
          const x = E.indexOf('=')
          if (x !== -1) {
            const y = (function (k) {
                return (
                  k.indexOf('-') !== -1 &&
                    k.match(gh) === null &&
                    (k = k.replace(Eh, function (S, O) {
                      return O.toUpperCase()
                    })),
                  k
                )
              })(E.slice(0, x)).trim(),
              v = (function (k) {
                const S = k[0]
                return (S === '"' || S === "'") && k.length >= 2 && k[k.length - 1] === S ? k.slice(1, -1) : k
              })(E.slice(x + 1).trim()),
              A = ql[y] || y,
              w = (f[A] = (function (k, S) {
                return k === 'style'
                  ? S.split(/;\s?/).reduce(function (O, T) {
                      const R = T.slice(0, T.indexOf(':'))
                      return (O[R.replace(/(-[a-z])/g, D => D[1].toUpperCase())] = T.slice(R.length + 1).trim()), O
                    }, {})
                  : k === 'href'
                  ? jt(S)
                  : (S.match(hh) && (S = S.slice(1, S.length - 1)), S === 'true' || (S !== 'false' && S))
              })(y, v))
            typeof w == 'string' && (_a.test(w) || Oa.test(w)) && (f[A] = C.cloneElement(o(w.trim()), { key: b }))
          } else E !== 'style' && (f[ql[E] || E] = !0)
          return f
        }, {})
      : null
  }
  const i = [],
    u = {},
    s = {
      blockQuote: {
        t: lt(Du),
        i: q.HIGH,
        l: (p, m, f) => ({ v: m(p[0].replace(ah, ''), f) }),
        h: (p, m, f) => n('blockquote', { key: f.k }, m(p.v, f))
      },
      breakLine: { t: cr(oh), i: q.HIGH, l: Jn, h: (p, m, f) => n('br', { key: f.k }) },
      breakThematic: { t: lt(lh), i: q.HIGH, l: Jn, h: (p, m, f) => n('hr', { key: f.k }) },
      codeBlock: {
        t: lt(Mu),
        i: q.MAX,
        l: p => ({ v: p[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''), M: void 0 }),
        h: (p, m, f) => n('pre', { key: f.k }, n('code', _t({}, p.O, { className: p.M ? `lang-${p.M}` : '' }), p.v))
      },
      codeFenced: {
        t: lt(Lu),
        i: q.MAX,
        l: p => ({ O: l(p[3] || ''), v: p[4], M: p[2] || void 0, type: 'codeBlock' })
      },
      codeInline: { t: mt(ih), i: q.LOW, l: p => ({ v: p[2] }), h: (p, m, f) => n('code', { key: f.k }, p.v) },
      footnote: { t: lt(ch), i: q.MAX, l: p => (i.push({ I: p[2], j: p[1] }), {}), h: Xn },
      footnoteReference: {
        t: ft(dh),
        i: q.HIGH,
        l: p => ({ v: p[1], B: `#${t.slugify(p[1])}` }),
        h: (p, m, f) => n('a', { key: f.k, href: jt(p.B) }, n('sup', { key: f.k }, p.v))
      },
      gfmTask: {
        t: ft(fh),
        i: q.HIGH,
        l: p => ({ R: p[1].toLowerCase() === 'x' }),
        h: (p, m, f) => n('input', { checked: p.R, key: f.k, readOnly: !0, type: 'checkbox' })
      },
      heading: {
        t: lt(t.enforceAtxHeadings ? $u : Bu),
        i: q.HIGH,
        l: (p, m, f) => ({ v: Jr(m, p[2], f), T: t.slugify(p[2]), C: p[1].length }),
        h: (p, m, f) => n(`h${p.C}`, { id: p.T, key: f.k }, m(p.v, f))
      },
      headingSetext: {
        t: lt(Iu),
        i: q.MAX,
        l: (p, m, f) => ({ v: Jr(m, p[1], f), C: p[2] === '=' ? 1 : 2, type: 'heading' })
      },
      htmlComment: { t: cr(ju), i: q.HIGH, l: () => ({}), h: Xn },
      image: {
        t: mt(Uh),
        i: q.HIGH,
        l: p => ({ D: p[1], B: Kl(p[2]), F: p[3] }),
        h: (p, m, f) => n('img', { key: f.k, alt: p.D || void 0, title: p.F || void 0, src: jt(p.B) })
      },
      link: {
        t: ft(zh),
        i: q.LOW,
        l: (p, m, f) => ({ v: Xh(m, p[1], f), B: Kl(p[2]), F: p[3] }),
        h: (p, m, f) => n('a', { key: f.k, href: jt(p.B), title: p.F }, m(p.v, f))
      },
      linkAngleBraceStyleDetector: {
        t: ft(vh),
        i: q.MAX,
        l: p => ({ v: [{ v: p[1], type: 'text' }], B: p[1], type: 'link' })
      },
      linkBareUrlDetector: {
        t: (p, m) => (m.N ? null : ft(yh)(p, m)),
        i: q.MAX,
        l: p => ({ v: [{ v: p[1], type: 'text' }], B: p[1], F: void 0, type: 'link' })
      },
      linkMailtoDetector: {
        t: ft(bh),
        i: q.MAX,
        l(p) {
          let m = p[1],
            f = p[1]
          return (
            rh.test(f) || (f = 'mailto:' + f),
            { v: [{ v: m.replace('mailto:', ''), type: 'text' }], B: f, type: 'link' }
          )
        }
      },
      orderedList: Wl(n, 1),
      unorderedList: Wl(n, 2),
      newlineCoalescer: {
        t: lt(sh),
        i: q.LOW,
        l: Jn,
        h: () => `
`
      },
      paragraph: { t: Jh, i: q.LOW, l: Kn, h: (p, m, f) => n('p', { key: f.k }, m(p.v, f)) },
      ref: { t: ft(xh), i: q.MAX, l: p => ((u[p[1]] = { B: p[2], F: p[4] }), {}), h: Xn },
      refImage: {
        t: mt(Ah),
        i: q.MAX,
        l: p => ({ D: p[1] || void 0, P: p[2] }),
        h: (p, m, f) => n('img', { key: f.k, alt: p.D, src: jt(u[p.P].B), title: u[p.P].F })
      },
      refLink: {
        t: ft(wh),
        i: q.MAX,
        l: (p, m, f) => ({ v: m(p[1], f), Z: m(p[0].replace(Ch, '\\$1'), f), P: p[2] }),
        h: (p, m, f) =>
          u[p.P]
            ? n('a', { key: f.k, href: jt(u[p.P].B), title: u[p.P].F }, m(p.v, f))
            : n('span', { key: f.k }, m(p.Z, f))
      },
      table: {
        t: lt(Hu),
        i: q.HIGH,
        l: Kh,
        h: (p, m, f) =>
          n(
            'table',
            { key: f.k },
            n(
              'thead',
              null,
              n(
                'tr',
                null,
                p.L.map(function (E, b) {
                  return n('th', { key: b, style: Yl(p, b) }, m(E, f))
                })
              )
            ),
            n(
              'tbody',
              null,
              p.A.map(function (E, b) {
                return n(
                  'tr',
                  { key: b },
                  E.map(function (x, y) {
                    return n('td', { key: y, style: Yl(p, y) }, m(x, f))
                  })
                )
              })
            )
          )
      },
      tableSeparator: {
        t: function (p, m) {
          return m.$ ? ((m._ = !0), _h.exec(p)) : null
        },
        i: q.HIGH,
        l: function () {
          return { type: 'tableSeparator' }
        },
        h: () => ' | '
      },
      text: {
        t: cr(jh),
        i: q.MIN,
        l: p => ({ v: p[0].replace(mh, (m, f) => (t.namedCodesToUnicode[f] ? t.namedCodesToUnicode[f] : m)) }),
        h: p => p.v
      },
      textBolded: {
        t: mt(Lh),
        i: q.MED,
        l: (p, m, f) => ({ v: m(p[2], f) }),
        h: (p, m, f) => n('strong', { key: f.k }, m(p.v, f))
      },
      textEmphasized: {
        t: mt(Mh),
        i: q.LOW,
        l: (p, m, f) => ({ v: m(p[2], f) }),
        h: (p, m, f) => n('em', { key: f.k }, m(p.v, f))
      },
      textEscaped: { t: mt(Ih), i: q.HIGH, l: p => ({ v: p[1], type: 'text' }) },
      textMarked: { t: mt(Bh), i: q.LOW, l: Kn, h: (p, m, f) => n('mark', { key: f.k }, m(p.v, f)) },
      textStrikethroughed: { t: mt($h), i: q.LOW, l: Kn, h: (p, m, f) => n('del', { key: f.k }, m(p.v, f)) }
    }
  t.disableParsingRawHTML !== !0 &&
    ((s.htmlBlock = {
      t: cr(_a),
      i: q.HIGH,
      l(p, m, f) {
        const [, E] = p[3].match(Nh),
          b = new RegExp(`^${E}`, 'gm'),
          x = p[3].replace(b, ''),
          y = ((v = x), Wh.some(S => S.test(v)) ? Qh : Jr)
        var v
        const A = p[1].toLowerCase(),
          w = eh.indexOf(A) !== -1
        f.N = f.N || A === 'a'
        const k = w ? p[3] : y(m, x, f)
        return (f.N = !1), { O: l(p[2]), v: k, G: w, H: w ? A : p[1] }
      },
      h: (p, m, f) => n(p.H, _t({ key: f.k }, p.O), p.G ? p.v : m(p.v, f))
    }),
    (s.htmlSelfClosing = {
      t: cr(Oa),
      i: q.HIGH,
      l: p => ({ O: l(p[2] || ''), H: p[1] }),
      h: (p, m, f) => n(p.H, _t({}, p.O, { key: f.k }))
    }))
  const c = (function (p) {
      let m = Object.keys(p)
      function f(E, b) {
        let x = [],
          y = ''
        for (; E; ) {
          let v = 0
          for (; v < m.length; ) {
            const A = m[v],
              w = p[A],
              k = w.t(E, b, y)
            if (k) {
              const S = k[0]
              E = E.substring(S.length)
              const O = w.l(k, f, b)
              O.type == null && (O.type = A), x.push(O), (y = S)
              break
            }
            v++
          }
        }
        return x
      }
      return (
        m.sort(function (E, b) {
          let x = p[E].i,
            y = p[b].i
          return x !== y ? x - y : E < b ? -1 : 1
        }),
        function (E, b) {
          return f(
            (function (x) {
              return x
                .replace(
                  uh,
                  `
`
                )
                .replace(ph, '')
                .replace(kh, '    ')
            })(E),
            b
          )
        }
      )
    })(s),
    d =
      ((g = (function (p) {
        return function (m, f, E) {
          return p[m.type].h(m, f, E)
        }
      })(s)),
      function p(m, f = {}) {
        if (Array.isArray(m)) {
          const E = f.k,
            b = []
          let x = !1
          for (let y = 0; y < m.length; y++) {
            f.k = y
            const v = p(m[y], f),
              A = typeof v == 'string'
            A && x ? (b[b.length - 1] += v) : v !== null && b.push(v), (x = A)
          }
          return (f.k = E), b
        }
        return g(m, p, f)
      })
  var g
  const h = o(e)
  return i.length
    ? n(
        'div',
        null,
        h,
        n(
          'footer',
          { key: 'footer' },
          i.map(function (p) {
            return n('div', { id: t.slugify(p.j), key: p.j }, p.j, d(c(p.I, { _: !0 })))
          })
        )
      )
    : h
}
;(function (e) {
  ;(e[(e.MAX = 0)] = 'MAX'),
    (e[(e.HIGH = 1)] = 'HIGH'),
    (e[(e.MED = 2)] = 'MED'),
    (e[(e.LOW = 3)] = 'LOW'),
    (e[(e.MIN = 4)] = 'MIN')
})(q || (q = {}))
const Ju = e => {
  let { children: t, options: r } = e,
    n = (function (o, l) {
      if (o == null) return {}
      var i,
        u,
        s = {},
        c = Object.keys(o)
      for (u = 0; u < c.length; u++) l.indexOf((i = c[u])) >= 0 || (s[i] = o[i])
      return s
    })(e, Qg)
  return C.cloneElement(ty(t, r), n)
}
function ry(e, t, r, n) {
  for (var o = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < o; ) if (t(e[l], l, e)) return l
  return -1
}
var ny = ry
function ay(e) {
  return e !== e
}
var oy = ay
function ly(e, t, r) {
  for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n
  return -1
}
var iy = ly,
  sy = ny,
  uy = oy,
  cy = iy
function dy(e, t, r) {
  return t === t ? cy(e, t, r) : sy(e, uy, r)
}
var py = dy,
  fy = py
function my(e, t) {
  var r = e == null ? 0 : e.length
  return !!r && fy(e, t, 0) > -1
}
var gy = my
function hy(e, t, r) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (r(t, e[n])) return !0
  return !1
}
var yy = hy
function by() {}
var vy = by,
  ea = o0,
  Ey = vy,
  xy = ji,
  Ay = 1 / 0,
  wy =
    ea && 1 / xy(new ea([, -0]))[1] == Ay
      ? function (e) {
          return new ea(e)
        }
      : Ey,
  Cy = wy,
  Sy = l0,
  ky = gy,
  _y = yy,
  Oy = i0,
  Ty = Cy,
  Ry = ji,
  Fy = 200
function Dy(e, t, r) {
  var n = -1,
    o = ky,
    l = e.length,
    i = !0,
    u = [],
    s = u
  if (r) (i = !1), (o = _y)
  else if (l >= Fy) {
    var c = t ? null : Ty(e)
    if (c) return Ry(c)
    ;(i = !1), (o = Oy), (s = new Sy())
  } else s = t ? [] : u
  e: for (; ++n < l; ) {
    var d = e[n],
      g = t ? t(d) : d
    if (((d = r || d !== 0 ? d : 0), i && g === g)) {
      for (var h = s.length; h--; ) if (s[h] === g) continue e
      t && s.push(g), u.push(d)
    } else o(s, g, r) || (s !== u && s.push(g), u.push(d))
  }
  return u
}
var Ly = Dy,
  My = Ly
function By(e) {
  return e && e.length ? My(e) : []
}
var $y = By
const Iy = ln($y)
function jy(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
  return e
}
var Hy = jy,
  Ny = So,
  Zy = Li
function Py(e, t, r, n) {
  var o = !r
  r || (r = {})
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l],
      s = n ? n(r[u], e[u], u, r, e) : void 0
    s === void 0 && (s = e[u]), o ? Zy(r, u, s) : Ny(r, u, s)
  }
  return r
}
var On = Py,
  Vy = On,
  qy = Hi
function zy(e, t) {
  return e && Vy(t, qy(t), e)
}
var Uy = zy,
  Wy = On,
  Gy = ko
function Yy(e, t) {
  return e && Wy(t, Gy(t), e)
}
var Ky = Yy,
  on = { exports: {} }
on.exports
;(function (e, t) {
  var r = s0,
    n = t && !t.nodeType && t,
    o = n && !0 && e && !e.nodeType && e,
    l = o && o.exports === n,
    i = l ? r.Buffer : void 0,
    u = i ? i.allocUnsafe : void 0
  function s(c, d) {
    if (d) return c.slice()
    var g = c.length,
      h = u ? u(g) : new c.constructor(g)
    return c.copy(h), h
  }
  e.exports = s
})(on, on.exports)
var Jy = on.exports
function Xy(e, t) {
  var r = -1,
    n = e.length
  for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
  return t
}
var Qy = Xy,
  eb = On,
  tb = $i
function rb(e, t) {
  return eb(e, tb(e), t)
}
var nb = rb,
  ab = On,
  ob = Ru
function lb(e, t) {
  return ab(e, ob(e), t)
}
var ib = lb,
  sb = Object.prototype,
  ub = sb.hasOwnProperty
function cb(e) {
  var t = e.length,
    r = new e.constructor(t)
  return t && typeof e[0] == 'string' && ub.call(e, 'index') && ((r.index = e.index), (r.input = e.input)), r
}
var db = cb,
  Jl = u0
function pb(e) {
  var t = new e.constructor(e.byteLength)
  return new Jl(t).set(new Jl(e)), t
}
var To = pb,
  fb = To
function mb(e, t) {
  var r = t ? fb(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.byteLength)
}
var gb = mb,
  hb = /\w*$/
function yb(e) {
  var t = new e.constructor(e.source, hb.exec(e))
  return (t.lastIndex = e.lastIndex), t
}
var bb = yb,
  Xl = c0,
  Ql = Xl ? Xl.prototype : void 0,
  ei = Ql ? Ql.valueOf : void 0
function vb(e) {
  return ei ? Object(ei.call(e)) : {}
}
var Eb = vb,
  xb = To
function Ab(e, t) {
  var r = t ? xb(e.buffer) : e.buffer
  return new e.constructor(r, e.byteOffset, e.length)
}
var wb = Ab,
  Cb = To,
  Sb = gb,
  kb = bb,
  _b = Eb,
  Ob = wb,
  Tb = '[object Boolean]',
  Rb = '[object Date]',
  Fb = '[object Map]',
  Db = '[object Number]',
  Lb = '[object RegExp]',
  Mb = '[object Set]',
  Bb = '[object String]',
  $b = '[object Symbol]',
  Ib = '[object ArrayBuffer]',
  jb = '[object DataView]',
  Hb = '[object Float32Array]',
  Nb = '[object Float64Array]',
  Zb = '[object Int8Array]',
  Pb = '[object Int16Array]',
  Vb = '[object Int32Array]',
  qb = '[object Uint8Array]',
  zb = '[object Uint8ClampedArray]',
  Ub = '[object Uint16Array]',
  Wb = '[object Uint32Array]'
function Gb(e, t, r) {
  var n = e.constructor
  switch (t) {
    case Ib:
      return Cb(e)
    case Tb:
    case Rb:
      return new n(+e)
    case jb:
      return Sb(e, r)
    case Hb:
    case Nb:
    case Zb:
    case Pb:
    case Vb:
    case qb:
    case zb:
    case Ub:
    case Wb:
      return Ob(e, r)
    case Fb:
      return new n()
    case Db:
    case Bb:
      return new n(e)
    case Lb:
      return kb(e)
    case Mb:
      return new n()
    case $b:
      return _b(e)
  }
}
var Yb = Gb,
  Kb = un,
  ti = Object.create,
  Jb = (function () {
    function e() {}
    return function (t) {
      if (!Kb(t)) return {}
      if (ti) return ti(t)
      e.prototype = t
      var r = new e()
      return (e.prototype = void 0), r
    }
  })(),
  Xb = Jb,
  Qb = Xb,
  e3 = Bi,
  t3 = Ii
function r3(e) {
  return typeof e.constructor == 'function' && !t3(e) ? Qb(e3(e)) : {}
}
var n3 = r3,
  a3 = ja,
  o3 = Ni,
  l3 = '[object Map]'
function i3(e) {
  return o3(e) && a3(e) == l3
}
var s3 = i3,
  u3 = s3,
  c3 = Pi,
  ri = Zi,
  ni = ri && ri.isMap,
  d3 = ni ? c3(ni) : u3,
  p3 = d3,
  f3 = ja,
  m3 = Ni,
  g3 = '[object Set]'
function h3(e) {
  return m3(e) && f3(e) == g3
}
var y3 = h3,
  b3 = y3,
  v3 = Pi,
  ai = Zi,
  oi = ai && ai.isSet,
  E3 = oi ? v3(oi) : b3,
  x3 = E3,
  A3 = d0,
  w3 = Hy,
  C3 = So,
  S3 = Uy,
  k3 = Ky,
  _3 = Jy,
  O3 = Qy,
  T3 = nb,
  R3 = ib,
  F3 = f0,
  D3 = Fu,
  L3 = ja,
  M3 = db,
  B3 = Yb,
  $3 = n3,
  I3 = m0,
  j3 = p0,
  H3 = p3,
  N3 = un,
  Z3 = x3,
  P3 = Hi,
  V3 = ko,
  q3 = 1,
  z3 = 2,
  U3 = 4,
  Xu = '[object Arguments]',
  W3 = '[object Array]',
  G3 = '[object Boolean]',
  Y3 = '[object Date]',
  K3 = '[object Error]',
  Qu = '[object Function]',
  J3 = '[object GeneratorFunction]',
  X3 = '[object Map]',
  Q3 = '[object Number]',
  ec = '[object Object]',
  e4 = '[object RegExp]',
  t4 = '[object Set]',
  r4 = '[object String]',
  n4 = '[object Symbol]',
  a4 = '[object WeakMap]',
  o4 = '[object ArrayBuffer]',
  l4 = '[object DataView]',
  i4 = '[object Float32Array]',
  s4 = '[object Float64Array]',
  u4 = '[object Int8Array]',
  c4 = '[object Int16Array]',
  d4 = '[object Int32Array]',
  p4 = '[object Uint8Array]',
  f4 = '[object Uint8ClampedArray]',
  m4 = '[object Uint16Array]',
  g4 = '[object Uint32Array]',
  X = {}
X[Xu] =
  X[W3] =
  X[o4] =
  X[l4] =
  X[G3] =
  X[Y3] =
  X[i4] =
  X[s4] =
  X[u4] =
  X[c4] =
  X[d4] =
  X[X3] =
  X[Q3] =
  X[ec] =
  X[e4] =
  X[t4] =
  X[r4] =
  X[n4] =
  X[p4] =
  X[f4] =
  X[m4] =
  X[g4] =
    !0
X[K3] = X[Qu] = X[a4] = !1
function Xr(e, t, r, n, o, l) {
  var i,
    u = t & q3,
    s = t & z3,
    c = t & U3
  if ((r && (i = o ? r(e, n, o, l) : r(e)), i !== void 0)) return i
  if (!N3(e)) return e
  var d = I3(e)
  if (d) {
    if (((i = M3(e)), !u)) return O3(e, i)
  } else {
    var g = L3(e),
      h = g == Qu || g == J3
    if (j3(e)) return _3(e, u)
    if (g == ec || g == Xu || (h && !o)) {
      if (((i = s || h ? {} : $3(e)), !u)) return s ? R3(e, k3(i, e)) : T3(e, S3(i, e))
    } else {
      if (!X[g]) return o ? e : {}
      i = B3(e, g, u)
    }
  }
  l || (l = new A3())
  var p = l.get(e)
  if (p) return p
  l.set(e, i),
    Z3(e)
      ? e.forEach(function (E) {
          i.add(Xr(E, t, r, E, e, l))
        })
      : H3(e) &&
        e.forEach(function (E, b) {
          i.set(b, Xr(E, t, r, b, e, l))
        })
  var m = c ? (s ? D3 : F3) : s ? V3 : P3,
    f = d ? void 0 : m(e)
  return (
    w3(f || e, function (E, b) {
      f && ((b = E), (E = e[b])), C3(i, b, Xr(E, t, r, b, e, l))
    }),
    i
  )
}
var h4 = Xr,
  y4 = h4,
  b4 = 1,
  v4 = 4
function E4(e) {
  return y4(e, b4 | v4)
}
var x4 = E4
const A4 = ln(x4)
var w4 = Object.create,
  tc = Object.defineProperty,
  C4 = Object.getOwnPropertyDescriptor,
  rc = Object.getOwnPropertyNames,
  S4 = Object.getPrototypeOf,
  k4 = Object.prototype.hasOwnProperty,
  $e = (e, t) =>
    function () {
      return t || (0, e[rc(e)[0]])((t = { exports: {} }).exports, t), t.exports
    },
  _4 = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let o of rc(t))
        !k4.call(e, o) && o !== r && tc(e, o, { get: () => t[o], enumerable: !(n = C4(t, o)) || n.enumerable })
    return e
  },
  Ro = (e, t, r) => (
    (r = e != null ? w4(S4(e)) : {}),
    _4(t || !e || !e.__esModule ? tc(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  O4 = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type'
  ],
  T4 = ['detail']
function R4(e) {
  const t = O4.filter(r => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {})
  return (
    e instanceof CustomEvent &&
      T4.filter(r => e[r] !== void 0).forEach(r => {
        t[r] = e[r]
      }),
    t
  )
}
var nc = $e({
    'node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function') return !1
        if (typeof Symbol.iterator == 'symbol') return !0
        var n = {},
          o = Symbol('test'),
          l = Object(o)
        if (
          typeof o == 'string' ||
          Object.prototype.toString.call(o) !== '[object Symbol]' ||
          Object.prototype.toString.call(l) !== '[object Symbol]'
        )
          return !1
        var i = 42
        n[o] = i
        for (o in n) return !1
        if (
          (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' && Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1
        var u = Object.getOwnPropertySymbols(n)
        if (u.length !== 1 || u[0] !== o || !Object.prototype.propertyIsEnumerable.call(n, o)) return !1
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var s = Object.getOwnPropertyDescriptor(n, o)
          if (s.value !== i || s.enumerable !== !0) return !1
        }
        return !0
      }
    }
  }),
  ac = $e({
    'node_modules/has-symbols/index.js'(e, t) {
      var r = typeof Symbol < 'u' && Symbol,
        n = nc()
      t.exports = function () {
        return typeof r != 'function' ||
          typeof Symbol != 'function' ||
          typeof r('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : n()
      }
    }
  }),
  F4 = $e({
    'node_modules/function-bind/implementation.js'(e, t) {
      var r = 'Function.prototype.bind called on incompatible ',
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        l = '[object Function]'
      t.exports = function (u) {
        var s = this
        if (typeof s != 'function' || o.call(s) !== l) throw new TypeError(r + s)
        for (
          var c = n.call(arguments, 1),
            d,
            g = function () {
              if (this instanceof d) {
                var E = s.apply(this, c.concat(n.call(arguments)))
                return Object(E) === E ? E : this
              } else return s.apply(u, c.concat(n.call(arguments)))
            },
            h = Math.max(0, s.length - c.length),
            p = [],
            m = 0;
          m < h;
          m++
        )
          p.push('$' + m)
        if (
          ((d = Function('binder', 'return function (' + p.join(',') + '){ return binder.apply(this,arguments); }')(g)),
          s.prototype)
        ) {
          var f = function () {}
          ;(f.prototype = s.prototype), (d.prototype = new f()), (f.prototype = null)
        }
        return d
      }
    }
  }),
  Fo = $e({
    'node_modules/function-bind/index.js'(e, t) {
      var r = F4()
      t.exports = Function.prototype.bind || r
    }
  }),
  D4 = $e({
    'node_modules/has/src/index.js'(e, t) {
      var r = Fo()
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
    }
  }),
  oc = $e({
    'node_modules/get-intrinsic/index.js'(e, t) {
      var r,
        n = SyntaxError,
        o = Function,
        l = TypeError,
        i = function (D) {
          try {
            return o('"use strict"; return (' + D + ').constructor;')()
          } catch {}
        },
        u = Object.getOwnPropertyDescriptor
      if (u)
        try {
          u({}, '')
        } catch {
          u = null
        }
      var s = function () {
          throw new l()
        },
        c = u
          ? (function () {
              try {
                return arguments.callee, s
              } catch {
                try {
                  return u(arguments, 'callee').get
                } catch {
                  return s
                }
              }
            })()
          : s,
        d = ac()(),
        g =
          Object.getPrototypeOf ||
          function (D) {
            return D.__proto__
          },
        h = {},
        p = typeof Uint8Array > 'u' ? r : g(Uint8Array),
        m = {
          '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
          '%ArrayIteratorPrototype%': d ? g([][Symbol.iterator]()) : r,
          '%AsyncFromSyncIteratorPrototype%': r,
          '%AsyncFunction%': h,
          '%AsyncGenerator%': h,
          '%AsyncGeneratorFunction%': h,
          '%AsyncIteratorPrototype%': h,
          '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? r : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
          '%FinalizationRegistry%': typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
          '%Function%': o,
          '%GeneratorFunction%': h,
          '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': d ? g(g([][Symbol.iterator]())) : r,
          '%JSON%': typeof JSON == 'object' ? JSON : r,
          '%Map%': typeof Map > 'u' ? r : Map,
          '%MapIteratorPrototype%': typeof Map > 'u' || !d ? r : g(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? r : Promise,
          '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? r : Set,
          '%SetIteratorPrototype%': typeof Set > 'u' || !d ? r : g(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': d ? g(''[Symbol.iterator]()) : r,
          '%Symbol%': d ? Symbol : r,
          '%SyntaxError%': n,
          '%ThrowTypeError%': c,
          '%TypedArray%': p,
          '%TypeError%': l,
          '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
          '%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet
        },
        f = function D(F) {
          var j
          if (F === '%AsyncFunction%') j = i('async function () {}')
          else if (F === '%GeneratorFunction%') j = i('function* () {}')
          else if (F === '%AsyncGeneratorFunction%') j = i('async function* () {}')
          else if (F === '%AsyncGenerator%') {
            var L = D('%AsyncGeneratorFunction%')
            L && (j = L.prototype)
          } else if (F === '%AsyncIteratorPrototype%') {
            var M = D('%AsyncGenerator%')
            M && (j = g(M.prototype))
          }
          return (m[F] = j), j
        },
        E = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype']
        },
        b = Fo(),
        x = D4(),
        y = b.call(Function.call, Array.prototype.concat),
        v = b.call(Function.apply, Array.prototype.splice),
        A = b.call(Function.call, String.prototype.replace),
        w = b.call(Function.call, String.prototype.slice),
        k = b.call(Function.call, RegExp.prototype.exec),
        S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        T = function (F) {
          var j = w(F, 0, 1),
            L = w(F, -1)
          if (j === '%' && L !== '%') throw new n('invalid intrinsic syntax, expected closing `%`')
          if (L === '%' && j !== '%') throw new n('invalid intrinsic syntax, expected opening `%`')
          var M = []
          return (
            A(F, S, function (H, P, $, N) {
              M[M.length] = $ ? A(N, O, '$1') : P || H
            }),
            M
          )
        },
        R = function (F, j) {
          var L = F,
            M
          if ((x(E, L) && ((M = E[L]), (L = '%' + M[0] + '%')), x(m, L))) {
            var H = m[L]
            if ((H === h && (H = f(L)), typeof H > 'u' && !j))
              throw new l('intrinsic ' + F + ' exists, but is not available. Please file an issue!')
            return { alias: M, name: L, value: H }
          }
          throw new n('intrinsic ' + F + ' does not exist!')
        }
      t.exports = function (F, j) {
        if (typeof F != 'string' || F.length === 0) throw new l('intrinsic name must be a non-empty string')
        if (arguments.length > 1 && typeof j != 'boolean') throw new l('"allowMissing" argument must be a boolean')
        if (k(/^%?[^%]*%?$/, F) === null)
          throw new n('`%` may not be present anywhere but at the beginning and end of the intrinsic name')
        var L = T(F),
          M = L.length > 0 ? L[0] : '',
          H = R('%' + M + '%', j),
          P = H.name,
          $ = H.value,
          N = !1,
          K = H.alias
        K && ((M = K[0]), v(L, y([0, 1], K)))
        for (var re = 1, G = !0; re < L.length; re += 1) {
          var J = L[re],
            I = w(J, 0, 1),
            V = w(J, -1)
          if ((I === '"' || I === "'" || I === '`' || V === '"' || V === "'" || V === '`') && I !== V)
            throw new n('property names with quotes must have matching quotes')
          if (((J === 'constructor' || !G) && (N = !0), (M += '.' + J), (P = '%' + M + '%'), x(m, P))) $ = m[P]
          else if ($ != null) {
            if (!(J in $)) {
              if (!j) throw new l('base intrinsic for ' + F + ' exists, but the property is not available.')
              return
            }
            if (u && re + 1 >= L.length) {
              var z = u($, J)
              ;(G = !!z), G && 'get' in z && !('originalValue' in z.get) ? ($ = z.get) : ($ = $[J])
            } else (G = x($, J)), ($ = $[J])
            G && !N && (m[P] = $)
          }
        }
        return $
      }
    }
  }),
  L4 = $e({
    'node_modules/call-bind/index.js'(e, t) {
      var r = Fo(),
        n = oc(),
        o = n('%Function.prototype.apply%'),
        l = n('%Function.prototype.call%'),
        i = n('%Reflect.apply%', !0) || r.call(l, o),
        u = n('%Object.getOwnPropertyDescriptor%', !0),
        s = n('%Object.defineProperty%', !0),
        c = n('%Math.max%')
      if (s)
        try {
          s({}, 'a', { value: 1 })
        } catch {
          s = null
        }
      t.exports = function (h) {
        var p = i(r, l, arguments)
        if (u && s) {
          var m = u(p, 'length')
          m.configurable && s(p, 'length', { value: 1 + c(0, h.length - (arguments.length - 1)) })
        }
        return p
      }
      var d = function () {
        return i(r, o, arguments)
      }
      s ? s(t.exports, 'apply', { value: d }) : (t.exports.apply = d)
    }
  }),
  M4 = $e({
    'node_modules/call-bind/callBound.js'(e, t) {
      var r = oc(),
        n = L4(),
        o = n(r('String.prototype.indexOf'))
      t.exports = function (i, u) {
        var s = r(i, !!u)
        return typeof s == 'function' && o(i, '.prototype.') > -1 ? n(s) : s
      }
    }
  }),
  B4 = $e({
    'node_modules/has-tostringtag/shams.js'(e, t) {
      var r = nc()
      t.exports = function () {
        return r() && !!Symbol.toStringTag
      }
    }
  }),
  $4 = $e({
    'node_modules/is-regex/index.js'(e, t) {
      var r = M4(),
        n = B4()(),
        o,
        l,
        i,
        u
      n &&
        ((o = r('Object.prototype.hasOwnProperty')),
        (l = r('RegExp.prototype.exec')),
        (i = {}),
        (s = function () {
          throw i
        }),
        (u = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive == 'symbol' && (u[Symbol.toPrimitive] = s))
      var s,
        c = r('Object.prototype.toString'),
        d = Object.getOwnPropertyDescriptor,
        g = '[object RegExp]'
      t.exports = n
        ? function (p) {
            if (!p || typeof p != 'object') return !1
            var m = d(p, 'lastIndex'),
              f = m && o(m, 'value')
            if (!f) return !1
            try {
              l(p, u)
            } catch (E) {
              return E === i
            }
          }
        : function (p) {
            return !p || (typeof p != 'object' && typeof p != 'function') ? !1 : c(p) === g
          }
    }
  }),
  I4 = $e({
    'node_modules/is-function/index.js'(e, t) {
      t.exports = n
      var r = Object.prototype.toString
      function n(o) {
        if (!o) return !1
        var l = r.call(o)
        return (
          l === '[object Function]' ||
          (typeof o == 'function' && l !== '[object RegExp]') ||
          (typeof window < 'u' &&
            (o === window.setTimeout || o === window.alert || o === window.confirm || o === window.prompt))
        )
      }
    }
  }),
  j4 = $e({
    'node_modules/is-symbol/index.js'(e, t) {
      var r = Object.prototype.toString,
        n = ac()()
      n
        ? ((o = Symbol.prototype.toString),
          (l = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() != 'symbol' ? !1 : l.test(o.call(s))
          }),
          (t.exports = function (s) {
            if (typeof s == 'symbol') return !0
            if (r.call(s) !== '[object Symbol]') return !1
            try {
              return i(s)
            } catch {
              return !1
            }
          }))
        : (t.exports = function (s) {
            return !1
          })
      var o, l, i
    }
  }),
  H4 = Ro($4()),
  N4 = Ro(I4()),
  Z4 = Ro(j4())
function P4(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1
}
var V4 = typeof global == 'object' && global && global.Object === Object && global,
  q4 = V4,
  z4 = typeof self == 'object' && self && self.Object === Object && self,
  U4 = q4 || z4 || Function('return this')(),
  Do = U4,
  W4 = Do.Symbol,
  Jt = W4,
  lc = Object.prototype,
  G4 = lc.hasOwnProperty,
  Y4 = lc.toString,
  dr = Jt ? Jt.toStringTag : void 0
function K4(e) {
  var t = G4.call(e, dr),
    r = e[dr]
  try {
    e[dr] = void 0
    var n = !0
  } catch {}
  var o = Y4.call(e)
  return n && (t ? (e[dr] = r) : delete e[dr]), o
}
var J4 = K4,
  X4 = Object.prototype,
  Q4 = X4.toString
function e7(e) {
  return Q4.call(e)
}
var t7 = e7,
  r7 = '[object Null]',
  n7 = '[object Undefined]',
  li = Jt ? Jt.toStringTag : void 0
function a7(e) {
  return e == null ? (e === void 0 ? n7 : r7) : li && li in Object(e) ? J4(e) : t7(e)
}
var o7 = a7,
  ii = Jt ? Jt.prototype : void 0
ii && ii.toString
function l7(e) {
  var t = typeof e
  return e != null && (t == 'object' || t == 'function')
}
var ic = l7,
  i7 = '[object AsyncFunction]',
  s7 = '[object Function]',
  u7 = '[object GeneratorFunction]',
  c7 = '[object Proxy]'
function d7(e) {
  if (!ic(e)) return !1
  var t = o7(e)
  return t == s7 || t == u7 || t == i7 || t == c7
}
var p7 = d7,
  f7 = Do['__core-js_shared__'],
  ta = f7,
  si = (function () {
    var e = /[^.]+$/.exec((ta && ta.keys && ta.keys.IE_PROTO) || '')
    return e ? 'Symbol(src)_1.' + e : ''
  })()
function m7(e) {
  return !!si && si in e
}
var g7 = m7,
  h7 = Function.prototype,
  y7 = h7.toString
function b7(e) {
  if (e != null) {
    try {
      return y7.call(e)
    } catch {}
    try {
      return e + ''
    } catch {}
  }
  return ''
}
var v7 = b7,
  E7 = /[\\^$.*+?()[\]{}|]/g,
  x7 = /^\[object .+?Constructor\]$/,
  A7 = Function.prototype,
  w7 = Object.prototype,
  C7 = A7.toString,
  S7 = w7.hasOwnProperty,
  k7 = RegExp(
    '^' +
      C7.call(S7)
        .replace(E7, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  )
function _7(e) {
  if (!ic(e) || g7(e)) return !1
  var t = p7(e) ? k7 : x7
  return t.test(v7(e))
}
var O7 = _7
function T7(e, t) {
  return e == null ? void 0 : e[t]
}
var R7 = T7
function F7(e, t) {
  var r = R7(e, t)
  return O7(r) ? r : void 0
}
var sc = F7
function D7(e, t) {
  return e === t || (e !== e && t !== t)
}
var L7 = D7,
  M7 = sc(Object, 'create'),
  Sr = M7
function B7() {
  ;(this.__data__ = Sr ? Sr(null) : {}), (this.size = 0)
}
var $7 = B7
function I7(e) {
  var t = this.has(e) && delete this.__data__[e]
  return (this.size -= t ? 1 : 0), t
}
var j7 = I7,
  H7 = '__lodash_hash_undefined__',
  N7 = Object.prototype,
  Z7 = N7.hasOwnProperty
function P7(e) {
  var t = this.__data__
  if (Sr) {
    var r = t[e]
    return r === H7 ? void 0 : r
  }
  return Z7.call(t, e) ? t[e] : void 0
}
var V7 = P7,
  q7 = Object.prototype,
  z7 = q7.hasOwnProperty
function U7(e) {
  var t = this.__data__
  return Sr ? t[e] !== void 0 : z7.call(t, e)
}
var W7 = U7,
  G7 = '__lodash_hash_undefined__'
function Y7(e, t) {
  var r = this.__data__
  return (this.size += this.has(e) ? 0 : 1), (r[e] = Sr && t === void 0 ? G7 : t), this
}
var K7 = Y7
function tr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
tr.prototype.clear = $7
tr.prototype.delete = j7
tr.prototype.get = V7
tr.prototype.has = W7
tr.prototype.set = K7
var ui = tr
function J7() {
  ;(this.__data__ = []), (this.size = 0)
}
var X7 = J7
function Q7(e, t) {
  for (var r = e.length; r--; ) if (L7(e[r][0], t)) return r
  return -1
}
var Tn = Q7,
  ev = Array.prototype,
  tv = ev.splice
function rv(e) {
  var t = this.__data__,
    r = Tn(t, e)
  if (r < 0) return !1
  var n = t.length - 1
  return r == n ? t.pop() : tv.call(t, r, 1), --this.size, !0
}
var nv = rv
function av(e) {
  var t = this.__data__,
    r = Tn(t, e)
  return r < 0 ? void 0 : t[r][1]
}
var ov = av
function lv(e) {
  return Tn(this.__data__, e) > -1
}
var iv = lv
function sv(e, t) {
  var r = this.__data__,
    n = Tn(r, e)
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
}
var uv = sv
function rr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
rr.prototype.clear = X7
rr.prototype.delete = nv
rr.prototype.get = ov
rr.prototype.has = iv
rr.prototype.set = uv
var cv = rr,
  dv = sc(Do, 'Map'),
  pv = dv
function fv() {
  ;(this.size = 0), (this.__data__ = { hash: new ui(), map: new (pv || cv)(), string: new ui() })
}
var mv = fv
function gv(e) {
  var t = typeof e
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null
}
var hv = gv
function yv(e, t) {
  var r = e.__data__
  return hv(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
}
var Rn = yv
function bv(e) {
  var t = Rn(this, e).delete(e)
  return (this.size -= t ? 1 : 0), t
}
var vv = bv
function Ev(e) {
  return Rn(this, e).get(e)
}
var xv = Ev
function Av(e) {
  return Rn(this, e).has(e)
}
var wv = Av
function Cv(e, t) {
  var r = Rn(this, e),
    n = r.size
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
}
var Sv = Cv
function nr(e) {
  var t = -1,
    r = e == null ? 0 : e.length
  for (this.clear(); ++t < r; ) {
    var n = e[t]
    this.set(n[0], n[1])
  }
}
nr.prototype.clear = mv
nr.prototype.delete = vv
nr.prototype.get = xv
nr.prototype.has = wv
nr.prototype.set = Sv
var uc = nr,
  kv = 'Expected a function'
function Lo(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(kv)
  var r = function () {
    var n = arguments,
      o = t ? t.apply(this, n) : n[0],
      l = r.cache
    if (l.has(o)) return l.get(o)
    var i = e.apply(this, n)
    return (r.cache = l.set(o, i) || l), i
  }
  return (r.cache = new (Lo.Cache || uc)()), r
}
Lo.Cache = uc
var _v = Lo,
  Ov = 500
function Tv(e) {
  var t = _v(e, function (n) {
      return r.size === Ov && r.clear(), n
    }),
    r = t.cache
  return t
}
var Rv = Tv,
  Fv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Dv = /\\(\\)?/g
Rv(function (e) {
  var t = []
  return (
    e.charCodeAt(0) === 46 && t.push(''),
    e.replace(Fv, function (r, n, o, l) {
      t.push(o ? l.replace(Dv, '$1') : n || r)
    }),
    t
  )
})
var Lv = P4,
  Mv = e => {
    let t = null,
      r = !1,
      n = !1,
      o = !1,
      l = ''
    if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !o
          ? e[i] === '"' || e[i] === "'" || e[i] === '`'
            ? (t = e[i])
            : e[i] === '/' && e[i + 1] === '*'
            ? (r = !0)
            : e[i] === '/' && e[i + 1] === '/'
            ? (n = !0)
            : e[i] === '/' && e[i + 1] !== '/' && (o = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== '\\') ||
                (e[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            o &&
              ((e[i] === '/' && e[i - 1] !== '\\') ||
                e[i] ===
                  `
`) &&
              (o = !1),
            r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (l += e[i])
    else l = e
    return l
  },
  Bv = Dt(1e4)(e => Mv(e).replace(/\n\s*/g, '').trim()),
  $v = function (t, r) {
    const n = r.slice(0, r.indexOf('{')),
      o = r.slice(r.indexOf('{'))
    if (n.includes('=>') || n.includes('function')) return r
    let l = n
    return (l = l.replace(t, 'function')), l + o
  },
  Iv = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
function cc(e) {
  if (!Lv(e)) return e
  let t = e,
    r = !1
  return (
    typeof Event < 'u' && e instanceof Event && ((t = R4(t)), (r = !0)),
    (t = Object.keys(t).reduce((n, o) => {
      try {
        t[o] && t[o].toJSON, (n[o] = t[o])
      } catch {
        r = !0
      }
      return n
    }, {})),
    r ? t : e
  )
}
var jv = function (t) {
    let r, n, o, l
    return function (u, s) {
      try {
        if (u === '') return (l = []), (r = new Map([[s, '[]']])), (n = new Map()), (o = []), s
        const c = n.get(this) || this
        for (; o.length && c !== o[0]; ) o.shift(), l.pop()
        if (typeof s == 'boolean') return s
        if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0
        if (s === null) return null
        if (typeof s == 'number')
          return s === -1 / 0 ? '_-Infinity_' : s === 1 / 0 ? '_Infinity_' : Number.isNaN(s) ? '_NaN_' : s
        if (typeof s == 'bigint') return `_bigint_${s.toString()}`
        if (typeof s == 'string') return Iv.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s
        if ((0, H4.default)(s)) return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0
        if ((0, N4.default)(s)) {
          if (!t.allowFunction) return
          const { name: g } = s,
            h = s.toString()
          return h.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)
            ? `_function_${g}|${(() => {}).toString()}`
            : `_function_${g}|${Bv($v(u, h))}`
        }
        if ((0, Z4.default)(s)) {
          if (!t.allowSymbol) return
          const g = Symbol.keyFor(s)
          return g !== void 0 ? `_gsymbol_${g}` : `_symbol_${s.toString().slice(7, -1)}`
        }
        if (o.length >= t.maxDepth) return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]'
        if (s === this) return `_duplicate_${JSON.stringify(l)}`
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? { cause: s.cause } : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              '_constructor-name_': s.constructor.name
            }
          }
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== 'Object' &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return
        const d = r.get(s)
        if (!d) {
          const g = Array.isArray(s) ? s : cc(s)
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(g, { '_constructor-name_': s.constructor.name })
            } catch {}
          return l.push(u), o.unshift(g), r.set(s, JSON.stringify(l)), s !== g && n.set(s, g), g
        }
        return `_duplicate_${d}`
      } catch {
        return
      }
    }
  },
  Hv = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0
  },
  Nv = (e, t = {}) => {
    const r = { ...Hv, ...t }
    return JSON.stringify(cc(e), jv(r), t.space)
  }
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 *//**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var dc = { exports: {} },
  ra,
  ci
function Zv() {
  return (
    ci ||
      ((ci = 1),
      (ra = {
        tocSelector: '.js-toc',
        contentSelector: '.js-toc-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '.js-toc-ignore',
        hasInnerContainers: !1,
        linkClass: 'toc-link',
        extraLinkClasses: '',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        extraListClasses: '',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        activeListItemClass: 'is-active-li',
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {},
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 'auto',
        includeHtml: !1,
        includeTitleTags: !1,
        onClick: function (e) {},
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: '',
        disableTocScrollSync: !1,
        tocScrollOffset: 0
      })),
    ra
  )
}
var na, di
function Pv() {
  return (
    di ||
      ((di = 1),
      (na = function (e) {
        var t = [].forEach,
          r = [].some,
          n = document.body,
          o,
          l = !0,
          i = ' '
        function u(b, x) {
          var y = x.appendChild(c(b))
          if (b.children.length) {
            var v = d(b.isCollapsed)
            b.children.forEach(function (A) {
              u(A, v)
            }),
              y.appendChild(v)
          }
        }
        function s(b, x) {
          var y = !1,
            v = d(y)
          if (
            (x.forEach(function (A) {
              u(A, v)
            }),
            (o = b || o),
            o !== null)
          )
            return o.firstChild && o.removeChild(o.firstChild), x.length === 0 ? o : o.appendChild(v)
        }
        function c(b) {
          var x = document.createElement('li'),
            y = document.createElement('a')
          return (
            e.listItemClass && x.setAttribute('class', e.listItemClass),
            e.onClick && (y.onclick = e.onClick),
            e.includeTitleTags && y.setAttribute('title', b.textContent),
            e.includeHtml && b.childNodes.length
              ? t.call(b.childNodes, function (v) {
                  y.appendChild(v.cloneNode(!0))
                })
              : (y.textContent = b.textContent),
            y.setAttribute('href', e.basePath + '#' + b.id),
            y.setAttribute('class', e.linkClass + i + 'node-name--' + b.nodeName + i + e.extraLinkClasses),
            x.appendChild(y),
            x
          )
        }
        function d(b) {
          var x = e.orderedList ? 'ol' : 'ul',
            y = document.createElement(x),
            v = e.listClass + i + e.extraListClasses
          return (
            b && ((v = v + i + e.collapsibleClass), (v = v + i + e.isCollapsedClass)), y.setAttribute('class', v), y
          )
        }
        function g() {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var b
            b = document.querySelector(e.scrollContainer).scrollTop
          } else b = document.documentElement.scrollTop || n.scrollTop
          var x = document.querySelector(e.positionFixedSelector)
          e.fixedSidebarOffset === 'auto' && (e.fixedSidebarOffset = o.offsetTop),
            b > e.fixedSidebarOffset
              ? x.className.indexOf(e.positionFixedClass) === -1 && (x.className += i + e.positionFixedClass)
              : (x.className = x.className.split(i + e.positionFixedClass).join(''))
        }
        function h(b) {
          var x = 0
          return b !== null && ((x = b.offsetTop), e.hasInnerContainers && (x += h(b.offsetParent))), x
        }
        function p(b) {
          if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
            var x
            x = document.querySelector(e.scrollContainer).scrollTop
          } else x = document.documentElement.scrollTop || n.scrollTop
          e.positionFixedSelector && g()
          var y = b,
            v
          if (l && o !== null && y.length > 0) {
            r.call(y, function (R, D) {
              if (h(R) > x + e.headingsOffset + 10) {
                var F = D === 0 ? D : D - 1
                return (v = y[F]), !0
              } else if (D === y.length - 1) return (v = y[y.length - 1]), !0
            })
            var A = o.querySelector('.' + e.activeLinkClass),
              w = o.querySelector(
                '.' +
                  e.linkClass +
                  '.node-name--' +
                  v.nodeName +
                  '[href="' +
                  e.basePath +
                  '#' +
                  v.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                  '"]'
              )
            if (A === w) return
            var k = o.querySelectorAll('.' + e.linkClass)
            t.call(k, function (R) {
              R.className = R.className.split(i + e.activeLinkClass).join('')
            })
            var S = o.querySelectorAll('.' + e.listItemClass)
            t.call(S, function (R) {
              R.className = R.className.split(i + e.activeListItemClass).join('')
            }),
              w && w.className.indexOf(e.activeLinkClass) === -1 && (w.className += i + e.activeLinkClass)
            var O = w && w.parentNode
            O && O.className.indexOf(e.activeListItemClass) === -1 && (O.className += i + e.activeListItemClass)
            var T = o.querySelectorAll('.' + e.listClass + '.' + e.collapsibleClass)
            t.call(T, function (R) {
              R.className.indexOf(e.isCollapsedClass) === -1 && (R.className += i + e.isCollapsedClass)
            }),
              w &&
                w.nextSibling &&
                w.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
                (w.nextSibling.className = w.nextSibling.className.split(i + e.isCollapsedClass).join('')),
              m(w && w.parentNode.parentNode)
          }
        }
        function m(b) {
          return b && b.className.indexOf(e.collapsibleClass) !== -1 && b.className.indexOf(e.isCollapsedClass) !== -1
            ? ((b.className = b.className.split(i + e.isCollapsedClass).join('')), m(b.parentNode.parentNode))
            : b
        }
        function f(b) {
          var x = b.target || b.srcElement
          typeof x.className != 'string' || x.className.indexOf(e.linkClass) === -1 || (l = !1)
        }
        function E() {
          l = !0
        }
        return { enableTocAnimation: E, disableTocAnimation: f, render: s, updateToc: p }
      })),
    na
  )
}
var aa, pi
function Vv() {
  return (
    pi ||
      ((pi = 1),
      (aa = function (t) {
        var r = [].reduce
        function n(d) {
          return d[d.length - 1]
        }
        function o(d) {
          return +d.nodeName.toUpperCase().replace('H', '')
        }
        function l(d) {
          try {
            return d instanceof window.HTMLElement || d instanceof window.parent.HTMLElement
          } catch {
            return d instanceof window.HTMLElement
          }
        }
        function i(d) {
          if (!l(d)) return d
          if (t.ignoreHiddenElements && (!d.offsetHeight || !d.offsetParent)) return null
          const g =
            d.getAttribute('data-heading-label') ||
            (t.headingLabelCallback ? String(t.headingLabelCallback(d.textContent)) : d.textContent.trim())
          var h = { id: d.id, children: [], nodeName: d.nodeName, headingLevel: o(d), textContent: g }
          return (
            t.includeHtml && (h.childNodes = d.childNodes), t.headingObjectCallback ? t.headingObjectCallback(h, d) : h
          )
        }
        function u(d, g) {
          for (
            var h = i(d), p = h.headingLevel, m = g, f = n(m), E = f ? f.headingLevel : 0, b = p - E;
            b > 0 && ((f = n(m)), !(f && p === f.headingLevel));

          )
            f && f.children !== void 0 && (m = f.children), b--
          return p >= t.collapseDepth && (h.isCollapsed = !0), m.push(h), m
        }
        function s(d, g) {
          var h = g
          t.ignoreSelector &&
            (h = g.split(',').map(function (m) {
              return m.trim() + ':not(' + t.ignoreSelector + ')'
            }))
          try {
            return d.querySelectorAll(h)
          } catch {
            return console.warn('Headers not found with selector: ' + h), null
          }
        }
        function c(d) {
          return r.call(
            d,
            function (h, p) {
              var m = i(p)
              return m && u(m, h.nest), h
            },
            { nest: [] }
          )
        }
        return { nestHeadingsArray: c, selectHeadings: s }
      })),
    aa
  )
}
var oa, fi
function qv() {
  return (
    fi ||
      ((fi = 1),
      (oa = function (t) {
        var r = t.tocElement || document.querySelector(t.tocSelector)
        if (r && r.scrollHeight > r.clientHeight) {
          var n = r.querySelector('.' + t.activeListItemClass)
          n && (r.scrollTop = n.offsetTop - t.tocScrollOffset)
        }
      })),
    oa
  )
}
var la = {},
  mi
function zv() {
  if (mi) return la
  ;(mi = 1), (la.initSmoothScrolling = e)
  function e(r) {
    var n = r.duration,
      o = r.offset,
      l = location.hash ? s(location.href) : location.href
    i()
    function i() {
      document.body.addEventListener('click', d, !1)
      function d(g) {
        !u(g.target) ||
          g.target.className.indexOf('no-smooth-scroll') > -1 ||
          (g.target.href.charAt(g.target.href.length - 2) === '#' &&
            g.target.href.charAt(g.target.href.length - 1) === '!') ||
          g.target.className.indexOf(r.linkClass) === -1 ||
          t(g.target.hash, {
            duration: n,
            offset: o,
            callback: function () {
              c(g.target.hash)
            }
          })
      }
    }
    function u(d) {
      return (
        d.tagName.toLowerCase() === 'a' &&
        (d.hash.length > 0 || d.href.charAt(d.href.length - 1) === '#') &&
        (s(d.href) === l || s(d.href) + '#' === l)
      )
    }
    function s(d) {
      return d.slice(0, d.lastIndexOf('#'))
    }
    function c(d) {
      var g = document.getElementById(d.substring(1))
      g && (/^(?:a|select|input|button|textarea)$/i.test(g.tagName) || (g.tabIndex = -1), g.focus())
    }
  }
  function t(r, n) {
    var o = window.pageYOffset,
      l = { duration: n.duration, offset: n.offset || 0, callback: n.callback, easing: n.easing || p },
      i =
        document.querySelector('[id="' + decodeURI(r).split('#').join('') + '"]') ||
        document.querySelector('[id="' + r.split('#').join('') + '"]'),
      u =
        typeof r == 'string'
          ? l.offset +
            (r
              ? (i && i.getBoundingClientRect().top) || 0
              : -(document.documentElement.scrollTop || document.body.scrollTop))
          : r,
      s = typeof l.duration == 'function' ? l.duration(u) : l.duration,
      c,
      d
    requestAnimationFrame(function (m) {
      ;(c = m), g(m)
    })
    function g(m) {
      ;(d = m - c), window.scrollTo(0, l.easing(d, o, u, s)), d < s ? requestAnimationFrame(g) : h()
    }
    function h() {
      window.scrollTo(0, o + u), typeof l.callback == 'function' && l.callback()
    }
    function p(m, f, E, b) {
      return (m /= b / 2), m < 1 ? (E / 2) * m * m + f : (m--, (-E / 2) * (m * (m - 2) - 1) + f)
    }
  }
  return la
}
;(function (e, t) {
  ;(function (r, n) {
    e.exports = n(r)
  })(typeof Bn < 'u' ? Bn : window || Bn, function (r) {
    var n = Zv(),
      o = {},
      l = {},
      i = Pv(),
      u = Vv(),
      s = qv(),
      c,
      d,
      g = !!r && !!r.document && !!r.document.querySelector && !!r.addEventListener
    if (typeof window > 'u' && !g) return
    var h,
      p = Object.prototype.hasOwnProperty
    function m() {
      for (var x = {}, y = 0; y < arguments.length; y++) {
        var v = arguments[y]
        for (var A in v) p.call(v, A) && (x[A] = v[A])
      }
      return x
    }
    function f(x, y, v) {
      y || (y = 250)
      var A, w
      return function () {
        var k = v || this,
          S = +new Date(),
          O = arguments
        A && S < A + y
          ? (clearTimeout(w),
            (w = setTimeout(function () {
              ;(A = S), x.apply(k, O)
            }, y)))
          : ((A = S), x.apply(k, O))
      }
    }
    function E(x) {
      try {
        return x.contentElement || document.querySelector(x.contentSelector)
      } catch {
        return console.warn('Contents element not found: ' + x.contentSelector), null
      }
    }
    function b(x) {
      try {
        return x.tocElement || document.querySelector(x.tocSelector)
      } catch {
        return console.warn('TOC element not found: ' + x.tocSelector), null
      }
    }
    return (
      (l.destroy = function () {
        var x = b(o)
        x !== null &&
          (o.skipRendering || (x && (x.innerHTML = '')),
          o.scrollContainer && document.querySelector(o.scrollContainer)
            ? (document.querySelector(o.scrollContainer).removeEventListener('scroll', this._scrollListener, !1),
              document.querySelector(o.scrollContainer).removeEventListener('resize', this._scrollListener, !1),
              c && document.querySelector(o.scrollContainer).removeEventListener('click', this._clickListener, !1))
            : (document.removeEventListener('scroll', this._scrollListener, !1),
              document.removeEventListener('resize', this._scrollListener, !1),
              c && document.removeEventListener('click', this._clickListener, !1)))
      }),
      (l.init = function (x) {
        if (g) {
          ;(o = m(n, x || {})),
            (this.options = o),
            (this.state = {}),
            o.scrollSmooth &&
              ((o.duration = o.scrollSmoothDuration),
              (o.offset = o.scrollSmoothOffset),
              (l.scrollSmooth = zv().initSmoothScrolling(o))),
            (c = i(o)),
            (d = u(o)),
            (this._buildHtml = c),
            (this._parseContent = d),
            (this._headingsArray = h),
            l.destroy()
          var y = E(o)
          if (y !== null) {
            var v = b(o)
            if (v !== null && ((h = d.selectHeadings(y, o.headingSelector)), h !== null)) {
              var A = d.nestHeadingsArray(h),
                w = A.nest
              o.skipRendering || c.render(v, w),
                (this._scrollListener = f(function (S) {
                  c.updateToc(h), !o.disableTocScrollSync && s(o)
                  var O = S && S.target && S.target.scrollingElement && S.target.scrollingElement.scrollTop === 0
                  ;((S && (S.eventPhase === 0 || S.currentTarget === null)) || O) &&
                    (c.updateToc(h), o.scrollEndCallback && o.scrollEndCallback(S))
                }, o.throttleTimeout)),
                this._scrollListener(),
                o.scrollContainer && document.querySelector(o.scrollContainer)
                  ? (document.querySelector(o.scrollContainer).addEventListener('scroll', this._scrollListener, !1),
                    document.querySelector(o.scrollContainer).addEventListener('resize', this._scrollListener, !1))
                  : (document.addEventListener('scroll', this._scrollListener, !1),
                    document.addEventListener('resize', this._scrollListener, !1))
              var k = null
              return (
                (this._clickListener = f(function (S) {
                  o.scrollSmooth && c.disableTocAnimation(S),
                    c.updateToc(h),
                    k && clearTimeout(k),
                    (k = setTimeout(function () {
                      c.enableTocAnimation()
                    }, o.scrollSmoothDuration))
                }, o.throttleTimeout)),
                o.scrollContainer && document.querySelector(o.scrollContainer)
                  ? document.querySelector(o.scrollContainer).addEventListener('click', this._clickListener, !1)
                  : document.addEventListener('click', this._clickListener, !1),
                this
              )
            }
          }
        }
      }),
      (l.refresh = function (x) {
        l.destroy(), l.init(x || this.options)
      }),
      (r.tocbot = l),
      l
    )
  })
})(dc)
var gi = dc.exports
const { global: De } = __STORYBOOK_MODULE_GLOBAL__,
  { deprecate: de, once: Uv, logger: Mo } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  { filterArgTypes: pc, composeConfigs: yx, Preview: bx, DocsContext: vx } = __STORYBOOK_MODULE_PREVIEW_API__,
  {
    STORY_ARGS_UPDATED: hi,
    UPDATE_STORY_ARGS: Wv,
    RESET_STORY_ARGS: Gv,
    GLOBALS_UPDATED: yi,
    NAVIGATE_URL: Yv
  } = __STORYBOOK_MODULE_CORE_EVENTS__
__STORYBOOK_MODULE_CHANNELS__
var Kv = _.div(te, ({ theme: e }) => ({
    backgroundColor: e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '25px 0 40px',
    color: ee(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2
  })),
  fc = e => a.createElement(Kv, { ...e, className: 'docblock-emptyblock sb-unstyled' }),
  Jv = _(En)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow: e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' }
  })),
  Xv = _.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow: e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    margin: '25px 0 40px',
    padding: '20px 20px 20px 22px'
  })),
  Nr = _.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: '60%',
    [`&:first-child${ga}`]: { margin: 0 }
  })),
  Qv = () =>
    a.createElement(
      Xv,
      null,
      a.createElement(Nr, null),
      a.createElement(Nr, { style: { width: '80%' } }),
      a.createElement(Nr, { style: { width: '30%' } }),
      a.createElement(Nr, { style: { width: '80%' } })
    ),
  Bo = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: l, ...i }) => {
    if (e) return a.createElement(Qv, null)
    if (t) return a.createElement(fc, null, t)
    let u = a.createElement(
      Jv,
      { bordered: !0, copyable: !0, format: l, language: r, className: 'docblock-source sb-unstyled', ...i },
      n
    )
    if (typeof o > 'u') return u
    let s = o ? ca.dark : ca.light
    return a.createElement(ns, { theme: ma(s) }, u)
  }
Bo.defaultProps = { format: !1 }
var oe = e => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
  $o = 600,
  e6 = _.h1(te, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: '32px',
    [`@media (min-width: ${$o}px)`]: { fontSize: e.typography.size.l1, lineHeight: '36px', marginBottom: '16px' }
  })),
  t6 = _.h2(te, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: '20px',
    borderBottom: 'none',
    marginBottom: 15,
    [`@media (min-width: ${$o}px)`]: { fontSize: e.typography.size.m1, lineHeight: '28px', marginBottom: 24 },
    color: ee(0.25, e.color.defaultText)
  })),
  r6 = _.div(({ theme: e }) => {
    let t = {
        fontFamily: e.typography.fonts.base,
        fontSize: e.typography.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch'
      },
      r = {
        margin: '20px 0 8px',
        padding: 0,
        cursor: 'text',
        position: 'relative',
        color: e.color.defaultText,
        '&:first-of-type': { marginTop: 0, paddingTop: 0 },
        '&:hover a.anchor': { textDecoration: 'none' },
        '& code': { fontSize: 'inherit' }
      },
      n = {
        lineHeight: 1,
        margin: '0 2px',
        padding: '3px 5px',
        whiteSpace: 'nowrap',
        borderRadius: 3,
        fontSize: e.typography.size.s2 - 1,
        border: e.base === 'light' ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
        color: e.base === 'light' ? ee(0.1, e.color.defaultText) : ee(0.3, e.color.defaultText),
        backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border
      }
    return {
      maxWidth: 1e3,
      width: '100%',
      [oe('a')]: {
        ...t,
        fontSize: 'inherit',
        lineHeight: '24px',
        color: e.color.secondary,
        textDecoration: 'none',
        '&.absent': { color: '#cc0000' },
        '&.anchor': {
          display: 'block',
          paddingLeft: 30,
          marginLeft: -30,
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0
        }
      },
      [oe('blockquote')]: {
        ...t,
        margin: '16px 0',
        borderLeft: `4px solid ${e.color.medium}`,
        padding: '0 15px',
        color: e.color.dark,
        '& > :first-of-type': { marginTop: 0 },
        '& > :last-child': { marginBottom: 0 }
      },
      [oe('div')]: t,
      [oe('dl')]: {
        ...t,
        margin: '16px 0',
        padding: 0,
        '& dt': { fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic', padding: 0, margin: '16px 0 4px' },
        '& dt:first-of-type': { padding: 0 },
        '& dt > :first-of-type': { marginTop: 0 },
        '& dt > :last-child': { marginBottom: 0 },
        '& dd': { margin: '0 0 16px', padding: '0 15px' },
        '& dd > :first-of-type': { marginTop: 0 },
        '& dd > :last-child': { marginBottom: 0 }
      },
      [oe('h1')]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold },
      [oe('h2')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`
      },
      [oe('h3')]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold },
      [oe('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [oe('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [oe('h6')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
      [oe('hr')]: { border: '0 none', borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 },
      [oe('img')]: { maxWidth: '100%' },
      [oe('li')]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: '24px',
        '& + li': { marginTop: '.25em' },
        '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
        '& code': n
      },
      [oe('ol')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 }
      },
      [oe('p')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        color: e.color.defaultText,
        '& code': n
      },
      [oe('pre')]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
        '&:not(.prismjs)': { background: 'transparent', border: 'none', borderRadius: 0, padding: 0, margin: 0 },
        '& pre, &.prismjs': {
          padding: 15,
          margin: 0,
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          fontSize: '13px',
          lineHeight: '19px',
          code: { color: 'inherit', fontSize: 'inherit' }
        },
        '& code': { whiteSpace: 'pre' },
        '& code, & tt': { border: 'none' }
      },
      [oe('span')]: {
        ...t,
        '&.frame': {
          display: 'block',
          overflow: 'hidden',
          '& > span': {
            border: `1px solid ${e.color.medium}`,
            display: 'block',
            float: 'left',
            overflow: 'hidden',
            margin: '13px 0 0',
            padding: 7,
            width: 'auto'
          },
          '& span img': { display: 'block', float: 'left' },
          '& span span': { clear: 'both', color: e.color.darkest, display: 'block', padding: '5px 0 0' }
        },
        '&.align-center': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'center' },
          '& span img': { margin: '0 auto', textAlign: 'center' }
        },
        '&.align-right': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': { display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right' },
          '& span img': { margin: 0, textAlign: 'right' }
        },
        '&.float-left': {
          display: 'block',
          marginRight: 13,
          overflow: 'hidden',
          float: 'left',
          '& span': { margin: '13px 0 0' }
        },
        '&.float-right': {
          display: 'block',
          marginLeft: 13,
          overflow: 'hidden',
          float: 'right',
          '& > span': { display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'right' }
        }
      },
      [oe('table')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        padding: 0,
        borderCollapse: 'collapse',
        '& tr': { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 },
        '& tr:nth-of-type(2n)': { backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter },
        '& tr th': {
          fontWeight: 'bold',
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: '6px 13px'
        },
        '& tr td': {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: '6px 13px'
        },
        '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
        '& tr th :last-child, & tr td :last-child': { marginBottom: 0 }
      },
      [oe('ul')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
        listStyle: 'disc'
      }
    }
  }),
  n6 = _.div(({ theme: e }) => ({
    background: e.background.content,
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    gap: '3rem',
    [`@media (min-width: ${$o}px)`]: {}
  })),
  a6 = ({ children: e, toc: t }) =>
    a.createElement(
      n6,
      { className: 'sbdocs sbdocs-wrapper' },
      a.createElement(r6, { className: 'sbdocs sbdocs-content' }, e),
      t
    ),
  Fn = e => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow: e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${e.appBorderColor}`
  }),
  o6 = ({ zoom: e, resetZoom: t }) =>
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        Rt,
        {
          key: 'zoomin',
          onClick: r => {
            r.preventDefault(), e(0.8)
          },
          title: 'Zoom in'
        },
        a.createElement(be, { icon: 'zoom' })
      ),
      a.createElement(
        Rt,
        {
          key: 'zoomout',
          onClick: r => {
            r.preventDefault(), e(1.25)
          },
          title: 'Zoom out'
        },
        a.createElement(be, { icon: 'zoomout' })
      ),
      a.createElement(
        Rt,
        {
          key: 'zoomreset',
          onClick: r => {
            r.preventDefault(), t()
          },
          title: 'Reset zoom'
        },
        a.createElement(be, { icon: 'zoomreset' })
      )
    ),
  l6 = _(wn)({ position: 'absolute', left: 0, right: 0, top: 0, transition: 'transform .2s linear' }),
  i6 = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...l }) =>
    a.createElement(
      l6,
      { ...l },
      a.createElement(
        C.Fragment,
        { key: 'left' },
        e ? [1, 2, 3].map(i => a.createElement(Eu, { key: i })) : a.createElement(o6, { zoom: n, resetZoom: o })
      )
    ),
  mc = C.createContext({ scale: 1 }),
  { window: s6 } = De,
  u6 = class extends C.Component {
    constructor() {
      super(...arguments), (this.iframe = null)
    }
    componentDidMount() {
      let { id: e } = this.props
      this.iframe = s6.document.getElementById(e)
    }
    shouldComponentUpdate(e) {
      let { scale: t } = e
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: 'top left'
          }),
        !1
      )
    }
    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e)
    }
    render() {
      let { id: e, title: t, src: r, allowFullScreen: n, scale: o, ...l } = this.props
      return a.createElement('iframe', {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: 'fullscreen' } : {}),
        loading: 'lazy',
        ...l
      })
    }
  },
  { PREVIEW_URL: c6 } = De,
  d6 = c6 || 'iframe.html',
  Ta = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
  p6 = e => {
    let t = C.useRef(),
      [r, n] = C.useState(!0),
      [o, l] = C.useState(),
      { story: i, height: u, autoplay: s, forceInitialArgs: c, renderStoryToElement: d } = e
    return (
      C.useEffect(() => {
        if (!(i && t.current)) return () => {}
        let g = t.current,
          h = d(
            i,
            g,
            {
              showMain: () => {},
              showError: ({ title: p, description: m }) => l(new Error(`${p} - ${m}`)),
              showException: p => l(p)
            },
            { autoplay: s, forceInitialArgs: c }
          )
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => h())
          }
        )
      }, [s, d, i]),
      o
        ? a.createElement('pre', null, a.createElement(pu, { error: o }))
        : a.createElement(
            a.Fragment,
            null,
            u
              ? a.createElement(
                  'style',
                  null,
                  `#${Ta(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && a.createElement(Io, null),
            a.createElement('div', { ref: t, id: `${Ta(e)}-inner`, 'data-name': i.name })
          )
    )
  },
  f6 = ({ story: e, height: t = '500px' }) =>
    a.createElement(
      'div',
      { style: { width: '100%', height: t } },
      a.createElement(mc.Consumer, null, ({ scale: r }) =>
        a.createElement(u6, {
          key: 'iframe',
          id: `iframe--${e.id}`,
          title: e.name,
          src: Cu(d6, e.id, { viewMode: 'story' }),
          allowFullScreen: !0,
          scale: r,
          style: { width: '100%', height: '100%', border: '0 none' }
        })
      )
    ),
  m6 = e => {
    let { inline: t } = e
    return a.createElement(
      'div',
      { id: Ta(e), className: 'sb-story sb-unstyled', 'data-story-block': 'true' },
      t ? a.createElement(p6, { ...e }) : a.createElement(f6, { ...e })
    )
  },
  Io = () => a.createElement(wu, null),
  g6 = _.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      display: e || !t ? 'block' : 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      overflow: 'auto',
      flexDirection: e ? 'column' : 'row',
      '& .innerZoomElementWrapper > *': e
        ? { width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%', display: 'block' }
        : { maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%', display: 'inline-block' }
    }),
    ({ layout: e = 'padded' }) =>
      e === 'centered' || e === 'padded'
        ? {
            padding: '30px 20px',
            margin: -10,
            '& .innerZoomElementWrapper > *': { width: 'auto', border: '10px solid transparent!important' }
          }
        : {},
    ({ layout: e = 'padded' }) =>
      e === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }
        : {},
    ({ columns: e }) => (e && e > 1 ? { '.innerZoomElementWrapper > *': { minWidth: `calc(100% / ${e} - 20px)` } } : {})
  ),
  bi = _(Bo)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: 'none',
    background: e.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : Ye(0.05, e.background.content),
    color: e.color.lightest,
    button: { background: e.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : Ye(0.05, e.background.content) }
  })),
  h6 = _.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: 'relative',
      overflow: 'hidden',
      margin: '25px 0 40px',
      ...Fn(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      'h3 + &': { marginTop: '16px' }
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  ),
  y6 = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: () => r(!1)
          }
        }
      case t:
        return {
          source: a.createElement(bi, { ...e, dark: !0 }),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: () => r(!1)
          }
        }
      default:
        return {
          source: a.createElement(bi, { ...e, dark: !0 }),
          actionItem: { title: 'Show code', className: 'docblock-code-toggle', onClick: () => r(!0) }
        }
    }
  }
function b6(e) {
  if (C.Children.count(e) === 1) {
    let t = e
    if (t.props) return t.props.id
  }
  return null
}
var v6 = _(i6)({ position: 'absolute', top: 0, left: 0, right: 0, height: 40 }),
  E6 = _.div({ overflow: 'hidden', position: 'relative' }),
  Ra = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: o,
    withToolbar: l = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: c = 'padded',
    ...d
  }) => {
    let [g, h] = C.useState(i),
      { source: p, actionItem: m } = y6(o, g, h),
      [f, E] = C.useState(1),
      b = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
      x = o ? [m] : [],
      [y, v] = C.useState(u ? [...u] : []),
      A = [...x, ...y],
      { window: w } = De,
      k = C.useCallback(async O => {
        let { createCopyToClipboardFunction: T } = await ut(
          () => Promise.resolve().then(() => Dm),
          void 0,
          import.meta.url
        )
        T()
      }, []),
      S = O => {
        let T = w.getSelection()
        ;(T && T.type === 'Range') ||
          (O.preventDefault(),
          y.filter(R => R.title === 'Copied').length === 0 &&
            k(p.props.code).then(() => {
              v([...y, { title: 'Copied', onClick: () => {} }]),
                w.setTimeout(() => v(y.filter(R => R.title !== 'Copied')), 1500)
            }))
      }
    return a.createElement(
      h6,
      { withSource: o, withToolbar: l, ...d, className: b.join(' ') },
      l &&
        a.createElement(v6, {
          isLoading: e,
          border: !0,
          zoom: O => E(f * O),
          resetZoom: () => E(1),
          storyId: b6(n),
          baseUrl: './iframe.html'
        }),
      a.createElement(
        mc.Provider,
        { value: { scale: f } },
        a.createElement(
          E6,
          { className: 'docs-story', onCopyCapture: o && S },
          a.createElement(
            g6,
            { isColumn: t || !Array.isArray(n), columns: r, layout: c },
            a.createElement(
              du.Element,
              { scale: f },
              Array.isArray(n)
                ? n.map((O, T) => a.createElement('div', { key: T }, O))
                : a.createElement('div', null, n)
            )
          ),
          a.createElement(to, { actionItems: A })
        )
      ),
      o && g && p
    )
  },
  x6 = _(Ra)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } })),
  A6 = () => a.createElement(x6, { isLoading: !0, withToolbar: !0 }, a.createElement(Io, null)),
  w6 = _.table(({ theme: e }) => ({
    '&&': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 'none',
      tr: { border: 'none !important', background: 'none' },
      'td, th': { padding: 0, border: 'none', width: 'auto!important' },
      marginTop: 0,
      marginBottom: 0,
      'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
      'th:last-of-type, td:last-of-type': { paddingRight: 0 },
      td: { paddingTop: 0, paddingBottom: 4, '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 } },
      tbody: { boxShadow: 'none', border: 'none' },
      code: dt({ theme: e }),
      div: { span: { fontWeight: 'bold' } },
      '& code': { margin: 0, display: 'inline-block', fontSize: e.typography.size.s1 }
    }
  })),
  C6 = ({ tags: e }) => {
    let t = (e.params || []).filter(l => l.description),
      r = t.length !== 0,
      n = e.deprecated != null,
      o = e.returns != null && e.returns.description != null
    return !r && !o && !n
      ? null
      : a.createElement(
          a.Fragment,
          null,
          a.createElement(
            w6,
            null,
            a.createElement(
              'tbody',
              null,
              n &&
                a.createElement(
                  'tr',
                  { key: 'deprecated' },
                  a.createElement(
                    'td',
                    { colSpan: 2 },
                    a.createElement('strong', null, 'Deprecated'),
                    ': ',
                    e.deprecated
                  )
                ),
              r &&
                t.map(l =>
                  a.createElement(
                    'tr',
                    { key: l.name },
                    a.createElement('td', null, a.createElement('code', null, l.name)),
                    a.createElement('td', null, l.description)
                  )
                ),
              o &&
                a.createElement(
                  'tr',
                  { key: 'returns' },
                  a.createElement('td', null, a.createElement('code', null, 'Returns')),
                  a.createElement('td', null, e.returns.description)
                )
            )
          )
        )
  },
  Fa = 8,
  Ei = _.div(({ isExpanded: e }) => ({
    display: 'flex',
    flexDirection: e ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100
  })),
  S6 = _.span(dt, ({ theme: e, simple: t = !1 }) => ({
    flex: '0 0 auto',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 })
  })),
  k6 = _.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: '4px',
    background: 'none',
    border: 'none'
  })),
  _6 = _.div(dt, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center'
  })),
  O6 = _.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: 'content-box',
    '& code': { padding: '0 !important' }
  })),
  T6 = _(be)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  R6 = () => a.createElement('span', null, '-'),
  gc = ({ text: e, simple: t }) => a.createElement(S6, { simple: t }, e),
  F6 = Dt(1e3)(e => {
    let t = e.split(/\r?\n/)
    return `${Math.max(...t.map(r => r.length))}ch`
  }),
  D6 = e => {
    if (!e) return [e]
    let t = e.split('|').map(r => r.trim())
    return Iy(t)
  },
  xi = (e, t = !0) => {
    let r = e
    return t || (r = e.slice(0, Fa)), r.map(n => a.createElement(gc, { key: n, text: n === '' ? '""' : n }))
  },
  L6 = ({ value: e, initialExpandedArgs: t }) => {
    let { summary: r, detail: n } = e,
      [o, l] = C.useState(!1),
      [i, u] = C.useState(t || !1)
    if (r == null) return null
    let s = typeof r.toString == 'function' ? r.toString() : r
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return a.createElement(gc, { text: s })
      let c = D6(s),
        d = c.length
      return d > Fa
        ? a.createElement(
            Ei,
            { isExpanded: i },
            xi(c, i),
            a.createElement(k6, { onClick: () => u(!i) }, i ? 'Show less...' : `Show ${d - Fa} more...`)
          )
        : a.createElement(Ei, null, xi(c))
    }
    return a.createElement(
      yu,
      {
        closeOnOutsideClick: !0,
        placement: 'bottom',
        visible: o,
        onVisibleChange: c => {
          l(c)
        },
        tooltip: a.createElement(O6, { width: F6(n) }, a.createElement(En, { language: 'jsx', format: !1 }, n))
      },
      a.createElement(
        _6,
        { className: 'sbdocs-expandable' },
        a.createElement('span', null, s),
        a.createElement(T6, { icon: o ? 'arrowup' : 'arrowdown' })
      )
    )
  },
  ia = ({ value: e, initialExpandedArgs: t }) =>
    e == null ? a.createElement(R6, null) : a.createElement(L6, { value: e, initialExpandedArgs: t }),
  M6 = _.label(({ theme: e }) => ({
    lineHeight: '18px',
    alignItems: 'center',
    marginBottom: 8,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    background: e.boolean.background,
    borderRadius: '3em',
    padding: 1,
    input: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '3em',
      '&:focus': { outline: 'none', boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` }
    },
    span: {
      textAlign: 'center',
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: '1',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '7px 15px',
      transition: 'all 100ms ease-out',
      userSelect: 'none',
      borderRadius: '3em',
      color: ee(0.5, e.color.defaultText),
      background: 'transparent',
      '&:hover': { boxShadow: `${Hr(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      '&:active': { boxShadow: `${Hr(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Hr(1, e.appBorderColor) },
      '&:first-of-type': { paddingRight: 8 },
      '&:last-of-type': { paddingLeft: 8 }
    },
    'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type': {
      background: e.boolean.selectedBackground,
      boxShadow: e.base === 'light' ? `${Hr(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`,
      color: e.color.defaultText,
      padding: '7px 15px'
    }
  })),
  B6 = e => e === 'true',
  $6 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o }) => {
    let l = C.useCallback(() => r(!1), [r])
    if (t === void 0) return a.createElement(He.Button, { id: cn(e), onClick: l }, 'Set boolean')
    let i = Ne(e),
      u = typeof t == 'string' ? B6(t) : t
    return a.createElement(
      M6,
      { htmlFor: i, title: u ? 'Change to false' : 'Change to true' },
      a.createElement('input', {
        id: i,
        type: 'checkbox',
        onChange: s => r(s.target.checked),
        checked: u,
        name: e,
        onBlur: n,
        onFocus: o
      }),
      a.createElement('span', null, 'False'),
      a.createElement('span', null, 'True')
    )
  },
  I6 = e => {
    let [t, r, n] = e.split('-'),
      o = new Date()
    return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o
  },
  j6 = e => {
    let [t, r] = e.split(':'),
      n = new Date()
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
  },
  H6 = e => {
    let t = new Date(e),
      r = `000${t.getFullYear()}`.slice(-4),
      n = `0${t.getMonth() + 1}`.slice(-2),
      o = `0${t.getDate()}`.slice(-2)
    return `${r}-${n}-${o}`
  },
  N6 = e => {
    let t = new Date(e),
      r = `0${t.getHours()}`.slice(-2),
      n = `0${t.getMinutes()}`.slice(-2)
    return `${r}:${n}`
  },
  Z6 = _.div(({ theme: e }) => ({
    flex: 1,
    display: 'flex',
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0.5,
        height: 12,
        filter: e.base === 'light' ? void 0 : 'invert(1)'
      }
    },
    'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
    'input:last-of-type': { flexGrow: 3 }
  })),
  P6 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o }) => {
    let [l, i] = C.useState(!0),
      u = C.useRef(),
      s = C.useRef()
    C.useEffect(() => {
      l !== !1 && (u && u.current && (u.current.value = H6(t)), s && s.current && (s.current.value = N6(t)))
    }, [t])
    let c = h => {
        let p = I6(h.target.value),
          m = new Date(t)
        m.setFullYear(p.getFullYear(), p.getMonth(), p.getDate())
        let f = m.getTime()
        f && r(f), i(!!f)
      },
      d = h => {
        let p = j6(h.target.value),
          m = new Date(t)
        m.setHours(p.getHours()), m.setMinutes(p.getMinutes())
        let f = m.getTime()
        f && r(f), i(!!f)
      },
      g = Ne(e)
    return a.createElement(
      Z6,
      null,
      a.createElement(He.Input, {
        type: 'date',
        max: '9999-12-31',
        ref: u,
        id: `${g}-date`,
        name: `${g}-date`,
        onChange: c,
        onFocus: n,
        onBlur: o
      }),
      a.createElement(He.Input, {
        type: 'time',
        id: `${g}-time`,
        name: `${g}-time`,
        ref: s,
        onChange: d,
        onFocus: n,
        onBlur: o
      }),
      l ? null : a.createElement('div', null, 'invalid')
    )
  },
  V6 = _.label({ display: 'flex' }),
  q6 = e => {
    let t = parseFloat(e)
    return Number.isNaN(t) ? void 0 : t
  },
  z6 = ({ name: e, value: t, onChange: r, min: n, max: o, step: l, onBlur: i, onFocus: u }) => {
    let [s, c] = C.useState(typeof t == 'number' ? t : ''),
      [d, g] = C.useState(!1),
      [h, p] = C.useState(null),
      m = C.useCallback(
        b => {
          c(b.target.value)
          let x = parseFloat(b.target.value)
          Number.isNaN(x) ? p(new Error(`'${b.target.value}' is not a number`)) : (r(x), p(null))
        },
        [r, p]
      ),
      f = C.useCallback(() => {
        c('0'), r(0), g(!0)
      }, [g]),
      E = C.useRef(null)
    return (
      C.useEffect(() => {
        d && E.current && E.current.select()
      }, [d]),
      C.useEffect(() => {
        s !== (typeof t == 'number' ? t : '') && c(t)
      }, [t]),
      !d && t === void 0
        ? a.createElement(He.Button, { id: cn(e), onClick: f }, 'Set number')
        : a.createElement(
            V6,
            null,
            a.createElement(He.Input, {
              ref: E,
              id: Ne(e),
              type: 'number',
              onChange: m,
              size: 'flex',
              placeholder: 'Edit number...',
              value: s,
              valid: h ? 'error' : null,
              autoFocus: d,
              name: e,
              min: n,
              max: o,
              step: l,
              onFocus: u,
              onBlur: i
            })
          )
    )
  },
  hc = (e, t) => {
    let r = t && Object.entries(t).find(([n, o]) => o === e)
    return r ? r[0] : void 0
  },
  Da = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter(r => e.includes(r[1]))
          .map(r => r[0])
      : [],
  yc = (e, t) => e && t && e.map(r => t[r]),
  U6 = _.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 }
        }
      : { label: { display: 'flex' } }
  ),
  W6 = _.span({}),
  G6 = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 }
  }),
  Ai = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
    if (!t) return Mo.warn(`Checkbox with no options: ${e}`), a.createElement(a.Fragment, null, '-')
    let l = Da(r, t),
      [i, u] = C.useState(l),
      s = d => {
        let g = d.target.value,
          h = [...i]
        h.includes(g) ? h.splice(h.indexOf(g), 1) : h.push(g), n(yc(h, t)), u(h)
      }
    C.useEffect(() => {
      u(Da(r, t))
    }, [r])
    let c = Ne(e)
    return a.createElement(
      U6,
      { isInline: o },
      Object.keys(t).map((d, g) => {
        let h = `${c}-${g}`
        return a.createElement(
          G6,
          { key: h, htmlFor: h },
          a.createElement('input', {
            type: 'checkbox',
            id: h,
            name: h,
            value: d,
            onChange: s,
            checked: i == null ? void 0 : i.includes(d)
          }),
          a.createElement(W6, null, d)
        )
      })
    )
  },
  Y6 = _.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 }
        }
      : { label: { display: 'flex' } }
  ),
  K6 = _.span({}),
  J6 = _.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 }
  }),
  wi = ({ name: e, options: t, value: r, onChange: n, isInline: o }) => {
    if (!t) return Mo.warn(`Radio with no options: ${e}`), a.createElement(a.Fragment, null, '-')
    let l = hc(r, t),
      i = Ne(e)
    return a.createElement(
      Y6,
      { isInline: o },
      Object.keys(t).map((u, s) => {
        let c = `${i}-${s}`
        return a.createElement(
          J6,
          { key: c, htmlFor: c },
          a.createElement('input', {
            type: 'radio',
            id: c,
            name: c,
            value: u,
            onChange: d => n(t[d.currentTarget.value]),
            checked: u === l
          }),
          a.createElement(K6, null, u)
        )
      })
    )
  },
  X6 = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative'
  },
  bc = _.select(({ theme: e }) => ({
    ...X6,
    boxSizing: 'border-box',
    position: 'relative',
    padding: '6px 10px',
    width: '100%',
    color: e.input.color || 'inherit',
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    '&:focus': { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: 'none' },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '::placeholder': { color: e.textMutedColor },
    '&[multiple]': {
      overflow: 'auto',
      padding: 0,
      option: { display: 'block', padding: '6px 10px', marginLeft: 1, marginRight: 1 }
    }
  })),
  vc = _.span(({ theme: e }) => ({
    display: 'inline-block',
    lineHeight: 'normal',
    overflow: 'hidden',
    position: 'relative',
    verticalAlign: 'top',
    width: '100%',
    svg: {
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      height: '12px',
      marginTop: '-6px',
      right: '12px',
      top: '50%',
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor }
    }
  })),
  Ci = 'Choose option...',
  Q6 = ({ name: e, value: t, options: r, onChange: n }) => {
    let o = u => {
        n(r[u.currentTarget.value])
      },
      l = hc(t, r) || Ci,
      i = Ne(e)
    return a.createElement(
      vc,
      null,
      a.createElement(be, { icon: 'arrowdown' }),
      a.createElement(
        bc,
        { id: i, value: l, onChange: o },
        a.createElement('option', { key: 'no-selection', disabled: !0 }, Ci),
        Object.keys(r).map(u => a.createElement('option', { key: u }, u))
      )
    )
  },
  eE = ({ name: e, value: t, options: r, onChange: n }) => {
    let o = u => {
        let s = Array.from(u.currentTarget.options)
          .filter(c => c.selected)
          .map(c => c.value)
        n(yc(s, r))
      },
      l = Da(t, r),
      i = Ne(e)
    return a.createElement(
      vc,
      null,
      a.createElement(
        bc,
        { id: i, multiple: !0, value: l, onChange: o },
        Object.keys(r).map(u => a.createElement('option', { key: u }, u))
      )
    )
  },
  Si = e => {
    let { name: t, options: r } = e
    return r
      ? e.isMulti
        ? a.createElement(eE, { ...e })
        : a.createElement(Q6, { ...e })
      : (Mo.warn(`Select with no options: ${t}`), a.createElement(a.Fragment, null, '-'))
  },
  tE = (e, t) =>
    Array.isArray(e) ? e.reduce((r, n) => ((r[(t == null ? void 0 : t[n]) || String(n)] = n), r), {}) : e,
  rE = { check: Ai, 'inline-check': Ai, radio: wi, 'inline-radio': wi, select: Si, 'multi-select': Si },
  Ht = e => {
    let { type: t = 'select', labels: r, argType: n } = e,
      o = { ...e, options: n ? tE(n.options, r) : {}, isInline: t.includes('inline'), isMulti: t.includes('multi') },
      l = rE[t]
    if (l) return a.createElement(l, { ...o })
    throw new Error(`Unknown options type: ${t}`)
  },
  jo = 'value',
  nE = 'key',
  aE = 'Error',
  oE = 'Object',
  lE = 'Array',
  iE = 'String',
  sE = 'Number',
  uE = 'Boolean',
  cE = 'Date',
  dE = 'Null',
  pE = 'Undefined',
  fE = 'Function',
  mE = 'Symbol',
  Ec = 'ADD_DELTA_TYPE',
  xc = 'REMOVE_DELTA_TYPE',
  Ac = 'UPDATE_DELTA_TYPE'
function ht(e) {
  return e !== null && typeof e == 'object' && !Array.isArray(e) && typeof e[Symbol.iterator] == 'function'
    ? 'Iterable'
    : Object.prototype.toString.call(e).slice(8, -1)
}
function wc(e, t) {
  let r = ht(e),
    n = ht(t)
  return (r === 'Function' || n === 'Function') && n !== r
}
var Ho = class extends C.Component {
  constructor(e) {
    super(e),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this))
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state,
      { onlyValue: r } = this.props
    e && typeof e.focus == 'function' && e.focus(),
      r && t && typeof t.focus == 'function' && t.focus(),
      document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.onSubmit()),
      (e.code === 'Escape' || e.key === 'Escape') && (e.preventDefault(), this.props.handleCancel()))
  }
  onSubmit() {
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: o } = this.props,
      { inputRefKey: l, inputRefValue: i } = this.state,
      u = {}
    if (!t) {
      if (!l.value) return
      u.key = l.value
    }
    ;(u.newValue = r(!1, n, o, u.key, i.value)), e(u)
  }
  refInputKey(e) {
    this.state.inputRefKey = e
  }
  refInputValue(e) {
    this.state.inputRefValue = e
  }
  render() {
    let {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: o,
        keyPath: l,
        deep: i
      } = this.props,
      u = C.cloneElement(r, { onClick: this.onSubmit }),
      s = C.cloneElement(n, { onClick: e }),
      c = o(jo, l, i),
      d = C.cloneElement(c, { placeholder: 'Value', ref: this.refInputValue }),
      g = null
    if (!t) {
      let h = o(nE, l, i)
      g = C.cloneElement(h, { placeholder: 'Key', ref: this.refInputKey })
    }
    return a.createElement('span', { className: 'rejt-add-value-node' }, g, d, s, u)
  }
}
Ho.defaultProps = {
  onlyValue: !1,
  addButtonElement: a.createElement('button', null, '+'),
  cancelButtonElement: a.createElement('button', null, 'c')
}
var Cc = class extends C.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = {
      data: e.data,
      name: e.name,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state
    ;(r[e] = t), this.setState({ data: r })
    let { onUpdate: o } = this.props,
      l = n.length
    o(n[l - 1], r)
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 })
  }
  handleCollapseMode() {
    this.setState(e => ({ collapsed: !e.collapsed }))
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: o, nextDeep: l } = this.state,
        i = n[e]
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: xc }
          n.splice(e, 1), this.setState({ data: n })
          let { onUpdate: s, onDeltaUpdate: c } = this.props
          s(o[o.length - 1], n), c(u)
        })
        .catch(r.error)
    }
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state,
      { beforeAddAction: o, logger: l } = this.props
    o(t.length, r, n, e)
      .then(() => {
        let i = [...t, e]
        this.setState({ data: i }), this.handleAddValueCancel()
        let { onUpdate: u, onDeltaUpdate: s } = this.props
        u(r[r.length - 1], i), s({ type: Ec, keyPath: r, deep: n, key: i.length - 1, newValue: e })
      })
      .catch(l.error)
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 })
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e]
      o(e, i, u, s, t)
        .then(() => {
          ;(l[e] = t), this.setState({ data: l })
          let { onUpdate: c, onDeltaUpdate: d } = this.props
          c(i[i.length - 1], l), d({ type: Ac, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r(void 0)
        })
        .catch(n)
    })
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state,
      { handleRemove: o, readOnly: l, getStyle: i, dataType: u, minusMenuElement: s } = this.props,
      { minus: c, collapsed: d } = i(e, t, r, n, u),
      g = l(e, t, r, n, u),
      h = C.cloneElement(s, { onClick: o, className: 'rejt-minus-menu', style: c })
    return a.createElement(
      'span',
      { className: 'rejt-collapsed' },
      a.createElement(
        'span',
        { className: 'rejt-collapsed-text', style: d, onClick: this.handleCollapseMode },
        '[...] ',
        t.length,
        ' ',
        t.length === 1 ? 'item' : 'items'
      ),
      !g && h
    )
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: l } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: g,
        addButtonElement: h,
        cancelButtonElement: p,
        editButtonElement: m,
        inputElementGenerator: f,
        textareaElementGenerator: E,
        minusMenuElement: b,
        plusMenuElement: x,
        beforeRemoveAction: y,
        beforeAddAction: v,
        beforeUpdateAction: A,
        logger: w,
        onSubmitValueParser: k
      } = this.props,
      { minus: S, plus: O, delimiter: T, ul: R, addForm: D } = d(e, t, r, n, g),
      F = c(e, t, r, n, g),
      j = C.cloneElement(x, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: O }),
      L = C.cloneElement(b, { onClick: u, className: 'rejt-minus-menu', style: S }),
      M = !0,
      H = '[',
      P = ']'
    return a.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      a.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: T }, H),
      !o && j,
      a.createElement(
        'ul',
        { className: 'rejt-not-collapsed-list', style: R },
        t.map(($, N) =>
          a.createElement(Dn, {
            key: N,
            name: N.toString(),
            data: $,
            keyPath: r,
            deep: l,
            isCollapsed: i,
            handleRemove: this.handleRemoveItem(N),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: c,
            getStyle: d,
            addButtonElement: h,
            cancelButtonElement: p,
            editButtonElement: m,
            inputElementGenerator: f,
            textareaElementGenerator: E,
            minusMenuElement: b,
            plusMenuElement: x,
            beforeRemoveAction: y,
            beforeAddAction: v,
            beforeUpdateAction: A,
            logger: w,
            onSubmitValueParser: k
          })
        )
      ),
      !F &&
        o &&
        a.createElement(
          'div',
          { className: 'rejt-add-form', style: D },
          a.createElement(Ho, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: M,
            addButtonElement: h,
            cancelButtonElement: p,
            inputElementGenerator: f,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k
          })
        ),
      a.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: T }, P),
      !F && L
    )
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state,
      { dataType: l, getStyle: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = i(e, r, n, o, l)
    return a.createElement(
      'div',
      { className: 'rejt-array-node' },
      a.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        a.createElement('span', { className: 'rejt-name', style: s.name }, e, ' :', ' ')
      ),
      u
    )
  }
}
Cc.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement('span', null, ' - '),
  plusMenuElement: a.createElement('span', null, ' + ')
}
var Sc = class extends C.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, o, l, u)
    e && !s && typeof t.focus == 'function' && t.focus()
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') && (e.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props,
      { inputRef: l, name: i, deep: u } = this.state
    if (!l) return
    let s = n(!0, o, u, i, l.value)
    e({ value: s, key: i })
      .then(() => {
        wc(t, s) || this.handleCancelEdit()
      })
      .catch(r.error)
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 })
  }
  refInput(e) {
    this.state.inputRef = e
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 })
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: g,
        textareaElementGenerator: h,
        minusMenuElement: p,
        keyPath: m
      } = this.props,
      f = c(e, i, n, o, s),
      E = null,
      b = null,
      x = u(e, i, n, o, s)
    if (r && !x) {
      let y = h(jo, m, o, e, i, s),
        v = C.cloneElement(d, { onClick: this.handleEdit }),
        A = C.cloneElement(g, { onClick: this.handleCancelEdit }),
        w = C.cloneElement(y, { ref: this.refInput, defaultValue: i })
      ;(E = a.createElement('span', { className: 'rejt-edit-form', style: f.editForm }, w, ' ', A, v)), (b = null)
    } else {
      E = a.createElement(
        'span',
        { className: 'rejt-value', style: f.value, onClick: x ? null : this.handleEditMode },
        t
      )
      let y = C.cloneElement(p, { onClick: l, className: 'rejt-minus-menu', style: f.minus })
      b = x ? null : y
    }
    return a.createElement(
      'li',
      { className: 'rejt-function-value-node', style: f.li },
      a.createElement('span', { className: 'rejt-name', style: f.name }, e, ' :', ' '),
      E,
      b
    )
  }
}
Sc.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: a.createElement('button', null, 'e'),
  cancelButtonElement: a.createElement('button', null, 'c'),
  minusMenuElement: a.createElement('span', null, ' - ')
}
var Dn = class extends C.Component {
  constructor(e) {
    super(e), (this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep })
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state,
      {
        isCollapsed: o,
        handleRemove: l,
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        addButtonElement: g,
        cancelButtonElement: h,
        editButtonElement: p,
        inputElementGenerator: m,
        textareaElementGenerator: f,
        minusMenuElement: E,
        plusMenuElement: b,
        beforeRemoveAction: x,
        beforeAddAction: y,
        beforeUpdateAction: v,
        logger: A,
        onSubmitValueParser: w
      } = this.props,
      k = () => !0,
      S = ht(e)
    switch (S) {
      case aE:
        return a.createElement(La, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: k,
          dataType: S,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: E,
          plusMenuElement: b,
          beforeRemoveAction: x,
          beforeAddAction: y,
          beforeUpdateAction: v,
          logger: A,
          onSubmitValueParser: w
        })
      case oE:
        return a.createElement(La, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: E,
          plusMenuElement: b,
          beforeRemoveAction: x,
          beforeAddAction: y,
          beforeUpdateAction: v,
          logger: A,
          onSubmitValueParser: w
        })
      case lE:
        return a.createElement(Cc, {
          data: e,
          name: t,
          isCollapsed: o,
          keyPath: r,
          deep: n,
          handleRemove: l,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: c,
          dataType: S,
          getStyle: d,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          textareaElementGenerator: f,
          minusMenuElement: E,
          plusMenuElement: b,
          beforeRemoveAction: x,
          beforeAddAction: y,
          beforeUpdateAction: v,
          logger: A,
          onSubmitValueParser: w
        })
      case iE:
        return a.createElement(gt, {
          name: t,
          value: `"${e}"`,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case sE:
        return a.createElement(gt, {
          name: t,
          value: e,
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case uE:
        return a.createElement(gt, {
          name: t,
          value: e ? 'true' : 'false',
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case cE:
        return a.createElement(gt, {
          name: t,
          value: e.toISOString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case dE:
        return a.createElement(gt, {
          name: t,
          value: 'null',
          originalValue: 'null',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case pE:
        return a.createElement(gt, {
          name: t,
          value: 'undefined',
          originalValue: 'undefined',
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case fE:
        return a.createElement(Sc, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: c,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          textareaElementGenerator: f,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      case mE:
        return a.createElement(gt, {
          name: t,
          value: e.toString(),
          originalValue: e,
          keyPath: r,
          deep: n,
          handleRemove: l,
          handleUpdateValue: i,
          readOnly: k,
          dataType: S,
          getStyle: d,
          cancelButtonElement: h,
          editButtonElement: p,
          inputElementGenerator: m,
          minusMenuElement: E,
          logger: A,
          onSubmitValueParser: w
        })
      default:
        return null
    }
  }
}
Dn.defaultProps = { keyPath: [], deep: 0 }
var La = class extends C.Component {
  constructor(e) {
    super(e)
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
    ;(this.state = {
      name: e.name,
      data: e.data,
      keyPath: t,
      deep: e.deep,
      nextDeep: e.deep + 1,
      collapsed: e.isCollapsed(t, e.deep, e.data),
      addFormVisible: !1
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state
    ;(r[e] = t), this.setState({ data: r })
    let { onUpdate: o } = this.props,
      l = n.length
    o(n[l - 1], r)
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 })
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 })
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: o } = this.state,
      { beforeAddAction: l, logger: i } = this.props
    l(e, n, o, t)
      .then(() => {
        ;(r[e] = t), this.setState({ data: r }), this.handleAddValueCancel()
        let { onUpdate: u, onDeltaUpdate: s } = this.props
        u(n[n.length - 1], r), s({ type: Ec, keyPath: n, deep: o, key: e, newValue: t })
      })
      .catch(i.error)
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props,
        { data: n, keyPath: o, nextDeep: l } = this.state,
        i = n[e]
      t(e, o, l, i)
        .then(() => {
          let u = { keyPath: o, deep: l, key: e, oldValue: i, type: xc }
          delete n[e], this.setState({ data: n })
          let { onUpdate: s, onDeltaUpdate: c } = this.props
          s(o[o.length - 1], n), c(u)
        })
        .catch(r.error)
    }
  }
  handleCollapseMode() {
    this.setState(e => ({ collapsed: !e.collapsed }))
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props,
        { data: l, keyPath: i, nextDeep: u } = this.state,
        s = l[e]
      o(e, i, u, s, t)
        .then(() => {
          ;(l[e] = t), this.setState({ data: l })
          let { onUpdate: c, onDeltaUpdate: d } = this.props
          c(i[i.length - 1], l), d({ type: Ac, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r()
        })
        .catch(n)
    })
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state,
      { handleRemove: o, readOnly: l, dataType: i, getStyle: u, minusMenuElement: s } = this.props,
      { minus: c, collapsed: d } = u(e, n, t, r, i),
      g = Object.getOwnPropertyNames(n),
      h = l(e, n, t, r, i),
      p = C.cloneElement(s, { onClick: o, className: 'rejt-minus-menu', style: c })
    return a.createElement(
      'span',
      { className: 'rejt-collapsed' },
      a.createElement(
        'span',
        { className: 'rejt-collapsed-text', style: d, onClick: this.handleCollapseMode },
        '{...}',
        ' ',
        g.length,
        ' ',
        g.length === 1 ? 'key' : 'keys'
      ),
      !h && p
    )
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: l } = this.state,
      {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: c,
        getStyle: d,
        dataType: g,
        addButtonElement: h,
        cancelButtonElement: p,
        editButtonElement: m,
        inputElementGenerator: f,
        textareaElementGenerator: E,
        minusMenuElement: b,
        plusMenuElement: x,
        beforeRemoveAction: y,
        beforeAddAction: v,
        beforeUpdateAction: A,
        logger: w,
        onSubmitValueParser: k
      } = this.props,
      { minus: S, plus: O, addForm: T, ul: R, delimiter: D } = d(e, t, r, n, g),
      F = Object.getOwnPropertyNames(t),
      j = c(e, t, r, n, g),
      L = C.cloneElement(x, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: O }),
      M = C.cloneElement(b, { onClick: u, className: 'rejt-minus-menu', style: S }),
      H = F.map(N =>
        a.createElement(Dn, {
          key: N,
          name: N,
          data: t[N],
          keyPath: r,
          deep: o,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(N),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: c,
          getStyle: d,
          addButtonElement: h,
          cancelButtonElement: p,
          editButtonElement: m,
          inputElementGenerator: f,
          textareaElementGenerator: E,
          minusMenuElement: b,
          plusMenuElement: x,
          beforeRemoveAction: y,
          beforeAddAction: v,
          beforeUpdateAction: A,
          logger: w,
          onSubmitValueParser: k
        })
      ),
      P = '{',
      $ = '}'
    return a.createElement(
      'span',
      { className: 'rejt-not-collapsed' },
      a.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: D }, P),
      !j && L,
      a.createElement('ul', { className: 'rejt-not-collapsed-list', style: R }, H),
      !j &&
        l &&
        a.createElement(
          'div',
          { className: 'rejt-add-form', style: T },
          a.createElement(Ho, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement: h,
            cancelButtonElement: p,
            inputElementGenerator: f,
            keyPath: r,
            deep: n,
            onSubmitValueParser: k
          })
        ),
      a.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: D }, $),
      !j && M
    )
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state,
      { getStyle: l, dataType: i } = this.props,
      u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
      s = l(e, r, n, o, i)
    return a.createElement(
      'div',
      { className: 'rejt-object-node' },
      a.createElement(
        'span',
        { onClick: this.handleCollapseMode },
        a.createElement('span', { className: 'rejt-name', style: s.name }, e, ' :', ' ')
      ),
      u
    )
  }
}
La.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: a.createElement('span', null, ' - '),
  plusMenuElement: a.createElement('span', null, ' + ')
}
var gt = class extends C.Component {
  constructor(e) {
    super(e)
    let t = [...e.keyPath, e.name]
    ;(this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: l } = this.state,
      { readOnly: i, dataType: u } = this.props,
      s = i(r, n, o, l, u)
    e && !s && typeof t.focus == 'function' && t.focus()
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown)
  }
  onKeydown(e) {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.repeat ||
      ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.handleEdit()),
      (e.code === 'Escape' || e.key === 'Escape') && (e.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props,
      { inputRef: l, name: i, deep: u } = this.state
    if (!l) return
    let s = n(!0, o, u, i, l.value)
    e({ value: s, key: i })
      .then(() => {
        wc(t, s) || this.handleCancelEdit()
      })
      .catch(r.error)
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 })
  }
  refInput(e) {
    this.state.inputRef = e
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 })
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state,
      {
        handleRemove: l,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: c,
        editButtonElement: d,
        cancelButtonElement: g,
        inputElementGenerator: h,
        minusMenuElement: p,
        keyPath: m
      } = this.props,
      f = c(e, i, n, o, s),
      E = u(e, i, n, o, s),
      b = r && !E,
      x = h(jo, m, o, e, i, s),
      y = C.cloneElement(d, { onClick: this.handleEdit }),
      v = C.cloneElement(g, { onClick: this.handleCancelEdit }),
      A = C.cloneElement(x, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
      w = C.cloneElement(p, { onClick: l, className: 'rejt-minus-menu', style: f.minus })
    return a.createElement(
      'li',
      { className: 'rejt-value-node', style: f.li },
      a.createElement('span', { className: 'rejt-name', style: f.name }, e, ' : '),
      b
        ? a.createElement('span', { className: 'rejt-edit-form', style: f.editForm }, A, ' ', v, y)
        : a.createElement(
            'span',
            { className: 'rejt-value', style: f.value, onClick: E ? null : this.handleEditMode },
            String(t)
          ),
      !E && !b && w
    )
  }
}
gt.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: a.createElement('button', null, 'e'),
  cancelButtonElement: a.createElement('button', null, 'c'),
  minusMenuElement: a.createElement('span', null, ' - ')
}
var gE = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {}
  },
  hE = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {}
  },
  yE = {
    minus: { color: 'red' },
    editForm: {},
    value: { color: '#7bba3d' },
    li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
    name: { color: '#2287CD' }
  }
function bE(e) {
  let t = e
  if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
  try {
    t = JSON.parse(e)
  } catch {}
  return t
}
var kc = class extends C.Component {
  constructor(e) {
    super(e),
      (this.state = { data: e.data, rootName: e.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this))
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName ? { data: e.data, rootName: e.rootName } : null
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t)
  }
  removeRoot() {
    this.onUpdate(null, null)
  }
  render() {
    let { data: e, rootName: t } = this.state,
      {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: o,
        getStyle: l,
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: c,
        textareaElement: d,
        minusMenuElement: g,
        plusMenuElement: h,
        beforeRemoveAction: p,
        beforeAddAction: m,
        beforeUpdateAction: f,
        logger: E,
        onSubmitValueParser: b,
        fallback: x = null
      } = this.props,
      y = ht(e),
      v = o
    ht(o) === 'Boolean' && (v = () => o)
    let A = c
    c && ht(c) !== 'Function' && (A = () => c)
    let w = d
    return (
      d && ht(d) !== 'Function' && (w = () => d),
      y === 'Object' || y === 'Array'
        ? a.createElement(
            'div',
            { className: 'rejt-tree' },
            a.createElement(Dn, {
              data: e,
              name: t,
              deep: -1,
              isCollapsed: r,
              onUpdate: this.onUpdate,
              onDeltaUpdate: n,
              readOnly: v,
              getStyle: l,
              addButtonElement: i,
              cancelButtonElement: u,
              editButtonElement: s,
              inputElementGenerator: A,
              textareaElementGenerator: w,
              minusMenuElement: g,
              plusMenuElement: h,
              handleRemove: this.removeRoot,
              beforeRemoveAction: p,
              beforeAddAction: m,
              beforeUpdateAction: f,
              logger: E,
              onSubmitValueParser: b
            })
          )
        : x
    )
  }
}
kc.defaultProps = {
  rootName: 'root',
  isCollapsed: (e, t) => t !== -1,
  getStyle: (e, t, r, n, o) => {
    switch (o) {
      case 'Object':
      case 'Error':
        return gE
      case 'Array':
        return hE
      default:
        return yE
    }
  },
  readOnly: () => !1,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (e, t, r, n, o) => bE(o),
  inputElement: () => a.createElement('input', null),
  textareaElement: () => a.createElement('textarea', null),
  fallback: null
}
var { window: vE } = De,
  EE = _.div(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
    '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
      { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
    '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
      { '& > svg': { opacity: 1 } },
    '.rejt-edit-form button': { display: 'none' },
    '.rejt-add-form': { marginLeft: 10 },
    '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
    '.rejt-name': { lineHeight: '22px' },
    '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
    '.rejt-plus-menu': { marginLeft: 5 },
    '.rejt-object-node > span > *, .rejt-array-node > span > *': { position: 'relative', zIndex: 2 },
    '.rejt-object-node, .rejt-array-node': { position: 'relative' },
    '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
      {
        content: '""',
        position: 'absolute',
        top: 0,
        display: 'block',
        width: '100%',
        marginLeft: '-1rem',
        padding: '0 4px 0 1rem',
        height: 22
      },
    '.rejt-collapsed::before, .rejt-not-collapsed::before': {
      zIndex: 1,
      background: 'transparent',
      borderRadius: 4,
      transition: 'background 0.2s',
      pointerEvents: 'none',
      opacity: 0.1
    },
    '.rejt-object-node:hover, .rejt-array-node:hover': {
      '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': { background: e.color.secondary }
    },
    '.rejt-collapsed::after, .rejt-not-collapsed::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      pointerEvents: 'none',
      width: 0,
      height: 0
    },
    '.rejt-collapsed::after': {
      left: -8,
      top: 8,
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid rgba(153,153,153,0.6)'
    },
    '.rejt-not-collapsed::after': {
      left: -10,
      top: 10,
      borderTop: '3px solid rgba(153,153,153,0.6)',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent'
    },
    '.rejt-value': {
      display: 'inline-block',
      border: '1px solid transparent',
      borderRadius: 4,
      margin: '1px 0',
      padding: '0 4px',
      cursor: 'text',
      color: e.color.defaultText
    },
    '.rejt-value-node:hover > .rejt-value': { background: e.color.lighter, borderColor: e.appBorderColor }
  })),
  sa = _.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : 'transparent',
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? 'bold' : 'normal',
    cursor: 'pointer',
    order: t ? 'initial' : 9
  })),
  ki = _(be)(({ theme: e, icon: t, disabled: r }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: r ? 'not-allowed' : 'pointer',
    color: e.textMutedColor,
    '&:hover': r ? {} : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
    'svg + &': { marginLeft: 0 }
  })),
  _i = _.input(({ theme: e, placeholder: t }) => ({
    outline: 0,
    margin: t ? 1 : '1px 0',
    padding: '3px 4px',
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: '14px',
    width: t === 'Key' ? 80 : 120,
    '&:focus': { border: `1px solid ${e.color.secondary}` }
  })),
  xE = _(Rt)(({ theme: e }) => ({
    position: 'absolute',
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: '0 3px',
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: '9px',
    fontWeight: 'bold',
    textDecoration: 'none',
    span: { marginLeft: 3, marginTop: 1 }
  })),
  AE = _(He.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: '7px 6px',
    fontFamily: e.typography.fonts.mono,
    fontSize: '12px',
    lineHeight: '18px',
    '&::placeholder': { fontFamily: e.typography.fonts.base, fontSize: '13px' },
    '&:placeholder-shown': { padding: '7px 10px' }
  })),
  wE = { bubbles: !0, cancelable: !0, key: 'Enter', code: 'Enter', keyCode: 13 },
  CE = e => {
    e.currentTarget.dispatchEvent(new vE.KeyboardEvent('keydown', wE))
  },
  SE = e => {
    e.currentTarget.select()
  },
  kE = e => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
    li: { outline: 0 }
  }),
  Oi = ({ name: e, value: t, onChange: r }) => {
    let n = i1(),
      o = C.useMemo(() => t && A4(t), [t]),
      l = o != null,
      [i, u] = C.useState(!l),
      [s, c] = C.useState(null),
      d = C.useCallback(
        E => {
          try {
            E && r(JSON.parse(E)), c(void 0)
          } catch (b) {
            c(b)
          }
        },
        [r]
      ),
      [g, h] = C.useState(!1),
      p = C.useCallback(() => {
        r({}), h(!0)
      }, [h]),
      m = C.useRef(null)
    if (
      (C.useEffect(() => {
        g && m.current && m.current.select()
      }, [g]),
      !l)
    )
      return a.createElement(He.Button, { id: cn(e), onClick: p }, 'Set object')
    let f = a.createElement(AE, {
      ref: m,
      id: Ne(e),
      name: e,
      defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
      onBlur: E => d(E.target.value),
      placeholder: 'Edit JSON string...',
      autoFocus: g,
      valid: s ? 'error' : null
    })
    return a.createElement(
      EE,
      null,
      ['Object', 'Array'].includes(ht(o)) &&
        a.createElement(
          xE,
          {
            href: '#',
            onClick: E => {
              E.preventDefault(), u(b => !b)
            }
          },
          a.createElement(be, { icon: i ? 'eyeclose' : 'eye' }),
          a.createElement('span', null, 'RAW')
        ),
      i
        ? f
        : a.createElement(kc, {
            data: o,
            rootName: e,
            onFullyUpdate: r,
            getStyle: kE(n),
            cancelButtonElement: a.createElement(sa, { type: 'button' }, 'Cancel'),
            editButtonElement: a.createElement(sa, { type: 'submit' }, 'Save'),
            addButtonElement: a.createElement(sa, { type: 'submit', primary: !0 }, 'Save'),
            plusMenuElement: a.createElement(ki, { icon: 'add' }),
            minusMenuElement: a.createElement(ki, { icon: 'subtract' }),
            inputElement: (E, b, x, y) =>
              y ? a.createElement(_i, { onFocus: SE, onBlur: CE }) : a.createElement(_i, null),
            fallback: f
          })
    )
  },
  _E = _.input(({ theme: e, min: t, max: r, value: n }) => ({
    '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
    '&::-webkit-slider-runnable-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer'
    },
    '&::-webkit-slider-thumb': {
      marginTop: '-6px',
      width: 16,
      height: 16,
      border: `1px solid ${st(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${st(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      appearance: 'none',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Ye(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out'
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing'
      }
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-runnable-track': { borderColor: st(e.color.secondary, 0.4) },
      '&::-webkit-slider-thumb': { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` }
    },
    '&::-moz-range-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
      outline: 'none'
    },
    '&::-moz-range-thumb': {
      width: 16,
      height: 16,
      border: `1px solid ${st(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${st(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${Ye(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out'
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing'
      }
    },
    '&::-ms-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${Ye(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${kt(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: 'transparent',
      width: '100%',
      height: '6px',
      cursor: 'pointer'
    },
    '&::-ms-fill-lower': { borderRadius: 6 },
    '&::-ms-fill-upper': { borderRadius: 6 },
    '&::-ms-thumb': {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${st(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: 'grab',
      marginTop: 0
    },
    '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } }
  })),
  _c = _.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums'
  }),
  OE = _(_c)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: 'right',
    flexShrink: 0
  })),
  TE = _.div({ display: 'flex', alignItems: 'center', width: '100%' })
function RE(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
}
var FE = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: l = 1, onBlur: i, onFocus: u }) => {
    let s = g => {
        r(q6(g.target.value))
      },
      c = t !== void 0,
      d = C.useMemo(() => RE(l), [l])
    return a.createElement(
      TE,
      null,
      a.createElement(_c, null, n),
      a.createElement(_E, {
        id: Ne(e),
        type: 'range',
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: o,
        step: l,
        onFocus: u,
        onBlur: i
      }),
      a.createElement(OE, { numberOFDecimalsPlaces: d, max: o }, c ? t.toFixed(d) : '--', ' / ', o)
    )
  },
  DE = _.label({ display: 'flex' }),
  LE = _.div(({ isMaxed: e }) => ({ marginLeft: '0.75rem', paddingTop: '0.35rem', color: e ? 'red' : void 0 })),
  ME = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: l }) => {
    let i = g => {
        r(g.target.value)
      },
      [u, s] = C.useState(!1),
      c = C.useCallback(() => {
        r(''), s(!0)
      }, [s])
    if (t === void 0) return a.createElement(He.Button, { id: cn(e), onClick: c }, 'Set string')
    let d = typeof t == 'string'
    return a.createElement(
      DE,
      null,
      a.createElement(He.Textarea, {
        id: Ne(e),
        maxLength: l,
        onChange: i,
        size: 'flex',
        placeholder: 'Edit string...',
        autoFocus: u,
        valid: d ? null : 'error',
        name: e,
        value: d ? t : '',
        onFocus: n,
        onBlur: o
      }),
      l &&
        a.createElement(
          LE,
          { isMaxed: (t == null ? void 0 : t.length) === l },
          (t == null ? void 0 : t.length) ?? 0,
          ' / ',
          l
        )
    )
  },
  BE = _(He.Input)({ padding: 10 })
function $E(e) {
  e.forEach(t => {
    t.startsWith('blob:') && URL.revokeObjectURL(t)
  })
}
var IE = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
    let o = C.useRef(null)
    function l(i) {
      if (!i.target.files) return
      let u = Array.from(i.target.files).map(s => URL.createObjectURL(s))
      e(u), $E(n)
    }
    return (
      C.useEffect(() => {
        n == null && o.current && (o.current.value = null)
      }, [n, t]),
      a.createElement(BE, {
        ref: o,
        id: Ne(t),
        type: 'file',
        name: t,
        multiple: !0,
        onChange: l,
        accept: r,
        size: 'flex'
      })
    )
  },
  jE = C.lazy(() =>
    ut(
      () => import('./Color-6VNJS4EI-bf4e8c90.js'),
      [
        './Color-6VNJS4EI-bf4e8c90.js',
        './index-1cdf6ce0.js',
        './index-c8f542d6.js',
        './iframe-aa443103.js',
        './chunk-6P7RB4HF-36fee097.js',
        './index-a01a9712.js',
        './assertThisInitialized-bd9b18e4.js',
        './index-356e4a49.js'
      ],
      import.meta.url
    )
  ),
  HE = e => a.createElement(C.Suspense, { fallback: a.createElement('div', null) }, a.createElement(jE, { ...e })),
  NE = {
    array: Oi,
    object: Oi,
    boolean: $6,
    color: HE,
    date: P6,
    number: z6,
    check: Ht,
    'inline-check': Ht,
    radio: Ht,
    'inline-radio': Ht,
    select: Ht,
    'multi-select': Ht,
    range: FE,
    text: ME,
    file: IE
  },
  Ti = () => a.createElement(a.Fragment, null, '-'),
  ZE = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
    let { key: o, control: l } = e,
      [i, u] = C.useState(!1),
      [s, c] = C.useState({ value: t })
    C.useEffect(() => {
      i || c({ value: t })
    }, [i, t])
    let d = C.useCallback(f => (c({ value: f }), r({ [o]: f }), f), [r, o]),
      g = C.useCallback(() => u(!1), []),
      h = C.useCallback(() => u(!0), [])
    if (!l || l.disable)
      return n
        ? a.createElement(
            yt,
            { href: 'https://storybook.js.org/docs/react/essentials/controls', target: '_blank', withArrow: !0 },
            'Setup controls'
          )
        : a.createElement(Ti, null)
    let p = { name: o, argType: e, value: s.value, onChange: d, onBlur: g, onFocus: h },
      m = NE[l.type] || Ti
    return a.createElement(m, { ...p, ...l, controlType: l.type })
  },
  PE = _.span({ fontWeight: 'bold' }),
  VE = _.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: 'help' })),
  qE = _.div(({ theme: e }) => ({
    '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
    code: { ...dt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono },
    '& code': { margin: 0, display: 'inline-block' },
    '& pre > code': { whiteSpace: 'pre-wrap' }
  })),
  zE = _.div(({ theme: e, hasDescription: t }) => ({
    color: e.base === 'light' ? ee(0.1, e.color.defaultText) : ee(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0
  })),
  UE = _.div(({ theme: e, hasDescription: t }) => ({
    color: e.base === 'light' ? ee(0.1, e.color.defaultText) : ee(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12
  })),
  WE = _.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? '40px !important' : '20px !important' })),
  Zr = e => {
    var f
    let [t, r] = C.useState(!1),
      { row: n, updateArgs: o, compact: l, expandable: i, initialExpandedArgs: u } = e,
      { name: s, description: c } = n,
      d = n.table || {},
      g = d.type || n.type,
      h = d.defaultValue || n.defaultValue,
      p = (f = n.type) == null ? void 0 : f.required,
      m = c != null && c !== ''
    return a.createElement(
      'tr',
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      a.createElement(
        WE,
        { expandable: i },
        a.createElement(PE, null, s),
        p ? a.createElement(VE, { title: 'Required' }, '*') : null
      ),
      l
        ? null
        : a.createElement(
            'td',
            null,
            m && a.createElement(qE, null, a.createElement(Ju, null, c)),
            d.jsDocTags != null
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(UE, { hasDescription: m }, a.createElement(ia, { value: g, initialExpandedArgs: u })),
                  a.createElement(C6, { tags: d.jsDocTags })
                )
              : a.createElement(zE, { hasDescription: m }, a.createElement(ia, { value: g, initialExpandedArgs: u }))
          ),
      l ? null : a.createElement('td', null, a.createElement(ia, { value: h, initialExpandedArgs: u })),
      o ? a.createElement('td', null, a.createElement(ZE, { ...e, isHovered: t })) : null
    )
  },
  GE = _(be)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color: e.base === 'light' ? ee(0.25, e.color.defaultText) : ee(0.3, e.color.defaultText),
    border: 'none',
    display: 'inline-block'
  })),
  YE = _.span(({ theme: e }) => ({ display: 'flex', lineHeight: '20px', alignItems: 'center' })),
  KE = _.td(({ theme: e }) => ({
    position: 'relative',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color: e.base === 'light' ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    '& ~ td': { background: `${e.background.app} !important` }
  })),
  JE = _.td(({ theme: e }) => ({
    position: 'relative',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app
  })),
  XE = _.td(() => ({ position: 'relative' })),
  QE = _.tr(({ theme: e }) => ({
    '&:hover > td': {
      backgroundColor: `${kt(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: 'row-resize'
    }
  })),
  Ri = _.button(() => ({
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    color: 'transparent',
    cursor: 'row-resize !important'
  })),
  ua = ({ level: e = 'section', label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
    let [l, i] = C.useState(n),
      u = e === 'subsection' ? JE : KE,
      s = (r == null ? void 0 : r.length) || 0,
      c = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
      d = l ? 'arrowdown' : 'arrowright',
      g = `${l ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${s !== 1 ? 's' : ''}`
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(
        QE,
        { title: g },
        a.createElement(
          u,
          { colSpan: 1 },
          a.createElement(Ri, { onClick: h => i(!l), tabIndex: 0 }, g),
          a.createElement(YE, null, a.createElement(GE, { icon: d }), t)
        ),
        a.createElement(
          XE,
          { colSpan: o - 1 },
          a.createElement(Ri, { onClick: h => i(!l), tabIndex: -1, style: { outline: 'none' } }, g),
          l ? null : c
        )
      ),
      l ? r : null
    )
  },
  Pr = _.div(({ theme: e }) => ({
    display: 'flex',
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    '&:last-child': { borderBottom: 0 }
  })),
  fe = _.div(({ numColumn: e }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: e || 1,
    gap: 5,
    padding: '12px 20px'
  })),
  le = _.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || '100%',
    height: r || 16,
    borderRadius: 3
  })),
  me = [2, 4, 2, 2],
  e8 = () =>
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        Pr,
        null,
        a.createElement(fe, { numColumn: me[0] }, a.createElement(le, { width: '60%' })),
        a.createElement(fe, { numColumn: me[1] }, a.createElement(le, { width: '30%' })),
        a.createElement(fe, { numColumn: me[2] }, a.createElement(le, { width: '60%' })),
        a.createElement(fe, { numColumn: me[3] }, a.createElement(le, { width: '60%' }))
      ),
      a.createElement(
        Pr,
        null,
        a.createElement(fe, { numColumn: me[0] }, a.createElement(le, { width: '60%' })),
        a.createElement(
          fe,
          { numColumn: me[1] },
          a.createElement(le, { width: '80%' }),
          a.createElement(le, { width: '30%' })
        ),
        a.createElement(fe, { numColumn: me[2] }, a.createElement(le, { width: '60%' })),
        a.createElement(fe, { numColumn: me[3] }, a.createElement(le, { width: '60%' }))
      ),
      a.createElement(
        Pr,
        null,
        a.createElement(fe, { numColumn: me[0] }, a.createElement(le, { width: '60%' })),
        a.createElement(
          fe,
          { numColumn: me[1] },
          a.createElement(le, { width: '80%' }),
          a.createElement(le, { width: '30%' })
        ),
        a.createElement(fe, { numColumn: me[2] }, a.createElement(le, { width: '60%' })),
        a.createElement(fe, { numColumn: me[3] }, a.createElement(le, { width: '60%' }))
      ),
      a.createElement(
        Pr,
        null,
        a.createElement(fe, { numColumn: me[0] }, a.createElement(le, { width: '60%' })),
        a.createElement(
          fe,
          { numColumn: me[1] },
          a.createElement(le, { width: '80%' }),
          a.createElement(le, { width: '30%' })
        ),
        a.createElement(fe, { numColumn: me[2] }, a.createElement(le, { width: '60%' })),
        a.createElement(fe, { numColumn: me[3] }, a.createElement(le, { width: '60%' }))
      )
    ),
  t8 = _.div(({ inAddonPanel: e, theme: t }) => ({
    height: e ? '100%' : 'auto',
    display: 'flex',
    border: e ? 'none' : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
    background: t.background.content,
    boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
  })),
  r8 = _.div({ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 415 }),
  n8 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textColor
  })),
  a8 = _.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textMutedColor
  })),
  o8 = _.div(({ theme: e }) => ({ display: 'flex', fontSize: e.typography.size.s2 - 1, gap: 25 })),
  l8 = _.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })),
  i8 = ({ inAddonPanel: e }) => {
    let [t, r] = C.useState(!0)
    return (
      C.useEffect(() => {
        let n = setTimeout(() => {
          r(!1)
        }, 100)
        return () => clearTimeout(n)
      }, []),
      t
        ? null
        : a.createElement(
            t8,
            { inAddonPanel: e },
            a.createElement(
              r8,
              null,
              a.createElement(
                n8,
                null,
                e ? 'Interactive story playground' : "Args table with interactive controls couldn't be auto-generated"
              ),
              a.createElement(
                a8,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            a.createElement(
              o8,
              null,
              e &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    yt,
                    { href: 'https://youtu.be/0gOfS6K0x0E', target: '_blank', withArrow: !0 },
                    a.createElement(be, { icon: 'video' }),
                    ' Watch 5m video'
                  ),
                  a.createElement(l8, null),
                  a.createElement(
                    yt,
                    {
                      href: 'https://storybook.js.org/docs/react/essentials/controls',
                      target: '_blank',
                      withArrow: !0
                    },
                    'Read docs'
                  )
                ),
              !e &&
                a.createElement(
                  yt,
                  { href: 'https://storybook.js.org/docs/react/essentials/controls', target: '_blank', withArrow: !0 },
                  'Learn how to set that up'
                )
            )
          )
    )
  },
  s8 = _.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
    '&&': {
      borderSpacing: 0,
      color: e.color.defaultText,
      'td, th': { padding: 0, border: 'none', verticalAlign: 'top', textOverflow: 'ellipsis' },
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      textAlign: 'left',
      width: '100%',
      marginTop: r ? 0 : 25,
      marginBottom: r ? 0 : 40,
      'thead th:first-of-type, td:first-of-type': { width: '25%' },
      'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
      'th:nth-of-type(2), td:nth-of-type(2)': { ...(t ? null : { width: '35%' }) },
      'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
      'th:last-of-type, td:last-of-type': { paddingRight: 20, ...(t ? null : { width: '25%' }) },
      th: {
        color: e.base === 'light' ? ee(0.25, e.color.defaultText) : ee(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
      },
      td: {
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
        '&:last-of-type': { paddingRight: 20 }
      },
      marginLeft: r ? 0 : 1,
      marginRight: r ? 0 : 1,
      tbody: {
        ...(r
          ? null
          : {
              filter:
                e.base === 'light'
                  ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                  : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))'
            }),
        '> tr > *': { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` },
        ...(r
          ? null
          : {
              '> tr:first-of-type > *': { borderBlockStart: `1px solid ${e.appBorderColor}` },
              '> tr:last-of-type > *': { borderBlockEnd: `1px solid ${e.appBorderColor}` },
              '> tr > *:first-of-type': { borderInlineStart: `1px solid ${e.appBorderColor}` },
              '> tr > *:last-of-type': { borderInlineEnd: `1px solid ${e.appBorderColor}` },
              '> tr:first-of-type > td:first-of-type': { borderTopLeftRadius: e.appBorderRadius },
              '> tr:first-of-type > td:last-of-type': { borderTopRightRadius: e.appBorderRadius },
              '> tr:last-of-type > td:first-of-type': { borderBottomLeftRadius: e.appBorderRadius },
              '> tr:last-of-type > td:last-of-type': { borderBottomRightRadius: e.appBorderRadius }
            })
      }
    }
  })),
  u8 = _(Rt)(({ theme: e }) => ({ color: e.barTextColor, margin: '-4px -12px -4px 0' })),
  c8 = _.span({ display: 'flex', justifyContent: 'space-between' }),
  d8 = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) => {
      var r, n
      return (
        +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) ||
        e.name.localeCompare(t.name)
      )
    },
    none: void 0
  },
  p8 = (e, t) => {
    let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} }
    if (!e) return r
    Object.entries(e).forEach(([l, i]) => {
      let { category: u, subcategory: s } = (i == null ? void 0 : i.table) || {}
      if (u) {
        let c = r.sections[u] || { ungrouped: [], subsections: {} }
        if (!s) c.ungrouped.push({ key: l, ...i })
        else {
          let d = c.subsections[s] || []
          d.push({ key: l, ...i }), (c.subsections[s] = d)
        }
        r.sections[u] = c
      } else if (s) {
        let c = r.ungroupedSubsections[s] || []
        c.push({ key: l, ...i }), (r.ungroupedSubsections[s] = c)
      } else r.ungrouped.push({ key: l, ...i })
    })
    let n = d8[t],
      o = l => (n ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {}) : l)
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: o(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (l, i) => ({
          ...l,
          [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: o(r.sections[i].subsections) }
        }),
        {}
      )
    }
  },
  f8 = (e, t, r) => {
    try {
      return m5(e, t, r)
    } catch (n) {
      return Uv.warn(n.message), !1
    }
  },
  Oc = e => {
    let {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: o,
      initialExpandedArgs: l,
      sort: i = 'none',
      isLoading: u
    } = e
    if ('error' in e) {
      let { error: x } = e
      return a.createElement(
        fc,
        null,
        x,
        ' ',
        a.createElement(yt, { href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0 }, 'Read the docs')
      )
    }
    if (u) return a.createElement(e8, null)
    let { rows: s, args: c, globals: d } = 'rows' in e && e,
      g = p8(
        Xg(s, x => {
          var y
          return !((y = x == null ? void 0 : x.table) != null && y.disable) && f8(x, c || {}, d || {})
        }),
        i
      ),
      h = g.ungrouped.length === 0,
      p = Object.entries(g.sections).length === 0,
      m = Object.entries(g.ungroupedSubsections).length === 0
    if (h && p && m) return a.createElement(i8, { inAddonPanel: o })
    let f = 1
    t && (f += 1), n || (f += 2)
    let E = Object.keys(g.sections).length > 0,
      b = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: l }
    return a.createElement(
      yo,
      null,
      a.createElement(
        s8,
        { compact: n, inAddonPanel: o, className: 'docblock-argstable sb-unstyled' },
        a.createElement(
          'thead',
          { className: 'docblock-argstable-head' },
          a.createElement(
            'tr',
            null,
            a.createElement('th', null, a.createElement('span', null, 'Name')),
            n ? null : a.createElement('th', null, a.createElement('span', null, 'Description')),
            n ? null : a.createElement('th', null, a.createElement('span', null, 'Default')),
            t
              ? a.createElement(
                  'th',
                  null,
                  a.createElement(
                    c8,
                    null,
                    'Control',
                    ' ',
                    !u &&
                      r &&
                      a.createElement(
                        u8,
                        { onClick: () => r(), title: 'Reset controls' },
                        a.createElement(be, { icon: 'undo', 'aria-hidden': !0 })
                      )
                  )
                )
              : null
          )
        ),
        a.createElement(
          'tbody',
          { className: 'docblock-argstable-body' },
          g.ungrouped.map(x => a.createElement(Zr, { key: x.key, row: x, arg: c && c[x.key], ...b })),
          Object.entries(g.ungroupedSubsections).map(([x, y]) =>
            a.createElement(
              ua,
              { key: x, label: x, level: 'subsection', colSpan: f },
              y.map(v => a.createElement(Zr, { key: v.key, row: v, arg: c && c[v.key], expandable: E, ...b }))
            )
          ),
          Object.entries(g.sections).map(([x, y]) =>
            a.createElement(
              ua,
              { key: x, label: x, level: 'section', colSpan: f },
              y.ungrouped.map(v => a.createElement(Zr, { key: v.key, row: v, arg: c && c[v.key], ...b })),
              Object.entries(y.subsections).map(([v, A]) =>
                a.createElement(
                  ua,
                  { key: v, label: v, level: 'subsection', colSpan: f },
                  A.map(w => a.createElement(Zr, { key: w.key, row: w, arg: c && c[w.key], expandable: E, ...b }))
                )
              )
            )
          )
        )
      )
    )
  }
_.div(({ theme: e }) => ({
  marginRight: 30,
  fontSize: `${e.typography.size.s1}px`,
  color: e.base === 'light' ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText)
}))
_.div({ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' })
_.div({ display: 'flex', flexDirection: 'row', alignItems: 'baseline', '&:not(:last-child)': { marginBottom: '1rem' } })
_.div(te, ({ theme: e }) => ({ ...Fn(e), margin: '25px 0 40px', padding: '30px 20px' }))
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }))
_.div(({ theme: e }) => ({ color: e.base === 'light' ? ee(0.2, e.color.defaultText) : ee(0.6, e.color.defaultText) }))
_.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 })
_.div(({ theme: e }) => ({
  flex: 1,
  textAlign: 'center',
  fontFamily: e.typography.fonts.mono,
  fontSize: e.typography.size.s1,
  lineHeight: 1,
  overflow: 'hidden',
  color: e.base === 'light' ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText),
  '> div': { display: 'inline-block', overflow: 'hidden', maxWidth: '100%', textOverflow: 'ellipsis' },
  span: { display: 'block', marginTop: 2 }
}))
_.div({ display: 'flex', flexDirection: 'row' })
_.div(({ background: e }) => ({
  position: 'relative',
  flex: 1,
  '&::before': { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: e, content: '""' }
}))
_.div(({ theme: e }) => ({
  ...Fn(e),
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  marginBottom: 5,
  overflow: 'hidden',
  backgroundColor: 'white',
  backgroundImage: 'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
  backgroundClip: 'padding-box'
}))
_.div({ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', marginBottom: 30 })
_.div({ flex: 1, display: 'flex', flexDirection: 'row' })
_.div({ display: 'flex', alignItems: 'flex-start' })
_.div({ flex: '0 0 30%' })
_.div({ flex: 1 })
_.div(({ theme: e }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 20,
  fontWeight: e.typography.weight.bold,
  color: e.base === 'light' ? ee(0.4, e.color.defaultText) : ee(0.6, e.color.defaultText)
}))
_.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'column'
}))
_.div(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2
}))
_.div(({ theme: e }) => ({
  ...Fn(e),
  overflow: 'hidden',
  height: 40,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',
  '> img, > svg': { width: 20, height: 20 }
}))
_.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0px 10px 30px 0'
})
_.div({ display: 'flex', flexFlow: 'row wrap' })
var m8 = e => `anchor--${e}`,
  Tc = ({ storyId: e, children: t }) => a.createElement('div', { id: m8(e), className: 'sb-anchor' }, t)
De &&
  De.__DOCS_CONTEXT__ === void 0 &&
  ((De.__DOCS_CONTEXT__ = C.createContext(null)), (De.__DOCS_CONTEXT__.displayName = 'DocsContext'))
var Se = De ? De.__DOCS_CONTEXT__ : C.createContext(null),
  Fr = (e, t) => C.useContext(Se).resolveOf(e, t)
function g8(e, t) {
  let { extractArgTypes: r } = t.docs || {}
  if (!r) throw new Error('Args unsupported. See Args documentation for your framework.')
  return r(e)
}
function h8(e, t) {
  if (e.type === 'component') {
    let {
      component: o,
      projectAnnotations: { parameters: l }
    } = e
    return { argTypes: g8(o, l), parameters: l }
  }
  if (e.type === 'meta') {
    let {
      preparedMeta: { argTypes: o, parameters: l }
    } = e
    return { argTypes: o, parameters: l }
  }
  let {
    story: { argTypes: r, parameters: n }
  } = e
  return { argTypes: r, parameters: n }
}
var Ex = e => {
  var d
  let { of: t } = e
  if ('of' in e && t === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
  let r = Fr(t || 'meta'),
    { argTypes: n, parameters: o } = h8(r),
    l = ((d = o.docs) == null ? void 0 : d.argTypes) || {},
    i = e.include ?? l.include,
    u = e.exclude ?? l.exclude,
    s = e.sort ?? l.sort,
    c = pc(n, i, u)
  return a.createElement(Oc, { rows: c, sort: s })
}
function y8(e, t = 'start') {
  e.scrollIntoView({ behavior: 'smooth', block: t, inline: 'nearest' })
}
function b8(e, t) {
  let r = No([e], t)
  return r && r[0]
}
function No(e, t) {
  let [r, n] = C.useState({})
  return (
    C.useEffect(() => {
      Promise.all(
        e.map(async o => {
          let l = await t.loadStory(o)
          n(i => (i[o] === l ? i : { ...i, [o]: l }))
        })
      )
    }),
    e.map(o => {
      if (r[o]) return r[o]
      try {
        return t.storyById(o)
      } catch {
        return null
      }
    })
  )
}
function Rc(e) {
  return Nv(e)
}
var Fc = C.createContext({ sources: {} }),
  Dc = '--unknown--',
  v8 = ({ children: e, channel: t }) => {
    let [r, n] = C.useState({})
    return (
      C.useEffect(() => {
        let o = (l, i = null, u = !1) => {
          let {
              id: s,
              args: c = void 0,
              source: d,
              format: g
            } = typeof l == 'string' ? { id: l, source: i, format: u } : l,
            h = c ? Rc(c) : Dc
          n(p => ({ ...p, [s]: { ...p[s], [h]: { code: d, format: g } } }))
        }
        return t.on(Yo, o), () => t.off(Yo, o)
      }, []),
      a.createElement(Fc.Provider, { value: { sources: r } }, e)
    )
  },
  E8 = (e => ((e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e))(E8 || {}),
  x8 = e => {
    let t = e
      .map(r => {
        var n, o
        return (o = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : o.state
      })
      .filter(Boolean)
    return t.length === 0 ? 'closed' : t[0]
  },
  A8 = (e, t, r) => {
    let { sources: n } = r,
      o = n == null ? void 0 : n[e]
    return (o == null ? void 0 : o[Rc(t)]) || (o == null ? void 0 : o[Dc]) || { code: '' }
  },
  w8 = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
    var s, c, d, g, h, p
    let { __isArgsStory: o } = t.parameters,
      l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {},
      i = r || l.type || $n.AUTO
    if (l.code !== void 0) return l.code
    let u = i === $n.DYNAMIC || (i === $n.AUTO && e && o) ? e : l.originalSource || ''
    return (
      l.transformSource &&
        de(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (c = t.parameters.docs) != null &&
        c.transformSource &&
        de(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (d = t.parameters.jsx) != null &&
        d.transformSource &&
        de(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      ((p =
        n ??
        l.transform ??
        l.transformSource ??
        ((g = t.parameters.docs) == null ? void 0 : g.transformSource) ??
        ((h = t.parameters.jsx) == null ? void 0 : h.transformSource)) == null
        ? void 0
        : p(u, t)) || u
    )
  },
  Lc = (e, t, r) => {
    var p, m, f
    let n = e.ids || (e.id ? [e.id] : []),
      o = No(n, t),
      l = o,
      { of: i } = e
    if ('of' in e && i === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    if (i) l = [t.resolveOf(i, ['story']).story]
    else if (l.length === 0)
      try {
        l = [t.storyById()]
      } catch {}
    if (!o.every(Boolean)) return { error: 'Oh no! The source is not available.', state: 'none' }
    let u =
        ((f = (m = (p = l[0]) == null ? void 0 : p.parameters) == null ? void 0 : m.docs) == null
          ? void 0
          : f.source) || {},
      { code: s } = e,
      c = e.format ?? u.format,
      d = e.language ?? u.language ?? 'jsx',
      g = e.dark ?? u.dark ?? !1
    s ||
      (s = l.map((E, b) => {
        var A, w
        if (!E) return ''
        let x = t.getStoryContext(E),
          y = e.__forceInitialArgs ? x.initialArgs : x.unmappedArgs,
          v = A8(E.id, y, r)
        return (
          b === 0 &&
            (c =
              v.format ??
              ((w = (A = E.parameters.docs) == null ? void 0 : A.source) == null ? void 0 : w.format) ??
              !1),
          w8({
            snippet: v.code,
            storyContext: { ...x, args: y },
            typeFromProps: e.type,
            transformFromProps: e.transform
          })
        )
      }).join(`

`))
    let h = x8(l)
    return s
      ? { code: s, format: c, language: d, dark: g, state: h }
      : { error: 'Oh no! The source is not available.', state: h }
  },
  Mc = (e, t) => {
    let { id: r, of: n, meta: o, story: l } = e
    if ('of' in e && n === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    if (r)
      return (
        de(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      )
    let { name: i } = e
    return i
      ? (de(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (l &&
          de(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        o && t.referenceMeta(o, !1),
        t.resolveOf(n || l || 'story', ['story']).story.id)
  },
  C8 = (e, t, r) => {
    let { parameters: n = {} } = t || {},
      { docs: o = {} } = n,
      l = o.story || {}
    if (o.disable) return null
    let { inlineStories: i, iframeHeight: u } = o
    typeof i < 'u' &&
      de(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `)
    let s = e.inline ?? l.inline ?? i ?? !1
    if (
      (typeof u < 'u' &&
        de(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
    ) {
      let d = e.height ?? l.height,
        g = e.autoplay ?? l.autoplay ?? !1
      return {
        story: t,
        inline: !0,
        height: d,
        autoplay: g,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement
      }
    }
    let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? '100px'
    return { story: t, inline: !1, height: c, primary: !!e.__primary }
  },
  S8 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    let t = C.useContext(Se),
      r = Mc(e, t),
      n = b8(r, t)
    if (!n) return a.createElement(Io, null)
    let o = C8(e, n, t)
    return o ? a.createElement(m6, { ...o }) : null
  },
  k8 = ({ withSource: e, mdxSource: t, children: r, layout: n, ...o }, l, i) => {
    let u = C.Children.toArray(r)
        .filter(h => h.props && (h.props.id || h.props.name || h.props.of))
        .map(h => Mc(h.props, l)),
      s = No(u, l),
      c = s.some(h => !h),
      d = Lc({ ...(t ? { code: decodeURI(t) } : { ids: u }), ...(o.of && { of: o.of }) }, l, i)
    if (e === 'none') return { isLoading: c, previewProps: o }
    let g = n
    return (
      C.Children.forEach(r, h => {
        var p, m
        g || (g = (m = (p = h == null ? void 0 : h.props) == null ? void 0 : p.parameters) == null ? void 0 : m.layout)
      }),
      s.forEach(h => {
        var p, m
        g ||
          !h ||
          (g =
            (h == null ? void 0 : h.parameters.layout) ??
            ((m = (p = h.parameters.docs) == null ? void 0 : p.canvas) == null ? void 0 : m.layout))
      }),
      {
        isLoading: c,
        previewProps: { ...o, layout: g ?? 'padded', withSource: d, isExpanded: (e || d.state) === 'open' }
      }
    )
  },
  _8 = e => {
    var E, b, x, y, v, A, w, k, S, O
    let t = C.useContext(Se),
      r = C.useContext(Fc),
      { children: n, of: o, source: l } = e
    if ('of' in e && o === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    let { isLoading: i, previewProps: u } = k8(e, t, r),
      s,
      c,
      d
    try {
      ;({ story: s } = Fr(o || 'story', ['story']))
    } catch (T) {
      n || (d = T)
    }
    try {
      c = Lc({ ...l, ...(o && { of: o }) }, t, r)
    } catch (T) {
      n || (d = T)
    }
    if (d) throw d
    if (
      (e.withSource &&
        de(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        de(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        de(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        de(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? a.createElement(A6, null) : a.createElement(Ra, { ...u }, n)
      )
    let g =
        e.layout ??
        s.parameters.layout ??
        ((b = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null ? void 0 : b.layout) ??
        'padded',
      h =
        e.withToolbar ??
        ((y = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null ? void 0 : y.withToolbar) ??
        !1,
      p =
        e.additionalActions ??
        ((A = (v = s.parameters.docs) == null ? void 0 : v.canvas) == null ? void 0 : A.additionalActions),
      m =
        e.sourceState ??
        ((k = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null ? void 0 : k.sourceState) ??
        'hidden',
      f = e.className ?? ((O = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : O.className)
    return a.createElement(
      Ra,
      {
        withSource: m === 'none' ? void 0 : c,
        isExpanded: m === 'shown',
        withToolbar: h,
        additionalActions: p,
        className: f,
        layout: g
      },
      a.createElement(S8, { of: o || s.moduleExport, meta: e.meta, ...e.story })
    )
  },
  O8 = (e, t) => {
    let r = t.getStoryContext(e),
      [n, o] = C.useState(r.globals)
    return (
      C.useEffect(() => {
        let l = i => {
          o(i.globals)
        }
        return t.channel.on(yi, l), () => t.channel.off(yi, l)
      }, [t.channel]),
      [n]
    )
  },
  T8 = (e, t) => {
    let r = R8(e, t)
    if (!r) throw new Error('No result when story was defined')
    return r
  },
  R8 = (e, t) => {
    let r = e ? t.getStoryContext(e) : { args: {} },
      { id: n } = e || { id: 'none' },
      [o, l] = C.useState(r.args)
    C.useEffect(() => {
      let s = c => {
        c.storyId === n && l(c.args)
      }
      return t.channel.on(hi, s), () => t.channel.off(hi, s)
    }, [n, t.channel])
    let i = C.useCallback(s => t.channel.emit(Wv, { storyId: n, updatedArgs: s }), [n, t.channel]),
      u = C.useCallback(s => t.channel.emit(Gv, { storyId: n, argNames: s }), [n, t.channel])
    return e && [o, i, u]
  },
  F8 = e => {
    var f
    let { of: t } = e
    if ('of' in e && t === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    let r = C.useContext(Se),
      { story: n } = r.resolveOf(t || 'story', ['story']),
      { parameters: o, argTypes: l } = n,
      i = ((f = o.docs) == null ? void 0 : f.controls) || {},
      u = e.include ?? i.include,
      s = e.exclude ?? i.exclude,
      c = e.sort ?? i.sort,
      [d, g, h] = T8(n, r),
      [p] = O8(n, r),
      m = pc(l, u, s)
    return a.createElement(Oc, { rows: m, args: d, globals: p, updateArgs: g, resetArgs: h, sort: c })
  },
  { document: Bc } = De,
  D8 = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g))) return a.createElement(mo, null, t)
    let n = e && e.split('-')
    return a.createElement(Bo, { language: (n && n[1]) || 'plaintext', format: !1, code: t, ...r })
  }
function Zo(e, t) {
  e.channel.emit(Yv, t)
}
var Ma = Su.a,
  L8 = ({ hash: e, children: t }) => {
    let r = C.useContext(Se)
    return a.createElement(
      Ma,
      {
        href: e,
        target: '_self',
        onClick: n => {
          let o = e.substring(1)
          Bc.getElementById(o) && Zo(r, e)
        }
      },
      t
    )
  },
  M8 = e => {
    let { href: t, target: r, children: n, ...o } = e,
      l = C.useContext(Se)
    if (t) {
      if (t.startsWith('#')) return a.createElement(L8, { hash: t }, n)
      if (r !== '_blank' && !t.startsWith('https://'))
        return a.createElement(
          Ma,
          {
            href: t,
            onClick: i => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(), Zo(l, i.currentTarget.getAttribute('href')))
            },
            target: r,
            ...o
          },
          n
        )
    }
    return a.createElement(Ma, { ...e })
  },
  $c = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  B8 = $c.reduce(
    (e, t) => ({
      ...e,
      [t]: _(t)({
        '& svg': { position: 'relative', top: '-0.1em', visibility: 'hidden' },
        '&:hover svg': { visibility: 'visible' }
      })
    }),
    {}
  ),
  $8 = _.a(() => ({
    float: 'left',
    lineHeight: 'inherit',
    paddingRight: '10px',
    marginLeft: '-24px',
    color: 'inherit'
  })),
  I8 = ({ as: e, id: t, children: r, ...n }) => {
    let o = C.useContext(Se),
      l = B8[e],
      i = `#${t}`
    return a.createElement(
      l,
      { id: t, ...n },
      a.createElement(
        $8,
        {
          'aria-hidden': 'true',
          href: i,
          tabIndex: -1,
          target: '_self',
          onClick: u => {
            Bc.getElementById(t) && Zo(o, i)
          }
        },
        a.createElement(be, { icon: 'link' })
      ),
      r
    )
  },
  Po = e => {
    let { as: t, id: r, children: n, ...o } = e
    if (r) return a.createElement(I8, { as: t, id: r, ...o }, n)
    let l = t,
      { as: i, ...u } = e
    return a.createElement(l, { ...Q(u, t) })
  },
  j8 = $c.reduce((e, t) => ({ ...e, [t]: r => a.createElement(Po, { as: t, ...r }) }), {}),
  H8 = e => {
    var t
    if (!e.children) return null
    if (typeof e.children != 'string')
      throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
    return a.createElement(Ju, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: { code: D8, a: M8, ...j8, ...((t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides) },
        ...(e == null ? void 0 : e.options)
      }
    })
  },
  N8 = (e => ((e.INFO = 'info'), (e.NOTES = 'notes'), (e.DOCGEN = 'docgen'), (e.AUTO = 'auto'), e))(N8 || {}),
  Qr =
    'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
  Z8 = e => e && (typeof e == 'string' ? e : da(e.markdown) || da(e.text)),
  P8 = e => e && (typeof e == 'string' ? e : da(e.text)),
  V8 = e => null,
  q8 = e => {
    var t, r, n, o, l, i, u, s
    switch (e.type) {
      case 'story':
        return ((r = (t = e.story.parameters.docs) == null ? void 0 : t.description) == null ? void 0 : r.story) || null
      case 'meta': {
        let { parameters: c, component: d } = e.preparedMeta
        return (
          ((o = (n = c.docs) == null ? void 0 : n.description) == null ? void 0 : o.component) ||
          ((i = (l = c.docs) == null ? void 0 : l.extractComponentDescription) == null
            ? void 0
            : i.call(l, d, { component: d, parameters: c })) ||
          null
        )
      }
      case 'component': {
        let {
          component: c,
          projectAnnotations: { parameters: d }
        } = e
        return (
          ((s = (u = d.docs) == null ? void 0 : u.extractComponentDescription) == null
            ? void 0
            : s.call(u, c, { component: c, parameters: d })) || null
        )
      }
      default:
        throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`)
    }
  },
  z8 = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
    let { component: o, parameters: l } = n()
    if (r || t) return r || t
    let { notes: i, info: u, docs: s } = l
    ;(i || u) &&
      de(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Qr}`)
    let { extractComponentDescription: c = V8, description: d } = s || {},
      g = d == null ? void 0 : d.component
    if (g) return g
    switch (e) {
      case 'info':
        return P8(u)
      case 'notes':
        return Z8(i)
      case 'docgen':
      case 'auto':
      default:
        return c(o, { component: o, ...l })
    }
  },
  Ba = e => {
    let { of: t, type: r, markdown: n, children: o } = e
    if ('of' in e && t === void 0) throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    let l = C.useContext(Se),
      i = Fr(t || 'meta'),
      u
    return (
      r || n || o ? (u = z8(e, l)) : (u = q8(i)),
      r && de(`Manually specifying description type is deprecated. See ${Qr}`),
      n && de(`The 'markdown' prop on the Description block is deprecated. See ${Qr}`),
      o && de(`The 'children' prop on the Description block is deprecated. See ${Qr}`),
      u ? a.createElement(H8, null, u) : null
    )
  },
  U8 = _.div(({ theme: e }) => ({ width: '10rem', '@media (max-width: 768px)': { display: 'none' } })),
  W8 = _.div(({ theme: e }) => ({
    position: 'fixed',
    top: 0,
    width: '10rem',
    paddingTop: '4rem',
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
    '& *': { boxSizing: 'border-box' },
    '& > .toc-wrapper > .toc-list': {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      '.toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` }
      }
    },
    '& .toc-list-item': {
      position: 'relative',
      listStyleType: 'none',
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3
    },
    '& .toc-list-item::before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      transform: 'translateX(calc(-2px - 20px))',
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: 'opacity 0.2s'
    },
    '& .toc-list-item.is-active-li::before': { opacity: 1 },
    '& .toc-list-item > a': { color: e.color.defaultText, textDecoration: 'none' },
    '& .toc-list-item.is-active-li > a': { fontWeight: 600, color: e.color.secondary, textDecoration: 'none' }
  })),
  G8 = _.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: '0.875em',
    color: e.textColor,
    textTransform: 'uppercase',
    marginBottom: 10
  })),
  Y8 = ({ title: e }) => (e === null ? null : typeof e == 'string' ? a.createElement(G8, null, e) : e),
  K8 = ({
    title: e,
    disable: t,
    headingSelector: r,
    contentsSelector: n,
    ignoreSelector: o,
    unsafeTocbotOptions: l
  }) => (
    C.useEffect(() => {
      let i = {
          tocSelector: '.toc-wrapper',
          contentSelector: n ?? '.sbdocs-content',
          headingSelector: r ?? 'h3',
          ignoreSelector: o ?? '.skip-toc',
          headingsOffset: 40,
          scrollSmoothOffset: -40,
          orderedList: !1,
          onClick: () => !1,
          ...l
        },
        u = setTimeout(() => gi.init(i), 100)
      return () => {
        clearTimeout(u), gi.destroy()
      }
    }, [t]),
    a.createElement(
      a.Fragment,
      null,
      a.createElement(
        U8,
        null,
        t
          ? null
          : a.createElement(
              W8,
              null,
              a.createElement(Y8, { title: e || null }),
              a.createElement('div', { className: 'toc-wrapper' })
            )
      )
    )
  ),
  { document: J8, window: X8 } = De,
  Q8 = ({ context: e, theme: t, children: r }) => {
    var o, l, i, u, s
    let n
    try {
      n =
        (l = (o = e.resolveOf('meta', ['meta']).preparedMeta.parameters) == null ? void 0 : o.docs) == null
          ? void 0
          : l.toc
    } catch {
      n =
        (s =
          (u = (i = e == null ? void 0 : e.projectAnnotations) == null ? void 0 : i.parameters) == null
            ? void 0
            : u.docs) == null
          ? void 0
          : s.toc
    }
    return (
      C.useEffect(() => {
        let c
        try {
          if (((c = new URL(X8.parent.location.toString())), c.hash)) {
            let d = J8.getElementById(c.hash.substring(1))
            d &&
              setTimeout(() => {
                y8(d)
              }, 200)
          }
        } catch {}
      }),
      a.createElement(
        Se.Provider,
        { value: e },
        a.createElement(
          v8,
          { channel: e.channel },
          a.createElement(
            ns,
            { theme: V1(t) },
            a.createElement(
              a6,
              { toc: n ? a.createElement(K8, { className: 'sbdocs sbdocs-toc--custom', ...n }) : null },
              r
            )
          )
        )
      )
    )
  },
  ex = /\s*\/\s*/,
  tx = e => {
    let t = e.trim().split(ex)
    return (t && t[t.length - 1]) || e
  },
  rx = ({ children: e }) => {
    let t = C.useContext(Se),
      r = e || tx(t.storyById().title)
    return r ? a.createElement(e6, { className: 'sbdocs-title sb-unstyled' }, r) : null
  },
  nx = ({ children: e }) => {
    let t = C.useContext(Se),
      { parameters: r } = t.storyById(),
      n = e || (r == null ? void 0 : r.componentSubtitle)
    return n ? a.createElement(t6, { className: 'sbdocs-subtitle sb-unstyled' }, n) : null
  },
  ax = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e != 'string') return a.createElement(ho, null, e)
    let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
    return a.createElement(Po, { as: 'h3', id: r }, e)
  },
  Ic = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
    var u, s
    let { story: l } = Fr(e || 'story', ['story']),
      i = ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null ? void 0 : s.withToolbar) ?? r
    return a.createElement(
      Tc,
      { storyId: l.id },
      t && a.createElement(a.Fragment, null, a.createElement(ax, null, l.name), a.createElement(Ba, { of: e })),
      a.createElement(_8, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: n, __primary: o },
        source: { __forceInitialArgs: n }
      })
    )
  },
  ox = ({ name: e }) => {
    let t = C.useContext(Se)
    e &&
      de(xe`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `)
    let r = e && t.storyIdByName(e),
      n = t.storyById(r)
    return n ? a.createElement(Ic, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null
  },
  lx = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e != 'string') return a.createElement(go, null, e)
    let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
    return a.createElement(Po, { as: 'h2', id: n, ...r }, e)
  },
  ix = _(lx)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: '16px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: e.textMutedColor,
    border: 0,
    marginBottom: '12px',
    '&:first-of-type': { marginTop: '56px' }
  })),
  jc = ({ title: e, includePrimary: t = !0 }) => {
    let { componentStories: r } = C.useContext(Se),
      n = r().filter(o => {
        var l, i
        return !((i = (l = o.parameters) == null ? void 0 : l.docs) != null && i.disable)
      })
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : a.createElement(
            a.Fragment,
            null,
            a.createElement(ix, null, e),
            n.map(
              o => o && a.createElement(Ic, { key: o.id, of: o.moduleExport, expanded: !0, __forceInitialArgs: !0 })
            )
          )
    )
  }
jc.defaultProps = { title: 'Stories' }
var sx = () => {
  let e = Fr('meta', ['meta']),
    { stories: t } = e.csfFile,
    r = Object.keys(t).length === 1
  return a.createElement(
    a.Fragment,
    null,
    a.createElement(rx, null),
    a.createElement(nx, null),
    a.createElement(Ba, { of: 'meta' }),
    r ? a.createElement(Ba, { of: 'story' }) : null,
    a.createElement(ox, null),
    a.createElement(F8, null),
    r ? null : a.createElement(jc, null)
  )
}
function xx({ context: e, docsParameter: t }) {
  let r = t.container || Q8,
    n = t.page || sx
  return a.createElement(r, { context: e, theme: t.theme }, a.createElement(n, null))
}
var Ax = ({ of: e }) => {
  let t = C.useContext(Se)
  e && t.referenceMeta(e, !0)
  try {
    let r = t.storyById()
    return a.createElement(Tc, { storyId: r.id })
  } catch {
    return null
  }
}
export {
  M8 as A,
  D8 as C,
  xx as D,
  He as F,
  f1 as G,
  j8 as H,
  be as I,
  Ax as M,
  ro as S,
  Kf as T,
  r5 as W,
  Oe as _,
  $s as a,
  Z as b,
  ws as c,
  _8 as d,
  Ex as e,
  F8 as f,
  Pf as g,
  Ne as h,
  Dt as m,
  _ as n,
  hx as s
}
//# sourceMappingURL=index-01c745a6.js.map
