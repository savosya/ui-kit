import { j as e, a as i, F as r } from './jsx-runtime-276775ef.js'
import { M as d, d as p, e as m } from './index-01c745a6.js'
import { C as g } from './css-vars.module-db4806dd.js'
import { s as l, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { T as u, S as s, a as b } from './Component.stories-c534f4c8.js'
import { u as o } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const j = '@savosya/savosya-myuikit-tag',
  _ = '1.0.1',
  v = 'Tag',
  h = 'ISC',
  C = 'index.js',
  x = 'build/esm/index.js',
  T = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  k = { access: 'public', directory: 'build' },
  y = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js', test: 'node __tests__/package-template.test.js' },
  M = { clsx: '^1.2.1', tslib: '^2.6.2' },
  O = '31d48558bb3b557afd22f848178c9f85fed90b38',
  D = {
    name: j,
    version: _,
    description: v,
    license: h,
    main: C,
    module: x,
    peerDependencies: T,
    publishConfig: k,
    scripts: y,
    dependencies: M,
    gitHead: O
  }
function a(n) {
  const t = Object.assign({ pre: 'pre', code: 'code' }, o(), n.components)
  return e(t.pre, {
    children: e(t.code, {
      className: 'language-css',
      children: `:root {
  --tag-bg_default: #fff;
  --tag-color_default: var(--text-primary);

  --tag-bg_hover: #eff1f4;
  --tag-color_hover: #1c2229;

  --tag-bg_active: #191d23;
  --tag-color_active: #fff;

  --tag-bg_disabled: #fff;
  --tag-color_disabled: var(--text-gray);
}
`
    })
  })
}
function X(n = {}) {
  const { wrapper: t } = Object.assign({}, o(), n.components)
  return t ? e(t, Object.assign({}, n, { children: e(a, n) })) : a(n)
}
function c(n) {
  const t = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), n.components)
  return i(r, {
    children: [
      e(d, { title: 'Components/Tag', component: u, id: 'Tag' }),
      `
`,
      e(g, { name: 'Tag', version: D.version, package: '@eubank/kit-tag', children: e(t.p, { children: 'Тэги' }) }),
      `
`,
      e(t.pre, {
        children: e(t.code, {
          className: 'language-jsx',
          children: `import { Tag } from '@eubank/kit-root'
import { Tag } from '@eubank/kit-tag'
`
        })
      }),
      `
`,
      e(p, Object.assign({ of: s, meta: b }, l)),
      `
`,
      e(f, { props: e(m, { of: s }), css: e(X, {}) })
    ]
  })
}
function K(n = {}) {
  const { wrapper: t } = Object.assign({}, o(), n.components)
  return t ? e(t, Object.assign({}, n, { children: e(c, n) })) : c(n)
}
export { K as default }
//# sourceMappingURL=docs-607a6efa.js.map
