import {
  r as $t,
  h as Ft,
  i as Ot,
  j as jt,
  k as Vt,
  s as St,
  c as zt,
  _ as B,
  l as gt,
  a as N,
  m as st,
  g as me,
  n as yt,
  w as bt,
  C as xt,
  o as qt,
  u as It,
  b as Gt,
  P as Dt
} from './CSSMotionList-d86c2cd4.js'
import { c as rr } from './index-2d278ef6.js'
import { _ as dt } from './isNativeReflectConstruct-60b6c4ab.js'
import { r as a, R as pt } from './index-f1f2c4b1.js'
import { u as Ut } from './useId-e95616b2.js'
import { r as Kt } from './index-c74c9f7f.js'
function Ve(e) {
  var t = a.useRef()
  t.current = e
  var r = a.useCallback(function () {
    for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o))
  }, [])
  return r
}
const Jt = function () {
  if (typeof navigator > 'u' || typeof window > 'u') return !1
  var e = navigator.userAgent || navigator.vendor || window.opera
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  )
}
function ut(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = []
  return (
    pt.Children.forEach(e, function (n) {
      ;(n == null && !t.keepEmpty) ||
        (Array.isArray(n)
          ? (r = r.concat(ut(n)))
          : $t.isFragment(n) && n.props
          ? (r = r.concat(ut(n.props.children, t)))
          : r.push(n))
    }),
    r
  )
}
var Tt = (function () {
    if (typeof Map < 'u') return Map
    function e(t, r) {
      var n = -1
      return (
        t.some(function (i, o) {
          return i[0] === r ? ((n = o), !0) : !1
        }),
        n
      )
    }
    return (function () {
      function t() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.get = function (r) {
          var n = e(this.__entries__, r),
            i = this.__entries__[n]
          return i && i[1]
        }),
        (t.prototype.set = function (r, n) {
          var i = e(this.__entries__, r)
          ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([r, n])
        }),
        (t.prototype.delete = function (r) {
          var n = this.__entries__,
            i = e(n, r)
          ~i && n.splice(i, 1)
        }),
        (t.prototype.has = function (r) {
          return !!~e(this.__entries__, r)
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (t.prototype.forEach = function (r, n) {
          n === void 0 && (n = null)
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var s = o[i]
            r.call(n, s[1], s[0])
          }
        }),
        t
      )
    })()
  })(),
  ct = typeof window < 'u' && typeof document < 'u' && window.document === document,
  $r = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')()
  })(),
  Qt = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind($r)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now())
          }, 1e3 / 60)
        }
  })(),
  Zt = 2
function Yt(e, t) {
  var r = !1,
    n = !1,
    i = 0
  function o() {
    r && ((r = !1), e()), n && v()
  }
  function s() {
    Qt(o)
  }
  function v() {
    var l = Date.now()
    if (r) {
      if (l - i < Zt) return
      n = !0
    } else (r = !0), (n = !1), setTimeout(s, t)
    i = l
  }
  return v
}
var Xt = 20,
  en = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  rn = typeof MutationObserver < 'u',
  tn = (function () {
    function e() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Yt(this.refresh.bind(this), Xt))
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
      }),
      (e.prototype.removeObserver = function (t) {
        var r = this.observers_,
          n = r.indexOf(t)
        ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_()
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_()
        t && this.refresh()
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (r) {
          return r.gatherActive(), r.hasActive()
        })
        return (
          t.forEach(function (r) {
            return r.broadcastActive()
          }),
          t.length > 0
        )
      }),
      (e.prototype.connect_ = function () {
        !ct ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          rn
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh), (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (e.prototype.disconnect_ = function () {
        !ct ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var r = t.propertyName,
          n = r === void 0 ? '' : r,
          i = en.some(function (o) {
            return !!~n.indexOf(o)
          })
        i && this.refresh()
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_
      }),
      (e.instance_ = null),
      e
    )
  })(),
  Lt = function (e, t) {
    for (var r = 0, n = Object.keys(t); r < n.length; r++) {
      var i = n[r]
      Object.defineProperty(e, i, { value: t[i], enumerable: !1, writable: !1, configurable: !0 })
    }
    return e
  },
  tr = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView
    return t || $r
  },
  Nt = Or(0, 0, 0, 0)
