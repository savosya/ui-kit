import { j as e, a, F as c } from './jsx-runtime-37f7df21.js'
import { f as m, M as d, h as l } from './index-20fbbb8e.js'
import { C as u } from './css-vars.module-a69f3204.js'
import { s as b, T as f } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { C as h, D as p, a as g, S as r } from './Component.stories-b493934f.js'
import { u as t } from './index-59d6410c.js'
import './iframe-1ac63061.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './CSSMotionList-d86c2cd4.js'
import './index-2d278ef6.js'
import './pickAttrs-be982112.js'
import './Component-723ebd17.js'
import './mergeRefs-dc8f3646.js'
import './Component-856ebfaa.js'
import './tslib.es6-6635c9de.js'
import './Component-8fb68d72.js'
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
//# sourceMappingURL=docs-02ca5cde.js.map