import { j as n, a as r, F as a } from './jsx-runtime-276775ef.js'
import { M as d, d as m, f as p } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as u, T as b } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { I as f, S as s, a as g } from './Component.stories-68e3f086.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const j = '@savosya/savosya-myuikit-indicator',
  C = '1.0.1',
  h = 'Indicator',
  x = 'ISC',
  k = 'index.js',
  I = 'build/esm/index.js',
  v = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  M = { access: 'public', directory: 'build' },
  y = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  O = { clsx: '^1.2.1', tslib: '^2.6.2' },
  D = '31d48558bb3b557afd22f848178c9f85fed90b38',
  X = {
    name: j,
    version: C,
    description: h,
    license: x,
    main: k,
    module: I,
    peerDependencies: v,
    publishConfig: M,
    scripts: y,
    dependencies: O,
    gitHead: D
  }
function i(e) {
  const o = Object.assign({ pre: 'pre', code: 'code' }, t(), e.components)
  return n(o.pre, {
    children: n(o.code, {
      className: 'language-css',
      children: `:root {
  --indicator_number-color-bg: var(--text-primary);
}
`
    })
  })
}
function _(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(i, e) })) : i(e)
}
function c(e) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), e.components)
  return r(a, {
    children: [
      n(d, { title: 'Components/Indicator', component: f, id: 'Indicator' }),
      `
`,
      n(l, {
        name: 'Indicator',
        version: X.version,
        package: '@eubank/kit-indicator',
        children: n(o.p, { children: 'Индикатор' })
      }),
      `
`,
      n(o.pre, {
        children: n(o.code, {
          className: 'language-jsx',
          children: `import { Indicator } from '@eubank/kit-root'
import { Indicator } from '@eubank/kit-indicator'
`
        })
      }),
      `
`,
      n(m, Object.assign({ of: s, meta: g }, u)),
      `
`,
      n(b, { props: n(p, { of: s }), css: n(_, {}) })
    ]
  })
}
function K(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(c, e) })) : c(e)
}
export { K as default }
//# sourceMappingURL=docs-7f55db78.js.map
