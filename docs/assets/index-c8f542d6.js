import { c as fu, g as ju } from './index-1cdf6ce0.js'
function Dr(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = Array(t); ++r < t; ) a[r] = e(u[r], r, u)
  return a
}
var Ar = Dr
function or() {
  ;(this.__data__ = []), (this.size = 0)
}
var Fr = or
function Cr(u, e) {
  return u === e || (u !== u && e !== e)
}
var be = Cr,
  lr = be
function cr(u, e) {
  for (var r = u.length; r--; ) if (lr(u[r][0], e)) return r
  return -1
}
var gu = cr,
  Er = gu,
  pr = Array.prototype,
  fr = pr.splice
function Br(u) {
  var e = this.__data__,
    r = Er(e, u)
  if (r < 0) return !1
  var t = e.length - 1
  return r == t ? e.pop() : fr.call(e, r, 1), --this.size, !0
}
var hr = Br,
  yr = gu
function dr(u) {
  var e = this.__data__,
    r = yr(e, u)
  return r < 0 ? void 0 : e[r][1]
}
var vr = dr,
  gr = gu
function mr(u) {
  return gr(this.__data__, u) > -1
}
var _r = mr,
  xr = gu
function Tr(u, e) {
  var r = this.__data__,
    t = xr(r, u)
  return t < 0 ? (++this.size, r.push([u, e])) : (r[t][1] = e), this
}
var br = Tr,
  Sr = Fr,
  $r = hr,
  wr = vr,
  Or = _r,
  Nr = br
function uu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
uu.prototype.clear = Sr
uu.prototype.delete = $r
uu.prototype.get = wr
uu.prototype.has = Or
uu.prototype.set = Nr
var mu = uu,
  Pr = mu
function Ir() {
  ;(this.__data__ = new Pr()), (this.size = 0)
}
var Rr = Ir
function Lr(u) {
  var e = this.__data__,
    r = e.delete(u)
  return (this.size = e.size), r
}
var Mr = Lr
function kr(u) {
  return this.__data__.get(u)
}
var jr = kr
function Ur(u) {
  return this.__data__.has(u)
}
var Gr = Ur,
  Kr = typeof fu == 'object' && fu && fu.Object === Object && fu,
  Se = Kr,
  Hr = Se,
  qr = typeof self == 'object' && self && self.Object === Object && self,
  Wr = Hr || qr || Function('return this')(),
  H = Wr,
  zr = H,
  Vr = zr.Symbol,
  _u = Vr,
  Xu = _u,
  $e = Object.prototype,
  Jr = $e.hasOwnProperty,
  Qr = $e.toString,
  su = Xu ? Xu.toStringTag : void 0
function Yr(u) {
  var e = Jr.call(u, su),
    r = u[su]
  try {
    u[su] = void 0
    var t = !0
  } catch {}
  var a = Qr.call(u)
  return t && (e ? (u[su] = r) : delete u[su]), a
}
var Xr = Yr,
  Zr = Object.prototype,
  ut = Zr.toString
function et(u) {
  return ut.call(u)
}
var rt = et,
  Zu = _u,
  tt = Xr,
  at = rt,
  nt = '[object Null]',
  it = '[object Undefined]',
  ue = Zu ? Zu.toStringTag : void 0
function st(u) {
  return u == null ? (u === void 0 ? it : nt) : ue && ue in Object(u) ? tt(u) : at(u)
}
var Cu = st
function Dt(u) {
  var e = typeof u
  return u != null && (e == 'object' || e == 'function')
}
var Uu = Dt,
  At = Cu,
  ot = Uu,
  Ft = '[object AsyncFunction]',
  Ct = '[object Function]',
  lt = '[object GeneratorFunction]',
  ct = '[object Proxy]'
function Et(u) {
  if (!ot(u)) return !1
  var e = At(u)
  return e == Ct || e == lt || e == Ft || e == ct
}
var Gu = Et
const so = ju(Gu)
var pt = H,
  ft = pt['__core-js_shared__'],
  Bt = ft,
  Ou = Bt,
  ee = (function () {
    var u = /[^.]+$/.exec((Ou && Ou.keys && Ou.keys.IE_PROTO) || '')
    return u ? 'Symbol(src)_1.' + u : ''
  })()
function ht(u) {
  return !!ee && ee in u
}
var yt = ht,
  dt = Function.prototype,
  vt = dt.toString
function gt(u) {
  if (u != null) {
    try {
      return vt.call(u)
    } catch {}
    try {
      return u + ''
    } catch {}
  }
  return ''
}
var we = gt,
  mt = Gu,
  _t = yt,
  xt = Uu,
  Tt = we,
  bt = /[\\^$.*+?()[\]{}|]/g,
  St = /^\[object .+?Constructor\]$/,
  $t = Function.prototype,
  wt = Object.prototype,
  Ot = $t.toString,
  Nt = wt.hasOwnProperty,
  Pt = RegExp(
    '^' +
      Ot.call(Nt)
        .replace(bt, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  )
function It(u) {
  if (!xt(u) || _t(u)) return !1
  var e = mt(u) ? Pt : St
  return e.test(Tt(u))
}
var Rt = It
function Lt(u, e) {
  return u == null ? void 0 : u[e]
}
var Mt = Lt,
  kt = Rt,
  jt = Mt
function Ut(u, e) {
  var r = jt(u, e)
  return kt(r) ? r : void 0
}
var Y = Ut,
  Gt = Y,
  Kt = H,
  Ht = Gt(Kt, 'Map'),
  Ku = Ht,
  qt = Y,
  Wt = qt(Object, 'create'),
  xu = Wt,
  re = xu
function zt() {
  ;(this.__data__ = re ? re(null) : {}), (this.size = 0)
}
var Vt = zt
function Jt(u) {
  var e = this.has(u) && delete this.__data__[u]
  return (this.size -= e ? 1 : 0), e
}
var Qt = Jt,
  Yt = xu,
  Xt = '__lodash_hash_undefined__',
  Zt = Object.prototype,
  u0 = Zt.hasOwnProperty
function e0(u) {
  var e = this.__data__
  if (Yt) {
    var r = e[u]
    return r === Xt ? void 0 : r
  }
  return u0.call(e, u) ? e[u] : void 0
}
var r0 = e0,
  t0 = xu,
  a0 = Object.prototype,
  n0 = a0.hasOwnProperty
function i0(u) {
  var e = this.__data__
  return t0 ? e[u] !== void 0 : n0.call(e, u)
}
var s0 = i0,
  D0 = xu,
  A0 = '__lodash_hash_undefined__'
function o0(u, e) {
  var r = this.__data__
  return (this.size += this.has(u) ? 0 : 1), (r[u] = D0 && e === void 0 ? A0 : e), this
}
var F0 = o0,
  C0 = Vt,
  l0 = Qt,
  c0 = r0,
  E0 = s0,
  p0 = F0
function eu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
eu.prototype.clear = C0
eu.prototype.delete = l0
eu.prototype.get = c0
eu.prototype.has = E0
eu.prototype.set = p0
var f0 = eu,
  te = f0,
  B0 = mu,
  h0 = Ku
function y0() {
  ;(this.size = 0), (this.__data__ = { hash: new te(), map: new (h0 || B0)(), string: new te() })
}
var d0 = y0
function v0(u) {
  var e = typeof u
  return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? u !== '__proto__' : u === null
}
var g0 = v0,
  m0 = g0
function _0(u, e) {
  var r = u.__data__
  return m0(e) ? r[typeof e == 'string' ? 'string' : 'hash'] : r.map
}
var Tu = _0,
  x0 = Tu
function T0(u) {
  var e = x0(this, u).delete(u)
  return (this.size -= e ? 1 : 0), e
}
var b0 = T0,
  S0 = Tu
function $0(u) {
  return S0(this, u).get(u)
}
var w0 = $0,
  O0 = Tu
function N0(u) {
  return O0(this, u).has(u)
}
var P0 = N0,
  I0 = Tu
function R0(u, e) {
  var r = I0(this, u),
    t = r.size
  return r.set(u, e), (this.size += r.size == t ? 0 : 1), this
}
var L0 = R0,
  M0 = d0,
  k0 = b0,
  j0 = w0,
  U0 = P0,
  G0 = L0
function ru(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.clear(); ++e < r; ) {
    var t = u[e]
    this.set(t[0], t[1])
  }
}
ru.prototype.clear = M0
ru.prototype.delete = k0
ru.prototype.get = j0
ru.prototype.has = U0
ru.prototype.set = G0
var Hu = ru,
  K0 = mu,
  H0 = Ku,
  q0 = Hu,
  W0 = 200
function z0(u, e) {
  var r = this.__data__
  if (r instanceof K0) {
    var t = r.__data__
    if (!H0 || t.length < W0 - 1) return t.push([u, e]), (this.size = ++r.size), this
    r = this.__data__ = new q0(t)
  }
  return r.set(u, e), (this.size = r.size), this
}
var V0 = z0,
  J0 = mu,
  Q0 = Rr,
  Y0 = Mr,
  X0 = jr,
  Z0 = Gr,
  ua = V0
function tu(u) {
  var e = (this.__data__ = new J0(u))
  this.size = e.size
}
tu.prototype.clear = Q0
tu.prototype.delete = Y0
tu.prototype.get = X0
tu.prototype.has = Z0
tu.prototype.set = ua
var Oe = tu,
  ea = '__lodash_hash_undefined__'
function ra(u) {
  return this.__data__.set(u, ea), this
}
var ta = ra
function aa(u) {
  return this.__data__.has(u)
}
var na = aa,
  ia = Hu,
  sa = ta,
  Da = na
function hu(u) {
  var e = -1,
    r = u == null ? 0 : u.length
  for (this.__data__ = new ia(); ++e < r; ) this.add(u[e])
}
hu.prototype.add = hu.prototype.push = sa
hu.prototype.has = Da
var Aa = hu
function oa(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length; ++r < t; ) if (e(u[r], r, u)) return !0
  return !1
}
var Fa = oa
function Ca(u, e) {
  return u.has(e)
}
var la = Ca,
  ca = Aa,
  Ea = Fa,
  pa = la,
  fa = 1,
  Ba = 2
