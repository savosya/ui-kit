import { j as l, a as z } from './jsx-runtime-37f7df21.js'
import { r as o } from './index-f1f2c4b1.js'
import {
  u as $e,
  _ as y,
  f as je,
  a as ye,
  C as ke,
  d as Se,
  K as pe,
  g as _e,
  P as Ue
} from './CSSMotionList-d86c2cd4.js'
import { _ as j } from './isNativeReflectConstruct-60b6c4ab.js'
import { c as U } from './index-2d278ef6.js'
import { p as Te } from './pickAttrs-be982112.js'
import { c as g } from './clsx.m-1229b3e0.js'
import { B as Ce } from './Component-723ebd17.js'
import { A as Me } from './Component-8fb68d72.js'
var Ee = o.createContext(null),
  Re = o.createContext({}),
  Fe = function (n) {
    var t = n.prefixCls,
      d = n.className,
      s = n.style,
      C = n.children,
      i = n.containerRef,
      u = n.id,
      m = n.onMouseEnter,
      b = n.onMouseOver,
      h = n.onMouseLeave,
      r = n.onClick,
      w = n.onKeyDown,
      M = n.onKeyUp,
      c = { onMouseEnter: m, onMouseOver: b, onMouseLeave: h, onClick: r, onKeyDown: w, onKeyUp: M },
      k = o.useContext(Re),
      S = k.panel,
      O = $e(S, i)
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(
        'div',
        j(
          {
            id: u,
            className: U(''.concat(t, '-content'), d),
            style: y({}, s),
            'aria-modal': 'true',
            role: 'dialog',
            ref: O
          },
          c
        ),
        C
      )
    )
  }
