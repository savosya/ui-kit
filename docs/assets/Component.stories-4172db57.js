import { j as m } from './jsx-runtime-276775ef.js'
import { c as u } from './clsx.m-1229b3e0.js'
const f = '_root_8h2mf_5',
  _ = '_noGap_8h2mf_11',
  s = { root: f, noGap: _ },
  r = ({ className: a, noGap: c, height: o, margin: n, style: p, color: t }) =>
    m('div', {
      className: u(s.root, a, { [s.noGap]: c }),
      style: { ...p, height: o ? `${o}px` : void 0, margin: n || void 0, backgroundColor: t || void 0 }
    })
try {
  ;(r.displayName = 'Divider'),
    (r.__docgenInfo = {
      description: '',
      displayName: 'Divider',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        noGap: { defaultValue: null, description: '', name: 'noGap', required: !1, type: { name: 'boolean' } },
        height: { defaultValue: null, description: '', name: 'height', required: !1, type: { name: 'number' } },
        margin: {
          defaultValue: null,
          description: '',
          name: 'margin',
          required: !1,
          type: { name: 'Margin<string | number>' }
        },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
        color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'Color' } }
      }
    })
} catch {}
const g = { title: 'Divider', component: r },
  e = { args: { color: '#21272E' }, argTypes: { margin: { control: 'text' } } }
var l, i, d
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    color: '#21272E'
  },
  argTypes: {
    margin: {
      control: 'text'
    }
  }
}`,
      ...((d = (i = e.parameters) == null ? void 0 : i.docs) == null ? void 0 : d.source)
    }
  }
}
const y = ['Sandbox'],
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, Sandbox: e, __namedExportsOrder: y, default: g }, Symbol.toStringTag, {
      value: 'Module'
    })
  )
export { r as D, e as S, x as a }
//# sourceMappingURL=Component.stories-4172db57.js.map
