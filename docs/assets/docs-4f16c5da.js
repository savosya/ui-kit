import { j as o, a, F as c } from './jsx-runtime-37f7df21.js'
import { f as p, M as d, h as u } from './index-20fbbb8e.js'
import { C as l } from './css-vars.module-a69f3204.js'
import { s as f, T as b } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { R as g } from './Component-c0eb7f36.js'
import { E as h, R as m, S as s } from './Component.stories-d78e0756.js'
import { u as t } from './index-59d6410c.js'
import './iframe-1ac63061.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './tslib.es6-6635c9de.js'
import './mergeRefs-dc8f3646.js'
const j = '@savosya/savosya-myuikit-radio-group',
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
    name: j,
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
      o(p, { of: h, meta: m })
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
      o(d, { title: 'Components/RadioGroup', component: g, id: 'RadioGroup' }),
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
      o(p, Object.assign({ of: s, meta: m }, f)),
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
//# sourceMappingURL=docs-4f16c5da.js.map
