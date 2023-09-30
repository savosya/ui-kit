import { j as u, a as h } from './jsx-runtime-37f7df21.js'
import { r as f } from './index-f1f2c4b1.js'
import { C as k } from './Component-cfd7507d.js'
import { c as b } from './clsx.m-1229b3e0.js'
const F = '_minus_1uuyx_1',
  z = '_disabled_1uuyx_15',
  q = { minus: F, disabled: z },
  w = ({ onClick: e, className: n, disabled: s }) =>
    u('svg', {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: b(q.minus, n, { [q.disabled]: s }),
      onClick: e,
      children: u('rect', { x: '9', y: '14.832', width: '14', height: '2.33333', rx: '1.16667', fill: 'currentColor' })
    })
try {
  ;(w.displayName = 'MinusIcon'),
    (w.__docgenInfo = {
      description: '',
      displayName: 'MinusIcon',
      props: {
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !1, type: { name: '(() => void)' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } }
      }
    })
} catch {}
const G = '_plus_1t50f_1',
  H = '_disabled_1t50f_15',
  I = { plus: G, disabled: H },
  x = ({ onClick: e, className: n, disabled: s }) =>
    h('svg', {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: b(I.plus, n, { [I.disabled]: s }),
      onClick: e,
      children: [
        u('rect', { x: '9.5', y: '14.8333', width: '14', height: '2.33333', rx: '1.16667', fill: 'currentColor' }),
        u('rect', {
          x: '17.6667',
          y: '9',
          width: '14',
          height: '2.33333',
          rx: '1.16667',
          transform: 'rotate(90 17.6667 9)',
          fill: 'currentColor'
        })
      ]
    })
try {
  ;(x.displayName = 'PlusIcon'),
    (x.__docgenInfo = {
      description: '',
      displayName: 'PlusIcon',
      props: {
        onClick: { defaultValue: null, description: '', name: 'onClick', required: !1, type: { name: '(() => void)' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } }
      }
    })
} catch {}
const J = '_root_17d9s_6',
  K = '_inputWrapper_17d9s_17',
  L = '_disabled_17d9s_21',
  Q = '_input_17d9s_17',
  U = '_readOnly_17d9s_44',
  d = { root: J, inputWrapper: K, disabled: L, input: Q, readOnly: U },
  V = f.forwardRef(
    (
      {
        value: e,
        onAdd: n,
        onSub: s,
        min: y = -1 / 0,
        max: _ = 1 / 0,
        onChange: i,
        width: S = 100,
        classes: a,
        readOnly: N,
        disabled: t,
        className: c
      },
      M
    ) => {
      const g = e !== void 0,
        [v, C] = f.useState(e ? String(e) : '0'),
        P = () => {
          if (g) {
            const r = e + 1 > _ ? e : e + 1
            n == null || n(r)
          } else
            C(r => {
              const l = Number(r) + 1,
                o = l > _ ? r : String(l)
              return n == null || n(Number(o)), o
            })
        },
        W = () => {
          if (g) {
            const r = e - 1 < y ? e : e - 1
            n == null || n(r)
          } else
            C(r => {
              const l = Number(r) - 1,
                o = l < y ? r : String(l)
              return s == null || s(Number(o)), o
            })
        },
        T = r => {
          const l = r.target.value
          if (/^\d*\.?\d*$/.test(l)) {
            if (l === '00' && v === '0') return
            {
              const O = Number(l)
              g ? i == null || i(l === '' ? 0 : O) : C(l === '' ? '0' : String(O))
            }
          }
        }
      return h('div', {
        className: b(d.root, c, a == null ? void 0 : a.root),
        children: [
          u(w, { onClick: W, className: a == null ? void 0 : a.minus, disabled: t }),
          u('div', {
            className: b(d.inputWrapper, { [d.disabled]: t }),
            children: u('input', {
              type: 'number',
              className: b(d.input, a == null ? void 0 : a.input, { [d.readOnly]: N, [d.disabled]: t }),
              value: String(Number(g ? e : v)),
              onChange: T,
              ref: M,
              style: { width: S }
            })
          }),
          u(x, { onClick: P, className: a == null ? void 0 : a.plus, disabled: t })
        ]
      })
    }
  )
