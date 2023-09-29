import { j as De, a as ir } from './jsx-runtime-276775ef.js'
import { r as t, a as Ae } from './index-1cdf6ce0.js'
import { _ as Pe } from './assertThisInitialized-bd9b18e4.js'
import {
  p as ut,
  a as U,
  q as st,
  t as wn,
  b as tn,
  _ as J,
  w as on,
  g as bn,
  v as ur,
  c as sr,
  d as ie,
  K as ee,
  x as cr,
  y as dr,
  z as fr,
  A as vr,
  f as mr,
  n as nn,
  u as pr,
  B as hr,
  k as gr,
  j as Sr,
  l as Cr,
  D as br
} from './CSSMotionList-c4d6cc01.js'
import { u as kn, R as $n, T as wr, i as yr, t as Rr } from './index-a336c5aa.js'
import { c as He } from './index-3ffce462.js'
import { p as An } from './pickAttrs-9695b8fe.js'
import { r as Xn } from './index-a01a9712.js'
import { c as Te } from './clsx.m-1229b3e0.js'
import { _ as _r } from './tslib.es6-6635c9de.js'
import { T as Er } from './Component-bfc56ba9.js'
import { u as ct, m as Ir } from './mergeRefs-3b77d02e.js'
import { L as Mr } from './Component-4d843ac5.js'
function Un(e) {
  return e !== void 0
}
function Yn(e, n) {
  var a = n || {},
    r = a.defaultValue,
    i = a.value,
    o = a.onChange,
    l = a.postState,
    d = ut(function () {
      return Un(i) ? i : Un(r) ? (typeof r == 'function' ? r() : r) : typeof e == 'function' ? e() : e
    }),
    f = U(d, 2),
    u = f[0],
    v = f[1],
    c = i !== void 0 ? i : u,
    m = l ? l(c) : c,
    s = kn(o),
    p = ut([c]),
    S = U(p, 2),
    b = S[0],
    w = S[1]
  st(
    function () {
      var E = b[0]
      u !== E && s(u, E)
    },
    [b]
  ),
    st(
      function () {
        Un(i) || v(i)
      },
      [i]
    )
  var y = kn(function (E, z) {
    v(E, z), w([c], z)
  })
  return [m, y]
}
var Kn = function (n) {
  var a = n.className,
    r = n.customizeIcon,
    i = n.customizeIconProps,
    o = n.onMouseDown,
    l = n.onClick,
    d = n.children,
    f
  return (
    typeof r == 'function' ? (f = r(i)) : (f = r),
    t.createElement(
      'span',
      {
        className: a,
        onMouseDown: function (v) {
          v.preventDefault(), o && o(v)
        },
        style: { userSelect: 'none', WebkitUserSelect: 'none' },
        unselectable: 'on',
        onClick: l,
        'aria-hidden': !0
      },
      f !== void 0
        ? f
        : t.createElement(
            'span',
            {
              className: He(
                a.split(/\s+/).map(function (u) {
                  return ''.concat(u, '-icon')
                })
              )
            },
            d
          )
    )
  )
}
function xr(e, n, a, r, i) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1,
    l = arguments.length > 6 ? arguments[6] : void 0,
    d = arguments.length > 7 ? arguments[7] : void 0,
    f = Ae.useMemo(
      function () {
        if (wn(r) === 'object') return r.clearIcon
        if (i) return i
      },
      [r, i]
    ),
    u = Ae.useMemo(
      function () {
        return !!(!o && r && (a.length || l) && !(d === 'combobox' && l === ''))
      },
      [r, o, a.length, l, d]
    )
  return {
    allowClear: u,
    clearIcon: Ae.createElement(Kn, { className: ''.concat(e, '-clear'), onMouseDown: n, customizeIcon: f }, '×')
  }
}
var Ot = t.createContext(null)
function Nr() {
  return t.useContext(Ot)
}
function Dr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    n = t.useState(!1),
    a = U(n, 2),
    r = a[0],
    i = a[1],
    o = t.useRef(null),
    l = function () {
      window.clearTimeout(o.current)
    }
  t.useEffect(function () {
    return l
  }, [])
  var d = function (u, v) {
    l(),
      (o.current = window.setTimeout(function () {
        i(u), v && v()
      }, e))
  }
  return [r, d, l]
}
function Pt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    n = t.useRef(null),
    a = t.useRef(null)
  t.useEffect(function () {
    return function () {
      window.clearTimeout(a.current)
    }
  }, [])
  function r(i) {
    ;(i || n.current === null) && (n.current = i),
      window.clearTimeout(a.current),
      (a.current = window.setTimeout(function () {
        n.current = null
      }, e))
  }
  return [
    function () {
      return n.current
    },
    r
  ]
}
function Vr(e, n, a, r) {
  var i = t.useRef(null)
  ;(i.current = { open: n, triggerOpen: a, customizedTrigger: r }),
    t.useEffect(function () {
      function o(l) {
        var d
        if (!((d = i.current) !== null && d !== void 0 && d.customizedTrigger)) {
          var f = l.target
          f.shadowRoot && l.composed && (f = l.composedPath()[0] || f),
            i.current.open &&
              e()
                .filter(function (u) {
                  return u
                })
                .every(function (u) {
                  return !u.contains(f) && u !== f
                }) &&
              i.current.triggerOpen(!1)
        }
      }
      return (
        window.addEventListener('mousedown', o),
        function () {
          return window.removeEventListener('mousedown', o)
        }
      )
    }, [])
}
var Lr = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component'
  ],
  _n = void 0
function Or(e, n) {
  var a = e.prefixCls,
    r = e.invalidate,
    i = e.item,
    o = e.renderItem,
    l = e.responsive,
    d = e.responsiveDisabled,
    f = e.registerSize,
    u = e.itemKey,
    v = e.className,
    c = e.style,
    m = e.children,
    s = e.display,
    p = e.order,
    S = e.component,
    b = S === void 0 ? 'div' : S,
    w = tn(e, Lr),
    y = l && !s
  function E(L) {
    f(u, L)
  }
  t.useEffect(function () {
    return function () {
      E(null)
    }
  }, [])
  var z = o && i !== _n ? o(i) : m,
    $
  r ||
    ($ = {
      opacity: y ? 0 : 1,
      height: y ? 0 : _n,
      overflowY: y ? 'hidden' : _n,
      order: l ? p : _n,
      pointerEvents: y ? 'none' : _n,
      position: y ? 'absolute' : _n
    })
  var H = {}
  y && (H['aria-hidden'] = !0)
  var V = t.createElement(b, Pe({ className: He(!r && a, v), style: J(J({}, $), c) }, H, w, { ref: n }), z)
  return (
    l &&
      (V = t.createElement(
        $n,
        {
          onResize: function (W) {
            var B = W.offsetWidth
            E(B)
          },
          disabled: d
        },
        V
      )),
    V
  )
}
var Pn = t.forwardRef(Or)
Pn.displayName = 'Item'
function Pr(e) {
  if (typeof MessageChannel > 'u') on(e)
  else {
    var n = new MessageChannel()
    ;(n.port1.onmessage = function () {
      return e()
    }),
      n.port2.postMessage(void 0)
  }
}
function kr() {
  var e = t.useRef(null),
    n = function (r) {
      e.current ||
        ((e.current = []),
        Pr(function () {
          Xn.unstable_batchedUpdates(function () {
            e.current.forEach(function (i) {
              i()
            }),
              (e.current = null)
          })
        })),
        e.current.push(r)
    }
  return n
}
function Nn(e, n) {
  var a = t.useState(n),
    r = U(a, 2),
    i = r[0],
    o = r[1],
    l = kn(function (d) {
      e(function () {
        o(d)
      })
    })
  return [i, l]
}
var zn = Ae.createContext(null),
  Tr = ['component'],
  Fr = ['className'],
  Ar = ['className'],
  zr = function (n, a) {
    var r = t.useContext(zn)
    if (!r) {
      var i = n.component,
        o = i === void 0 ? 'div' : i,
        l = tn(n, Tr)
      return t.createElement(o, Pe({}, l, { ref: a }))
    }
    var d = r.className,
      f = tn(r, Fr),
      u = n.className,
      v = tn(n, Ar)
    return t.createElement(zn.Provider, { value: null }, t.createElement(Pn, Pe({ ref: a, className: He(d, u) }, f, v)))
  },
  kt = t.forwardRef(zr)
kt.displayName = 'RawItem'
var $r = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange'
  ],
  Tt = 'responsive',
  Ft = 'invalidate'
function Kr(e) {
  return '+ '.concat(e.length, ' ...')
}
function Hr(e, n) {
  var a = e.prefixCls,
    r = a === void 0 ? 'rc-overflow' : a,
    i = e.data,
    o = i === void 0 ? [] : i,
    l = e.renderItem,
    d = e.renderRawItem,
    f = e.itemKey,
    u = e.itemWidth,
    v = u === void 0 ? 10 : u,
    c = e.ssr,
    m = e.style,
    s = e.className,
    p = e.maxCount,
    S = e.renderRest,
    b = e.renderRawRest,
    w = e.suffix,
    y = e.component,
    E = y === void 0 ? 'div' : y,
    z = e.itemComponent,
    $ = e.onVisibleChange,
    H = tn(e, $r),
    V = c === 'full',
    L = kr(),
    W = Nn(L, null),
    B = U(W, 2),
    T = B[0],
    ae = B[1],
    N = T || 0,
    q = Nn(L, new Map()),
    oe = U(q, 2),
    G = oe[0],
    x = oe[1],
    M = Nn(L, 0),
    D = U(M, 2),
    ye = D[0],
    ce = D[1],
    Q = Nn(L, 0),
    ue = U(Q, 2),
    ne = ue[0],
    Ce = ue[1],
    Ve = Nn(L, 0),
    O = U(Ve, 2),
    R = O[0],
    P = O[1],
    F = t.useState(null),
    Y = U(F, 2),
    A = Y[0],
    h = Y[1],
    X = t.useState(null),
    se = U(X, 2),
    de = se[0],
    _e = se[1],
    me = t.useMemo(
      function () {
        return de === null && V ? Number.MAX_SAFE_INTEGER : de || 0
      },
      [de, T]
    ),
    ge = t.useState(!1),
    Ee = U(ge, 2),
    fe = Ee[0],
    Le = Ee[1],
    ze = ''.concat(r, '-item'),
    be = Math.max(ye, ne),
    he = p === Tt,
    ve = o.length && he,
    Re = p === Ft,
    We = ve || (typeof p == 'number' && o.length > p),
    Ie = t.useMemo(
      function () {
        var j = o
        return (
          ve
            ? T === null && V
              ? (j = o)
              : (j = o.slice(0, Math.min(o.length, N / v)))
            : typeof p == 'number' && (j = o.slice(0, p)),
          j
        )
      },
      [o, v, T, p, ve]
    ),
    Me = t.useMemo(
      function () {
        return ve ? o.slice(me + 1) : o.slice(Ie.length)
      },
      [o, Ie, ve, me]
    ),
    Se = t.useCallback(
      function (j, C) {
        var g
        return typeof f == 'function' ? f(j) : (g = f && (j == null ? void 0 : j[f])) !== null && g !== void 0 ? g : C
      },
      [f]
    ),
    gn = t.useCallback(
      l ||
        function (j) {
          return j
        },
      [l]
    )
  function je(j, C, g) {
    ;(de === j && (C === void 0 || C === A)) ||
      (_e(j), g || (Le(j < o.length - 1), $ == null || $(j)), C !== void 0 && h(C))
  }
  function ln(j, C) {
    ae(C.clientWidth)
  }
  function Be(j, C) {
    x(function (g) {
      var _ = new Map(g)
      return C === null ? _.delete(j) : _.set(j, C), _
    })
  }
  function Sn(j, C) {
    Ce(C), ce(ne)
  }
  function $e(j, C) {
    P(C)
  }
  function Je(j) {
    return G.get(Se(Ie[j], j))
  }
  bn(
    function () {
      if (N && typeof be == 'number' && Ie) {
        var j = R,
          C = Ie.length,
          g = C - 1
        if (!C) {
          je(0, null)
          return
        }
        for (var _ = 0; _ < C; _ += 1) {
          var K = Je(_)
          if ((V && (K = K || 0), K === void 0)) {
            je(_ - 1, void 0, !0)
            break
          }
          if (((j += K), (g === 0 && j <= N) || (_ === g - 1 && j + Je(g) <= N))) {
            je(g, null)
            break
          } else if (j + be > N) {
            je(_ - 1, j - K - R + ne)
            break
          }
        }
        w && Je(0) + R > N && h(null)
      }
    },
    [N, G, ne, R, Se, Ie]
  )
  var ke = fe && !!Me.length,
    fn = {}
  A !== null && ve && (fn = { position: 'absolute', left: A, top: 0 })
  var Xe = { prefixCls: ze, responsive: ve, component: z, invalidate: Re },
    Qe = d
      ? function (j, C) {
          var g = Se(j, C)
          return t.createElement(
            zn.Provider,
            { key: g, value: J(J({}, Xe), {}, { order: C, item: j, itemKey: g, registerSize: Be, display: C <= me }) },
            d(j, C)
          )
        }
      : function (j, C) {
          var g = Se(j, C)
          return t.createElement(
            Pn,
            Pe({}, Xe, { order: C, key: g, item: j, renderItem: gn, itemKey: g, registerSize: Be, display: C <= me })
          )
        },
    un,
    sn = { order: ke ? me : Number.MAX_SAFE_INTEGER, className: ''.concat(ze, '-rest'), registerSize: Sn, display: ke }
  if (b) b && (un = t.createElement(zn.Provider, { value: J(J({}, Xe), sn) }, b(Me)))
  else {
    var rn = S || Kr
    un = t.createElement(Pn, Pe({}, Xe, sn), typeof rn == 'function' ? rn(Me) : rn)
  }
  var en = t.createElement(
    E,
    Pe({ className: He(!Re && r, s), style: m, ref: n }, H),
    Ie.map(Qe),
    We ? un : null,
    w &&
      t.createElement(
        Pn,
        Pe({}, Xe, {
          responsive: he,
          responsiveDisabled: !ve,
          order: me,
          className: ''.concat(ze, '-suffix'),
          registerSize: $e,
          display: !0,
          style: fn
        }),
        w
      )
  )
  return he && (en = t.createElement($n, { onResize: ln, disabled: !ve }, en)), en
}
var Tn = t.forwardRef(Hr)
Tn.displayName = 'Overflow'
Tn.Item = kt
Tn.RESPONSIVE = Tt
Tn.INVALIDATE = Ft
var Wr = function (n, a) {
    var r,
      i,
      o = n.prefixCls,
      l = n.id,
      d = n.inputElement,
      f = n.disabled,
      u = n.tabIndex,
      v = n.autoFocus,
      c = n.autoComplete,
      m = n.editable,
      s = n.activeDescendantId,
      p = n.value,
      S = n.maxLength,
      b = n.onKeyDown,
      w = n.onMouseDown,
      y = n.onChange,
      E = n.onPaste,
      z = n.onCompositionStart,
      $ = n.onCompositionEnd,
      H = n.open,
      V = n.attrs,
      L = d || t.createElement('input', null),
      W = L,
      B = W.ref,
      T = W.props,
      ae = T.onKeyDown,
      N = T.onChange,
      q = T.onMouseDown,
      oe = T.onCompositionStart,
      G = T.onCompositionEnd,
      x = T.style
    return (
      ur(!('maxLength' in L.props)),
      (L = t.cloneElement(
        L,
        J(
          J(
            J({ type: 'search' }, T),
            {},
            {
              id: l,
              ref: sr(a, B),
              disabled: f,
              tabIndex: u,
              autoComplete: c || 'off',
              autoFocus: v,
              className: He(
                ''.concat(o, '-selection-search-input'),
                (r = L) === null || r === void 0 || (i = r.props) === null || i === void 0 ? void 0 : i.className
              ),
              role: 'combobox',
              'aria-label': 'Search',
              'aria-expanded': H || !1,
              'aria-haspopup': 'listbox',
              'aria-owns': ''.concat(l, '_list'),
              'aria-autocomplete': 'list',
              'aria-controls': ''.concat(l, '_list'),
              'aria-activedescendant': H ? s : void 0
            },
            V
          ),
          {},
          {
            value: m ? p : '',
            maxLength: S,
            readOnly: !m,
            unselectable: m ? null : 'on',
            style: J(J({}, x), {}, { opacity: m ? null : 0 }),
            onKeyDown: function (D) {
              b(D), ae && ae(D)
            },
            onMouseDown: function (D) {
              w(D), q && q(D)
            },
            onChange: function (D) {
              y(D), N && N(D)
            },
            onCompositionStart: function (D) {
              z(D), oe && oe(D)
            },
            onCompositionEnd: function (D) {
              $(D), G && G(D)
            },
            onPaste: E
          }
        )
      )),
      L
    )
  },
  et = t.forwardRef(Wr)