function ha(u, e, r, t, a, s) {
  var n = r & fa,
    l = u.length,
    p = e.length
  if (l != p && !(n && p > l)) return !1
  var E = s.get(u),
    T = s.get(e)
  if (E && T) return E == e && T == u
  var x = -1,
    F = !0,
    m = r & Ba ? new ca() : void 0
  for (s.set(u, e), s.set(e, u); ++x < l; ) {
    var d = u[x],
      c = e[x]
    if (t) var f = n ? t(c, d, x, e, u, s) : t(d, c, x, u, e, s)
    if (f !== void 0) {
      if (f) continue
      F = !1
      break
    }
    if (m) {
      if (
        !Ea(e, function (I, L) {
          if (!pa(m, L) && (d === I || a(d, I, r, t, s))) return m.push(L)
        })
      ) {
        F = !1
        break
      }
    } else if (!(d === c || a(d, c, r, t, s))) {
      F = !1
      break
    }
  }
  return s.delete(u), s.delete(e), F
}
var Ne = ha,
  ya = H,
  da = ya.Uint8Array,
  va = da
function ga(u) {
  var e = -1,
    r = Array(u.size)
  return (
    u.forEach(function (t, a) {
      r[++e] = [a, t]
    }),
    r
  )
}
var ma = ga
function _a(u) {
  var e = -1,
    r = Array(u.size)
  return (
    u.forEach(function (t) {
      r[++e] = t
    }),
    r
  )
}
var xa = _a,
  ae = _u,
  ne = va,
  Ta = be,
  ba = Ne,
  Sa = ma,
  $a = xa,
  wa = 1,
  Oa = 2,
  Na = '[object Boolean]',
  Pa = '[object Date]',
  Ia = '[object Error]',
  Ra = '[object Map]',
  La = '[object Number]',
  Ma = '[object RegExp]',
  ka = '[object Set]',
  ja = '[object String]',
  Ua = '[object Symbol]',
  Ga = '[object ArrayBuffer]',
  Ka = '[object DataView]',
  ie = ae ? ae.prototype : void 0,
  Nu = ie ? ie.valueOf : void 0
function Ha(u, e, r, t, a, s, n) {
  switch (r) {
    case Ka:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset) return !1
      ;(u = u.buffer), (e = e.buffer)
    case Ga:
      return !(u.byteLength != e.byteLength || !s(new ne(u), new ne(e)))
    case Na:
    case Pa:
    case La:
      return Ta(+u, +e)
    case Ia:
      return u.name == e.name && u.message == e.message
    case Ma:
    case ja:
      return u == e + ''
    case Ra:
      var l = Sa
    case ka:
      var p = t & wa
      if ((l || (l = $a), u.size != e.size && !p)) return !1
      var E = n.get(u)
      if (E) return E == e
      ;(t |= Oa), n.set(u, e)
      var T = ba(l(u), l(e), t, a, s, n)
      return n.delete(u), T
    case Ua:
      if (Nu) return Nu.call(u) == Nu.call(e)
  }
  return !1
}
var qa = Ha
function Wa(u, e) {
  for (var r = -1, t = e.length, a = u.length; ++r < t; ) u[a + r] = e[r]
  return u
}
var za = Wa,
  Va = Array.isArray,
  W = Va,
  Ja = za,
  Qa = W
function Ya(u, e, r) {
  var t = e(u)
  return Qa(u) ? t : Ja(t, r(u))
}
var Xa = Ya
function Za(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = 0, s = []; ++r < t; ) {
    var n = u[r]
    e(n, r, u) && (s[a++] = n)
  }
  return s
}
var un = Za
function en() {
  return []
}
var rn = en,
  tn = un,
  an = rn,
  nn = Object.prototype,
  sn = nn.propertyIsEnumerable,
  se = Object.getOwnPropertySymbols,
  Dn = se
    ? function (u) {
        return u == null
          ? []
          : ((u = Object(u)),
            tn(se(u), function (e) {
              return sn.call(u, e)
            }))
      }
    : an,
  An = Dn
function on(u, e) {
  for (var r = -1, t = Array(u); ++r < u; ) t[r] = e(r)
  return t
}
var Fn = on
function Cn(u) {
  return u != null && typeof u == 'object'
}
var lu = Cn,
  ln = Cu,
  cn = lu,
  En = '[object Arguments]'
function pn(u) {
  return cn(u) && ln(u) == En
}
var fn = pn,
  De = fn,
  Bn = lu,
  Pe = Object.prototype,
  hn = Pe.hasOwnProperty,
  yn = Pe.propertyIsEnumerable,
  dn = De(
    (function () {
      return arguments
    })()
  )
    ? De
    : function (u) {
        return Bn(u) && hn.call(u, 'callee') && !yn.call(u, 'callee')
      },
  Ie = dn,
  yu = { exports: {} }
function vn() {
  return !1
}
var gn = vn
yu.exports
;(function (u, e) {
  var r = H,
    t = gn,
    a = e && !e.nodeType && e,
    s = a && !0 && u && !u.nodeType && u,
    n = s && s.exports === a,
    l = n ? r.Buffer : void 0,
    p = l ? l.isBuffer : void 0,
    E = p || t
  u.exports = E
})(yu, yu.exports)
var Re = yu.exports,
  mn = 9007199254740991,
  _n = /^(?:0|[1-9]\d*)$/
function xn(u, e) {
  var r = typeof u
  return (e = e ?? mn), !!e && (r == 'number' || (r != 'symbol' && _n.test(u))) && u > -1 && u % 1 == 0 && u < e
}
var Le = xn,
  Tn = 9007199254740991
function bn(u) {
  return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= Tn
}
var qu = bn,
  Sn = Cu,
  $n = qu,
  wn = lu,
  On = '[object Arguments]',
  Nn = '[object Array]',
  Pn = '[object Boolean]',
  In = '[object Date]',
  Rn = '[object Error]',
  Ln = '[object Function]',
  Mn = '[object Map]',
  kn = '[object Number]',
  jn = '[object Object]',
  Un = '[object RegExp]',
  Gn = '[object Set]',
  Kn = '[object String]',
  Hn = '[object WeakMap]',
  qn = '[object ArrayBuffer]',
  Wn = '[object DataView]',
  zn = '[object Float32Array]',
  Vn = '[object Float64Array]',
  Jn = '[object Int8Array]',
  Qn = '[object Int16Array]',
  Yn = '[object Int32Array]',
  Xn = '[object Uint8Array]',
  Zn = '[object Uint8ClampedArray]',
  ui = '[object Uint16Array]',
  ei = '[object Uint32Array]',
  S = {}
S[zn] = S[Vn] = S[Jn] = S[Qn] = S[Yn] = S[Xn] = S[Zn] = S[ui] = S[ei] = !0
S[On] =
  S[Nn] =
  S[qn] =
  S[Pn] =
  S[Wn] =
  S[In] =
  S[Rn] =
  S[Ln] =
  S[Mn] =
  S[kn] =
  S[jn] =
  S[Un] =
  S[Gn] =
  S[Kn] =
  S[Hn] =
    !1
function ri(u) {
  return wn(u) && $n(u.length) && !!S[Sn(u)]
}
var ti = ri
function ai(u) {
  return function (e) {
    return u(e)
  }
}
var ni = ai,
  du = { exports: {} }
du.exports
;(function (u, e) {
  var r = Se,
    t = e && !e.nodeType && e,
    a = t && !0 && u && !u.nodeType && u,
    s = a && a.exports === t,
    n = s && r.process,
    l = (function () {
      try {
        var p = a && a.require && a.require('util').types
        return p || (n && n.binding && n.binding('util'))
      } catch {}
    })()
  u.exports = l
})(du, du.exports)
var ii = du.exports,
  si = ti,
  Di = ni,
  Ae = ii,
  oe = Ae && Ae.isTypedArray,
  Ai = oe ? Di(oe) : si,
  Me = Ai,
  oi = Fn,
  Fi = Ie,
  Ci = W,
  li = Re,
  ci = Le,
  Ei = Me,
  pi = Object.prototype,
  fi = pi.hasOwnProperty
function Bi(u, e) {
  var r = Ci(u),
    t = !r && Fi(u),
    a = !r && !t && li(u),
    s = !r && !t && !a && Ei(u),
    n = r || t || a || s,
    l = n ? oi(u.length, String) : [],
    p = l.length
  for (var E in u)
    (e || fi.call(u, E)) &&
      !(
        n &&
        (E == 'length' ||
          (a && (E == 'offset' || E == 'parent')) ||
          (s && (E == 'buffer' || E == 'byteLength' || E == 'byteOffset')) ||
          ci(E, p))
      ) &&
      l.push(E)
  return l
}
var hi = Bi,
  yi = Object.prototype
function di(u) {
  var e = u && u.constructor,
    r = (typeof e == 'function' && e.prototype) || yi
  return u === r
}
var vi = di
function gi(u, e) {
  return function (r) {
    return u(e(r))
  }
}
var ke = gi,
  mi = ke,
  _i = mi(Object.keys, Object),
  xi = _i,
  Ti = vi,
  bi = xi,
  Si = Object.prototype,
  $i = Si.hasOwnProperty
function wi(u) {
  if (!Ti(u)) return bi(u)
  var e = []
  for (var r in Object(u)) $i.call(u, r) && r != 'constructor' && e.push(r)
  return e
}
var Oi = wi,
  Ni = Gu,
  Pi = qu
function Ii(u) {
  return u != null && Pi(u.length) && !Ni(u)
}
var Ri = Ii,
  Li = hi,
  Mi = Oi,
  ki = Ri
function ji(u) {
  return ki(u) ? Li(u) : Mi(u)
}
var Wu = ji,
  Ui = Xa,
  Gi = An,
  Ki = Wu
function Hi(u) {
  return Ui(u, Ki, Gi)
}
var qi = Hi,
  Fe = qi,
  Wi = 1,
  zi = Object.prototype,
  Vi = zi.hasOwnProperty
