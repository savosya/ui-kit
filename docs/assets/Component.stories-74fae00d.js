import { j as l, a as h, F as w } from './jsx-runtime-37f7df21.js'
import { r as v } from './index-f1f2c4b1.js'
import { c as x } from './clsx.m-1229b3e0.js'
import { R as f } from './Component-c0eb7f36.js'
const k = '_root_g4442_2',
  H = '_h1_g4442_8',
  V = '_h2_g4442_13',
  q = '_h3_g4442_18',
  S = '_h4_g4442_23',
  N = '_h5_g4442_28',
  $ = '_h6_g4442_33',
  j = '_div_g4442_38',
  M = '_shrink_g4442_43',
  R = '_block_g4442_47',
  O = '_medium_g4442_50',
  P = '_bold_g4442_53',
  n = { root: k, h1: H, h2: V, h3: q, h4: S, h5: N, h6: $, div: j, shrink: M, block: R, medium: O, bold: P },
  u = v.forwardRef(
    (
      { block: e = !0, tag: a = 'h3', defaultMargins: r = !1, className: g, children: c, weight: i = 'regular', ...p },
      s
    ) =>
      l(a, {
        ref: s,
        className: x(
          n.root,
          n[a],
          { [n.shrink]: !r, [n.block]: e, [n.medium]: i === 'medium', [n.bold]: i === 'bold' },
          g
        ),
        ...p,
        children: c
      })
  )
try {
  ;(u.displayName = 'Title'),
    (u.__docgenInfo = {
      description: '',
      displayName: 'Title',
      props: {
        block: {
          defaultValue: { value: 'true' },
          description: '',
          name: 'block',
          required: !1,
          type: { name: 'boolean' }
        },
        tag: {
          defaultValue: null,
          description: '',
          name: 'tag',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"h1"' },
              { value: '"h2"' },
              { value: '"h3"' },
              { value: '"h4"' },
              { value: '"h5"' },
              { value: '"h6"' },
              { value: '"div"' }
            ]
          }
        },
        defaultMargins: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'defaultMargins',
          required: !1,
          type: { name: 'boolean' }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        weight: {
          defaultValue: { value: 'regular' },
          description: '',
          name: 'weight',
          required: !1,
          type: { name: 'enum', value: [{ value: '"regular"' }, { value: '"medium"' }, { value: '"bold"' }] }
        }
      }
    })
} catch {}
const W = '_root_1pdc1_2',
  B = '_l1_1pdc1_8',
  C = '_l2_1pdc1_13',
  E = '_l3_1pdc1_18',
  F = '_l4_1pdc1_23',
  G = '_l5_1pdc1_28',
  I = '_l6_1pdc1_33',
  z = '_l7_1pdc1_38',
  A = '_l8_1pdc1_43',
  D = '_l9_1pdc1_48',
  J = '_l10_1pdc1_53',
  K = '_l11_1pdc1_58',
  L = '_shrink_1pdc1_63',
  Q = '_block_1pdc1_67',
  U = '_medium_1pdc1_70',
  X = '_bold_1pdc1_73',
  o = {
    root: W,
    l1: B,
    l2: C,
    l3: E,
    l4: F,
    l5: G,
    l6: I,
    l7: z,
    l8: A,
    l9: D,
    l10: J,
    l11: K,
    shrink: L,
    block: Q,
    medium: U,
    bold: X
  },
  T = v.forwardRef(
    (
      {
        block: e = !1,
        tag: a = 'div',
        defaultMargins: r = !1,
        className: g,
        children: c,
        weight: i = 'regular',
        level: p = 4,
        ...s
      },
      b
    ) =>
      l(a, {
        ref: b,
        className: x(
          o.root,
          o[`l${p}`],
          { [o.shrink]: !r, [o.block]: e, [o.medium]: i === 'medium', [o.bold]: i === 'bold' },
          g
        ),
        ...s,
        children: c
      })
  )