function Fr(e) {
  return parseFloat(e) || 0
}
function wt(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
  return t.reduce(function (n, i) {
    var o = e['border-' + i + '-width']
    return n + Fr(o)
  }, 0)
}
function nn(e) {
  for (var t = ['top', 'right', 'bottom', 'left'], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n],
      s = e['padding-' + o]
    r[o] = Fr(s)
  }
  return r
}
function an(e) {
  var t = e.getBBox()
  return Or(0, 0, t.width, t.height)
}
function on(e) {
  var t = e.clientWidth,
    r = e.clientHeight
  if (!t && !r) return Nt
  var n = tr(e).getComputedStyle(e),
    i = nn(n),
    o = i.left + i.right,
    s = i.top + i.bottom,
    v = Fr(n.width),
    l = Fr(n.height)
  if (
    (n.boxSizing === 'border-box' &&
      (Math.round(v + o) !== t && (v -= wt(n, 'left', 'right') + o),
      Math.round(l + s) !== r && (l -= wt(n, 'top', 'bottom') + s)),
    !un(e))
  ) {
    var d = Math.round(v + o) - t,
      M = Math.round(l + s) - r
    Math.abs(d) !== 1 && (v -= d), Math.abs(M) !== 1 && (l -= M)
  }
  return Or(i.left, i.top, v, l)
}
var sn = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof tr(e).SVGGraphicsElement
      }
    : function (e) {
        return e instanceof tr(e).SVGElement && typeof e.getBBox == 'function'
      }
})()
function un(e) {
  return e === tr(e).document.documentElement
}
function cn(e) {
  return ct ? (sn(e) ? an(e) : on(e)) : Nt
}
function ln(e) {
  var t = e.x,
    r = e.y,
    n = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype)
  return Lt(s, { x: t, y: r, width: n, height: i, top: r, right: t + n, bottom: i + r, left: t }), s
}
function Or(e, t, r, n) {
  return { x: e, y: t, width: r, height: n }
}
var vn = (function () {
    function e(t) {
      ;(this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = Or(0, 0, 0, 0)), (this.target = t)
    }
    return (
      (e.prototype.isActive = function () {
        var t = cn(this.target)
        return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_
        return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
      }),
      e
    )
  })(),
  fn = (function () {
    function e(t, r) {
      var n = ln(r)
      Lt(this, { target: t, contentRect: n })
    }
    return e
  })(),
  dn = (function () {
    function e(t, r, n) {
      if (((this.activeObservations_ = []), (this.observations_ = new Tt()), typeof t != 'function'))
        throw new TypeError('The callback provided as parameter 1 is not a function.')
      ;(this.callback_ = t), (this.controller_ = r), (this.callbackCtx_ = n)
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof tr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
          var r = this.observations_
          r.has(t) || (r.set(t, new vn(t)), this.controller_.addObserver(this), this.controller_.refresh())
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof tr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
          var r = this.observations_
          r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this))
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
      }),
      (e.prototype.gatherActive = function () {
        var t = this
        this.clearActive(),
          this.observations_.forEach(function (r) {
            r.isActive() && t.activeObservations_.push(r)
          })
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            r = this.activeObservations_.map(function (n) {
              return new fn(n.target, n.broadcastRect())
            })
          this.callback_.call(t, r, t), this.clearActive()
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      e
    )
  })(),
  Wt = typeof WeakMap < 'u' ? new WeakMap() : new Tt(),
  At = (function () {
    function e(t) {
      if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
      var r = tn.getInstance(),
        n = new dn(t, r, this)
      Wt.set(this, n)
    }
    return e
  })()
;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  At.prototype[e] = function () {
    var t
    return (t = Wt.get(this))[e].apply(t, arguments)
  }
})
var hn = (function () {
    return typeof $r.ResizeObserver < 'u' ? $r.ResizeObserver : At
  })(),
  xe = new Map()
function mn(e) {
  e.forEach(function (t) {
    var r,
      n = t.target
    ;(r = xe.get(n)) === null ||
      r === void 0 ||
      r.forEach(function (i) {
        return i(n)
      })
  })
}
var Bt = new hn(mn)
function gn(e, t) {
  xe.has(e) || (xe.set(e, new Set()), Bt.observe(e)), xe.get(e).add(t)
}
function yn(e, t) {
  xe.has(e) && (xe.get(e).delete(t), xe.get(e).size || (Bt.unobserve(e), xe.delete(e)))
}
var bn = (function (e) {
    Ft(r, e)
    var t = Ot(r)
    function r() {
      return jt(this, r), t.apply(this, arguments)
    }
    return (
      Vt(r, [
        {
          key: 'render',
          value: function () {
            return this.props.children
          }
        }
      ]),
      r
    )
  })(a.Component),
  lt = a.createContext(null)
function wn(e) {
  var t = e.children,
    r = e.onBatchResize,
    n = a.useRef(0),
    i = a.useRef([]),
    o = a.useContext(lt),
    s = a.useCallback(
      function (v, l, d) {
        n.current += 1
        var M = n.current
        i.current.push({ size: v, element: l, data: d }),
          Promise.resolve().then(function () {
            M === n.current && (r == null || r(i.current), (i.current = []))
          }),
          o == null || o(v, l, d)
      },
      [r, o]
    )
  return a.createElement(lt.Provider, { value: s }, t)
}
function Cn(e, t) {
  var r = e.children,
    n = e.disabled,
    i = a.useRef(null),
    o = a.useRef(null),
    s = a.useContext(lt),
    v = typeof r == 'function',
    l = v ? r(i) : r,
    d = a.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    M = !v && a.isValidElement(l) && St(l),
    m = M ? l.ref : null,
    x = a.useMemo(
      function () {
        return zt(m, i)
      },
      [m, i]
    ),
    h = function () {
      return gt(i.current) || gt(o.current)
    }
  a.useImperativeHandle(t, function () {
    return h()
  })
  var E = a.useRef(e)
  E.current = e
  var D = a.useCallback(function (g) {
    var S = E.current,
      _ = S.onResize,
      C = S.data,
      c = g.getBoundingClientRect(),
      A = c.width,
      $ = c.height,
      H = g.offsetWidth,
      F = g.offsetHeight,
      Z = Math.floor(A),
      O = Math.floor($)
    if (
      d.current.width !== Z ||
      d.current.height !== O ||
      d.current.offsetWidth !== H ||
      d.current.offsetHeight !== F
    ) {
      var V = { width: Z, height: O, offsetWidth: H, offsetHeight: F }
      d.current = V
      var ee = H === Math.round(A) ? A : H,
        re = F === Math.round($) ? $ : F,
        I = B(B({}, V), {}, { offsetWidth: ee, offsetHeight: re })
      s == null || s(I, g, C),
        _ &&
          Promise.resolve().then(function () {
            _(I, g)
          })
    }
  }, [])
  return (
    a.useEffect(
      function () {
        var g = h()
        return (
          g && !n && gn(g, D),
          function () {
            return yn(g, D)
          }
        )
      },
      [i.current, n]
    ),
    a.createElement(bn, { ref: o }, M ? a.cloneElement(l, { ref: x }) : l)
  )
}
var Mn = a.forwardRef(Cn),
  _n = 'rc-observer-key'