function Ji(u, e, r, t, a, s) {
  var n = r & Wi,
    l = Fe(u),
    p = l.length,
    E = Fe(e),
    T = E.length
  if (p != T && !n) return !1
  for (var x = p; x--; ) {
    var F = l[x]
    if (!(n ? F in e : Vi.call(e, F))) return !1
  }
  var m = s.get(u),
    d = s.get(e)
  if (m && d) return m == e && d == u
  var c = !0
  s.set(u, e), s.set(e, u)
  for (var f = n; ++x < p; ) {
    F = l[x]
    var I = u[F],
      L = e[F]
    if (t) var z = n ? t(L, I, F, e, u, s) : t(I, L, F, u, e, s)
    if (!(z === void 0 ? I === L || a(I, L, r, t, s) : z)) {
      c = !1
      break
    }
    f || (f = F == 'constructor')
  }
  if (c && !f) {
    var M = u.constructor,
      _ = e.constructor
    M != _ &&
      'constructor' in u &&
      'constructor' in e &&
      !(typeof M == 'function' && M instanceof M && typeof _ == 'function' && _ instanceof _) &&
      (c = !1)
  }
  return s.delete(u), s.delete(e), c
}
var Qi = Ji,
  Yi = Y,
  Xi = H,
  Zi = Yi(Xi, 'DataView'),
  us = Zi,
  es = Y,
  rs = H,
  ts = es(rs, 'Promise'),
  as = ts,
  ns = Y,
  is = H,
  ss = ns(is, 'Set'),
  Ds = ss,
  As = Y,
  os = H,
  Fs = As(os, 'WeakMap'),
  Cs = Fs,
  Iu = us,
  Ru = Ku,
  Lu = as,
  Mu = Ds,
  ku = Cs,
  je = Cu,
  au = we,
  Ce = '[object Map]',
  ls = '[object Object]',
  le = '[object Promise]',
  ce = '[object Set]',
  Ee = '[object WeakMap]',
  pe = '[object DataView]',
  cs = au(Iu),
  Es = au(Ru),
  ps = au(Lu),
  fs = au(Mu),
  Bs = au(ku),
  Q = je
;((Iu && Q(new Iu(new ArrayBuffer(1))) != pe) ||
  (Ru && Q(new Ru()) != Ce) ||
  (Lu && Q(Lu.resolve()) != le) ||
  (Mu && Q(new Mu()) != ce) ||
  (ku && Q(new ku()) != Ee)) &&
  (Q = function (u) {
    var e = je(u),
      r = e == ls ? u.constructor : void 0,
      t = r ? au(r) : ''
    if (t)
      switch (t) {
        case cs:
          return pe
        case Es:
          return Ce
        case ps:
          return le
        case fs:
          return ce
        case Bs:
          return Ee
      }
    return e
  })
var hs = Q,
  Pu = Oe,
  ys = Ne,
  ds = qa,
  vs = Qi,
  fe = hs,
  Be = W,
  he = Re,
  gs = Me,
  ms = 1,
  ye = '[object Arguments]',
  de = '[object Array]',
  Bu = '[object Object]',
  _s = Object.prototype,
  ve = _s.hasOwnProperty
function xs(u, e, r, t, a, s) {
  var n = Be(u),
    l = Be(e),
    p = n ? de : fe(u),
    E = l ? de : fe(e)
  ;(p = p == ye ? Bu : p), (E = E == ye ? Bu : E)
  var T = p == Bu,
    x = E == Bu,
    F = p == E
  if (F && he(u)) {
    if (!he(e)) return !1
    ;(n = !0), (T = !1)
  }
  if (F && !T) return s || (s = new Pu()), n || gs(u) ? ys(u, e, r, t, a, s) : ds(u, e, p, r, t, a, s)
  if (!(r & ms)) {
    var m = T && ve.call(u, '__wrapped__'),
      d = x && ve.call(e, '__wrapped__')
    if (m || d) {
      var c = m ? u.value() : u,
        f = d ? e.value() : e
      return s || (s = new Pu()), a(c, f, r, t, s)
    }
  }
  return F ? (s || (s = new Pu()), vs(u, e, r, t, a, s)) : !1
}
var Ts = xs,
  bs = Ts,
  ge = lu
function Ue(u, e, r, t, a) {
  return u === e ? !0 : u == null || e == null || (!ge(u) && !ge(e)) ? u !== u && e !== e : bs(u, e, r, t, Ue, a)
}
var Ge = Ue,
  Ss = Oe,
  $s = Ge,
  ws = 1,
  Os = 2
function Ns(u, e, r, t) {
  var a = r.length,
    s = a,
    n = !t
  if (u == null) return !s
  for (u = Object(u); a--; ) {
    var l = r[a]
    if (n && l[2] ? l[1] !== u[l[0]] : !(l[0] in u)) return !1
  }
  for (; ++a < s; ) {
    l = r[a]
    var p = l[0],
      E = u[p],
      T = l[1]
    if (n && l[2]) {
      if (E === void 0 && !(p in u)) return !1
    } else {
      var x = new Ss()
      if (t) var F = t(E, T, p, u, e, x)
      if (!(F === void 0 ? $s(T, E, ws | Os, t, x) : F)) return !1
    }
  }
  return !0
}
var Ps = Ns,
  Is = Uu
function Rs(u) {
  return u === u && !Is(u)
}
var Ke = Rs,
  Ls = Ke,
  Ms = Wu
function ks(u) {
  for (var e = Ms(u), r = e.length; r--; ) {
    var t = e[r],
      a = u[t]
    e[r] = [t, a, Ls(a)]
  }
  return e
}
var js = ks
function Us(u, e) {
  return function (r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r))
  }
}
var He = Us,
  Gs = Ps,
  Ks = js,
  Hs = He
function qs(u) {
  var e = Ks(u)
  return e.length == 1 && e[0][2]
    ? Hs(e[0][0], e[0][1])
    : function (r) {
        return r === u || Gs(r, u, e)
      }
}
var Ws = qs,
  zs = Cu,
  Vs = lu,
  Js = '[object Symbol]'
function Qs(u) {
  return typeof u == 'symbol' || (Vs(u) && zs(u) == Js)
}
var zu = Qs,
  Ys = W,
  Xs = zu,
  Zs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  uD = /^\w*$/
function eD(u, e) {
  if (Ys(u)) return !1
  var r = typeof u
  return r == 'number' || r == 'symbol' || r == 'boolean' || u == null || Xs(u)
    ? !0
    : uD.test(u) || !Zs.test(u) || (e != null && u in Object(e))
}
var Vu = eD,
  qe = Hu,
  rD = 'Expected a function'
function Ju(u, e) {
  if (typeof u != 'function' || (e != null && typeof e != 'function')) throw new TypeError(rD)
  var r = function () {
    var t = arguments,
      a = e ? e.apply(this, t) : t[0],
      s = r.cache
    if (s.has(a)) return s.get(a)
    var n = u.apply(this, t)
    return (r.cache = s.set(a, n) || s), n
  }
  return (r.cache = new (Ju.Cache || qe)()), r
}
Ju.Cache = qe
var tD = Ju,
  aD = tD,
  nD = 500
function iD(u) {
  var e = aD(u, function (t) {
      return r.size === nD && r.clear(), t
    }),
    r = e.cache
  return e
}
var sD = iD,
  DD = sD,
  AD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  oD = /\\(\\)?/g,
  FD = DD(function (u) {
    var e = []
    return (
      u.charCodeAt(0) === 46 && e.push(''),
      u.replace(AD, function (r, t, a, s) {
        e.push(a ? s.replace(oD, '$1') : t || r)
      }),
      e
    )
  }),
  CD = FD,
  me = _u,
  lD = Ar,
  cD = W,
  ED = zu,
  pD = 1 / 0,
  _e = me ? me.prototype : void 0,
  xe = _e ? _e.toString : void 0
function We(u) {
  if (typeof u == 'string') return u
  if (cD(u)) return lD(u, We) + ''
  if (ED(u)) return xe ? xe.call(u) : ''
  var e = u + ''
  return e == '0' && 1 / u == -pD ? '-0' : e
}
var fD = We,
  BD = fD
function hD(u) {
  return u == null ? '' : BD(u)
}
var yD = hD,
  dD = W,
  vD = Vu,
  gD = CD,
  mD = yD
function _D(u, e) {
  return dD(u) ? u : vD(u, e) ? [u] : gD(mD(u))
}
var ze = _D,
  xD = zu,
  TD = 1 / 0
function bD(u) {
  if (typeof u == 'string' || xD(u)) return u
  var e = u + ''
  return e == '0' && 1 / u == -TD ? '-0' : e
}
var bu = bD,
  SD = ze,
  $D = bu
function wD(u, e) {
  e = SD(e, u)
  for (var r = 0, t = e.length; u != null && r < t; ) u = u[$D(e[r++])]
  return r && r == t ? u : void 0
}
var Ve = wD,
  OD = Ve
function ND(u, e, r) {
  var t = u == null ? void 0 : OD(u, e)
  return t === void 0 ? r : t
}
var PD = ND
function ID(u, e) {
  return u != null && e in Object(u)
}
var RD = ID,
  LD = ze,
  MD = Ie,
  kD = W,
  jD = Le,
  UD = qu,
  GD = bu
function KD(u, e, r) {
  e = LD(e, u)
  for (var t = -1, a = e.length, s = !1; ++t < a; ) {
    var n = GD(e[t])
    if (!(s = u != null && r(u, n))) break
    u = u[n]
  }
  return s || ++t != a ? s : ((a = u == null ? 0 : u.length), !!a && UD(a) && jD(n, a) && (kD(u) || MD(u)))
}
var HD = KD,
  qD = RD,
  WD = HD
function zD(u, e) {
  return u != null && WD(u, e, qD)
}
var VD = zD,
  JD = Ge,
  QD = PD,
  YD = VD,
  XD = Vu,
  ZD = Ke,
  u1 = He,
  e1 = bu,
  r1 = 1,
  t1 = 2
function a1(u, e) {
  return XD(u) && ZD(e)
    ? u1(e1(u), e)
    : function (r) {
        var t = QD(r, u)
        return t === void 0 && t === e ? YD(r, u) : JD(e, t, r1 | t1)
      }
}
var n1 = a1
function i1(u) {
  return u
}
var s1 = i1
function D1(u) {
  return function (e) {
    return e == null ? void 0 : e[u]
  }
}
var A1 = D1,
  o1 = Ve
function F1(u) {
  return function (e) {
    return o1(e, u)
  }
}
var C1 = F1,
  l1 = A1,
  c1 = C1,
  E1 = Vu,
  p1 = bu
function f1(u) {
  return E1(u) ? l1(p1(u)) : c1(u)
}
var B1 = f1,
  h1 = Ws,
  y1 = n1,
  d1 = s1,
  v1 = W,
  g1 = B1
function m1(u) {
  return typeof u == 'function' ? u : u == null ? d1 : typeof u == 'object' ? (v1(u) ? y1(u[0], u[1]) : h1(u)) : g1(u)
}
var _1 = m1,
  x1 = Y,
  T1 = (function () {
    try {
      var u = x1(Object, 'defineProperty')
      return u({}, '', {}), u
    } catch {}
  })(),
  b1 = T1,
  Te = b1
