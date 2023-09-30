import { a as u, j as e } from './jsx-runtime-37f7df21.js'
import { C as i } from './Component-cfd7507d.js'
const S = { title: 'Checkbox', component: i },
  r = { args: { label: 'Подтвердить согласие' }, argTypes: { classes: { control: { disable: !0 } } } },
  s = {
    render: () =>
      u('div', {
        children: [
          e('div', { children: e(i, { size: 's', label: 'Size S' }) }),
          e('br', {}),
          e('div', { children: e(i, { size: 'm', label: 'Size M', disabled: !0 }) }),
          e('br', {}),
          e('div', { children: e(i, { size: 'l', label: 'Size L' }) })
        ]
      })
  },
  a = { render: () => e('div', { children: e(i, { indeterminate: !0, label: 'Давай?' }) }) }
var n, o, t
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Подтвердить согласие'
  },
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((t = (o = r.parameters) == null ? void 0 : o.docs) == null ? void 0 : t.source)
    }
  }
}
var d, l, c
s.parameters = {
  ...s.parameters,
  docs: {
    ...((d = s.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div>
        <div>
          <Checkbox size="s" label={'Size S'} />
        </div>
        <br />
        <div>
          <Checkbox size="m" label={'Size M'} disabled />
        </div>
        <br />
        <div>
          <Checkbox size="l" label={'Size L'} />
        </div>
      </div>;
  }
}`,
      ...((c = (l = s.parameters) == null ? void 0 : l.docs) == null ? void 0 : c.source)
    }
  }
}
var b, m, p
a.parameters = {
  ...a.parameters,
  docs: {
    ...((b = a.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div>
        <Checkbox indeterminate label="Давай?" />
      </div>;
  }
}`,
      ...((p = (m = a.parameters) == null ? void 0 : m.docs) == null ? void 0 : p.source)
    }
  }
}
const v = ['Sandbox', 'Sizes', 'Intermediate'],
  h = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Intermediate: a, Sandbox: r, Sizes: s, __namedExportsOrder: v, default: S },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { h as C, a as I, s as S, r as a }
//# sourceMappingURL=Component.stories-99fedb85.js.map
