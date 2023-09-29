import { r as p, a as ve } from './index-1cdf6ce0.js'
import { c as pt } from './index-3ffce462.js'
function ko(e = 4) {
  let t = ''
  const o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let n = 0; n < e; n++) t += o.charAt(Math.floor(Math.random() * o.length))
  return t
}
const we = Math.min,
  ae = Math.max,
  Qe = Math.round,
  Je = Math.floor,
  ie = e => ({ x: e, y: e }),
  Bt = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Wt = { start: 'end', end: 'start' }
function it(e, t, o) {
  return ae(e, we(t, o))
}
function $e(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function ue(e) {
  return e.split('-')[0]
}
function Be(e) {
  return e.split('-')[1]
}
function St(e) {
  return e === 'x' ? 'y' : 'x'
}
function st(e) {
  return e === 'y' ? 'height' : 'width'
}
function Ge(e) {
  return ['top', 'bottom'].includes(ue(e)) ? 'y' : 'x'
}
function ct(e) {
  return St(Ge(e))
}
function Ht(e, t, o) {
  o === void 0 && (o = !1)
  const n = Be(e),
    r = ct(e),
    i = st(r)
  let l = r === 'x' ? (n === (o ? 'end' : 'start') ? 'right' : 'left') : n === 'start' ? 'bottom' : 'top'
  return t.reference[i] > t.floating[i] && (l = Ue(l)), [l, Ue(l)]
}
function Mt(e) {
  const t = Ue(e)
  return [lt(e), t, lt(t)]
}
function lt(e) {
  return e.replace(/start|end/g, t => Wt[t])
}
function Ft(e, t, o) {
  const n = ['left', 'right'],
    r = ['right', 'left'],
    i = ['top', 'bottom'],
    l = ['bottom', 'top']
  switch (e) {
    case 'top':
    case 'bottom':
      return o ? (t ? r : n) : t ? n : r
    case 'left':
    case 'right':
      return t ? i : l
    default:
      return []
  }
}
function It(e, t, o, n) {
  const r = Be(e)
  let i = Ft(ue(e), o === 'start', n)
  return r && ((i = i.map(l => l + '-' + r)), t && (i = i.concat(i.map(lt)))), i
}
function Ue(e) {
  return e.replace(/left|right|bottom|top/g, t => Bt[t])
}
function zt(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function At(e) {
  return typeof e != 'number' ? zt(e) : { top: e, right: e, bottom: e, left: e }
}
function Ze(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height }
}
function mt(e, t, o) {
  let { reference: n, floating: r } = e
  const i = Ge(t),
    l = ct(t),
    s = st(l),
    c = ue(t),
    u = i === 'y',
    y = n.x + n.width / 2 - r.width / 2,
    h = n.y + n.height / 2 - r.height / 2,
    w = n[s] / 2 - r[s] / 2
  let d
  switch (c) {
    case 'top':
      d = { x: y, y: n.y - r.height }
      break
    case 'bottom':
      d = { x: y, y: n.y + n.height }
      break
    case 'right':
      d = { x: n.x + n.width, y: h }
      break
    case 'left':
      d = { x: n.x - r.width, y: h }
      break
    default:
      d = { x: n.x, y: n.y }
  }
  switch (Be(t)) {
    case 'start':
      d[l] -= w * (o && u ? -1 : 1)
      break
    case 'end':
      d[l] += w * (o && u ? -1 : 1)
      break
  }
  return d
}
const jt = async (e, t, o) => {
  const { placement: n = 'bottom', strategy: r = 'absolute', middleware: i = [], platform: l } = o,
    s = i.filter(Boolean),
    c = await (l.isRTL == null ? void 0 : l.isRTL(t))
  let u = await l.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: y, y: h } = mt(u, n, c),
    w = n,
    d = {},
    m = 0
  for (let v = 0; v < s.length; v++) {
    const { name: _, fn: g } = s[v],
      {
        x: E,
        y: S,
        data: O,
        reset: R
      } = await g({
        x: y,
        y: h,
        initialPlacement: n,
        placement: w,
        strategy: r,
        middlewareData: d,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t }
      })
    if (((y = E ?? y), (h = S ?? h), (d = { ...d, [_]: { ...d[_], ...O } }), R && m <= 50)) {
      m++,
        typeof R == 'object' &&
          (R.placement && (w = R.placement),
          R.rects &&
            (u = R.rects === !0 ? await l.getElementRects({ reference: e, floating: t, strategy: r }) : R.rects),
          ({ x: y, y: h } = mt(u, w, c))),
        (v = -1)
      continue
    }
  }
  return { x: y, y: h, placement: w, strategy: r, middlewareData: d }
}
async function Rt(e, t) {
  var o
  t === void 0 && (t = {})
  const { x: n, y: r, platform: i, rects: l, elements: s, strategy: c } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: y = 'viewport',
      elementContext: h = 'floating',
      altBoundary: w = !1,
      padding: d = 0
    } = $e(t, e),
    m = At(d),
    _ = s[w ? (h === 'floating' ? 'reference' : 'floating') : h],
    g = Ze(
      await i.getClippingRect({
        element:
          (o = await (i.isElement == null ? void 0 : i.isElement(_))) == null || o
            ? _
            : _.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: y,
        strategy: c
      })
    ),
    E = h === 'floating' ? { ...l.floating, x: n, y: r } : l.reference,
    S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
    O = (await (i.isElement == null ? void 0 : i.isElement(S)))
      ? (await (i.getScale == null ? void 0 : i.getScale(S))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    R = Ze(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: E, offsetParent: S, strategy: c })
        : E
    )
  return {
    top: (g.top - R.top + m.top) / O.y,
    bottom: (R.bottom - g.bottom + m.bottom) / O.y,
    left: (g.left - R.left + m.left) / O.x,
    right: (R.right - g.right + m.right) / O.x
  }
}
const qt = e => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: o, y: n, placement: r, rects: i, platform: l, elements: s, middlewareData: c } = t,
        { element: u, padding: y = 0 } = $e(e, t) || {}
      if (u == null) return {}
      const h = At(y),
        w = { x: o, y: n },
        d = ct(r),
        m = st(d),
        v = await l.getDimensions(u),
        _ = d === 'y',
        g = _ ? 'top' : 'left',
        E = _ ? 'bottom' : 'right',
        S = _ ? 'clientHeight' : 'clientWidth',
        O = i.reference[m] + i.reference[d] - w[d] - i.floating[m],
        R = w[d] - i.reference[d],
        k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u))
      let N = k ? k[S] : 0
      ;(!N || !(await (l.isElement == null ? void 0 : l.isElement(k)))) && (N = s.floating[S] || i.floating[m])
      const j = O / 2 - R / 2,
        Y = N / 2 - v[m] / 2 - 1,
        D = we(h[g], Y),
        F = we(h[E], Y),
        C = D,
        W = N - v[m] - F,
        A = N / 2 - v[m] / 2 + j,
        L = it(C, A, W),
        $ = !c.arrow && Be(r) != null && A != L && i.reference[m] / 2 - (A < C ? D : F) - v[m] / 2 < 0,
        H = $ ? (A < C ? A - C : A - W) : 0
      return { [d]: w[d] + H, data: { [d]: L, centerOffset: A - L - H, ...($ && { alignmentOffset: H }) }, reset: $ }
    }
  }),
  Vt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var o, n
          const { placement: r, middlewareData: i, rects: l, initialPlacement: s, platform: c, elements: u } = t,
            {
              mainAxis: y = !0,
              crossAxis: h = !0,
              fallbackPlacements: w,
              fallbackStrategy: d = 'bestFit',
              fallbackAxisSideDirection: m = 'none',
              flipAlignment: v = !0,
              ..._
            } = $e(e, t)
          if ((o = i.arrow) != null && o.alignmentOffset) return {}
          const g = ue(r),
            E = ue(s) === s,
            S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            O = w || (E || !v ? [Ue(s)] : Mt(s))
          !w && m !== 'none' && O.push(...It(s, v, m, S))
          const R = [s, ...O],
            k = await Rt(t, _),
            N = []
          let j = ((n = i.flip) == null ? void 0 : n.overflows) || []
          if ((y && N.push(k[g]), h)) {
            const C = Ht(r, l, S)
            N.push(k[C[0]], k[C[1]])
          }
          if (((j = [...j, { placement: r, overflows: N }]), !N.every(C => C <= 0))) {
            var Y, D
            const C = (((Y = i.flip) == null ? void 0 : Y.index) || 0) + 1,
              W = R[C]
            if (W) return { data: { index: C, overflows: j }, reset: { placement: W } }
            let A =
              (D = j.filter(L => L.overflows[0] <= 0).sort((L, $) => L.overflows[1] - $.overflows[1])[0]) == null
                ? void 0
                : D.placement
            if (!A)
              switch (d) {
                case 'bestFit': {
                  var F
                  const L =
                    (F = j
                      .map($ => [$.placement, $.overflows.filter(H => H > 0).reduce((H, de) => H + de, 0)])
                      .sort(($, H) => $[1] - H[1])[0]) == null
                      ? void 0
                      : F[0]
                  L && (A = L)
                  break
                }
                case 'initialPlacement':
                  A = s
                  break
              }
            if (r !== A) return { reset: { placement: A } }
          }
          return {}
        }
      }
    )
  }
