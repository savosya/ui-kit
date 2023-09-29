import { j as n, a as i, F as d } from './jsx-runtime-276775ef.js'
import { d as m, M as b, f as g } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as u, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { E as h, B as p, a as j, S as s } from './Component.stories-eb8c7789.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const C = '@savosya/savosya-myuikit-badge',
  y = '1.0.1',
  x = 'Badge',
  M = 'ISC',
  k = 'index.js',
  v = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  B = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  X = { '@savosya/savosya-myuikit-indicator': '^1.0.1', clsx: '^1.2.1', tslib: '^2.6.2' },
  _ = '31d48558bb3b557afd22f848178c9f85fed90b38',
  w = {
    name: C,
    version: y,
    description: x,
    license: M,
    main: k,
    module: v,
    peerDependencies: O,
    publishConfig: B,
    scripts: D,
    dependencies: X,
    gitHead: _
  }
function a(e) {
  const o = Object.assign({ h3: 'h3' }, t(), e.components)
  return i(d, {
    children: [
      n(o.h3, { id: 'виды-badge', children: 'Виды badge' }),
      `
`,
      n(m, { of: h, meta: p })
    ]
  })
}
function S(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(a, e) })) : a(e)
}
function c(e) {
  const o = Object.assign({ pre: 'pre', code: 'code' }, t(), e.components)
  return n(o.pre, {
    children: n(o.code, {
      className: 'language-css',
      children: `:root {
  --badge-border-radius: 24px;
  --badge-color-typography: var(--text-primary);

  --badge-color-default: #f2f2f2;
  --badge-color-primary: #cae6fb;
  --badge-color-success: #d4eacd;
  --badge-color-error: #ffabb3;
  --badge-color-warn: #ffeed0;
}
`
    })
  })
}
function $(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(c, e) })) : c(e)
}
function r(e) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), e.components)
  return i(d, {
    children: [
      n(b, { title: 'Components/Badge', component: j, id: 'Badge' }),
      `
`,
      n(l, {
        name: 'Badge',
        version: w.version,
        package: '@eubank/kit-badge',
        children: n(o.p, { children: 'Компонент бейджа' })
      }),
      `
`,
      n(o.pre, {
        children: n(o.code, {
          className: 'language-jsx',
          children: `import { Badge } from '@eubank/kit-root'
import { Badge } from '@eubank/kit-badge'
`
        })
      }),
      `
`,
      n(m, Object.assign({ of: s, meta: p }, u)),
      `
`,
      n(f, { docs: n(S, {}), props: n(g, { of: s }), css: n($, {}) })
    ]
  })
}
function R(e = {}) {
  const { wrapper: o } = Object.assign({}, t(), e.components)
  return o ? n(o, Object.assign({}, e, { children: n(r, e) })) : r(e)
}
export { R as default }
//# sourceMappingURL=docs-2777fdf9.js.map
