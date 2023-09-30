import { j as v } from './jsx-runtime-37f7df21.js'
import { R as k, r as s } from './index-f1f2c4b1.js'
import { c as d } from './clsx.m-1229b3e0.js'
import { _ as I } from './tslib.es6-6635c9de.js'
import { u as j, m as B } from './mergeRefs-dc8f3646.js'
const b = { s: { width: '10', height: '10' }, m: { width: '11', height: '11' }, l: { width: '12', height: '12' } },
  R = ({ size: t, className: l }) =>
    k.createElement(
      'svg',
      {
        width: b[t].width,
        height: b[t].height,
        viewBox: '0 0 9 6',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: l
      },
      k.createElement('path', {
        d: 'M7.4375 0.8125L3.0625 5.1875L0.875 3',
        stroke: 'currentColor',
        strokeWidth: '1.53',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    )
R.__docgenInfo = { description: '', methods: [], displayName: 'CheckIcon' }
const e = {
    root: 'savosya-radio_root__8kw4',
    checked: 'savosya-radio_checked__KOKS',
    indeterminate: 'savosya-radio_indeterminate__KCXQ',
    disabled: 'savosya-radio_disabled__y9Xx',
    box: 'savosya-radio_box__BoTa',
    s: 'savosya-radio_s__Rg-m',
    m: 'savosya-radio_m__n6cI',
    l: 'savosya-radio_l__e56g',
    focus: 'savosya-radio_focus__9JcN',
    indeterminateBox: 'savosya-radio_indeterminateBox__5AQ4',
    content: 'savosya-radio_content__sLnB'
  },
  w = s.forwardRef((t, l) => {
    const {
        className: u,
        label: h,
        size: r = 'm',
        checked: c,
        markType: n = 'default',
        name: p,
        onChange: m,
        classes: o,
        disabled: a
      } = t,
      _ = I(t, ['className', 'label', 'size', 'checked', 'markType', 'name', 'onChange', 'classes', 'disabled']),
      g = typeof c == 'boolean',
      [x, E] = s.useState(!1),
      y = s.useRef(null),
      [V] = j(y, 'keyboard'),
      q = f => {
        a || (g || E(!0), m && m(f, { checked: f.target.checked, name: f.target.name }))
      },
      i = g ? c : x
    return s.createElement(
      'label',
      {
        className: d(
          e.root,
          e[r],
          { [e.indeterminate]: i && n === 'default', [e.checked]: i && n === 'check', [e.disabled]: a },
          u,
          o == null ? void 0 : o.root
        ),
        ref: B([y, l])
      },
      s.createElement('input', Object.assign({ type: 'radio', name: p, onChange: q, checked: i, disabled: a }, _)),
      s.createElement(
        'span',
        {
          className: d(e.box, e[r], {
            [e.indeterminate]: i && n === 'default',
            [e.checked]: i && n === 'check',
            [e.disabled]: a,
            [e.focus]: V
          })
        },
        i && n === 'check' && s.createElement(R, { size: r }),
        i && n === 'default' && s.createElement('span', { className: d(e.indeterminateBox, e[r], { [e.disabled]: a }) })
      ),
      s.createElement('span', { className: d(e.content, o == null ? void 0 : o.content, { [e.disabled]: a }) }, h)
    )
  })
w.__docgenInfo = { description: '', methods: [], displayName: 'Radio' }
const L = '_group_19rja_1',
  z = '_vertical_19rja_5',
  C = { group: L, vertical: z },
  N = t => {
    const {
        options: l = [],
        className: u,
        name: h,
        onChange: r,
        value: c,
        radioProps: n,
        direction: p = 'horizontal',
        style: m
      } = t,
      o = s.useCallback((a, _) => {
        r && r(a.target.value, a, _)
      }, [])
    return v('div', {
      className: d(C.group, u, { [C.vertical]: p === 'vertical' }),
      style: m,
      children:
        l == null
          ? void 0
          : l.map(a =>
              v(
                w,
                {
                  name: h,
                  label: a.label,
                  value: a.value,
                  disabled: a.disabled,
                  checked: a.value === c,
                  onChange: o,
                  ...n
                },
                a.value
              )
            )
    })
  }
try {
  ;(N.displayName = 'RadioGroup'),
    (N.__docgenInfo = {
      description: '',
      displayName: 'RadioGroup',
      props: {
        direction: {
          defaultValue: null,
          description: '',
          name: 'direction',
          required: !1,
          type: { name: 'enum', value: [{ value: '"horizontal"' }, { value: '"vertical"' }] }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !1, type: { name: 'string' } },
        options: {
          defaultValue: null,
          description: '',
          name: 'options',
          required: !1,
          type: { name: 'RadioOption[]' }
        },
        radioProps: { defaultValue: null, description: '', name: 'radioProps', required: !1, type: { name: 'any' } },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: {
            name: '((newValue: string, event: ChangeEvent<HTMLInputElement>, payload: { checked: boolean; name?: string; }) => void)'
          }
        },
        value: { defaultValue: null, description: '', name: 'value', required: !1, type: { name: 'string' } },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } }
      }
    })
} catch {}
export { N as R }
//# sourceMappingURL=Component-c0eb7f36.js.map