function S1(u, e, r) {
  e == '__proto__' && Te ? Te(u, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (u[e] = r)
}
var $1 = S1,
  w1 = ke,
  O1 = w1(Object.getPrototypeOf, Object),
  Do = O1
function N1(u) {
  return function (e, r, t) {
    for (var a = -1, s = Object(e), n = t(e), l = n.length; l--; ) {
      var p = n[u ? l : ++a]
      if (r(s[p], p, s) === !1) break
    }
    return e
  }
}
var P1 = N1,
  I1 = P1,
  R1 = I1(),
  L1 = R1,
  M1 = L1,
  k1 = Wu
function j1(u, e) {
  return u && M1(u, e, k1)
}
var U1 = j1,
  G1 = $1,
  K1 = U1,
  H1 = _1
function q1(u, e) {
  var r = {}
  return (
    (e = H1(e)),
    K1(u, function (t, a, s) {
      G1(r, a, e(t, a, s))
    }),
    r
  )
}
var W1 = q1
const z1 = ju(W1)
var Je = {},
  ou = {},
  Qe = { exports: {} }
;(function () {
  function u(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0
    }
    return !1
  }
  function e(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0
    }
    return !1
  }
  function r(n) {
    if (n == null) return !1
    switch (n.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0
    }
    return !1
  }
  function t(n) {
    return r(n) || (n != null && n.type === 'FunctionDeclaration')
  }
  function a(n) {
    switch (n.type) {
      case 'IfStatement':
        return n.alternate != null ? n.alternate : n.consequent
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return n.body
    }
    return null
  }
  function s(n) {
    var l
    if (n.type !== 'IfStatement' || n.alternate == null) return !1
    l = n.consequent
    do {
      if (l.type === 'IfStatement' && l.alternate == null) return !0
      l = a(l)
    } while (l)
    return !1
  }
  Qe.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: t,
    isProblematicIfStatement: s,
    trailingStatement: a
  }
})()
var V1 = Qe.exports,
  Ye = { exports: {} }
;(function () {
  var u, e, r, t, a, s
  ;(e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    })
  function n(f) {
    return 48 <= f && f <= 57
  }
  function l(f) {
    return (48 <= f && f <= 57) || (97 <= f && f <= 102) || (65 <= f && f <= 70)
  }
  function p(f) {
    return f >= 48 && f <= 55
  }
  r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279]
  function E(f) {
    return f === 32 || f === 9 || f === 11 || f === 12 || f === 160 || (f >= 5760 && r.indexOf(f) >= 0)
  }
  function T(f) {
    return f === 10 || f === 13 || f === 8232 || f === 8233
  }
  function x(f) {
    if (f <= 65535) return String.fromCharCode(f)
    var I = String.fromCharCode(Math.floor((f - 65536) / 1024) + 55296),
      L = String.fromCharCode(((f - 65536) % 1024) + 56320)
    return I + L
  }
  for (t = new Array(128), s = 0; s < 128; ++s)
    t[s] = (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || s === 36 || s === 95
  for (a = new Array(128), s = 0; s < 128; ++s)
    a[s] = (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || (s >= 48 && s <= 57) || s === 36 || s === 95
  function F(f) {
    return f < 128 ? t[f] : e.NonAsciiIdentifierStart.test(x(f))
  }
  function m(f) {
    return f < 128 ? a[f] : e.NonAsciiIdentifierPart.test(x(f))
  }
  function d(f) {
    return f < 128 ? t[f] : u.NonAsciiIdentifierStart.test(x(f))
  }
  function c(f) {
    return f < 128 ? a[f] : u.NonAsciiIdentifierPart.test(x(f))
  }
  Ye.exports = {
    isDecimalDigit: n,
    isHexDigit: l,
    isOctalDigit: p,
    isWhiteSpace: E,
    isLineTerminator: T,
    isIdentifierStartES5: F,
    isIdentifierPartES5: m,
    isIdentifierStartES6: d,
    isIdentifierPartES6: c
  }
})()
var Xe = Ye.exports,
  Ze = { exports: {} }
;(function () {
  var u = Xe
  function e(F) {
    switch (F) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0
      default:
        return !1
    }
  }
  function r(F, m) {
    return !m && F === 'yield' ? !1 : t(F, m)
  }
  function t(F, m) {
    if (m && e(F)) return !0
    switch (F.length) {
      case 2:
        return F === 'if' || F === 'in' || F === 'do'
      case 3:
        return F === 'var' || F === 'for' || F === 'new' || F === 'try'
      case 4:
        return F === 'this' || F === 'else' || F === 'case' || F === 'void' || F === 'with' || F === 'enum'
      case 5:
        return (
          F === 'while' ||
          F === 'break' ||
          F === 'catch' ||
          F === 'throw' ||
          F === 'const' ||
          F === 'yield' ||
          F === 'class' ||
          F === 'super'
        )
      case 6:
        return F === 'return' || F === 'typeof' || F === 'delete' || F === 'switch' || F === 'export' || F === 'import'
      case 7:
        return F === 'default' || F === 'finally' || F === 'extends'
      case 8:
        return F === 'function' || F === 'continue' || F === 'debugger'
      case 10:
        return F === 'instanceof'
      default:
        return !1
    }
  }
  function a(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || r(F, m)
  }
  function s(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || t(F, m)
  }
  function n(F) {
    return F === 'eval' || F === 'arguments'
  }
  function l(F) {
    var m, d, c
    if (F.length === 0 || ((c = F.charCodeAt(0)), !u.isIdentifierStartES5(c))) return !1
    for (m = 1, d = F.length; m < d; ++m) if (((c = F.charCodeAt(m)), !u.isIdentifierPartES5(c))) return !1
    return !0
  }
  function p(F, m) {
    return (F - 55296) * 1024 + (m - 56320) + 65536
  }
  function E(F) {
    var m, d, c, f, I
    if (F.length === 0) return !1
    for (I = u.isIdentifierStartES6, m = 0, d = F.length; m < d; ++m) {
      if (((c = F.charCodeAt(m)), 55296 <= c && c <= 56319)) {
        if ((++m, m >= d || ((f = F.charCodeAt(m)), !(56320 <= f && f <= 57343)))) return !1
        c = p(c, f)
      }
      if (!I(c)) return !1
      I = u.isIdentifierPartES6
    }
    return !0
  }
  function T(F, m) {
    return l(F) && !a(F, m)
  }
  function x(F, m) {
    return E(F) && !s(F, m)
  }
  Ze.exports = {
    isKeywordES5: r,
    isKeywordES6: t,
    isReservedWordES5: a,
    isReservedWordES6: s,
    isRestrictedWord: n,
    isIdentifierNameES5: l,
    isIdentifierNameES6: E,
    isIdentifierES5: T,
    isIdentifierES6: x
  }
})()
var J1 = Ze.exports
;(function () {
  ;(ou.ast = V1), (ou.code = Xe), (ou.keyword = J1)
})()
var Du = {},
  X = {}
const Q1 = 'doctrine',
  Y1 = 'JSDoc parser',
  X1 = 'https://github.com/eslint/doctrine',
  Z1 = 'lib/doctrine.js',
  uA = '3.0.0',
  eA = { node: '>=6.0.0' },
  rA = { lib: './lib' },
  tA = ['lib'],
  aA = [
    { name: 'Nicholas C. Zakas', email: 'nicholas+npm@nczconsulting.com', web: 'https://www.nczonline.net' },
    { name: 'Yusuke Suzuki', email: 'utatane.tea@gmail.com', web: 'https://github.com/Constellation' }
  ],
  nA = 'eslint/doctrine',
  iA = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1'
  },
  sA = 'Apache-2.0',
  DA = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release'
  },
  AA = { esutils: '^2.0.2' },
  oA = {
    name: Q1,
    description: Y1,
    homepage: X1,
    main: Z1,
    version: uA,
    engines: eA,
    directories: rA,
    files: tA,
    maintainers: aA,
    repository: nA,
    devDependencies: iA,
    license: sA,
    scripts: DA,
    dependencies: AA
  }