function xe(e) {
  return typeof e == 'string' && String(Number(e)) === e
    ? (je(!1, 'Invalid value type of `width` or `height` which should be number type instead.'), Number(e))
    : e
}
var Ne = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' }
function ze(e, n) {
  var t,
    d,
    s,
    C,
    i = e.prefixCls,
    u = e.open,
    m = e.placement,
    b = e.inline,
    h = e.push,
    r = e.forceRender,
    w = e.autoFocus,
    M = e.keyboard,
    c = e.classNames,
    k = e.rootClassName,
    S = e.rootStyle,
    O = e.zIndex,
    X = e.className,
    Y = e.id,
    R = e.style,
    P = e.motion,
    te = e.width,
    oe = e.height,
    re = e.children,
    ae = e.contentWrapperStyle,
    le = e.mask,
    ie = e.maskClosable,
    Z = e.maskMotion,
    de = e.maskClassName,
    G = e.maskStyle,
    E = e.afterOpenChange,
    I = e.onClose,
    ue = e.onMouseEnter,
    J = e.onMouseOver,
    ce = e.onMouseLeave,
    se = e.onClick,
    _ = e.onKeyDown,
    Q = e.onKeyUp,
    v = e.styles,
    A = o.useRef(),
    H = o.useRef(),
    B = o.useRef()
  o.useImperativeHandle(n, function () {
    return A.current
  })
  var me = function (p) {
    var q = p.keyCode,
      L = p.shiftKey
    switch (q) {
      case pe.TAB: {
        if (q === pe.TAB) {
          if (!L && document.activeElement === B.current) {
            var fe
            ;(fe = H.current) === null || fe === void 0 || fe.focus({ preventScroll: !0 })
          } else if (L && document.activeElement === H.current) {
            var ve
            ;(ve = B.current) === null || ve === void 0 || ve.focus({ preventScroll: !0 })
          }
        }
        break
      }
      case pe.ESC: {
        I && M && (p.stopPropagation(), I(p))
        break
      }
    }
  }
  o.useEffect(
    function () {
      if (u && w) {
        var a
        ;(a = A.current) === null || a === void 0 || a.focus({ preventScroll: !0 })
      }
    },
    [u]
  )
  var ge = o.useState(!1),
    V = ye(ge, 2),
    $ = V[0],
    K = V[1],
    f = o.useContext(Ee),
    ee
  h === !1 ? (ee = { distance: 0 }) : h === !0 ? (ee = {}) : (ee = h || {})
  var x =
      (t =
        (d = (s = ee) === null || s === void 0 ? void 0 : s.distance) !== null && d !== void 0
          ? d
          : f == null
          ? void 0
          : f.pushDistance) !== null && t !== void 0
        ? t
        : 180,
    Pe = o.useMemo(
      function () {
        return {
          pushDistance: x,
          push: function () {
            K(!0)
          },
          pull: function () {
            K(!1)
          }
        }
      },
      [x]
    )
  o.useEffect(
    function () {
      if (u) {
        var a
        f == null || (a = f.push) === null || a === void 0 || a.call(f)
      } else {
        var p
        f == null || (p = f.pull) === null || p === void 0 || p.call(f)
      }
    },
    [u]
  ),
    o.useEffect(function () {
      return function () {
        var a
        f == null || (a = f.pull) === null || a === void 0 || a.call(f)
      }
    }, [])
  var Ie =
      le &&
      o.createElement(ke, j({ key: 'mask' }, Z, { visible: u }), function (a, p) {
        var q = a.className,
          L = a.style
        return o.createElement('div', {
          className: U(''.concat(i, '-mask'), q, c == null ? void 0 : c.mask, de),
          style: y(y(y({}, L), G), v == null ? void 0 : v.mask),
          onClick: ie && u ? I : void 0,
          ref: p
        })
      }),
    Ae = typeof P == 'function' ? P(m) : P,
    N = {}
  if ($ && x)
    switch (m) {
      case 'top':
        N.transform = 'translateY('.concat(x, 'px)')
        break
      case 'bottom':
        N.transform = 'translateY('.concat(-x, 'px)')
        break
      case 'left':
        N.transform = 'translateX('.concat(x, 'px)')
        break
      default:
        N.transform = 'translateX('.concat(-x, 'px)')
        break
    }
  m === 'left' || m === 'right' ? (N.width = xe(te)) : (N.height = xe(oe))
  var He = { onMouseEnter: ue, onMouseOver: J, onMouseLeave: ce, onClick: se, onKeyDown: _, onKeyUp: Q },
    Be = o.createElement(
      ke,
      j({ key: 'panel' }, Ae, {
        visible: u,
        forceRender: r,
        onVisibleChanged: function (p) {
          E == null || E(p)
        },
        removeOnLeave: !1,
        leavedClassName: ''.concat(i, '-content-wrapper-hidden')
      }),
      function (a, p) {
        var q = a.className,
          L = a.style
        return o.createElement(
          'div',
          j(
            {
              className: U(''.concat(i, '-content-wrapper'), c == null ? void 0 : c.wrapper, q),
              style: y(y(y(y({}, N), L), ae), v == null ? void 0 : v.wrapper)
            },
            Te(e, { data: !0 })
          ),
          o.createElement(
            Fe,
            j(
              {
                id: Y,
                containerRef: p,
                prefixCls: i,
                className: U(X, c == null ? void 0 : c.content),
                style: y(y({}, R), v == null ? void 0 : v.content)
              },
              He
            ),
            re
          )
        )
      }
    ),
    we = y({}, S)
  return (
    O && (we.zIndex = O),
    o.createElement(
      Ee.Provider,
      { value: Pe },
      o.createElement(
        'div',
        {
          className: U(
            i,
            ''.concat(i, '-').concat(m),
            k,
            ((C = {}), Se(C, ''.concat(i, '-open'), u), Se(C, ''.concat(i, '-inline'), b), C)
          ),
          style: we,
          tabIndex: -1,
          ref: A,
          onKeyDown: me
        },
        Ie,
        o.createElement('div', { tabIndex: 0, ref: H, style: Ne, 'aria-hidden': 'true', 'data-sentinel': 'start' }),
        Be,
        o.createElement('div', { tabIndex: 0, ref: B, style: Ne, 'aria-hidden': 'true', 'data-sentinel': 'end' })
      )
    )
  )
}
var We = o.forwardRef(ze),
  Xe = function (n) {
    var t = n.open,
      d = t === void 0 ? !1 : t,
      s = n.prefixCls,
      C = s === void 0 ? 'rc-drawer' : s,
      i = n.placement,
      u = i === void 0 ? 'right' : i,
      m = n.autoFocus,
      b = m === void 0 ? !0 : m,
      h = n.keyboard,
      r = h === void 0 ? !0 : h,
      w = n.width,
      M = w === void 0 ? 378 : w,
      c = n.mask,
      k = c === void 0 ? !0 : c,
      S = n.maskClosable,
      O = S === void 0 ? !0 : S,
      X = n.getContainer,
      Y = n.forceRender,
      R = n.afterOpenChange,
      P = n.destroyOnClose,
      te = n.onMouseEnter,
      oe = n.onMouseOver,
      re = n.onMouseLeave,
      ae = n.onClick,
      le = n.onKeyDown,
      ie = n.onKeyUp,
      Z = n.panelRef,
      de = o.useState(!1),
      G = ye(de, 2),
      E = G[0],
      I = G[1],
      ue = o.useState(!1),
      J = ye(ue, 2),
      ce = J[0],
      se = J[1]
    _e(function () {
      se(!0)
    }, [])
    var _ = ce ? d : !1,
      Q = o.useRef(),
      v = o.useRef()
    _e(
      function () {
        _ && (v.current = document.activeElement)
      },
      [_]
    )
    var A = function (V) {
        var $
        if (
          (I(V),
          R == null || R(V),
          !V && v.current && !(($ = Q.current) !== null && $ !== void 0 && $.contains(v.current)))
        ) {
          var K
          ;(K = v.current) === null || K === void 0 || K.focus({ preventScroll: !0 })
        }
      },
      H = o.useMemo(
        function () {
          return { panel: Z }
        },
        [Z]
      )
    if (!Y && !E && !_ && P) return null
    var B = { onMouseEnter: te, onMouseOver: oe, onMouseLeave: re, onClick: ae, onKeyDown: le, onKeyUp: ie },
      me = y(
        y({}, n),
        {},
        {
          open: _,
          prefixCls: C,
          placement: u,
          autoFocus: b,
          keyboard: r,
          width: M,
          mask: k,
          maskClosable: O,
          inline: X === !1,
          afterOpenChange: A,
          ref: Q
        },
        B
      )
    return o.createElement(
      Re.Provider,
      { value: H },
      o.createElement(
        Ue,
        { open: _ || Y || E, autoDestroy: !1, getContainer: X, autoLock: k && (_ || E) },
        o.createElement(We, me)
      )
    )
  }
