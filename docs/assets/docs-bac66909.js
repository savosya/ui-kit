import { j as t, a as i, F as d } from './jsx-runtime-276775ef.js'
import { d as m, M as p, f as u } from './index-01c745a6.js'
import { C as x } from './css-vars.module-db4806dd.js'
import { s as b, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { C as g, T as l, a as h, S as a } from './Component.stories-fd0ddbc4.js'
import { u as o } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './mergeRefs-3b77d02e.js'
import './Component-302ecada.js'
const y = '@savosya/savosya-myuikit-textarea',
  v = '1.0.1',
  C = 'TextArea',
  j = 'ISC',
  k = 'index.js',
  M = 'build/esm/index.js',
  O = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  T = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  _ = {
    '@savosya/savosya-myuikit-hooks': '^1.0.1',
    '@savosya/savosya-myuikit-utils': '^1.0.1',
    clsx: '^1.2.1',
    tslib: '^2.6.2'
  },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: y,
    version: v,
    description: C,
    license: j,
    main: k,
    module: M,
    peerDependencies: O,
    publishConfig: T,
    scripts: D,
    dependencies: _,
    gitHead: X
  }
function r(e) {
  const n = Object.assign({ pre: 'pre', code: 'code' }, o(), e.components)
  return t(n.pre, {
    children: t(n.code, {
      className: 'language-css',
      children: `:root {
  --textarea-bg: #fff;
  --textarea-active-blue: #4683c8;

  --textarea-bg_disabled: #e5e8ed;
  --textarea-color_disabled: var(--text-secondary);

  --textarea-color: var(--text-primary);
  --textarea-label-color: var(--text-tertiary);

  --textarea-placeholder-color: var(--text-gray);
  --textarea-hint-color: var(--text-secondary);
  --textarea-error-color: var(--text-error-primary);
}
`
    })
  })
}
function $(e = {}) {
  const { wrapper: n } = Object.assign({}, o(), e.components)
  return n ? t(n, Object.assign({}, e, { children: t(r, e) })) : r(e)
}
function s(e) {
  const n = Object.assign({ h3: 'h3' }, o(), e.components)
  return i(d, {
    children: [
      t(n.h3, { id: 'controlled', children: 'Controlled' }),
      `
`,
      t(m, { of: g, meta: l })
    ]
  })
}
function w(e = {}) {
  const { wrapper: n } = Object.assign({}, o(), e.components)
  return n ? t(n, Object.assign({}, e, { children: t(s, e) })) : s(e)
}
function c(e) {
  const n = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), e.components)
  return i(d, {
    children: [
      t(p, { title: 'Components/Textarea', component: h, id: 'Textarea' }),
      `
`,
      t(x, {
        name: 'Textarea',
        version: S.version,
        package: '@eubank/kit-textarea',
        children: t(n.p, { children: 'Компонент текстового поля ввода' })
      }),
      `
`,
      t(n.pre, {
        children: t(n.code, {
          className: 'language-jsx',
          children: `import { Textarea } from '@eubank/kit-root'
import { Textarea } from '@eubank/kit-textarea'
`
        })
      }),
      `
`,
      t(m, Object.assign({ of: a, meta: l }, b)),
      `
`,
      t(f, { docs: t(w, {}), props: t(u, { of: a }), css: t($, {}) })
    ]
  })
}
function V(e = {}) {
  const { wrapper: n } = Object.assign({}, o(), e.components)
  return n ? t(n, Object.assign({}, e, { children: t(c, e) })) : c(e)
}
export { V as default }
//# sourceMappingURL=docs-bac66909.js.map
