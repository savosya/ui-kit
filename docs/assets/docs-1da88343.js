import { j as e, a as c, F as a } from './jsx-runtime-276775ef.js'
import { M as d, d as m, f as p } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as u, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { D as b, S as s, a as v } from './Component.stories-4172db57.js'
import { u as o } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const g = '@savosya/savosya-myuikit-divider',
  D = '1.0.1',
  j = 'Divider',
  C = 'ISC',
  h = 'index.js',
  k = 'build/esm/index.js',
  x = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  M = { access: 'public', directory: 'build' },
  O = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  y = { clsx: '^1.2.1', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: g,
    version: D,
    description: j,
    license: C,
    main: h,
    module: k,
    peerDependencies: x,
    publishConfig: M,
    scripts: O,
    dependencies: y,
    gitHead: X
  }
function t(n) {
  const i = Object.assign({ pre: 'pre', code: 'code' }, o(), n.components)
  return e(i.pre, {
    children: e(i.code, {
      className: 'language-css',
      children: `:root {
  --divider-color: #eff1f4;
}
`
    })
  })
}
function _(n = {}) {
  const { wrapper: i } = Object.assign({}, o(), n.components)
  return i ? e(i, Object.assign({}, n, { children: e(t, n) })) : t(n)
}
function r(n) {
  const i = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), n.components)
  return c(a, {
    children: [
      e(d, { title: 'Components/Divider', component: b, id: 'Divider' }),
      `
`,
      e(l, {
        name: 'Divider',
        version: S.version,
        package: '@eubank/kit-divider',
        children: e(i.p, { children: 'Разделитель' })
      }),
      `
`,
      e(i.pre, {
        children: e(i.code, {
          className: 'language-jsx',
          children: `import { Divider } from '@eubank/kit-root'
import { Divider } from '@eubank/kit-divider'
`
        })
      }),
      `
`,
      e(m, Object.assign({ of: s, meta: v }, u)),
      `
`,
      e(f, { props: e(p, { of: s }), css: e(_, {}) })
    ]
  })
}
function K(n = {}) {
  const { wrapper: i } = Object.assign({}, o(), n.components)
  return i ? e(i, Object.assign({}, n, { children: e(r, n) })) : r(n)
}
export { K as default }
//# sourceMappingURL=docs-1da88343.js.map