const Ye = '_close_1s1w6_1',
  Ze = { close: Ye },
  he = ({ size: e = 22, onClick: n }) =>
    l('svg', {
      onClick: n,
      width: e,
      height: e,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: Ze.close,
      children: l('path', {
        d: 'M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z',
        fill: 'currentColor'
      })
    })
try {
  ;(he.displayName = 'CloseIcon'),
    (he.__docgenInfo = {
      description: '',
      displayName: 'CloseIcon',
      props: {
        size: { defaultValue: { value: '22' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !1, type: { name: '(() => void)' } }
      }
    })
} catch {}
const Ge = '_container_j2v88_1',
  Je = '_gray_j2v88_9',
  Qe = '_header_j2v88_13',
  en = '_title_j2v88_21',
  nn = '_close_j2v88_27',
  tn = '_body_j2v88_48',
  on = '_footer_j2v88_56',
  D = { container: Ge, gray: Je, header: Qe, title: en, close: nn, body: tn, footer: on },
  be = ({
    title: e,
    footer: n,
    background: t = 'white',
    closeIcon: d = l(he, {}),
    closable: s = !0,
    onClose: C,
    headerStyle: i,
    drawerStyle: u,
    bodyStyle: m,
    footerStyle: b,
    children: h,
    classes: r
  }) =>
    z('div', {
      className: g(D.container, r == null ? void 0 : r.root, { [D.gray]: t === 'gray' }),
      style: u,
      children: [
        (e || s) &&
          z('div', {
            className: g(D.header, r == null ? void 0 : r.header),
            style: i,
            children: [
              l('div', { className: g(D.title, r == null ? void 0 : r.title), children: e }),
              s &&
                l('button', {
                  type: 'button',
                  onClick: C,
                  'aria-label': 'Close',
                  className: g(D.close, r == null ? void 0 : r.close),
                  children: d
                })
            ]
          }),
        l('div', { className: g(D.body, r == null ? void 0 : r.body), style: m, children: h }),
        n && l('div', { className: g(D.footer, r == null ? void 0 : r.footer), style: b, children: n })
      ]
    })
try {
  ;(be.displayName = 'DrawerPanel'),
    (be.__docgenInfo = {
      description: '',
      displayName: 'DrawerPanel',
      props: {
        title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'ReactNode' } },
        footer: { defaultValue: null, description: '', name: 'footer', required: !1, type: { name: 'ReactNode' } },
        closable: {
          defaultValue: { value: 'true' },
          description: '',
          name: 'closable',
          required: !1,
          type: { name: 'boolean' }
        },
        closeIcon: {
          defaultValue: { value: '<CloseIcon />' },
          description: '',
          name: 'closeIcon',
          required: !1,
          type: { name: 'ReactNode' }
        },
        onClose: {
          defaultValue: null,
          description: '',
          name: 'onClose',
          required: !1,
          type: { name: '((e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)' }
        },
        background: {
          defaultValue: { value: 'white' },
          description: '',
          name: 'background',
          required: !1,
          type: { name: 'enum', value: [{ value: '"white"' }, { value: '"gray"' }] }
        },
        drawerStyle: {
          defaultValue: null,
          description: '',
          name: 'drawerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        headerStyle: {
          defaultValue: null,
          description: '',
          name: 'headerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        bodyStyle: {
          defaultValue: null,
          description: '',
          name: 'bodyStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        footerStyle: {
          defaultValue: null,
          description: '',
          name: 'footerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ root?: string; header?: string; title?: string | undefined; close?: string | undefined; body?: string | undefined; footer?: string | undefined; } | undefined'
          }
        }
      }
    })
} catch {}
const rn = '_root_1b78e_2',
  an = '_mask_1b78e_6',
  ln = '_blur_1b78e_6',
  ne = { root: rn, mask: an, blur: ln }