function Rn(e, t) {
  var r = e.children,
    n = typeof r == 'function' ? [r] : ut(r)
  return n.map(function (i, o) {
    var s = (i == null ? void 0 : i.key) || ''.concat(_n, '-').concat(o)
    return a.createElement(Mn, dt({}, e, { key: s, ref: o === 0 ? t : void 0 }), i)
  })
}
var ht = a.forwardRef(Rn)
ht.Collection = wn
function Ht(e) {
  var t
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
}
function En(e) {
  return Ht(e) instanceof ShadowRoot
}
function vt(e) {
  return En(e) ? Ht(e) : null
}
var Ct = a.createContext(null)
function Mt(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
function kn(e, t, r, n) {
  return a.useMemo(
    function () {
      var i = Mt(r ?? t),
        o = Mt(n ?? t),
        s = new Set(i),
        v = new Set(o)
      return (
        e &&
          (s.has('hover') && (s.delete('hover'), s.add('click')),
          v.has('hover') && (v.delete('hover'), v.add('click'))),
        [s, v]
      )
    },
    [e, t, r, n]
  )
}
const Pn = function (e) {
  if (!e) return !1
  if (e instanceof Element) {
    if (e.offsetParent) return !0
    if (e.getBBox) {
      var t = e.getBBox(),
        r = t.width,
        n = t.height
      if (r || n) return !0
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect(),
        o = i.width,
        s = i.height
      if (o || s) return !0
    }
  }
  return !1
}
function Sn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = arguments.length > 2 ? arguments[2] : void 0
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function zn(e, t, r, n) {
  for (var i = r.points, o = Object.keys(e), s = 0; s < o.length; s += 1) {
    var v,
      l = o[s]
    if (Sn((v = e[l]) === null || v === void 0 ? void 0 : v.points, i, n)) return ''.concat(t, '-placement-').concat(l)
  }
  return ''
}
function _t(e, t, r, n) {
  return t || (r ? { motionName: ''.concat(e, '-').concat(r) } : n ? { motionName: n } : null)
}
function yr(e) {
  return e.ownerDocument.defaultView
}
function ft(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ['hidden', 'scroll', 'clip', 'auto']; r; ) {
    var i = yr(r).getComputedStyle(r),
      o = i.overflowX,
      s = i.overflowY,
      v = i.overflow
    ;[o, s, v].some(function (l) {
      return n.includes(l)
    }) && t.push(r),
      (r = r.parentElement)
  }
  return t
}
function gr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  return Number.isNaN(e) ? t : e
}
function mr(e) {
  return gr(parseFloat(e), 0)
}
function Rt(e, t) {
  var r = B({}, e)
  return (
    (t || []).forEach(function (n) {
      if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
        var i = yr(n).getComputedStyle(n),
          o = i.overflow,
          s = i.overflowClipMargin,
          v = i.borderTopWidth,
          l = i.borderBottomWidth,
          d = i.borderLeftWidth,
          M = i.borderRightWidth,
          m = n.getBoundingClientRect(),
          x = n.offsetHeight,
          h = n.clientHeight,
          E = n.offsetWidth,
          D = n.clientWidth,
          g = mr(v),
          S = mr(l),
          _ = mr(d),
          C = mr(M),
          c = gr(Math.round((m.width / E) * 1e3) / 1e3),
          A = gr(Math.round((m.height / x) * 1e3) / 1e3),
          $ = (E - D - _ - C) * c,
          H = (x - h - g - S) * A,
          F = g * A,
          Z = S * A,
          O = _ * c,
          V = C * c,
          ee = 0,
          re = 0
        if (o === 'clip') {
          var I = mr(s)
          ;(ee = I * c), (re = I * A)
        }
        var q = m.x + O - ee,
          T = m.y + F - re,
          y = q + m.width + 2 * ee - O - V - $,
          G = T + m.height + 2 * re - F - Z - H
        ;(r.left = Math.max(r.left, q)),
          (r.top = Math.max(r.top, T)),
          (r.right = Math.min(r.right, y)),
          (r.bottom = Math.min(r.bottom, G))
      }
    }),
    r
  )
}
function Et(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = ''.concat(t),
    n = r.match(/^(.*)\%$/)
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r)
}
function kt(e, t) {
  var r = t || [],
    n = N(r, 2),
    i = n[0],
    o = n[1]
  return [Et(e.width, i), Et(e.height, o)]
}
function Pt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  return [e[0], e[1]]
}
function er(e, t) {
  var r = t[0],
    n = t[1],
    i,
    o
  return (
    r === 't' ? (o = e.y) : r === 'b' ? (o = e.y + e.height) : (o = e.y + e.height / 2),
    n === 'l' ? (i = e.x) : n === 'r' ? (i = e.x + e.width) : (i = e.x + e.width / 2),
    { x: i, y: o }
  )
}
function ze(e, t) {
  var r = { t: 'b', b: 't', l: 'r', r: 'l' }
  return e
    .map(function (n, i) {
      return i === t ? r[n] || 'c' : n
    })
    .join('')
}
function xn(e, t, r, n, i, o, s) {
  var v = a.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: i[n] || {}
    }),
    l = N(v, 2),
    d = l[0],
    M = l[1],
    m = a.useRef(0),
    x = a.useMemo(
      function () {
        return t ? ft(t) : []
      },
      [t]
    ),
    h = a.useRef({}),
    E = function () {
      h.current = {}
    }
  e || E()
  var D = Ve(function () {
      if (t && r && e) {
        let X = function (Wr, je) {
            var Se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke,
              hr = R.x + Wr,
              Xe = R.y + je,
              Ar = hr + W,
              tt = Xe + j,
              nt = Math.max(hr, Se.left),
              it = Math.max(Xe, Se.top),
              at = Math.min(Ar, Se.right),
              u = Math.min(tt, Se.bottom)
            return Math.max(0, (at - nt) * (u - it))
          },
          _e = function () {
            ;(Ce = R.y + w), (Le = Ce + j), (Ne = R.x + z), (We = Ne + W)
          }
        var _,
          C,
          c = t,
          A = c.ownerDocument,
          $ = yr(c),
          H = $.getComputedStyle(c),
          F = H.width,
          Z = H.height,
          O = H.position,
          V = c.style.left,
          ee = c.style.top,
          re = c.style.right,
          I = c.style.bottom,
          q = B(B({}, i[n]), o),
          T = A.createElement('div')
        ;(_ = c.parentElement) === null || _ === void 0 || _.appendChild(T),
          (T.style.left = ''.concat(c.offsetLeft, 'px')),
          (T.style.top = ''.concat(c.offsetTop, 'px')),
          (T.style.position = O),
          (T.style.height = ''.concat(c.offsetHeight, 'px')),
          (T.style.width = ''.concat(c.offsetWidth, 'px')),
          (c.style.left = '0'),
          (c.style.top = '0'),
          (c.style.right = 'auto'),
          (c.style.bottom = 'auto')
        var y
        if (Array.isArray(r)) y = { x: r[0], y: r[1], width: 0, height: 0 }
        else {
          var G = r.getBoundingClientRect()
          y = { x: G.x, y: G.y, width: G.width, height: G.height }
        }
        var R = c.getBoundingClientRect(),
          p = A.documentElement,
          nr = p.clientWidth,
          te = p.clientHeight,
          ir = p.scrollWidth,
          qe = p.scrollHeight,
          ce = p.scrollTop,
          Ie = p.scrollLeft,
          j = R.height,
          W = R.width,
          ne = y.height,
          le = y.width,
          Ge = { left: 0, top: 0, right: nr, bottom: te },
          pe = { left: -Ie, top: -ce, right: ir - Ie, bottom: qe - ce },
          ge = q.htmlRegion,
          U = 'visible',
          Ue = 'visibleFirst'
        ge !== 'scroll' && ge !== Ue && (ge = U)
        var ie = ge === Ue,
          ye = Rt(pe, x),
          b = Rt(Ge, x),
          Ke = ge === U ? b : ye,
          be = ie ? b : Ke
        ;(c.style.left = 'auto'), (c.style.top = 'auto'), (c.style.right = '0'), (c.style.bottom = '0')
        var ve = c.getBoundingClientRect()
        ;(c.style.left = V),
          (c.style.top = ee),
          (c.style.right = re),
          (c.style.bottom = I),
          (C = c.parentElement) === null || C === void 0 || C.removeChild(T)
        var De = gr(Math.round((W / parseFloat(F)) * 1e3) / 1e3),
          Te = gr(Math.round((j / parseFloat(Z)) * 1e3) / 1e3)
        if (De === 0 || Te === 0 || (st(r) && !Pn(r))) return
        var jr = q.offset,
          br = q.targetOffset,
          ae = kt(R, jr),
          wr = N(ae, 2),
          oe = wr[0],
          se = wr[1],
          Cr = kt(y, br),
          ue = N(Cr, 2),
          Vr = ue[0],
          qr = ue[1]
        ;(y.x -= Vr), (y.y -= qr)
        var Je = q.points || [],
          K = N(Je, 2),
          Re = K[0],
          Ir = K[1],
          we = Pt(Ir),
          J = Pt(Re),
          Mr = er(y, we),
          ar = er(R, J),
          Ee = B({}, q),
          z = Mr.x - ar.x + oe,
          w = Mr.y - ar.y + se,
          fe = X(z, w),
          de = X(z, w, b),
          or = er(y, ['t', 'l']),
          sr = er(R, ['t', 'l']),
          ur = er(y, ['b', 'r']),
          Y = er(R, ['b', 'r']),
          Qe = q.overflow || {},
          _r = Qe.adjustX,
          cr = Qe.adjustY,
          lr = Qe.shiftX,
          Rr = Qe.shiftY,
          vr = function (je) {
            return typeof je == 'boolean' ? je : je >= 0
          },
          Ce,
          Le,
          Ne,
          We
        _e()
        var fr = vr(cr),
          Er = J[0] === we[0]
        if (fr && J[0] === 't' && (Le > be.bottom || h.current.bt)) {
          var he = w
          Er ? (he -= j - ne) : (he = or.y - Y.y - se)
          var kr = X(z, he),
            Q = X(z, he, b)
          kr > fe || (kr === fe && (!ie || Q >= de))
            ? ((h.current.bt = !0), (w = he), (se = -se), (Ee.points = [ze(J, 0), ze(we, 0)]))
            : (h.current.bt = !1)
        }
        if (fr && J[0] === 'b' && (Ce < be.top || h.current.tb)) {
          var Ae = w
          Er ? (Ae += j - ne) : (Ae = ur.y - sr.y - se)
          var Pr = X(z, Ae),
            Gr = X(z, Ae, b)
          Pr > fe || (Pr === fe && (!ie || Gr >= de))
            ? ((h.current.tb = !0), (w = Ae), (se = -se), (Ee.points = [ze(J, 0), ze(we, 0)]))
            : (h.current.tb = !1)
        }
        var Sr = vr(_r),
          zr = J[1] === we[1]
        if (Sr && J[1] === 'l' && (We > be.right || h.current.rl)) {
          var Be = z
          zr ? (Be -= W - le) : (Be = or.x - Y.x - oe)
          var xr = X(Be, w),
            pr = X(Be, w, b)
          xr > fe || (xr === fe && (!ie || pr >= de))
            ? ((h.current.rl = !0), (z = Be), (oe = -oe), (Ee.points = [ze(J, 1), ze(we, 1)]))
            : (h.current.rl = !1)
        }
        if (Sr && J[1] === 'r' && (Ne < be.left || h.current.lr)) {
          var He = z
          zr ? (He += W - le) : (He = ur.x - sr.x - oe)
          var $e = X(He, w),
            dr = X(He, w, b)
          $e > fe || ($e === fe && (!ie || dr >= de))
            ? ((h.current.lr = !0), (z = He), (oe = -oe), (Ee.points = [ze(J, 1), ze(we, 1)]))
            : (h.current.lr = !1)
        }
        _e()
        var Fe = lr === !0 ? 0 : lr
        typeof Fe == 'number' &&
          (Ne < b.left && ((z -= Ne - b.left - oe), y.x + le < b.left + Fe && (z += y.x - b.left + le - Fe)),
          We > b.right && ((z -= We - b.right - oe), y.x > b.right - Fe && (z += y.x - b.right + Fe)))
        var ke = Rr === !0 ? 0 : Rr
        typeof ke == 'number' &&
          (Ce < b.top && ((w -= Ce - b.top - se), y.y + ne < b.top + ke && (w += y.y - b.top + ne - ke)),
          Le > b.bottom && ((w -= Le - b.bottom - se), y.y > b.bottom - ke && (w += y.y - b.bottom + ke)))
        var Pe = R.x + z,
          Oe = Pe + W,
          Ze = R.y + w,
          Ye = Ze + j,
          Me = y.x,
          Ur = Me + le,
          Dr = y.y,
          Kr = Dr + ne,
          Tr = Math.max(Pe, Me),
          Jr = Math.min(Oe, Ur),
          Qr = (Tr + Jr) / 2,
          Zr = Qr - Pe,
          Lr = Math.max(Ze, Dr),
          Yr = Math.min(Ye, Kr),
          Xr = (Lr + Yr) / 2,
          Nr = Xr - Ze
        s == null || s(t, Ee)
        var et = ve.right - R.x - (z + R.width),
          rt = ve.bottom - R.y - (w + R.height)
        M({
          ready: !0,
          offsetX: z / De,
          offsetY: w / Te,
          offsetR: et / De,
          offsetB: rt / Te,
          arrowX: Zr / De,
          arrowY: Nr / Te,
          scaleX: De,
          scaleY: Te,
          align: Ee
        })
      }
    }),
    g = function () {
      m.current += 1
      var C = m.current
      Promise.resolve().then(function () {
        m.current === C && D()
      })
    },
    S = function () {
      M(function (C) {
        return B(B({}, C), {}, { ready: !1 })
      })
    }
  return (
    me(S, [n]),
    me(
      function () {
        e || S()
      },
      [e]
    ),
    [d.ready, d.offsetX, d.offsetY, d.offsetR, d.offsetB, d.arrowX, d.arrowY, d.scaleX, d.scaleY, d.align, g]
  )
}
function Dn(e, t, r, n, i) {
  me(
    function () {
      if (e && t && r) {
        let m = function () {
          n(), i()
        }
        var o = t,
          s = r,
          v = ft(o),
          l = ft(s),
          d = yr(s),
          M = new Set([d].concat(yt(v), yt(l)))
        return (
          M.forEach(function (x) {
            x.addEventListener('scroll', m, { passive: !0 })
          }),
          d.addEventListener('resize', m, { passive: !0 }),
          n(),
          function () {
            M.forEach(function (x) {
              x.removeEventListener('scroll', m), d.removeEventListener('resize', m)
            })
          }
        )
      }
    },
    [e, t, r]
  )
}
function Tn(e, t, r, n, i, o, s, v) {
  var l = a.useRef(e),
    d = a.useRef(!1)
  l.current !== e && ((d.current = !0), (l.current = e)),
    a.useEffect(
      function () {
        var M = bt(function () {
          d.current = !1
        })
        return function () {
          bt.cancel(M)
        }
      },
      [e]
    ),
    a.useEffect(
      function () {
        if (t && n && (!i || o)) {
          var M = function () {
              var $ = !1,
                H = function (O) {
                  var V = O.target
                  $ = s(V)
                },
                F = function (O) {
                  var V = O.target
                  !d.current && l.current && !$ && !s(V) && v(!1)
                }
              return [H, F]
            },
            m = M(),
            x = N(m, 2),
            h = x[0],
            E = x[1],
            D = M(),
            g = N(D, 2),
            S = g[0],
            _ = g[1],
            C = yr(n)
          C.addEventListener('mousedown', h, !0),
            C.addEventListener('click', E, !0),
            C.addEventListener('contextmenu', E, !0)
          var c = vt(r)
          return (
            c &&
              (c.addEventListener('mousedown', S, !0),
              c.addEventListener('click', _, !0),
              c.addEventListener('contextmenu', _, !0)),
            function () {
              C.removeEventListener('mousedown', h, !0),
                C.removeEventListener('click', E, !0),
                C.removeEventListener('contextmenu', E, !0),
                c &&
                  (c.removeEventListener('mousedown', S, !0),
                  c.removeEventListener('click', _, !0),
                  c.removeEventListener('contextmenu', _, !0))
            }
          )
        }
      },
      [t, r, n, i, o]
    )
}
function Ln(e) {
  var t = e.prefixCls,
    r = e.align,
    n = e.arrow,
    i = e.arrowPos,
    o = n || {},
    s = o.className,
    v = o.content,
    l = i.x,
    d = l === void 0 ? 0 : l,
    M = i.y,
    m = M === void 0 ? 0 : M,
    x = a.useRef()
  if (!r || !r.points) return null
  var h = { position: 'absolute' }
  if (r.autoArrow !== !1) {
    var E = r.points[0],
      D = r.points[1],
      g = E[0],
      S = E[1],
      _ = D[0],
      C = D[1]
    g === _ || !['t', 'b'].includes(g) ? (h.top = m) : g === 't' ? (h.top = 0) : (h.bottom = 0),
      S === C || !['l', 'r'].includes(S) ? (h.left = d) : S === 'l' ? (h.left = 0) : (h.right = 0)
  }
  return a.createElement('div', { ref: x, className: rr(''.concat(t, '-arrow'), s), style: h }, v)
}
function Nn(e) {
  var t = e.prefixCls,
    r = e.open,
    n = e.zIndex,
    i = e.mask,
    o = e.motion
  return i
    ? a.createElement(xt, dt({}, o, { motionAppear: !0, visible: r, removeOnLeave: !0 }), function (s) {
        var v = s.className
        return a.createElement('div', { style: { zIndex: n }, className: rr(''.concat(t, '-mask'), v) })
      })
    : null
}
var Wn = a.memo(
    function (e) {
      var t = e.children
      return t
    },
    function (e, t) {
      return t.cache
    }
  ),
  An = a.forwardRef(function (e, t) {
    var r = e.popup,
      n = e.className,
      i = e.prefixCls,
      o = e.style,
      s = e.target,
      v = e.onVisibleChanged,
      l = e.open,
      d = e.keepDom,
      M = e.fresh,
      m = e.onClick,
      x = e.mask,
      h = e.arrow,
      E = e.arrowPos,
      D = e.align,
      g = e.motion,
      S = e.maskMotion,
      _ = e.forceRender,
      C = e.getPopupContainer,
      c = e.autoDestroy,
      A = e.portal,
      $ = e.zIndex,
      H = e.onMouseEnter,
      F = e.onMouseLeave,
      Z = e.onPointerEnter,
      O = e.ready,
      V = e.offsetX,
      ee = e.offsetY,
      re = e.offsetR,
      I = e.offsetB,
      q = e.onAlign,
      T = e.onPrepare,
      y = e.stretch,
      G = e.targetWidth,
      R = e.targetHeight,
      p = typeof r == 'function' ? r() : r,
      nr = l || d,
      te = (C == null ? void 0 : C.length) > 0,
      ir = a.useState(!C || !te),
      qe = N(ir, 2),
      ce = qe[0],
      Ie = qe[1]
    if (
      (me(
        function () {
          !ce && te && s && Ie(!0)
        },
        [ce, te, s]
      ),
      !ce)
    )
      return null
    var j = 'auto',
      W = { left: '-1000vw', top: '-1000vh', right: j, bottom: j }
    if (O || !l) {
      var ne,
        le = D.points,
        Ge = D.dynamicInset || ((ne = D._experimental) === null || ne === void 0 ? void 0 : ne.dynamicInset),
        pe = Ge && le[0][1] === 'r',
        ge = Ge && le[0][0] === 'b'
      pe ? ((W.right = re), (W.left = j)) : ((W.left = V), (W.right = j)),
        ge ? ((W.bottom = I), (W.top = j)) : ((W.top = ee), (W.bottom = j))
    }
    var U = {}
    return (
      y &&
        (y.includes('height') && R ? (U.height = R) : y.includes('minHeight') && R && (U.minHeight = R),
        y.includes('width') && G ? (U.width = G) : y.includes('minWidth') && G && (U.minWidth = G)),
      l || (U.pointerEvents = 'none'),
      a.createElement(
        A,
        {
          open: _ || nr,
          getContainer:
            C &&
            function () {
              return C(s)
            },
          autoDestroy: c
        },
        a.createElement(Nn, { prefixCls: i, open: l, zIndex: $, mask: x, motion: S }),
        a.createElement(ht, { onResize: q, disabled: !l }, function (Ue) {
          return a.createElement(
            xt,
            dt(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: _,
                leavedClassName: ''.concat(i, '-hidden')
              },
              g,
              {
                onAppearPrepare: T,
                onEnterPrepare: T,
                visible: l,
                onVisibleChanged: function (ye) {
                  var b
                  g == null || (b = g.onVisibleChanged) === null || b === void 0 || b.call(g, ye), v(ye)
                }
              }
            ),
            function (ie, ye) {
              var b = ie.className,
                Ke = ie.style,
                be = rr(i, b, n)
              return a.createElement(
                'div',
                {
                  ref: zt(Ue, t, ye),
                  className: be,
                  style: B(
                    B(
                      B(B({ '--arrow-x': ''.concat(E.x || 0, 'px'), '--arrow-y': ''.concat(E.y || 0, 'px') }, W), U),
                      Ke
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: $ },
                    o
                  ),
                  onMouseEnter: H,
                  onMouseLeave: F,
                  onPointerEnter: Z,
                  onClick: m
                },
                h && a.createElement(Ln, { prefixCls: i, arrow: h, arrowPos: E, align: D }),
                a.createElement(Wn, { cache: !l && !M }, p)
              )
            }
          )
        })
      )
    )
  }),
  Bn = a.forwardRef(function (e, t) {
    var r = e.children,
      n = e.getTriggerDOMNode,
      i = St(r),
      o = a.useCallback(
        function (v) {
          qt(t, n ? n(v) : v)
        },
        [n]
      ),
      s = It(o, r.ref)
    return i ? a.cloneElement(r, { ref: s }) : r
  }),
  Hn = [
    'prefixCls',
    'children',
    'action',
    'showAction',
    'hideAction',
    'popupVisible',
    'defaultPopupVisible',
    'onPopupVisibleChange',
    'afterPopupVisibleChange',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'focusDelay',
    'blurDelay',
    'mask',
    'maskClosable',
    'getPopupContainer',
    'forceRender',
    'autoDestroy',
    'destroyPopupOnHide',
    'popup',
    'popupClassName',
    'popupStyle',
    'popupPlacement',
    'builtinPlacements',
    'popupAlign',
    'zIndex',
    'stretch',
    'getPopupClassNameFromAlign',
    'fresh',
    'alignPoint',
    'onPopupClick',
    'onPopupAlign',
    'arrow',
    'popupMotion',
    'maskMotion',
    'popupTransitionName',
    'popupAnimation',
    'maskTransitionName',
    'maskAnimation',
    'className',
    'getTriggerDOMNode'
  ]
