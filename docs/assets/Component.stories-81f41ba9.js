import { j as a, a as h } from './jsx-runtime-276775ef.js'
import { r as f } from './index-1cdf6ce0.js'
import { c as u } from './clsx.m-1229b3e0.js'
import { u as D, m as E } from './mergeRefs-3b77d02e.js'
const v = { s: { width: '10', height: '10' }, m: { width: '11', height: '11' }, l: { width: '12', height: '12' } },
  _ = ({ size: l, className: m }) =>
    a('svg', {
      width: v[l].width,
      height: v[l].height,
      viewBox: '0 0 9 6',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: m,
      children: a('path', {
        d: 'M7.4375 0.8125L3.0625 5.1875L0.875 3',
        stroke: 'currentColor',
        strokeWidth: '1.53',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    })
try {
  ;(_.displayName = 'CheckIcon'),
    (_.__docgenInfo = {
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
const M = '_root_2pk3u_11',
  O = '_checked_2pk3u_30',
  F = '_indeterminate_2pk3u_30',
  H = '_disabled_2pk3u_33',
  P = '_box_2pk3u_45',
  W = '_s_2pk3u_52',
  A = '_m_2pk3u_57',
  G = '_l_2pk3u_62',
  J = '_focus_2pk3u_78',
  K = '_indeterminateBox_2pk3u_83',
  Q = '_content_2pk3u_108',
  e = {
    root: M,
    checked: O,
    indeterminate: F,
    disabled: H,
    box: P,
    s: W,
    m: A,
    l: G,
    focus: J,
    indeterminateBox: K,
    content: Q
  },
  t = f.forwardRef((l, m) => {
    const {
        className: q,
        label: T,
        size: d = 'm',
        checked: k,
        markType: r = 'default',
        name: V,
        onChange: b,
        classes: o,
        disabled: s,
        ...I
      } = l,
      g = typeof k == 'boolean',
      [j, z] = f.useState(!1),
      y = f.useRef(null),
      [B] = D(y, 'keyboard'),
      L = p => {
        s || (g || z(!0), b && b(p, { checked: p.target.checked, name: p.target.name }))
      },
      n = g ? k : j
    return h('label', {
      className: u(
        e.root,
        e[d],
        { [e.indeterminate]: n && r === 'default', [e.checked]: n && r === 'check', [e.disabled]: s },
        q,
        o == null ? void 0 : o.root
      ),
      ref: E([y, m]),
      children: [
        a('input', { type: 'radio', name: V, onChange: L, checked: n, disabled: s, ...I }),
        h('span', {
          className: u(e.box, e[d], {
            [e.indeterminate]: n && r === 'default',
            [e.checked]: n && r === 'check',
            [e.disabled]: s,
            [e.focus]: B
          }),
          children: [
            n && r === 'check' && a(_, { size: d }),
            n && r === 'default' && a('span', { className: u(e.indeterminateBox, e[d], { [e.disabled]: s }) })
          ]
        }),
        a('span', { className: u(e.content, o == null ? void 0 : o.content, { [e.disabled]: s }), children: T })
      ]
    })
  })
try {
  ;(t.displayName = 'Radio'),
    (t.__docgenInfo = {
      description: '',
      displayName: 'Radio',
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
        markType: {
          defaultValue: null,
          description: '',
          name: 'markType',
          required: !1,
          type: { name: 'enum', value: [{ value: '"default"' }, { value: '"check"' }] }
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
const U = { title: 'Radio', component: t },
  c = { args: { label: 'Radio' }, argTypes: { classes: { control: { disable: !0 } }, label: { control: 'text' } } },
  i = {
    render: () =>
      h('div', {
        style: { display: 'flex', flexDirection: 'column', gap: '12px' },
        children: [
          a(t, { label: 'Inactive', value: 'watermelon' }),
          a(t, { label: 'Disabled', value: 'watermelon', disabled: !0 }),
          a(t, { name: 'fruit', label: 'Арбуз', value: 'watermelon' }),
          a(t, { name: 'fruit', label: 'Арбуз', value: 'watermelon', checked: !0 }),
          a(t, { name: 'fruit', label: 'Арбуз', value: 'watermelon', markType: 'check', checked: !0 })
        ]
      })
  }
var x, w, R
c.parameters = {
  ...c.parameters,
  docs: {
    ...((x = c.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Radio'
  },
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    },
    // hint: {control: 'text' },
    label: {
      control: 'text'
    }
  }
}`,
      ...((R = (w = c.parameters) == null ? void 0 : w.docs) == null ? void 0 : R.source)
    }
  }
}
var C, N, S
i.parameters = {
  ...i.parameters,
  docs: {
    ...((C = i.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Radio label="Inactive" value="watermelon" />
        <Radio label="Disabled" value="watermelon" disabled />
        <Radio name="fruit" label="Арбуз" value="watermelon" />
        <Radio name="fruit" label="Арбуз" value="watermelon" checked />
        <Radio name="fruit" label="Арбуз" value="watermelon" markType="check" checked />
      </div>;
  }
}`,
      ...((S = (N = i.parameters) == null ? void 0 : N.docs) == null ? void 0 : S.source)
    }
  }
}
const X = ['Sandbox', 'States'],
  ae = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Sandbox: c, States: i, __namedExportsOrder: X, default: U },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { ae as R, i as S, t as a, c as b }
//# sourceMappingURL=Component.stories-81f41ba9.js.map