et.displayName = 'Input'
function At(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : []
}
var Br = typeof window < 'u' && window.document && window.document.documentElement,
  qr = Br
function Ur(e) {
  return e != null
}
function jr(e) {
  return !e && e !== 0
}
function dt(e) {
  return ['string', 'number'].includes(wn(e))
}
function zt(e) {
  var n = void 0
  return e && (dt(e.title) ? (n = e.title.toString()) : dt(e.label) && (n = e.label.toString())), n
}
function Xr(e, n) {
  qr ? t.useLayoutEffect(e, n) : t.useEffect(e, n)
}
function Yr(e) {
  var n
  return (n = e.key) !== null && n !== void 0 ? n : e.value
}
var ft = function (n) {
    n.preventDefault(), n.stopPropagation()
  },
  Gr = function (n) {
    var a = n.id,
      r = n.prefixCls,
      i = n.values,
      o = n.open,
      l = n.searchValue,
      d = n.autoClearSearchValue,
      f = n.inputRef,
      u = n.placeholder,
      v = n.disabled,
      c = n.mode,
      m = n.showSearch,
      s = n.autoFocus,
      p = n.autoComplete,
      S = n.activeDescendantId,
      b = n.tabIndex,
      w = n.removeIcon,
      y = n.maxTagCount,
      E = n.maxTagTextLength,
      z = n.maxTagPlaceholder,
      $ =
        z === void 0
          ? function (h) {
              return '+ '.concat(h.length, ' ...')
            }
          : z,
      H = n.tagRender,
      V = n.onToggleOpen,
      L = n.onRemove,
      W = n.onInputChange,
      B = n.onInputPaste,
      T = n.onInputKeyDown,
      ae = n.onInputMouseDown,
      N = n.onInputCompositionStart,
      q = n.onInputCompositionEnd,
      oe = t.useRef(null),
      G = t.useState(0),
      x = U(G, 2),
      M = x[0],
      D = x[1],
      ye = t.useState(!1),
      ce = U(ye, 2),
      Q = ce[0],
      ue = ce[1],
      ne = ''.concat(r, '-selection'),
      Ce = o || (c === 'multiple' && d === !1) || c === 'tags' ? l : '',
      Ve = c === 'tags' || (c === 'multiple' && d === !1) || (m && (o || Q))
    Xr(
      function () {
        D(oe.current.scrollWidth)
      },
      [Ce]
    )
    function O(h, X, se, de, _e) {
      return t.createElement(
        'span',
        { className: He(''.concat(ne, '-item'), ie({}, ''.concat(ne, '-item-disabled'), se)), title: zt(h) },
        t.createElement('span', { className: ''.concat(ne, '-item-content') }, X),
        de &&
          t.createElement(
            Kn,
            { className: ''.concat(ne, '-item-remove'), onMouseDown: ft, onClick: _e, customizeIcon: w },
            '×'
          )
      )
    }
    function R(h, X, se, de, _e) {
      var me = function (Ee) {
        ft(Ee), V(!o)
      }
      return t.createElement(
        'span',
        { onMouseDown: me },
        H({ label: X, value: h, disabled: se, closable: de, onClose: _e })
      )
    }
    function P(h) {
      var X = h.disabled,
        se = h.label,
        de = h.value,
        _e = !v && !X,
        me = se
      if (typeof E == 'number' && (typeof se == 'string' || typeof se == 'number')) {
        var ge = String(me)
        ge.length > E && (me = ''.concat(ge.slice(0, E), '...'))
      }
      var Ee = function (Le) {
        Le && Le.stopPropagation(), L(h)
      }
      return typeof H == 'function' ? R(de, me, X, _e, Ee) : O(h, me, X, _e, Ee)
    }
    function F(h) {
      var X = typeof $ == 'function' ? $(h) : $
      return O({ title: X }, X, !1)
    }
    var Y = t.createElement(
        'div',
        {
          className: ''.concat(ne, '-search'),
          style: { width: M },
          onFocus: function () {
            ue(!0)
          },
          onBlur: function () {
            ue(!1)
          }
        },
        t.createElement(et, {
          ref: f,
          open: o,
          prefixCls: r,
          id: a,
          inputElement: null,
          disabled: v,
          autoFocus: s,
          autoComplete: p,
          editable: Ve,
          activeDescendantId: S,
          value: Ce,
          onKeyDown: T,
          onMouseDown: ae,
          onChange: W,
          onPaste: B,
          onCompositionStart: N,
          onCompositionEnd: q,
          tabIndex: b,
          attrs: An(n, !0)
        }),
        t.createElement('span', { ref: oe, className: ''.concat(ne, '-search-mirror'), 'aria-hidden': !0 }, Ce, ' ')
      ),
      A = t.createElement(Tn, {
        prefixCls: ''.concat(ne, '-overflow'),
        data: i,
        renderItem: P,
        renderRest: F,
        suffix: Y,
        itemKey: Yr,
        maxCount: y
      })
    return t.createElement(
      t.Fragment,
      null,
      A,
      !i.length && !Ce && t.createElement('span', { className: ''.concat(ne, '-placeholder') }, u)
    )
  },
  Zr = function (n) {
    var a = n.inputElement,
      r = n.prefixCls,
      i = n.id,
      o = n.inputRef,
      l = n.disabled,
      d = n.autoFocus,
      f = n.autoComplete,
      u = n.activeDescendantId,
      v = n.mode,
      c = n.open,
      m = n.values,
      s = n.placeholder,
      p = n.tabIndex,
      S = n.showSearch,
      b = n.searchValue,
      w = n.activeValue,
      y = n.maxLength,
      E = n.onInputKeyDown,
      z = n.onInputMouseDown,
      $ = n.onInputChange,
      H = n.onInputPaste,
      V = n.onInputCompositionStart,
      L = n.onInputCompositionEnd,
      W = n.title,
      B = t.useState(!1),
      T = U(B, 2),
      ae = T[0],
      N = T[1],
      q = v === 'combobox',
      oe = q || S,
      G = m[0],
      x = b || ''
    q && w && !ae && (x = w),
      t.useEffect(
        function () {
          q && N(!1)
        },
        [q, w]
      )
    var M = v !== 'combobox' && !c && !S ? !1 : !!x,
      D = W === void 0 ? zt(G) : W,
      ye = function () {
        if (G) return null
        var Q = M ? { visibility: 'hidden' } : void 0
        return t.createElement('span', { className: ''.concat(r, '-selection-placeholder'), style: Q }, s)
      }
    return t.createElement(
      t.Fragment,
      null,
      t.createElement(
        'span',
        { className: ''.concat(r, '-selection-search') },
        t.createElement(et, {
          ref: o,
          prefixCls: r,
          id: i,
          open: c,
          inputElement: a,
          disabled: l,
          autoFocus: d,
          autoComplete: f,
          editable: oe,
          activeDescendantId: u,
          value: x,
          onKeyDown: E,
          onMouseDown: z,
          onChange: function (Q) {
            N(!0), $(Q)
          },
          onPaste: H,
          onCompositionStart: V,
          onCompositionEnd: L,
          tabIndex: p,
          attrs: An(n, !0),
          maxLength: q ? y : void 0
        })
      ),
      !q && G
        ? t.createElement(
            'span',
            { className: ''.concat(r, '-selection-item'), title: D, style: M ? { visibility: 'hidden' } : void 0 },
            G.label
          )
        : null,
      ye()
    )
  }
function Jr(e) {
  return ![
    ee.ESC,
    ee.SHIFT,
    ee.BACKSPACE,
    ee.TAB,
    ee.WIN_KEY,
    ee.ALT,
    ee.META,
    ee.WIN_KEY_RIGHT,
    ee.CTRL,
    ee.SEMICOLON,
    ee.EQUALS,
    ee.CAPS_LOCK,
    ee.CONTEXT_MENU,
    ee.F1,
    ee.F2,
    ee.F3,
    ee.F4,
    ee.F5,
    ee.F6,
    ee.F7,
    ee.F8,
    ee.F9,
    ee.F10,
    ee.F11,
    ee.F12
  ].includes(e)
}
var Qr = function (n, a) {
    var r = t.useRef(null),
      i = t.useRef(!1),
      o = n.prefixCls,
      l = n.open,
      d = n.mode,
      f = n.showSearch,
      u = n.tokenWithEnter,
      v = n.autoClearSearchValue,
      c = n.onSearch,
      m = n.onSearchSubmit,
      s = n.onToggleOpen,
      p = n.onInputKeyDown,
      S = n.domRef
    t.useImperativeHandle(a, function () {
      return {
        focus: function () {
          r.current.focus()
        },
        blur: function () {
          r.current.blur()
        }
      }
    })
    var b = Pt(0),
      w = U(b, 2),
      y = w[0],
      E = w[1],
      z = function (x) {
        var M = x.which
        ;(M === ee.UP || M === ee.DOWN) && x.preventDefault(),
          p && p(x),
          M === ee.ENTER && d === 'tags' && !i.current && !l && (m == null || m(x.target.value)),
          Jr(M) && s(!0)
      },
      $ = function () {
        E(!0)
      },
      H = t.useRef(null),
      V = function (x) {
        c(x, !0, i.current) !== !1 && s(!0)
      },
      L = function () {
        i.current = !0
      },
      W = function (x) {
        ;(i.current = !1), d !== 'combobox' && V(x.target.value)
      },
      B = function (x) {
        var M = x.target.value
        if (u && H.current && /[\r\n]/.test(H.current)) {
          var D = H.current
            .replace(/[\r\n]+$/, '')
            .replace(/\r\n/g, ' ')
            .replace(/[\r\n]/g, ' ')
          M = M.replace(D, H.current)
        }
        ;(H.current = null), V(M)
      },
      T = function (x) {
        var M = x.clipboardData,
          D = M.getData('text')
        H.current = D
      },
      ae = function (x) {
        var M = x.target
        if (M !== r.current) {
          var D = document.body.style.msTouchAction !== void 0
          D
            ? setTimeout(function () {
                r.current.focus()
              })
            : r.current.focus()
        }
      },
      N = function (x) {
        var M = y()
        x.target !== r.current && !M && d !== 'combobox' && x.preventDefault(),
          ((d !== 'combobox' && (!f || !M)) || !l) && (l && v !== !1 && c('', !0, !1), s())
      },
      q = {
        inputRef: r,
        onInputKeyDown: z,
        onInputMouseDown: $,
        onInputChange: B,
        onInputPaste: T,
        onInputCompositionStart: L,
        onInputCompositionEnd: W
      },
      oe = d === 'multiple' || d === 'tags' ? t.createElement(Gr, Pe({}, n, q)) : t.createElement(Zr, Pe({}, n, q))
    return t.createElement('div', { ref: S, className: ''.concat(o, '-selector'), onClick: ae, onMouseDown: N }, oe)
  },
  $t = t.forwardRef(Qr)
$t.displayName = 'Selector'
function ea(e) {
  return cr(e) || dr(e) || fr(e) || vr()
}
var na = [
    'prefixCls',
    'disabled',
    'visible',
    'children',
    'popupElement',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'direction',
    'placement',
    'builtinPlacements',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'getPopupContainer',
    'empty',
    'getTriggerDOMNode',
    'onPopupVisibleChange',
    'onPopupMouseEnter'
  ],
  ta = function (n) {
    var a = n === !0 ? 0 : 1
    return {
      bottomLeft: { points: ['tl', 'bl'], offset: [0, 4], overflow: { adjustX: a, adjustY: 1 }, htmlRegion: 'scroll' },
      bottomRight: { points: ['tr', 'br'], offset: [0, 4], overflow: { adjustX: a, adjustY: 1 }, htmlRegion: 'scroll' },
      topLeft: { points: ['bl', 'tl'], offset: [0, -4], overflow: { adjustX: a, adjustY: 1 }, htmlRegion: 'scroll' },
      topRight: { points: ['br', 'tr'], offset: [0, -4], overflow: { adjustX: a, adjustY: 1 }, htmlRegion: 'scroll' }
    }
  },
  ra = function (n, a) {
    var r = n.prefixCls
    n.disabled
    var i = n.visible,
      o = n.children,
      l = n.popupElement,
      d = n.animation,
      f = n.transitionName,
      u = n.dropdownStyle,
      v = n.dropdownClassName,
      c = n.direction,
      m = c === void 0 ? 'ltr' : c,
      s = n.placement,
      p = n.builtinPlacements,
      S = n.dropdownMatchSelectWidth,
      b = n.dropdownRender,
      w = n.dropdownAlign,
      y = n.getPopupContainer,
      E = n.empty,
      z = n.getTriggerDOMNode,
      $ = n.onPopupVisibleChange,
      H = n.onPopupMouseEnter,
      V = tn(n, na),
      L = ''.concat(r, '-dropdown'),
      W = l
    b && (W = b(l))
    var B = t.useMemo(
        function () {
          return p || ta(S)
        },
        [p, S]
      ),
      T = d ? ''.concat(L, '-').concat(d) : f,
      ae = typeof S == 'number',
      N = t.useMemo(
        function () {
          return ae ? null : S === !1 ? 'minWidth' : 'width'
        },
        [S, ae]
      ),
      q = u
    ae && (q = J(J({}, q), {}, { width: S }))
    var oe = t.useRef(null)
    return (
      t.useImperativeHandle(a, function () {
        return {
          getPopupElement: function () {
            return oe.current
          }
        }
      }),
      t.createElement(
        wr,
        Pe({}, V, {
          showAction: $ ? ['click'] : [],
          hideAction: $ ? ['click'] : [],
          popupPlacement: s || (m === 'rtl' ? 'bottomRight' : 'bottomLeft'),
          builtinPlacements: B,
          prefixCls: L,
          popupTransitionName: T,
          popup: t.createElement('div', { ref: oe, onMouseEnter: H }, W),
          stretch: N,
          popupAlign: w,
          popupVisible: i,
          getPopupContainer: y,
          popupClassName: He(v, ie({}, ''.concat(L, '-empty'), E)),
          popupStyle: q,
          getTriggerDOMNode: z,
          onPopupVisibleChange: $
        }),
        o
      )
    )
  },
  Kt = t.forwardRef(ra)
