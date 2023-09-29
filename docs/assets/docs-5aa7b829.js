import { j as n, a as d, F as m } from './jsx-runtime-276775ef.js'
import { d as o, M as u, f as l } from './index-01c745a6.js'
import { C as b } from './css-vars.module-db4806dd.js'
import { s as f, T as h } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { T as g, I as s, E as y, a as v, b as j, H as x, A as C, c as k, S as r } from './Component.stories-1306304a.js'
import { u as i } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './Component-bfc56ba9.js'
import './react-tooltip.min-2c7bf4b5.js'
import './index-3ffce462.js'
import './mergeRefs-3b77d02e.js'
const M = '@savosya/savosya-myuikit-input',
  O = '1.0.1',
  I = 'Input',
  D = 'ISC',
  _ = 'index.js',
  X = 'build/esm/index.js',
  H = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  T = { access: 'public', directory: 'build' },
  S = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  $ = {
    '@savosya/savosya-myuikit-hooks': '^1.0.1',
    '@savosya/savosya-myuikit-tooltip': '^1.0.1',
    '@savosya/savosya-myuikit-utils': '^1.0.1',
    clsx: '^1.2.1',
    tslib: '^2.6.2'
  },
  w = '31d48558bb3b557afd22f848178c9f85fed90b38',
  E = {
    name: M,
    version: O,
    description: I,
    license: D,
    main: _,
    module: X,
    peerDependencies: H,
    publishConfig: T,
    scripts: S,
    dependencies: $,
    gitHead: w
  }
function a(e) {
  const t = Object.assign({ h3: 'h3' }, i(), e.components)
  return d(m, {
    children: [
      n(t.h3, { id: 'типы-инпутов', children: 'Типы инпутов' }),
      `
`,
      n(o, { of: g, meta: s }),
      `
`,
      n(t.h3, { id: 'состояния', children: 'Состояния' }),
      `
`,
      n(o, { of: y, meta: s }),
      `
`,
      n(t.h3, { id: 'с-тултипом', children: 'С тултипом' }),
      `
`,
      n(o, { of: v, meta: s }),
      `
`,
      n(t.h3, { id: 'состояния-ошибок', children: 'Состояния ошибок' }),
      `
`,
      n(o, { of: j, meta: s }),
      `
`,
      n(t.h3, { id: 'подсказка', children: 'Подсказка' }),
      `
`,
      n(o, { of: x, meta: s }),
      `
`,
      n(t.h3, { id: 'аддоны', children: 'Аддоны' }),
      `
`,
      n(o, { of: C, meta: s })
    ]
  })
}
function L(e = {}) {
  const { wrapper: t } = Object.assign({}, i(), e.components)
  return t ? n(t, Object.assign({}, e, { children: n(a, e) })) : a(e)
}
function c(e) {
  const t = Object.assign({ pre: 'pre', code: 'code' }, i(), e.components)
  return n(t.pre, {
    children: n(t.code, {
      className: 'language-css',
      children: `:root {
  --input-bg: #fff;
  --input-bg_disabled: #e5e8ed;

  --input-active-blue: #4683c8;

  --input-color: var(--text-primary);
  --input-color_disabled: var(--text-secondary);

  --input-label-color: var(--text-tertiary);
  --input-placeholder-color: var(--text-gray);

  --input-hint-color: var(--text-secondary);
  --input-error-color: var(--text-error-primary);
}
`
    })
  })
}
function A(e = {}) {
  const { wrapper: t } = Object.assign({}, i(), e.components)
  return t ? n(t, Object.assign({}, e, { children: n(c, e) })) : c(e)
}
function p(e) {
  const t = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, i(), e.components)
  return d(m, {
    children: [
      n(u, { title: 'Components/Input', component: k, id: 'Input' }),
      `
`,
      n(b, {
        name: 'Input',
        version: E.version,
        package: '@eubank/kit-input',
        children: n(t.p, { children: 'Поле ввода' })
      }),
      `
`,
      n(t.pre, {
        children: n(t.code, {
          className: 'language-jsx',
          children: `import { Input } from '@eubank/kit-root'
import { Input } from '@eubank/kit-input'
`
        })
      }),
      `
`,
      n(o, Object.assign({ of: r, meta: s }, f)),
      `
`,
      n(h, { docs: n(L, {}), props: n(l, { of: r }), css: n(A, {}) })
    ]
  })
}
function on(e = {}) {
  const { wrapper: t } = Object.assign({}, i(), e.components)
  return t ? n(t, Object.assign({}, e, { children: n(p, e) })) : p(e)
}
export { on as default }
//# sourceMappingURL=docs-5aa7b829.js.map
