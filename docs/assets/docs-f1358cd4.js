import { j as e, a as c, F as a } from './jsx-runtime-37f7df21.js'
import { M as d, f as m, h as p } from './index-20fbbb8e.js'
import { C as l } from './css-vars.module-a69f3204.js'
import { s as u, T as f } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { D as b, S as s, a as v } from './Component.stories-75cddf17.js'
import { u as o } from './index-59d6410c.js'
import './iframe-1ac63061.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
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
//# sourceMappingURL=docs-f1358cd4.js.map
