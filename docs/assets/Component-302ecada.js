import { j as s, a as g } from './jsx-runtime-276775ef.js'
import { r as p } from './index-1cdf6ce0.js'
import { c as l } from './clsx.m-1229b3e0.js'
import { u as I, m as z } from './mergeRefs-3b77d02e.js'
const k = { s: { width: '10', height: '10' }, m: { width: '12', height: '12' }, l: { width: '12', height: '12' } },
  h = ({ size: t, className: d }) =>
    s('svg', {
      width: k[t].width,
      height: k[t].height,
      viewBox: '0 0 9 6',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: d,
      children: s('path', {
        d: 'M7.4375 0.8125L3.0625 5.1875L0.875 3',
        stroke: 'currentColor',
        strokeWidth: '1.53',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    })
try {
  ;(h.displayName = 'CheckIcon'),
    (h.__docgenInfo = {
      description: '',
      displayName: 'CheckIcon',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        size: {
          defaultValue: null,
          description: '',
          name: 'size',
          required: !0,
          type: { name: 'enum', value: [{ value: '"s"' }, { value: '"m"' }, { value: '"l"' }] }
        }
      }
    })
} catch {}
const B = '_root_77wsp_11',
  L = '_checked_77wsp_30',
  R = '_indeterminate_77wsp_30',
  j = '_disabled_77wsp_33',
  E = '_box_77wsp_45',
  M = '_s_77wsp_52',
  F = '_m_77wsp_57',
  H = '_l_77wsp_62',
  S = '_focus_77wsp_78',
  T = '_indeterminateBox_77wsp_83',
  W = '_content_77wsp_108',
  e = {
    root: B,
    checked: L,
    indeterminate: R,
    disabled: j,
    box: E,
    s: M,
    m: F,
    l: H,
    focus: S,
    indeterminateBox: T,
    content: W
  },
  b = p.forwardRef((t, d) => {
    const {
        className: w,
        label: y,
        size: c = 'm',
        checked: n,
        indeterminate: u,
        name: x,
        onChange: _,
        classes: a,
        disabled: o,
        ...C
      } = t,
      r = typeof n == 'boolean',
      f = p.useRef(null),
      [N] = I(f, 'keyboard'),
      [i, v] = p.useState(n || !1),
      q = m => {
        o || (_ && _(m, { checked: m.target.checked, name: m.target.name }), typeof n > 'u' && v(V => !V))
      }
    return g('label', {
      className: l(
        e.root,
        e[c],
        { [e.indeterminate]: u, [e.checked]: r ? n : i, [e.disabled]: o },
        w,
        a == null ? void 0 : a.root
      ),
      ref: z([f, d]),
      children: [
        s('input', { type: 'checkbox', name: x, onChange: q, checked: r ? n : i, disabled: o, ...C }),
        g('span', {
          className: l(e.box, e[c], { [e.indeterminate]: u, [e.checked]: r ? n : i, [e.disabled]: o, [e.focus]: N }),
          children: [
            (r ? n : i) && s(h, { size: c }),
            !n && !i && u && s('span', { className: l(e.indeterminateBox, e[c], { [e.disabled]: o }) })
          ]
        }),
        s('span', { className: l(e.content, a == null ? void 0 : a.content), children: y })
      ]
    })
  })
try {
  ;(b.displayName = 'Checkbox'),
    (b.__docgenInfo = {
      description: '',
      displayName: 'Checkbox',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'ReactNode' } },
        size: {
          defaultValue: null,
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"s"' }, { value: '"m"' }, { value: '"l"' }] }
        },
        checked: { defaultValue: null, description: '', name: 'checked', required: !1, type: { name: 'boolean' } },
        indeterminate: {
          defaultValue: null,
          description: '',
          name: 'indeterminate',
          required: !1,
          type: { name: 'boolean' }
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: {
            name: '((event: ChangeEvent<HTMLInputElement>, payload: { checked: boolean; name?: string; }) => void)'
          }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: { name: '{ root?: string; input?: string; content?: string | undefined; } | undefined' }
        }
      }
    })
} catch {}
export { b as C }
//# sourceMappingURL=Component-302ecada.js.map
