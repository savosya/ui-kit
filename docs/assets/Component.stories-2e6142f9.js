import { j as r, a as m } from './jsx-runtime-37f7df21.js'
import { c as d } from './clsx.m-1229b3e0.js'
const u = '_root_13m5i_6',
  p = '_s_13m5i_16',
  _ = '_m_13m5i_26',
  y = '_l_13m5i_35',
  b = '_empty_13m5i_44',
  a = { root: u, s: p, m: _, l: y, empty: b },
  e = ({ size: s = 'm', number: o, className: c }) =>
    r('span', { className: d(a.root, a[s], c, { [a.empty]: o === void 0 }), children: o })
try {
  ;(e.displayName = 'Indicator'),
    (e.__docgenInfo = {
      description: '',
      displayName: 'Indicator',
      props: {
        size: {
          defaultValue: { value: 'm' },
          description: '',
          name: 'size',
          required: !1,
          type: { name: 'enum', value: [{ value: '"s"' }, { value: '"m"' }, { value: '"l"' }] }
        },
        number: {
          defaultValue: null,
          description: '',
          name: 'number',
          required: !1,
          type: { name: 'string | number' }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } }
      }
    })
} catch {}
const f = { title: 'Indicator', component: e },
  g = { display: 'flex', gap: '24px' },
  t = {
    render: s =>
      m('div', {
        style: g,
        children: [
          r(e, { ...s }),
          r(e, { size: 's', number: 1 }),
          r(e, { size: 'm', number: 2 }),
          r(e, { size: 'l', number: 3 })
        ]
      }),
    argTypes: { size: { control: { disable: !0 } }, number: { control: 'text' } }
  }
var n, i, l
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: args => {
    return <div style={style}>
        <Indicator {...args} />
        <Indicator size="s" number={1} />
        <Indicator size="m" number={2} />
        <Indicator size="l" number={3} />
      </div>;
  },
  argTypes: {
    size: {
      control: {
        disable: true
      }
    },
    number: {
      control: 'text'
    }
  }
}`,
      ...((l = (i = t.parameters) == null ? void 0 : i.docs) == null ? void 0 : l.source)
    }
  }
}
const x = ['Sandbox'],
  v = Object.freeze(
    Object.defineProperty({ __proto__: null, Sandbox: t, __namedExportsOrder: x, default: f }, Symbol.toStringTag, {
      value: 'Module'
    })
  )
export { e as I, t as S, v as a }
//# sourceMappingURL=Component.stories-2e6142f9.js.map