Kt.displayName = 'SelectTrigger'
function vt(e, n) {
  var a = e.key,
    r
  return 'value' in e && (r = e.value), a ?? (r !== void 0 ? r : 'rc-index-key-'.concat(n))
}
function Ht(e, n) {
  var a = e || {},
    r = a.label,
    i = a.value,
    o = a.options,
    l = a.groupLabel,
    d = r || (n ? 'children' : 'label')
  return { label: d, value: i || 'value', options: o || 'options', groupLabel: l || d }
}
function aa(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = n.fieldNames,
    r = n.childrenAsData,
    i = [],
    o = Ht(a, !1),
    l = o.label,
    d = o.value,
    f = o.options,
    u = o.groupLabel
  function v(c, m) {
    c.forEach(function (s) {
      if (m || !(f in s)) {
        var p = s[d]
        i.push({ key: vt(s, i.length), groupOption: m, data: s, label: s[l], value: p })
      } else {
        var S = s[u]
        S === void 0 && r && (S = s.label), i.push({ key: vt(s, i.length), group: !0, data: s, label: S }), v(s[f], !0)
      }
    })
  }
  return v(e, !1), i
}
function Gn(e) {
  var n = J({}, e)
  return (
    'props' in n ||
      Object.defineProperty(n, 'props', {
        get: function () {
          return (
            mr(
              !1,
              'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.'
            ),
            n
          )
        }
      }),
    n
  )
}
function oa(e, n) {
  if (!n || !n.length) return null
  var a = !1
  function r(o, l) {
    var d = ea(l),
      f = d[0],
      u = d.slice(1)
    if (!f) return [o]
    var v = o.split(f)
    return (
      (a = a || v.length > 1),
      v
        .reduce(function (c, m) {
          return [].concat(nn(c), nn(r(m, u)))
        }, [])
        .filter(function (c) {
          return c
        })
    )
  }
  var i = r(e, n)
  return a ? i : null
}
var la = [
    'id',
    'prefixCls',
    'className',
    'showSearch',
    'tagRender',
    'direction',
    'omitDomProps',
    'displayValues',
    'onDisplayValuesChange',
    'emptyOptions',
    'notFoundContent',
    'onClear',
    'mode',
    'disabled',
    'loading',
    'getInputElement',
    'getRawInputElement',
    'open',
    'defaultOpen',
    'onDropdownVisibleChange',
    'activeValue',
    'onActiveValueChange',
    'activeDescendantId',
    'searchValue',
    'autoClearSearchValue',
    'onSearch',
    'onSearchSplit',
    'tokenSeparators',
    'allowClear',
    'suffixIcon',
    'clearIcon',
    'OptionList',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'placement',
    'builtinPlacements',
    'getPopupContainer',
    'showAction',
    'onFocus',
    'onBlur',
    'onKeyUp',
    'onKeyDown',
    'onMouseDown'
  ],
  ia = [
    'value',
    'onChange',
    'removeIcon',
    'placeholder',
    'autoFocus',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'choiceTransitionName',
    'onInputKeyDown',
    'onPopupScroll',
    'tabIndex'
  ]
function Zn(e) {
  return e === 'tags' || e === 'multiple'
}
var ua = t.forwardRef(function (e, n) {
  var a,
    r,
    i = e.id,
    o = e.prefixCls,
    l = e.className,
    d = e.showSearch,
    f = e.tagRender,
    u = e.direction,
    v = e.omitDomProps,
    c = e.displayValues,
    m = e.onDisplayValuesChange,
    s = e.emptyOptions,
    p = e.notFoundContent,
    S = p === void 0 ? 'Not Found' : p,
    b = e.onClear,
    w = e.mode,
    y = e.disabled,
    E = e.loading,
    z = e.getInputElement,
    $ = e.getRawInputElement,
    H = e.open,
    V = e.defaultOpen,
    L = e.onDropdownVisibleChange,
    W = e.activeValue,
    B = e.onActiveValueChange,
    T = e.activeDescendantId,
    ae = e.searchValue,
    N = e.autoClearSearchValue,
    q = e.onSearch,
    oe = e.onSearchSplit,
    G = e.tokenSeparators,
    x = e.allowClear,
    M = e.suffixIcon,
    D = e.clearIcon,
    ye = e.OptionList,
    ce = e.animation,
    Q = e.transitionName,
    ue = e.dropdownStyle,
    ne = e.dropdownClassName,
    Ce = e.dropdownMatchSelectWidth,
    Ve = e.dropdownRender,
    O = e.dropdownAlign,
    R = e.placement,
    P = e.builtinPlacements,
    F = e.getPopupContainer,
    Y = e.showAction,
    A = Y === void 0 ? [] : Y,
    h = e.onFocus,
    X = e.onBlur,
    se = e.onKeyUp,
    de = e.onKeyDown,
    _e = e.onMouseDown,
    me = tn(e, la),
    ge = Zn(w),
    Ee = (d !== void 0 ? d : ge) || w === 'combobox',
    fe = J({}, me)
  ia.forEach(function (re) {
    delete fe[re]
  }),
    v == null ||
      v.forEach(function (re) {
        delete fe[re]
      })
  var Le = t.useState(!1),
    ze = U(Le, 2),
    be = ze[0],
    he = ze[1]
  t.useEffect(function () {
    he(yr())
  }, [])
  var ve = t.useRef(null),
    Re = t.useRef(null),
    We = t.useRef(null),
    Ie = t.useRef(null),
    Me = t.useRef(null),
    Se = t.useRef(!1),
    gn = Dr(),
    je = U(gn, 3),
    ln = je[0],
    Be = je[1],
    Sn = je[2]
  t.useImperativeHandle(n, function () {
    var re, Z
    return {
      focus: (re = Ie.current) === null || re === void 0 ? void 0 : re.focus,
      blur: (Z = Ie.current) === null || Z === void 0 ? void 0 : Z.blur,
      scrollTo: function (Ue) {
        var Ne
        return (Ne = Me.current) === null || Ne === void 0 ? void 0 : Ne.scrollTo(Ue)
      }
    }
  })
  var $e = t.useMemo(
      function () {
        var re
        if (w !== 'combobox') return ae
        var Z = (re = c[0]) === null || re === void 0 ? void 0 : re.value
        return typeof Z == 'string' || typeof Z == 'number' ? String(Z) : ''
      },
      [ae, w, c]
    ),
    Je = (w === 'combobox' && typeof z == 'function' && z()) || null,
    ke = typeof $ == 'function' && $(),
    fn = pr(Re, ke == null || (a = ke.props) === null || a === void 0 ? void 0 : a.ref),
    Xe = t.useState(!1),
    Qe = U(Xe, 2),
    un = Qe[0],
    sn = Qe[1]
  bn(function () {
    sn(!0)
  }, [])
  var rn = Yn(!1, { defaultValue: V, value: H }),
    en = U(rn, 2),
    j = en[0],
    C = en[1],
    g = un ? j : !1,
    _ = !S && s
  ;(y || (_ && g && w === 'combobox')) && (g = !1)
  var K = _ ? !1 : g,
    te = t.useCallback(
      function (re) {
        var Z = re !== void 0 ? re : !g
        y || (C(Z), g !== Z && (L == null || L(Z)))
      },
      [y, g, C, L]
    ),
    pe = t.useMemo(
      function () {
        return (G || []).some(function (re) {
          return [
            `
`,
            `\r
`
          ].includes(re)
        })
      },
      [G]
    ),
    qe = function (Z, Fe, Ue) {
      var Ne = !0,
        Ge = Z
      B == null || B(null)
      var an = Ue ? null : oa(Z, G)
      return (
        w !== 'combobox' && an && ((Ge = ''), oe == null || oe(an), te(!1), (Ne = !1)),
        q && $e !== Ge && q(Ge, { source: Fe ? 'typing' : 'effect' }),
        Ne
      )
    },
    Ye = function (Z) {
      !Z || !Z.trim() || q(Z, { source: 'submit' })
    }
  t.useEffect(
    function () {
      !g && !ge && w !== 'combobox' && qe('', !1, !1)
    },
    [g]
  ),
    t.useEffect(
      function () {
        j && y && C(!1), y && !Se.current && Be(!1)
      },
      [y]
    )
  var cn = Pt(),
    xe = U(cn, 2),
    dn = xe[0],
    In = xe[1],
    vn = function (Z) {
      var Fe = dn(),
        Ue = Z.which
      if (
        (Ue === ee.ENTER && (w !== 'combobox' && Z.preventDefault(), g || te(!0)),
        In(!!$e),
        Ue === ee.BACKSPACE && !Fe && ge && !$e && c.length)
      ) {
        for (var Ne = nn(c), Ge = null, an = Ne.length - 1; an >= 0; an -= 1) {
          var xn = Ne[an]
          if (!xn.disabled) {
            Ne.splice(an, 1), (Ge = xn)
            break
          }
        }
        Ge && m(Ne, { type: 'remove', values: [Ge] })
      }
      for (var mn = arguments.length, Rn = new Array(mn > 1 ? mn - 1 : 0), pn = 1; pn < mn; pn++)
        Rn[pn - 1] = arguments[pn]
      if (g && Me.current) {
        var it
        ;(it = Me.current).onKeyDown.apply(it, [Z].concat(Rn))
      }
      de == null || de.apply(void 0, [Z].concat(Rn))
    },
    Mn = function (Z) {
      for (var Fe = arguments.length, Ue = new Array(Fe > 1 ? Fe - 1 : 0), Ne = 1; Ne < Fe; Ne++)
        Ue[Ne - 1] = arguments[Ne]
      if (g && Me.current) {
        var Ge
        ;(Ge = Me.current).onKeyUp.apply(Ge, [Z].concat(Ue))
      }
      se == null || se.apply(void 0, [Z].concat(Ue))
    },
    k = function (Z) {
      var Fe = c.filter(function (Ue) {
        return Ue !== Z
      })
      m(Fe, { type: 'remove', values: [Z] })
    },
    I = t.useRef(!1),
    le = function () {
      Be(!0), y || (h && !I.current && h.apply(void 0, arguments), A.includes('focus') && te(!0)), (I.current = !0)
    },
    Oe = function () {
      ;(Se.current = !0),
        Be(!1, function () {
          ;(I.current = !1), (Se.current = !1), te(!1)
        }),
        !y &&
          ($e && (w === 'tags' ? q($e, { source: 'submit' }) : w === 'multiple' && q('', { source: 'blur' })),
          X && X.apply(void 0, arguments))
    },
    Ke = []
  t.useEffect(function () {
    return function () {
      Ke.forEach(function (re) {
        return clearTimeout(re)
      }),
        Ke.splice(0, Ke.length)
    }
  }, [])
  var Hn = function (Z) {
      var Fe,
        Ue = Z.target,
        Ne = (Fe = We.current) === null || Fe === void 0 ? void 0 : Fe.getPopupElement()
      if (Ne && Ne.contains(Ue)) {
        var Ge = setTimeout(function () {
          var Rn = Ke.indexOf(Ge)
          if ((Rn !== -1 && Ke.splice(Rn, 1), Sn(), !be && !Ne.contains(document.activeElement))) {
            var pn
            ;(pn = Ie.current) === null || pn === void 0 || pn.focus()
          }
        })
        Ke.push(Ge)
      }
      for (var an = arguments.length, xn = new Array(an > 1 ? an - 1 : 0), mn = 1; mn < an; mn++)
        xn[mn - 1] = arguments[mn]
      _e == null || _e.apply(void 0, [Z].concat(xn))
    },
    Cn = t.useState({}),
    Wn = U(Cn, 2),
    Bn = Wn[1]
  function Fn() {
    Bn({})
  }
  var yn
  ke &&
    (yn = function (Z) {
      te(Z)
    }),
    Vr(
      function () {
        var re
        return [ve.current, (re = We.current) === null || re === void 0 ? void 0 : re.getPopupElement()]
      },
      K,
      te,
      !!ke
    )
  var nr = t.useMemo(
      function () {
        return J(
          J({}, e),
          {},
          { notFoundContent: S, open: g, triggerOpen: K, id: i, showSearch: Ee, multiple: ge, toggleOpen: te }
        )
      },
      [e, S, K, g, i, Ee, ge, te]
    ),
    rt = !!M || E,
    at
  rt &&
    (at = t.createElement(Kn, {
      className: He(''.concat(o, '-arrow'), ie({}, ''.concat(o, '-arrow-loading'), E)),
      customizeIcon: M,
      customizeIconProps: { loading: E, searchValue: $e, open: g, focused: ln, showSearch: Ee }
    }))
  var tr = function () {
      var Z
      b == null || b(),
        (Z = Ie.current) === null || Z === void 0 || Z.focus(),
        m([], { type: 'clear', values: c }),
        qe('', !1, !1)
    },
    ot = xr(o, tr, c, x, D, y, $e, w),
    rr = ot.allowClear,
    ar = ot.clearIcon,
    or = t.createElement(ye, { ref: Me }),
    lr = He(
      o,
      l,
      ((r = {}),
      ie(r, ''.concat(o, '-focused'), ln),
      ie(r, ''.concat(o, '-multiple'), ge),
      ie(r, ''.concat(o, '-single'), !ge),
      ie(r, ''.concat(o, '-allow-clear'), x),
      ie(r, ''.concat(o, '-show-arrow'), rt),
      ie(r, ''.concat(o, '-disabled'), y),
      ie(r, ''.concat(o, '-loading'), E),
      ie(r, ''.concat(o, '-open'), g),
      ie(r, ''.concat(o, '-customize-input'), Je),
      ie(r, ''.concat(o, '-show-search'), Ee),
      r)
    ),
    lt = t.createElement(
      Kt,
      {
        ref: We,
        disabled: y,
        prefixCls: o,
        visible: K,
        popupElement: or,
        animation: ce,
        transitionName: Q,
        dropdownStyle: ue,
        dropdownClassName: ne,
        direction: u,
        dropdownMatchSelectWidth: Ce,
        dropdownRender: Ve,
        dropdownAlign: O,
        placement: R,
        builtinPlacements: P,
        getPopupContainer: F,
        empty: s,
        getTriggerDOMNode: function () {
          return Re.current
        },
        onPopupVisibleChange: yn,
        onPopupMouseEnter: Fn
      },
      ke
        ? t.cloneElement(ke, { ref: fn })
        : t.createElement(
            $t,
            Pe({}, e, {
              domRef: Re,
              prefixCls: o,
              inputElement: Je,
              ref: Ie,
              id: i,
              showSearch: Ee,
              autoClearSearchValue: N,
              mode: w,
              activeDescendantId: T,
              tagRender: f,
              values: c,
              open: g,
              onToggleOpen: te,
              activeValue: W,
              searchValue: $e,
              onSearch: qe,
              onSearchSubmit: Ye,
              onRemove: k,
              tokenWithEnter: pe
            })
          )
    ),
    qn
  return (
    ke
      ? (qn = lt)
      : (qn = t.createElement(
          'div',
          Pe({ className: lr }, fe, { ref: ve, onMouseDown: Hn, onKeyDown: vn, onKeyUp: Mn, onFocus: le, onBlur: Oe }),
          ln &&
            !g &&
            t.createElement(
              'span',
              {
                style: { width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 },
                'aria-live': 'polite'
              },
              ''.concat(
                c
                  .map(function (re) {
                    var Z = re.label,
                      Fe = re.value
                    return ['number', 'string'].includes(wn(Z)) ? Z : Fe
                  })
                  .join(', ')
              )
            ),
          lt,
          at,
          rr && ar
        )),
    t.createElement(Ot.Provider, { value: nr }, qn)
  )
})
const sa = function (e, n) {
  var a = t.useRef({ values: new Map(), options: new Map() }),
    r = t.useMemo(
      function () {
        var o = a.current,
          l = o.values,
          d = o.options,
          f = e.map(function (c) {
            if (c.label === void 0) {
              var m
              return J(J({}, c), {}, { label: (m = l.get(c.value)) === null || m === void 0 ? void 0 : m.label })
            }
            return c
          }),
          u = new Map(),
          v = new Map()
        return (
          f.forEach(function (c) {
            u.set(c.value, c), v.set(c.value, n.get(c.value) || d.get(c.value))
          }),
          (a.current.values = u),
          (a.current.options = v),
          f
        )
      },
      [e, n]
    ),
    i = t.useCallback(
      function (o) {
        return n.get(o) || a.current.options.get(o)
      },
      [n]
    )
  return [r, i]
}
function jn(e, n) {
  return At(e).join('').toUpperCase().includes(n)
}
const ca = function (e, n, a, r, i) {
  return t.useMemo(
    function () {
      if (!a || r === !1) return e
      var o = n.options,
        l = n.label,
        d = n.value,
        f = [],
        u = typeof r == 'function',
        v = a.toUpperCase(),
        c = u
          ? r
          : function (s, p) {
              return i ? jn(p[i], v) : p[o] ? jn(p[l !== 'children' ? l : 'label'], v) : jn(p[d], v)
            },
        m = u
          ? function (s) {
              return Gn(s)
            }
          : function (s) {
              return s
            }
      return (
        e.forEach(function (s) {
          if (s[o]) {
            var p = c(a, m(s))
            if (p) f.push(s)
            else {
              var S = s[o].filter(function (b) {
                return c(a, m(b))
              })
              S.length && f.push(J(J({}, s), {}, ie({}, o, S)))
            }
            return
          }
          c(a, m(s)) && f.push(s)
        }),
        f
      )
    },
    [e, r, i, a, n]
  )
}
var mt = 0,
  da = hr()
