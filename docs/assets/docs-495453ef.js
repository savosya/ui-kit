import { j as n, a as r, F as c } from './jsx-runtime-37f7df21.js'
import { f as m, M as d, h as l } from './index-089bb4e8.js'
import { C as u } from './css-vars.module-a69f3204.js'
import { s as b, T as f } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { E as g, M as p, a as M, S as s } from './Component.stories-2773aa3b.js'
import { u as t } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './CSSMotionList-d86c2cd4.js'
import './index-2d278ef6.js'
import './useId-e95616b2.js'
import './pickAttrs-be982112.js'
import './Component-723ebd17.js'
import './mergeRefs-dc8f3646.js'
import './Component-856ebfaa.js'
import './tslib.es6-6635c9de.js'
import './Component-cfd7507d.js'
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
function i(o) {
  const e = Object.assign({ h3: 'h3', p: 'p' }, t(), o.components)
  return r(c, {
    children: [
      n(e.h3, { id: 'примеры', children: 'Примеры' }),
      `
`,
      n(e.p, { children: 'Наличие футера или хедера зависит от того будут ли переданны соответсвующие пропсы.' }),
      `
`,
      n(m, { of: g, meta: p })
    ]
  })
}
function H(o = {}) {
  const { wrapper: e } = Object.assign({}, t(), o.components)
  return e ? n(e, Object.assign({}, o, { children: n(i, o) })) : i(o)
}
function a(o) {
  const e = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), o.components)
  return r(c, {
    children: [
      n(d, { title: 'Components/Modal', component: M, id: 'Modal' }),
      `
`,
      n(u, {
        name: 'Modal',
        version: _.version,
        package: '@eubank/kit-modal',
        children: n(e.p, { children: 'Модальное окно' })
      }),
      `
`,
      n(e.pre, {
        children: n(e.code, {
          className: 'language-jsx',
          children: `import { Modal } from '@eubank/kit-ui'
import { Modal } from '@eubank/kit-modal'
`
        })
      }),
      `
`,
      n(m, Object.assign({ of: s, meta: p }, b)),
      `
`,
      n(f, { docs: n(H, {}), props: n(l, { of: s }) })
    ]
  })
}
function on(o = {}) {
  const { wrapper: e } = Object.assign({}, t(), o.components)
  return e ? n(e, Object.assign({}, o, { children: n(a, o) })) : a(o)
}
export { on as default }
//# sourceMappingURL=docs-495453ef.js.map