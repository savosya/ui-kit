import { j as e, a, F as c } from './jsx-runtime-276775ef.js'
import { d as m, M as d, f as l } from './index-01c745a6.js'
import { C as u } from './css-vars.module-db4806dd.js'
import { s as b, T as f } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { C as h, D as p, a as g, S as r } from './Component.stories-0c1966c9.js'
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
import './pickAttrs-9695b8fe.js'
import './Component-c0d8cf01.js'
import './mergeRefs-3b77d02e.js'
import './Component-4d843ac5.js'
import './tslib.es6-6635c9de.js'
import './Component-0bcb0322.js'
const C = '@savosya/savosya-myuikit-drawer',
  D = '1.0.1',
  j = 'Drawer',
  w = 'ISC',
  k = 'index.js',
  x = 'build/esm/index.js',
  M = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  v = { access: 'public', directory: 'build' },
  O = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  y = { clsx: '^1.2.1', 'rc-drawer': '^6.5.0', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: C,
    version: D,
    description: j,
    license: w,
    main: k,
    module: x,
    peerDependencies: M,
    publishConfig: v,
    scripts: O,
    dependencies: y,
    gitHead: X
  }
function s(n) {
  const o = Object.assign({ h4: 'h4', h3: 'h3' }, t(), n.components)
  return a(c, {
    children: [
      e(o.h4, {
        id: 'тк-открытие-панели-происходит-за-пределами-компонента-в-обязательном-порядке-нужно-прокинуть-пропсы-open-и-onclose',
        children:
          'Т.к. открытие панели происходит за пределами компонента, в обязательном порядке нужно прокинуть пропсы open и onClose.'
      }),
      `
`,
      e('br', {}),
      `
`,
      e('br', {}),
      `
`,
      e(o.h3, { id: 'кастомизация-панели', children: 'Кастомизация панели' }),
      `
`,
      e(m, { of: h, meta: p })
    ]
  })
}
function _(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(s, n) })) : s(n)
}
function i(n) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, t(), n.components)
  return a(c, {
    children: [
      e(d, { title: 'Components/Drawer', component: g, id: 'Drawer' }),
      `
`,
      e(u, {
        name: 'Drawer',
        version: S.version,
        package: '@eubank/kit-drawer',
        children: e(o.p, { children: 'Выезжающая сайд-панель' })
      }),
      `
`,
      e(o.pre, {
        children: e(o.code, {
          className: 'language-jsx',
          children: `import { Drawer } from '@eubank/kit-root'
import { Drawer } from '@eubank/kit-drawer'
`
        })
      }),
      `
`,
      e(m, Object.assign({ of: r, meta: p }, b)),
      `
`,
      e(f, { docs: e(_, {}), props: e(l, { of: r }) })
    ]
  })
}
function ee(n = {}) {
  const { wrapper: o } = Object.assign({}, t(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(i, n) })) : i(n)
}
export { ee as default }
//# sourceMappingURL=docs-5f6ab9f4.js.map