function fa() {
  var e
  return da ? ((e = mt), (mt += 1)) : (e = 'TEST_OR_SSR'), e
}
function va(e) {
  var n = t.useState(),
    a = U(n, 2),
    r = a[0],
    i = a[1]
  return (
    t.useEffect(function () {
      i('rc_select_'.concat(fa()))
    }, []),
    e || r
  )
}
var ma = ['children', 'value'],
  pa = ['children']
function ha(e) {
  var n = e,
    a = n.key,
    r = n.props,
    i = r.children,
    o = r.value,
    l = tn(r, ma)
  return J({ key: a, value: o !== void 0 ? o : a, children: i }, l)
}
function Wt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  return Rr(e)
    .map(function (a, r) {
      if (!t.isValidElement(a) || !a.type) return null
      var i = a,
        o = i.type.isSelectOptGroup,
        l = i.key,
        d = i.props,
        f = d.children,
        u = tn(d, pa)
      return n || !o
        ? ha(a)
        : J(J({ key: '__RC_SELECT_GRP__'.concat(l === null ? r : l, '__'), label: l }, u), {}, { options: Wt(f) })
    })
    .filter(function (a) {
      return a
    })
}
function ga(e, n, a, r, i) {
  return t.useMemo(
    function () {
      var o = e,
        l = !e
      l && (o = Wt(n))
      var d = new Map(),
        f = new Map(),
        u = function (m, s, p) {
          p && typeof p == 'string' && m.set(s[p], s)
        }
      function v(c) {
        for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = 0; s < c.length; s += 1) {
          var p = c[s]
          !p[a.options] || m ? (d.set(p[a.value], p), u(f, p, a.label), u(f, p, r), u(f, p, i)) : v(p[a.options], !0)
        }
      }
      return v(o), { options: o, valueOptions: d, labelOptions: f }
    },
    [e, n, a, r, i]
  )
}
function pt(e) {
  var n = t.useRef()
  n.current = e
  var a = t.useCallback(function () {
    return n.current.apply(n, arguments)
  }, [])
  return a
}
var Bt = function () {
  return null
}
Bt.isSelectOptGroup = !0
var nt = function () {
  return null
}
nt.isSelectOption = !0
function Sa(e, n) {
  var a = J({}, e)
  return (
    Array.isArray(n) &&
      n.forEach(function (r) {
        delete a[r]
      }),
    a
  )
}
var qt = t.forwardRef(function (e, n) {
  var a = e.height,
    r = e.offsetY,
    i = e.offsetX,
    o = e.children,
    l = e.prefixCls,
    d = e.onInnerResize,
    f = e.innerProps,
    u = e.rtl,
    v = e.extra,
    c = {},
    m = { display: 'flex', flexDirection: 'column' }
  if (r !== void 0) {
    var s
    ;(c = { height: a, position: 'relative', overflow: 'hidden' }),
      (m = J(
        J({}, m),
        {},
        ((s = { transform: 'translateY('.concat(r, 'px)') }),
        ie(s, u ? 'marginRight' : 'marginLeft', -i),
        ie(s, 'position', 'absolute'),
        ie(s, 'left', 0),
        ie(s, 'right', 0),
        ie(s, 'top', 0),
        s)
      ))
  }
  return t.createElement(
    'div',
    { style: c },
    t.createElement(
      $n,
      {
        onResize: function (S) {
          var b = S.offsetHeight
          b && d && d()
        }
      },
      t.createElement('div', Pe({ style: m, className: He(ie({}, ''.concat(l, '-holder-inner'), l)), ref: n }, f), o, v)
    )
  )
})
qt.displayName = 'Filler'
function ht(e, n) {
  var a = 'touches' in e ? e.touches[0] : e
  return a[n ? 'pageX' : 'pageY']
}
var gt = t.forwardRef(function (e, n) {
  var a,
    r = e.prefixCls,
    i = e.rtl,
    o = e.scrollOffset,
    l = e.scrollRange,
    d = e.onStartMove,
    f = e.onStopMove,
    u = e.onScroll,
    v = e.horizontal,
    c = e.spinSize,
    m = e.containerSize,
    s = e.style,
    p = e.thumbStyle,
    S = t.useState(!1),
    b = U(S, 2),
    w = b[0],
    y = b[1],
    E = t.useState(null),
    z = U(E, 2),
    $ = z[0],
    H = z[1],
    V = t.useState(null),
    L = U(V, 2),
    W = L[0],
    B = L[1],
    T = !i,
    ae = t.useRef(),
    N = t.useRef(),
    q = t.useState(!1),
    oe = U(q, 2),
    G = oe[0],
    x = oe[1],
    M = t.useRef(),
    D = function () {
      clearTimeout(M.current),
        x(!0),
        (M.current = setTimeout(function () {
          x(!1)
        }, 3e3))
    },
    ye = l - m || 0,
    ce = m - c || 0,
    Q = ye > 0,
    ue = t.useMemo(
      function () {
        if (o === 0 || ye === 0) return 0
        var A = o / ye
        return A * ce
      },
      [o, ye, ce]
    ),
    ne = function (h) {
      h.stopPropagation(), h.preventDefault()
    },
    Ce = t.useRef({ top: ue, dragging: w, pageY: $, startTop: W })
  Ce.current = { top: ue, dragging: w, pageY: $, startTop: W }
  var Ve = function (h) {
    y(!0), H(ht(h, v)), B(Ce.current.top), d(), h.stopPropagation(), h.preventDefault()
  }
  t.useEffect(function () {
    var A = function (de) {
        de.preventDefault()
      },
      h = ae.current,
      X = N.current
    return (
      h.addEventListener('touchstart', A),
      X.addEventListener('touchstart', Ve),
      function () {
        h.removeEventListener('touchstart', A), X.removeEventListener('touchstart', Ve)
      }
    )
  }, [])
  var O = t.useRef()
  O.current = ye
  var R = t.useRef()
  ;(R.current = ce),
    t.useEffect(
      function () {
        if (w) {
          var A,
            h = function (de) {
              var _e = Ce.current,
                me = _e.dragging,
                ge = _e.pageY,
                Ee = _e.startTop
              if ((on.cancel(A), me)) {
                var fe = ht(de, v) - ge,
                  Le = Ee
                !T && v ? (Le -= fe) : (Le += fe)
                var ze = O.current,
                  be = R.current,
                  he = be ? Le / be : 0,
                  ve = Math.ceil(he * ze)
                ;(ve = Math.max(ve, 0)),
                  (ve = Math.min(ve, ze)),
                  (A = on(function () {
                    u(ve, v)
                  }))
              }
            },
            X = function () {
              y(!1), f()
            }
          return (
            window.addEventListener('mousemove', h),
            window.addEventListener('touchmove', h),
            window.addEventListener('mouseup', X),
            window.addEventListener('touchend', X),
            function () {
              window.removeEventListener('mousemove', h),
                window.removeEventListener('touchmove', h),
                window.removeEventListener('mouseup', X),
                window.removeEventListener('touchend', X),
                on.cancel(A)
            }
          )
        }
      },
      [w]
    ),
    t.useEffect(
      function () {
        D()
      },
      [o]
    ),
    t.useImperativeHandle(n, function () {
      return { delayHidden: D }
    })
  var P = ''.concat(r, '-scrollbar'),
    F = { position: 'absolute', visibility: G && Q ? null : 'hidden' },
    Y = {
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 99,
      cursor: 'pointer',
      userSelect: 'none'
    }
  return (
    v
      ? ((F.height = 8),
        (F.left = 0),
        (F.right = 0),
        (F.bottom = 0),
        (Y.height = '100%'),
        (Y.width = c),
        T ? (Y.left = ue) : (Y.right = ue))
      : ((F.width = 8),
        (F.top = 0),
        (F.bottom = 0),
        T ? (F.right = 0) : (F.left = 0),
        (Y.width = '100%'),
        (Y.height = c),
        (Y.top = ue)),
    t.createElement(
      'div',
      {
        ref: ae,
        className: He(
          P,
          ((a = {}),
          ie(a, ''.concat(P, '-horizontal'), v),
          ie(a, ''.concat(P, '-vertical'), !v),
          ie(a, ''.concat(P, '-visible'), G),
          a)
        ),
        style: J(J({}, F), s),
        onMouseDown: ne,
        onMouseMove: D
      },
      t.createElement('div', {
        ref: N,
        className: He(''.concat(P, '-thumb'), ie({}, ''.concat(P, '-thumb-moving'), w)),
        style: J(J({}, Y), p),
        onMouseDown: Ve
      })
    )
  )
})
function Ca(e) {
  var n = e.children,
    a = e.setRef,
    r = t.useCallback(function (i) {
      a(i)
    }, [])
  return t.cloneElement(n, { ref: r })
}
function ba(e, n, a, r, i, o, l) {
  var d = l.getKey
  return e.slice(n, a + 1).map(function (f, u) {
    var v = n + u,
      c = o(f, v, { style: { width: r } }),
      m = d(f)
    return t.createElement(
      Ca,
      {
        key: m,
        setRef: function (p) {
          return i(f, p)
        }
      },
      c
    )
  })
}
var wa = (function () {
  function e() {
    Sr(this, e), (this.maps = void 0), (this.id = 0), (this.maps = Object.create(null))
  }
  return (
    gr(e, [
      {
        key: 'set',
        value: function (a, r) {
          ;(this.maps[a] = r), (this.id += 1)
        }
      },
      {
        key: 'get',
        value: function (a) {
          return this.maps[a]
        }
      }
    ]),
    e
  )
})()
function ya(e, n, a) {
  var r = t.useState(0),
    i = U(r, 2),
    o = i[0],
    l = i[1],
    d = t.useRef(new Map()),
    f = t.useRef(new wa()),
    u = t.useRef()
  function v() {
    on.cancel(u.current)
  }
  function c() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    v()
    var p = function () {
      d.current.forEach(function (b, w) {
        if (b && b.offsetParent) {
          var y = Cr(b),
            E = y.offsetHeight
          f.current.get(w) !== E && f.current.set(w, y.offsetHeight)
        }
      }),
        l(function (b) {
          return b + 1
        })
    }
    s ? p() : (u.current = on(p))
  }
  function m(s, p) {
    var S = e(s),
      b = d.current.get(S)
    p ? (d.current.set(S, p), c()) : d.current.delete(S), !b != !p && (p ? n == null || n(s) : a == null || a(s))
  }
  return (
    t.useEffect(function () {
      return v
    }, []),
    [m, c, f.current, o]
  )
}
var Ra = 10
function _a(e, n, a, r, i, o, l, d) {
  var f = t.useRef(),
    u = t.useState(null),
    v = U(u, 2),
    c = v[0],
    m = v[1]
  return (
    bn(
      function () {
        if (c && c.times < Ra) {
          if (!e.current) {
            m(function (D) {
              return J({}, D)
            })
            return
          }
          o()
          var s = c.targetAlign,
            p = c.originAlign,
            S = c.index,
            b = c.offset,
            w = e.current.clientHeight,
            y = !1,
            E = s,
            z = null
          if (w) {
            for (var $ = s || p, H = 0, V = 0, L = 0, W = Math.min(n.length - 1, S), B = 0; B <= W; B += 1) {
              var T = i(n[B])
              V = H
              var ae = a.get(T)
              ;(L = V + (ae === void 0 ? r : ae)), (H = L)
            }
            for (var N = $ === 'top' ? b : w - b, q = W; q >= 0; q -= 1) {
              var oe = i(n[q]),
                G = a.get(oe)
              if (G === void 0) {
                y = !0
                break
              }
              if (((N -= G), N <= 0)) break
            }
            switch ($) {
              case 'top':
                z = V - b
                break
              case 'bottom':
                z = L - w + b
                break
              default: {
                var x = e.current.scrollTop,
                  M = x + w
                V < x ? (E = 'top') : L > M && (E = 'bottom')
              }
            }
            z !== null && l(z), z !== c.lastTop && (y = !0)
          }
          y &&
            m(function (D) {
              return J(J({}, D), {}, { times: D.times + 1, targetAlign: E, lastTop: z })
            })
        }
      },
      [c, e.current]
    ),
    function (s) {
      if (s == null) {
        d()
        return
      }
      if ((on.cancel(f.current), typeof s == 'number')) l(s)
      else if (s && wn(s) === 'object') {
        var p,
          S = s.align
        'index' in s
          ? (p = s.index)
          : (p = n.findIndex(function (y) {
              return i(y) === s.key
            }))
        var b = s.offset,
          w = b === void 0 ? 0 : b
        m({ times: 0, index: p, offset: w, originAlign: S })
      }
    }
  )
}
function Ea(e, n, a) {
  var r = e.length,
    i = n.length,
    o,
    l
  if (r === 0 && i === 0) return null
  r < i ? ((o = e), (l = n)) : ((o = n), (l = e))
  var d = { __EMPTY_ITEM__: !0 }
  function f(p) {
    return p !== void 0 ? a(p) : d
  }
  for (var u = null, v = Math.abs(r - i) !== 1, c = 0; c < l.length; c += 1) {
    var m = f(o[c]),
      s = f(l[c])
    if (m !== s) {
      ;(u = c), (v = v || m !== f(l[c + 1]))
      break
    }
  }
  return u === null ? null : { index: u, multiple: v }
}
function Ia(e, n, a) {
  var r = t.useState(e),
    i = U(r, 2),
    o = i[0],
    l = i[1],
    d = t.useState(null),
    f = U(d, 2),
    u = f[0],
    v = f[1]
  return (
    t.useEffect(
      function () {
        var c = Ea(o || [], e || [], n)
        ;(c == null ? void 0 : c.index) !== void 0 && (a == null || a(c.index), v(e[c.index])), l(e)
      },
      [e]
    ),
    [u]
  )
}
var St = (typeof navigator > 'u' ? 'undefined' : wn(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent)
const Ut = function (e, n) {
  var a = t.useRef(!1),
    r = t.useRef(null)
  function i() {
    clearTimeout(r.current),
      (a.current = !0),
      (r.current = setTimeout(function () {
        a.current = !1
      }, 50))
  }
  var o = t.useRef({ top: e, bottom: n })
  return (
    (o.current.top = e),
    (o.current.bottom = n),
    function (l) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        f = (l < 0 && o.current.top) || (l > 0 && o.current.bottom)
      return d && f ? (clearTimeout(r.current), (a.current = !1)) : (!f || a.current) && i(), !a.current && f
    }
  )
}
function Ma(e, n, a, r, i) {
  var o = t.useRef(0),
    l = t.useRef(null),
    d = t.useRef(null),
    f = t.useRef(!1),
    u = Ut(n, a)
  function v(b, w) {
    on.cancel(l.current),
      (o.current += w),
      (d.current = w),
      !u(w) &&
        (St || b.preventDefault(),
        (l.current = on(function () {
          var y = f.current ? 10 : 1
          i(o.current * y), (o.current = 0)
        })))
  }
  function c(b, w) {
    i(w, !0), St || b.preventDefault()
  }
  var m = t.useRef(null),
    s = t.useRef(null)
  function p(b) {
    if (e) {
      on.cancel(s.current),
        (s.current = on(function () {
          m.current = null
        }, 2))
      var w = b.deltaX,
        y = b.deltaY,
        E = b.shiftKey,
        z = w,
        $ = y
      ;(m.current === 'sx' || (!m.current && E && y && !w)) && ((z = y), ($ = 0), (m.current = 'sx'))
      var H = Math.abs(z),
        V = Math.abs($)
      m.current === null && (m.current = r && H > V ? 'x' : 'y'), m.current === 'y' ? v(b, $) : c(b, z)
    }
  }
  function S(b) {
    e && (f.current = b.detail === d.current)
  }
  return [p, S]
}
var xa = 14 / 15
function Na(e, n, a) {
  var r = t.useRef(!1),
    i = t.useRef(0),
    o = t.useRef(null),
    l = t.useRef(null),
    d,
    f = function (m) {
      if (r.current) {
        var s = Math.ceil(m.touches[0].pageY),
          p = i.current - s
        ;(i.current = s),
          a(p) && m.preventDefault(),
          clearInterval(l.current),
          (l.current = setInterval(function () {
            ;(p *= xa), (!a(p, !0) || Math.abs(p) <= 0.1) && clearInterval(l.current)
          }, 16))
      }
    },
    u = function () {
      ;(r.current = !1), d()
    },
    v = function (m) {
      d(),
        m.touches.length === 1 &&
          !r.current &&
          ((r.current = !0),
          (i.current = Math.ceil(m.touches[0].pageY)),
          (o.current = m.target),
          o.current.addEventListener('touchmove', f),
          o.current.addEventListener('touchend', u))
    }
  ;(d = function () {
    o.current && (o.current.removeEventListener('touchmove', f), o.current.removeEventListener('touchend', u))
  }),
    bn(
      function () {
        return (
          e && n.current.addEventListener('touchstart', v),
          function () {
            var c
            ;(c = n.current) === null || c === void 0 || c.removeEventListener('touchstart', v),
              d(),
              clearInterval(l.current)
          }
        )
      },
      [e]
    )
}
var Da = 20
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    a = (e / n) * 100
  return isNaN(a) && (a = 0), (a = Math.max(a, Da)), (a = Math.min(a, e / 2)), Math.floor(a)
}
function Va(e, n, a, r) {
  var i = t.useMemo(
      function () {
        return [new Map(), []]
      },
      [e, a.id, r]
    ),
    o = U(i, 2),
    l = o[0],
    d = o[1],
    f = function (v) {
      var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v,
        m = l.get(v),
        s = l.get(c)
      if (m === void 0 || s === void 0)
        for (var p = e.length, S = d.length; S < p; S += 1) {
          var b,
            w = e[S],
            y = n(w)
          l.set(y, S)
          var E = (b = a.get(y)) !== null && b !== void 0 ? b : r
          if (((d[S] = (d[S - 1] || 0) + E), y === v && (m = S), y === c && (s = S), m !== void 0 && s !== void 0))
            break
        }
      return { top: d[m - 1] || 0, bottom: d[s] }
    }
  return f
}
var La = [
    'prefixCls',
    'className',
    'height',
    'itemHeight',
    'fullHeight',
    'style',
    'data',
    'children',
    'itemKey',
    'virtual',
    'direction',
    'scrollWidth',
    'component',
    'onScroll',
    'onVirtualScroll',
    'onVisibleChange',
    'innerProps',
    'extraRender',
    'styles'
  ],
  Oa = [],
  Pa = { overflowY: 'auto', overflowAnchor: 'none' }