try {
  ;(V.displayName = 'Counter'),
    (V.__docgenInfo = {
      description: '',
      displayName: 'Counter',
      props: {
        value: { defaultValue: null, description: '', name: 'value', required: !1, type: { name: 'number' } },
        onAdd: {
          defaultValue: null,
          description: '',
          name: 'onAdd',
          required: !1,
          type: { name: '((newValue: number) => void)' }
        },
        onSub: {
          defaultValue: null,
          description: '',
          name: 'onSub',
          required: !1,
          type: { name: '((newValue: number) => void)' }
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: '((newValue: number) => void)' }
        },
        min: {
          defaultValue: { value: '-Infinity' },
          description: '',
          name: 'min',
          required: !1,
          type: { name: 'number' }
        },
        max: { defaultValue: null, description: '', name: 'max', required: !1, type: { name: 'number' } },
        width: {
          defaultValue: { value: '100' },
          description: '',
          name: 'width',
          required: !1,
          type: { name: 'number' }
        },
        readOnly: {
          defaultValue: null,
          description: 'Отключает таргетирование инпута, но кнопки +/- работают',
          name: 'readOnly',
          required: !1,
          type: { name: 'boolean' }
        },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ root?: string; input?: string; plus?: string | undefined; minus?: string | undefined; } | undefined'
          }
        }
      }
    })
} catch {}
const X = { title: 'Counter', component: V },
  m = { args: {}, argTypes: { classes: { control: { disable: !0 } } } },
  p = {
    render: () => {
      const [e, n] = f.useState(!1),
        [s, y] = f.useState(!1),
        [_, i] = f.useState(42)
      return h('div', {
        children: [
          h('div', {
            style: { display: 'flex', gap: 12, marginBottom: 12 },
            children: [
              u(k, { label: 'Disabled', checked: e, onChange: (t, { checked: c }) => n(c) }),
              u(k, { label: 'Read Only', checked: s, onChange: (t, { checked: c }) => y(c) })
            ]
          }),
          u(V, {
            value: _,
            onAdd: t => i(t),
            onSub: t => i(t),
            onChange: t => i(t),
            max: 45,
            min: 41,
            readOnly: s,
            disabled: e
          })
        ]
      })
    }
  }
var D, E, R
m.parameters = {
  ...m.parameters,
  docs: {
    ...((D = m.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  args: {},
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((R = (E = m.parameters) == null ? void 0 : E.docs) == null ? void 0 : R.source)
    }
  }
}
var j, B, $
p.parameters = {
  ...p.parameters,
  docs: {
    ...((j = p.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setReadOnly] = useState(false);
    const [value, setValue] = useState(42);
    const onSub = newValue => setValue(newValue);
    const onAdd = newValue => setValue(newValue);
    const onChange = newValue => setValue(newValue);
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        marginBottom: 12
      }}>
          <Checkbox label="Disabled" checked={disabled} onChange={(_, {
          checked
        }) => setDisabled(checked)} />
          <Checkbox label="Read Only" checked={readOnly} onChange={(_, {
          checked
        }) => setReadOnly(checked)} />
        </div>

        <Counter value={value} onAdd={onSub} onSub={onAdd} onChange={onChange} max={45} min={41} readOnly={readOnly} disabled={disabled} />
      </div>;
  }
}`,
      ...(($ = (B = p.parameters) == null ? void 0 : B.docs) == null ? void 0 : $.source)
    }
  }
}
const Y = ['Sandbox', 'Controlled'],
  ae = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Controlled: p, Sandbox: m, __namedExportsOrder: Y, default: X },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { p as C, m as S, ae as a, V as b }
//# sourceMappingURL=Component.stories-6a77851a.js.map
