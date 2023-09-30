import { j as s } from './jsx-runtime-37f7df21.js'
import { L as c } from './Component-0fc422e6.js'
const i = { title: 'Loader', component: c },
  e = { args: { fill: !1 }, argTypes: { classes: { controls: { disable: !0 } } } },
  p = { border: '2px solid #21272E', height: '400px', borderRadius: '10px' },
  r = { render: () => s('div', { style: p, children: s(c, { size: 32 }) }) }
var o, a, t
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    fill: false
  },
  argTypes: {
    classes: {
      controls: {
        disable: true
      }
    }
  }
}`,
      ...((t = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : t.source)
    }
  }
}
var n, d, l
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={styles}>
        <Loader size={32} />
      </div>;
  }
}`,
      ...((l = (d = r.parameters) == null ? void 0 : d.docs) == null ? void 0 : l.source)
    }
  }
}
const m = ['Sandbox', 'NotFilled'],
  f = Object.freeze(
    Object.defineProperty(
      { __proto__: null, NotFilled: r, Sandbox: e, __namedExportsOrder: m, default: i },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { f as L, r as N, e as S }
//# sourceMappingURL=Component.stories-74d22056.js.map