function $n() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dt,
    t = a.forwardRef(function (r, n) {
      var i = r.prefixCls,
        o = i === void 0 ? 'rc-trigger-popup' : i,
        s = r.children,
        v = r.action,
        l = v === void 0 ? 'hover' : v,
        d = r.showAction,
        M = r.hideAction,
        m = r.popupVisible,
        x = r.defaultPopupVisible,
        h = r.onPopupVisibleChange,
        E = r.afterPopupVisibleChange,
        D = r.mouseEnterDelay,
        g = r.mouseLeaveDelay,
        S = g === void 0 ? 0.1 : g,
        _ = r.focusDelay,
        C = r.blurDelay,
        c = r.mask,
        A = r.maskClosable,
        $ = A === void 0 ? !0 : A,
        H = r.getPopupContainer,
        F = r.forceRender,
        Z = r.autoDestroy,
        O = r.destroyPopupOnHide,
        V = r.popup,
        ee = r.popupClassName,
        re = r.popupStyle,
        I = r.popupPlacement,
        q = r.builtinPlacements,
        T = q === void 0 ? {} : q,
        y = r.popupAlign,
        G = r.zIndex,
        R = r.stretch,
        p = r.getPopupClassNameFromAlign,
        nr = r.fresh,
        te = r.alignPoint,
        ir = r.onPopupClick,
        qe = r.onPopupAlign,
        ce = r.arrow,
        Ie = r.popupMotion,
        j = r.maskMotion,
        W = r.popupTransitionName,
        ne = r.popupAnimation,
        le = r.maskTransitionName,
        Ge = r.maskAnimation,
        pe = r.className,
        ge = r.getTriggerDOMNode,
        U = Gt(r, Hn),
        Ue = Z || O || !1,
        ie = a.useState(!1),
        ye = N(ie, 2),
        b = ye[0],
        Ke = ye[1]
      me(function () {
        Ke(Jt())
      }, [])
      var be = a.useRef({}),
        ve = a.useContext(Ct),
        De = a.useMemo(
          function () {
            return {
              registerSubPopup: function (f, k) {
                ;(be.current[f] = k), ve == null || ve.registerSubPopup(f, k)
              }
            }
          },
          [ve]
        ),
        Te = Ut(),
        jr = a.useState(null),
        br = N(jr, 2),
        ae = br[0],
        wr = br[1],
        oe = Ve(function (u) {
          st(u) && ae !== u && wr(u), ve == null || ve.registerSubPopup(Te, u)
        }),
        se = a.useState(null),
        Cr = N(se, 2),
        ue = Cr[0],
        Vr = Cr[1],
        qr = Ve(function (u) {
          st(u) && ue !== u && Vr(u)
        }),
        Je = a.Children.only(s),
        K = (Je == null ? void 0 : Je.props) || {},
        Re = {},
        Ir = Ve(function (u) {
          var f,
            k,
            L = ue
          return (
            (L == null ? void 0 : L.contains(u)) ||
            ((f = vt(L)) === null || f === void 0 ? void 0 : f.host) === u ||
            u === L ||
            (ae == null ? void 0 : ae.contains(u)) ||
            ((k = vt(ae)) === null || k === void 0 ? void 0 : k.host) === u ||
            u === ae ||
            Object.values(be.current).some(function (P) {
              return (P == null ? void 0 : P.contains(u)) || u === P
            })
          )
        }),
        we = _t(o, Ie, ne, W),
        J = _t(o, j, Ge, le),
        Mr = a.useState(x || !1),
        ar = N(Mr, 2),
        Ee = ar[0],
        z = ar[1],
        w = m ?? Ee,
        fe = Ve(function (u) {
          m === void 0 && z(u)
        })
      me(
        function () {
          z(m || !1)
        },
        [m]
      )
      var de = a.useRef(w)
      de.current = w
      var or = Ve(function (u) {
          Kt.flushSync(function () {
            w !== u && (fe(u), h == null || h(u))
          })
        }),
        sr = a.useRef(),
        ur = function () {
          clearTimeout(sr.current)
        },
        Y = function (f) {
          var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
          ur(),
            k === 0
              ? or(f)
              : (sr.current = setTimeout(function () {
                  or(f)
                }, k * 1e3))
        }
      a.useEffect(function () {
        return ur
      }, [])
      var Qe = a.useState(!1),
        _r = N(Qe, 2),
        cr = _r[0],
        lr = _r[1]
      me(
        function (u) {
          ;(!u || w) && lr(!0)
        },
        [w]
      )
      var Rr = a.useState(null),
        vr = N(Rr, 2),
        Ce = vr[0],
        Le = vr[1],
        Ne = a.useState([0, 0]),
        We = N(Ne, 2),
        fr = We[0],
        Er = We[1],
        he = function (f) {
          Er([f.clientX, f.clientY])
        },
        kr = xn(w, ae, te ? fr : ue, I, T, y, qe),
        Q = N(kr, 11),
        Ae = Q[0],
        Pr = Q[1],
        Gr = Q[2],
        Sr = Q[3],
        zr = Q[4],
        Be = Q[5],
        xr = Q[6],
        pr = Q[7],
        He = Q[8],
        $e = Q[9],
        dr = Q[10],
        Fe = kn(b, l, d, M),
        ke = N(Fe, 2),
        Pe = ke[0],
        Oe = ke[1],
        Ze = Pe.has('click'),
        Ye = Oe.has('click') || Oe.has('contextMenu'),
        Me = Ve(function () {
          cr || dr()
        }),
        Ur = function () {
          de.current && te && Ye && Y(!1)
        }
      Dn(w, ue, ae, Me, Ur),
        me(
          function () {
            Me()
          },
          [fr, I]
        ),
        me(
          function () {
            w && !(T != null && T[I]) && Me()
          },
          [JSON.stringify(y)]
        )
      var Dr = a.useMemo(
        function () {
          var u = zn(T, o, $e, te)
          return rr(u, p == null ? void 0 : p($e))
        },
        [$e, p, T, o, te]
      )
      a.useImperativeHandle(n, function () {
        return { forceAlign: Me }
      })
      var Kr = a.useState(0),
        Tr = N(Kr, 2),
        Jr = Tr[0],
        Qr = Tr[1],
        Zr = a.useState(0),
        Lr = N(Zr, 2),
        Yr = Lr[0],
        Xr = Lr[1],
        Nr = function () {
          if (R && ue) {
            var f = ue.getBoundingClientRect()
            Qr(f.width), Xr(f.height)
          }
        },
        et = function () {
          Nr(), Me()
        },
        rt = function (f) {
          lr(!1), dr(), E == null || E(f)
        },
        X = function () {
          return new Promise(function (f) {
            Nr(),
              Le(function () {
                return f
              })
          })
        }
      me(
        function () {
          Ce && (dr(), Ce(), Le(null))
        },
        [Ce]
      )
      function _e(u, f, k, L) {
        Re[u] = function (P) {
          var Br
          L == null || L(P), Y(f, k)
          for (var ot = arguments.length, mt = new Array(ot > 1 ? ot - 1 : 0), Hr = 1; Hr < ot; Hr++)
            mt[Hr - 1] = arguments[Hr]
          ;(Br = K[u]) === null || Br === void 0 || Br.call.apply(Br, [K, P].concat(mt))
        }
      }
      ;(Ze || Ye) &&
        (Re.onClick = function (u) {
          var f
          de.current && Ye ? Y(!1) : !de.current && Ze && (he(u), Y(!0))
          for (var k = arguments.length, L = new Array(k > 1 ? k - 1 : 0), P = 1; P < k; P++) L[P - 1] = arguments[P]
          ;(f = K.onClick) === null || f === void 0 || f.call.apply(f, [K, u].concat(L))
        }),
        Tn(w, Ye, ue, ae, c, $, Ir, Y)
      var Wr = Pe.has('hover'),
        je = Oe.has('hover'),
        Se,
        hr
      Wr &&
        (_e('onMouseEnter', !0, D, function (u) {
          he(u)
        }),
        _e('onPointerEnter', !0, D, function (u) {
          he(u)
        }),
        (Se = function () {
          ;(w || cr) && Y(!0, D)
        }),
        te &&
          (Re.onMouseMove = function (u) {
            var f
            ;(f = K.onMouseMove) === null || f === void 0 || f.call(K, u)
          })),
        je &&
          (_e('onMouseLeave', !1, S),
          _e('onPointerLeave', !1, S),
          (hr = function () {
            Y(!1, S)
          })),
        Pe.has('focus') && _e('onFocus', !0, _),
        Oe.has('focus') && _e('onBlur', !1, C),
        Pe.has('contextMenu') &&
          (Re.onContextMenu = function (u) {
            var f
            de.current && Oe.has('contextMenu') ? Y(!1) : (he(u), Y(!0)), u.preventDefault()
            for (var k = arguments.length, L = new Array(k > 1 ? k - 1 : 0), P = 1; P < k; P++) L[P - 1] = arguments[P]
            ;(f = K.onContextMenu) === null || f === void 0 || f.call.apply(f, [K, u].concat(L))
          }),
        pe && (Re.className = rr(K.className, pe))
      var Xe = B(B({}, K), Re),
        Ar = {},
        tt = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur'
        ]
      tt.forEach(function (u) {
        U[u] &&
          (Ar[u] = function () {
            for (var f, k = arguments.length, L = new Array(k), P = 0; P < k; P++) L[P] = arguments[P]
            ;(f = Xe[u]) === null || f === void 0 || f.call.apply(f, [Xe].concat(L)), U[u].apply(U, L)
          })
      })
      var nt = a.cloneElement(Je, B(B({}, Xe), Ar)),
        it = { x: Be, y: xr },
        at = ce ? B({}, ce !== !0 ? ce : {}) : null
      return a.createElement(
        a.Fragment,
        null,
        a.createElement(
          ht,
          { disabled: !w, ref: qr, onResize: et },
          a.createElement(Bn, { getTriggerDOMNode: ge }, nt)
        ),
        a.createElement(
          Ct.Provider,
          { value: De },
          a.createElement(An, {
            portal: e,
            ref: oe,
            prefixCls: o,
            popup: V,
            className: rr(ee, Dr),
            style: re,
            target: ue,
            onMouseEnter: Se,
            onMouseLeave: hr,
            onPointerEnter: Se,
            zIndex: G,
            open: w,
            keepDom: cr,
            fresh: nr,
            onClick: ir,
            mask: c,
            motion: we,
            maskMotion: J,
            onVisibleChanged: rt,
            onPrepare: X,
            forceRender: F,
            autoDestroy: Ue,
            getPopupContainer: H,
            align: $e,
            arrow: at,
            arrowPos: it,
            ready: Ae,
            offsetX: Pr,
            offsetY: Gr,
            offsetR: Sr,
            offsetB: zr,
            onAlign: Me,
            stretch: R,
            targetWidth: Jr / pr,
            targetHeight: Yr / He
          })
        )
      )
    })
  return t
}
const Gn = $n(Dt)
export { ht as R, Gn as T, Jt as i, ut as t, Ve as u }
//# sourceMappingURL=index-999a6a79.js.map