function FA(u, e) {
  if (!u) throw new Error(e || 'unknown assertion error')
}
var CA = FA
;(function () {
  var u
  ;(u = oA.version), (X.VERSION = u)
  function e(t) {
    ;(this.name = 'DoctrineError'), (this.message = t)
  }
  ;(e.prototype = (function () {
    var t = function () {}
    return (t.prototype = Error.prototype), new t()
  })()),
    (e.prototype.constructor = e),
    (X.DoctrineError = e)
  function r(t) {
    throw new e(t)
  }
  ;(X.throwError = r), (X.assert = CA)
})()
;(function () {
  var u, e, r, t, a, s, n, l, p, E, T, x
  ;(p = ou),
    (E = X),
    (u = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType'
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21
    })
  function F(i) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(i)) === -1 && !p.code.isWhiteSpace(i) && !p.code.isLineTerminator(i)
    )
  }
  function m(i, D, y, o) {
    ;(this._previous = i), (this._index = D), (this._token = y), (this._value = o)
  }
  ;(m.prototype.restore = function () {
    ;(s = this._previous), (a = this._index), (n = this._token), (l = this._value)
  }),
    (m.save = function () {
      return new m(s, a, n, l)
    })
  function d(i, D) {
    return x && (i.range = [D[0] + T, D[1] + T]), i
  }
  function c() {
    var i = r.charAt(a)
    return (a += 1), i
  }
  function f(i) {
    var D,
      y,
      o,
      A = 0
    for (y = i === 'u' ? 4 : 2, D = 0; D < y; ++D)
      if (a < t && p.code.isHexDigit(r.charCodeAt(a)))
        (o = c()), (A = A * 16 + '0123456789abcdef'.indexOf(o.toLowerCase()))
      else return ''
    return String.fromCharCode(A)
  }
  function I() {
    var i = '',
      D,
      y,
      o,
      A,
      h
    for (D = r.charAt(a), ++a; a < t; )
      if (((y = c()), y === D)) {
        D = ''
        break
      } else if (y === '\\')
        if (((y = c()), p.code.isLineTerminator(y.charCodeAt(0)))) y === '\r' && r.charCodeAt(a) === 10 && ++a
        else
          switch (y) {
            case 'n':
              i += `
`
              break
            case 'r':
              i += '\r'
              break
            case 't':
              i += '	'
              break
            case 'u':
            case 'x':
              ;(h = a), (A = f(y)), A ? (i += A) : ((a = h), (i += y))
              break
            case 'b':
              i += '\b'
              break
            case 'f':
              i += '\f'
              break
            case 'v':
              i += '\v'
              break
            default:
              p.code.isOctalDigit(y.charCodeAt(0))
                ? ((o = '01234567'.indexOf(y)),
                  a < t &&
                    p.code.isOctalDigit(r.charCodeAt(a)) &&
                    ((o = o * 8 + '01234567'.indexOf(c())),
                    '0123'.indexOf(y) >= 0 &&
                      a < t &&
                      p.code.isOctalDigit(r.charCodeAt(a)) &&
                      (o = o * 8 + '01234567'.indexOf(c()))),
                  (i += String.fromCharCode(o)))
                : (i += y)
              break
          }
      else {
        if (p.code.isLineTerminator(y.charCodeAt(0))) break
        i += y
      }
    return D !== '' && E.throwError('unexpected quote'), (l = i), e.STRING
  }
  function L() {
    var i, D
    if (((i = ''), (D = r.charCodeAt(a)), D !== 46)) {
      if (((i = c()), (D = r.charCodeAt(a)), i === '0')) {
        if (D === 120 || D === 88) {
          for (i += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isHexDigit(D)); ) i += c()
          return (
            i.length <= 2 && E.throwError('unexpected token'),
            a < t && ((D = r.charCodeAt(a)), p.code.isIdentifierStartES5(D) && E.throwError('unexpected token')),
            (l = parseInt(i, 16)),
            e.NUMBER
          )
        }
        if (p.code.isOctalDigit(D)) {
          for (i += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isOctalDigit(D)); ) i += c()
          return (
            a < t &&
              ((D = r.charCodeAt(a)),
              (p.code.isIdentifierStartES5(D) || p.code.isDecimalDigit(D)) && E.throwError('unexpected token')),
            (l = parseInt(i, 8)),
            e.NUMBER
          )
        }
        p.code.isDecimalDigit(D) && E.throwError('unexpected token')
      }
      for (; a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) i += c()
    }
    if (D === 46) for (i += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) i += c()
    if (D === 101 || D === 69)
      if (
        ((i += c()),
        (D = r.charCodeAt(a)),
        (D === 43 || D === 45) && (i += c()),
        (D = r.charCodeAt(a)),
        p.code.isDecimalDigit(D))
      )
        for (i += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) i += c()
      else E.throwError('unexpected token')
    return (
      a < t && ((D = r.charCodeAt(a)), p.code.isIdentifierStartES5(D) && E.throwError('unexpected token')),
      (l = parseFloat(i)),
      e.NUMBER
    )
  }
  function z() {
    var i, D
    for (l = c(); a < t && F(r.charCodeAt(a)); ) {
      if (((i = r.charCodeAt(a)), i === 46)) {
        if (a + 1 >= t) return e.ILLEGAL
        if (((D = r.charCodeAt(a + 1)), D === 60)) break
      }
      l += c()
    }
    return e.NAME
  }
  function M() {
    var i
    for (s = a; a < t && p.code.isWhiteSpace(r.charCodeAt(a)); ) c()
    if (a >= t) return (n = e.EOF), n
    switch (((i = r.charCodeAt(a)), i)) {
      case 39:
      case 34:
        return (n = I()), n
      case 58:
        return c(), (n = e.COLON), n
      case 44:
        return c(), (n = e.COMMA), n
      case 40:
        return c(), (n = e.LPAREN), n
      case 41:
        return c(), (n = e.RPAREN), n
      case 91:
        return c(), (n = e.LBRACK), n
      case 93:
        return c(), (n = e.RBRACK), n
      case 123:
        return c(), (n = e.LBRACE), n
      case 125:
        return c(), (n = e.RBRACE), n
      case 46:
        if (a + 1 < t) {
          if (((i = r.charCodeAt(a + 1)), i === 60)) return c(), c(), (n = e.DOT_LT), n
          if (i === 46 && a + 2 < t && r.charCodeAt(a + 2) === 46) return c(), c(), c(), (n = e.REST), n
          if (p.code.isDecimalDigit(i)) return (n = L()), n
        }
        return (n = e.ILLEGAL), n
      case 60:
        return c(), (n = e.LT), n
      case 62:
        return c(), (n = e.GT), n
      case 42:
        return c(), (n = e.STAR), n
      case 124:
        return c(), (n = e.PIPE), n
      case 63:
        return c(), (n = e.QUESTION), n
      case 33:
        return c(), (n = e.BANG), n
      case 61:
        return c(), (n = e.EQUAL), n
      case 45:
        return (n = L()), n
      default:
        return p.code.isDecimalDigit(i) ? ((n = L()), n) : (E.assert(F(i)), (n = z()), n)
    }
  }
  function _(i, D) {
    E.assert(n === i, D || 'consumed token not matched'), M()
  }
  function C(i, D) {
    n !== i && E.throwError(D || 'unexpected token'), M()
  }
  function k() {
    var i,
      D = a - 1
    if ((_(e.LPAREN, 'UnionType should start with ('), (i = []), n !== e.RPAREN))
      for (; i.push(j()), n !== e.RPAREN; ) C(e.PIPE)
    return _(e.RPAREN, 'UnionType should end with )'), d({ type: u.UnionType, elements: i }, [D, s])
  }
  function B() {
    var i,
      D = a - 1,
      y
    for (_(e.LBRACK, 'ArrayType should start with ['), i = []; n !== e.RBRACK; ) {
      if (n === e.REST) {
        ;(y = a - 3), _(e.REST), i.push(d({ type: u.RestType, expression: j() }, [y, s]))
        break
      } else i.push(j())
      n !== e.RBRACK && C(e.COMMA)
    }
    return C(e.RBRACK), d({ type: u.ArrayType, elements: i }, [D, s])
  }
  function U() {
    var i = l
    if (n === e.NAME || n === e.STRING) return M(), i
    if (n === e.NUMBER) return _(e.NUMBER), String(i)
    E.throwError('unexpected token')
  }
  function G() {
    var i,
      D = s
    return (
      (i = U()),
      n === e.COLON
        ? (_(e.COLON), d({ type: u.FieldType, key: i, value: j() }, [D, s]))
        : d({ type: u.FieldType, key: i, value: null }, [D, s])
    )
  }
  function g() {
    var i,
      D = a - 1,
      y
    if ((_(e.LBRACE, 'RecordType should start with {'), (i = []), n === e.COMMA)) _(e.COMMA)
    else for (; n !== e.RBRACE; ) i.push(G()), n !== e.RBRACE && C(e.COMMA)
    return (y = a), C(e.RBRACE), d({ type: u.RecordType, fields: i }, [D, y])
  }
  function nu() {
    var i = l,
      D = a - i.length
    return (
      C(e.NAME),
      n === e.COLON && (i === 'module' || i === 'external' || i === 'event') && (_(e.COLON), (i += ':' + l), C(e.NAME)),
      d({ type: u.NameExpression, name: i }, [D, s])
    )
  }
  function cu() {
    var i = []
    for (i.push(K()); n === e.COMMA; ) _(e.COMMA), i.push(K())
    return i
  }
  function V() {
    var i,
      D,
      y = a - l.length
    return (
      (i = nu()),
      n === e.DOT_LT || n === e.LT
        ? (M(), (D = cu()), C(e.GT), d({ type: u.TypeApplication, expression: i, applications: D }, [y, s]))
        : i
    )
  }
  function Eu() {
    return (
      _(e.COLON, 'ResultType should start with :'),
      n === e.NAME && l === 'void' ? (_(e.NAME), { type: u.VoidLiteral }) : j()
    )
  }
  function $() {
    for (var i = [], D = !1, y, o = !1, A, h = a - 3, v; n !== e.RPAREN; )
      n === e.REST && (_(e.REST), (o = !0)),
        (A = s),
        (y = j()),
        y.type === u.NameExpression &&
          n === e.COLON &&
          ((v = s - y.name.length),
          _(e.COLON),
          (y = d({ type: u.ParameterType, name: y.name, expression: j() }, [v, s]))),
        n === e.EQUAL
          ? (_(e.EQUAL), (y = d({ type: u.OptionalType, expression: y }, [A, s])), (D = !0))
          : D && E.throwError('unexpected token'),
        o && (y = d({ type: u.RestType, expression: y }, [h, s])),
        i.push(y),
        n !== e.RPAREN && C(e.COMMA)
    return i
  }
  function $u() {
    var i,
      D,
      y,
      o,
      A,
      h = a - l.length
    return (
      E.assert(n === e.NAME && l === 'function', "FunctionType should start with 'function'"),
      _(e.NAME),
      C(e.LPAREN),
      (i = !1),
      (y = []),
      (D = null),
      n !== e.RPAREN &&
        (n === e.NAME && (l === 'this' || l === 'new')
          ? ((i = l === 'new'), _(e.NAME), C(e.COLON), (D = V()), n === e.COMMA && (_(e.COMMA), (y = $())))
          : (y = $())),
      C(e.RPAREN),
      (o = null),
      n === e.COLON && (o = Eu()),
      (A = d({ type: u.FunctionType, params: y, result: o }, [h, s])),
      D && ((A.this = D), i && (A.new = !0)),
      A
    )
  }
  function iu() {
    var i, D
    switch (n) {
      case e.STAR:
        return _(e.STAR), d({ type: u.AllLiteral }, [s - 1, s])
      case e.LPAREN:
        return k()
      case e.LBRACK:
        return B()
      case e.LBRACE:
        return g()
      case e.NAME:
        if (((D = a - l.length), l === 'null')) return _(e.NAME), d({ type: u.NullLiteral }, [D, s])
        if (l === 'undefined') return _(e.NAME), d({ type: u.UndefinedLiteral }, [D, s])
        if (l === 'true' || l === 'false')
          return _(e.NAME), d({ type: u.BooleanLiteralType, value: l === 'true' }, [D, s])
        if (((i = m.save()), l === 'function'))
          try {
            return $u()
          } catch {
            i.restore()
          }
        return V()
      case e.STRING:
        return M(), d({ type: u.StringLiteralType, value: l }, [s - l.length - 2, s])
      case e.NUMBER:
        return M(), d({ type: u.NumericLiteralType, value: l }, [s - String(l).length, s])
      default:
        E.throwError('unexpected token')
    }
  }
  function j() {
    var i, D
    return n === e.QUESTION
      ? ((D = a - 1),
        _(e.QUESTION),
        n === e.COMMA ||
        n === e.EQUAL ||
        n === e.RBRACE ||
        n === e.RPAREN ||
        n === e.PIPE ||
        n === e.EOF ||
        n === e.RBRACK ||
        n === e.GT
          ? d({ type: u.NullableLiteral }, [D, s])
          : d({ type: u.NullableType, expression: iu(), prefix: !0 }, [D, s]))
      : n === e.BANG
      ? ((D = a - 1), _(e.BANG), d({ type: u.NonNullableType, expression: iu(), prefix: !0 }, [D, s]))
      : ((D = s),
        (i = iu()),
        n === e.BANG
          ? (_(e.BANG), d({ type: u.NonNullableType, expression: i, prefix: !1 }, [D, s]))
          : n === e.QUESTION
          ? (_(e.QUESTION), d({ type: u.NullableType, expression: i, prefix: !1 }, [D, s]))
          : n === e.LBRACK
          ? (_(e.LBRACK),
            C(e.RBRACK, 'expected an array-style type declaration (' + l + '[])'),
            d(
              {
                type: u.TypeApplication,
                expression: d({ type: u.NameExpression, name: 'Array' }, [D, s]),
                applications: [i]
              },
              [D, s]
            ))
          : i)
  }
  function K() {
    var i, D
    if (((i = j()), n !== e.PIPE)) return i
    for (D = [i], _(e.PIPE); D.push(j()), n === e.PIPE; ) _(e.PIPE)
    return d({ type: u.UnionType, elements: D }, [0, a])
  }
  function J() {
    var i
    return n === e.REST
      ? (_(e.REST), d({ type: u.RestType, expression: K() }, [0, a]))
      : ((i = K()), n === e.EQUAL ? (_(e.EQUAL), d({ type: u.OptionalType, expression: i }, [0, a])) : i)
  }
  function pu(i, D) {
    var y
    return (
      (r = i),
      (t = r.length),
      (a = 0),
      (s = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = K()),
      D && D.midstream ? { expression: y, index: s } : (n !== e.EOF && E.throwError('not reach to EOF'), y)
    )
  }
  function wu(i, D) {
    var y
    return (
      (r = i),
      (t = r.length),
      (a = 0),
      (s = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = J()),
      D && D.midstream ? { expression: y, index: s } : (n !== e.EOF && E.throwError('not reach to EOF'), y)
    )
  }
  function w(i, D, y) {
    var o, A, h
    switch (i.type) {
      case u.NullableLiteral:
        o = '?'
        break
      case u.AllLiteral:
        o = '*'
        break
      case u.NullLiteral:
        o = 'null'
        break
      case u.UndefinedLiteral:
        o = 'undefined'
        break
      case u.VoidLiteral:
        o = 'void'
        break
      case u.UnionType:
        for (y ? (o = '') : (o = '('), A = 0, h = i.elements.length; A < h; ++A)
          (o += w(i.elements[A], D)), A + 1 !== h && (o += D ? '|' : ' | ')
        y || (o += ')')
        break
      case u.ArrayType:
        for (o = '[', A = 0, h = i.elements.length; A < h; ++A)
          (o += w(i.elements[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += ']'
        break
      case u.RecordType:
        for (o = '{', A = 0, h = i.fields.length; A < h; ++A)
          (o += w(i.fields[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += '}'
        break
      case u.FieldType:
        i.value ? (o = i.key + (D ? ':' : ': ') + w(i.value, D)) : (o = i.key)
        break
      case u.FunctionType:
        for (
          o = D ? 'function(' : 'function (',
            i.this &&
              (i.new ? (o += D ? 'new:' : 'new: ') : (o += D ? 'this:' : 'this: '),
              (o += w(i.this, D)),
              i.params.length !== 0 && (o += D ? ',' : ', ')),
            A = 0,
            h = i.params.length;
          A < h;
          ++A
        )
          (o += w(i.params[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        ;(o += ')'), i.result && (o += (D ? ':' : ': ') + w(i.result, D))
        break
      case u.ParameterType:
        o = i.name + (D ? ':' : ': ') + w(i.expression, D)
        break
      case u.RestType:
        ;(o = '...'), i.expression && (o += w(i.expression, D))
        break
      case u.NonNullableType:
        i.prefix ? (o = '!' + w(i.expression, D)) : (o = w(i.expression, D) + '!')
        break
      case u.OptionalType:
        o = w(i.expression, D) + '='
        break
      case u.NullableType:
        i.prefix ? (o = '?' + w(i.expression, D)) : (o = w(i.expression, D) + '?')
        break
      case u.NameExpression:
        o = i.name
        break
      case u.TypeApplication:
        for (o = w(i.expression, D) + '.<', A = 0, h = i.applications.length; A < h; ++A)
          (o += w(i.applications[A], D)), A + 1 !== h && (o += D ? ',' : ', ')
        o += '>'
        break
      case u.StringLiteralType:
        o = '"' + i.value + '"'
        break
      case u.NumericLiteralType:
        o = String(i.value)
        break
      case u.BooleanLiteralType:
        o = String(i.value)
        break
      default:
        E.throwError('Unknown type ' + i.type)
    }
    return o
  }
  function N(i, D) {
    return D == null && (D = {}), w(i, D.compact, D.topLevel)
  }
  ;(Du.parseType = pu), (Du.parseParamType = wu), (Du.stringify = N), (Du.Syntax = u)
})()
;(function (u) {
  ;(function () {
    var e, r, t, a, s
    ;(a = ou), (e = Du), (r = X)
    function n(C, k, B) {
      return C.slice(k, B)
    }
    s = (function () {
      var C = Object.prototype.hasOwnProperty
      return function (B, U) {
        return C.call(B, U)
      }
    })()
    function l(C) {
      var k = {},
        B
      for (B in C) C.hasOwnProperty(B) && (k[B] = C[B])
      return k
    }
    function p(C) {
      return (C >= 97 && C <= 122) || (C >= 65 && C <= 90) || (C >= 48 && C <= 57)
    }
    function E(C) {
      return C === 'param' || C === 'argument' || C === 'arg'
    }
    function T(C) {
      return C === 'return' || C === 'returns'
    }
    function x(C) {
      return C === 'property' || C === 'prop'
    }
    function F(C) {
      return E(C) || x(C) || C === 'alias' || C === 'this' || C === 'mixes' || C === 'requires'
    }
    function m(C) {
      return F(C) || C === 'const' || C === 'constant'
    }
    function d(C) {
      return x(C) || E(C)
    }
    function c(C) {
      return x(C) || E(C)
    }
    function f(C) {
      return (
        E(C) ||
        T(C) ||
        C === 'define' ||
        C === 'enum' ||
        C === 'implements' ||
        C === 'this' ||
        C === 'type' ||
        C === 'typedef' ||
        x(C)
      )
    }
    function I(C) {
      return (
        f(C) ||
        C === 'throws' ||
        C === 'const' ||
        C === 'constant' ||
        C === 'namespace' ||
        C === 'member' ||
        C === 'var' ||
        C === 'module' ||
        C === 'constructor' ||
        C === 'class' ||
        C === 'extends' ||
        C === 'augments' ||
        C === 'public' ||
        C === 'private' ||
        C === 'protected'
      )
    }
    var L = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      z =
        '(' +
        L +
        '*(?:\\*' +
        L +
        `?)?)(.+|[\r
\u2028\u2029])`
    function M(C) {
      return C.replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(z, 'g'), '$2')
        .replace(/\s*$/, '')
    }
    function _(C, k) {
      for (var B = C.replace(/^\/\*\*?/, ''), U = 0, G = new RegExp(z, 'g'), g; (g = G.exec(B)); )
        if (((U += g[1].length), g.index + g[0].length > k + U)) return k + U + C.length - B.length
      return C.replace(/\*\/$/, '').replace(/\s*$/, '').length
    }
    ;(function (C) {
      var k, B, U, G, g, nu, cu, V, Eu
      function $() {
        var o = g.charCodeAt(B)
        return (
          (B += 1),
          a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(B) === 10) && (U += 1),
          String.fromCharCode(o)
        )
      }
      function $u() {
        var o = ''
        for ($(); B < G && p(g.charCodeAt(B)); ) o += $()
        return o
      }
      function iu() {
        var o,
          A,
          h = B
        for (A = !1; h < G; ) {
          if (((o = g.charCodeAt(h)), a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(h + 1) === 10))) A = !0
          else if (A) {
            if (o === 64) break
            a.code.isWhiteSpace(o) || (A = !1)
          }
          h += 1
        }
        return h
      }
      function j(o, A, h) {
        for (var v, P, b, R, q = !1; B < A; )
          if (((v = g.charCodeAt(B)), a.code.isWhiteSpace(v))) $()
          else if (v === 123) {
            $()
            break
          } else {
            q = !0
            break
          }
        if (q) return null
        for (P = 1, b = ''; B < A; )
          if (((v = g.charCodeAt(B)), a.code.isLineTerminator(v))) $()
          else {
            if (v === 125) {
              if (((P -= 1), P === 0)) {
                $()
                break
              }
            } else v === 123 && (P += 1)
            b === '' && (R = B), (b += $())
          }
        return P !== 0
          ? r.throwError('Braces are not balanced')
          : c(o)
          ? e.parseParamType(b, { startIndex: w(R), range: h })
          : e.parseType(b, { startIndex: w(R), range: h })
      }
      function K(o) {
        var A
        if (!a.code.isIdentifierStartES5(g.charCodeAt(B)) && !g[B].match(/[0-9]/)) return null
        for (A = $(); B < o && a.code.isIdentifierPartES5(g.charCodeAt(B)); ) A += $()
        return A
      }
      function J(o) {
        for (; B < o && (a.code.isWhiteSpace(g.charCodeAt(B)) || a.code.isLineTerminator(g.charCodeAt(B))); ) $()
      }
      function pu(o, A, h) {
        var v = '',
          P,
          b
        if ((J(o), B >= o)) return null
        if (g.charCodeAt(B) === 91)
          if (A) (P = !0), (v = $())
          else return null
        if (((v += K(o)), h))
          for (
            g.charCodeAt(B) === 58 &&
              (v === 'module' || v === 'external' || v === 'event') &&
              ((v += $()), (v += K(o))),
              g.charCodeAt(B) === 91 && g.charCodeAt(B + 1) === 93 && ((v += $()), (v += $()));
            g.charCodeAt(B) === 46 ||
            g.charCodeAt(B) === 47 ||
            g.charCodeAt(B) === 35 ||
            g.charCodeAt(B) === 45 ||
            g.charCodeAt(B) === 126;

          )
            (v += $()), (v += K(o))
        if (P) {
          if ((J(o), g.charCodeAt(B) === 61)) {
            ;(v += $()), J(o)
            for (var R, q = 1; B < o; ) {
              if (
                ((R = g.charCodeAt(B)),
                a.code.isWhiteSpace(R) && (b || (J(o), (R = g.charCodeAt(B)))),
                R === 39 && (b ? b === "'" && (b = '') : (b = "'")),
                R === 34 && (b ? b === '"' && (b = '') : (b = '"')),
                R === 91)
              )
                q++
              else if (R === 93 && --q === 0) break
              v += $()
            }
          }
          if ((J(o), B >= o || g.charCodeAt(B) !== 93)) return null
          v += $()
        }
        return v
      }
      function wu() {
        for (; B < G && g.charCodeAt(B) !== 64; ) $()
        return B >= G ? !1 : (r.assert(g.charCodeAt(B) === 64), !0)
      }
      function w(o) {
        return g === nu ? o : _(nu, o)
      }
      function N(o, A) {
        ;(this._options = o),
          (this._title = A.toLowerCase()),
          (this._tag = { title: A, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = U),
          (this._first = B - A.length - 1),
          (this._last = 0),
          (this._extra = {})
      }
      ;(N.prototype.addError = function (A) {
        var h = Array.prototype.slice.call(arguments, 1),
          v = A.replace(/%(\d)/g, function (P, b) {
            return r.assert(b < h.length, 'Message reference must be in range'), h[b]
          })
        return this._tag.errors || (this._tag.errors = []), Eu && r.throwError(v), this._tag.errors.push(v), cu
      }),
        (N.prototype.parseType = function () {
          if (f(this._title))
            try {
              if (
                ((this._tag.type = j(this._title, this._last, this._options.range)),
                !this._tag.type && !E(this._title) && !T(this._title) && !this.addError('Missing or invalid tag type'))
              )
                return !1
            } catch (o) {
              if (((this._tag.type = null), !this.addError(o.message))) return !1
            }
          else if (I(this._title))
            try {
              this._tag.type = j(this._title, this._last, this._options.range)
            } catch {}
          return !0
        }),
        (N.prototype._parseNamePath = function (o) {
          var A
          return (
            (A = pu(this._last, V && c(this._title), !0)),
            !A && !o && !this.addError('Missing or invalid tag name') ? !1 : ((this._tag.name = A), !0)
          )
        }),
        (N.prototype.parseNamePath = function () {
          return this._parseNamePath(!1)
        }),
        (N.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0)
        }),
        (N.prototype.parseName = function () {
          var o, A
          if (m(this._title))
            if (((this._tag.name = pu(this._last, V && c(this._title), d(this._title))), this._tag.name))
              (A = this._tag.name),
                A.charAt(0) === '[' &&
                  A.charAt(A.length - 1) === ']' &&
                  ((o = A.substring(1, A.length - 1).split('=')),
                  o.length > 1 && (this._tag.default = o.slice(1).join('=')),
                  (this._tag.name = o[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = { type: 'OptionalType', expression: this._tag.type }))
            else {
              if (!F(this._title)) return !0
              if (E(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type), (this._tag.name = this._tag.type.name), (this._tag.type = null)
              else if (!this.addError('Missing or invalid tag name')) return !1
            }
          return !0
        }),
        (N.prototype.parseDescription = function () {
          var A = n(g, B, this._last).trim()
          return A && (/^-\s+/.test(A) && (A = A.substring(2)), (this._tag.description = A)), !0
        }),
        (N.prototype.parseCaption = function () {
          var A = n(g, B, this._last).trim(),
            h = '<caption>',
            v = '</caption>',
            P = A.indexOf(h),
            b = A.indexOf(v)
          return (
            P >= 0 && b >= 0
              ? ((this._tag.caption = A.substring(P + h.length, b).trim()),
                (this._tag.description = A.substring(b + v.length).trim()))
              : (this._tag.description = A),
            !0
          )
        }),
        (N.prototype.parseKind = function () {
          var A, h
          return (
            (h = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0
            }),
            (A = n(g, B, this._last).trim()),
            (this._tag.kind = A),
            !(!s(h, A) && !this.addError("Invalid kind name '%0'", A))
          )
        }),
        (N.prototype.parseAccess = function () {
          var A
          return (
            (A = n(g, B, this._last).trim()),
            (this._tag.access = A),
            !(A !== 'private' && A !== 'protected' && A !== 'public' && !this.addError("Invalid access name '%0'", A))
          )
        }),
        (N.prototype.parseThis = function () {
          var A = n(g, B, this._last).trim()
          if (A && A.charAt(0) === '{') {
            var h = this.parseType()
            return (h && this._tag.type.type === 'NameExpression') || this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this')
          } else return this.parseNamePath()
        }),
        (N.prototype.parseVariation = function () {
          var A, h
          return (
            (h = n(g, B, this._last).trim()),
            (A = parseFloat(h, 10)),
            (this._tag.variation = A),
            !(isNaN(A) && !this.addError("Invalid variation '%0'", h))
          )
        }),
        (N.prototype.ensureEnd = function () {
          var o = n(g, B, this._last).trim()
          return !(o && !this.addError("Unknown content '%0'", o))
        }),
        (N.prototype.epilogue = function () {
          var A
          return (
            (A = this._tag.description),
            !(
              c(this._title) &&
              !this._tag.type &&
              A &&
              A.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !V && !this.addError('Missing or invalid tag name'))
            )
          )
        }),
        (k = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription']
        }),
        (N.prototype.parse = function () {
          var A, h, v, P
          if (!this._title && !this.addError('Missing or invalid title')) return null
          for (
            this._last = iu(this._title),
              this._options.range &&
                (this._tag.range = [this._first, g.slice(0, this._last).replace(/\s*$/, '').length].map(w)),
              s(k, this._title)
                ? (v = k[this._title])
                : (v = ['parseType', 'parseName', 'parseDescription', 'epilogue']),
              A = 0,
              h = v.length;
            A < h;
            ++A
          )
            if (((P = v[A]), !this[P]())) return null
          return this._tag
        })
      function i(o) {
        var A, h, v
        if (!wu()) return null
        for (A = $u(), h = new N(o, A), v = h.parse(); B < h._last; ) $()
        return v
      }
      function D(o) {
        var A = '',
          h,
          v
        for (v = !0; B < G && ((h = g.charCodeAt(B)), !(v && h === 64)); )
          a.code.isLineTerminator(h) ? (v = !0) : v && !a.code.isWhiteSpace(h) && (v = !1), (A += $())
        return o ? A : A.trim()
      }
      function y(o, A) {
        var h = [],
          v,
          P,
          b,
          R,
          q
        if (
          (A === void 0 && (A = {}), typeof A.unwrap == 'boolean' && A.unwrap ? (g = M(o)) : (g = o), (nu = o), A.tags)
        )
          if (Array.isArray(A.tags))
            for (b = {}, R = 0, q = A.tags.length; R < q; R++)
              typeof A.tags[R] == 'string' ? (b[A.tags[R]] = !0) : r.throwError('Invalid "tags" parameter: ' + A.tags)
          else r.throwError('Invalid "tags" parameter: ' + A.tags)
        for (
          G = g.length, B = 0, U = 0, cu = A.recoverable, V = A.sloppy, Eu = A.strict, P = D(A.preserveWhitespace);
          (v = i(A)), !!v;

        )
          (!b || b.hasOwnProperty(v.title)) && h.push(v)
        return { description: P, tags: h }
      }
      C.parse = y
    })((t = {})),
      (u.version = r.VERSION),
      (u.parse = t.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = M),
      (u.Syntax = l(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = { Syntax: u.Syntax, parseType: e.parseType, parseParamType: e.parseParamType, stringify: e.stringify })
  })()
})(Je)
const lA = ju(Je),
  { combineParameters: cA } = __STORYBOOK_MODULE_PREVIEW_API__
var EA = u => {
    switch (u.type) {
      case 'function':
        return { name: 'function' }
      case 'object':
        let e = {}
        return (
          u.signature.properties.forEach(r => {
            e[r.key] = vu(r.value)
          }),
          { name: 'object', value: e }
        )
      default:
        throw new Error(`Unknown: ${u}`)
    }
  },
  vu = u => {
    let { name: e, raw: r } = u,
      t = {}
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...t, name: e }
      case 'Array':
        return { ...t, name: 'array', value: u.elements.map(vu) }
      case 'signature':
        return { ...t, ...EA(u) }
      case 'union':
      case 'intersection':
        return { ...t, name: e, value: u.elements.map(vu) }
      default:
        return { ...t, name: 'other', value: e }
    }
  },
  pA = u => u.name === 'literal',
  fA = u => u.value.replace(/['|"]/g, ''),
  BA = u => {
    switch (u.type) {
      case 'function':
        return { name: 'function' }
      case 'object':
        let e = {}
        return (
          u.signature.properties.forEach(r => {
            e[r.key] = Fu(r.value)
          }),
          { name: 'object', value: e }
        )
      default:
        throw new Error(`Unknown: ${u}`)
    }
  },
  Fu = u => {
    let { name: e, raw: r } = u,
      t = {}
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'literal':
        return { ...t, name: 'other', value: u.value }
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...t, name: e }
      case 'Array':
        return { ...t, name: 'array', value: u.elements.map(Fu) }
      case 'signature':
        return { ...t, ...BA(u) }
      case 'union':
        return u.elements.every(pA)
          ? { ...t, name: 'enum', value: u.elements.map(fA) }
          : { ...t, name: e, value: u.elements.map(Fu) }
      case 'intersection':
        return { ...t, name: e, value: u.elements.map(Fu) }
      default:
        return { ...t, name: 'other', value: e }
    }
  },
  ur = /^['"]|['"]$/g,
  hA = u => u.replace(ur, ''),
  yA = u => ur.test(u),
  dA = /^\(.*\) => /,
  Au = u => {
    let { name: e, raw: r, computed: t, value: a } = u,
      s = {}
    switch ((typeof r < 'u' && (s.raw = r), e)) {
      case 'enum': {
        let l = t
          ? a
          : a.map(p => {
              let E = hA(p.value)
              return yA(p.value) || Number.isNaN(Number(E)) ? E : Number(E)
            })
        return { ...s, name: e, value: l }
      }
      case 'string':
      case 'number':
      case 'symbol':
        return { ...s, name: e }
      case 'func':
        return { ...s, name: 'function' }
      case 'bool':
      case 'boolean':
        return { ...s, name: 'boolean' }
      case 'arrayOf':
      case 'array':
        return { ...s, name: 'array', value: a && Au(a) }
      case 'object':
        return { ...s, name: e }
      case 'objectOf':
        return { ...s, name: e, value: Au(a) }
      case 'shape':
      case 'exact':
        let n = z1(a, l => Au(l))
        return { ...s, name: 'object', value: n }
      case 'union':
        return { ...s, name: 'union', value: a.map(l => Au(l)) }
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((e == null ? void 0 : e.indexOf('|')) > 0)
          try {
            let E = e.split('|').map(T => JSON.parse(T))
            return { ...s, name: 'enum', value: E }
          } catch {}
        let l = a ? `${e}(${a})` : e,
          p = dA.test(e) ? 'function' : 'other'
        return { ...s, name: p, value: l }
      }
    }
  },
  Qu = u => {
    let { type: e, tsType: r, flowType: t } = u
    return e != null ? Au(e) : r != null ? vu(r) : t != null ? Fu(t) : null
  },
  vA = (u => (
    (u.JAVASCRIPT = 'JavaScript'), (u.FLOW = 'Flow'), (u.TYPESCRIPT = 'TypeScript'), (u.UNKNOWN = 'Unknown'), u
  ))(vA || {}),
  gA = ['null', 'undefined']
function Yu(u) {
  return gA.some(e => e === u)
}
var mA = u => {
  if (!u) return ''
  if (typeof u == 'string') return u
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`)
}
function er(u) {
  return !!u.__docgenInfo
}
function _A(u) {
  return u != null && Object.keys(u).length > 0
}
function xA(u, e) {
  return er(u) ? u.__docgenInfo[e] : null
}
function TA(u) {
  return er(u) && mA(u.__docgenInfo.description)
}
function bA(u) {
  return u != null && u.includes('@')
}
function SA(u, e) {
  let r
  try {
    r = lA.parse(u, { tags: e, sloppy: !0 })
  } catch (t) {
    throw (console.error(t), new Error('Cannot parse JSDoc tags.'))
  }
  return r
}
var $A = { tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'] },
  wA = (u, e = $A) => {
    if (!bA(u)) return { includesJsDoc: !1, ignore: !1 }
    let r = SA(u, e.tags),
      t = OA(r)
    return t.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : { includesJsDoc: !0, ignore: !1, description: r.description, extractedTags: t }
  }
function OA(u) {
  let e = { params: null, deprecated: null, returns: null, ignore: !1 }
  for (let r = 0; r < u.tags.length; r += 1) {
    let t = u.tags[r]
    if (t.title === 'ignore') {
      e.ignore = !0
      break
    } else
      switch (t.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          let a = NA(t)
          a != null && (e.params == null && (e.params = []), e.params.push(a))
          break
        }
        case 'deprecated': {
          let a = PA(t)
          a != null && (e.deprecated = a)
          break
        }
        case 'returns': {
          let a = IA(t)
          a != null && (e.returns = a)
          break
        }
      }
  }
  return e
}
function NA(u) {
  let e = u.name
  return e != null && e !== 'null-null'
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: () => (e.includes('null') ? e.replace('-null', '').replace('.null', '') : u.name),
        getTypeName: () => (u.type != null ? Z(u.type) : null)
      }
    : null
}
function PA(u) {
  return u.title != null ? u.description : null
}
function IA(u) {
  return u.type != null ? { type: u.type, description: u.description, getTypeName: () => Z(u.type) } : null
}
function Z(u) {
  return u.type === 'NameExpression'
    ? u.name
    : u.type === 'RecordType'
    ? `({${u.fields
        .map(e => {
          if (e.value != null) {
            let r = Z(e.value)
            return `${e.key}: ${r}`
          }
          return e.key
        })
        .join(', ')}})`
    : u.type === 'UnionType'
    ? `(${u.elements.map(Z).join('|')})`
    : u.type === 'ArrayType'
    ? '[]'
    : u.type === 'TypeApplication' && u.expression != null && u.expression.name === 'Array'
    ? `${Z(u.applications[0])}[]`
    : u.type === 'NullableType' || u.type === 'NonNullableType' || u.type === 'OptionalType'
    ? Z(u.expression)
    : u.type === 'AllLiteral'
    ? 'any'
    : null
}
function rr(u) {
  return u.length > 90
}
function RA(u) {
  return u.length > 50
}
function O(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e }
}
function tr({ name: u, value: e, elements: r, raw: t }) {
  return e ?? (r != null ? r.map(tr).join(' | ') : t ?? u)
}
function LA({ name: u, raw: e, elements: r }) {
  return r != null ? O(r.map(tr).join(' | ')) : e != null ? O(e.replace(/^\|\s*/, '')) : O(u)
}
function MA({ type: u, raw: e }) {
  return e != null ? O(e) : O(u)
}
function kA({ type: u, raw: e }) {
  return e != null ? (rr(e) ? O(u, e) : O(e)) : O(u)
}
function jA(u) {
  let { type: e } = u
  return e === 'object' ? kA(u) : MA(u)
}
function UA({ name: u, raw: e }) {
  return e != null ? (rr(e) ? O(u, e) : O(e)) : O(u)
}
function GA(u) {
  if (u == null) return null
  switch (u.name) {
    case 'union':
      return LA(u)
    case 'signature':
      return jA(u)
    default:
      return UA(u)
  }
}
function KA(u, e) {
  if (u != null) {
    let { value: r } = u
    if (!Yu(r)) return RA(r) ? O(e.name, r) : O(r)
  }
  return null
}
var HA = (u, e) => {
  let { flowType: r, description: t, required: a, defaultValue: s } = e
  return { name: u, type: GA(r), required: a, description: t, defaultValue: KA(s, r) }
}
function qA({ tsType: u, required: e }) {
  return u == null ? null : O(e ? u.name : u.name.replace(' | undefined', ''))
}
function WA({ defaultValue: u }) {
  if (u != null) {
    let { value: e } = u
    if (!Yu(e)) return O(e)
  }
  return null
}
var zA = (u, e) => {
  let { description: r, required: t } = e
  return { name: u, type: qA(e), required: t, description: r, defaultValue: WA(e) }
}
function VA(u) {
  return u != null ? O(u.name) : null
}
function JA(u) {
  let { computed: e, func: r } = u
  return typeof e > 'u' && typeof r > 'u'
}
function QA(u) {
  return u
    ? u.name === 'string'
      ? !0
      : u.name === 'enum'
      ? Array.isArray(u.value) &&
        u.value.every(({ value: e }) => typeof e == 'string' && e[0] === '"' && e[e.length - 1] === '"')
      : !1
    : !1
}
function YA(u, e) {
  if (u != null) {
    let { value: r } = u
    if (!Yu(r)) return JA(u) && QA(e) ? O(JSON.stringify(r)) : O(r)
  }
  return null
}
function ar(u, e, r) {
  let { description: t, required: a, defaultValue: s } = r
  return { name: u, type: VA(e), required: a, description: t, defaultValue: YA(s, e) }
}
function Su(u, e) {
  var r
  if (e.includesJsDoc) {
    let { description: t, extractedTags: a } = e
    t != null && (u.description = e.description)
    let s = {
      ...a,
      params:
        (r = a == null ? void 0 : a.params) == null
          ? void 0
          : r.map(n => ({ name: n.getPrettyName(), description: n.description }))
    }
    Object.values(s).filter(Boolean).length > 0 && (u.jsDocTags = s)
  }
  return u
}
var XA = (u, e, r) => {
    let t = ar(u, e.type, e)
    return (t.sbType = Qu(e)), Su(t, r)
  },
  ZA = (u, e, r) => {
    let t = zA(u, e)
    return (t.sbType = Qu(e)), Su(t, r)
  },
  uo = (u, e, r) => {
    let t = HA(u, e)
    return (t.sbType = Qu(e)), Su(t, r)
  },
  eo = (u, e, r) => {
    let t = ar(u, { name: 'unknown' }, e)
    return Su(t, r)
  },
  nr = u => {
    switch (u) {
      case 'JavaScript':
        return XA
      case 'TypeScript':
        return ZA
      case 'Flow':
        return uo
      default:
        return eo
    }
  },
  ir = u => (u.type != null ? 'JavaScript' : u.flowType != null ? 'Flow' : u.tsType != null ? 'TypeScript' : 'Unknown'),
  ro = u => {
    let e = ir(u[0]),
      r = nr(e)
    return u.map(t => {
      var s
      let a = t
      return (
        (s = t.type) != null && s.elements && (a = { ...t, type: { ...t.type, value: t.type.elements } }),
        sr(a.name, a, e, r)
      )
    })
  },
  to = u => {
    let e = Object.keys(u),
      r = ir(u[e[0]]),
      t = nr(r)
    return e
      .map(a => {
        let s = u[a]
        return s != null ? sr(a, s, r, t) : null
      })
      .filter(Boolean)
  },
  Ao = (u, e) => {
    let r = xA(u, e)
    return _A(r) ? (Array.isArray(r) ? ro(r) : to(r)) : []
  }
function sr(u, e, r, t) {
  let a = wA(e.description)
  return a.includesJsDoc && a.ignore
    ? null
    : { propDef: t(u, e, a), jsDocTags: a.extractedTags, docgenInfo: e, typeSystem: r }
}
function oo(u) {
  return u != null && TA(u)
}
var Fo = u => {
    let {
        component: e,
        argTypes: r,
        parameters: { docs: t = {} }
      } = u,
      { extractArgTypes: a } = t,
      s = a && e ? a(e) : {}
    return s ? cA(s, r) : r
  },
  ao = 'storybook/docs',
  Co = `${ao}/snippet-rendered`,
  no = (u => ((u.AUTO = 'auto'), (u.CODE = 'code'), (u.DYNAMIC = 'dynamic'), u))(no || {})
export {
  vi as A,
  hi as B,
  Ri as C,
  Xa as D,
  Ar as E,
  _1 as F,
  Ds as G,
  xa as H,
  Aa as I,
  la as J,
  Wu as K,
  va as L,
  _u as M,
  hs as N,
  ii as O,
  ni as P,
  Oe as Q,
  Re as R,
  Co as S,
  vA as T,
  qi as U,
  mA as V,
  H as _,
  zu as a,
  Cu as b,
  Do as c,
  lu as d,
  W as e,
  Fo as f,
  oo as g,
  O as h,
  Uu as i,
  xA as j,
  no as k,
  so as l,
  RA as m,
  er as n,
  Ao as o,
  rr as p,
  $1 as q,
  be as r,
  ze as s,
  Le as t,
  ou as u,
  bu as v,
  Ve as w,
  za as x,
  An as y,
  rn as z
}
//# sourceMappingURL=index-c8f542d6.js.map
