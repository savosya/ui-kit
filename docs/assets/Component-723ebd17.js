import { a as V, j as b } from './jsx-runtime-37f7df21.js'
import { r as m } from './index-f1f2c4b1.js'
import { c as N } from './clsx.m-1229b3e0.js'
import { u as z, m as R } from './mergeRefs-dc8f3646.js'
import { L as x } from './Component-856ebfaa.js'
const B = '_s_1sfjm_63',
  S = '_onlyIcon_1sfjm_73',
  T = '_m_1sfjm_77',
  C = '_l_1sfjm_91',
  L = '_root_1sfjm_105',
  w = '_primary_1sfjm_119',
  D = '_dark_1sfjm_119',
  E = '_loading_1sfjm_140',
  F = '_ghost_1sfjm_146',
  O = '_outline_1sfjm_173',
  P = '_light_1sfjm_200',
  A = '_link_1sfjm_281',
  G = '_focus_1sfjm_310',
  H = '_fill_1sfjm_316',
  e = {
    s: B,
    onlyIcon: S,
    m: T,
    l: C,
    root: L,
    primary: w,
    dark: D,
    loading: E,
    ghost: F,
    outline: O,
    light: P,
    link: A,
    focus: G,
    fill: H
  },
  J = { s: 15, m: 17, l: 19 },
  d = m.forwardRef((t, f) => {
    const {
        loading: a,
        children: s,
        size: r = 'm',
        mode: c = 'dark',
        type: p = 'primary',
        htmlType: _ = 'button',
        fill: y = !1,
        loaderSize: g,
        leftIcon: h,
        rightIcon: j,
        className: v,
        href: K,
        onClick: n,
        classes: l = {},
        ...i
      } = t,
      u = m.useRef(null),
      [I] = z(u, 'keyboard'),
      k = !s,
      q = o => {
        if (i.disabled || a) {
          o.preventDefault(), o.stopPropagation()
          return
        }
        n == null || n(o)
      }
    return V('button', {
      ref: R([f, u]),
      type: _,
      className: N(
        e.root,
        e[p],
        e[c],
        e[r],
        { [e.focus]: I, [e.fill]: y, [e.loading]: a, [e.onlyIcon]: k },
        v,
        l == null ? void 0 : l.root
      ),
      onClick: q,
      ...i,
      children: [
        a && b(x, { fill: !1, size: g ?? J[r], className: l == null ? void 0 : l.loader }),
        (!a && h) || null,
        s,
        j
      ]
    })
  })
try {
  ;(d.displayName = 'Button'),
    (d.__docgenInfo = {
      description: '',
      displayName: 'Button',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        size: {
          defaultValue: null,
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"s"' }, { value: '"m"' }, { value: '"l"' }] }
        },
        type: {
          defaultValue: null,
          description: '',
          name: 'type',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"link"' }, { value: '"primary"' }, { value: '"ghost"' }, { value: '"outline"' }]
          }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: { name: '{ root?: string; loader?: string; } | undefined' }
        },
        loading: { defaultValue: null, description: '', name: 'loading', required: !1, type: { name: 'boolean' } },
        mode: {
          defaultValue: null,
          description: '',
          name: 'mode',
          required: !1,
          type: { name: 'enum', value: [{ value: '"dark"' }, { value: '"light"' }] }
        },
        fill: { defaultValue: null, description: '', name: 'fill', required: !1, type: { name: 'boolean' } },
        htmlType: {
          defaultValue: null,
          description: '',
          name: 'htmlType',
          required: !1,
          type: { name: 'enum', value: [{ value: '"button"' }, { value: '"reset"' }, { value: '"submit"' }] }
        },
        loaderSize: { defaultValue: null, description: '', name: 'loaderSize', required: !1, type: { name: 'number' } },
        leftIcon: { defaultValue: null, description: '', name: 'leftIcon', required: !1, type: { name: 'ReactNode' } },
        rightIcon: { defaultValue: null, description: '', name: 'rightIcon', required: !1, type: { name: 'ReactNode' } }
      }
    })
} catch {}
export { d as B }
//# sourceMappingURL=Component-723ebd17.js.map