const dn = 'eub-drawer-mask-motion',
  un = 'eub-drawer-panel-motion',
  cn = { motionAppear: !0, motionName: dn, onAppearEnd: console.warn },
  sn = e => ({ motionAppear: !0, motionName: `${un}-${e}` }),
  mn = { maskMotion: cn, motion: sn },
  W = ({
    children: e,
    className: n,
    classes: t,
    width: d,
    open: s,
    placement: C = 'left',
    closeOnBackdrop: i = !0,
    blurredMask: u,
    onClose: m,
    closeOnEsc: b = !0,
    onMouseEnter: h,
    onMouseOver: r,
    onMouseLeave: w,
    onClick: M,
    onKeyDown: c,
    onKeyUp: k,
    ...S
  }) =>
    l(Xe, {
      prefixCls: 'eub-drawer',
      width: d,
      open: s,
      placement: C,
      maskClosable: i,
      keyboard: b,
      onClose: m,
      onMouseEnter: h,
      onMouseOver: r,
      onMouseLeave: w,
      onClick: M,
      onKeyDown: c,
      onKeyUp: k,
      className: g(ne.root, n),
      classNames: {
        mask: g(ne.mask, t == null ? void 0 : t.mask, { [ne.blur]: u }),
        wrapper: g(ne.wrapper, t == null ? void 0 : t.wrapper)
      },
      ...mn,
      children: l(be, {
        ...S,
        onClose: m,
        classes: {
          root: t == null ? void 0 : t.root,
          header: t == null ? void 0 : t.header,
          title: t == null ? void 0 : t.title,
          close: t == null ? void 0 : t.close,
          body: t == null ? void 0 : t.body,
          footer: t == null ? void 0 : t.footer
        },
        children: e
      })
    })