async function Kt(e, t) {
  const { placement: o, platform: n, elements: r } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)),
    l = ue(o),
    s = Be(o),
    c = Ge(o) === 'y',
    u = ['left', 'top'].includes(l) ? -1 : 1,
    y = i && c ? -1 : 1,
    h = $e(t, e)
  let {
    mainAxis: w,
    crossAxis: d,
    alignmentAxis: m
  } = typeof h == 'number'
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h }
  return (
    s && typeof m == 'number' && (d = s === 'end' ? m * -1 : m), c ? { x: d * y, y: w * u } : { x: w * u, y: d * y }
  )
}
const Yt = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          const { x: o, y: n } = t,
            r = await Kt(t, e)
          return { x: o + r.x, y: n + r.y, data: r }
        }
      }
    )
  },
  Xt = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: o, y: n, placement: r } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: s = {
                fn: _ => {
                  let { x: g, y: E } = _
                  return { x: g, y: E }
                }
              },
              ...c
            } = $e(e, t),
            u = { x: o, y: n },
            y = await Rt(t, c),
            h = Ge(ue(r)),
            w = St(h)
          let d = u[w],
            m = u[h]
          if (i) {
            const _ = w === 'y' ? 'top' : 'left',
              g = w === 'y' ? 'bottom' : 'right',
              E = d + y[_],
              S = d - y[g]
            d = it(E, d, S)
          }
          if (l) {
            const _ = h === 'y' ? 'top' : 'left',
              g = h === 'y' ? 'bottom' : 'right',
              E = m + y[_],
              S = m - y[g]
            m = it(E, m, S)
          }
          const v = s.fn({ ...t, [w]: d, [h]: m })
          return { ...v, data: { x: v.x - o, y: v.y - n } }
        }
      }
    )
  }
