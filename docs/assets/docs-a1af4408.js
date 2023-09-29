import { j as o, a, F as p } from './jsx-runtime-276775ef.js'
import { d as m, M as d, f as u } from './index-01c745a6.js'
import { C as b } from './css-vars.module-db4806dd.js'
import { s as f, T as g } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { E as h, T as l, a as j, S as i } from './Component.stories-53a01286.js'
import { u as e } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './react-tooltip.min-2c7bf4b5.js'
import './index-3ffce462.js'
import './Component-c0d8cf01.js'
import './mergeRefs-3b77d02e.js'
import './Component-4d843ac5.js'
import './tslib.es6-6635c9de.js'
const C = '@savosya/savosya-myuikit-tooltip',
  x = '1.0.1',
  v = 'Tooltip',
  y = 'ISC',
  k = 'index.js',
  M = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  T = { access: 'public', directory: 'build' },
  _ = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  D = { '@savosya/savosya-myuikit-utils': '^1.0.1', clsx: '^1.2.1', 'react-tooltip': '^5.18.0', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  w = {
    name: C,
    version: x,
    description: v,
    license: y,
    main: k,
    module: M,
    peerDependencies: O,
    publishConfig: T,
    scripts: _,
    dependencies: D,
    gitHead: X
  }
function s(t) {
  const n = Object.assign({ pre: 'pre', code: 'code' }, e(), t.components)
  return o(n.pre, {
    children: o(n.code, {
      className: 'language-css',
      children: `:root {
  --light-bg: var(--bg-info);
  --light-color: var(--text-primary);
  --dark-bg: var(--text-primary);
  --dark-color: #fff;

  --light-content_w_title-color: var(--text-secondary);
  --dark-content_w_title-color: var(--text-gray);
}
`
    })
  })
}
function S(t = {}) {
  const { wrapper: n } = Object.assign({}, e(), t.components)
  return n ? o(n, Object.assign({}, t, { children: o(s, t) })) : s(t)
}
function r(t) {
  const n = Object.assign({ h3: 'h3' }, e(), t.components)
  return a(p, {
    children: [
      o(n.h3, { id: 'controlled', children: 'Controlled' }),
      `
`,
      o(m, { of: h, meta: l })
    ]
  })
}
function $(t = {}) {
  const { wrapper: n } = Object.assign({}, e(), t.components)
  return n ? o(n, Object.assign({}, t, { children: o(r, t) })) : r(t)
}
function c(t) {
  const n = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, e(), t.components)
  return a(p, {
    children: [
      o(d, { title: 'Components/Tooltip', component: j, id: 'Tooltip' }),
      `
`,
      o(b, {
        name: 'Tooltip',
        version: w.version,
        package: '@eubank/kit-tooltip',
        children: o(n.p, { children: 'Тултип' })
      }),
      `
`,
      o(n.pre, {
        children: o(n.code, {
          className: 'language-jsx',
          children: `import { Tooltip } from '@eubank/kit-root'
import { Tooltip } from '@eubank/kit-tooltip'
`
        })
      }),
      `
`,
      o(m, Object.assign({ of: i, meta: l }, f)),
      `
`,
      o(g, { docs: o($, {}), props: o(u, { of: i }), css: o(S, {}) })
    ]
  })
}
function tt(t = {}) {
  const { wrapper: n } = Object.assign({}, e(), t.components)
  return n ? o(n, Object.assign({}, t, { children: o(c, t) })) : c(t)
}
export { tt as default }
//# sourceMappingURL=docs-a1af4408.js.map
