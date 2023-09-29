import { j as o, a, F as c } from './jsx-runtime-276775ef.js'
import { d as p, M as m, f as u } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as f, T as b } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { R as g } from './Component-1bfaf9fc.js'
import { E as j, R as d, S as s } from './Component.stories-7c120299.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './tslib.es6-6635c9de.js'
import './mergeRefs-3b77d02e.js'
const h = '@savosya/savosya-myuikit-radio-group',
  C = '1.0.1',
  k = 'RadioGroup',
  x = 'ISC',
  v = 'index.js',
  y = 'build/esm/index.js',
  R = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  M = { access: 'public', directory: 'build' },
  G = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  O = { '@savosya/savosya-myuikit-radio': '^1.0.1', clsx: '^1.2.1', tslib: '^2.6.2' },
  D = '31d48558bb3b557afd22f848178c9f85fed90b38',
  X = {
    name: h,
    version: C,
    description: k,
    license: x,
    main: v,
    module: y,
    peerDependencies: R,
    publishConfig: M,
    scripts: G,
    dependencies: O,
    gitHead: D
  }
function i(n) {
  const e = Object.assign({ h3: 'h3' }, t(), n.components)
  return a(c, {
    children: [
      o(e.h3, { id: 'примеры', children: 'Примеры' }),
      `
`,
      o(p, { of: j, meta: d })
    ]
  })
}
function S(n = {}) {
  const { wrapper: e } = Object.assign({}, t(), n.components)
  return e ? o(e, Object.assign({}, n, { children: o(i, n) })) : i(n)
}
function r(n) {
  const e = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return a(c, {
    children: [
      o(m, { title: 'Components/RadioGroup', component: g, id: 'RadioGroup' }),
      `
`,
      o(l, {
        name: 'RadioGroup',
        version: X.version,
        package: '@eubank/kit-radio-group',
        children: o(e.p, { children: 'Компонент объединяющий радиобатоны в группу' })
      }),
      `
`,
      o(e.pre, {
        children: o(e.code, {
          className: 'language-jsx',
          children: `import { RadioGroup } from '@eubank/kit-root'
import { RadioGroup } from '@eubank/kit-radio-group'
`
        })
      }),
      `
`,
      o(p, Object.assign({ of: s, meta: d }, f)),
      `
`,
      o(b, { docs: o(S, {}), props: o(u, { of: s }) })
    ]
  })
}
function U(n = {}) {
  const { wrapper: e } = Object.assign({}, t(), n.components)
  return e ? o(e, Object.assign({}, n, { children: o(r, n) })) : r(n)
}
export { U as default }
//# sourceMappingURL=docs-9697cc7f.js.map
