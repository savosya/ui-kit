import { j as e, a as i, F as d } from './jsx-runtime-276775ef.js'
import { d as m, M as u, f as p } from './index-01c745a6.js'
import { C as l } from './css-vars.module-db4806dd.js'
import { s as f, T as g } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { E as h, B as b, a as j, S as c } from './Component.stories-c66fb395.js'
import { u as o } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const C = '@savosya/savosya-myuikit-breadcrumbs',
  v = '1.0.1',
  x = 'Breadcrumbs',
  M = 'ISC',
  _ = 'index.js',
  k = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  B = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  y = { clsx: '^1.2.1', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: C,
    version: v,
    description: x,
    license: M,
    main: _,
    module: k,
    peerDependencies: O,
    publishConfig: B,
    scripts: D,
    dependencies: y,
    gitHead: X
  }
function r(n) {
  const s = Object.assign({ h3: 'h3', p: 'p' }, o(), n.components)
  return i(d, {
    children: [
      e(s.h3, { id: 'breadcrumbs-с-обработчиком', children: 'Breadcrumbs с обработчиком' }),
      `
`,
      e(s.p, { children: 'Навигация будет работать только если прокинуть обработчик событий onCrumbClick.' }),
      `
`,
      e(m, { of: h, meta: b })
    ]
  })
}
function $(n = {}) {
  const { wrapper: s } = Object.assign({}, o(), n.components)
  return s ? e(s, Object.assign({}, n, { children: e(r, n) })) : r(n)
}
function t(n) {
  const s = Object.assign({ pre: 'pre', code: 'code' }, o(), n.components)
  return e(s.pre, {
    children: e(s.code, {
      className: 'language-css',
      children: `:root {
  --breadcrumbs-color_default: #4683c8;
  --breadcrumbs-color_alternative: #67707c;
  --breadcrumbs-color_hover: #6b9cd3;
  --breadcrumbs-color_active: #90b5de;
  --breadcrumbs-color_visited: #3869a0;
  --breadcrumbs-color_disabled: #525a63;
}
`
    })
  })
}
function w(n = {}) {
  const { wrapper: s } = Object.assign({}, o(), n.components)
  return s ? e(s, Object.assign({}, n, { children: e(t, n) })) : t(n)
}
function a(n) {
  const s = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), n.components)
  return i(d, {
    children: [
      e(u, { title: 'Components/Breadcrumbs', component: j, id: 'Breadcrumbs' }),
      `
`,
      e(l, {
        name: 'Breadcrumbs',
        version: S.version,
        package: '@eubank/kit-breadcrumbs',
        children: e(s.p, { children: 'Компонент хлебных крошек для навигации' })
      }),
      `
`,
      e(s.pre, {
        children: e(s.code, {
          className: 'language-jsx',
          children: `import { Breadcrumbs } from '@eubank/kit-root'
import { Breadcrumbs } from '@eubank/kit-badge'
`
        })
      }),
      `
`,
      e(m, Object.assign({ of: c, meta: b }, f)),
      `
`,
      e(g, { docs: e($, {}), props: e(p, { of: c }), css: e(w, {}) })
    ]
  })
}
function R(n = {}) {
  const { wrapper: s } = Object.assign({}, o(), n.components)
  return s ? e(s, Object.assign({}, n, { children: e(a, n) })) : a(n)
}
export { R as default }
//# sourceMappingURL=docs-41c34e2e.js.map