try {
  ;(W.displayName = 'Drawer'),
    (W.__docgenInfo = {
      description: '',
      displayName: 'Drawer',
      props: {
        open: { defaultValue: null, description: '', name: 'open', required: !0, type: { name: 'boolean' } },
        onClose: {
          defaultValue: null,
          description: '',
          name: 'onClose',
          required: !0,
          type: { name: '(e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void' }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        width: { defaultValue: null, description: '', name: 'width', required: !1, type: { name: 'string | number' } },
        placement: {
          defaultValue: { value: 'left' },
          description: '',
          name: 'placement',
          required: !1,
          type: { name: 'enum', value: [{ value: '"right"' }, { value: '"left"' }] }
        },
        closeOnBackdrop: {
          defaultValue: { value: 'true' },
          description: '',
          name: 'closeOnBackdrop',
          required: !1,
          type: { name: 'boolean' }
        },
        closeOnEsc: {
          defaultValue: { value: 'true' },
          description: '',
          name: 'closeOnEsc',
          required: !1,
          type: { name: 'boolean' }
        },
        blurredMask: {
          defaultValue: null,
          description: '',
          name: 'blurredMask',
          required: !1,
          type: { name: 'boolean' }
        },
        onMouseEnter: {
          defaultValue: null,
          description: '',
          name: 'onMouseEnter',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLDivElement>' }
        },
        onMouseOver: {
          defaultValue: null,
          description: '',
          name: 'onMouseOver',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLDivElement>' }
        },
        onMouseLeave: {
          defaultValue: null,
          description: '',
          name: 'onMouseLeave',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLDivElement>' }
        },
        onClick: {
          defaultValue: null,
          description: '',
          name: 'onClick',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLDivElement>' }
        },
        onKeyDown: {
          defaultValue: null,
          description: '',
          name: 'onKeyDown',
          required: !1,
          type: { name: 'KeyboardEventHandler<HTMLDivElement>' }
        },
        onKeyUp: {
          defaultValue: null,
          description: '',
          name: 'onKeyUp',
          required: !1,
          type: { name: 'KeyboardEventHandler<HTMLDivElement>' }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ mask?: string; wrapper?: string; root?: string | undefined; header?: string | undefined; title?: string | undefined; close?: string | undefined; body?: string | undefined; footer?: string | undefined; } | undefined'
          }
        },
        title: {
          defaultValue: null,
          description: 'Panel Props',
          name: 'title',
          required: !1,
          type: { name: 'ReactNode' }
        },
        footer: { defaultValue: null, description: '', name: 'footer', required: !1, type: { name: 'ReactNode' } },
        closable: { defaultValue: null, description: '', name: 'closable', required: !1, type: { name: 'boolean' } },
        closeIcon: {
          defaultValue: null,
          description: '',
          name: 'closeIcon',
          required: !1,
          type: { name: 'ReactNode' }
        },
        background: {
          defaultValue: null,
          description: '',
          name: 'background',
          required: !1,
          type: { name: 'enum', value: [{ value: '"white"' }, { value: '"gray"' }] }
        },
        drawerStyle: {
          defaultValue: null,
          description: '',
          name: 'drawerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        headerStyle: {
          defaultValue: null,
          description: '',
          name: 'headerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        bodyStyle: {
          defaultValue: null,
          description: '',
          name: 'bodyStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        footerStyle: {
          defaultValue: null,
          description: '',
          name: 'footerStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        }
      }
    })
} catch {}
const fn = { title: 'Drawer', component: W },
  T = {
    render: e => {
      const [n, t] = o.useState(!1),
        d = () => t(s => !s)
      return z('div', {
        children: [
          l(Ce, { type: n ? 'primary' : 'outline', onClick: d, children: 'Drawer' }),
          l(W, { open: n, onClose: d, ...e, children: 'Drawer content' })
        ]
      })
    },
    argTypes: {
      open: { control: { disable: !0 } },
      onMouseEnter: { control: { disable: !0 } },
      onMouseOver: { control: { disable: !0 } },
      onMouseLeave: { control: { disable: !0 } },
      onClose: { control: { disable: !0 } },
      onClick: { control: { disable: !0 } },
      onKeyDown: { control: { disable: !0 } },
      onKeyUp: { control: { disable: !0 } },
      classes: { control: { disable: !0 } },
      title: { control: 'text' },
      footer: { control: 'text' },
      closeIcon: { control: 'text' },
      width: { control: 'text' },
      placement: { control: 'select', options: ['left', 'right'] }
    }
  },
  F = {
    render: () => {
      const [e, n] = o.useState(!1),
        t = () => n(d => !d)
      return z('div', {
        children: [
          l(Ce, { type: e ? 'primary' : 'outline', onClick: t, children: 'Custom Drawer' }),
          z(W, {
            open: e,
            onClose: t,
            placement: 'right',
            width: '350px',
            closeIcon: l(Ce, { type: 'ghost', size: 's', children: 'Закрыть' }),
            title: l('div', { children: 'Header' }),
            headerStyle: { backgroundColor: 'rgba(93, 245, 39, 0.15)' },
            footer: l('div', { children: 'Footer' }),
            footerStyle: { backgroundColor: 'rgba(93, 245, 39, 0.15)' },
            children: [
              l(Me, {
                title: 'Бегущий по лезвию',
                defaultOpen: !0,
                style: { padding: '16px 8px' },
                children:
                  '«Бегу́щий по ле́звию» (англ. Blade Runner) — художественный фильм, снятый английским режиссёром Ридли Скоттом в марте — июле 1981 года по мотивам научно-фантастического романа Филипа Дика «Мечтают ли андроиды об электроовцах?» (1968).'
              }),
              l('br', {}),
              l(Me, {
                title: 'Бегущий по лезвию 2049',
                defaultOpen: !0,
                style: { padding: '16px 8px' },
                children:
                  'Фильм «Бегущий по лезвию 2049» подчёркивает, что важны лишь две идеи - вера и любовь, соединение которых является ключом к самой жизни. Именно они и отличают человека от репликанта и дают репликанту возможность стать человеком.'
              })
            ]
          })
        ]
      })
    }
  }