function ka(e, n) {
  var a = e.prefixCls,
    r = a === void 0 ? 'rc-virtual-list' : a,
    i = e.className,
    o = e.height,
    l = e.itemHeight,
    d = e.fullHeight,
    f = d === void 0 ? !0 : d,
    u = e.style,
    v = e.data,
    c = e.children,
    m = e.itemKey,
    s = e.virtual,
    p = e.direction,
    S = e.scrollWidth,
    b = e.component,
    w = b === void 0 ? 'div' : b,
    y = e.onScroll,
    E = e.onVirtualScroll,
    z = e.onVisibleChange,
    $ = e.innerProps,
    H = e.extraRender,
    V = e.styles,
    L = tn(e, La),
    W = !!(s !== !1 && o && l),
    B = W && v && (l * v.length > o || !!S),
    T = p === 'rtl',
    ae = He(r, ie({}, ''.concat(r, '-rtl'), T), i),
    N = v || Oa,
    q = t.useRef(),
    oe = t.useRef(),
    G = t.useState(0),
    x = U(G, 2),
    M = x[0],
    D = x[1],
    ye = t.useState(0),
    ce = U(ye, 2),
    Q = ce[0],
    ue = ce[1],
    ne = t.useState(!1),
    Ce = U(ne, 2),
    Ve = Ce[0],
    O = Ce[1],
    R = function () {
      O(!0)
    },
    P = function () {
      O(!1)
    },
    F = t.useCallback(
      function (k) {
        return typeof m == 'function' ? m(k) : k == null ? void 0 : k[m]
      },
      [m]
    ),
    Y = { getKey: F }
  function A(k) {
    D(function (I) {
      var le
      typeof k == 'function' ? (le = k(I)) : (le = k)
      var Oe = fn(le)
      return (q.current.scrollTop = Oe), Oe
    })
  }
  var h = t.useRef({ start: 0, end: N.length }),
    X = t.useRef(),
    se = Ia(N, F),
    de = U(se, 1),
    _e = de[0]
  X.current = _e
  var me = ya(F, null, null),
    ge = U(me, 4),
    Ee = ge[0],
    fe = ge[1],
    Le = ge[2],
    ze = ge[3],
    be = t.useMemo(
      function () {
        if (!W) return { scrollHeight: void 0, start: 0, end: N.length - 1, offset: void 0 }
        if (!B) {
          var k
          return {
            scrollHeight: ((k = oe.current) === null || k === void 0 ? void 0 : k.offsetHeight) || 0,
            start: 0,
            end: N.length - 1,
            offset: void 0
          }
        }
        for (var I = 0, le, Oe, Ke, Hn = N.length, Cn = 0; Cn < Hn; Cn += 1) {
          var Wn = N[Cn],
            Bn = F(Wn),
            Fn = Le.get(Bn),
            yn = I + (Fn === void 0 ? l : Fn)
          yn >= M && le === void 0 && ((le = Cn), (Oe = I)), yn > M + o && Ke === void 0 && (Ke = Cn), (I = yn)
        }
        return (
          le === void 0 && ((le = 0), (Oe = 0), (Ke = Math.ceil(o / l))),
          Ke === void 0 && (Ke = N.length - 1),
          (Ke = Math.min(Ke + 1, N.length - 1)),
          { scrollHeight: I, start: le, end: Ke, offset: Oe }
        )
      },
      [B, W, M, N, ze, o]
    ),
    he = be.scrollHeight,
    ve = be.start,
    Re = be.end,
    We = be.offset
  ;(h.current.start = ve), (h.current.end = Re)
  var Ie = t.useState({ width: 0, height: o }),
    Me = U(Ie, 2),
    Se = Me[0],
    gn = Me[1],
    je = function (I) {
      gn({ width: I.width || I.offsetWidth, height: I.height || I.offsetHeight })
    },
    ln = t.useRef(),
    Be = t.useRef(),
    Sn = t.useMemo(
      function () {
        return Ct(Se.width, S)
      },
      [Se.width, S]
    ),
    $e = t.useMemo(
      function () {
        return Ct(Se.height, he)
      },
      [Se.height, he]
    ),
    Je = he - o,
    ke = t.useRef(Je)
  ke.current = Je
  function fn(k) {
    var I = k
    return Number.isNaN(ke.current) || (I = Math.min(I, ke.current)), (I = Math.max(I, 0)), I
  }
  var Xe = M <= 0,
    Qe = M >= Je,
    un = Ut(Xe, Qe),
    sn = function () {
      return { x: T ? -Q : Q, y: M }
    },
    rn = t.useRef(sn()),
    en = kn(function () {
      if (E) {
        var k = sn()
        ;(rn.current.x !== k.x || rn.current.y !== k.y) && (E(k), (rn.current = k))
      }
    })
  function j(k, I) {
    var le = k
    I
      ? (Xn.flushSync(function () {
          ue(le)
        }),
        en())
      : A(le)
  }
  function C(k) {
    var I = k.currentTarget.scrollTop
    I !== M && A(I), y == null || y(k), en()
  }
  var g = function (I) {
      var le = I,
        Oe = S - Se.width
      return (le = Math.max(le, 0)), (le = Math.min(le, Oe)), le
    },
    _ = kn(function (k, I) {
      I
        ? (Xn.flushSync(function () {
            ue(function (le) {
              var Oe = le + (T ? -k : k)
              return g(Oe)
            })
          }),
          en())
        : A(function (le) {
            var Oe = le + k
            return Oe
          })
    }),
    K = Ma(W, Xe, Qe, !!S, _),
    te = U(K, 2),
    pe = te[0],
    qe = te[1]
  Na(W, q, function (k, I) {
    return un(k, I) ? !1 : (pe({ preventDefault: function () {}, deltaY: k }), !0)
  }),
    bn(
      function () {
        function k(le) {
          W && le.preventDefault()
        }
        var I = q.current
        return (
          I.addEventListener('wheel', pe),
          I.addEventListener('DOMMouseScroll', qe),
          I.addEventListener('MozMousePixelScroll', k),
          function () {
            I.removeEventListener('wheel', pe),
              I.removeEventListener('DOMMouseScroll', qe),
              I.removeEventListener('MozMousePixelScroll', k)
          }
        )
      },
      [W]
    ),
    bn(
      function () {
        S &&
          ue(function (k) {
            return g(k)
          })
      },
      [Se.width, S]
    )
  var Ye = function () {
      var I, le
      ;(I = ln.current) === null || I === void 0 || I.delayHidden(),
        (le = Be.current) === null || le === void 0 || le.delayHidden()
    },
    cn = _a(
      q,
      N,
      Le,
      l,
      F,
      function () {
        return fe(!0)
      },
      A,
      Ye
    )
  t.useImperativeHandle(n, function () {
    return {
      getScrollInfo: sn,
      scrollTo: function (I) {
        function le(Oe) {
          return Oe && wn(Oe) === 'object' && ('left' in Oe || 'top' in Oe)
        }
        le(I) ? (I.left !== void 0 && ue(g(I.left)), cn(I.top)) : cn(I)
      }
    }
  }),
    bn(
      function () {
        if (z) {
          var k = N.slice(ve, Re + 1)
          z(k, N)
        }
      },
      [ve, Re, N]
    )
  var xe = Va(N, F, Le, l),
    dn = H == null ? void 0 : H({ start: ve, end: Re, virtual: B, offsetX: Q, offsetY: We, rtl: T, getSize: xe }),
    In = ba(N, ve, Re, S, Ee, c, Y),
    vn = null
  o &&
    ((vn = J(ie({}, f ? 'height' : 'maxHeight', o), Pa)),
    W && ((vn.overflowY = 'hidden'), S && (vn.overflowX = 'hidden'), Ve && (vn.pointerEvents = 'none')))
  var Mn = {}
  return (
    T && (Mn.dir = 'rtl'),
    t.createElement(
      'div',
      Pe({ style: J(J({}, u), {}, { position: 'relative' }), className: ae }, Mn, L),
      t.createElement(
        $n,
        { onResize: je },
        t.createElement(
          w,
          { className: ''.concat(r, '-holder'), style: vn, ref: q, onScroll: C, onMouseEnter: Ye },
          t.createElement(
            qt,
            {
              prefixCls: r,
              height: he,
              offsetX: Q,
              offsetY: We,
              scrollWidth: S,
              onInnerResize: fe,
              ref: oe,
              innerProps: $,
              rtl: T,
              extra: dn
            },
            In
          )
        )
      ),
      B &&
        he > o &&
        t.createElement(gt, {
          ref: ln,
          prefixCls: r,
          scrollOffset: M,
          scrollRange: he,
          rtl: T,
          onScroll: j,
          onStartMove: R,
          onStopMove: P,
          spinSize: $e,
          containerSize: Se.height,
          style: V == null ? void 0 : V.verticalScrollBar,
          thumbStyle: V == null ? void 0 : V.verticalScrollBarThumb
        }),
      B &&
        S &&
        t.createElement(gt, {
          ref: Be,
          prefixCls: r,
          scrollOffset: Q,
          scrollRange: S,
          rtl: T,
          onScroll: j,
          onStartMove: R,
          onStopMove: P,
          spinSize: Sn,
          containerSize: Se.width,
          horizontal: !0,
          style: V == null ? void 0 : V.horizontalScrollBar,
          thumbStyle: V == null ? void 0 : V.horizontalScrollBarThumb
        })
    )
  )
}
var jt = t.forwardRef(ka)
jt.displayName = 'List'
var Xt = t.createContext(null)
function Ta() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
var Fa = ['disabled', 'title', 'children', 'style', 'className']
function bt(e) {
  return typeof e == 'string' || typeof e == 'number'
}
var Aa = function (n, a) {
    var r = Nr(),
      i = r.prefixCls,
      o = r.id,
      l = r.open,
      d = r.multiple,
      f = r.mode,
      u = r.searchValue,
      v = r.toggleOpen,
      c = r.notFoundContent,
      m = r.onPopupScroll,
      s = t.useContext(Xt),
      p = s.flattenOptions,
      S = s.onActiveValue,
      b = s.defaultActiveFirstOption,
      w = s.onSelect,
      y = s.menuItemSelectedIcon,
      E = s.rawValues,
      z = s.fieldNames,
      $ = s.virtual,
      H = s.direction,
      V = s.listHeight,
      L = s.listItemHeight,
      W = ''.concat(i, '-item'),
      B = br(
        function () {
          return p
        },
        [l, p],
        function (O, R) {
          return R[0] && O[1] !== R[1]
        }
      ),
      T = t.useRef(null),
      ae = function (R) {
        R.preventDefault()
      },
      N = function (R) {
        T.current && T.current.scrollTo(typeof R == 'number' ? { index: R } : R)
      },
      q = function (R) {
        for (
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, F = B.length, Y = 0;
          Y < F;
          Y += 1
        ) {
          var A = (R + Y * P + F) % F,
            h = B[A],
            X = h.group,
            se = h.data
          if (!X && !se.disabled) return A
        }
        return -1
      },
      oe = t.useState(function () {
        return q(0)
      }),
      G = U(oe, 2),
      x = G[0],
      M = G[1],
      D = function (R) {
        var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        M(R)
        var F = { source: P ? 'keyboard' : 'mouse' },
          Y = B[R]
        if (!Y) {
          S(null, -1, F)
          return
        }
        S(Y.value, R, F)
      }
    t.useEffect(
      function () {
        D(b !== !1 ? q(0) : -1)
      },
      [B.length, u]
    )
    var ye = t.useCallback(
      function (O) {
        return E.has(O) && f !== 'combobox'
      },
      [f, nn(E).toString(), E.size]
    )
    t.useEffect(
      function () {
        var O = setTimeout(function () {
          if (!d && l && E.size === 1) {
            var P = Array.from(E)[0],
              F = B.findIndex(function (Y) {
                var A = Y.data
                return A.value === P
              })
            F !== -1 && (D(F), N(F))
          }
        })
        if (l) {
          var R
          ;(R = T.current) === null || R === void 0 || R.scrollTo(void 0)
        }
        return function () {
          return clearTimeout(O)
        }
      },
      [l, u, p.length]
    )
    var ce = function (R) {
      R !== void 0 && w(R, { selected: !E.has(R) }), d || v(!1)
    }
    if (
      (t.useImperativeHandle(a, function () {
        return {
          onKeyDown: function (R) {
            var P = R.which,
              F = R.ctrlKey
            switch (P) {
              case ee.N:
              case ee.P:
              case ee.UP:
              case ee.DOWN: {
                var Y = 0
                if (
                  (P === ee.UP
                    ? (Y = -1)
                    : P === ee.DOWN
                    ? (Y = 1)
                    : Ta() && F && (P === ee.N ? (Y = 1) : P === ee.P && (Y = -1)),
                  Y !== 0)
                ) {
                  var A = q(x + Y, Y)
                  N(A), D(A, !0)
                }
                break
              }
              case ee.ENTER: {
                var h = B[x]
                h && !h.data.disabled ? ce(h.value) : ce(void 0), l && R.preventDefault()
                break
              }
              case ee.ESC:
                v(!1), l && R.stopPropagation()
            }
          },
          onKeyUp: function () {},
          scrollTo: function (R) {
            N(R)
          }
        }
      }),
      B.length === 0)
    )
      return t.createElement(
        'div',
        { role: 'listbox', id: ''.concat(o, '_list'), className: ''.concat(W, '-empty'), onMouseDown: ae },
        c
      )
    var Q = Object.keys(z).map(function (O) {
        return z[O]
      }),
      ue = function (R) {
        return R.label
      }
    function ne(O, R) {
      var P = O.group
      return { role: P ? 'presentation' : 'option', id: ''.concat(o, '_list_').concat(R) }
    }
    var Ce = function (R) {
        var P = B[R]
        if (!P) return null
        var F = P.data || {},
          Y = F.value,
          A = P.group,
          h = An(F, !0),
          X = ue(P)
        return P
          ? t.createElement(
              'div',
              Pe({ 'aria-label': typeof X == 'string' && !A ? X : null }, h, { key: R }, ne(P, R), {
                'aria-selected': ye(Y)
              }),
              Y
            )
          : null
      },
      Ve = { role: 'listbox', id: ''.concat(o, '_list') }
    return t.createElement(
      t.Fragment,
      null,
      $ &&
        t.createElement(
          'div',
          Pe({}, Ve, { style: { height: 0, width: 0, overflow: 'hidden' } }),
          Ce(x - 1),
          Ce(x),
          Ce(x + 1)
        ),
      t.createElement(
        jt,
        {
          itemKey: 'key',
          ref: T,
          data: B,
          height: V,
          itemHeight: L,
          fullHeight: !1,
          onMouseDown: ae,
          onScroll: m,
          virtual: $,
          direction: H,
          innerProps: $ ? null : Ve
        },
        function (O, R) {
          var P,
            F = O.group,
            Y = O.groupOption,
            A = O.data,
            h = O.label,
            X = O.value,
            se = A.key
          if (F) {
            var de,
              _e = (de = A.title) !== null && de !== void 0 ? de : bt(h) ? h.toString() : void 0
            return t.createElement(
              'div',
              { className: He(W, ''.concat(W, '-group')), title: _e },
              h !== void 0 ? h : se
            )
          }
          var me = A.disabled,
            ge = A.title
          A.children
          var Ee = A.style,
            fe = A.className,
            Le = tn(A, Fa),
            ze = Sa(Le, Q),
            be = ye(X),
            he = ''.concat(W, '-option'),
            ve = He(
              W,
              he,
              fe,
              ((P = {}),
              ie(P, ''.concat(he, '-grouped'), Y),
              ie(P, ''.concat(he, '-active'), x === R && !me),
              ie(P, ''.concat(he, '-disabled'), me),
              ie(P, ''.concat(he, '-selected'), be),
              P)
            ),
            Re = ue(O),
            We = !y || typeof y == 'function' || be,
            Ie = typeof Re == 'number' ? Re : Re || X,
            Me = bt(Ie) ? Ie.toString() : void 0
          return (
            ge !== void 0 && (Me = ge),
            t.createElement(
              'div',
              Pe({}, An(ze), $ ? {} : ne(O, R), {
                'aria-selected': be,
                className: ve,
                title: Me,
                onMouseMove: function () {
                  x === R || me || D(R)
                },
                onClick: function () {
                  me || ce(X)
                },
                style: Ee
              }),
              t.createElement('div', { className: ''.concat(he, '-content') }, Ie),
              t.isValidElement(y) || be,
              We &&
                t.createElement(
                  Kn,
                  {
                    className: ''.concat(W, '-option-state'),
                    customizeIcon: y,
                    customizeIconProps: { value: X, disabled: me, isSelected: be }
                  },
                  be ? '✓' : null
                )
            )
          )
        }
      )
    )
  },
  Yt = t.forwardRef(Aa)
