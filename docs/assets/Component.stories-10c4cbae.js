import { a as n, j as r } from './jsx-runtime-37f7df21.js'
import { c as B } from './clsx.m-1229b3e0.js'
import { r as w } from './index-f1f2c4b1.js'
const m = {
    root: 'savosya-indicator_root__8kw4',
    s: 'savosya-indicator_s__Rg-m',
    m: 'savosya-indicator_m__n6cI',
    l: 'savosya-indicator_l__e56g',
    empty: 'savosya-indicator_empty__QXmc'
  },
  S = ({ size: d = 'm', number: s, className: l }) =>
    w.createElement('span', { className: B(m.root, m[d], l, { [m.empty]: s === void 0 }) }, s)
S.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Indicator',
  props: { size: { defaultValue: { value: "'m'", computed: !1 }, required: !1 } }
}
const x = '_root_1qtd9_12',
  q = '_primary_1qtd9_21',
  N = '_success_1qtd9_24',
  E = '_error_1qtd9_27',
  M = '_warn_1qtd9_30',
  P = '_m_1qtd9_33',
  R = '_s_1qtd9_24',
  u = { root: x, primary: q, success: N, error: E, warn: M, m: P, s: R }
function e({
  color: d,
  type: s = 'primary',
  size: l = 'm',
  number: p,
  children: h,
  classes: a = {},
  className: z,
  ...c
}) {
  return n('div', {
    className: B(u.root, s && u[s], u[l], z, a.root),
    ...c,
    style: { backgroundColor: d, ...(c == null ? void 0 : c.style) },
    children: [
      p && r(S, { size: l, number: p, className: a == null ? void 0 : a.number }),
      r('span', { className: a.text, children: h })
    ]
  })
}
try {
  ;(e.displayName = 'Badge'),
    (e.__docgenInfo = {
      description: '',
      displayName: 'Badge',
      props: {
        type: {
          defaultValue: { value: 'primary' },
          description: '',
          name: 'type',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"success"' }, { value: '"error"' }, { value: '"primary"' }, { value: '"warn"' }]
          }
        },
        color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'string' } },
        size: {
          defaultValue: { value: 'm' },
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"s"' }, { value: '"m"' }] }
        },
        number: {
          defaultValue: null,
          description: '',
          name: 'number',
          required: !1,
          type: { name: 'string | number' }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        classes: {
          defaultValue: { value: '{}' },
          description: '',
          name: 'classes',
          required: !1,
          type: { name: '{ root?: string; number?: string; text?: string | undefined; } | undefined' }
        }
      }
    })
} catch {}
const V = { title: 'Badge', component: e },
  o = {
    args: { children: 'Бейджик', number: '13' },
    argTypes: { classes: { control: { disable: !0 } }, number: { control: 'number' } }
  },
  j = { display: 'flex', flexDirection: 'column', gap: '12px' },
  t = { display: 'flex', gap: '12px' },
  i = {
    render: () =>
      n('div', {
        style: j,
        children: [
          n('div', {
            style: t,
            children: [
              r(e, { type: 'primary', number: '1', size: 's', children: 'Primary S' }),
              r(e, { type: 'primary', number: '2', size: 'm', children: 'Primary M' })
            ]
          }),
          n('div', {
            style: t,
            children: [
              r(e, { type: 'error', number: '3', size: 's', children: 'Error S' }),
              r(e, { type: 'error', number: '4', size: 'm', children: 'Error M' })
            ]
          }),
          n('div', {
            style: t,
            children: [
              r(e, { type: 'success', number: 6, size: 's', children: 'Success S' }),
              r(e, { type: 'success', number: 7, size: 'm', children: 'Success M' })
            ]
          }),
          n('div', {
            style: t,
            children: [
              r(e, { type: 'warn', size: 's', number: 8, children: 'Warn S' }),
              r(e, { type: 'warn', size: 'm', number: 9, children: 'Warn M' })
            ]
          }),
          n('div', {
            style: t,
            children: [
              r(e, { children: 'No Props Badge' }),
              r(e, { color: 'lightblue', number: 2e4, children: 'Big number with custom color' })
            ]
          })
        ]
      })
  }
var y, g, _
o.parameters = {
  ...o.parameters,
  docs: {
    ...((y = o.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Бейджик',
    number: '13'
  },
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    },
    number: {
      control: 'number'
    }
  }
}`,
      ...((_ = (g = o.parameters) == null ? void 0 : g.docs) == null ? void 0 : _.source)
    }
  }
}
var b, v, f
i.parameters = {
  ...i.parameters,
  docs: {
    ...((b = i.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={ColStyle}>
        <div style={RowStyle}>
          <Badge type="primary" number="1" size="s">
            Primary S
          </Badge>
          <Badge type="primary" number="2" size="m">
            Primary M
          </Badge>
        </div>

        <div style={RowStyle}>
          <Badge type="error" number="3" size="s">
            Error S
          </Badge>
          <Badge type="error" number="4" size="m">
            Error M
          </Badge>
        </div>

        <div style={RowStyle}>
          <Badge type="success" number={6} size="s">
            Success S
          </Badge>
          <Badge type="success" number={7} size="m">
            Success M
          </Badge>
        </div>

        <div style={RowStyle}>
          <Badge type="warn" size="s" number={8}>
            Warn S
          </Badge>
          <Badge type="warn" size="m" number={9}>
            Warn M
          </Badge>
        </div>

        <div style={RowStyle}>
          <Badge>No Props Badge</Badge>
          <Badge color="lightblue" number={20000}>
            Big number with custom color
          </Badge>
        </div>
      </div>;
  }
}`,
      ...((f = (v = i.parameters) == null ? void 0 : v.docs) == null ? void 0 : f.source)
    }
  }
}
const I = ['Sandbox', 'Examples'],
  T = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Examples: i, Sandbox: o, __namedExportsOrder: I, default: V },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { T as B, i as E, o as S, e as a }
//# sourceMappingURL=Component.stories-10c4cbae.js.map