try {
  ;(T.displayName = 'Text'),
    (T.__docgenInfo = {
      description: '',
      displayName: 'Text',
      props: {
        block: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'block',
          required: !1,
          type: { name: 'boolean' }
        },
        tag: {
          defaultValue: null,
          description: '',
          name: 'tag',
          required: !1,
          type: { name: 'enum', value: [{ value: '"div"' }, { value: '"span"' }, { value: '"p"' }] }
        },
        defaultMargins: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'defaultMargins',
          required: !1,
          type: { name: 'boolean' }
        },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        weight: {
          defaultValue: { value: 'regular' },
          description: '',
          name: 'weight',
          required: !1,
          type: { name: 'enum', value: [{ value: '"regular"' }, { value: '"medium"' }, { value: '"bold"' }] }
        },
        level: {
          defaultValue: { value: '4' },
          description: '',
          name: 'level',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '1' },
              { value: '2' },
              { value: '3' },
              { value: '4' },
              { value: '5' },
              { value: '6' },
              { value: '7' },
              { value: '8' },
              { value: '9' },
              { value: '10' },
              { value: '11' }
            ]
          }
        }
      }
    })
} catch {}
const t = { Title: u, Text: T },
  Y = { title: 'Typography', component: t },
  Z = { display: 'flex', gap: '64px', padding: 16 },
  d = {
    render: () => {
      const [e, a] = v.useState('regular')
      return h(w, {
        children: [
          l(f, {
            style: { marginBottom: 16 },
            value: e,
            onChange: r => a(r),
            options: [
              { label: 'regular', value: 'regular' },
              { label: 'medium', value: 'medium' },
              { label: 'bold', value: 'bold' }
            ]
          }),
          h('div', {
            style: Z,
            children: [
              h('div', {
                children: [
                  l(t.Title, { weight: e, tag: 'div', children: 'Heading div' }),
                  l(t.Title, { weight: e, tag: 'h6', children: 'Heading h6' }),
                  l(t.Title, { weight: e, tag: 'h5', children: 'Heading h5' }),
                  l(t.Title, { weight: e, tag: 'h4', children: 'Heading h4' }),
                  l(t.Title, { weight: e, tag: 'h3', children: 'Heading h3' }),
                  l(t.Title, { weight: e, tag: 'h2', children: 'Heading h2' }),
                  l(t.Title, { weight: e, tag: 'h1', children: 'Heading h1' })
                ]
              }),
              h('div', {
                children: [
                  l(t.Text, { weight: e, level: 1, block: !0, children: 'Text level 1' }),
                  l(t.Text, { weight: e, level: 2, block: !0, children: 'Text level 2' }),
                  l(t.Text, { weight: e, level: 3, block: !0, children: 'Text level 3' }),
                  l(t.Text, { weight: e, level: 4, block: !0, children: 'Text level 4' }),
                  l(t.Text, { weight: e, level: 5, block: !0, children: 'Text level 5' }),
                  l(t.Text, { weight: e, level: 6, block: !0, children: 'Text level 6' }),
                  l(t.Text, { weight: e, level: 7, block: !0, children: 'Text level 7' }),
                  l(t.Text, { weight: e, level: 8, block: !0, children: 'Text level 8' }),
                  l(t.Text, { weight: e, level: 9, block: !0, children: 'Text level 9' }),
                  l(t.Text, { weight: e, level: 10, block: !0, children: 'Text level 10' }),
                  l(t.Text, { weight: e, level: 11, block: !0, children: 'Text level 11' })
                ]
              })
            ]
          })
        ]
      })
    }
  }
var _, y, m
d.parameters = {
  ...d.parameters,
  docs: {
    ...((_ = d.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `{
  render: () => {
    const [weight, setWeight] = useState<TextProps['weight']>('regular');
    return <>
        <RadioGroup style={{
        marginBottom: 16
      }} value={weight} onChange={(newValue: TextProps['weight']) => setWeight(newValue)} options={[{
        label: 'regular',
        value: 'regular'
      }, {
        label: 'medium',
        value: 'medium'
      }, {
        label: 'bold',
        value: 'bold'
      }]} />

        <div style={canvasStyles}>
          <div>
            <Typography.Title weight={weight} tag={'div'}>
              Heading div
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h6'}>
              Heading h6
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h5'}>
              Heading h5
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h4'}>
              Heading h4
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h3'}>
              Heading h3
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h2'}>
              Heading h2
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h1'}>
              Heading h1
            </Typography.Title>
          </div>

          <div>
            <Typography.Text weight={weight} level={1} block>
              Text level 1
            </Typography.Text>
            <Typography.Text weight={weight} level={2} block>
              Text level 2
            </Typography.Text>
            <Typography.Text weight={weight} level={3} block>
              Text level 3
            </Typography.Text>
            <Typography.Text weight={weight} level={4} block>
              Text level 4
            </Typography.Text>
            <Typography.Text weight={weight} level={5} block>
              Text level 5
            </Typography.Text>
            <Typography.Text weight={weight} level={6} block>
              Text level 6
            </Typography.Text>
            <Typography.Text weight={weight} level={7} block>
              Text level 7
            </Typography.Text>
            <Typography.Text weight={weight} level={8} block>
              Text level 8
            </Typography.Text>
            <Typography.Text weight={weight} level={9} block>
              Text level 9
            </Typography.Text>
            <Typography.Text weight={weight} level={10} block>
              Text level 10
            </Typography.Text>
            <Typography.Text weight={weight} level={11} block>
              Text level 11
            </Typography.Text>
          </div>
        </div>
      </>;
  }
}`,
      ...((m = (y = d.parameters) == null ? void 0 : y.docs) == null ? void 0 : m.source)
    }
  }
}
const ee = ['Sandbox'],
  oe = Object.freeze(
    Object.defineProperty({ __proto__: null, Sandbox: d, __namedExportsOrder: ee, default: Y }, Symbol.toStringTag, {
      value: 'Module'
    })
  )
export { d as S, t as T, oe as a }
//# sourceMappingURL=Component.stories-74fae00d.js.map