Yt.displayName = 'OptionList'
var za = [
    'id',
    'mode',
    'prefixCls',
    'backfill',
    'fieldNames',
    'inputValue',
    'searchValue',
    'onSearch',
    'autoClearSearchValue',
    'onSelect',
    'onDeselect',
    'dropdownMatchSelectWidth',
    'filterOption',
    'filterSort',
    'optionFilterProp',
    'optionLabelProp',
    'options',
    'children',
    'defaultActiveFirstOption',
    'menuItemSelectedIcon',
    'virtual',
    'direction',
    'listHeight',
    'listItemHeight',
    'value',
    'defaultValue',
    'labelInValue',
    'onChange'
  ],
  $a = ['inputValue']
function Ka(e) {
  return !e || wn(e) !== 'object'
}
var Ha = t.forwardRef(function (e, n) {
    var a = e.id,
      r = e.mode,
      i = e.prefixCls,
      o = i === void 0 ? 'rc-select' : i,
      l = e.backfill,
      d = e.fieldNames,
      f = e.inputValue,
      u = e.searchValue,
      v = e.onSearch,
      c = e.autoClearSearchValue,
      m = c === void 0 ? !0 : c,
      s = e.onSelect,
      p = e.onDeselect,
      S = e.dropdownMatchSelectWidth,
      b = S === void 0 ? !0 : S,
      w = e.filterOption,
      y = e.filterSort,
      E = e.optionFilterProp,
      z = e.optionLabelProp,
      $ = e.options,
      H = e.children,
      V = e.defaultActiveFirstOption,
      L = e.menuItemSelectedIcon,
      W = e.virtual,
      B = e.direction,
      T = e.listHeight,
      ae = T === void 0 ? 200 : T,
      N = e.listItemHeight,
      q = N === void 0 ? 20 : N,
      oe = e.value,
      G = e.defaultValue,
      x = e.labelInValue,
      M = e.onChange,
      D = tn(e, za),
      ye = va(a),
      ce = Zn(r),
      Q = !!(!$ && H),
      ue = t.useMemo(
        function () {
          return w === void 0 && r === 'combobox' ? !1 : w
        },
        [w, r]
      ),
      ne = t.useMemo(
        function () {
          return Ht(d, Q)
        },
        [JSON.stringify(d), Q]
      ),
      Ce = Yn('', {
        value: u !== void 0 ? u : f,
        postState: function (g) {
          return g || ''
        }
      }),
      Ve = U(Ce, 2),
      O = Ve[0],
      R = Ve[1],
      P = ga($, H, ne, E, z),
      F = P.valueOptions,
      Y = P.labelOptions,
      A = P.options,
      h = t.useCallback(
        function (C) {
          var g = At(C)
          return g.map(function (_) {
            var K, te, pe, qe, Ye
            if (Ka(_)) K = _
            else {
              var cn
              ;(pe = _.key), (te = _.label), (K = (cn = _.value) !== null && cn !== void 0 ? cn : pe)
            }
            var xe = F.get(K)
            if (xe) {
              var dn
              te === void 0 && (te = xe == null ? void 0 : xe[z || ne.label]),
                pe === void 0 && (pe = (dn = xe == null ? void 0 : xe.key) !== null && dn !== void 0 ? dn : K),
                (qe = xe == null ? void 0 : xe.disabled),
                (Ye = xe == null ? void 0 : xe.title)
            }
            return { label: te, value: K, key: pe, disabled: qe, title: Ye }
          })
        },
        [ne, z, F]
      ),
      X = Yn(G, { value: oe }),
      se = U(X, 2),
      de = se[0],
      _e = se[1],
      me = t.useMemo(
        function () {
          var C,
            g = h(de)
          return r === 'combobox' && jr((C = g[0]) === null || C === void 0 ? void 0 : C.value) ? [] : g
        },
        [de, h, r]
      ),
      ge = sa(me, F),
      Ee = U(ge, 2),
      fe = Ee[0],
      Le = Ee[1],
      ze = t.useMemo(
        function () {
          if (!r && fe.length === 1) {
            var C = fe[0]
            if (C.value === null && (C.label === null || C.label === void 0)) return []
          }
          return fe.map(function (g) {
            var _
            return J(J({}, g), {}, { label: (_ = g.label) !== null && _ !== void 0 ? _ : g.value })
          })
        },
        [r, fe]
      ),
      be = t.useMemo(
        function () {
          return new Set(
            fe.map(function (C) {
              return C.value
            })
          )
        },
        [fe]
      )
    t.useEffect(
      function () {
        if (r === 'combobox') {
          var C,
            g = (C = fe[0]) === null || C === void 0 ? void 0 : C.value
          R(Ur(g) ? String(g) : '')
        }
      },
      [fe]
    )
    var he = pt(function (C, g) {
        var _,
          K = g ?? C
        return (_ = {}), ie(_, ne.value, C), ie(_, ne.label, K), _
      }),
      ve = t.useMemo(
        function () {
          if (r !== 'tags') return A
          var C = nn(A),
            g = function (K) {
              return F.has(K)
            }
          return (
            nn(fe)
              .sort(function (_, K) {
                return _.value < K.value ? -1 : 1
              })
              .forEach(function (_) {
                var K = _.value
                g(K) || C.push(he(K, _.label))
              }),
            C
          )
        },
        [he, A, F, fe, r]
      ),
      Re = ca(ve, ne, O, ue, E),
      We = t.useMemo(
        function () {
          return r !== 'tags' ||
            !O ||
            Re.some(function (C) {
              return C[E || 'value'] === O
            }) ||
            Re.some(function (C) {
              return C[ne.value] === O
            })
            ? Re
            : [he(O)].concat(nn(Re))
        },
        [he, E, r, Re, O, ne]
      ),
      Ie = t.useMemo(
        function () {
          return y
            ? nn(We).sort(function (C, g) {
                return y(C, g)
              })
            : We
        },
        [We, y]
      ),
      Me = t.useMemo(
        function () {
          return aa(Ie, { fieldNames: ne, childrenAsData: Q })
        },
        [Ie, ne, Q]
      ),
      Se = function (g) {
        var _ = h(g)
        if (
          (_e(_),
          M &&
            (_.length !== fe.length ||
              _.some(function (pe, qe) {
                var Ye
                return (
                  ((Ye = fe[qe]) === null || Ye === void 0 ? void 0 : Ye.value) !== (pe == null ? void 0 : pe.value)
                )
              })))
        ) {
          var K = x
              ? _
              : _.map(function (pe) {
                  return pe.value
                }),
            te = _.map(function (pe) {
              return Gn(Le(pe.value))
            })
          M(ce ? K : K[0], ce ? te : te[0])
        }
      },
      gn = t.useState(null),
      je = U(gn, 2),
      ln = je[0],
      Be = je[1],
      Sn = t.useState(0),
      $e = U(Sn, 2),
      Je = $e[0],
      ke = $e[1],
      fn = V !== void 0 ? V : r !== 'combobox',
      Xe = t.useCallback(
        function (C, g) {
          var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            K = _.source,
            te = K === void 0 ? 'keyboard' : K
          ke(g), l && r === 'combobox' && C !== null && te === 'keyboard' && Be(String(C))
        },
        [l, r]
      ),
      Qe = function (g, _, K) {
        var te = function () {
          var k,
            I = Le(g)
          return [
            x
              ? {
                  label: I == null ? void 0 : I[ne.label],
                  value: g,
                  key: (k = I == null ? void 0 : I.key) !== null && k !== void 0 ? k : g
                }
              : g,
            Gn(I)
          ]
        }
        if (_ && s) {
          var pe = te(),
            qe = U(pe, 2),
            Ye = qe[0],
            cn = qe[1]
          s(Ye, cn)
        } else if (!_ && p && K !== 'clear') {
          var xe = te(),
            dn = U(xe, 2),
            In = dn[0],
            vn = dn[1]
          p(In, vn)
        }
      },
      un = pt(function (C, g) {
        var _,
          K = ce ? g.selected : !0
        K
          ? (_ = ce ? [].concat(nn(fe), [C]) : [C])
          : (_ = fe.filter(function (te) {
              return te.value !== C
            })),
          Se(_),
          Qe(C, K),
          r === 'combobox' ? Be('') : (!Zn || m) && (R(''), Be(''))
      }),
      sn = function (g, _) {
        Se(g)
        var K = _.type,
          te = _.values
        ;(K === 'remove' || K === 'clear') &&
          te.forEach(function (pe) {
            Qe(pe.value, !1, K)
          })
      },
      rn = function (g, _) {
        if ((R(g), Be(null), _.source === 'submit')) {
          var K = (g || '').trim()
          if (K) {
            var te = Array.from(new Set([].concat(nn(be), [K])))
            Se(te), Qe(K, !0), R('')
          }
          return
        }
        _.source !== 'blur' && (r === 'combobox' && Se(g), v == null || v(g))
      },
      en = function (g) {
        var _ = g
        r !== 'tags' &&
          (_ = g
            .map(function (te) {
              var pe = Y.get(te)
              return pe == null ? void 0 : pe.value
            })
            .filter(function (te) {
              return te !== void 0
            }))
        var K = Array.from(new Set([].concat(nn(be), nn(_))))
        Se(K),
          K.forEach(function (te) {
            Qe(te, !0)
          })
      },
      j = t.useMemo(
        function () {
          var C = W !== !1 && b !== !1
          return J(
            J({}, P),
            {},
            {
              flattenOptions: Me,
              onActiveValue: Xe,
              defaultActiveFirstOption: fn,
              onSelect: un,
              menuItemSelectedIcon: L,
              rawValues: be,
              fieldNames: ne,
              virtual: C,
              direction: B,
              listHeight: ae,
              listItemHeight: q,
              childrenAsData: Q
            }
          )
        },
        [P, Me, Xe, fn, un, L, be, ne, W, b, ae, q, Q]
      )
    return t.createElement(
      Xt.Provider,
      { value: j },
      t.createElement(
        ua,
        Pe({}, D, {
          id: ye,
          prefixCls: o,
          ref: n,
          omitDomProps: $a,
          mode: r,
          displayValues: ze,
          onDisplayValuesChange: sn,
          direction: B,
          searchValue: O,
          onSearch: rn,
          autoClearSearchValue: m,
          onSearchSplit: en,
          dropdownMatchSelectWidth: b,
          OptionList: Yt,
          emptyOptions: !Me.length,
          activeValue: ln,
          activeDescendantId: ''.concat(ye, '_list_').concat(Je)
        })
      )
    )
  }),
  tt = Ha
