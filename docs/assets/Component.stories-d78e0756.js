import { j as e, a as h } from './jsx-runtime-37f7df21.js'
import { r as u } from './index-f1f2c4b1.js'
import { R as o } from './Component-c0eb7f36.js'
const w = { title: 'RadioGroup', component: o },
  a = {
    render: r => {
      const [t, n] = u.useState('watermelon')
      return e(o, {
        name: 'fruit',
        onChange: i => {
          n(i)
        },
        value: t,
        options: [
          { label: 'Яблоко', value: 'apple' },
          { label: 'Арбуз', value: 'watermelon' },
          { label: 'Груша', value: 'pear' }
        ],
        ...r
      })
    },
    argTypes: { options: { control: { disable: !0 } }, radioProps: { control: { disable: !0 } } }
  },
  l = {
    render: () => {
      const [r, t] = u.useState('watermelon'),
        [n, p] = u.useState('apple')
      return h('div', {
        children: [
          e('div', {
            children: e(o, {
              direction: 'vertical',
              name: 'fruit',
              onChange: s => {
                t(s)
              },
              value: r,
              options: [
                { label: 'Яблоко', value: 'apple' },
                { label: 'Арбуз', value: 'watermelon' },
                { label: 'Груша', value: 'pear' }
              ]
            })
          }),
          e('br', {}),
          e('div', {
            children: e(o, {
              name: 'fruit_2',
              onChange: s => {
                p(s)
              },
              value: n,
              radioProps: { markType: 'check' },
              options: [
                { label: 'Яблоко', value: 'apple' },
                { label: 'Арбуз', value: 'watermelon' },
                { label: 'Груша', value: 'pear' }
              ]
            })
          })
        ]
      })
    }
  }
var c, d, v
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  render: args => {
    const [value, setValue] = React.useState('watermelon');
    const onChange = (newValue: string) => {
      setValue(newValue);
    };
    return <RadioGroup name="fruit" onChange={onChange} value={value} options={[{
      label: 'Яблоко',
      value: 'apple'
    }, {
      label: 'Арбуз',
      value: 'watermelon'
    }, {
      label: 'Груша',
      value: 'pear'
    }]} {...args} />;
  },
  argTypes: {
    options: {
      control: {
        disable: true
      }
    },
    radioProps: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((v = (d = a.parameters) == null ? void 0 : d.docs) == null ? void 0 : v.source)
    }
  }
}
var m, b, g
l.parameters = {
  ...l.parameters,
  docs: {
    ...((m = l.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => {
    const [value, setValue] = React.useState('watermelon');
    const [value2, setValue2] = React.useState('apple');
    const onChange = (newValue: string) => {
      setValue(newValue);
    };
    const onChange_2 = (newValue: string) => {
      setValue2(newValue);
    };
    return <div>
        <div>
          <RadioGroup direction={'vertical'} name="fruit" onChange={onChange} value={value} options={[{
          label: 'Яблоко',
          value: 'apple'
        }, {
          label: 'Арбуз',
          value: 'watermelon'
        }, {
          label: 'Груша',
          value: 'pear'
        }]} />
        </div>
        <br />
        <div>
          <RadioGroup name="fruit_2" onChange={onChange_2} value={value2} radioProps={{
          markType: 'check'
        }} options={[{
          label: 'Яблоко',
          value: 'apple'
        }, {
          label: 'Арбуз',
          value: 'watermelon'
        }, {
          label: 'Груша',
          value: 'pear'
        }]} />
        </div>
      </div>;
  }
}`,
      ...((g = (b = l.parameters) == null ? void 0 : b.docs) == null ? void 0 : g.source)
    }
  }
}
const C = ['Sandbox', 'Examples'],
  R = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Examples: l, Sandbox: a, __namedExportsOrder: C, default: w },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { l as E, R, a as S }
//# sourceMappingURL=Component.stories-d78e0756.js.map
