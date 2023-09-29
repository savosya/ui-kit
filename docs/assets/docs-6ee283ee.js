import { j as n, a as p, F as m } from './jsx-runtime-276775ef.js'
import { d as r, M as l, f } from './index-01c745a6.js'
import { C as u } from './css-vars.module-db4806dd.js'
import { s as b, T as g } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { E as h, D as s, P as w, C as D, a as j, S as i } from './Component.stories-ecc0f798.js'
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
import './index-a336c5aa.js'
import './useId-c7f0a29e.js'
import './Component-c0d8cf01.js'
import './mergeRefs-3b77d02e.js'
import './Component-4d843ac5.js'
import './tslib.es6-6635c9de.js'
const C = '@savosya/savosya-myuikit-dropdown',
  x = '1.0.1',
  M = 'Dropdown',
  O = 'ISC',
  k = 'index.js',
  v = 'build/esm/index.js',
  _ = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  y = { access: 'public', directory: 'build' },
  X = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  S = { clsx: '^1.2.1', 'rc-dropdown': '^4.1.0', tslib: '^2.6.2' },
  $ = '31d48558bb3b557afd22f848178c9f85fed90b38',
  H = {
    name: C,
    version: x,
    description: M,
    license: O,
    main: k,
    module: v,
    peerDependencies: _,
    publishConfig: y,
    scripts: X,
    dependencies: S,
    gitHead: $
  }
function c(o) {
  const e = Object.assign({ h3: 'h3' }, t(), o.components)
  return p(m, {
    children: [
      n(e.h3, { id: 'настройки-dropdown-a', children: 'Настройки Dropdown-a' }),
      `
`,
      n(r, { of: h, meta: s }),
      `
`,
      n(e.h3, { id: 'расположение', children: 'Расположение' }),
      `
`,
      n(r, { of: w, meta: s }),
      `
`,
      n(e.h3, { id: 'контекстное-меню', children: 'Контекстное меню' }),
      `
`,
      n(r, { of: D, meta: s })
    ]
  })
}
function L(o = {}) {
  const { wrapper: e } = Object.assign({}, t(), o.components)
  return e ? n(e, Object.assign({}, o, { children: n(c, o) })) : c(o)
}
function a(o) {
  const e = Object.assign({ pre: 'pre', code: 'code' }, t(), o.components)
  return n(e.pre, {
    children: n(e.code, {
      className: 'language-css',
      children: `:root {
  --dropdown-item-bg_default: #fff;
  --dropdown-item-color_default: var(--text-primary);
  --dropdown-item-bg_hover: #fafbfc;
  --dropdown-item-border_default: #eff1f4;
}
`
    })
  })
}
function E(o = {}) {
  const { wrapper: e } = Object.assign({}, t(), o.components)
  return e ? n(e, Object.assign({}, o, { children: n(a, o) })) : a(o)
}
function d(o) {
  const e = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), o.components)
  return p(m, {
    children: [
      n(l, { title: 'Components/Dropdown', component: j, id: 'Dropdown' }),
      `
`,
      n(u, {
        name: 'Dropdown',
        version: H.version,
        package: '@eubank/kit-dropdown',
        children: n(e.p, { children: 'Выпадающее меню' })
      }),
      `
`,
      n(e.pre, {
        children: n(e.code, {
          className: 'language-jsx',
          children: `import { Dropdown } from '@eubank/kit-root'
import { Dropdown } from '@eubank/kit-dropdown'
`
        })
      }),
      `
`,
      n(r, Object.assign({ of: i, meta: s }, b)),
      `
`,
      n(g, { docs: n(L, {}), props: n(f, { of: i }), css: n(E, {}) })
    ]
  })
}
function rn(o = {}) {
  const { wrapper: e } = Object.assign({}, t(), o.components)
  return e ? n(e, Object.assign({}, o, { children: n(d, o) })) : d(o)
}
export { rn as default }
//# sourceMappingURL=docs-6ee283ee.js.map