tt.Option = nt
tt.OptGroup = Bt
const Gt = ({ className: e, size: n = 18 }) =>
  Ae.createElement(
    'svg',
    { width: n, height: n, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: e },
    Ae.createElement('path', {
      d: 'M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z',
      fill: 'currentColor'
    })
  )
Gt.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'CrossIcon',
  props: { size: { defaultValue: { value: '18', computed: !1 }, required: !1 } }
}
const Zt = ({ className: e, size: n = 22 }) =>
  Ae.createElement(
    'svg',
    { className: e, width: n, height: n, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    Ae.createElement('path', {
      d: 'M18.25 7.71423C18.7526 7.71423 19.2547 7.82681 19.7425 8.04863C19.8736 8.10849 20.0269 8.09507 20.1462 8.01054C20.265 7.92685 20.3337 7.78578 20.3272 7.63765C20.2873 6.71942 19.5578 6 18.6667 6H3.66664C2.74746 6 2 6.7688 2 7.71423V11.9999C2 12.9453 2.74746 13.7141 3.66668 13.7141H13.25C13.4803 13.7141 13.6667 13.5225 13.6667 13.2856V12.857C13.6667 12.3087 13.93 11.7881 14.3702 11.4641C14.4671 11.393 14.5297 11.2829 14.5423 11.1616C14.7478 9.19623 16.3421 7.71423 18.25 7.71423ZM5.84684 9.91441C6.04622 10.0329 6.11458 10.2949 5.99942 10.4999C5.92212 10.6372 5.78212 10.7142 5.63809 10.7142C5.56727 10.7142 5.49567 10.6958 5.43016 10.6569L5.33333 10.5994V10.7142C5.33333 10.9511 5.14696 11.1428 4.91665 11.1428C4.68637 11.1428 4.50001 10.9511 4.50001 10.7142V10.5994L4.40317 10.6569C4.33766 10.6958 4.26606 10.7142 4.19524 10.7142C4.05118 10.7142 3.91121 10.6372 3.83391 10.4999C3.71875 10.2949 3.78711 10.0329 3.98649 9.91441L4.08309 9.85707L3.98649 9.79974C3.78711 9.68129 3.71875 9.41929 3.83391 9.21423C3.94907 9.00916 4.20418 8.93885 4.40317 9.05729L4.50001 9.11475V8.99992C4.50001 8.76303 4.68637 8.57134 4.91669 8.57134C5.147 8.57134 5.33337 8.76303 5.33337 8.99992V9.11475L5.4302 9.05725C5.62798 8.93881 5.88391 9.00912 5.99946 9.21419C6.11462 9.41925 6.04626 9.68125 5.84688 9.7997L5.75028 9.85703L5.84684 9.91441ZM9.18021 9.91441C9.37959 10.0329 9.44794 10.2949 9.33279 10.4999C9.25548 10.6372 9.11548 10.7142 8.97146 10.7142C8.90064 10.7142 8.82904 10.6958 8.76353 10.6569L8.66669 10.5994V10.7142C8.66669 10.9511 8.48033 11.1428 8.25001 11.1428C8.0197 11.1428 7.83333 10.9511 7.83333 10.7142V10.5994L7.7365 10.6569C7.67099 10.6958 7.59939 10.7142 7.52857 10.7142C7.3845 10.7142 7.24454 10.6372 7.16724 10.4999C7.05208 10.2949 7.12044 10.0329 7.31981 9.91441L7.41642 9.85707L7.31981 9.79974C7.12044 9.68129 7.05208 9.41929 7.16724 9.21423C7.282 9.00916 7.53669 8.93885 7.7365 9.05729L7.83333 9.11479V8.99996C7.83333 8.76307 8.0197 8.57138 8.25001 8.57138C8.48033 8.57138 8.66669 8.76307 8.66669 8.99996V9.11479L8.76353 9.05729C8.96169 8.93885 9.21681 9.00916 9.33279 9.21423C9.44794 9.41929 9.37959 9.68129 9.18021 9.79974L9.08361 9.85707L9.18021 9.91441ZM12.5135 9.91441C12.7129 10.0329 12.7813 10.2949 12.6661 10.4999C12.5888 10.6372 12.4488 10.7142 12.3048 10.7142C12.234 10.7142 12.1624 10.6958 12.0969 10.6569L12 10.5994V10.7142C12 10.9511 11.8137 11.1428 11.5833 11.1428C11.353 11.1428 11.1667 10.9511 11.1667 10.7142V10.5994L11.0698 10.6569C11.0043 10.6958 10.9327 10.7142 10.8619 10.7142C10.7178 10.7142 10.5779 10.6372 10.5006 10.4999C10.3854 10.2949 10.4538 10.0329 10.6531 9.91441L10.7497 9.85707L10.6531 9.79974C10.4538 9.68129 10.3854 9.41929 10.5006 9.21423C10.6153 9.00916 10.8704 8.93885 11.0698 9.05729L11.1667 9.11479V8.99996C11.1667 8.76307 11.353 8.57138 11.5833 8.57138C11.8137 8.57138 12 8.76307 12 8.99996V9.11479L12.0969 9.05729C12.2954 8.93885 12.5506 9.00916 12.6661 9.21423C12.7813 9.41929 12.7129 9.68129 12.5135 9.79974L12.4169 9.85707L12.5135 9.91441Z',
      fill: 'currentColor'
    }),
    Ae.createElement('path', {
      d: 'M21.1667 12.0001V11.5715C21.1667 9.91754 19.8581 8.57159 18.25 8.57159C16.6419 8.57159 15.3333 9.91754 15.3333 11.5715V12.0001C14.874 12.0001 14.5 12.3847 14.5 12.8572V17.1429C14.5 17.6154 14.874 18 15.3333 18H21.1667C21.6261 18 22 17.6154 22 17.1429V12.8572C22 12.3847 21.6261 12.0001 21.1667 12.0001ZM18.6667 15.2968V15.8572C18.6667 16.0941 18.4803 16.2858 18.25 16.2858C18.0197 16.2858 17.8334 16.0941 17.8334 15.8572V15.2968C17.5889 15.1472 17.4167 14.8845 17.4167 14.5715C17.4167 14.099 17.7906 13.7144 18.25 13.7144C18.7094 13.7144 19.0833 14.099 19.0833 14.5715C19.0834 14.8846 18.9111 15.1472 18.6667 15.2968ZM19.5 12.0001H17V11.5715C17 10.8626 17.5607 10.2859 18.25 10.2859C18.9393 10.2859 19.5 10.8626 19.5 11.5715V12.0001Z',
      fill: 'currentColor'
    })
  )
Zt.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PasswordIcon',
  props: { size: { defaultValue: { value: '22', computed: !1 }, required: !1 } }
}
const Wa = '#848D98',
  Ba = '#D44040',
  Jt = ({ className: e, error: n }) =>
    Ae.createElement(
      'svg',
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: e
      },
      Ae.createElement('circle', { cx: '12', cy: '12', r: '10', fill: n ? Ba : Wa }),
      Ae.createElement('path', {
        d: 'M12 17.375L12 11.125',
        stroke: 'white',
        strokeWidth: '2',
        strokeLinecap: 'round'
      }),
      Ae.createElement('path', {
        d: 'M12 6.875L12 6.76389',
        stroke: 'white',
        strokeWidth: '2.5',
        strokeLinecap: 'round'
      })
    )
Jt.__docgenInfo = { description: '', methods: [], displayName: 'ExclamationMarkIcon' }
const Qt = ({ className: e, size: n = 20 }) =>
  Ae.createElement(
    'svg',
    { className: e, width: n, height: n, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    Ae.createElement('circle', { cx: '10.225', cy: '10.1', r: '7.1', stroke: 'currentColor', strokeWidth: '2.02857' }),
    Ae.createElement('path', {
      d: 'M15.2964 15.1714L20.875 20.75',
      stroke: 'currentColor',
      strokeWidth: '2.02857',
      strokeLinecap: 'round'
    })
  )
Qt.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'SearchIcon',
  props: { size: { defaultValue: { value: '20', computed: !1 }, required: !1 } }
}
const we = {
    root: 'savosya-input_root__8kw4',
    block: 'savosya-input_block__utN8',
    input_root: 'savosya-input_input_root__hMoc',
    small: 'savosya-input_small__C0Pt',
    focus: 'savosya-input_focus__9JcN',
    disabled: 'savosya-input_disabled__y9Xx',
    error: 'savosya-input_error__GXB8',
    root_core: 'savosya-input_root_core__LQ7R',
    label: 'savosya-input_label__vdR-',
    input: 'savosya-input_input__xtNw',
    extra: 'savosya-input_extra__K68S',
    addons_left: 'savosya-input_addons_left__E9kl',
    addons_right: 'savosya-input_addons_right__1N2T',
    clean: 'savosya-input_clean__rZDS',
    addon_focused: 'savosya-input_addon_focused__diXh',
    addon_error: 'savosya-input_addon_error__FHLZ'
  },
  er = t.forwardRef((e, n) => {
    const {
        type: a = 'text',
        label: r,
        disabled: i,
        hint: o,
        error: l,
        errorMsg: d,
        className: f,
        classes: u,
        addonsLeft: v,
        addonsRight: c,
        cleanable: m,
        onChange: s,
        onClean: p,
        cleanIcon: S,
        passedRef: b,
        block: w,
        showTooltip: y,
        tooltipIcon: E,
        tooltipProps: z
      } = e,
      $ = _r(e, [
        'type',
        'label',
        'disabled',
        'hint',
        'error',
        'errorMsg',
        'className',
        'classes',
        'addonsLeft',
        'addonsRight',
        'cleanable',
        'onChange',
        'onClean',
        'cleanIcon',
        'passedRef',
        'block',
        'showTooltip',
        'tooltipIcon',
        'tooltipProps'
      ]),
      H = t.useRef(null),
      [V] = ct(H, 'keyboard'),
      [L] = ct(H, 'mouse'),
      W = t.useCallback(() => {
        p && p(), H.current && !$.value && (H.current.value = '')
      }, [H.current, n]),
      B = t.useCallback(T => {
        s && s(T)
      }, [])
    return t.createElement(
      'div',
      { className: Te(we.root, u == null ? void 0 : u.root, { [we.block]: w }) },
      t.createElement(
        'div',
        {
          className: Te(
            we.input_root,
            { [we.focus]: V, [we.disabled]: i, [we.error]: l },
            f,
            u == null ? void 0 : u.input_root
          )
        },
        a === 'search' &&
          t.createElement(
            'div',
            {
              className: Te(
                we.addons_left,
                { [we.addon_focused]: L, [we.addon_error]: l },
                u == null ? void 0 : u.addons_left
              )
            },
            t.createElement(Qt, null)
          ),
        a === 'password' &&
          t.createElement(
            'div',
            {
              className: Te(
                we.addons_left,
                { [we.addon_focused]: L, [we.addon_error]: l },
                u == null ? void 0 : u.addons_left
              )
            },
            t.createElement(Zt, null)
          ),
        a === 'text' &&
          v &&
          t.createElement(
            'div',
            {
              className: Te(
                we.addons_left,
                { [we.addon_focused]: L, [we.addon_error]: l },
                u == null ? void 0 : u.addons_left
              )
            },
            v
          ),
        t.createElement(
          'div',
          { className: we.root_core },
          t.createElement(
            'input',
            Object.assign(
              { type: a, className: Te(we.input, u == null ? void 0 : u.input), disabled: i, ref: Ir([n, H, b]) },
              $,
              { onChange: B }
            )
          ),
          r && t.createElement('label', { className: Te(we.label, { [we.error]: l }, u == null ? void 0 : u.label) }, r)
        ),
        t.createElement(
          'div',
          { className: Te(we.addons_right, u == null ? void 0 : u.addons_right) },
          c,
          y && t.createElement(Er, Object.assign({}, z), E || t.createElement(Jt, { error: l })),
          m &&
            t.createElement(
              'span',
              { onClick: W, className: Te(we.clean, u == null ? void 0 : u.cleanIcon) },
              S || t.createElement(Gt, null)
            )
        )
      ),
      (o || (l && d)) &&
        t.createElement(
          'div',
          { className: Te(we.extra, u == null ? void 0 : u.extra) },
          o && t.createElement('span', { className: Te({ [we.error]: l && !d }, u == null ? void 0 : u.hint) }, o),
          l && d && t.createElement('span', { className: Te(we.error, u == null ? void 0 : u.error) }, d)
        )
    )
  })
er.__docgenInfo = { description: '', methods: [], displayName: 'Input' }
const qa = () =>
    De('svg', {
      width: '18',
      height: '18',
      viewBox: '0 0 18 18',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: De('path', {
        d: 'M2.625 9.38038L7.52885 13.7727L15.375 4.5',
        stroke: '#4683C8',
        strokeWidth: '2.00909',
        strokeLinecap: 'round'
      })
    }),
  Jn = ({ className: e, size: n = 18, onClick: a }) =>
    De('svg', {
      onClick: a,
      width: n,
      height: n,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: e,
      children: De('path', {
        d: 'M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z',
        fill: 'currentColor'
      })
    })