var De, Oe, Ve
T.parameters = {
  ...T.parameters,
  docs: {
    ...((De = T.parameters) == null ? void 0 : De.docs),
    source: {
      originalSource: `{
  render: args => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(prev => !prev);
    return <div>
        <Button type={open ? 'primary' : 'outline'} onClick={toggle}>
          Drawer
        </Button>

        <Drawer open={open} onClose={toggle} {...args}>
          Drawer content
        </Drawer>
      </div>;
  },
  argTypes: {
    open: {
      control: {
        disable: true
      }
    },
    onMouseEnter: {
      control: {
        disable: true
      }
    },
    onMouseOver: {
      control: {
        disable: true
      }
    },
    onMouseLeave: {
      control: {
        disable: true
      }
    },
    onClose: {
      control: {
        disable: true
      }
    },
    onClick: {
      control: {
        disable: true
      }
    },
    onKeyDown: {
      control: {
        disable: true
      }
    },
    onKeyUp: {
      control: {
        disable: true
      }
    },
    classes: {
      control: {
        disable: true
      }
    },
    title: {
      control: 'text'
    },
    footer: {
      control: 'text'
    },
    closeIcon: {
      control: 'text'
    },
    width: {
      control: 'text'
    },
    placement: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`,
      ...((Ve = (Oe = T.parameters) == null ? void 0 : Oe.docs) == null ? void 0 : Ve.source)
    }
  }
}
var Ke, qe, Le
F.parameters = {
  ...F.parameters,
  docs: {
    ...((Ke = F.parameters) == null ? void 0 : Ke.docs),
    source: {
      originalSource: `{
  render: () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(prev => !prev);
    return <div>
        <Button type={open ? 'primary' : 'outline'} onClick={toggle}>
          Custom Drawer
        </Button>

        <Drawer open={open} onClose={toggle} placement="right" width="350px" closeIcon={<Button type="ghost" size="s">
              Закрыть
            </Button>} title={<div>Header</div>} headerStyle={{
        backgroundColor: 'rgba(93, 245, 39, 0.15)'
      }} footer={<div>Footer</div>} footerStyle={{
        backgroundColor: 'rgba(93, 245, 39, 0.15)'
      }}>
          <Accordion title="Бегущий по лезвию" defaultOpen style={{
          padding: '16px 8px'
        }}>
            «Бегу́щий по ле́звию» (англ. Blade Runner) — художественный фильм, снятый английским режиссёром Ридли Скоттом
            в марте — июле 1981 года по мотивам научно-фантастического романа Филипа Дика «Мечтают ли андроиды об
            электроовцах?» (1968).
          </Accordion>
          <br />
          <Accordion title="Бегущий по лезвию 2049" defaultOpen style={{
          padding: '16px 8px'
        }}>
            Фильм «Бегущий по лезвию 2049» подчёркивает, что важны лишь две идеи - вера и любовь, соединение которых
            является ключом к самой жизни. Именно они и отличают человека от репликанта и дают репликанту возможность
            стать человеком.
          </Accordion>
        </Drawer>
      </div>;
  }
}`,
      ...((Le = (qe = F.parameters) == null ? void 0 : qe.docs) == null ? void 0 : Le.source)
    }
  }
}
const vn = ['Sandbox', 'Custom'],
  _n = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Custom: F, Sandbox: T, __namedExportsOrder: vn, default: fn },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { F as C, _n as D, T as S, W as a }
//# sourceMappingURL=Component.stories-b493934f.js.map
