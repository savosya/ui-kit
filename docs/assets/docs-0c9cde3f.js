import { j as e, a as r, F as d } from './jsx-runtime-276775ef.js'
import { d as m, M as l, f as u } from './index-01c745a6.js'
import { C as b } from './css-vars.module-db4806dd.js'
import { s as f, T as g } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { S as h, R as p, a as j, b as s } from './Component.stories-81f41ba9.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './mergeRefs-3b77d02e.js'
const C = '@savosya/savosya-myuikit-radio',
  v = '1.0.1',
  y = 'Radio',
  k = 'ISC',
  M = 'index.js',
  x = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  R = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  X = {
    '@savosya/savosya-myuikit-hooks': '^1.0.1',
    '@savosya/savosya-myuikit-utils': '^1.0.1',
    clsx: '^1.2.1',
    tslib: '^2.6.2'
  },
  _ = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: C,
    version: v,
    description: y,
    license: k,
    main: M,
    module: x,
    peerDependencies: O,
    publishConfig: R,
    scripts: D,
    dependencies: X,
    gitHead: _
  }
function i(n) {
  const o = Object.assign({ h3: 'h3' }, t(), n.components)
  return r(d, {
    children: [
      e(o.h3, { id: 'примеры-состояний-радиобатона', children: 'Примеры состояний радиобатона' }),
      `
`,
      e(m, { of: h, meta: p })
    ]
  })
}
function $(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(i, n) })) : i(n)
}
function a(n) {
  const o = Object.assign({ pre: 'pre', code: 'code' }, t(), n.components)
  return e(o.pre, {
    children: e(o.code, {
      className: 'language-css',
      children: `:root {
  --radio-default: #b8bec6;
  --radio-label-default: #29313a;
  --radio-hover: #1c2229;
  --radio-focused: #191d23;
  --radio-active: #29313a;
  --radio-disabled: #e5e8ed;
}
`
    })
  })
}
function w(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(a, n) })) : a(n)
}
function c(n) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return r(d, {
    children: [
      e(l, { title: 'Components/Radio', component: j, id: 'Radio' }),
      `
`,
      e(b, {
        name: 'Radio',
        version: S.version,
        package: '@eubank/kit-radio',
        children: e(o.p, { children: 'Компонент Radio' })
      }),
      `
`,
      e(o.pre, {
        children: e(o.code, {
          className: 'language-jsx',
          children: `import { Radio } from '@eubank/kit-root'
import { Radio } from '@eubank/kit-modal'
`
        })
      }),
      `
`,
      e(m, Object.assign({ of: s, meta: p }, f)),
      `
`,
      e(g, { docs: e($, {}), props: e(u, { of: s }), css: e(w, {}) })
    ]
  })
}
function U(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(c, n) })) : c(n)
}
export { U as default }
//# sourceMappingURL=docs-0c9cde3f.js.map
