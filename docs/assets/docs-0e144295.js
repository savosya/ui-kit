import { j as n, a as c, F as a } from './jsx-runtime-276775ef.js'
import { d as m, M as d, f as u } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as C, T as b } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { C as f, a as p, b as g, S as s } from './Component.stories-f9b8c9a5.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './Component-302ecada.js'
import './mergeRefs-3b77d02e.js'
const h = '@savosya/savosya-myuikit-counter',
  j = '1.0.1',
  x = 'Counter',
  k = 'ISC',
  M = 'index.js',
  v = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  y = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  S = { clsx: '^1.2.1', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  _ = {
    name: h,
    version: j,
    description: x,
    license: k,
    main: M,
    module: v,
    peerDependencies: O,
    publishConfig: y,
    scripts: D,
    dependencies: S,
    gitHead: X
  }
function r(e) {
  const o = Object.assign({ h3: 'h3', p: 'p' }, t(), e.components)
  return c(a, {
    children: [
      n(o.h3, { id: 'controlled-counter', children: 'Controlled Counter' }),
      `
`,
      n(o.p, {
        children: 'Если каунтер контролируется, то обработчик onChange будет игнорировать min и max значения.'
      }),
      `
`,
      n(o.p, { children: 'Обработчики onAdd и onSub будут возвращать максимальные и минимальные значения.' }),
      `
`,
      n(m, { of: f, meta: p })
    ]
  })
}
function H(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(r, e) })) : r(e)
}
function i(e) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), e.components)
  return c(a, {
    children: [
      n(d, { title: 'Components/Counter', component: g, id: 'Counter' }),
      `
`,
      n(l, {
        name: 'Counter',
        version: _.version,
        package: '@eubank/kit-counter',
        children: n(o.p, { children: 'Компонент счетчика' })
      }),
      `
`,
      n(o.pre, {
        children: n(o.code, {
          className: 'language-jsx',
          children: `import { Counter } from '@eubank/kit-root'
import { Counter } from '@eubank/kit-counter'
`
        })
      }),
      `
`,
      n(m, Object.assign({ of: s, meta: p }, C)),
      `
`,
      n(b, { docs: n(H, {}), props: n(u, { of: s }) })
    ]
  })
}
function R(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(i, e) })) : i(e)
}
export { R as default }
//# sourceMappingURL=docs-0e144295.js.map
