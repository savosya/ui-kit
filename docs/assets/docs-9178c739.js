import { j as e, a, F as c } from './jsx-runtime-276775ef.js'
import { d, M as p, f as l } from './index-01c745a6.js'
import { C as u } from './css-vars.module-db4806dd.js'
import { s as f, T as b } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { L as g } from './Component-7ba700f5.js'
import { N as h, L as m, S as s } from './Component.stories-d09927cf.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const j = '@savosya/savosya-myuikit-loader',
  C = '1.0.1',
  L = 'Loader',
  k = 'ISC',
  x = 'index.js',
  M = 'build/esm/index.js',
  v = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  O = { access: 'public', directory: 'build' },
  y = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  D = { clsx: '^1.2.1', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: j,
    version: C,
    description: L,
    license: k,
    main: x,
    module: M,
    peerDependencies: v,
    publishConfig: O,
    scripts: y,
    dependencies: D,
    gitHead: X
  }
function r(n) {
  const o = Object.assign({ h3: 'h3', p: 'p' }, t(), n.components)
  return a(c, {
    children: [
      e(o.h3, { id: 'отцентрированный-loader', children: 'Отцентрированный loader' }),
      `
`,
      e(o.p, {
        children: 'Стандартное состояния загрузчика - занимать центральную позицию блока в которой он был размещен'
      }),
      `
`,
      e(d, { of: h, meta: m })
    ]
  })
}
function _(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(r, n) })) : r(n)
}
function i(n) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return a(c, {
    children: [
      e(p, { title: 'Components/Loader', component: g, id: 'Loader' }),
      `
`,
      e(u, {
        name: 'Loader',
        version: S.version,
        package: '@eubank/kit-loader',
        children: e(o.p, { children: 'Индикатор загрузки' })
      }),
      `
`,
      e(o.pre, {
        children: e(o.code, {
          className: 'language-jsx',
          children: `import { Loader } from '@eubank/kit-root'
import { Loader } from '@eubank/kit-loader'
`
        })
      }),
      `
`,
      e(d, Object.assign({ of: s, meta: m }, f)),
      `
`,
      e(b, { docs: e(_, {}), props: e(l, { of: s }) })
    ]
  })
}
function Q(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(i, n) })) : i(n)
}
export { Q as default }
//# sourceMappingURL=docs-9178c739.js.map
