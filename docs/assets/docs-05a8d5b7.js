import { j as e, a as m, F as p } from './jsx-runtime-37f7df21.js'
import { f as c, M as b, h as l } from './index-20fbbb8e.js'
import { C as h } from './css-vars.module-a69f3204.js'
import { s as u, T as f } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { C as k } from './Component-cfd7507d.js'
import { S as x, C as s, I as C, a as i } from './Component.stories-99fedb85.js'
import { u as t } from './index-59d6410c.js'
import './iframe-1ac63061.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './mergeRefs-dc8f3646.js'
const g = '@savosya/savosya-myuikit-checkbox',
  j = '1.0.1',
  v = 'Checkbox',
  y = 'ISC',
  M = 'index.js',
  O = 'build/esm/index.js',
  D = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  X = { access: 'public', directory: 'build' },
  _ = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  S = {
    '@savosya/savosya-myuikit-hooks': '^1.0.1',
    '@savosya/savosya-myuikit-utils': '^1.0.1',
    clsx: '^1.2.1',
    tslib: '^2.6.2'
  },
  $ = '31d48558bb3b557afd22f848178c9f85fed90b38',
  w = {
    name: g,
    version: j,
    description: v,
    license: y,
    main: M,
    module: O,
    peerDependencies: D,
    publishConfig: X,
    scripts: _,
    dependencies: S,
    gitHead: $
  }
function a(n) {
  const o = Object.assign({ h3: 'h3', p: 'p' }, t(), n.components)
  return m(p, {
    children: [
      e(o.h3, { id: 'чекбокс-разных-размеров', children: 'Чекбокс разных размеров' }),
      `
`,
      e(o.p, { children: 'Разные размеры' }),
      `
`,
      e(c, { of: x, meta: s }),
      `
`,
      e(o.h3, {
        id: 'чекбокс-c-неопределенным-indeterminate-состоянием',
        children: 'Чекбокс c неопределенным (indeterminate) состоянием'
      }),
      `
`,
      e(c, { of: C, meta: s })
    ]
  })
}
function H(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(a, n) })) : a(n)
}
function r(n) {
  const o = Object.assign({ pre: 'pre', code: 'code' }, t(), n.components)
  return e(o.pre, {
    children: e(o.code, {
      className: 'language-css',
      children: `:root {
  --checkbox-default: #b8bec6;
  --checkbox-label-default: #29313a;
  --checkbox-hover: #1c2229;
  --checkbox-focused: #191d23;
  --checkbox-active: #29313a;
  --checkbox-disabled: #e5e8ed;
}
`
    })
  })
}
function I(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(r, n) })) : r(n)
}
function d(n) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return m(p, {
    children: [
      e(b, { title: 'Components/Checkbox', component: k, id: 'Checkbox' }),
      `
`,
      e(h, {
        name: 'Checkbox',
        version: w.version,
        package: '@eubank/kit-checkbox',
        children: e(o.p, { children: 'Компонент чекбокс' })
      }),
      `
`,
      e(o.pre, {
        children: e(o.code, {
          className: 'language-jsx',
          children: `import { Checkbox } from '@eubank/kit-root'
import { Checkbox } from '@eubank/kit-checkbox'
`
        })
      }),
      `
`,
      e(c, Object.assign({ of: i, meta: s }, u)),
      `
`,
      e(f, { docs: e(H, {}), props: e(l, { of: i }), css: e(I, {}) })
    ]
  })
}
function W(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(d, n) })) : d(n)
}
export { W as default }
//# sourceMappingURL=docs-05a8d5b7.js.map
