import { a as s, j as a } from './jsx-runtime-37f7df21.js'
import { r as u } from './index-f1f2c4b1.js'
import { c as n } from './clsx.m-1229b3e0.js'
import { u as T, m as V } from './mergeRefs-dc8f3646.js'
import { C as k } from './Component-cfd7507d.js'
const x = ({ className: t }) =>
  s('svg', {
    width: '13',
    height: '13',
    viewBox: '0 0 13 13',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: t,
    children: [
      a('line', { x1: '11.3534', y1: '5.45414', x2: '5.69658', y2: '11.111', stroke: '#848D98' }),
      a('line', { x1: '10.3534', y1: '0.454139', x2: '0.453936', y2: '10.3536', stroke: '#848D98' })
    ]
  })
try {
  ;(x.displayName = 'GrabberIcon'),
    (x.__docgenInfo = {
      description: '',
      displayName: 'GrabberIcon',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } }
      }
    })
} catch {}
const q = '_wrapper_1lck5_14',
  D = '_root_1lck5_19',
  R = '_focus_1lck5_30',
  j = '_disabled_1lck5_34',
  E = '_error_1lck5_37',
  I = '_label_1lck5_41',
  B = '_area_1lck5_55',
  G = '_resizable_1lck5_82',
  O = '_grabber_1lck5_91',
  F = '_extra_1lck5_98',
  P = '_hint_1lck5_110',
  A = '_errorMsg_1lck5_114',
  r = {
    wrapper: q,
    root: D,
    focus: R,
    disabled: j,
    error: E,
    label: I,
    area: B,
    resizable: G,
    grabber: O,
    extra: F,
    hint: P,
    errorMsg: A
  },
  g = u.forwardRef((t, f) => {
    const { className: b, label: p, disabled: i, error: m, errorMsg: l, hint: o, classes: e, resizable: h, ..._ } = t,
      y = u.useRef(null),
      [z] = T(y, 'keyboard')
    return s('div', {
      className: n(r.wrapper, e == null ? void 0 : e.wrapper),
      children: [
        s('div', {
          className: n(r.root, { [r.focus]: z, [r.disabled]: i, [r.error]: m }, b, e == null ? void 0 : e.root),
          children: [
            a('textarea', {
              className: n(r.area, { [r.disabled]: i, [r.resizable]: h }, e == null ? void 0 : e.textarea),
              disabled: i,
              ref: V([f, y]),
              ..._,
              style: { ...(_ == null ? void 0 : _.style), resize: h }
            }),
            p && a('label', { className: n(r.label, { [r.error]: m }, e == null ? void 0 : e.label), children: p }),
            !!h && a(x, { className: r.grabber })
          ]
        }),
        (o || l) &&
          s('div', {
            className: n(r.extra, e == null ? void 0 : e.extra),
            children: [
              o && a('span', { className: n(r.hint, e == null ? void 0 : e.hint), children: o }),
              l && a('span', { className: n(r.errorMsg, e == null ? void 0 : e.errorMsg), children: l })
            ]
          })
      ]
    })
  })
try {
  ;(g.displayName = 'Textarea'),
    (g.__docgenInfo = {
      description: '',
      displayName: 'Textarea',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
        error: { defaultValue: null, description: '', name: 'error', required: !1, type: { name: 'boolean' } },
        errorMsg: { defaultValue: null, description: '', name: 'errorMsg', required: !1, type: { name: 'ReactNode' } },
        hint: { defaultValue: null, description: '', name: 'hint', required: !1, type: { name: 'ReactNode' } },
        resizable: {
          defaultValue: null,
          description: '',
          name: 'resizable',
          required: !1,
          type: { name: 'enum', value: [{ value: '"both"' }, { value: '"horizontal"' }, { value: '"vertical"' }] }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ wrapper?: string; root?: string; textarea?: string | undefined; label?: string | undefined; extra?: string | undefined; hint?: string | undefined; errorMsg?: string | undefined; } | undefined'
          }
        }
      }
    })
} catch {}
const H = { title: 'Textarea', component: g },
  c = {
    args: {
      label: 'Заголовок',
      placeholder: 'Начните вводить текст',
      hint: 'Подсказка',
      cols: 40,
      rows: 6,
      resizable: 'both'
    },
    argTypes: { hint: { control: 'text' }, errorMsg: { control: 'text' }, classes: { control: { disable: !0 } } }
  },
  d = {
    render: () => {
      const [t, f] = u.useState(!1),
        [b, p] = u.useState(!1),
        [i, m] = u.useState('')
      return s('div', {
        children: [
          s('div', {
            style: { display: 'flex', gap: 12, marginBottom: 12 },
            children: [
              a(k, { label: 'Ошибка', checked: t, onChange: (l, { checked: o }) => f(o) }),
              a(k, { label: 'Disabled', checked: b, onChange: (l, { checked: o }) => p(o) })
            ]
          }),
          a(g, {
            label: 'Заголовок',
            value: i,
            disabled: b,
            onChange: l => m(l.currentTarget.value),
            error: t,
            hint: 'Подсказка',
            errorMsg: t ? 'ОШИБКА' : void 0,
            cols: 40,
            rows: 4
          })
        ]
      })
    }
  }
var v, N, w
c.parameters = {
  ...c.parameters,
  docs: {
    ...((v = c.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Заголовок',
    placeholder: 'Начните вводить текст',
    hint: 'Подсказка',
    cols: 40,
    rows: 6,
    resizable: 'both'
  },
  argTypes: {
    hint: {
      control: 'text'
    },
    errorMsg: {
      control: 'text'
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((w = (N = c.parameters) == null ? void 0 : N.docs) == null ? void 0 : w.source)
    }
  }
}
var M, S, C
d.parameters = {
  ...d.parameters,
  docs: {
    ...((M = d.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => {
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState('');
    return <div>
        <div style={{
        display: 'flex',
        gap: 12,
        marginBottom: 12
      }}>
          <Checkbox label="Ошибка" checked={error} onChange={(_, {
          checked
        }) => setError(checked)} />
          <Checkbox label="Disabled" checked={disabled} onChange={(_, {
          checked
        }) => setDisabled(checked)} />
        </div>

        <Textarea label="Заголовок" value={value} disabled={disabled} onChange={e => setValue(e.currentTarget.value)} error={error} hint="Подсказка" errorMsg={error ? 'ОШИБКА' : undefined} cols={40} rows={4} />
      </div>;
  }
}`,
      ...((C = (S = d.parameters) == null ? void 0 : S.docs) == null ? void 0 : C.source)
    }
  }
}
const J = ['Sandbox', 'Controlled'],
  X = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Controlled: d, Sandbox: c, __namedExportsOrder: J, default: H },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { d as C, c as S, X as T, g as a }
//# sourceMappingURL=Component.stories-90a1efe4.js.map
