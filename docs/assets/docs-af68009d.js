import { j as o, a as r, F as c } from './jsx-runtime-276775ef.js'
import { d as m, M as d, f as l } from './index-01c745a6.js'
import { C as u } from './css-vars.module-db4806dd.js'
import { s as b, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { E as g, M as p, a as M, S as s } from './Component.stories-7c30fdfe.js'
import { u as t } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './CSSMotionList-c4d6cc01.js'
import './index-3ffce462.js'
import './useId-c7f0a29e.js'
import './pickAttrs-9695b8fe.js'
import './Component-c0d8cf01.js'
import './mergeRefs-3b77d02e.js'
import './Component-4d843ac5.js'
import './tslib.es6-6635c9de.js'
import './Component-302ecada.js'
const h = '@savosya/savosya-myuikit-modal',
  j = '1.0.1',
  C = 'Modal',
  x = 'ISC',
  k = 'index.js',
  v = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  y = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  X = { clsx: '^1.2.1', 'rc-dialog': '^9.3.0', tslib: '^2.6.2' },
  S = '31d48558bb3b557afd22f848178c9f85fed90b38',
  _ = {
    name: h,
    version: j,
    description: C,
    license: x,
    main: k,
    module: v,
    peerDependencies: O,
    publishConfig: y,
    scripts: D,
    dependencies: X,
    gitHead: S
  }
function i(n) {
  const e = Object.assign({ h3: 'h3', p: 'p' }, t(), n.components)
  return r(c, {
    children: [
      o(e.h3, { id: 'примеры', children: 'Примеры' }),
      `
`,
      o(e.p, { children: 'Наличие футера или хедера зависит от того будут ли переданны соответсвующие пропсы.' }),
      `
`,
      o(m, { of: g, meta: p })
    ]
  })
}
function H(n = {}) {
  const { wrapper: e } = Object.assign({}, t(), n.components)
  return e ? o(e, Object.assign({}, n, { children: o(i, n) })) : i(n)
}
function a(n) {
  const e = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return r(c, {
    children: [
      o(d, { title: 'Components/Modal', component: M, id: 'Modal' }),
      `
`,
      o(u, {
        name: 'Modal',
        version: _.version,
        package: '@eubank/kit-modal',
        children: o(e.p, { children: 'Модальное окно' })
      }),
      `
`,
      o(e.pre, {
        children: o(e.code, {
          className: 'language-jsx',
          children: `import { Modal } from '@eubank/kit-root'
import { Modal } from '@eubank/kit-modal'
`
        })
      }),
      `
`,
      o(m, Object.assign({ of: s, meta: p }, b)),
      `
`,
      o(f, { docs: o(H, {}), props: o(l, { of: s }) })
    ]
  })
}
function no(n = {}) {
  const { wrapper: e } = Object.assign({}, t(), n.components)
  return e ? o(e, Object.assign({}, n, { children: o(a, n) })) : a(n)
}
export { no as default }
//# sourceMappingURL=docs-af68009d.js.map