try {
  ;(Jn.displayName = 'CrossIcon'),
    (Jn.__docgenInfo = {
      description: '',
      displayName: 'CrossIcon',
      props: {
        size: { defaultValue: { value: '18' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !1, type: { name: '(() => void)' } }
      }
    })
} catch {}
const Qn = ({ className: e, size: n = 24, onClick: a }) =>
  De('svg', {
    width: n,
    height: n,
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: e,
    onClick: a,
    children: De('path', {
      d: 'M5.00006 14.4982C4.9996 14.7319 5.08098 14.9583 5.23006 15.1382C5.31401 15.2395 5.41711 15.3232 5.53346 15.3846C5.6498 15.4459 5.77711 15.4837 5.90809 15.4958C6.03906 15.5079 6.17114 15.494 6.29674 15.4549C6.42234 15.4159 6.53901 15.3524 6.64006 15.2682L12.0001 10.7882L17.3701 15.1082C17.4723 15.1913 17.59 15.2533 17.7164 15.2908C17.8427 15.3282 17.9752 15.3403 18.1062 15.3264C18.2373 15.3124 18.3643 15.2727 18.4799 15.2095C18.5955 15.1464 18.6975 15.061 18.7801 14.9582C18.8711 14.8548 18.9398 14.7336 18.9818 14.6023C19.0237 14.4711 19.0381 14.3326 19.0241 14.1955C19.01 14.0584 18.9677 13.9257 18.8999 13.8057C18.8321 13.6857 18.7402 13.581 18.6301 13.4982L12.6301 8.66824C12.4511 8.52116 12.2267 8.44075 11.9951 8.44075C11.7634 8.44075 11.539 8.52116 11.3601 8.66824L5.36006 13.6682C5.23904 13.7686 5.14338 13.896 5.08083 14.0402C5.01828 14.1844 4.99061 14.3413 5.00006 14.4982Z',
      fill: 'currentColor'
    })
  })
try {
  ;(Qn.displayName = 'ChevronIcon'),
    (Qn.__docgenInfo = {
      description: '',
      displayName: 'ChevronIcon',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        size: { defaultValue: { value: '24' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !1, type: { name: '(() => void)' } }
      }
    })
} catch {}
const Ua = e => {
    const n = {}
    return e.reduce((a, r) => Object.assign(a, { [r.value]: r.label }), n)
  },
  ja = (e, n, a = ', ') => (e ? (Array.isArray(e) ? e.map(r => n[r]).join(a) : n[e]) : ''),
  Xa = (e, n) => (n ? (e ? !!n.length : !!n) : !1),
  Ya = (e, n) => (e ? n.filter(a => a.label.toLowerCase().trim().includes(e.toLowerCase().trim())) : n),
  Ga = '_root_bpid6_12',
  Za = '_right_addon_bpid6_19',
  Ja = '_close_bpid6_26',
  Qa = '_chevrone_bpid6_34',
  eo = '_chevrone_open_bpid6_43',
  no = '_menu_bpid6_47',
  to = '_menuItem_bpid6_60',
  ro = '_ellipsis_bpid6_92',
  ao = '_wrap_bpid6_99',
  oo = '_border_bpid6_102',
  lo = '_selected_bpid6_119',
  io = '_disabled_bpid6_124',
  Ze = {
    root: Ga,
    right_addon: Za,
    close: Ja,
    chevrone: Qa,
    chevrone_open: eo,
    menu: no,
    menuItem: to,
    ellipsis: ro,
    wrap: ao,
    border: oo,
    selected: lo,
    disabled: io
  }
const hn = e => {
  var A
  const {
      options: n = [],
      open: a,
      value: r,
      loading: i,
      label: o,
      multiple: l = !1,
      showSearch: d,
      showClean: f = !0,
      disabled: u,
      placeholder: v,
      hint: c,
      error: m,
      errorMsg: s,
      block: p,
      listHeight: S,
      onClose: b,
      onOpen: w,
      onSelect: y,
      onDeselect: E,
      onChange: z,
      onClean: $,
      withAnimation: H = !0,
      optionsSettings: V = {},
      classes: L = {}
    } = e,
    { ellipsis: W = !0, wrap: B = void 0, divider: T = !1 } = V,
    { input: ae, option: N, label: q, dropdown: oe, input_wrapper: G, root: x } = L,
    M = typeof r < 'u',
    D = typeof a == 'boolean',
    ye = t.useMemo(() => Ua(n), [n]),
    ce = t.useRef(null),
    [Q, ue] = t.useState({
      open: !!a,
      entered: !1,
      value: r || (l ? [] : null),
      mode: 'value',
      options: n,
      search: ''
    }),
    ne = () => {
      w && w(), !(u || i) && ue(h => ({ ...h, open: D ? h.open : !0, mode: d ? 'search' : 'value' }))
    },
    Ce = () => {
      b && b(), !(u || i) && ue(h => ({ ...h, open: D ? h.open : !1, mode: 'value', search: '', options: n }))
    },
    Ve = h => {
      const X = h.target.value || ''
      ue(se => ({ ...se, search: X, options: Ya(X, n) }))
    },
    O = (h, X) => {
      var se
      z && z(h, X),
        ue(de => ({ ...de, value: h, open: l || D ? de.open : !1, mode: d && l ? 'search' : 'value' })),
        l || (se = ce == null ? void 0 : ce.current) == null || se.blur()
    },
    R = () => {
      $ && $(), ue(h => ({ ...h, value: l ? [] : null }))
    },
    P = () => {
      var h
      i || u || (Q.open ? (Ce(), (h = ce.current) == null || h.blur()) : ne())
    },
    F = Xa(l, M ? r : Q.value) && Q.entered && f,
    Y = D ? a : Q.open
  return De('div', {
    className: Te(Ze.root, x),
    onMouseEnter: () => ue(h => ({ ...h, entered: !0 })),
    onMouseLeave: () => ue(h => ({ ...h, entered: !1 })),
    children: De(tt, {
      prefixCls: 'eub-select',
      mode: l ? 'multiple' : void 0,
      dropdownClassName: Te(Ze.menu, oe),
      animation: H ? 'slide-up' : void 0,
      menuItemSelectedIcon: De(qa, {}),
      style: { width: '100%' },
      open: Y,
      onSelect: y,
      onDeselect: E,
      value: M ? r : Q.value,
      onChange: O,
      notFoundContent: null,
      listHeight: S,
      getRawInputElement: () =>
        De(er, {
          label: o,
          passedRef: ce,
          block: p,
          addonsRight: De('div', {
            className: Te(Ze.right_addon, { [Ze.close]: F }),
            children: i
              ? De(Mr, { size: 16 })
              : F
              ? De(Jn, { className: Ze.chevrone, onClick: R })
              : De(Qn, { className: Te(Ze.chevrone, { [Ze.chevrone_open]: Q.open }), onClick: P })
          }),
          hint: c,
          error: m,
          errorMsg: s,
          cleanable: !1,
          onFocus: ne,
          onBlur: Ce,
          value: Q.mode === 'search' ? Q.search : ja(M ? r : Q.value, ye),
          onChange: d ? Ve : void 0,
          placeholder: Q.mode === 'search' ? 'Поиск' : v,
          disabled: u,
          readOnly: !d,
          classes: { root: G, input: ae, label: q }
        }),
      children:
        (A = Q.options) == null
          ? void 0
          : A.map(h => {
              var X
              return De(
                nt,
                {
                  className: Te(Ze.menuItem, N, {
                    [Ze.selected]: M
                      ? l
                        ? r == null
                          ? void 0
                          : r.includes(h.value)
                        : h.value === r
                      : l
                      ? (X = Q.value) == null
                        ? void 0
                        : X.includes(h.value)
                      : h.value === Q.value,
                    [Ze.ellipsis]: W,
                    [Ze.wrap]: B,
                    [Ze.border]: T,
                    [Ze.disabled]: h.disabled
                  }),
                  value: h.value,
                  text: h.label,
                  children: h.label
                },
                h.value
              )
            })
    })
  })
}
try {
  ;(hn.displayName = 'Select'),
    (hn.__docgenInfo = {
      description: '',
      displayName: 'Select',
      props: {
        open: { defaultValue: null, description: '', name: 'open', required: !1, type: { name: 'boolean' } },
        options: {
          defaultValue: null,
          description: '',
          name: 'options',
          required: !1,
          type: { name: 'SelectMenuOption[]' }
        },
        value: {
          defaultValue: null,
          description: '',
          name: 'value',
          required: !1,
          type: { name: 'string | string[] | null' }
        },
        loading: { defaultValue: null, description: '', name: 'loading', required: !1, type: { name: 'boolean' } },
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
        multiple: { defaultValue: null, description: '', name: 'multiple', required: !1, type: { name: 'boolean' } },
        showSearch: {
          defaultValue: null,
          description: '',
          name: 'showSearch',
          required: !1,
          type: { name: 'boolean' }
        },
        showClean: { defaultValue: null, description: '', name: 'showClean', required: !1, type: { name: 'boolean' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        placeholder: {
          defaultValue: null,
          description: '',
          name: 'placeholder',
          required: !1,
          type: { name: 'string' }
        },
        hint: { defaultValue: null, description: '', name: 'hint', required: !1, type: { name: 'string' } },
        error: { defaultValue: null, description: '', name: 'error', required: !1, type: { name: 'boolean' } },
        errorMsg: { defaultValue: null, description: '', name: 'errorMsg', required: !1, type: { name: 'string' } },
        listHeight: { defaultValue: null, description: '', name: 'listHeight', required: !1, type: { name: 'number' } },
        block: { defaultValue: null, description: '', name: 'block', required: !1, type: { name: 'boolean' } },
        onOpen: {
          defaultValue: null,
          description: 'handlers',
          name: 'onOpen',
          required: !1,
          type: { name: '(() => void)' }
        },
        onClose: { defaultValue: null, description: '', name: 'onClose', required: !1, type: { name: '(() => void)' } },
        onSelect: {
          defaultValue: null,
          description: '',
          name: 'onSelect',
          required: !1,
          type: { name: '((value: string, option: PassedOption) => void)' }
        },
        onDeselect: {
          defaultValue: null,
          description: '',
          name: 'onDeselect',
          required: !1,
          type: { name: '((value: string, option: PassedOption) => void)' }
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: '((value: string | string[], option: PassedOption | PassedOption[]) => void)' }
        },
        onClean: { defaultValue: null, description: '', name: 'onClean', required: !1, type: { name: '(() => void)' } },
        optionsSettings: {
          defaultValue: null,
          description: 'styles',
          name: 'optionsSettings',
          required: !1,
          type: { name: '{ ellipsis?: boolean; wrap?: boolean; divider?: boolean | undefined; } | undefined' }
        },
        withAnimation: {
          defaultValue: null,
          description: '',
          name: 'withAnimation',
          required: !1,
          type: { name: 'boolean' }
        },
        classes: {
          defaultValue: null,
          description: 'classes',
          name: 'classes',
          required: !1,
          type: {
            name: '{ root?: string; input?: string; input_wrapper?: string | undefined; dropdown?: string | undefined; option?: string | undefined; label?: string | undefined; } | undefined'
          }
        }
      }
    })
} catch {}
const uo = { title: 'Select', component: hn },
  En = [
    { label: 'Long White Long White Long White Long White Long White', value: 'white' },
    { label: 'Black', value: 'black', disabled: !0 },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green', disabled: !0 },
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Purple', value: 'purple' }
  ],
  Dn = {
    args: { options: En, label: 'Цвет', placeholder: '...' },
    argTypes: {
      value: { control: 'text' },
      multiple: { control: { disable: !0 } },
      optionsSettings: { control: { disable: !0 } },
      classes: { control: { disable: !0 } }
    }
  },
  Vn = () => {
    const [e, n] = t.useState(!1),
      [a, r] = t.useState(null)
    return De(hn, {
      value: a,
      onOpen: () => n(!0),
      onClose: () => n(!1),
      onClean: () => r(null),
      onChange: i => r(i),
      open: e,
      label: 'Colors',
      placeholder: 'pick color',
      options: En
    })
  },
  Ln = () => {
    const [e, n] = t.useState([])
    return De(hn, {
      value: e,
      onChange: a => n(a),
      multiple: !0,
      label: 'Colors',
      placeholder: 'pick color',
      showSearch: !0,
      onClean: () => n([]),
      options: En
    })
  },
  On = () =>
    ir('div', {
      style: { display: 'flex', gap: 12 },
      children: [
        De(hn, { multiple: !0, disabled: !0, label: 'Colors', placeholder: 'pick color', options: En }),
        De(hn, { multiple: !0, loading: !0, label: 'Colors', placeholder: 'pick color', options: En }),
        De(hn, { error: !0, errorMsg: 'Ошибка', multiple: !0, label: 'Colors', placeholder: 'pick color', options: En })
      ]
    })
var wt, yt, Rt
Dn.parameters = {
  ...Dn.parameters,
  docs: {
    ...((wt = Dn.parameters) == null ? void 0 : wt.docs),
    source: {
      originalSource: `{
  args: {
    options,
    label: 'Цвет',
    placeholder: '...'
  },
  argTypes: {
    value: {
      control: 'text'
    },
    multiple: {
      control: {
        disable: true
      }
    },
    optionsSettings: {
      control: {
        disable: true
      }
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((Rt = (yt = Dn.parameters) == null ? void 0 : yt.docs) == null ? void 0 : Rt.source)
    }
  }
}
var _t, Et, It
Vn.parameters = {
  ...Vn.parameters,
  docs: {
    ...((_t = Vn.parameters) == null ? void 0 : _t.docs),
    source: {
      originalSource: `() => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  return <Select value={value} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} onClean={() => setValue(null)} onChange={value => setValue((value as string))} open={open} label="Colors" placeholder={'pick color'} options={options} />;
}`,
      ...((It = (Et = Vn.parameters) == null ? void 0 : Et.docs) == null ? void 0 : It.source)
    }
  }
}
var Mt, xt, Nt
Ln.parameters = {
  ...Ln.parameters,
  docs: {
    ...((Mt = Ln.parameters) == null ? void 0 : Mt.docs),
    source: {
      originalSource: `() => {
  const [value, setValue] = useState<string[]>([]);
  return <Select value={value} onChange={value => setValue((value as string[]))} multiple label="Colors" placeholder={'pick color'} showSearch onClean={() => setValue([])} options={options} />;
}`,
      ...((Nt = (xt = Ln.parameters) == null ? void 0 : xt.docs) == null ? void 0 : Nt.source)
    }
  }
}
var Dt, Vt, Lt
On.parameters = {
  ...On.parameters,
  docs: {
    ...((Dt = On.parameters) == null ? void 0 : Dt.docs),
    source: {
      originalSource: `() => {
  return <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Select multiple disabled label="Colors" placeholder={'pick color'} options={options} />
      <Select multiple loading label="Colors" placeholder={'pick color'} options={options} />
      <Select error errorMsg="Ошибка" multiple label="Colors" placeholder={'pick color'} options={options} />
    </div>;
}`,
      ...((Lt = (Vt = On.parameters) == null ? void 0 : Vt.docs) == null ? void 0 : Lt.source)
    }
  }
}
const so = ['Sandbox', 'Controlled', 'Multiple', 'States'],
  _o = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Controlled: Vn, Multiple: Ln, Sandbox: Dn, States: On, __namedExportsOrder: so, default: uo },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { Vn as C, Ln as M, _o as S, On as a, hn as b, Dn as c }
//# sourceMappingURL=Component.stories-779fa867.js.map