function le(e) {
  return Tt(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function z(e) {
  var t
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function ee(e) {
  var t
  return (t = (Tt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Tt(e) {
  return e instanceof Node || e instanceof z(e).Node
}
function G(e) {
  return e instanceof Element || e instanceof z(e).Element
}
function Q(e) {
  return e instanceof HTMLElement || e instanceof z(e).HTMLElement
}
function ht(e) {
  return typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot
}
function We(e) {
  const { overflow: t, overflowX: o, overflowY: n, display: r } = V(e)
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !['inline', 'contents'].includes(r)
}
function Jt(e) {
  return ['table', 'td', 'th'].includes(le(e))
}
function at(e) {
  const t = ut(),
    o = V(e)
  return (
    o.transform !== 'none' ||
    o.perspective !== 'none' ||
    (o.containerType ? o.containerType !== 'normal' : !1) ||
    (!t && (o.backdropFilter ? o.backdropFilter !== 'none' : !1)) ||
    (!t && (o.filter ? o.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some(n => (o.willChange || '').includes(n)) ||
    ['paint', 'layout', 'strict', 'content'].some(n => (o.contain || '').includes(n))
  )
}
function Qt(e) {
  let t = be(e)
  for (; Q(t) && !et(t); ) {
    if (at(t)) return t
    t = be(t)
  }
  return null
}
function ut() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none')
}
function et(e) {
  return ['html', 'body', '#document'].includes(le(e))
}
function V(e) {
  return z(e).getComputedStyle(e)
}
function tt(e) {
  return G(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset }
}
function be(e) {
  if (le(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (ht(e) && e.host) || ee(e)
  return ht(t) ? t.host : t
}
function Ot(e) {
  const t = be(e)
  return et(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Q(t) && We(t) ? t : Ot(t)
}
function Pe(e, t, o) {
  var n
  t === void 0 && (t = []), o === void 0 && (o = !0)
  const r = Ot(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    l = z(r)
  return i
    ? t.concat(l, l.visualViewport || [], We(r) ? r : [], l.frameElement && o ? Pe(l.frameElement) : [])
    : t.concat(r, Pe(r, [], o))
}
function Ct(e) {
  const t = V(e)
  let o = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0
  const r = Q(e),
    i = r ? e.offsetWidth : o,
    l = r ? e.offsetHeight : n,
    s = Qe(o) !== i || Qe(n) !== l
  return s && ((o = i), (n = l)), { width: o, height: n, $: s }
}
function ft(e) {
  return G(e) ? e : e.contextElement
}
function ge(e) {
  const t = ft(e)
  if (!Q(t)) return ie(1)
  const o = t.getBoundingClientRect(),
    { width: n, height: r, $: i } = Ct(t)
  let l = (i ? Qe(o.width) : o.width) / n,
    s = (i ? Qe(o.height) : o.height) / r
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: l, y: s }
}
const Ut = ie(0)
function Lt(e) {
  const t = z(e)
  return !ut() || !t.visualViewport ? Ut : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function Zt(e, t, o) {
  return t === void 0 && (t = !1), !o || (t && o !== z(e)) ? !1 : t
}
function fe(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1)
  const r = e.getBoundingClientRect(),
    i = ft(e)
  let l = ie(1)
  t && (n ? G(n) && (l = ge(n)) : (l = ge(e)))
  const s = Zt(i, o, n) ? Lt(i) : ie(0)
  let c = (r.left + s.x) / l.x,
    u = (r.top + s.y) / l.y,
    y = r.width / l.x,
    h = r.height / l.y
  if (i) {
    const w = z(i),
      d = n && G(n) ? z(n) : n
    let m = w.frameElement
    for (; m && n && d !== w; ) {
      const v = ge(m),
        _ = m.getBoundingClientRect(),
        g = V(m),
        E = _.left + (m.clientLeft + parseFloat(g.paddingLeft)) * v.x,
        S = _.top + (m.clientTop + parseFloat(g.paddingTop)) * v.y
      ;(c *= v.x), (u *= v.y), (y *= v.x), (h *= v.y), (c += E), (u += S), (m = z(m).frameElement)
    }
  }
  return Ze({ width: y, height: h, x: c, y: u })
}
function Gt(e) {
  let { rect: t, offsetParent: o, strategy: n } = e
  const r = Q(o),
    i = ee(o)
  if (o === i) return t
  let l = { scrollLeft: 0, scrollTop: 0 },
    s = ie(1)
  const c = ie(0)
  if ((r || (!r && n !== 'fixed')) && ((le(o) !== 'body' || We(i)) && (l = tt(o)), Q(o))) {
    const u = fe(o)
    ;(s = ge(o)), (c.x = u.x + o.clientLeft), (c.y = u.y + o.clientTop)
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - l.scrollLeft * s.x + c.x,
    y: t.y * s.y - l.scrollTop * s.y + c.y
  }
}
function eo(e) {
  return Array.from(e.getClientRects())
}
function kt(e) {
  return fe(ee(e)).left + tt(e).scrollLeft
}
function to(e) {
  const t = ee(e),
    o = tt(e),
    n = e.ownerDocument.body,
    r = ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
  let l = -o.scrollLeft + kt(e)
  const s = -o.scrollTop
  return V(n).direction === 'rtl' && (l += ae(t.clientWidth, n.clientWidth) - r), { width: r, height: i, x: l, y: s }
}
function oo(e, t) {
  const o = z(e),
    n = ee(e),
    r = o.visualViewport
  let i = n.clientWidth,
    l = n.clientHeight,
    s = 0,
    c = 0
  if (r) {
    ;(i = r.width), (l = r.height)
    const u = ut()
    ;(!u || (u && t === 'fixed')) && ((s = r.offsetLeft), (c = r.offsetTop))
  }
  return { width: i, height: l, x: s, y: c }
}
function no(e, t) {
  const o = fe(e, !0, t === 'fixed'),
    n = o.top + e.clientTop,
    r = o.left + e.clientLeft,
    i = Q(e) ? ge(e) : ie(1),
    l = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    c = r * i.x,
    u = n * i.y
  return { width: l, height: s, x: c, y: u }
}
function yt(e, t, o) {
  let n
  if (t === 'viewport') n = oo(e, o)
  else if (t === 'document') n = to(ee(e))
  else if (G(t)) n = no(t, o)
  else {
    const r = Lt(e)
    n = { ...t, x: t.x - r.x, y: t.y - r.y }
  }
  return Ze(n)
}
function Nt(e, t) {
  const o = be(e)
  return o === t || !G(o) || et(o) ? !1 : V(o).position === 'fixed' || Nt(o, t)
}
function ro(e, t) {
  const o = t.get(e)
  if (o) return o
  let n = Pe(e, [], !1).filter(s => G(s) && le(s) !== 'body'),
    r = null
  const i = V(e).position === 'fixed'
  let l = i ? be(e) : e
  for (; G(l) && !et(l); ) {
    const s = V(l),
      c = at(l)
    !c && s.position === 'fixed' && (r = null),
      (
        i
          ? !c && !r
          : (!c && s.position === 'static' && !!r && ['absolute', 'fixed'].includes(r.position)) ||
            (We(l) && !c && Nt(e, l))
      )
        ? (n = n.filter(y => y !== l))
        : (r = s),
      (l = be(l))
  }
  return t.set(e, n), n
}
function io(e) {
  let { element: t, boundary: o, rootBoundary: n, strategy: r } = e
  const l = [...(o === 'clippingAncestors' ? ro(t, this._c) : [].concat(o)), n],
    s = l[0],
    c = l.reduce(
      (u, y) => {
        const h = yt(t, y, r)
        return (
          (u.top = ae(h.top, u.top)),
          (u.right = we(h.right, u.right)),
          (u.bottom = we(h.bottom, u.bottom)),
          (u.left = ae(h.left, u.left)),
          u
        )
      },
      yt(t, s, r)
    )
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top }
}
function lo(e) {
  return Ct(e)
}
function so(e, t, o) {
  const n = Q(t),
    r = ee(t),
    i = o === 'fixed',
    l = fe(e, !0, i, t)
  let s = { scrollLeft: 0, scrollTop: 0 }
  const c = ie(0)
  if (n || (!n && !i))
    if (((le(t) !== 'body' || We(r)) && (s = tt(t)), n)) {
      const u = fe(t, !0, i, t)
      ;(c.x = u.x + t.clientLeft), (c.y = u.y + t.clientTop)
    } else r && (c.x = kt(r))
  return { x: l.left + s.scrollLeft - c.x, y: l.top + s.scrollTop - c.y, width: l.width, height: l.height }
}
function vt(e, t) {
  return !Q(e) || V(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent
}
function Dt(e, t) {
  const o = z(e)
  if (!Q(e)) return o
  let n = vt(e, t)
  for (; n && Jt(n) && V(n).position === 'static'; ) n = vt(n, t)
  return n && (le(n) === 'html' || (le(n) === 'body' && V(n).position === 'static' && !at(n))) ? o : n || Qt(e) || o
}
const co = async function (e) {
  let { reference: t, floating: o, strategy: n } = e
  const r = this.getOffsetParent || Dt,
    i = this.getDimensions
  return { reference: so(t, await r(o), n), floating: { x: 0, y: 0, ...(await i(o)) } }
}
function ao(e) {
  return V(e).direction === 'rtl'
}
const uo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gt,
  getDocumentElement: ee,
  getClippingRect: io,
  getOffsetParent: Dt,
  getElementRects: co,
  getClientRects: eo,
  getDimensions: lo,
  getScale: ge,
  isElement: G,
  isRTL: ao
}
function fo(e, t) {
  let o = null,
    n
  const r = ee(e)
  function i() {
    clearTimeout(n), o && o.disconnect(), (o = null)
  }
  function l(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i()
    const { left: u, top: y, width: h, height: w } = e.getBoundingClientRect()
    if ((s || t(), !h || !w)) return
    const d = Je(y),
      m = Je(r.clientWidth - (u + h)),
      v = Je(r.clientHeight - (y + w)),
      _ = Je(u),
      E = { rootMargin: -d + 'px ' + -m + 'px ' + -v + 'px ' + -_ + 'px', threshold: ae(0, we(1, c)) || 1 }
    let S = !0
    function O(R) {
      const k = R[0].intersectionRatio
      if (k !== c) {
        if (!S) return l()
        k
          ? l(!1, k)
          : (n = setTimeout(() => {
              l(!1, 1e-7)
            }, 100))
      }
      S = !1
    }
    try {
      o = new IntersectionObserver(O, { ...E, root: r.ownerDocument })
    } catch {
      o = new IntersectionObserver(O, E)
    }
    o.observe(e)
  }
  return l(!0), i
}
function po(e, t, o, n) {
  n === void 0 && (n = {})
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == 'function',
      layoutShift: s = typeof IntersectionObserver == 'function',
      animationFrame: c = !1
    } = n,
    u = ft(e),
    y = r || i ? [...(u ? Pe(u) : []), ...Pe(t)] : []
  y.forEach(g => {
    r && g.addEventListener('scroll', o, { passive: !0 }), i && g.addEventListener('resize', o)
  })
  const h = u && s ? fo(u, o) : null
  let w = -1,
    d = null
  l &&
    ((d = new ResizeObserver(g => {
      let [E] = g
      E &&
        E.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(w),
        (w = requestAnimationFrame(() => {
          d && d.observe(t)
        }))),
        o()
    })),
    u && !c && d.observe(u),
    d.observe(t))
  let m,
    v = c ? fe(e) : null
  c && _()
  function _() {
    const g = fe(e)
    v && (g.x !== v.x || g.y !== v.y || g.width !== v.width || g.height !== v.height) && o(),
      (v = g),
      (m = requestAnimationFrame(_))
  }
  return (
    o(),
    () => {
      y.forEach(g => {
        r && g.removeEventListener('scroll', o), i && g.removeEventListener('resize', o)
      }),
        h && h(),
        d && d.disconnect(),
        (d = null),
        c && cancelAnimationFrame(m)
    }
  )
}
const gt = (e, t, o) => {
  const n = new Map(),
    r = { platform: uo, ...o },
    i = { ...r.platform, _c: n }
  return jt(e, t, { ...r, platform: i })
}
/*
 * React Tooltip
 * {@link https://github.com/ReactTooltip/react-tooltip}
 * @copyright ReactTooltip Team
 * @license MIT
 */ const mo = 'react-tooltip-core-styles',
  ho = 'react-tooltip-base-styles',
  wt = { core: !1, base: !1 }
function bt({ css: e, id: t = ho, type: o = 'base', ref: n }) {
  var r, i
  if (
    !e ||
    typeof document > 'u' ||
    wt[o] ||
    (o === 'core' &&
      typeof process < 'u' &&
      !((r = process == null ? void 0 : process.env) === null || r === void 0) &&
      r.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
    (o !== 'base' &&
      typeof process < 'u' &&
      !((i = process == null ? void 0 : process.env) === null || i === void 0) &&
      i.REACT_TOOLTIP_DISABLE_BASE_STYLES)
  )
    return
  o === 'core' && (t = mo), n || (n = {})
  const { insertAt: l } = n
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`)
  const s = document.head || document.getElementsByTagName('head')[0],
    c = document.createElement('style')
  ;(c.id = t),
    (c.type = 'text/css'),
    l === 'top' && s.firstChild ? s.insertBefore(c, s.firstChild) : s.appendChild(c),
    c.styleSheet ? (c.styleSheet.cssText = e) : c.appendChild(document.createTextNode(e)),
    (wt[o] = !0)
}
const xt = (e, t, o) => {
    let n = null
    return function (...r) {
      const i = () => {
        ;(n = null), o || e.apply(this, r)
      }
      o && !n && (e.apply(this, r), (n = setTimeout(i, t))), o || (n && clearTimeout(n), (n = setTimeout(i, t)))
    }
  },
  yo = 'DEFAULT_TOOLTIP_ID',
  vo = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {}
  },
  go = p.createContext({ getTooltipData: () => vo })
function Pt(e = yo) {
  return p.useContext(go).getTooltipData(e)
}
const wo = typeof window < 'u' ? p.useLayoutEffect : p.useEffect,
  bo = e => {
    if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1
    const t = getComputedStyle(e)
    return ['overflow', 'overflow-x', 'overflow-y'].some(o => {
      const n = t.getPropertyValue(o)
      return n === 'auto' || n === 'scroll'
    })
  },
  Et = e => {
    if (!e) return null
    let t = e.parentElement
    for (; t; ) {
      if (bo(t)) return t
      t = t.parentElement
    }
    return document.scrollingElement || document.documentElement
  },
  _t = async ({
    elementReference: e = null,
    tooltipReference: t = null,
    tooltipArrowReference: o = null,
    place: n = 'top',
    offset: r = 10,
    strategy: i = 'absolute',
    middlewares: l = [Yt(Number(r)), Vt(), Xt({ padding: 5 })],
    border: s
  }) => {
    if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n }
    if (t === null) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n }
    const c = l
    return o
      ? (c.push(qt({ element: o, padding: 5 })),
        gt(e, t, { placement: n, strategy: i, middleware: c }).then(({ x: u, y, placement: h, middlewareData: w }) => {
          var d, m
          const v = { left: `${u}px`, top: `${y}px`, border: s },
            { x: _, y: g } = (d = w.arrow) !== null && d !== void 0 ? d : { x: 0, y: 0 },
            E =
              (m = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[h.split('-')[0]]) !== null &&
              m !== void 0
                ? m
                : 'bottom',
            S = s && { borderBottom: s, borderRight: s }
          let O = 0
          if (s) {
            const R = `${s}`.match(/(\d+)px/)
            O = R != null && R[1] ? Number(R[1]) : 1
          }
          return {
            tooltipStyles: v,
            tooltipArrowStyles: {
              left: _ != null ? `${_}px` : '',
              top: g != null ? `${g}px` : '',
              right: '',
              bottom: '',
              ...S,
              [E]: `-${4 + O}px`
            },
            place: h
          }
        }))
      : gt(e, t, { placement: 'bottom', strategy: i, middleware: c }).then(({ x: u, y, placement: h }) => ({
          tooltipStyles: { left: `${u}px`, top: `${y}px` },
          tooltipArrowStyles: {},
          place: h
        }))
  }
var xo = 'core-styles-module_tooltip__3vRRp',
  Eo = 'core-styles-module_fixed__pcSol',
  _o = 'core-styles-module_arrow__cvMwQ',
  So = 'core-styles-module_noArrow__xock6',
  Ao = 'core-styles-module_clickable__ZuTTB',
  Ro = 'core-styles-module_show__Nt9eE',
  rt = {
    tooltip: 'styles-module_tooltip__mnnfp',
    arrow: 'styles-module_arrow__K0L3T',
    dark: 'styles-module_dark__xNqje',
    light: 'styles-module_light__Z6W-X',
    success: 'styles-module_success__A2AKt',
    warning: 'styles-module_warning__SCK0X',
    error: 'styles-module_error__JvumD',
    info: 'styles-module_info__BWdHW'
  }
const To = ({
    id: e,
    className: t,
    classNameArrow: o,
    variant: n = 'dark',
    anchorId: r,
    anchorSelect: i,
    place: l = 'top',
    offset: s = 10,
    events: c = ['hover'],
    openOnClick: u = !1,
    positionStrategy: y = 'absolute',
    middlewares: h,
    wrapper: w,
    delayShow: d = 0,
    delayHide: m = 0,
    float: v = !1,
    hidden: _ = !1,
    noArrow: g = !1,
    clickable: E = !1,
    closeOnEsc: S = !1,
    closeOnScroll: O = !1,
    closeOnResize: R = !1,
    style: k,
    position: N,
    afterShow: j,
    afterHide: Y,
    content: D,
    contentWrapperRef: F,
    isOpen: C,
    setIsOpen: W,
    activeAnchor: A,
    setActiveAnchor: L,
    border: $,
    opacity: H,
    arrowColor: de
  }) => {
    const I = p.useRef(null),
      te = p.useRef(null),
      M = p.useRef(null),
      q = p.useRef(null),
      [He, Me] = p.useState(l),
      [xe, Fe] = p.useState({}),
      [Ie, ze] = p.useState({}),
      [K, je] = p.useState(!1),
      [Ee, pe] = p.useState(!1),
      _e = p.useRef(!1),
      Se = p.useRef(null),
      { anchorRefs: Ae, setActiveAnchor: qe } = Pt(e),
      me = p.useRef(!1),
      [oe, Re] = p.useState([]),
      se = p.useRef(!1),
      he = u || c.includes('click')
    wo(
      () => (
        (se.current = !0),
        () => {
          se.current = !1
        }
      ),
      []
    ),
      p.useEffect(() => {
        if (!K) {
          const f = setTimeout(() => {
            pe(!1)
          }, 150)
          return () => {
            clearTimeout(f)
          }
        }
        return () => null
      }, [K])
    const X = f => {
      se.current &&
        (f && pe(!0),
        setTimeout(() => {
          se.current && (W == null || W(f), C === void 0 && je(f))
        }, 10))
    }
    p.useEffect(() => {
      if (C === void 0) return () => null
      C && pe(!0)
      const f = setTimeout(() => {
        je(C)
      }, 10)
      return () => {
        clearTimeout(f)
      }
    }, [C]),
      p.useEffect(() => {
        K !== _e.current && ((_e.current = K), K ? j == null || j() : Y == null || Y())
      }, [K])
    const ye = (f = m) => {
        q.current && clearTimeout(q.current),
          (q.current = setTimeout(() => {
            me.current || X(!1)
          }, f))
      },
      ne = f => {
        var b
        if (!f) return
        const a = (b = f.currentTarget) !== null && b !== void 0 ? b : f.target
        if (!(a != null && a.isConnected)) return L(null), void qe({ current: null })
        d
          ? (M.current && clearTimeout(M.current),
            (M.current = setTimeout(() => {
              X(!0)
            }, d)))
          : X(!0),
          L(a),
          qe({ current: a }),
          q.current && clearTimeout(q.current)
      },
      Ve = () => {
        E ? ye(m || 100) : m ? ye() : X(!1), M.current && clearTimeout(M.current)
      },
      Te = ({ x: f, y: b }) => {
        _t({
          place: l,
          offset: s,
          elementReference: {
            getBoundingClientRect: () => ({ x: f, y: b, width: 0, height: 0, top: b, left: f, right: f, bottom: b })
          },
          tooltipReference: I.current,
          tooltipArrowReference: te.current,
          strategy: y,
          middlewares: h,
          border: $
        }).then(a => {
          Object.keys(a.tooltipStyles).length && Fe(a.tooltipStyles),
            Object.keys(a.tooltipArrowStyles).length && ze(a.tooltipArrowStyles),
            Me(a.place)
        })
      },
      Ke = f => {
        if (!f) return
        const b = f,
          a = { x: b.clientX, y: b.clientY }
        Te(a), (Se.current = a)
      },
      Ye = f => {
        ne(f), m && ye()
      },
      Oe = f => {
        var b
        ;[document.querySelector(`[id='${r}']`), ...oe].some(a => (a == null ? void 0 : a.contains(f.target))) ||
          (!((b = I.current) === null || b === void 0) && b.contains(f.target)) ||
          (X(!1), M.current && clearTimeout(M.current))
      },
      Ce = xt(ne, 50, !0),
      ce = xt(Ve, 50, !0),
      re = p.useCallback(() => {
        N
          ? Te(N)
          : v
          ? Se.current && Te(Se.current)
          : _t({
              place: l,
              offset: s,
              elementReference: A,
              tooltipReference: I.current,
              tooltipArrowReference: te.current,
              strategy: y,
              middlewares: h,
              border: $
            }).then(f => {
              se.current &&
                (Object.keys(f.tooltipStyles).length && Fe(f.tooltipStyles),
                Object.keys(f.tooltipArrowStyles).length && ze(f.tooltipArrowStyles),
                Me(f.place))
            })
      }, [K, A, D, k, l, s, y, N, v])
    p.useEffect(() => {
      var f, b
      const a = new Set(Ae)
      oe.forEach(Z => {
        a.add({ current: Z })
      })
      const x = document.querySelector(`[id='${r}']`)
      x && a.add({ current: x })
      const T = () => {
          X(!1)
        },
        B = Et(A),
        P = Et(I.current)
      O &&
        (window.addEventListener('scroll', T),
        B == null || B.addEventListener('scroll', T),
        P == null || P.addEventListener('scroll', T))
      let J = null
      R
        ? window.addEventListener('resize', T)
        : A && I.current && (J = po(A, I.current, re, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }))
      const ke = Z => {
        Z.key === 'Escape' && X(!1)
      }
      S && window.addEventListener('keydown', ke)
      const U = []
      he
        ? (window.addEventListener('click', Oe), U.push({ event: 'click', listener: Ye }))
        : (U.push(
            { event: 'mouseenter', listener: Ce },
            { event: 'mouseleave', listener: ce },
            { event: 'focus', listener: Ce },
            { event: 'blur', listener: ce }
          ),
          v && U.push({ event: 'mousemove', listener: Ke }))
      const Xe = () => {
          me.current = !0
        },
        dt = () => {
          ;(me.current = !1), Ve()
        }
      return (
        E &&
          !he &&
          ((f = I.current) === null || f === void 0 || f.addEventListener('mouseenter', Xe),
          (b = I.current) === null || b === void 0 || b.addEventListener('mouseleave', dt)),
        U.forEach(({ event: Z, listener: Ne }) => {
          a.forEach(ot => {
            var De
            ;(De = ot.current) === null || De === void 0 || De.addEventListener(Z, Ne)
          })
        }),
        () => {
          var Z, Ne
          O &&
            (window.removeEventListener('scroll', T),
            B == null || B.removeEventListener('scroll', T),
            P == null || P.removeEventListener('scroll', T)),
            R ? window.removeEventListener('resize', T) : J == null || J(),
            he && window.removeEventListener('click', Oe),
            S && window.removeEventListener('keydown', ke),
            E &&
              !he &&
              ((Z = I.current) === null || Z === void 0 || Z.removeEventListener('mouseenter', Xe),
              (Ne = I.current) === null || Ne === void 0 || Ne.removeEventListener('mouseleave', dt)),
            U.forEach(({ event: ot, listener: De }) => {
              a.forEach($t => {
                var nt
                ;(nt = $t.current) === null || nt === void 0 || nt.removeEventListener(ot, De)
              })
            })
        }
      )
    }, [A, re, Ee, Ae, oe, S, c]),
      p.useEffect(() => {
        let f = i ?? ''
        !f && e && (f = `[data-tooltip-id='${e}']`)
        const b = new MutationObserver(a => {
          const x = []
          a.forEach(T => {
            if (
              (T.type === 'attributes' &&
                T.attributeName === 'data-tooltip-id' &&
                T.target.getAttribute('data-tooltip-id') === e &&
                x.push(T.target),
              T.type === 'childList' &&
                (A &&
                  [...T.removedNodes].some(B => {
                    var P
                    return (
                      !!(!((P = B == null ? void 0 : B.contains) === null || P === void 0) && P.call(B, A)) &&
                      (pe(!1),
                      X(!1),
                      L(null),
                      M.current && clearTimeout(M.current),
                      q.current && clearTimeout(q.current),
                      !0)
                    )
                  }),
                f))
            )
              try {
                const B = [...T.addedNodes].filter(P => P.nodeType === 1)
                x.push(...B.filter(P => P.matches(f))), x.push(...B.flatMap(P => [...P.querySelectorAll(f)]))
              } catch {}
          }),
            x.length && Re(T => [...T, ...x])
        })
        return (
          b.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ['data-tooltip-id']
          }),
          () => {
            b.disconnect()
          }
        )
      }, [e, i, A]),
      p.useEffect(() => {
        re()
      }, [re]),
      p.useEffect(() => {
        if (!(F != null && F.current)) return () => null
        const f = new ResizeObserver(() => {
          re()
        })
        return (
          f.observe(F.current),
          () => {
            f.disconnect()
          }
        )
      }, [D, F == null ? void 0 : F.current]),
      p.useEffect(() => {
        var f
        const b = document.querySelector(`[id='${r}']`),
          a = [...oe, b]
        ;(A && a.includes(A)) || L((f = oe[0]) !== null && f !== void 0 ? f : b)
      }, [r, oe, A]),
      p.useEffect(
        () => () => {
          M.current && clearTimeout(M.current), q.current && clearTimeout(q.current)
        },
        []
      ),
      p.useEffect(() => {
        let f = i
        if ((!f && e && (f = `[data-tooltip-id='${e}']`), f))
          try {
            const b = Array.from(document.querySelectorAll(f))
            Re(b)
          } catch {
            Re([])
          }
      }, [e, i])
    const Le = !_ && D && K && Object.keys(xe).length > 0
    return Ee
      ? ve.createElement(
          w,
          {
            id: e,
            role: 'tooltip',
            className: pt('react-tooltip', xo, rt.tooltip, rt[n], t, `react-tooltip__place-${He}`, {
              'react-tooltip__show': Le,
              [Ro]: Le,
              [Eo]: y === 'fixed',
              [Ao]: E
            }),
            style: { ...k, ...xe, opacity: H !== void 0 && Le ? H : void 0 },
            ref: I
          },
          D,
          ve.createElement(w, {
            className: pt('react-tooltip-arrow', _o, rt.arrow, o, { [So]: g }),
            style: { ...Ie, background: de ? `linear-gradient(to right bottom, transparent 50%, ${de} 50%)` : void 0 },
            ref: te
          })
        )
      : null
  },
  Oo = ({ content: e }) => ve.createElement('span', { dangerouslySetInnerHTML: { __html: e } }),
  No = ({
    id: e,
    anchorId: t,
    anchorSelect: o,
    content: n,
    html: r,
    render: i,
    className: l,
    classNameArrow: s,
    variant: c = 'dark',
    place: u = 'top',
    offset: y = 10,
    wrapper: h = 'div',
    children: w = null,
    events: d = ['hover'],
    openOnClick: m = !1,
    positionStrategy: v = 'absolute',
    middlewares: _,
    delayShow: g = 0,
    delayHide: E = 0,
    float: S = !1,
    hidden: O = !1,
    noArrow: R = !1,
    clickable: k = !1,
    closeOnEsc: N = !1,
    closeOnScroll: j = !1,
    closeOnResize: Y = !1,
    style: D,
    position: F,
    isOpen: C,
    disableStyleInjection: W = !1,
    border: A,
    opacity: L,
    arrowColor: $,
    setIsOpen: H,
    afterShow: de,
    afterHide: I
  }) => {
    const [te, M] = p.useState(n),
      [q, He] = p.useState(r),
      [Me, xe] = p.useState(u),
      [Fe, Ie] = p.useState(c),
      [ze, K] = p.useState(y),
      [je, Ee] = p.useState(g),
      [pe, _e] = p.useState(E),
      [Se, Ae] = p.useState(S),
      [qe, me] = p.useState(O),
      [oe, Re] = p.useState(h),
      [se, he] = p.useState(d),
      [X, ye] = p.useState(v),
      [ne, Ve] = p.useState(null),
      Te = p.useRef(W),
      { anchorRefs: Ke, activeAnchor: Ye } = Pt(e),
      Oe = f =>
        f == null
          ? void 0
          : f.getAttributeNames().reduce((b, a) => {
              var x
              return (
                a.startsWith('data-tooltip-') &&
                  (b[a.replace(/^data-tooltip-/, '')] =
                    (x = f == null ? void 0 : f.getAttribute(a)) !== null && x !== void 0 ? x : null),
                b
              )
            }, {}),
      Ce = f => {
        const b = {
          place: a => {
            var x
            xe((x = a) !== null && x !== void 0 ? x : u)
          },
          content: a => {
            M(a ?? n)
          },
          html: a => {
            He(a ?? r)
          },
          variant: a => {
            var x
            Ie((x = a) !== null && x !== void 0 ? x : c)
          },
          offset: a => {
            K(a === null ? y : Number(a))
          },
          wrapper: a => {
            var x
            Re((x = a) !== null && x !== void 0 ? x : h)
          },
          events: a => {
            const x = a == null ? void 0 : a.split(' ')
            he(x ?? d)
          },
          'position-strategy': a => {
            var x
            ye((x = a) !== null && x !== void 0 ? x : v)
          },
          'delay-show': a => {
            Ee(a === null ? g : Number(a))
          },
          'delay-hide': a => {
            _e(a === null ? E : Number(a))
          },
          float: a => {
            Ae(a === null ? S : a === 'true')
          },
          hidden: a => {
            me(a === null ? O : a === 'true')
          }
        }
        Object.values(b).forEach(a => a(null)),
          Object.entries(f).forEach(([a, x]) => {
            var T
            ;(T = b[a]) === null || T === void 0 || T.call(b, x)
          })
      }
    p.useEffect(() => {
      M(n)
    }, [n]),
      p.useEffect(() => {
        He(r)
      }, [r]),
      p.useEffect(() => {
        xe(u)
      }, [u]),
      p.useEffect(() => {
        Ie(c)
      }, [c]),
      p.useEffect(() => {
        K(y)
      }, [y]),
      p.useEffect(() => {
        Ee(g)
      }, [g]),
      p.useEffect(() => {
        _e(E)
      }, [E]),
      p.useEffect(() => {
        Ae(S)
      }, [S]),
      p.useEffect(() => {
        me(O)
      }, [O]),
      p.useEffect(() => {
        ye(v)
      }, [v]),
      p.useEffect(() => {
        Te.current !== W && console.warn('[react-tooltip] Do not change `disableStyleInjection` dynamically.')
      }, [W]),
      p.useEffect(() => {
        typeof window < 'u' &&
          window.dispatchEvent(
            new CustomEvent('react-tooltip-inject-styles', { detail: { disableCore: W === 'core', disableBase: W } })
          )
      }, []),
      p.useEffect(() => {
        var f
        const b = new Set(Ke)
        let a = o
        if ((!a && e && (a = `[data-tooltip-id='${e}']`), a))
          try {
            document.querySelectorAll(a).forEach(J => {
              b.add({ current: J })
            })
          } catch {
            console.warn(`[react-tooltip] "${a}" is not a valid CSS selector`)
          }
        const x = document.querySelector(`[id='${t}']`)
        if ((x && b.add({ current: x }), !b.size)) return () => null
        const T = (f = ne ?? x) !== null && f !== void 0 ? f : Ye.current,
          B = new MutationObserver(J => {
            J.forEach(ke => {
              var U
              if (
                !T ||
                ke.type !== 'attributes' ||
                !(!((U = ke.attributeName) === null || U === void 0) && U.startsWith('data-tooltip-'))
              )
                return
              const Xe = Oe(T)
              Ce(Xe)
            })
          }),
          P = { attributes: !0, childList: !1, subtree: !1 }
        if (T) {
          const J = Oe(T)
          Ce(J), B.observe(T, P)
        }
        return () => {
          B.disconnect()
        }
      }, [Ke, Ye, ne, t, o]),
      p.useEffect(() => {
        D != null && D.border && console.warn('[react-tooltip] Do not set `style.border`. Use `border` prop instead.'),
          A && !CSS.supports('border', `${A}`) && console.warn(`[react-tooltip] "${A}" is not a valid \`border\`.`),
          D != null &&
            D.opacity &&
            console.warn('[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead.'),
          L && !CSS.supports('opacity', `${L}`) && console.warn(`[react-tooltip] "${L}" is not a valid \`opacity\`.`)
      }, [])
    let ce = w
    const re = p.useRef(null)
    if (i) {
      const f = i({ content: te ?? null, activeAnchor: ne })
      ce = f ? ve.createElement('div', { ref: re, className: 'react-tooltip-content-wrapper' }, f) : null
    } else te && (ce = te)
    q && (ce = ve.createElement(Oo, { content: q }))
    const Le = {
      id: e,
      anchorId: t,
      anchorSelect: o,
      className: l,
      classNameArrow: s,
      content: ce,
      contentWrapperRef: re,
      place: Me,
      variant: Fe,
      offset: ze,
      wrapper: oe,
      events: se,
      openOnClick: m,
      positionStrategy: X,
      middlewares: _,
      delayShow: je,
      delayHide: pe,
      float: Se,
      hidden: qe,
      noArrow: R,
      clickable: k,
      closeOnEsc: N,
      closeOnScroll: j,
      closeOnResize: Y,
      style: D,
      position: F,
      isOpen: C,
      border: A,
      opacity: L,
      arrowColor: $,
      setIsOpen: H,
      afterShow: de,
      afterHide: I,
      activeAnchor: ne,
      setActiveAnchor: f => Ve(f)
    }
    return ve.createElement(To, { ...Le })
  }
typeof window < 'u' &&
  window.addEventListener('react-tooltip-inject-styles', e => {
    e.detail.disableCore ||
      bt({
        css: ':root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}',
        type: 'core'
      }),
      e.detail.disableBase ||
        bt({
          css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
          type: 'base'
        })
  })
export { No as W, ko as g }
//# sourceMappingURL=react-tooltip.min-2c7bf4b5.js.map
